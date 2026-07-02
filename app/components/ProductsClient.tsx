"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const BASE = "https://www.hidricoquimica.com.br/admin/assets/imgs/seo/grande";

const categories = [
  {
    id: "colagem-pisos-madeira",
    name: "Colagem de Pisos de Madeira",
    description:
      "Linha completa de adesivos poliuretânicos para colagem de tábuas, tacos e pisos engenheirados.",
    products: [
      { tag: "PU Monocomponente", title: "FabCol Cola para Pisos de Madeira PU", featured: true, tagColor: "#007800", fichaTecnica: "/assets/fabcol-pu-boletim-tecnico.pdf", image: `${BASE}/5b44b92d77ed46c07f21fb8a8911ca35-13.png`, href: "/produtos/fabcol-cola-para-pisos-de-madeira-pu" },
      { tag: "Alto Desempenho", title: "FabCol Cola para Pisos de Madeira PU 606", featured: false, tagColor: "#007800", fichaTecnica: "/assets/fabcol-pu-606-boletim-tecnico-rev0523.pdf", image: `${BASE}/b2143404f2019a7f475eeaace8e76131-4.png`, href: "/produtos/fabcol-cola-para-pisos-de-madeira-pu-606" },
      { tag: "Lançamento 2026", title: "FabCol FUSION XT", featured: false, tagColor: "#d97706", image: `${BASE}/1d75df36011faa86215a5b9753553542-15.png`, href: "/produtos/fabcol-fusion-xt" },
      { tag: "Piso sobre Piso", title: "FabCol Cola para Piso sobre Piso PU PP", featured: false, tagColor: "#007800", fichaTecnica: "/assets/fabcol-pu-pp-boletim-tecnico-rev0523.pdf", image: `${BASE}/ed5f023e7121f0d2c2dab31402e2edc2-5.png`, href: "/produtos/fabcol-cola-para-piso-sobre-piso-pu-pp" },
      { tag: "Fixação Vertical", title: "FabCol Fixação Vertical PU 780 SV", featured: false, tagColor: "#007800", fichaTecnica: "/assets/fabcol-pu-780-sv-boletim-tecnico--rev0523.pdf", image: `${BASE}/ef671627207b666f02def555305046ba-6.png`, href: "/produtos/fabcol-fixacao-vertical-pu-780-sv" },
      { tag: "MS Polímero", title: "FabCol MS H410", featured: false, tagColor: "#007800", image: `${BASE}/d1b51e7d527ab98de07290b7b187848d-16.png`, href: "/produtos/fabcol-ms-h410" },
      { tag: "Alta Resistência", title: "FabCol Cola para Pisos de Madeira PU 604", featured: false, tagColor: "#007800", fichaTecnica: "/assets/fabcol-pu-604-boletim-tecnico-rev0523.pdf", image: `${BASE}/5db05631849acb911bd0f8edba01a39d-3.png`, href: "/produtos/fabcol-cola-para-pisos-de-madeira-pu-604" },
    ],
  },
  {
    id: "aditivos-contra-pisos",
    name: "Aditivos para Contra Pisos",
    description:
      "Aditivos especiais para preparo e nivelamento de contrapisos cimentícios com alta performance.",
    products: [
      { tag: "Aditivo Cimentício", title: "Fabfix Aditivo para Contrapiso Cimentício", featured: false, tagColor: "#007800", fichaTecnica: "/assets/fabfix-500-boletim-tecnico-rev0523.pdf", image: `${BASE}/27b021d5fa9c60e91d9cefa058470993-1.png`, href: "/produtos/fabfix-aditivo-para-contrapiso-cimenticio" },
    ],
  },
  {
    id: "calafetos",
    name: "Calafetos",
    description:
      "Massas e selantes para acabamento e vedação de juntas em superfícies de madeira.",
    products: [
      { tag: "Massa Acrílica", title: "Fabmell Massa Acrílica para Madeira P51", featured: false, tagColor: "#007800", image: `${BASE}/f460d9420f163c384572d4c15aaa3f18-11.png`, href: "/produtos/fabmell-massa-acrilica-para-madeira-p51" },
    ],
  },
  {
    id: "cola-grama-sintetica",
    name: "Cola para Grama Sintética",
    description:
      "Cola PU formulada para fixação segura de grama sintética em áreas esportivas e paisagísticas.",
    products: [
      { tag: "Cola PU", title: "FabCol Cola para Grama Sintética", featured: false, tagColor: "#007800", image: `${BASE}/3fad2454102a29721d08dc9b58cde0dd-12.png`, href: "/produtos/fabcol-cola-para-grama-sintetica" },
    ],
  },
  {
    id: "colagem-madeira-geral",
    name: "Colagem de Madeira em Geral",
    description:
      "Soluções versáteis para colagem de peças de madeira em marcenaria, carpintaria e construção.",
    products: [
      { tag: "PVA", title: "FabCol Cola Branca PVA", featured: false, tagColor: "#007800", image: `${BASE}/abbd981f033e926e1507b68d4d9a5337-10.png`, href: "/produtos/fabcol-cola-branca-pva" },
    ],
  },
  {
    id: "colagem-rodapes",
    name: "Colagem de Rodapés",
    description:
      "Adesivos de alta fixação para instalação de rodapés em madeira, MDF e polímeros.",
    products: [
      { tag: "Super Cola", title: "FabCol Super Cola para Rodapé", featured: false, tagColor: "#007800", image: `${BASE}/0a96e274f217d6a71b610290efe8472f-9.png`, href: "/produtos/fabcol-super-cola-para-rodape" },
    ],
  },
  {
    id: "impermeabilizantes",
    name: "Impermeabilizantes",
    description:
      "Soluções de impermeabilização para contrapisos e superfícies de madeira expostas à umidade.",
    products: [
      { tag: "Primer Epóxi", title: "FabFlex Impermeabilizante de Contrapiso Primer Epóxi", featured: false, tagColor: "#007800", fichaTecnica: "/assets/fabflex-primer-epoxi-boletim-tecnico-rev-1224.pdf", image: `${BASE}/2bd6f196ae588abe7f79e0a2a9ffa340-7.png`, href: "/produtos/fabflex-impermeabilizante-de-contrapiso-primer-epoxi" },
      { tag: "Proteção para Madeira", title: "FabFlex Impermeabilizante para Madeira Safe Deck", featured: false, tagColor: "#007800", fichaTecnica: "/assets/fabflex-safe-deck-boletim-tecnico-rev0823.pdf", image: `${BASE}/6710793c5670e37391f570d40dbe7496-8.png`, href: "/produtos/fabflex-impermeabilizante-para-madeira-safe-deck" },
      { tag: "Contrapiso", title: "FabFlex Impermeabilizante de Contrapiso", featured: false, tagColor: "#007800", fichaTecnica: "/assets/fabflex-700-boletim-tecnico-rev0523.pdf", image: `${BASE}/ea27556fae4c71df9dbf0489e149c327-2.png`, href: "/produtos/fabflex-impermeabilizante-de-contrapiso" },
    ],
  },
];

