# Plano: CMS para o blog (estilo WordPress) com imagens no Cloudflare R2

> Status: **planejado, implementação adiada para o futuro**. Nenhuma mudança de código foi aplicada ainda — este documento é o guia para quando decidirmos retomar.

## Contexto

Hoje o blog é 100% estático: os posts vivem como um array TypeScript hardcoded em `app/data/blog.ts`, e cada novo post ou imagem exige editar o código diretamente (via Claude Code) e revisar/commitar manualmente. O site está configurado com `output: "export"` em `next.config.ts` (export estático puro, sem servidor).

O objetivo é um editor visual estilo WordPress (texto rico + modo HTML clássico + redimensionar/posicionar imagens), simples de manter, com múltiplos usuários (login por e-mail/senha), e imagens hospedadas no Cloudflare R2. Hospedagem: Vercel.

**Achado crítico:** o projeto usa `output: "export"`. Sem remover isso, não é possível ter rotas de API, login (middleware) ou qualquer coisa server-side. Remover é seguro na Vercel — o site continua funcionando normalmente, só passa a rodar com servidor em vez de arquivos estáticos puros (testado: `npm run build` funciona igual sem essa flag).

## Decisão de arquitetura

Em vez de construir login, editor rico, telas de CRUD e upload do zero (muito código pra manter depois), usar **Payload CMS** embutido dentro do próprio app Next.js:

- Roda no mesmo projeto/deploy da Vercel (se integra nativamente ao Next.js App Router — não é um serviço separado).
- Já inclui pronto: autenticação multiusuário (e-mail/senha), editor de texto rico (Lexical) com upload de imagem embutido, telas de admin (listar/criar/editar/excluir posts), e um adaptador oficial de storage S3-compatível que funciona direto com R2.
- Muito menos código customizado pra escrever e manter, comparado a montar login + banco + editor + telas do zero (alternativa considerada e descartada: NextAuth + Drizzle + TipTap + telas de admin feitas à mão).

**Trade-off assumido:** Payload é uma dependência maior que uma solução 100% artesanal, e o editor Lexical padrão do Payload trata redimensionamento de imagem via campo de tamanho/alinhamento (não um "arrastar a alça do canto" livre) — no fundo, isso é o que o próprio WordPress clássico também faz na prática (blocos alinhados/dimensionados, não posicionamento livre em canvas). Se depois quisermos resize por arraste literal, dá pra customizar o node de imagem do Lexical.

## Pré-requisitos (contas externas — só o usuário pode fazer)

