"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { products } from "../data/products";

const categories = [
  {
    id: "colagem-pisos-madeira",
    name: "Colagem de Pisos de Madeira",
    description:
      "Linha completa de adesivos poliuretânicos para colagem de tábuas, tacos e pisos engenheirados.",
  },
  {
    id: "aditivos-contra-pisos",
    name: "Aditivos para Contra Pisos",
    description:
      "Aditivos especiais para preparo e nivelamento de contrapisos cimentícios com alta performance.",
  },
  {
    id: "calafetos",
    name: "Calafetos",
    description:
      "Massas e selantes para acabamento e vedação de juntas em superfícies de madeira.",
  },
  {
    id: "cola-grama-sintetica",
    name: "Cola para Grama Sintética",
    description:
      "Cola PU formulada para fixação segura de grama sintética em áreas esportivas e paisagísticas.",
  },
  {
    id: "colagem-madeira-geral",
    name: "Colagem de Madeira em Geral",
    description:
      "Soluções versáteis para colagem de peças de madeira em marcenaria, carpintaria e construção.",
  },
  {
    id: "colagem-rodapes",
    name: "Colagem de Rodapés",
    description:
      "Adesivos de alta fixação para instalação de rodapés em madeira, MDF e polímeros.",
  },
  {
    id: "impermeabilizantes",
    name: "Impermeabilizantes",
    description:
      "Soluções de impermeabilização para contrapisos e superfícies de madeira expostas à umidade.",
  },
];

export default function ProductsClient() {
  const searchParams = useSearchParams();
  const [active, setActive] = useState(() => searchParams.get("categoria") ?? "all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const cat = searchParams.get("categoria");
    if (cat) setActive(cat);
  }, [searchParams]);

  const visibleCategories =
    active === "all"
      ? categories
      : categories.filter((c) => c.id === active);

  const q = search.trim().toLowerCase();

  return (
    <>
      {/* Category filter + search — sticky desktop only */}
      <div
        className="md:sticky top-16 z-40 border-b"
        style={{ background: "#f4f5f0", borderColor: "#e7ebe8" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-2 py-3">

            {/* Pills — wrap freely */}
            <div className="flex items-center gap-2 flex-wrap">
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

            {/* Search — own row, right-aligned on desktop */}
            <div className="flex md:justify-end">
              <div className="relative w-full md:w-auto">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <SearchIcon />
                </span>
                <input
                  type="text"
                  placeholder="Buscar produto..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="w-full md:w-52 pl-8 pr-8 py-1.5 rounded-full text-sm outline-none"
                  style={{ background: "#fff", border: "1px solid #d1d5db", color: "#111827" }}
                />
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    aria-label="Limpar busca"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-6 pb-24 flex flex-col gap-16 pt-12">
        {visibleCategories.every((cat) => {
          const ps = products.filter(
            (p) => p.category === cat.name && (!q || p.title.toLowerCase().includes(q) || p.tag.toLowerCase().includes(q))
          );
          return ps.length === 0;
        }) && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <p className="text-gray-400 font-semibold mb-2">Nenhum produto encontrado</p>
            <button
              onClick={() => setSearch("")}
              className="text-sm font-semibold"
              style={{ color: "#007800" }}
            >
              Limpar busca
            </button>
          </div>
        )}
        {visibleCategories.map((cat) => {
          const catProducts = products.filter(
            (p) => p.category === cat.name && (!q || p.title.toLowerCase().includes(q) || p.tag.toLowerCase().includes(q))
          );
          if (catProducts.length === 0) return null;
          return (
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
                {catProducts.map((p) => (
                  <div
                    key={p.slug}
                    className="bg-white rounded-2xl overflow-hidden flex flex-col transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.10)] group"
                    style={{ border: "1px solid #e7ebe8" }}
                  >
                    {/* Product image */}
                    <Link
                      href={`/produtos/${p.slug}`}
                      className="relative w-full flex items-center justify-center overflow-hidden"
                      style={{ height: 280, background: "#0a1a0a" }}
                    >
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background:
                            "radial-gradient(ellipse at center, rgba(34,197,94,0.22) 0%, rgba(34,197,94,0.08) 45%, transparent 70%)",
                        }}
                      />
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
                    </Link>

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
                          href={`/produtos/${p.slug}`}
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
          );
        })}
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
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
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
