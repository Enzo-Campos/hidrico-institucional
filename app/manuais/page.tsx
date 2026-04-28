"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

const documents = [
  {
    id: "pisos",
    category: "Colagem de Pisos de Madeira",
    items: [
      { title: "FabCol Cola para Pisos de Madeira PU",       tag: "PU Monocomponente", file: "/assets/fabcol-pu-boletim-tecnico.pdf",              slug: "fabcol-cola-para-pisos-de-madeira-pu",           rev: null         },
      { title: "FabCol Cola para Pisos de Madeira PU 606",   tag: "Alto Desempenho",   file: "/assets/fabcol-pu-606-boletim-tecnico-rev0523.pdf",  slug: "fabcol-cola-para-pisos-de-madeira-pu-606",       rev: "Mai/23"     },
      { title: "FabCol Cola para Pisos de Madeira PU 604",   tag: "Alta Resistência",  file: "/assets/fabcol-pu-604-boletim-tecnico-rev0523.pdf",  slug: "fabcol-cola-para-pisos-de-madeira-pu-604",       rev: "Mai/23"     },
      { title: "FabCol Cola para Piso sobre Piso PU PP",     tag: "Piso sobre Piso",   file: "/assets/fabcol-pu-pp-boletim-tecnico-rev0523.pdf",   slug: "fabcol-cola-para-piso-sobre-piso-pu-pp",         rev: "Mai/23"     },
      { title: "FabCol Fixação Vertical PU 780 SV",          tag: "Fixação Vertical",  file: "/assets/fabcol-pu-780-sv-boletim-tecnico--rev0523.pdf", slug: "fabcol-fixacao-vertical-pu-780-sv",            rev: "Mai/23"     },
    ],
  },
  {
    id: "imperme",
    category: "Impermeabilizantes",
    items: [
      { title: "FabFlex Impermeabilizante de Contrapiso Primer Epóxi", tag: "Primer Epóxi",        file: "/assets/fabflex-primer-epoxi-boletim-tecnico-rev-1224.pdf", slug: "fabflex-impermeabilizante-de-contrapiso-primer-epoxi", rev: "Dez/24" },
      { title: "FabFlex Impermeabilizante para Madeira Safe Deck",     tag: "Proteção p/ Madeira", file: "/assets/fabflex-safe-deck-boletim-tecnico-rev0823.pdf",     slug: "fabflex-impermeabilizante-para-madeira-safe-deck",     rev: "Ago/23" },
      { title: "FabFlex Impermeabilizante de Contrapiso",              tag: "Contrapiso",          file: "/assets/fabflex-700-boletim-tecnico-rev0523.pdf",           slug: "fabflex-impermeabilizante-de-contrapiso",              rev: "Mai/23" },
    ],
  },
  {
    id: "aditivos",
    category: "Aditivos para Contra Pisos",
    items: [
      { title: "FabFix Aditivo para Contrapiso Cimentício", tag: "Aditivo Cimentício", file: "/assets/fabfix-500-boletim-tecnico-rev0523.pdf", slug: "fabfix-aditivo-para-contrapiso-cimenticio", rev: "Mai/23" },
    ],
  },
];

const totalDocs = documents.reduce((acc, d) => acc + d.items.length, 0);

