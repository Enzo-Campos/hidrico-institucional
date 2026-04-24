import Image from "next/image";

const products = [
  {
    category: "Pisos & Madeiras",
    title: "Colas PU para pisos de madeira",
    description: "FabCol PU 606 e linha completa para colagem de tábuas, tacos e engenheirados.",
    cta: "Conhecer linha",
  },
  {
    category: "Grama Sintética",
    title: "FabCol PU Grama Sintética",
    description: "Aderência superior e resistência às intempéries para áreas esportivas e paisagísticas.",
    cta: "Conhecer linha",
  },
];

export default function ProductCards() {
  return (
    <section id="produtos" className="py-6 px-6 pb-24" style={{ background: "#f4f5f0" }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        {products.map((p) => (
          <div
            key={p.title}
            className="relative rounded-2xl overflow-hidden min-h-[340px] flex flex-col justify-end group cursor-pointer"
          >
            {/* Background image */}
            <Image
              src="/assets/fabcol_apply.webp"
              alt={p.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            {/* Dark gradient overlay for text legibility */}
            <div
              className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-90"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)",
              }}
            />

            {/* Subtle green accent */}
            <div
              className="absolute top-5 right-5 w-2 h-2 rounded-full opacity-60"
              style={{ background: "#007800" }}
            />

            {/* Content */}
            <div className="relative z-10 p-7">
              <p
                className="text-xs font-bold uppercase tracking-[0.18em] mb-3"
                style={{ color: "#007800" }}
              >
                {p.category}
              </p>
              <h3 className="text-white font-extrabold text-2xl leading-tight mb-2">
                {p.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-5">
                {p.description}
              </p>
              <a
                href="#contato"
                className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all hover:gap-3"
                style={{ color: "#007800" }}
              >
                {p.cta}
                <ArrowRight />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ArrowRight() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
