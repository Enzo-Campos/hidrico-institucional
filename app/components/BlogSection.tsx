import Link from "next/link";

const posts = [
  {
    id: "01",
    slug: "como-escolher-adesivo-piso-madeira",
    category: "Pisos de Madeira",
    title: "Como escolher o adesivo certo para cada tipo de piso de madeira",
    excerpt:
      "Tábuas maciças, engenheiradas e tacos exigem formulações distintas. Entenda os critérios técnicos que definem a escolha do adesivo PU ideal para cada substrato.",
    date: "12 Abr 2025",
    readTime: "6 min",
    featured: true,
    patternId: "wood",
  },
  {
    id: "02",
    slug: "primer-epoxi-vs-impermeabilizante-cimenticio",
    category: "Impermeabilização",
    title: "Primer epóxi vs. impermeabilizante cimentício",
    excerpt:
      "A escolha errada compromete toda a obra. Veja as diferenças de aplicação e durabilidade entre as duas soluções.",
    date: "05 Abr 2025",
    readTime: "4 min",
    featured: false,
    patternId: "water",
  },
  {
    id: "03",
    slug: "fixacao-grama-sintetica-quadras",
    category: "Grama Sintética",
    title: "Fixação de grama sintética em quadras: guia para instaladores",
    excerpt:
      "Da preparação do substrato à cura final — protocolo para garantir aderência máxima em qualquer condição climática.",
    date: "28 Mar 2025",
    readTime: "8 min",
    featured: false,
    patternId: "grid",
  },
  {
    id: "04",
    slug: "voc-zero-adesivos-pu-saude",
    category: "Técnico",
    title: "VOC zero: por que isso importa na escolha de adesivos PU",
    excerpt:
      "Emissão de compostos orgânicos voláteis afeta a saúde dos instaladores e a qualificação LEED de edificações.",
    date: "18 Mar 2025",
    readTime: "5 min",
    featured: false,
    patternId: "circuit",
  },
];

const PATTERNS: Record<string, { bg: string; svgPattern: string }> = {
  wood: {
    bg: "linear-gradient(160deg, #0d2010 0%, #071507 100%)",
    svgPattern: `<svg width='60' height='60' xmlns='http://www.w3.org/2000/svg'><path d='M0 10 Q30 8 60 10' stroke='rgba(34,197,94,0.06)' fill='none' stroke-width='1'/><path d='M0 20 Q30 22 60 20' stroke='rgba(34,197,94,0.04)' fill='none' stroke-width='1'/><path d='M0 30 Q30 28 60 30' stroke='rgba(34,197,94,0.06)' fill='none' stroke-width='1'/><path d='M0 40 Q30 42 60 40' stroke='rgba(34,197,94,0.04)' fill='none' stroke-width='1'/><path d='M0 50 Q30 48 60 50' stroke='rgba(34,197,94,0.06)' fill='none' stroke-width='1'/></svg>`,
  },
  water: {
    bg: "linear-gradient(160deg, #071010 0%, #0a1a12 100%)",
    svgPattern: `<svg width='80' height='40' xmlns='http://www.w3.org/2000/svg'><path d='M0 20 Q20 0 40 20 Q60 40 80 20' stroke='rgba(34,197,94,0.06)' fill='none' stroke-width='1.5'/><path d='M0 35 Q20 15 40 35 Q60 55 80 35' stroke='rgba(34,197,94,0.03)' fill='none' stroke-width='1'/></svg>`,
  },
  grid: {
    bg: "linear-gradient(160deg, #0a1f0a 0%, #061206 100%)",
    svgPattern: `<svg width='40' height='40' xmlns='http://www.w3.org/2000/svg'><circle cx='20' cy='20' r='1' fill='rgba(34,197,94,0.12)'/><circle cx='0' cy='0' r='1' fill='rgba(34,197,94,0.08)'/><circle cx='40' cy='0' r='1' fill='rgba(34,197,94,0.08)'/><circle cx='0' cy='40' r='1' fill='rgba(34,197,94,0.08)'/><circle cx='40' cy='40' r='1' fill='rgba(34,197,94,0.08)'/></svg>`,
  },
  circuit: {
    bg: "linear-gradient(160deg, #081208 0%, #0a1a10 100%)",
    svgPattern: `<svg width='60' height='60' xmlns='http://www.w3.org/2000/svg'><path d='M10 10 L10 30 L30 30' stroke='rgba(34,197,94,0.08)' fill='none' stroke-width='1'/><path d='M50 10 L50 30 L30 30' stroke='rgba(34,197,94,0.06)' fill='none' stroke-width='1'/><path d='M10 50 L30 50 L30 30' stroke='rgba(34,197,94,0.08)' fill='none' stroke-width='1'/><circle cx='10' cy='10' r='2' fill='rgba(34,197,94,0.10)'/><circle cx='50' cy='10' r='2' fill='rgba(34,197,94,0.10)'/><circle cx='10' cy='50' r='2' fill='rgba(34,197,94,0.10)'/></svg>`,
  },
};