export default function ProductsClient() {
  const [active, setActive] = useState("all");
  const [search, setSearch] = useState("");

  const byCategory =
    active === "all"
      ? categories
      : categories.filter((c) => c.id === active);

  const query = search.trim().toLowerCase();
  const visible = query
    ? byCategory
        .map((cat) => ({
          ...cat,
          products: cat.products.filter(
            (p) =>
              p.title.toLowerCase().includes(query) ||
              p.tag.toLowerCase().includes(query) ||
              cat.name.toLowerCase().includes(query)
          ),
        }))
        .filter((cat) => cat.products.length > 0)
    : byCategory;

  return (
    <>
      {/* Sticky category filter */}
      <div
        className="sticky top-16 z-40 border-b"
        style={{ background: "#f4f5f0", borderColor: "#e7ebe8" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center gap-3 py-3">
            <div className="relative">
              <span
                className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                style={{ color: "#9ca3af" }}
              >
                <SearchIcon />
              </span>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar produto..."
                className="pl-9 pr-3 py-1.5 rounded-full text-sm outline-none transition-colors"
                style={{ border: "1px solid #d1d5db", background: "#fff", width: 220 }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#007800")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "#d1d5db")}
              />
            </div>
            <div className="flex flex-wrap items-center gap-2">
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
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-6 pb-24 flex flex-col gap-16 pt-12">
        {visible.length === 0 && (
          <p className="text-center text-gray-500 text-sm py-12">
            Nenhum produto encontrado.
          </p>
        )}
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
                  className="bg-white rounded-2xl overflow-hidden flex flex-col transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.10)] group"
                  style={{
                    border: p.featured ? "1.5px solid #007800" : "1px solid #e7ebe8",
                  }}
                >
                  {/* Product image */}
                  <div
                    className="relative w-full flex items-center justify-center overflow-hidden"
                    style={{
                      height: 280,
                      background: "#0a1a0a",
                    }}
                  >
                    {/* Radial green glow */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "radial-gradient(ellipse at center, rgba(34,197,94,0.22) 0%, rgba(34,197,94,0.08) 45%, transparent 70%)",
                      }}
                    />
                    {/* Bottom floor fade */}
                    <div
                      className="absolute bottom-0 left-0 right-0 pointer-events-none"
                      style={{
                        height: "40%",
                        background:
                          "linear-gradient(to top, rgba(10,26,10,0.9) 0%, transparent 100%)",
                      }}
                    />
                    <Image
                      src={p.image}
                      alt={p.title}
                      width={320}
                      height={320}
                      className="object-contain relative z-10 transition-transform duration-500 group-hover:scale-105"
                      style={{ maxHeight: 240, filter: "drop-shadow(0 12px 32px rgba(0,0,0,0.6))" }}
                    />
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
                        href={p.href ?? "#contato"}
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

function SearchIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
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
