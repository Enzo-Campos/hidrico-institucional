"use client";

import { useState } from "react";
import Link from "next/link";

const CATEGORIES = ["Todos", "Pisos de Madeira", "Impermeabilização", "Grama Sintética", "Adesivos PU", "Técnico"];

const CATEGORY_COLORS: Record<string, string> = {
  "Pisos de Madeira":  "#92400e",
  "Impermeabilização": "#1e40af",
  "Grama Sintética":   "#166534",
  "Adesivos PU":       "#007800",
  "Técnico":           "#374151",
};

const CATEGORY_BG: Record<string, string> = {
  "Pisos de Madeira":  "linear-gradient(135deg, #78350f 0%, #92400e 100%)",
  "Impermeabilização": "linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)",
  "Grama Sintética":   "linear-gradient(135deg, #14532d 0%, #166534 100%)",
  "Adesivos PU":       "linear-gradient(135deg, #003d00 0%, #005700 100%)",
  "Técnico":           "linear-gradient(135deg, #111827 0%, #1f2937 100%)",
};

const posts = [
  {
    slug: "como-escolher-adesivo-piso-madeira",
    category: "Pisos de Madeira",
    title: "Como escolher o adesivo certo para cada tipo de piso de madeira",
    excerpt: "Tábuas maciças, engenheiradas e tacos exigem formulações distintas. Conheça os critérios técnicos que definem a escolha ideal do adesivo PU para cada substrato e condição de obra.",
    date: "12 Abr 2025",
    readTime: "6 min",
  },
  {
    slug: "primer-epoxi-vs-impermeabilizante-cimenticio",
    category: "Impermeabilização",
    title: "Primer epóxi vs. impermeabilizante cimentício: quando usar cada um",
    excerpt: "A escolha errada entre as duas soluções pode comprometer toda a impermeabilização. Entenda as diferenças de aplicação, custo e durabilidade em cada cenário de obra.",
    date: "05 Abr 2025",
    readTime: "4 min",
  },
  {
    slug: "fixacao-grama-sintetica-quadras",
    category: "Grama Sintética",
    title: "Fixação de grama sintética em quadras: guia completo para instaladores",
    excerpt: "Da preparação do substrato à cura final — protocolo passo a passo para garantir aderência máxima da cola PU bicomponente em qualquer condição climática.",
    date: "28 Mar 2025",
    readTime: "8 min",
  },
  {
    slug: "voc-zero-adesivos-pu",
    category: "Técnico",
    title: "VOC zero: por que isso importa na escolha de adesivos PU",
    excerpt: "A emissão de compostos orgânicos voláteis afeta a saúde dos instaladores e a qualificação LEED de edificações. Saiba o que avaliar antes de especificar um adesivo.",
    date: "18 Mar 2025",
    readTime: "5 min",
  },
  {
    slug: "resistencia-mecanica-adesivos-pu-bicomponente",
    category: "Adesivos PU",
    title: "Resistência mecânica em adesivos PU bicomponente: o que dizem os laudos",
    excerpt: "Análise comparativa de testes de compressão, tração e cisalhamento entre formulações monocomponentes e bicomponentes. Dados reais de laboratório.",
    date: "10 Mar 2025",
    readTime: "7 min",
  },
  {
    slug: "contrapiso-preparo-correto",
    category: "Pisos de Madeira",
    title: "Preparo de contrapiso: o passo mais negligenciado na instalação de pisos",
    excerpt: "Umidade residual, planeza e resistência à compressão do substrato são determinantes para a durabilidade da colagem. Veja os parâmetros mínimos exigidos.",
    date: "25 Fev 2025",
    readTime: "5 min",
  },
  {
    slug: "impermeabilizacao-decks-madeira",
    category: "Impermeabilização",
    title: "Impermeabilização de decks de madeira: proteção contra umidade e intempéries",
    excerpt: "Decks expostos exigem sistemas de proteção específicos. Compare primers epóxi, vernizes impermeabilizantes e membranas elastoméricas para cada tipo de madeira.",
    date: "14 Fev 2025",
    readTime: "6 min",
  },
  {
    slug: "cola-pu-temperatura-cura",
    category: "Adesivos PU",
    title: "Temperatura ambiente e tempo de cura: como a condição climática afeta a colagem",
    excerpt: "Adesivos PU são sensíveis à temperatura e à umidade do ar. Veja as faixas ideais de aplicação e as consequências de ignorar esses parâmetros em obra.",
    date: "03 Fev 2025",
    readTime: "4 min",
  },
];