function PatternBg({ id, className = "" }: { id: string; className?: string }) {
  const p = PATTERNS[id];
  const encoded = encodeURIComponent(p.svgPattern);
  return (
    <div
      className={`absolute inset-0 ${className}`}
      style={{
        background: p.bg,
        backgroundImage: `url("data:image/svg+xml,${encoded}")`,
      }}
    />
  );
}

function ArrowRight() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

const featured = posts.find((p) => p.featured)!;
const rest = posts.filter((p) => !p.featured);

export default function BlogSection() {
  return (
    <section
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: "#080f08" }}
    >
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(34,197,94,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-7xl mx-auto">

        {/* Section header */}
        <div className="flex items-end justify-between mb-14 gap-6">
          <div>
            <p
              className="text-[10px] font-bold uppercase tracking-[0.3em] mb-3"
              style={{ color: "#22c55e" }}
            >
              Conhecimento Técnico
            </p>
            <h2
              className="font-black text-white leading-none"
              style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}
            >
              Artigos & Guias
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold shrink-0 transition-all group"
            style={{ color: "#4b5563" }}
          >
            <span className="group-hover:text-white transition-colors">Ver todos</span>
            <span
              className="inline-flex items-center justify-center w-7 h-7 rounded-full transition-all group-hover:bg-white/10"
              style={{ border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <ArrowRight />
            </span>
          </Link>
        </div>

        {/* Featured + side grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-4">

          {/* Featured card */}
          <Link
            href={`/blog/${featured.slug}`}
            className="lg:col-span-3 relative rounded-2xl overflow-hidden flex flex-col group"
            style={{
              border: "1px solid rgba(34,197,94,0.10)",
              minHeight: 440,
            }}
          >
            <PatternBg id={featured.patternId} />

            {/* Glow */}
            <div
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: "radial-gradient(ellipse at 40% 60%, rgba(34,197,94,0.12) 0%, transparent 65%)" }}
            />

            {/* Giant number */}
            <span
              className="absolute right-6 top-4 font-black leading-none select-none pointer-events-none"
              style={{
                fontSize: "9rem",
                color: "rgba(34,197,94,0.06)",
                lineHeight: 1,
              }}
            >
              {featured.id}
            </span>

            {/* Content */}
            <div className="relative flex flex-col flex-1 p-8 justify-end">
              {/* Tag */}
              <span
                className="w-fit text-[9px] font-bold uppercase tracking-[0.22em] px-2.5 py-1 rounded-full mb-5"
                style={{
                  background: "rgba(34,197,94,0.10)",
                  border: "1px solid rgba(34,197,94,0.20)",
                  color: "#22c55e",
                }}
              >
                {featured.category}
              </span>

              <h3
                className="font-black text-white leading-tight mb-4"
                style={{ fontSize: "clamp(1.4rem, 2.2vw, 1.9rem)" }}
              >
                {featured.title}
              </h3>

              <p className="text-sm leading-relaxed mb-8" style={{ color: "#6b7280", maxWidth: 480 }}>
                {featured.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-xs" style={{ color: "#374151" }}>{featured.date}</span>
                  <span style={{ color: "#1f2937" }}>·</span>
                  <span className="text-xs" style={{ color: "#374151" }}>{featured.readTime} de leitura</span>
                </div>
                <span
                  className="inline-flex items-center gap-2 text-xs font-bold transition-all group-hover:gap-3"
                  style={{ color: "#22c55e" }}
                >
                  Ler artigo <ArrowRight />
                </span>
              </div>
            </div>

            {/* Bottom border accent */}
            <div
              className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(90deg, transparent, #22c55e, transparent)" }}
            />
          </Link>

          {/* Side cards */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {rest.slice(0, 2).map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="relative rounded-2xl overflow-hidden flex flex-col group flex-1"
                style={{
                  border: "1px solid rgba(255,255,255,0.05)",
                  minHeight: 200,
                }}
              >
                <PatternBg id={post.patternId} />

                <div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "radial-gradient(ellipse at 70% 30%, rgba(34,197,94,0.10) 0%, transparent 65%)" }}
                />

                <span
                  className="absolute right-4 top-2 font-black select-none pointer-events-none"
                  style={{ fontSize: "5rem", color: "rgba(34,197,94,0.06)", lineHeight: 1 }}
                >
                  {post.id}
                </span>

                <div className="relative flex flex-col flex-1 p-6 justify-end">
                  <span
                    className="w-fit text-[9px] font-bold uppercase tracking-[0.22em] px-2 py-0.5 rounded-full mb-3"
                    style={{
                      background: "rgba(34,197,94,0.08)",
                      border: "1px solid rgba(34,197,94,0.14)",
                      color: "#22c55e",
                    }}
                  >
                    {post.category}
                  </span>

                  <h3 className="font-bold text-white leading-snug mb-4 text-sm">
                    {post.title}
                  </h3>

                  <div className="flex items-center justify-between">
                    <span className="text-[11px]" style={{ color: "#374151" }}>{post.date}</span>
                    <span
                      className="inline-flex items-center gap-1.5 text-[11px] font-bold transition-all group-hover:gap-2.5"
                      style={{ color: "#22c55e" }}
                    >
                      Ler artigo <ArrowRight />
                    </span>
                  </div>
                </div>

                <div
                  className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(90deg, transparent, #22c55e, transparent)" }}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom row — last card full width on mobile, 1/2 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rest.slice(2).map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="relative rounded-2xl overflow-hidden group"
              style={{
                border: "1px solid rgba(255,255,255,0.05)",
                minHeight: 160,
              }}
            >
              <PatternBg id={post.patternId} />

              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(34,197,94,0.10) 0%, transparent 65%)" }}
              />

              <span
                className="absolute right-5 top-3 font-black select-none pointer-events-none"
                style={{ fontSize: "5rem", color: "rgba(34,197,94,0.06)", lineHeight: 1 }}
              >
                {post.id}
              </span>

              <div className="relative flex items-end justify-between gap-6 p-6 h-full">
                <div className="flex-1">
                  <span
                    className="w-fit text-[9px] font-bold uppercase tracking-[0.22em] px-2 py-0.5 rounded-full mb-3 inline-block"
                    style={{
                      background: "rgba(34,197,94,0.08)",
                      border: "1px solid rgba(34,197,94,0.14)",
                      color: "#22c55e",
                    }}
                  >
                    {post.category}
                  </span>
                  <h3 className="font-bold text-white leading-snug text-sm mt-1">
                    {post.title}
                  </h3>
                </div>

                <div className="shrink-0 flex flex-col items-end gap-2">
                  <span className="text-[11px] whitespace-nowrap" style={{ color: "#374151" }}>{post.date}</span>
                  <span
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold transition-all group-hover:gap-2.5"
                    style={{ color: "#22c55e" }}
                  >
                    Ler artigo <ArrowRight />
                  </span>
                </div>
              </div>

              <div
                className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(90deg, transparent, #22c55e, transparent)" }}
              />
            </Link>
          ))}

          {/* Newsletter CTA card */}
          <div
            className="relative rounded-2xl overflow-hidden flex flex-col justify-between p-6"
            style={{
              background: "linear-gradient(135deg, rgba(34,197,94,0.08) 0%, rgba(34,197,94,0.02) 100%)",
              border: "1px solid rgba(34,197,94,0.15)",
              minHeight: 160,
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(rgba(34,197,94,0.08) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            <div className="relative">
              <p
                className="text-[9px] font-bold uppercase tracking-[0.28em] mb-2"
                style={{ color: "#22c55e" }}
              >
                Newsletter Técnica
              </p>
              <p className="text-white font-bold text-sm leading-snug">
                Receba guias e fichas técnicas direto no e-mail.
              </p>
            </div>
            <Link
              href="/contato"
              className="relative w-fit inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full transition-all hover:brightness-110 active:scale-95"
              style={{ background: "#22c55e", color: "#071007" }}
            >
              Quero receber <ArrowRight />
            </Link>
          </div>
        </div>

        {/* Mobile "ver todos" */}
        <div className="mt-8 flex justify-center md:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-colors"
            style={{ border: "1px solid rgba(255,255,255,0.10)", color: "#9ca3af" }}
          >
            Ver todos os artigos <ArrowRight />
          </Link>
        </div>

      </div>
    </section>
  );
}