### 1. Cloudflare R2 (bucket de imagens)
1. [Dashboard Cloudflare](https://dash.cloudflare.com/) → **R2 Object Storage** → **Create bucket** (ex: `hidrico-blog-media`).
2. **Settings** do bucket → **Public access** → habilitar **R2.dev subdomain** (ou domínio customizado) — gera a URL pública das imagens.
3. **R2** → **Manage API tokens** → **Create API token** → permissão **Object Read & Write**, escopo no bucket. Retorna: **Access Key ID**, **Secret Access Key**. O **Account ID** aparece no canto da página do R2.

Valores necessários: `R2_ACCOUNT_ID`, `R2_ACCESS_KEY_ID`, `R2_SECRET_ACCESS_KEY`, `R2_BUCKET`, `R2_PUBLIC_URL` (domínio público do bucket).

### 2. Neon Postgres (banco de dados)
No dashboard da Vercel, dentro do projeto → aba **Storage** → **Create Database** → **Neon Postgres** (integração nativa, plano free, popula `DATABASE_URL` automaticamente). Alternativa: criar direto em [neon.tech](https://neon.tech) e colar a `DATABASE_URL` manualmente.

## Passo a passo de implementação

### 1. Infraestrutura base
- Remover `output: "export"` de `next.config.ts` (manter `images.unoptimized: true`).
- Adicionar `images.remotePatterns` com o domínio público do bucket R2.

### 2. Instalar e configurar o Payload
- Pacotes: `payload`, `@payloadcms/next`, `@payloadcms/db-postgres`, `@payloadcms/storage-s3`, `@payloadcms/richtext-lexical`.
- `payload.config.ts` na raiz definindo:
  - **Collection `Users`** — `auth: true`, campos `name`, `email`, `role` (admin/editor).
  - **Collection `Media`** — upload habilitado, adapter `@payloadcms/storage-s3` apontando pro endpoint do R2 via env vars `R2_*`.
  - **Collection `Posts`** — `title`, `slug` (auto-gerado, editável), `excerpt`, `category` (select: "Projetos" | "Dicas"), `readTime`, `cover` (relação com `Media`), `content` (richText/Lexical), `publishedDate`.
- Rotas do Payload no App Router: `app/(payload)/admin/[[...segments]]/page.tsx`, `app/(payload)/api/[...slug]/route.ts` (padrão oficial de integração).
- `middleware.ts` protegendo `/admin` via handler de auth do Payload.

### 3. Migrar os 4 posts existentes
- Script único `scripts/migrate-blog-to-payload.ts`: lê `posts` de `app/data/blog.ts`, converte cada `BlogSection[]` pra Lexical richText equivalente (heading → nó de heading; texto com `inlineLinks` → parágrafo com nós de link embutidos; `image` → nó de upload; `items`/`links` → listas), sobe as imagens de `public/assets/CAPA BLOG` e `public/assets/BLOG IMAGENS` pro R2, cria os 4 registros na collection `Posts`.
- Rodar localmente uma vez (`npx tsx scripts/migrate-blog-to-payload.ts`) contra o Neon.
- Após confirmar visualmente a migração, apagar `app/data/blog.ts`, mantendo só as constantes de categoria em `app/data/blog-categories.ts` (CATEGORIES/CATEGORY_COLORS/CATEGORY_BG).

### 4. Atualizar as páginas públicas do blog
- `app/blog/page.tsx`: Server Component buscando posts via `getPayload()`, repassando pra um Client Component `BlogListClient` com a mesma UI/filtro de busca e categoria de hoje (sem mudança visual).
- `app/blog/[slug]/page.tsx`: busca pelo slug via Payload, renderiza `content` (Lexical) com o serializer React oficial (`@payloadcms/richtext-lexical/react`) dentro de um wrapper `.post-content` com CSS replicando o visual atual.

### 5. Segurança e acesso
- Primeiro usuário admin via comando embutido do Payload (nada de rota pública de cadastro aberta).
- Env vars (`.env.local` local + Vercel dashboard): `DATABASE_URL`, `PAYLOAD_SECRET`, `R2_ACCOUNT_ID`, `R2_ACCESS_KEY_ID`, `R2_SECRET_ACCESS_KEY`, `R2_BUCKET`, `R2_PUBLIC_URL`.

## Arquivos principais afetados
- `next.config.ts` (remove export estático, adiciona remotePattern do R2)
- `payload.config.ts` (novo)
- `app/(payload)/admin/[[...segments]]/page.tsx`, `app/(payload)/api/[...slug]/route.ts` (novos)
- `middleware.ts` (novo)
- `app/blog/page.tsx`, `app/blog/[slug]/page.tsx` (passam a buscar do Payload)
- `app/data/blog.ts` → substituído por `app/data/blog-categories.ts`
- `scripts/migrate-blog-to-payload.ts` (novo, script único)

## Verificação
1. `npx tsc --noEmit` e `npm run build` locais após cada etapa grande.
2. `npm run dev`, logar em `/admin`, criar post de teste (negrito, heading, link, upload de imagem), conferir em `/blog/[slug]`.
3. Rodar o script de migração e comparar visualmente os 4 posts migrados com a versão atual (principalmente "O impacto do contrapiso no desempenho do piso" — o mais completo, com imagens, links inline e listas).
4. Confirmar que `/blog` (listagem, busca, filtro por categoria) continua funcionando igual.
5. Deploy de teste na Vercel com env vars configuradas, confirmar login e upload pro R2 em produção.

## Checklist de retomada
- [ ] Bucket R2 criado + credenciais em mãos
- [ ] Neon Postgres provisionado + `DATABASE_URL` em mãos
- [ ] Remover `output: "export"` do `next.config.ts`
- [ ] Instalar e configurar Payload CMS
- [ ] Escrever e rodar script de migração dos 4 posts
- [ ] Atualizar páginas públicas do blog
- [ ] Remover `app/data/blog.ts`
- [ ] Criar primeiro usuário admin
- [ ] Verificação end-to-end + deploy de teste