export default function ManuaisPage() {
  const [active, setActive] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() =>
    documents
      .filter((d) => active === "all" || d.id === active)
      .map((d) => ({
        ...d,
        items: search.trim()
          ? d.items.filter((i) =>
              i.title.toLowerCase().includes(search.toLowerCase()) ||
              i.tag.toLowerCase().includes(search.toLowerCase())
            )
          : d.items,
      }))
      .filter((d) => d.items.length > 0),
    [active, search]
  );

  const visibleCount = filtered.reduce((acc, d) => acc + d.items.length, 0);

  return (
    <main style={{ background: "#f7f8f5", minHeight: "100vh" }}>

      {/* ── PAGE HEADER ── */}
      <div style={{ background: "#fff", borderBottom: "1px solid #e7ebe8" }}>
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] mb-3" style={{ color: "#007800" }}>
                Hídrico Química
              </p>
              <h1 className="font-black text-gray-900 leading-none mb-3" style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)" }}>
                Manuais & Downloads
              </h1>
              <p className="text-gray-500 text-sm leading-relaxed" style={{ maxWidth: 480 }}>
                Boletins técnicos e guias de aplicação dos produtos Hídrico Química disponíveis para download em PDF.
              </p>
            </div>
            <div className="flex items-center gap-8 shrink-0 pb-1">
              {[
                { n: totalDocs, label: "Documentos" },
                { n: documents.length, label: "Categorias" },
              ].map(({ n, label }) => (
                <div key={label} className="text-center">
                  <p className="font-black text-3xl leading-none" style={{ color: "#007800" }}>{n}</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10 pb-24 flex flex-col lg:flex-row gap-8 items-start">

        {/* ── SIDEBAR ── */}
        <aside className="lg:w-60 shrink-0 lg:sticky lg:top-24">
          {/* Search */}
          <div className="relative mb-5">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <SearchIcon />
            </span>
            <input
              type="text"
              placeholder="Buscar..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm outline-none"
              style={{
                background: "#fff",
                border: "1px solid #e7ebe8",
                color: "#111827",
              }}
            />
          </div>

          {/* Category nav */}
          <nav className="flex flex-col gap-1">
            <button
              onClick={() => setActive("all")}
              className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-all"
              style={
                active === "all"
                  ? { background: "#007800", color: "#fff" }
                  : { color: "#4b5563" }
              }
            >
              Todos os documentos
              <span
                className="float-right text-xs font-normal mt-0.5"
                style={{ opacity: 0.6 }}
              >
                {totalDocs}
              </span>
            </button>
            {documents.map((d) => (
              <button
                key={d.id}
                onClick={() => setActive(d.id)}
                className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-all"
                style={
                  active === d.id
                    ? { background: "#007800", color: "#fff" }
                    : { color: "#4b5563" }
                }
                onMouseEnter={(e) => {
                  if (active !== d.id) (e.currentTarget as HTMLButtonElement).style.background = "#f0fdf4";
                }}
                onMouseLeave={(e) => {
                  if (active !== d.id) (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                }}
              >
                {d.category}
                <span className="float-right text-xs font-normal mt-0.5" style={{ opacity: 0.6 }}>
                  {d.items.length}
                </span>
              </button>
            ))}
          </nav>

          {/* Contact card */}
          <div
            className="mt-6 rounded-2xl p-5 text-sm leading-relaxed"
            style={{ background: "#f0fdf4", border: "1px solid rgba(0,120,0,0.15)" }}
          >
            <p className="font-bold text-green-900 mb-2 text-[13px]">Documento não encontrado?</p>
            <p className="text-green-800 mb-3" style={{ fontSize: "12px" }}>
              Fale com nossa equipe técnica.
            </p>
            <a
              href="https://wa.me/554137982010"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold transition-all"
              style={{ color: "#007800" }}
            >
              <WhatsAppIcon /> WhatsApp →
            </a>
          </div>
        </aside>

        {/* ── DOCUMENT LIST ── */}
        <div className="flex-1 min-w-0">

          {/* Result count */}
          <p className="text-xs text-gray-400 mb-6 uppercase tracking-wider">
            {visibleCount} {visibleCount === 1 ? "documento" : "documentos"}{" "}
            {search ? `para "${search}"` : active !== "all" ? `em ${documents.find(d => d.id === active)?.category}` : ""}
          </p>

          {filtered.length === 0 ? (
            <div
              className="rounded-2xl border flex flex-col items-center justify-center py-20 text-center"
              style={{ background: "#fff", borderColor: "#e7ebe8" }}
            >
              <p className="font-semibold text-gray-400 mb-3">Nenhum resultado encontrado</p>
              <button
                onClick={() => { setActive("all"); setSearch(""); }}
                className="text-sm font-semibold"
                style={{ color: "#007800" }}
              >
                Limpar filtros
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-8">
              {filtered.map((group) => (
                <div key={group.id}>
                  {/* Category heading */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-1 h-5 rounded-full" style={{ background: "#007800" }} />
                    <h2 className="text-sm font-extrabold text-gray-700 uppercase tracking-wider">
                      {group.category}
                    </h2>
                    <div className="flex-1 h-px" style={{ background: "#e7ebe8" }} />
                  </div>

                  {/* Rows */}
                  <div
                    className="rounded-2xl overflow-hidden"
                    style={{ border: "1px solid #e7ebe8", background: "#fff" }}
                  >
                    {group.items.map((item, idx) => (
                      <div
                        key={item.slug}
                        className="flex items-center gap-4 px-5 py-4 transition-colors hover:bg-gray-50 group"
                        style={{
                          borderBottom: idx < group.items.length - 1 ? "1px solid #f3f4f6" : "none",
                        }}
                      >
                        {/* PDF icon */}
                        <div
                          className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                          style={{ background: "#fff5f5", border: "1px solid #fee2e2" }}
                        >
                          <PdfIcon />
                        </div>

                        {/* Title + tag */}
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-gray-900 text-sm leading-snug truncate">
                            {item.title}
                          </p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span
                              className="text-[10px] font-bold uppercase tracking-wider"
                              style={{ color: "#007800" }}
                            >
                              {item.tag}
                            </span>
                            {item.rev && (
                              <>
                                <span style={{ color: "#d1d5db" }}>·</span>
                                <span className="text-[10px] text-gray-400">Rev. {item.rev}</span>
                              </>
                            )}
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="shrink-0 flex items-center gap-2">
                          <Link
                            href={`/produtos/${item.slug}`}
                            className="hidden sm:inline-flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-lg transition-colors"
                            style={{ color: "#6b7280", border: "1px solid #e7ebe8" }}
                            onMouseEnter={(e) => {
                              (e.currentTarget as HTMLAnchorElement).style.borderColor = "#007800";
                              (e.currentTarget as HTMLAnchorElement).style.color = "#007800";
                            }}
                            onMouseLeave={(e) => {
                              (e.currentTarget as HTMLAnchorElement).style.borderColor = "#e7ebe8";
                              (e.currentTarget as HTMLAnchorElement).style.color = "#6b7280";
                            }}
                          >
                            Produto
                            <ExternalIcon />
                          </Link>
                          <a
                            href={item.file}
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                            className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-1.5 rounded-lg transition-all hover:brightness-110 active:scale-95"
                            style={{ background: "#007800", color: "#fff" }}
                          >
                            <DownloadIcon />
                            <span className="hidden sm:inline">Baixar</span>
                            <span className="sm:hidden">PDF</span>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

function SearchIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function PdfIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="14 2 14 8 20 8" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="9" y1="15" x2="15" y2="15" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}
