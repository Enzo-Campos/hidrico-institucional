export interface BlogSection {
  heading?: string;
  text: string;
  links?: { label: string; href: string }[];
  items?: { label: string; text: string }[];
}

export interface BlogPost {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  cover?: string;
  content?: BlogSection[];
}

export const CATEGORIES = ["Projetos", "Dicas"];

export const CATEGORY_COLORS: Record<string, string> = {
  "Projetos": "#92400e",
  "Dicas":    "#374151",
};

export const CATEGORY_BG: Record<string, string> = {
  "Projetos": "linear-gradient(135deg, #78350f 0%, #92400e 100%)",
  "Dicas":    "linear-gradient(135deg, #111827 0%, #1f2937 100%)",
};

export const posts: BlogPost[] = [
  {
    slug: "como-escolher-solucao-certa-para-cada-etapa-da-obra",
    category: "Dicas",
    title: "Como escolher a solução certa para cada etapa da obra",
    excerpt: "Da preparação da base à proteção contra umidade, da colagem dos materiais ao acabamento, a Hídrico Química desenvolve soluções para ajudar profissionais a escolher os produtos certos, com mais segurança, desempenho e durabilidade.",
    date: "02 Jul 2026",
    readTime: "7 min",
    cover: "/assets/CAPA BLOG/hidrico_capa-de-blog_solucao-certa.webp",
    content: [
      {
        text: "Em muitos projetos, a atenção costuma estar concentrada no acabamento. Afinal, é ele que aparece primeiro quando o resultado é entregue. Mas, na prática, a qualidade do resultado começa muito antes.",
        heading: "Por que pensar a obra como um sistema completo?",
      },
      {
        text: "Problemas como descolamento, falhas de aderência, umidade, instabilidade da base e acabamento irregular podem ter origem em etapas anteriores da aplicação. Muitas vezes, o problema aparece no final, mas começou lá no início: na preparação da superfície, na escolha inadequada do produto ou na falta de proteção correta para o sistema.",
      },
      {
        text: "Cada fase tem uma função importante. A base precisa estar preparada; a umidade, controlada; a colagem, oferecer segurança; a fixação, acompanhar o uso e o acabamento, valorizar a entrega.",
      },
      {
        text: "Nesse processo, as linhas da Hídrico Química trabalham de forma integrada para apoiar o profissional em diferentes desafios da obra. Além das soluções para cada etapa da aplicação, a empresa oferece suporte técnico e capacitação, contribuindo para escolhas mais seguras e resultados mais duráveis.",
      },
      {
        heading: "A base para um resultado mais seguro",
        text: "Toda instalação começa antes do acabamento. E quando a base não está bem-preparada, as etapas seguintes podem ser comprometidas.",
      },
      {
        text: "O FabFix foi desenvolvido para atuar justamente nesse momento: a preparação do contrapiso cimentício. Ele é um aditivo que contribui para melhorar o desempenho da base, favorecendo mais resistência, aderência e estabilidade para receber diferentes sistemas de revestimento.",
      },
      {
        text: "Com o FabFix, a obra começa com uma base mais preparada para sustentar as próximas etapas.",
      },
      {
        heading: "Proteção contra umidade e mais estabilidade",
        text: "Depois da preparação da base, outro ponto essencial é a proteção. A umidade é um dos fatores que mais podem comprometer o desempenho de um sistema construtivo, especialmente quando não é considerada desde o início.",
      },
      {
        text: "A linha FabFlex reúne soluções voltadas para a preparação e a impermeabilização de bases, contrapisos e superfícies de madeira, contribuindo para mais estabilidade e segurança nas etapas seguintes.",
      },
      {
        text: "Enquanto o FabFlex 700 protege contrapisos sujeitos à umidade ascendente, o FabFlex Primer Epóxi reforça a preparação de bases que exigem mais segurança antes da instalação. Já o FabFlex Safe Deck atua em decks de madeira, ajudando a proteger áreas externas contra umidade e variações do clima.",
      },
      {
        heading: "Adesivos para diferentes aplicações",
        text: "Quando chega o momento da colagem e da fixação, uma coisa precisa ficar clara: cola não é tudo igual. Por isso, a linha FabCol reúne produtos desenvolvidos para diferentes necessidades da obra:",
        items: [
          { label: "FabCol PU 606", text: "oferece mais desempenho na colagem de pisos de madeira." },
          { label: "FabCol PU 780 SV", text: "favorece aplicações verticais, como painéis e revestimentos." },
          { label: "FabCol Fusion XT", text: "entrega alta resistência para aplicações estruturais." },
          { label: "FabCol MS H410", text: "auxilia na fixação de brises e forros em madeira." },
          { label: "FabCol PVA Cola Branca", text: "para trabalhos de marcenaria, móveis e materiais porosos." },
          { label: "FabCol Super Rodapé", text: "garante praticidade na fixação de rodapés e guarnições." },
          { label: "FabCol PU Grama Sintética", text: "contribui para instalações de grama sintética com mais estabilidade." },
        ],
      },
      {
        heading: "Acabamento e reparo em madeira",
        text: "Depois da preparação, proteção e colagem, o acabamento também merece atenção. Em superfícies de madeira, pequenas imperfeições podem interferir na uniformidade visual do resultado e comprometer a qualidade da entrega.",
      },
      {
        text: "É nesse momento que entra a FabMell P51: massa acrílica desenvolvida para facilitar as correções, os reparos e o lixamento, quando necessário, contribuindo para um acabamento mais homogêneo. Além disso, está disponível em diferentes cores, permitindo melhor integração com as tonalidades da madeira.",
      },
      {
        text: "Mais do que corrigir detalhes, a FabMell P51 ajuda a valorizar a madeira e entregar um aspecto final mais contínuo.",
      },
      {
        heading: "Linha para Vinílicos: um sistema específico para pisos vinílicos",
        text: "Além das linhas que atendem diferentes etapas da obra, a Hídrico Química também desenvolveu uma solução específica para o segmento de pisos vinílicos, criada para acompanhar o profissional da preparação à instalação. Por isso, ela reúne quatro produtos que atuam nas principais etapas do processo.",
        items: [
          { label: "FabPrimer 3K", text: "prepara a base." },
          { label: "FabBlock 793", text: "auxilia na proteção contra umidade." },
          { label: "FabGrip 3K", text: "melhora a aderência em aplicações de sobreposição." },
          { label: "FabVinil 501", text: "contribui para a fixação de pisos vinílicos." },
        ],
      },
      {
        text: "Juntos, esses produtos formam um sistema pensado para pisos vinílicos, reunindo preparação, proteção, aderência e fixação em uma única linha.",
      },
      {
        heading: "Portfólio pensado para todas as etapas",
        text: "O diferencial da Hídrico Química está na integração entre as linhas, permitindo que profissionais encontrem soluções para diferentes necessidades da obra em um único portfólio.",
      },
      {
        text: "Da preparação da base ao acabamento, cada linha foi desenvolvida para atender a uma etapa específica, contribuindo para mais eficiência, confiabilidade e qualidade no resultado. Conheça todas elas e descubra qual solução faz mais sentido para a sua obra, revenda ou projeto.",
      },
      {
        text: "Hídrico Química: qualidade que constrói o amanhã.",
      },
    ],
  },
  {
    slug: "restauracao-salao-nobre-palacio-iguacu",
    category: "Projetos",
    title: "Salão Nobre do Palácio Iguaçu: uma restauração que começa nos detalhes",
    excerpt: "Quando um patrimônio histórico precisa ser restaurado, cada escolha ganha um peso diferente. Descubra como as soluções técnicas adotadas foram fundamentais para a revitalização do Salão Nobre do Palácio Iguaçu.",
    date: "02 Jul 2026",
    readTime: "5 min",
    cover: "/assets/CAPA BLOG/hidrico_capa-de-blog_palacio.webp",
    content: [
      {
        text: "Sede oficial do governo do Paraná, o Palácio Iguaçu abriga um dos espaços mais emblemáticos do estado. Em sua revitalização, a seleção dos materiais e dos sistemas de aplicação teve papel importante para conciliar preservação, desempenho e durabilidade. Foi nesse contexto que a Hídrico Química contribuiu com soluções técnicas para a obra.",
      },
      {
        heading: "Quando uma reforma vai além da obra",
        text: "Em fevereiro de 2025, uma forte chuva provocou infiltrações que comprometeram parte do Salão Nobre do Palácio Iguaçu. O que parecia um problema localizado rapidamente se tornou um desafio maior: intervir em um ambiente histórico sem comprometer sua história.",
      },
      {
        text: "Por se tratar de um bem tombado, cada etapa exigia precisão técnica e decisões criteriosas. A intervenção envolveu a substituição do piso de madeira, garantindo a implantação de um novo sistema compatível com as exigências técnicas e institucionais do espaço. O Salão Nobre recebeu o Versailles Cumaru, da Indusparquet, em um processo que demandava máxima estabilidade em cada etapa da instalação.",
      },
      {
        heading: "A importância de soluções confiáveis na obra",
        text: "Em projetos dessa complexidade, a escolha dos materiais vai muito além da estética ou da execução imediata. O desempenho de longo prazo depende diretamente da qualidade dos sistemas utilizados na instalação.",
      },
      {
        text: "É nesse ponto que a Hídrico Química se destaca, oferecendo soluções desenvolvidas para garantir segurança, estabilidade e durabilidade em obras que exigem alta responsabilidade técnica. Com mais de 30 anos de atuação no mercado, a empresa participa de projetos onde precisão e confiabilidade são essenciais para o resultado.",
      },
      {
        heading: "Um piso histórico exige mais do que aparência",
        text: "Em pisos de madeira, o desempenho da instalação começa na base e depende diretamente do sistema de fixação utilizado. Em restaurações, essa etapa é ainda mais crítica, já que o objetivo é preservar a história e integridade do espaço.",
      },
      {
        text: "Nesse cenário, a FabCol PU 606, uma das soluções de referência da Hídrico Química, foi a escolhida para garantir segurança, estabilidade e durabilidade na aplicação. O produto foi aplicado na instalação do piso Versailles Cumaru, da Indusparquet, no Salão Nobre do Palácio Iguaçu, sendo essencial para assegurar o desempenho necessário em um ambiente de grande circulação, onde a fixação precisa ser consistente ao longo do tempo.",
      },
      {
        heading: "Um projeto que une técnica, história e responsabilidade",
        text: "A Hídrico Química vem construindo sua trajetória em iniciativas onde cada detalhe importa e a qualidade da solução impacta diretamente o resultado. A empresa apoia profissionais na especificação dos materiais mais adequados para cada projeto. Estar presente em uma obra de patrimônio histórico como o Palácio Iguaçu reforça esse posicionamento, em contextos que exigem confiança e responsabilidade.",
      },
      {
        text: "O trabalho reuniu empresas comprometidas com qualidade e precisão técnica, resultando em um espaço renovado que preserva sua relevância histórica e institucional, ao mesmo tempo em que garante desempenho e durabilidade.",
      },
      {
        heading: "Saiba mais",
        text: "Para ver mais detalhes dessa entrega, acesse os conteúdos abaixo:",
        links: [
          { label: "Instagram — publicação 1", href: "https://www.instagram.com/p/DWG-vXdj_BN/" },
          { label: "Instagram — publicação 2", href: "https://www.instagram.com/p/DWrHYX8gZzp/" },
          { label: "Instagram — publicação 3", href: "https://www.instagram.com/p/DYk1nylCmdC/" },
        ],
      },
    ],
  },
  {
    slug: "instalacao-sem-retrabalho-erros-comuns",
    category: "Dicas",
    title: "Instalação sem retrabalho: erros que você precisa evitar",
    excerpt: "Falhas na preparação da base, na escolha dos produtos ou na aplicação podem comprometer o desempenho da instalação e gerar custos extras. Entenda os pontos críticos que merecem atenção para garantir um resultado mais eficiente.",
    date: "02 Jul 2026",
    readTime: "6 min",
    cover: "/assets/CAPA BLOG/hidrico_capa-de-blog_sem-retrabalho.webp",
    content: [
      {
        text: "Em uma obra, uma instalação bem-executada é decisiva para garantir segurança e durabilidade. Mas nem sempre os problemas aparecem no momento da aplicação. Muitas falhas só se tornam visíveis depois, quando o sistema começa a apresentar sinais de instabilidade, perda de aderência, descolamento, umidade ou necessidade de correção.",
      },
      {
        text: "Na prática, grande parte desses problemas poderia ser evitada com atenção às etapas anteriores. Avaliar a base, escolher os produtos corretos, respeitar orientações técnicas e compreender as situações reais da obra são cuidados que fazem a diferença.",
      },
      {
        heading: "Não avaliar as condições da base",
        text: "Um dos erros mais comuns é iniciar a aplicação do produto sem avaliar corretamente as condições da base. Contrapisos irregulares ou úmidos, por exemplo, podem comprometer as etapas seguintes, mesmo quando os materiais utilizados são de qualidade. Quando a base não está preparada, o sistema perde estabilidade e o risco de falhas aumenta. Antes de qualquer aplicação, é importante verificar se a superfície está limpa, regular, resistente e adequada para receber a solução ou o revestimento, reduzindo assim contratempos futuros.",
      },
      {
        heading: "Ignorar a presença de umidade",
        text: "A umidade é um dos fatores que mais comprometem uma instalação, principalmente quando não é considerada desde o início do processo. Em muitos casos, ela não aparece de forma evidente no momento da obra, mas pode interferir no desempenho do sistema ao longo do tempo. Umidade ascendente, umidade residual ou falta de proteção adequada da base podem provocar bolhas, descolamentos, perda de aderência e outros problemas que afetam a durabilidade da instalação. Por isso, uma avaliação precisa e o uso de soluções adequadas como o FabFlex Primer Epóxi, o FabFlex Safe Deck e o FabFlex 700 para proteção são cuidados essenciais para não comprometer o resultado.",
      },
      {
        heading: "Escolher o produto errado para a aplicação",
        text: "Outro erro recorrente é acreditar que tudo cumpre a mesma função. Na prática, cada superfície, material e condição de uso exige especificações próprias. Um adesivo indicado para piso de madeira pode não ser o mais adequado para uma aplicação vertical. Produtos pensados para rodapés não têm a mesma função de uma cola para grama sintética. Da mesma forma, soluções para preparação de base não substituem impermeabilizantes ou materiais de acabamento. Quando a escolha não considera o tipo de aplicação, o material e as condições da obra, o resultado pode ser comprometido, gerando falhas, retrabalho e desperdício. Também é comum o uso de materiais sem procedência confiável ou sem orientação técnica, o que aumenta ainda mais o risco de desempenho inadequado.",
      },
      {
        heading: "Não seguir as orientações de aplicação",
        text: "A forma de aplicação influencia diretamente no resultado. Proporção de mistura, consumo indicado, tempo de trabalho, preparação da superfície, ferramentas utilizadas e intervalo entre etapas são pontos que precisam ser respeitados. Esse cuidado é ainda mais importante em produtos técnicos, que dependem de uma execução adequada para garantir resistência, aderência e estabilidade. Seguir as recomendações do fabricante é parte essencial da qualidade da instalação. É nesse contexto que a Hídrico Química atua, desenvolvendo soluções específicas para diferentes aplicações e oferecendo suporte técnico para auxiliar profissionais na escolha mais assertiva para cada objetivo.",
      },
      {
        heading: "Acelerar etapas para ganhar tempo",
        text: "Em muitas obras, a tentativa de acelerar o processo faz com que etapas importantes sejam ignoradas. Isso pode acontecer na preparação da base, no controle da umidade, na mistura dos produtos, no tempo de cura ou no intervalo necessário antes da próxima aplicação. Quando um passo não é respeitado, o sistema pode apresentar falhas prematuras ou exigir correções mais complexas. Por isso, respeitar o tempo de cada processo é uma forma de proteger o resultado e evitar custos adicionais.",
      },
      {
        heading: "Tratar o acabamento como uma etapa isolada",
        text: "Quando a preparação, a proteção, a colagem e a fixação não são bem-executadas, o acabamento pode ser diretamente afetado. Pequenas falhas na base ou na escolha dos produtos podem aparecer depois como imperfeições, instabilidade ou perda de qualidade visual. Por isso, a instalação deve ser vista como um sistema, em que cada fase tem uma função e contribui para o desempenho final.",
      },
      {
        heading: "Um bom resultado começa antes da instalação",
        text: "Evitar falhas em uma obra depende de planejamento, atenção às condições do ambiente e escolha correta dos produtos para cada etapa. Mais do que resolver um problema isolado, é importante enxergar o processo como um sistema completo, em que base, proteção, colagem, fixação e acabamento trabalham em conjunto. É nesse ponto que contar com soluções técnicas faz diferença. A Hídrico Química desenvolve linhas voltadas para diferentes momentos da aplicação, contribuindo para mais segurança, eficiência e desempenho do início ao fim do processo. Conheça as soluções da Hídrico Química e descubra como escolher o produto certo para cada etapa da sua obra.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
