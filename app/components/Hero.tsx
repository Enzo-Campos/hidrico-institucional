export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0d110e]">

      {/* Background geometric layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large faint green circle top-right */}
        <div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #007800 0%, transparent 70%)" }}
        />
        {/* Diagonal accent bar */}
        <div
          className="absolute bottom-0 left-0 w-full h-[2px] opacity-20"
          style={{ background: "linear-gradient(90deg, transparent, #007800, transparent)" }}
        />
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#007800 1px, transparent 1px), linear-gradient(90deg, #007800 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full pt-28 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left: copy */}
        <div>
          <span
            className="inline-block text-xs font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-6"
            style={{ background: "rgba(34,197,94,0.15)", color: "#007800" }}
          >
            Adesivos Industriais
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-[64px] font-extrabold text-white leading-[1.05] tracking-tight">
            Máxima<br />
            aderência.{" "}
            <span style={{ color: "#007800" }}>Zero<br />concessões.</span>
          </h1>

          <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-md">
            Formulações nascidas no laboratório e testadas em campo — para pisos de madeira,
            grama sintética e revestimentos que exigem o melhor.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#produtos"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm text-white transition-all hover:brightness-110 active:scale-95"
              style={{ background: "#007800" }}
            >
              Ver Produtos
              <ArrowRight />
            </a>
            <a
              href="tel:+554137982010"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm text-white border transition-colors hover:border-white/50"
              style={{ borderColor: "rgba(255,255,255,0.15)" }}
            >
              Fale Conosco
            </a>
          </div>
        </div>

        {/* Right: stats grid */}
        <div className="grid grid-cols-2 gap-4">
          <StatCard number="+30" label="Anos de experiência" />
          <StatCard number="100%" label="Foco em desempenho" />
          <StatCard number="3" label="Linhas de produtos" wide />
        </div>
      </div>
    </section>
  );
}

function StatCard({
  number,
  label,
  wide = false,
}: {
  number: string;
  label: string;
  wide?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-6 border flex flex-col justify-between${wide ? " col-span-2" : ""}`}
      style={{
        background: "rgba(255,255,255,0.04)",
        borderColor: "rgba(255,255,255,0.08)",
      }}
    >
      <span
        className="text-4xl font-extrabold"
        style={{ color: "#007800" }}
      >
        {number}
      </span>
      <span className="mt-2 text-sm text-gray-400 font-medium">{label}</span>
    </div>
  );
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
