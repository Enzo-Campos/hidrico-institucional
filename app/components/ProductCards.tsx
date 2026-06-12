import Image from "next/image";

const BASE = "https://www.hidricoquimica.com.br/admin/assets/imgs/seo/grande";

const products = [
  {
    category: "Impermeabilizantes",
    title: "Linha FabFlex",
    description:
      "Impermeabilizante cimentício flexível para lajes, piscinas, reservatórios e áreas molhadas.",
    cta: "Saiba mais",
    href: "/produtos?categoria=impermeabilizantes",
    images: [
      { src: `${BASE}/2bd6f196ae588abe7f79e0a2a9ffa340-7.png`, alt: "FabFlex Epóxi" },
      { src: `${BASE}/6710793c5670e37391f570d40dbe7496-8.png`, alt: "FabFlex Safe Deck" },
      { src: `${BASE}/ea27556fae4c71df9dbf0489e149c327-2.png`, alt: "FabFlex 700" },
    ],
    accent: "#22c55e",
  },
  {
    category: "Colagem",
    title: "FabCol Cola Branca PVA",
    description:
      "Adesivo PVA (acetato de polivinila) à base de água para colagem de madeira com excelente acabamento. Versátil, de fácil aplicação e alto rendimento.",
    cta: "Saiba mais",
    href: "/produtos?categoria=colagem-madeira-geral",
    images: [
      { src: `${BASE}/abbd981f033e926e1507b68d4d9a5337-10.png`, alt: "FabCol Cola Grama Sintética" },
    ],
    accent: "#22c55e",
  },
];

export default function ProductCards() {
  return (
    <section id="produtos" className="py-6 px-6 pb-24" style={{ background: "#f4f5f0" }}>
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
              className="relative flex items-end justify-center overflow-hidden"
              style={{ height: 280 }}
            >
              {/* Green glow behind products */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at center bottom, rgba(34,197,94,0.18) 0%, transparent 65%)",
                }}
              />

              {/* Product images staggered */}
              <div className="relative flex items-end justify-center gap-4 pb-4 px-6">
                {p.images.map((img, i) => {
                  const isCenter = i === 0;
                  const rotations = [-6, 0, 5];
                  return (
                    <div
                      key={img.alt}
                      className="transition-transform duration-500 group-hover:scale-105"
                      style={{
                        transform: `rotate(${rotations[i] ?? 0}deg)`,
                        zIndex: isCenter ? 10 : 5,
                        filter: "drop-shadow(0 12px 24px rgba(0,0,0,0.7))",
                      }}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={isCenter ? 200 : 150}
                        height={isCenter ? 200 : 150}
                        className="object-contain"
                      />
                    </div>
                  );
                })}
              </div>
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
