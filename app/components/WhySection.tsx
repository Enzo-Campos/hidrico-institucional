const features = [
  {
    number: "01",
    icon: <QualityIcon />,
    title: "Produtos de qualidade",
    description: (
      <>
        Os adesivos mais completos para{" "}
        <span style={{ color: "#007800" }}>pisos, madeiras e revestimentos sintéticos</span>{" "}
        do mercado.
      </>
    ),
  },
  {
    number: "02",
    icon: <ExperienceIcon />,
    title: "+30 anos de experiência",
    description:
      "Tradição construída ao lado de aplicadores, lojistas e indústrias do setor moveleiro.",
  },
  {
    number: "03",
    icon: <SupportIcon />,
    title: "Fomentação da área",
    description:
      "Treinamentos e suporte técnico para que cada obra entregue o melhor desempenho.",
  },
];

export default function WhySection() {
  return (
    <section id="sobre" className="py-24 px-6" style={{ background: "#f4f5f0" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <p
              className="text-xs font-bold uppercase tracking-[0.2em] mb-4"
              style={{ color: "#007800" }}
            >
              Por que Hídrico Química?
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Engenharia química com{" "}
              <span style={{ color: "#007800" }}>propósito</span>.
            </h2>
          </div>
          <p className="text-gray-500 text-base leading-relaxed max-w-sm lg:text-right">
            Cada formulação nasce no laboratório com foco em desempenho real do
            aplicador, aderência, cura e resistência sem concessões.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.number}
              className="bg-white rounded-2xl p-7 flex flex-col gap-4 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.10)]"
              style={{ border: "1px solid #e7ebe8" }}
            >
              {/* Icon + number row */}
              <div className="flex items-center justify-between">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center"
                  style={{ background: "#007800" }}
                >
                  {f.icon}
                </div>
                <span
                  className="text-3xl font-extrabold"
                  style={{ color: "#e5e7eb" }}
                >
                  {f.number}
                </span>
              </div>

              {/* Text */}
              <div>
                <h3 className="text-gray-900 font-bold text-base mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QualityIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function ExperienceIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}
