"use client";

import { useState } from "react";
import Link from "next/link";

const categories = [
  {
    id: "colagem-pisos-madeira",
    name: "Colagem de Pisos de Madeira",
    description:
      "Linha completa de adesivos poliuretânicos para colagem de tábuas, tacos e pisos engenheirados.",
    products: [
      { tag: "PU Monocomponente", title: "FabCol Cola para Pisos de Madeira PU", featured: true, tagColor: "#007800", fichaTecnica: "/assets/FABCOL PU Boletim Técnico.pdf" },
      { tag: "Alto Desempenho", title: "FabCol Cola para Pisos de Madeira PU 606", featured: false, tagColor: "#007800", fichaTecnica: "/assets/FABCOL PU 606 Boletim Técnico Rev-05-23.pdf" },
      { tag: "Lançamento 2026", title: "FabCol FUSION XT", featured: false, tagColor: "#d97706" },
      { tag: "Piso sobre Piso", title: "FabCol Cola para Piso sobre Piso PU PP", featured: false, tagColor: "#007800", fichaTecnica: "/assets/FABCOL PU PP Boletim Técnico Rev-05-23.pdf" },
      { tag: "Fixação Vertical", title: "FabCol Fixação Vertical PU 780 SV", featured: false, tagColor: "#007800", fichaTecnica: "/assets/FABCOL PU 780 SV Boletim Técnico Rev-05-23.pdf" },
      { tag: "MS Polímero", title: "FabCol MS H410", featured: false, tagColor: "#007800" },
      { tag: "Alta Resistência", title: "FabCol Cola para Pisos de Madeira PU 604", featured: false, tagColor: "#007800", fichaTecnica: "/assets/FABCOL PU 604 Boletim Técnico Rev-05-23.pdf" },
    ],
  },
  {
    id: "aditivos-contra-pisos",
    name: "Aditivos para Contra Pisos",
    description:
      "Aditivos especiais para preparo e nivelamento de contrapisos cimentícios com alta performance.",
    products: [
      { tag: "Aditivo Cimentício", title: "Fabfix Aditivo para Contrapiso Cimentício", featured: false, tagColor: "#007800", fichaTecnica: "/assets/FABFIX 500 Boletim Técnico Rev-05-23.pdf" },
    ],
  },
  {
    id: "calafetos",
    name: "Calafetos",
    description:
      "Massas e selantes para acabamento e vedação de juntas em superfícies de madeira.",
    products: [
      { tag: "Massa Acrílica", title: "Fabmell Massa Acrílica para Madeira P51", featured: false, tagColor: "#007800" },
    ],
  },
  {
    id: "cola-grama-sintetica",
    name: "Cola para Grama Sintética",
    description:
      "Cola PU formulada para fixação segura de grama sintética em áreas esportivas e paisagísticas.",
    products: [
      { tag: "Cola PU", title: "FabCol Cola para Grama Sintética", featured: false, tagColor: "#007800" },
    ],
  },
  {
    id: "colagem-madeira-geral",
    name: "Colagem de Madeira em Geral",
    description:
      "Soluções versáteis para colagem de peças de madeira em marcenaria, carpintaria e construção.",
    products: [
      { tag: "PVA", title: "FabCol Cola Branca PVA", featured: false, tagColor: "#007800" },
    ],
  },
  {
    id: "colagem-rodapes",
    name: "Colagem de Rodapés",
    description:
      "Adesivos de alta fixação para instalação de rodapés em madeira, MDF e polímeros.",
    products: [
      { tag: "Super Cola", title: "FabCol Super Cola para Rodapé", featured: false, tagColor: "#007800" },
    ],
  },
  {
    id: "impermeabilizantes",
    name: "Impermeabilizantes",
    description:
      "Soluções de impermeabilização para contrapisos e superfícies de madeira expostas à umidade.",
    products: [
      { tag: "Primer Epóxi", title: "FabFlex Impermeabilizante de Contrapiso Primer Epóxi", featured: false, tagColor: "#007800", fichaTecnica: "/assets/Fabflex Primer Epóxi Boletim Técnico Rev 12-24.pdf" },
      { tag: "Proteção para Madeira", title: "FabFlex Impermeabilizante para Madeira Safe Deck", featured: false, tagColor: "#007800", fichaTecnica: "/assets/FABFLEX SAFE DECK Boletim Técnico Rev-08-23.pdf" },
      { tag: "Contrapiso", title: "FabFlex Impermeabilizante de Contrapiso", featured: false, tagColor: "#007800", fichaTecnica: "/assets/FABFLEX 700 Boletim Técnico Rev-05-23.pdf" },
    ],
  },
];

