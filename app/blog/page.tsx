"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CATEGORIES, CATEGORY_BG, posts } from "../data/blog";

function ArrowRight() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export default function BlogPage() {
  const [active, setActive] = useState("all");
  const [search, setSearch] = useState("");

  const q = search.trim().toLowerCase();

  const visible = posts.filter((p) => {
    if (active !== "all" && p.category !== active) return false;
    if (q && !p.title.toLowerCase().includes(q) && !p.category.toLowerCase().includes(q)) return false;
    return true;
  });

  function navBtn(isActive: boolean) {
    return isActive
      ? { background: "#007800", color: "#fff" }
      : { color: "#4b5563" };
  }

  function navHover(isActive: boolean, el: HTMLButtonElement, enter: boolean) {
    if (!isActive) el.style.background = enter ? "#f0fdf4" : "transparent";
  }

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
            Blog
          </h1>
          <p className="text-gray-500 text-base leading-relaxed" style={{ maxWidth: 540 }}>
            Dicas práticas de aplicação e histórias de obras reais em que a Hídrico Química esteve presente, entregando desempenho e confiabilidade do início ao fim do projeto.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10 pb-24 flex flex-col lg:flex-row gap-8 items-start">

        {/* ── SIDEBAR ── */}
        <aside className="w-full lg:w-64 shrink-0 lg:sticky lg:top-24">

          {/* Search */}
          <div className="relative mb-6">
            <span
              className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
              style={{ color: "#9ca3af" }}
            >
              <SearchIcon />
            </span>
            <input
              type="text"
              placeholder="Buscar artigo..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-8 py-2.5 rounded-xl text-sm outline-none"
              style={{ background: "#fff", border: "1px solid #e7ebe8", color: "#111827" }}
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

          {/* Category filter */}
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 px-1">Categoria</p>
          <nav className="flex flex-col gap-1">
            <button
              onClick={() => setActive("all")}
              className="w-full text-left px-4 py-2 rounded-xl text-sm font-semibold transition-all"
              style={navBtn(active === "all")}
              onMouseEnter={e => navHover(active === "all", e.currentTarget as HTMLButtonElement, true)}
              onMouseLeave={e => navHover(active === "all", e.currentTarget as HTMLButtonElement, false)}
            >
              Todas as categorias
              <span className="float-right text-xs font-normal mt-0.5" style={{ opacity: 0.6 }}>
                {posts.filter(p => !q || p.title.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)).length}
              </span>
            </button>
            {CATEGORIES.map((cat) => {
              const count = posts.filter(
                (p) => p.category === cat && (!q || p.title.toLowerCase().includes(q) || p.category.toLowerCase().includes(q))
              ).length;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className="w-full text-left px-4 py-2 rounded-xl text-sm font-semibold transition-all"
                  style={navBtn(active === cat)}
                  onMouseEnter={e => navHover(active === cat, e.currentTarget as HTMLButtonElement, true)}
                  onMouseLeave={e => navHover(active === cat, e.currentTarget as HTMLButtonElement, false)}
                >
                  {cat}
                  <span className="float-right text-xs font-normal mt-0.5" style={{ opacity: 0.6 }}>{count}</span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* ── CONTENT ── */}
        <div className="flex-1 min-w-0">
        <p className="text-sm text-gray-400 mb-8">
          {visible.length} {visible.length === 1 ? "artigo" : "artigos"}{active !== "all" ? ` em ${active}` : ""}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {visible.map((post) => {
            const bg = CATEGORY_BG[post.category] ?? CATEGORY_BG["Dicas"];
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-2xl overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
                style={{ border: "1px solid #e7ebe8" }}
              >
                {/* Thumbnail — cover image or colored gradient fallback */}
                <div
                  className="relative overflow-hidden"
                  style={{ height: 140, background: bg }}
                >
                  {post.cover ? (
                    <Image
                      src={post.cover}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <>
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
                    </>
                  )}
                  {/* Bottom fade for badge legibility */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 55%)" }}
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
                      style={{ color: "#007800" }}
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
            <p className="text-gray-400 text-sm">Nenhum artigo encontrado.</p>
            <button
              onClick={() => { setActive("all"); setSearch(""); }}
              className="mt-4 text-sm font-semibold transition-colors hover:text-green-800"
              style={{ color: "#007800" }}
            >
              Ver todos os artigos
            </button>
          </div>
        )}
        </div>
      </div>
    </main>
  );
}

function SearchIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}