function ArrowRight() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export default function BlogPage() {
  const [active, setActive] = useState("Todos");

  const visible = active === "Todos" ? posts : posts.filter((p) => p.category === active);

  return (
    <main style={{ background: "#f4f5f0", minHeight: "100vh" }}>

      {/* Page header */}
      <div
        className="pt-32 pb-14 px-6"
        style={{ background: "#fff", borderBottom: "1px solid #e7ebe8" }}
      >
        <div className="max-w-7xl mx-auto">
          <p
            className="text-[10px] font-bold uppercase tracking-[0.3em] mb-4"
            style={{ color: "#007800" }}
          >
            Hídrico Química
          </p>
          <h1
            className="font-black text-gray-900 mb-4 leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Artigos Técnicos
          </h1>
          <p className="text-gray-500 text-base leading-relaxed" style={{ maxWidth: 540 }}>
            Guias, análises e especificações técnicas sobre adesivos industriais, impermeabilização e preparação de superfícies para a construção civil.
          </p>
        </div>
      </div>

      {/* Sticky filter bar */}
      <div
        className="sticky top-16 z-30 border-b px-6 py-3"
        style={{ background: "#f4f5f0", borderColor: "#e7ebe8" }}
      >
        <div className="max-w-7xl mx-auto flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-150 whitespace-nowrap cursor-pointer active:scale-95"
              style={
                active === cat
                  ? { background: "#007800", color: "#fff", boxShadow: "0 2px 8px rgba(0,120,0,0.25)" }
                  : { background: "transparent", color: "#6b7280", border: "1px solid #d1d5db" }
              }
              onMouseEnter={(e) => {
                if (active !== cat) {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "#007800";
                  (e.currentTarget as HTMLButtonElement).style.color = "#007800";
                }
              }}
              onMouseLeave={(e) => {
                if (active !== cat) {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "#d1d5db";
                  (e.currentTarget as HTMLButtonElement).style.color = "#6b7280";
                }
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Articles grid */}
      <div className="max-w-7xl mx-auto px-6 py-12 pb-24">
        <p className="text-sm text-gray-400 mb-8">
          {visible.length} {visible.length === 1 ? "artigo" : "artigos"}{active !== "Todos" ? ` em ${active}` : ""}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((post) => {
            const color = CATEGORY_COLORS[post.category] ?? "#007800";
            const bg = CATEGORY_BG[post.category] ?? CATEGORY_BG["Adesivos PU"];
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-2xl overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
                style={{ border: "1px solid #e7ebe8" }}
              >
                {/* Thumbnail — colored gradient block */}
                <div
                  className="relative overflow-hidden"
                  style={{ height: 140, background: bg }}
                >
                  {/* Subtle dot texture */}
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                  {/* Diagonal highlight */}
                  <div
                    className="absolute"
                    style={{
                      top: "-40%",
                      right: "-10%",
                      width: "60%",
                      height: "180%",
                      background: "rgba(255,255,255,0.05)",
                      transform: "rotate(-25deg)",
                    }}
                  />
                  {/* Category label in thumbnail */}
                  <div className="absolute bottom-4 left-5">
                    <span
                      className="text-[9px] font-bold uppercase tracking-[0.22em] px-2.5 py-1 rounded-full"
                      style={{
                        background: "rgba(0,0,0,0.35)",
                        color: "rgba(255,255,255,0.85)",
                        backdropFilter: "blur(4px)",
                      }}
                    >
                      {post.category}
                    </span>
                  </div>
                  {/* Read time badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className="text-[9px] font-semibold px-2 py-0.5 rounded-full"
                      style={{
                        background: "rgba(0,0,0,0.25)",
                        color: "rgba(255,255,255,0.7)",
                      }}
                    >
                      {post.readTime}
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 p-6">
                  <h2 className="font-bold text-gray-900 text-base leading-snug mb-3 group-hover:text-green-800 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">
                    {post.excerpt}
                  </p>
                  <div
                    className="flex items-center justify-between pt-4"
                    style={{ borderTop: "1px solid #f3f4f6" }}
                  >
                    <span className="text-xs text-gray-400">{post.date}</span>
                    <span
                      className="inline-flex items-center gap-1.5 text-xs font-semibold transition-all group-hover:gap-2.5"
                      style={{ color }}
                    >
                      Ler artigo <ArrowRight />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {visible.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <p className="text-gray-400 text-sm">Nenhum artigo encontrado nesta categoria.</p>
            <button
              onClick={() => setActive("Todos")}
              className="mt-4 text-sm font-semibold transition-colors hover:text-green-800"
              style={{ color: "#007800" }}
            >
              Ver todos os artigos
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