export default function ProductsClient() {
  const [active, setActive] = useState("all");

  const visible =
    active === "all"
      ? categories
      : categories.filter((c) => c.id === active);

  return (
    <>
      {/* Sticky category filter */}
      <div
        className="sticky top-16 z-40 border-b"
        style={{ background: "#f4f5f0", borderColor: "#e7ebe8" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center gap-2 py-3">
            <FilterPill
              label="Todos"
              active={active === "all"}
              onClick={() => setActive("all")}
            />
            {categories.map((cat) => (
              <FilterPill
                key={cat.id}
                label={cat.name}
                active={active === cat.id}
                onClick={() => setActive(cat.id)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-6 pb-24 flex flex-col gap-16 pt-12">
        {visible.map((cat) => (
          <div key={cat.id} id={cat.id}>
            <div className="mb-6">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-1">
                {cat.name}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
                {cat.description}
              </p>
            </div>

            <hr style={{ borderColor: "#e7ebe8" }} className="mb-8" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {cat.products.map((p) => (
                <div
                  key={p.title}
                  className="bg-white rounded-2xl overflow-hidden flex flex-col transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.10)]"
                  style={{
                    border: p.featured ? "1.5px solid #007800" : "1px solid #e7ebe8",
                  }}
                >
                  {/* Placeholder image */}
                  <div
                    className="relative w-full h-44 flex items-center justify-center overflow-hidden"
                    style={{
                      background: p.featured
                        ? "linear-gradient(135deg, #e8f5e8 0%, #d4ead4 100%)"
                        : "linear-gradient(135deg, #f4f5f0 0%, #e9ebe6 100%)",
                    }}
                  >
                    <PlaceholderIcon featured={p.featured} />
                    {p.featured && (
                      <div
                        className="absolute inset-0 opacity-10 pointer-events-none"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle at 70% 30%, #007800 0%, transparent 60%)",
                        }}
                      />
                    )}
                  </div>

                  {/* Card body */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <span
                        className="text-[10px] font-bold uppercase tracking-[0.18em]"
                        style={{ color: p.tagColor }}
                      >
                        {p.tag}
                      </span>
                      <ArrowIcon />
                    </div>

                    <h3 className="text-gray-900 font-bold text-base leading-snug mb-auto">
                      {p.title}
                    </h3>

                    <div className="mt-5 flex items-center gap-2">
                      {p.fichaTecnica && (
                        <a
                          href={p.fichaTecnica}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-1.5 rounded-full text-xs font-bold text-white transition-all hover:brightness-110"
                          style={{ background: "#007800" }}
                        >
                          Ficha Técnica
                        </a>
                      )}
                      <Link
                        href="#contato"
                        className="px-4 py-1.5 rounded-full text-xs font-semibold text-gray-600 hover:text-gray-900 transition-colors"
                        style={{ border: "1px solid #d1d5db" }}
                      >
                        Saiba mais
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-150 whitespace-nowrap cursor-pointer active:scale-95"
      style={
        active
          ? { background: "#007800", color: "#fff", boxShadow: "0 2px 8px rgba(0,120,0,0.3)" }
          : { background: "transparent", color: "#6b7280", border: "1px solid #d1d5db" }
      }
      onMouseEnter={e => {
        if (!active) {
          const el = e.currentTarget as HTMLButtonElement;
          el.style.borderColor = "#007800";
          el.style.color = "#007800";
        }
      }}
      onMouseLeave={e => {
        if (!active) {
          const el = e.currentTarget as HTMLButtonElement;
          el.style.borderColor = "#d1d5db";
          el.style.color = "#6b7280";
        }
      }}
    >
      {label}
    </button>
  );
}

function PlaceholderIcon({ featured }: { featured: boolean }) {
  const color = featured ? "#007800" : "#6b7280";
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      style={{ opacity: featured ? 0.5 : 0.25 }}
    >
      <rect x="14" y="4" width="20" height="8" rx="2" stroke={color} strokeWidth="2" />
      <path
        d="M18 12v6l-8 16a4 4 0 0 0 3.58 5.8h20.84A4 4 0 0 0 38 34L30 18v-6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M18 28h12" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <circle cx="24" cy="34" r="2" fill={color} />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#9ca3af"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 mt-0.5"
    >
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  );
}
