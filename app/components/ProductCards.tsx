import Image from "next/image";

const products = [
  {
    category: "Impermeabilizantes",
    title: "Linha FabFlex",
    description:
      "Impermeabilizante cimentício flexível para lajes, piscinas, reservatórios e áreas molhadas.",
    cta: "Saiba mais",
    href: "/produtos?categoria=impermeabilizantes",
    banner: "/assets/Banner_628x280px_Fabflex.png",
    accent: "#22c55e",
  },
  {
    category: "Colagem",
    title: "FabCol Cola Branca PVA",
    description:
      "Adesivo PVA (acetato de polivinila) à base de água para colagem de madeira com excelente acabamento. Versátil, de fácil aplicação e alto rendimento.",
    cta: "Saiba mais",
    href: "/produtos?categoria=colagem-madeira-geral",
    banner: "/assets/Banner_628x280px_PVA.png",
    accent: "#22c55e",
  },
];

export default function ProductCards() {
  return (
    <section id="produtos" className="pt-20 pb-24 px-6" style={{ background: "#f4f5f0" }}>
      <div className="max-w-7xl mx-auto mb-10">
        <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: "#007800" }}>
          Mais Soluções
        </p>
        <h2 className="font-extrabold text-gray-900 leading-tight" style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)" }}>
          Confira outras linhas:
        </h2>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        {products.map((p) => (
          <div
            key={p.title}
            className="relative rounded-2xl overflow-hidden flex flex-col group cursor-pointer"
            style={{
              background: "#111a11",
              border: "1px solid #e7ebe8",
              minHeight: 340,
            }}
          >
            {/* Product image area */}
            <div
              className="relative overflow-hidden"
              style={{ height: 280 }}
            >
              <Image
                src={p.banner}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Text content */}
            <div
              className="flex flex-col flex-1 p-7 pt-5"
              style={{
                borderTop: "1px solid #e7ebe8",
                background: "#ffffff",
              }}
            >
              <p
                className="text-xs font-bold uppercase tracking-[0.18em] mb-2"
                style={{ color: "#007800" }}
              >
                {p.category}
              </p>
              <h3 className="text-gray-900 font-extrabold text-xl leading-tight mb-2">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed mb-5 text-gray-500">
                {p.description}
              </p>
              <a
                href={p.href ?? "/produtos"}
                className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold transition-all hover:gap-3"
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
