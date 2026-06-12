const BASE = "/assets/produtos";

export interface ProductSpec { label: string; value: string }
export interface ProductFeature { title: string; desc: string }
export interface ProductStep { n: string; title: string; desc: string }
export interface RelatedProduct { title: string; tag: string; img: string; slug: string }

export interface Product {
  slug: string;
  title: string;
  tag: string;
  tagColor: string;
  category: string;
  image: string;
  description: string;
  specs: ProductSpec[];
  features: ProductFeature[];
  steps: ProductStep[];
  surfaces: string[];
  fichaTecnica?: string;
  video?: string;
  related: RelatedProduct[];
}

export const products: Product[] = [
  {
    slug: "fabcol-cola-para-pisos-de-madeira-pu-606",
    title: "FabCol PU 606",
    tag: "Alto Desempenho",
    tagColor: "#007800",
    category: "Colagem de Pisos de Madeira",
    image: `${BASE}/b2143404f2019a7f475eeaace8e76131-4.png`,
    fichaTecnica: "/assets/fabcol-pu-606-boletim-tecnico-rev0523.pdf",
    description:
      "Adesivo poliuretânico bicomponente de alto desempenho para instalação de pisos de madeira internos. Fácil aplicação, secagem rápida e resistência superior.",
    specs: [
      { label: "Tipo", value: "Poliuretânico bicomponente" },
      { label: "Aplicação", value: "Somente em áreas internas" },
      { label: "Mistura", value: "Com catalisador (~1 min)" },
      { label: "Resistência", value: "Alta" },
      { label: "Secagem", value: "Rápida" },
      { label: "Resistência à umidade", value: "Alta" },
    ],
    features: [
      { title: "Fácil aplicação", desc: "Espátula dentada a 90° para distribuição rápida e uniforme." },
      { title: "Alta resistência", desc: "Suporta desgaste, umidade e impacto no dia a dia." },
      { title: "Secagem rápida", desc: "Reduz o tempo de obra e permite tráfego em menos tempo." },
      { title: "Alto poder de adesão", desc: "Previne descolamento e garante estabilidade ao piso." },
      { title: "Proteção duradoura", desc: "Protege contra desgaste, umidade e impactos ao longo do tempo." },
      { title: "Para uso interno", desc: "Formulado especialmente para ambientes internos com alta performance." },
    ],
    steps: [
      { n: "01", title: "Preparação da superfície", desc: "Garanta que o contrapiso esteja limpo, seco e nivelado." },
      { n: "02", title: "Mistura", desc: "Misture o adesivo com o catalisador por aproximadamente 1 minuto." },
      { n: "03", title: "Aplicação", desc: "Aplique com espátula dentada a 90° para garantir distribuição uniforme." },
      { n: "04", title: "Assentamento", desc: "Pressione as tábuas de madeira e ajuste o posicionamento." },
      { n: "05", title: "Cura", desc: "Aguarde o tempo indicado antes de liberar o tráfego na área." },
    ],
    surfaces: ["Concreto", "Contrapiso cimentício", "Madeira"],
    related: [
      { title: "FabCol Fusion XT", tag: "Lançamento 2026", img: `${BASE}/1d75df36011faa86215a5b9753553542-15.png`, slug: "fabcol-fusion-xt" },
      { title: "FabCol Cola para Pisos de Madeira PU 604", tag: "Alta Resistência", img: `${BASE}/5db05631849acb911bd0f8edba01a39d-3.png`, slug: "fabcol-cola-para-pisos-de-madeira-pu-604" },
    ],
  },
  {
    slug: "fabcol-fusion-xt",
    title: "FabCol Fusion XT",
    tag: "Lançamento 2026",
    tagColor: "#d97706",
    category: "Colagem de Pisos de Madeira",
    image: `${BASE}/1d75df36011faa86215a5b9753553542-15.png`,
    description:
      "Adesivo estrutural bicomponente à base de poliuretano de última geração para colagem de pisos de madeira. Tempo de trabalho superior a 30 min, sem odor e não inflamável.",
    specs: [
      { label: "Tipo", value: "Poliuretânico bicomponente estrutural" },
      { label: "Mistura", value: "Comp. B inteiro em Comp. A" },
      { label: "Tráfego leve", value: "A partir de 3 horas" },
      { label: "Cura total / lixamento", value: "48 horas" },
      { label: "Consumo (liso)", value: "1,0 – 1,4 kg/m²" },
      { label: "Consumo (rugoso/poroso)", value: "1,4 – 2,2 kg/m²" },
      { label: "Emissão de VOC", value: "Muito baixa" },
      { label: "Inflamável", value: "Não" },
    ],
    features: [
      { title: "Tempo de trabalho > 30 min", desc: "Margem ampla para ajustes e reposicionamento após a aplicação." },
      { title: "Resistência mecânica superior", desc: "Alta performance em tração e compressão para máxima durabilidade." },
      { title: "Impermeável", desc: "Resistente à água e à hidrólise após cura completa." },
      { title: "Baixíssimo VOC · sem odor", desc: "Seguro para aplicação em ambientes fechados e residências ocupadas." },
      { title: "Não inflamável", desc: "Maior segurança durante o processo de instalação." },
      { title: "Substrato quente", desc: "Aplicável mesmo em substratos com temperatura elevada." },
    ],
    steps: [
      { n: "01", title: "Preparação da superfície", desc: "Superfície limpa, seca e isenta de resíduos. Umidade máxima conforme boletim técnico." },
      { n: "02", title: "Mistura dos componentes", desc: "Despeje o Componente B inteiro sobre o Componente A e misture até homogeneizar." },
      { n: "03", title: "Aplicação com desempenadeira", desc: "Aplique com desempenadeira dentada para cobertura uniforme no contrapiso." },
      { n: "04", title: "Assentamento", desc: "Posicione as tábuas com firmeza. Tempo de trabalho superior a 30 min permite ajustes." },
      { n: "05", title: "Cura", desc: "Tráfego leve após 3 h. Aguarde 48 h para lixamento e mobiliário." },
    ],
    surfaces: ["Concreto", "Contrapiso cimentício", "Madeira", "Substratos diversos"],
    related: [
      { title: "FabCol Cola para Pisos de Madeira PU 606", tag: "Alto Desempenho", img: `${BASE}/b2143404f2019a7f475eeaace8e76131-4.png`, slug: "fabcol-cola-para-pisos-de-madeira-pu-606" },
      { title: "FabCol MS H410", tag: "MS Polímero", img: `${BASE}/d1b51e7d527ab98de07290b7b187848d-16.png`, slug: "fabcol-ms-h410" },
    ],
  },
  {
    slug: "fabcol-super-cola-para-rodape",
    title: "FabCol Super Rodapé",
    tag: "Super Cola",
    tagColor: "#007800",
    category: "Colagem de Rodapés",
    image: `${BASE}/0a96e274f217d6a71b610290efe8472f-9.png`,
    description:
      "Adesivo especializado para instalação de rodapés e frisos. Fixação segura e duradoura que previne descolamentos com processo de aplicação simples.",
    specs: [
      { label: "Tipo", value: "Adesivo para rodapés e frisos" },
      { label: "Secagem", value: "Rápida" },
      { label: "Emissão de VOC", value: "Baixa" },
      { label: "Aplicação", value: "Direta no verso do rodapé" },
    ],
    features: [
      { title: "Fixação segura e duradoura", desc: "Adesão firme que previne descolamentos ao longo do tempo." },
      { title: "Estabilidade do rodapé", desc: "Mantém o rodapé firme mesmo sob variações térmicas e umidade." },
      { title: "Aplicação simples", desc: "Processo direto sem necessidade de equipamentos especiais." },
      { title: "Secagem rápida", desc: "Retorna a área ao uso em pouco tempo." },
      { title: "Baixo VOC", desc: "Formulação segura para ambientes internos." },
    ],
    steps: [
      { n: "01", title: "Preparação", desc: "Certifique-se de que a parede e o verso do rodapé estão limpos e secos." },
      { n: "02", title: "Aplicação do adesivo", desc: "Aplique o adesivo uniformemente no verso do rodapé." },
      { n: "03", title: "Fixação", desc: "Pressione o rodapé com firmeza contra a parede garantindo contato total." },
      { n: "04", title: "Cura", desc: "Aguarde o tempo de secagem indicado antes de pintar ou acabar." },
    ],
    surfaces: ["Parede de alvenaria", "Drywall", "MDF", "Madeira", "Concreto"],
    related: [
      { title: "FabCol PVA", tag: "PVA", img: `${BASE}/abbd981f033e926e1507b68d4d9a5337-10.png`, slug: "fabcol-cola-branca-pva" },
      { title: "FabMell P51", tag: "Massa Acrílica", img: `${BASE}/f460d9420f163c384572d4c15aaa3f18-11.png`, slug: "fabmell-massa-acrilica-para-madeira-p51" },
    ],
  },
  {
    slug: "fabcol-cola-para-grama-sintetica",
    title: "FabCol FabCol PU Grama Sintética",
    tag: "Cola PU",
    tagColor: "#007800",
    category: "FabCol PU Grama Sintética",
    image: `${BASE}/3fad2454102a29721d08dc9b58cde0dd-12.png`,
    description:
      "Adesivo poliuretânico bicomponente desenvolvido para fixação de tapetes de grama sintética em áreas esportivas e paisagísticas. Alta resistência mecânica e estabilidade dimensional.",
    specs: [
      { label: "Tipo", value: "Poliuretânico bicomponente" },
      { label: "Tempo de mistura", value: "3 – 5 minutos" },
      { label: "Temperatura de operação", value: "Até 80 °C" },
      { label: "Emissão de VOC", value: "Baixíssima · sem odor" },
      { label: "Resistência à água", value: "Impermeável e à hidrólise" },
    ],
    features: [
      { title: "Alta aderência", desc: "Fixação superior do tapete de grama sintética ao substrato." },
      { title: "Resistência mecânica", desc: "Suporta tração e compressão em uso intenso esportivo e paisagístico." },
      { title: "Impermeável", desc: "Resiste à água e à hidrólise para uso em áreas externas." },
      { title: "Funcional até 80 °C", desc: "Mantém performance em substratos aquecidos pelo sol." },
      { title: "Sem odor · Baixo VOC", desc: "Aplicação segura em áreas abertas e fechadas." },
      { title: "Indoor e outdoor", desc: "Indicado para quadras esportivas, jardins e áreas de lazer." },
    ],
    steps: [
      { n: "01", title: "Preparação da superfície", desc: "Limpe e seque bem a superfície. Remova poeira, gordura e resíduos soltos." },
      { n: "02", title: "Mistura dos componentes", desc: "Misture os Componentes A e B por 3 a 5 minutos até homogeneizar completamente." },
      { n: "03", title: "Aplicação", desc: "Aplique com espátula dentada a 90° para cobertura uniforme." },
      { n: "04", title: "Assentamento da grama", desc: "Pressione o tapete de grama com firmeza para garantir adesão total." },
      { n: "05", title: "Cura", desc: "Aguarde o tempo de cura antes de liberar a área para uso." },
    ],
    surfaces: ["Concreto", "Asfalto", "Borracha", "Substrato esportivo"],
    related: [
      { title: "FabCol Fusion XT", tag: "Lançamento 2026", img: `${BASE}/1d75df36011faa86215a5b9753553542-15.png`, slug: "fabcol-fusion-xt" },
      { title: "FabFlex 700", tag: "Contrapiso", img: `${BASE}/ea27556fae4c71df9dbf0489e149c327-2.png`, slug: "fabflex-impermeabilizante-de-contrapiso" },
    ],
  },
  {
    slug: "fabcol-cola-para-piso-sobre-piso-pu-pp",
    title: "FabCol PU PP",
    tag: "Piso sobre Piso",
    tagColor: "#007800",
    category: "Colagem de Pisos de Madeira",
    image: `${BASE}/ed5f023e7121f0d2c2dab31402e2edc2-5.png`,
    fichaTecnica: "/assets/fabcol-pu-pp-boletim-tecnico-rev0523.pdf",
    description:
      "Adesivo estrutural bicomponente com promotores de adesão química para instalação de pisos de madeira sobre pisos existentes, sem necessidade de demolição.",
    specs: [
      { label: "Tipo", value: "PU bicomponente estrutural c/ promotores" },
      { label: "Tráfego liberado", value: "Mínimo 8 horas" },
      { label: "Conteúdo de VOC", value: "Zero" },
      { label: "Sólidos", value: "100%" },
      { label: "Contato mínimo", value: "90% entre peça e adesivo" },
      { label: "Umidade máxima", value: "30% — acima consultar técnico" },
      { label: "Inflamável", value: "Não" },
    ],
    features: [
      { title: "Sem demolição", desc: "Instale pisos de madeira diretamente sobre cerâmica, granito, porcelanato e outros." },
      { title: "Alta resist. à umidade", desc: "Mantém a colagem íntegra mesmo em ambientes com umidade elevada." },
      { title: "Resist. mecânica excepcional", desc: "Suporta altas cargas e uso intenso em ambientes comerciais e residenciais." },
      { title: "Zero VOC · não inflamável", desc: "Formulação 100% segura para instalação em ambientes ocupados." },
      { title: "100% sólidos", desc: "Sem retração, mantém espessura de cola sem perda de material." },
      { title: "Cura rápida", desc: "Tráfego liberado em apenas 8 horas após a instalação." },
    ],
    steps: [
      { n: "01", title: "Preparação do piso existente", desc: "Limpe e seque o piso existente. Remova ceras, graxas e resíduos de limpeza." },
      { n: "02", title: "Mistura", desc: "Misture os componentes A e B conforme indicação do boletim técnico." },
      { n: "03", title: "Aplicação", desc: "Aplique com desempenadeira dentada sobre o piso existente." },
      { n: "04", title: "Assentamento", desc: "Posicione as tábuas garantindo mínimo 90% de contato com o adesivo." },
      { n: "05", title: "Remoção de excessos e cura", desc: "Remova excessos imediatamente. Libere para tráfego após 8 horas." },
    ],
    surfaces: ["Cerâmica", "Mármore", "Granito", "Pedra natural", "Porcelanato", "Metal", "Vidro", "Concreto polido"],
    related: [
      { title: "FabCol PU 780 SV", tag: "Fixação Vertical", img: `${BASE}/ef671627207b666f02def555305046ba-6.png`, slug: "fabcol-fixacao-vertical-pu-780-sv" },
      { title: "FabFlex Primer Epóxi", tag: "Primer Epóxi", img: `${BASE}/2bd6f196ae588abe7f79e0a2a9ffa340-7.png`, slug: "fabflex-impermeabilizante-de-contrapiso-primer-epoxi" },
    ],
  },
  {
    slug: "fabcol-fixacao-vertical-pu-780-sv",
    title: "FabCol PU 780 SV",
    tag: "Fixação Vertical",
    tagColor: "#007800",
    category: "Colagem de Pisos de Madeira",
    image: `${BASE}/ef671627207b666f02def555305046ba-6.png`,
    fichaTecnica: "/assets/fabcol-pu-780-sv-boletim-tecnico--rev0523.pdf",
    description:
      "Adesivo estrutural bicomponente de poliuretano de alta viscosidade para fixação em superfícies verticais: paredes, painéis cimentícios, metais, madeira, cerâmica e mármore.",
    specs: [
      { label: "Tipo", value: "PU bicomponente alta viscosidade" },
      { label: "Mistura", value: "Comp. B inteiro em Comp. A (3 – 5 min)" },
      { label: "Contato mínimo", value: "70% entre material e adesivo" },
      { label: "Umidade máxima", value: "30%" },
      { label: "Ajuste pós-instalação", value: "Até 30 minutos" },
      { label: "Conteúdo de VOC", value: "Zero" },
      { label: "Inflamável", value: "Não" },
      { label: "Sólidos", value: "100%" },
    ],
    features: [
      { title: "Alta resistência à umidade", desc: "Colagem firme mesmo em paredes e painéis expostos à umidade." },
      { title: "Resistência mecânica excepcional", desc: "Ideal para revestimentos pesados em superfícies verticais." },
      { title: "Ajuste de até 30 min", desc: "Permite reposicionamento e correções após a aplicação sem perda de aderência." },
      { title: "Alta viscosidade", desc: "Não escorrega em superfícies verticais durante a aplicação e cura." },
      { title: "Zero VOC · não inflamável", desc: "Aplicação segura em ambientes fechados ou com ventilação limitada." },
      { title: "100% sólidos", desc: "Sem retração e sem perda de volume após a cura." },
    ],
    steps: [
      { n: "01", title: "Verificação da superfície", desc: "Garanta que a superfície está limpa, seca e com umidade abaixo de 30%." },
      { n: "02", title: "Mistura", desc: "Despeje o Componente B inteiro no Componente A. Misture com bastão plástico por 3 a 5 minutos." },
      { n: "03", title: "Aplicação", desc: "Aplique com espátula dentada de forma uniforme na superfície." },
      { n: "04", title: "Fixação", desc: "Pressione o material com firmeza contra o substrato." },
      { n: "05", title: "Ajuste e cura", desc: "Faça ajustes de posicionamento em até 30 min. Aguarde cura completa." },
    ],
    surfaces: ["Paredes", "Painéis cimentícios", "Metais", "Madeira", "Ladrilhos de vidro", "Fibra de vidro", "Cerâmica", "Mármore"],
    related: [
      { title: "FabCol Cola para Piso sobre Piso PU PP", tag: "Piso sobre Piso", img: `${BASE}/ed5f023e7121f0d2c2dab31402e2edc2-5.png`, slug: "fabcol-cola-para-piso-sobre-piso-pu-pp" },
      { title: "FabCol Fusion XT", tag: "Lançamento 2026", img: `${BASE}/1d75df36011faa86215a5b9753553542-15.png`, slug: "fabcol-fusion-xt" },
    ],
  },
  {
    slug: "fabcol-ms-h410",
    title: "FabCol MS H410",
    tag: "LANÇAMENTO 2026",
    tagColor: "#007800",
    category: "Colagem de Pisos de Madeira",
    image: `${BASE}/d1b51e7d527ab98de07290b7b187848d-16.png`,
    description:
      "Selante adesivo monocomponente à base de polímero MS para pisos de madeira. Pronto para uso, elástico, sem solventes, sem isocianatos e sem odor.",
    specs: [
      { label: "Tipo", value: "Monocomponente MS polímero" },
      { label: "Tráfego leve", value: "Mínimo 48 horas" },
      { label: "Cargas pesadas", value: "72 horas" },
      { label: "Solventes", value: "Sem" },
      { label: "Isocianatos", value: "Sem" },
      { label: "Retração", value: "Sem" },
      { label: "Emissão de VOC", value: "Baixa / ausente" },
    ],
    features: [
      { title: "Pronto para uso", desc: "Monocomponente — sem mistura, sem desperdício, aplicação imediata." },
      { title: "Alta durabilidade", desc: "Estabilidade de longo prazo mesmo sob uso intenso." },
      { title: "Elástico", desc: "Absorve tensões do substrato sem quebrar a colagem." },
      { title: "Sem solventes · sem isocianatos", desc: "Formulação segura, sem risco de reações alérgicas comuns." },
      { title: "Sem retração", desc: "Mantém espessura de cola após cura, sem perda de volume." },
      { title: "Sem manchas", desc: "Formulação sem óleo — não mancha a madeira ou o substrato." },
    ],
    steps: [
      { n: "01", title: "Preparação da superfície", desc: "Certifique-se de que o substrato está limpo, seco e livre de poeira, óleo ou graxa." },
      { n: "02", title: "Lixamento (se necessário)", desc: "Lixe levemente a superfície para melhorar a aderência quando necessário." },
      { n: "03", title: "Aplicação", desc: "Aplique com aplicador manual ou pneumático na espessura recomendada." },
      { n: "04", title: "Assentamento", desc: "Posicione as tábuas e pressione para garantir cobertura adequada." },
      { n: "05", title: "Cura", desc: "Aguarde 48 h para tráfego leve e 72 h para cargas pesadas." },
    ],
    surfaces: ["Concreto", "Contrapiso cimentício", "Madeira", "Metais"],
    related: [
      { title: "FabCol Fusion XT", tag: "Lançamento 2026", img: `${BASE}/1d75df36011faa86215a5b9753553542-15.png`, slug: "fabcol-fusion-xt" },
      { title: "FabCol Cola para Pisos de Madeira PU 606", tag: "Alto Desempenho", img: `${BASE}/b2143404f2019a7f475eeaace8e76131-4.png`, slug: "fabcol-cola-para-pisos-de-madeira-pu-606" },
    ],
  },
  {
    slug: "fabflex-impermeabilizante-de-contrapiso-primer-epoxi",
    title: "FabFlex Primer Epóxi",
    tag: "Bicompontente para Contrapisos",
    tagColor: "#007800",
    category: "Impermeabilizantes",
    image: `${BASE}/2bd6f196ae588abe7f79e0a2a9ffa340-7.png`,
    fichaTecnica: "/assets/fabflex-primer-epoxi-boletim-tecnico-rev-1224.pdf",
    description:
      "Primer impermeabilizante bicomponente à base de resina epóxi de baixa viscosidade para proteção de contrapisos novos e envelhecidos contra umidade.",
    specs: [
      { label: "Tipo", value: "Bicomponente epóxi baixa viscosidade" },
      { label: "Métodos de aplicação", value: "Rolo, pincel ou espátula" },
      { label: "Temperatura de operação", value: "-10 °C a 80 °C" },
      { label: "Solventes", value: "Sem" },
      { label: "Resist. química", value: "Óleos, graxas e produtos químicos" },
      { label: "Microorganismos", value: "Resistente" },
    ],
    features: [
      { title: "Fácil aplicação", desc: "Pode ser aplicado com rolo, pincel ou espátula, sem equipamento especial." },
      { title: "Secagem rápida", desc: "Permite continuidade da obra com menor tempo de espera." },
      { title: "Excelente aderência", desc: "Alta adesão em concreto, argamassa, madeira, pedra, cerâmica e metais." },
      { title: "Impermeável", desc: "Barreira eficiente contra a passagem de umidade pelo contrapiso." },
      { title: "Resistência química", desc: "Suporta contato com óleos, graxas e produtos químicos." },
      { title: "Faixa térmica ampla", desc: "Funciona de -10 °C a 80 °C, para diversas condições de obra." },
    ],
    steps: [
      { n: "01", title: "Preparação do substrato", desc: "Limpe o contrapiso, removendo poeira, óleos e partes soltas." },
      { n: "02", title: "Mistura dos componentes", desc: "Misture os componentes A e B conforme proporção indicada no boletim técnico." },
      { n: "03", title: "Aplicação", desc: "Aplique com rolo, pincel ou espátula em camada uniforme sobre o contrapiso." },
      { n: "04", title: "Secagem", desc: "Aguarde a secagem completa antes de aplicar o adesivo de piso." },
    ],
    surfaces: ["Concreto", "Argamassa", "Madeira", "Pedra", "Cerâmica", "Metais"],
    related: [
      { title: "FabFlex 700", tag: "Contrapiso", img: `${BASE}/ea27556fae4c71df9dbf0489e149c327-2.png`, slug: "fabflex-impermeabilizante-de-contrapiso" },
      { title: "FabFlex Safe Deck", tag: "Proteção para Madeira", img: `${BASE}/6710793c5670e37391f570d40dbe7496-8.png`, slug: "fabflex-impermeabilizante-para-madeira-safe-deck" },
      { title: "FabFix", tag: "Aditivo Cimentício", img: `${BASE}/27b021d5fa9c60e91d9cefa058470993-1.png`, slug: "fabfix-aditivo-para-contrapiso-cimenticio" },
    ],
  },
  {
    slug: "fabflex-impermeabilizante-para-madeira-safe-deck",
    title: "FabFlex Safe Deck",
    tag: "Proteção para Madeira",
    tagColor: "#007800",
    category: "Impermeabilizantes",
    image: `${BASE}/6710793c5670e37391f570d40dbe7496-8.png`,
    fichaTecnica: "/assets/fabflex-safe-deck-boletim-tecnico-rev0823.pdf",
    description:
      "Revestimento impermeabilizante elástico monocomponente para proteção de decks e superfícies de madeira contra umidade e intempéries. Forma uma membrana impermeável e aderente.",
    specs: [
      { label: "Tipo", value: "Monocomponente elástico" },
      { label: "Métodos de aplicação", value: "Rolo, pincel ou airless" },
      { label: "Umidade máxima", value: "30%" },
      { label: "Temperatura de armazenamento", value: "Abaixo de 25 °C" },
      { label: "Inflamável", value: "Não" },
      { label: "Solventes", value: "Sem" },
    ],
    features: [
      { title: "Impermeabilidade excepcional", desc: "Membrana impermeável que bloqueia completamente a passagem de água." },
      { title: "Elástico — sela fissuras dinâmicas", desc: "Não quebra com movimentação da madeira, vedando fissuras que aparecem com o tempo." },
      { title: "Não inflamável", desc: "Seguro para aplicação e armazenamento em qualquer ambiente." },
      { title: "Resistência térmica", desc: "Recupera elasticidade e resiste a variações térmicas ao longo das estações." },
      { title: "Super aderência em madeira", desc: "Adesão superior às superfícies de madeira, sem lascamento ou descamação." },
      { title: "Sistema monolítico", desc: "Aplicação contínua sem emendas ou pontos de vulnerabilidade." },
    ],
    steps: [
      { n: "01", title: "Verificação da umidade", desc: "Confirme que a superfície de madeira está com umidade abaixo de 30%." },
      { n: "02", title: "Limpeza", desc: "Limpe a madeira, removendo poeira, tinta solta e resíduos." },
      { n: "03", title: "Aplicação (1ª demão)", desc: "Aplique a primeira demão com rolo, pincel ou equipamento airless." },
      { n: "04", title: "Secagem entre demãos", desc: "Aguarde secagem completa antes de aplicar a demão seguinte." },
      { n: "05", title: "Demão final e cura", desc: "Aplique a última demão e aguarde cura completa antes de expor à chuva." },
    ],
    surfaces: ["Decks de madeira", "Superfícies de madeira externas", "Madeira tratada"],
    related: [
      { title: "FabFlex Primer Epóxi", tag: "Primer Epóxi", img: `${BASE}/2bd6f196ae588abe7f79e0a2a9ffa340-7.png`, slug: "fabflex-impermeabilizante-de-contrapiso-primer-epoxi" },
      { title: "FabFlex 700", tag: "Contrapiso", img: `${BASE}/ea27556fae4c71df9dbf0489e149c327-2.png`, slug: "fabflex-impermeabilizante-de-contrapiso" },
      { title: "FabMell P51", tag: "Massa Acrílica", img: `${BASE}/f460d9420f163c384572d4c15aaa3f18-11.png`, slug: "fabmell-massa-acrilica-para-madeira-p51" },
    ],
  },
  {
    slug: "fabmell-massa-acrilica-para-madeira-p51",
    title: "FabMell P51",
    tag: "Massa Acrílica",
    tagColor: "#007800",
    category: "Calafetos",
    image: `${BASE}/f460d9420f163c384572d4c15aaa3f18-11.png`,
    description:
      "Massa acrílica para reparo de superfícies de madeira e preenchimento de juntas de pisos. Formulada com emulsão acrílica de alta qualidade. Sem odor, fácil lixamento e múltiplas cores disponíveis.",
    specs: [
      { label: "Tipo", value: "Massa acrílica base água" },
      { label: "Odor", value: "Sem odor · sem vapores tóxicos" },
      { label: "Lixamento", value: "Fácil após secagem" },
      { label: "Cores disponíveis", value: "Múltiplas" },
      { label: "Diluição (excesso)", value: "Água (fase pastosa)" },
    ],
    features: [
      { title: "Fácil aplicação", desc: "Espátula direta para reparo e preenchimento de juntas." },
      { title: "Fácil lixamento", desc: "Permite acabamento fino e uniforme após a secagem." },
      { title: "Sem odor", desc: "Formulação aquosa sem vapores tóxicos, segura para uso interno." },
      { title: "Múltiplas cores", desc: "Disponível em diversas tonalidades para combinar com o piso." },
      { title: "Forte aderência", desc: "Alta adesão à madeira, sem descolamentos ao longo do tempo." },
      { title: "Protege contra desgaste", desc: "Resiste a umidade, desgaste e impactos no dia a dia." },
    ],
    steps: [
      { n: "01", title: "Limpeza da área", desc: "Remova resíduos soltos, poeira e gordura da junta ou área a reparar." },
      { n: "02", title: "Aplicação com espátula", desc: "Aplique a massa em camadas finas com espátula, preenchendo completamente a junta." },
      { n: "03", title: "Secagem", desc: "Aguarde a secagem completa. Camadas adicionais podem ser necessárias." },
      { n: "04", title: "Lixamento e acabamento", desc: "Lixe suavemente até nivelar com a superfície do piso." },
    ],
    surfaces: ["Pisos de madeira", "Tábuas e tacos", "Madeira em geral"],
    related: [
      { title: "FabFlex Safe Deck", tag: "Proteção para Madeira", img: `${BASE}/6710793c5670e37391f570d40dbe7496-8.png`, slug: "fabflex-impermeabilizante-para-madeira-safe-deck" },
      { title: "FabCol Super Rodapé", tag: "Super Cola", img: `${BASE}/0a96e274f217d6a71b610290efe8472f-9.png`, slug: "fabcol-super-cola-para-rodape" },
      { title: "FabCol PVA", tag: "PVA", img: `${BASE}/abbd981f033e926e1507b68d4d9a5337-10.png`, slug: "fabcol-cola-branca-pva" },
    ],
  },
  {
    slug: "fabcol-cola-para-pisos-de-madeira-pu-604",
    title: "FabCol PU 604",
    tag: "Alta Resistência",
    tagColor: "#007800",
    category: "Colagem de Pisos de Madeira",
    image: `${BASE}/5db05631849acb911bd0f8edba01a39d-3.png`,
    fichaTecnica: "/assets/fabcol-pu-604-boletim-tecnico-rev0523.pdf",
    description:
      "Adesivo poliuretânico bicomponente de alta resistência para instalação de pisos de madeira. Baixo teor de VOC, cura rápida e fácil aplicação com espátula dentada.",
    specs: [
      { label: "Tipo", value: "Poliuretânico bicomponente" },
      { label: "Mistura", value: "Com catalisador (~1 min)" },
      { label: "Aplicação", value: "Espátula dentada a 90°" },
      { label: "Resistência", value: "Alta" },
      { label: "Secagem", value: "Rápida" },
      { label: "Emissão de VOC", value: "Baixa" },
    ],
    features: [
      { title: "Alta resistência e aderência", desc: "Garantia de colagem firme e duradoura para pisos de madeira." },
      { title: "Estabilidade do piso", desc: "Previne deformações, estalo e descolamento das tábuas." },
      { title: "Fácil aplicação", desc: "Espátula dentada a 90° para cobertura uniforme e rápida." },
      { title: "Secagem rápida", desc: "Menor tempo de obra e liberação do tráfego mais ágil." },
      { title: "Baixo VOC", desc: "Menor impacto ao ambiente e mais segurança para os aplicadores." },
    ],
    steps: [
      { n: "01", title: "Preparação", desc: "Contrapiso limpo, seco e livre de resíduos e poeira." },
      { n: "02", title: "Mistura", desc: "Misture o adesivo com o catalisador por cerca de 1 minuto." },
      { n: "03", title: "Aplicação", desc: "Aplique com espátula dentada a 90° para distribuição uniforme." },
      { n: "04", title: "Assentamento", desc: "Posicione e pressione as tábuas de madeira firmemente." },
      { n: "05", title: "Cura", desc: "Respeite o tempo de cura antes de liberar para tráfego." },
    ],
    surfaces: ["Concreto", "Contrapiso cimentício", "Madeira"],
    related: [
      { title: "FabCol Cola para Pisos de Madeira PU 606", tag: "Alto Desempenho", img: `${BASE}/b2143404f2019a7f475eeaace8e76131-4.png`, slug: "fabcol-cola-para-pisos-de-madeira-pu-606" },
      { title: "FabCol Fusion XT", tag: "Lançamento 2026", img: `${BASE}/1d75df36011faa86215a5b9753553542-15.png`, slug: "fabcol-fusion-xt" },
    ],
  },
  {
    slug: "fabflex-impermeabilizante-de-contrapiso",
    title: "FabFlex 700",
    tag: "Impermeabilizante para Contrapiso",
    tagColor: "#007800",
    category: "Impermeabilizantes",
    image: `${BASE}/ea27556fae4c71df9dbf0489e149c327-2.png`,
    fichaTecnica: "/assets/fabflex-700-boletim-tecnico-rev0523.pdf",
    description:
      "Impermeabilizante para contrapisos que protege contra umidade e garante a durabilidade do piso. Secagem rápida e compatível com múltiplos tipos de revestimento.",
    specs: [
      { label: "Tipo", value: "Impermeabilizante para contrapiso" },
      { label: "Secagem", value: "Rápida" },
      { label: "Área de aplicação", value: "Interior" },
      { label: "Resistência à umidade", value: "Alta" },
      { label: "Compatibilidade", value: "Múltiplos revestimentos" },
    ],
    features: [
      { title: "Fácil aplicação", desc: "Processo simples sem necessidade de equipamentos especializados." },
      { title: "Secagem rápida", desc: "Reduz o tempo de espera entre etapas da obra." },
      { title: "Alta resist. à umidade", desc: "Barreira eficaz contra umidade ascendente no contrapiso." },
      { title: "Compatível com múltiplos revestimentos", desc: "Pode receber pisos de madeira, cerâmica, porcelanato e outros." },
      { title: "Para áreas internas", desc: "Formulado para ambientes internos com excelente performance." },
    ],
    steps: [
      { n: "01", title: "Preparação do contrapiso", desc: "Limpe o contrapiso, removendo poeira e materiais soltos." },
      { n: "02", title: "Aplicação", desc: "Aplique o impermeabilizante com rolo ou pincel em camada uniforme." },
      { n: "03", title: "Secagem", desc: "Aguarde a secagem completa conforme indicação do boletim técnico." },
      { n: "04", title: "Instalação do revestimento", desc: "Prossiga com a instalação do piso ou revestimento desejado." },
    ],
    surfaces: ["Contrapiso cimentício", "Concreto"],
    related: [
      { title: "FabFlex Primer Epóxi", tag: "Primer Epóxi", img: `${BASE}/2bd6f196ae588abe7f79e0a2a9ffa340-7.png`, slug: "fabflex-impermeabilizante-de-contrapiso-primer-epoxi" },
      { title: "FabFix", tag: "Aditivo Cimentício", img: `${BASE}/27b021d5fa9c60e91d9cefa058470993-1.png`, slug: "fabfix-aditivo-para-contrapiso-cimenticio" },
      { title: "FabFlex Safe Deck", tag: "Proteção para Madeira", img: `${BASE}/6710793c5670e37391f570d40dbe7496-8.png`, slug: "fabflex-impermeabilizante-para-madeira-safe-deck" },
    ],
  },
  {
    slug: "fabfix-aditivo-para-contrapiso-cimenticio",
    title: "FabFix",
    tag: "Aditivo Cimentício",
    tagColor: "#007800",
    category: "Aditivos para Contra Pisos",
    image: `${BASE}/27b021d5fa9c60e91d9cefa058470993-1.png`,
    fichaTecnica: "/assets/fabfix-500-boletim-tecnico-rev0523.pdf",
    description:
      "Aditivo para melhoria de contrapisos cimentícios com maior aderência, durabilidade e facilidade de aplicação. Mistura direta no contrapiso — sem etapa adicional de obra.",
    specs: [
      { label: "Tipo", value: "Aditivo para contrapiso cimentício" },
      { label: "Modo de uso", value: "Mistura direta durante preparo" },
      { label: "Mão de obra adicional", value: "Não necessária" },
    ],
    features: [
      { title: "Melhora a aderência", desc: "Aumenta a adesão entre contrapiso e revestimento final." },
      { title: "Previne delaminação", desc: "Evita descolamentos e desníveis ao longo do tempo." },
      { title: "Mistura direta", desc: "Incorporado durante o preparo do contrapiso, sem etapa adicional de obra." },
      { title: "Aumenta dureza", desc: "Contrapiso mais resistente ao desgaste e a cargas concentradas." },
      { title: "Superfície de alta qualidade", desc: "Resultado final mais uniforme e resistente para receber qualquer revestimento." },
      { title: "Testado em campo", desc: "Performance comprovada em laboratório e em obras reais." },
    ],
    steps: [
      { n: "01", title: "Preparo do contrapiso", desc: "Prepare a argamassa cimentícia conforme proporção habitual." },
      { n: "02", title: "Adição do FabFix", desc: "Adicione o FabFix diretamente à mistura durante o preparo, conforme dosagem do boletim técnico." },
      { n: "03", title: "Homogeneização", desc: "Misture bem até incorporação completa do aditivo na argamassa." },
      { n: "04", title: "Aplicação do contrapiso", desc: "Aplique e nivele o contrapiso normalmente. O aditivo já está incorporado." },
    ],
    surfaces: ["Contrapiso cimentício", "Argamassa cimentícia"],
    related: [
      { title: "FabFlex 700", tag: "Contrapiso", img: `${BASE}/ea27556fae4c71df9dbf0489e149c327-2.png`, slug: "fabflex-impermeabilizante-de-contrapiso" },
      { title: "FabFlex Primer Epóxi", tag: "Primer Epóxi", img: `${BASE}/2bd6f196ae588abe7f79e0a2a9ffa340-7.png`, slug: "fabflex-impermeabilizante-de-contrapiso-primer-epoxi" },
    ],
  },
  {
    slug: "fabcol-cola-branca-pva",
    title: "FabCol PVA",
    tag: "PVA",
    tagColor: "#007800",
    category: "Colagem de Madeira em Geral",
    image: `${BASE}/abbd981f033e926e1507b68d4d9a5337-10.png`,
    description:
      "Adesivo PVA (acetato de polivinila) à base de água para colagem de madeira com excelente acabamento. Versátil, de fácil aplicação e alto rendimento.",
    specs: [
      { label: "Tipo", value: "PVA à base de água" },
      { label: "Secagem", value: "Rápida" },
      { label: "Aplicação", value: "Direta ou com pincel / espátula" },
      { label: "Rendimento", value: "Alto" },
    ],
    features: [
      { title: "Excelente acabamento", desc: "Junta invisível e limpa para madeira e laminados." },
      { title: "Alta versatilidade", desc: "Compatível com madeira, Formica, laminados, Duratex, papel e superfícies porosas." },
      { title: "Fácil aplicação", desc: "Base água, aplica direto sem mistura ou preparo especial." },
      { title: "Secagem rápida", desc: "Retorna ao processo de produção ou obra rapidamente." },
      { title: "Alto rendimento", desc: "Pequenas quantidades cobrem grandes áreas." },
    ],
    steps: [
      { n: "01", title: "Limpeza das peças", desc: "Certifique-se de que as superfícies estão limpas, secas e livres de poeira." },
      { n: "02", title: "Aplicação do adesivo", desc: "Aplique uniformemente em uma ou nas duas faces a unir." },
      { n: "03", title: "União das peças", desc: "Pressione as peças firmemente entre si para garantir aderência total." },
      { n: "04", title: "Secagem", desc: "Aguarde o tempo de secagem recomendado antes de manipular ou usinar." },
    ],
    surfaces: ["Madeira em geral", "Formica", "Aglomerado", "Laminados", "Duratex", "Papel e papelão", "Superfícies porosas"],
    related: [
      { title: "FabCol Super Rodapé", tag: "Super Cola", img: `${BASE}/0a96e274f217d6a71b610290efe8472f-9.png`, slug: "fabcol-super-cola-para-rodape" },
      { title: "FabMell P51", tag: "Massa Acrílica", img: `${BASE}/f460d9420f163c384572d4c15aaa3f18-11.png`, slug: "fabmell-massa-acrilica-para-madeira-p51" },
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
