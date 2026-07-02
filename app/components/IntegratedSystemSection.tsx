const pillars = [
  {
    title: "Preparação de Contrapiso",
    desc: "Primers e aditivos específicos para regularizar a absorção, consolidar o substrato e criar a ancoragem ideal.",
    icon: LayersIcon,
  },
  {
    title: "Impermeabilização Inteligente",
    desc: "Soluções tecnológicas que bloqueiam a umidade e protegem a estrutura contra pressões hídricas.",
    icon: ShieldDropIcon,
  },
  {
    title: "Adesivos Estruturais de Alta Performance",
    desc: "Colas com excelente fixação e flexibilidade calibrada para o travamento de diferentes revestimentos.",
    icon: BondIcon,
  },
  {
    title: "Suporte Técnico e Treinamento",
    desc: "Orientação em obra e capacitação de equipes para assegurar a aplicação correta e o melhor rendimento dos materiais.",
    icon: SupportIcon,
  },
];

export default function IntegratedSystemSection() {
  return (
    <section className="relative overflow-hidden py-24 px-6" style={{ background: "#0a1a0a" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top, rgba(34,197,94,0.14) 0%, transparent 60%)",
        }}
      />
      <div className="relative max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: "#22c55e" }}>
            TECNOLOGIA INTEGRADA
          </p>
          <h2 className="font-extrabold text-white leading-tight mb-6" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}>
            O Sistema Completo: a resposta para cada etapa da sua obra
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#9ca3af" }}>
            Não fornecemos apenas insumos isolados. Desenvolvemos um portfólio integrado que atende cada fase do assentamento, desde o tratamento inicial da base até a fixação final e o acompanhamento especializado.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {pillars.map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="rounded-2xl p-6 transition-all hover:-translate-y-1"
              style={{ background: "#0e1a0e", border: "1px solid rgba(34,197,94,0.14)" }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "rgba(34,197,94,0.10)", color: "#22c55e" }}
              >
                <Icon />
              </div>
              <h3 className="text-white font-bold text-base leading-snug mb-2">{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#9ca3af" }}>{desc}</p>
            </div>
          ))}
        </div>

        <p className="text-base leading-relaxed max-w-3xl" style={{ color: "#6b7280" }}>
          Ao unificar essas frentes em uma única especificação, eliminamos a incompatibilidade de materiais no canteiro e elevamos a segurança de todo o complexo de instalação no seu projeto.
        </p>
      </div>
    </section>
  );
}

function LayersIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

function ShieldDropIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2 4 5v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V5l-8-3Z" />
      <path d="M12 8c1.5 2 2.2 3.3 2.2 4.5a2.2 2.2 0 1 1-4.4 0c0-1.2.7-2.5 2.2-4.5Z" />
    </svg>
  );
}

function BondIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.07 0l2.5-2.5a5 5 0 0 0-7.07-7.07L11 4.88" />
      <path d="M14 11a5 5 0 0 0-7.07 0l-2.5 2.5a5 5 0 0 0 7.07 7.07L13 19.12" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
      <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3Z" />
    </svg>
  );
}
