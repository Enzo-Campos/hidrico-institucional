"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

/* ── Types ───────────────────────────────────────────── */
interface DocFile { label: string; file: string }
interface ProductEntry {
  id: string;
  category: string;
  product: string;
  tag: string;
  slug?: string;
  boletim?: { file: string; rev?: string };
  fds?: DocFile[];
}

/* ── Categories ──────────────────────────────────────── */
const categories = [
  { id: "pisos",     label: "Colagem de Pisos de Madeira" },
  { id: "grama",     label: "Cola para Grama Sintética" },
  { id: "imperme",   label: "Impermeabilizantes" },
  { id: "aditivos",  label: "Aditivos para Contra Pisos" },
  { id: "vinilicos", label: "Linha para Vinílicos" },
  { id: "outros",    label: "Outros Produtos" },
];

/* ── Products ────────────────────────────────────────── */
const allProducts: ProductEntry[] = [
  // ── Pisos de Madeira ──
  {
    id: "fusion-xt", category: "pisos",
    product: "FabCol FUSION XT", tag: "Lançamento 2026", slug: "fabcol-fusion-xt",
    boletim: { file: "/assets/BOLETINS/FABCOL FUSION XT/FUSION XT Boletim Tecnico.pdf", rev: "Mar/26" },
    fds: [
      { label: "Comp. A", file: "/assets/FDS/Fusion X/Cópia de FABCOL FUSION X (COMPONENTE A) - FDS - 0010.pdf" },
      { label: "Comp. B", file: "/assets/FDS/Fusion X/Cópia de FABCOL FUSION X (COMPONENTE  B) - FDS - 0011.docxREVISAO.pdf" },
    ],
  },
  {
    id: "pu-606", category: "pisos",
    product: "FabCol Cola para Pisos de Madeira PU 606", tag: "Alto Desempenho", slug: "fabcol-cola-para-pisos-de-madeira-pu-606",
    boletim: { file: "/assets/BOLETINS/Fabcol 606/Cópia de FABCOL PU 606®️ · Boletim Técnico · Rev-07-24.pdf", rev: "Jul/24" },
    fds: [
      { label: "Comp. A", file: "/assets/FDS/Fabcol 606/Cópia de FABCOL PU 606 (COMPONENTE A) - FDS - 0001.pdf" },
      { label: "Comp. B", file: "/assets/FDS/Fabcol 606/Cópia de FAB COL PU 606 (COMPONENTE  B) - FDS - 0002 REVISADO.pdf" },
    ],
  },
  {
    id: "pu-604", category: "pisos",
    product: "FabCol Cola para Pisos de Madeira PU 604", tag: "Alta Resistência", slug: "fabcol-cola-para-pisos-de-madeira-pu-604",
    boletim: { file: "/assets/BOLETINS/Fabcol 604/Cópia de FABCOL PU 604®️ · Boletim Técnico (2).pdf", rev: "Mai/23" },
    fds: [
      { label: "Comp. A", file: "/assets/FDS/Fabcol 604/Cópia de FABCOL PU 604 (COMPONENTE A) - FDS - 0003.pdf" },
      { label: "Comp. B", file: "/assets/FDS/Fabcol 604/Cópia de FAB COL PU 604 (COMPONENTE  B) - FDS - 0004 REVISAO.pdf" },
    ],
  },
  {
    id: "pu-pp", category: "pisos",
    product: "FabCol Cola para Piso sobre Piso PU PP", tag: "Piso sobre Piso", slug: "fabcol-cola-para-piso-sobre-piso-pu-pp",
    boletim: { file: "/assets/BOLETINS/Fabcol PP/Cópia de FABCOL® PU PP · Boletim Técnico · Rev-05-23.pdf", rev: "Mai/23" },
    fds: [
      { label: "Comp. A", file: "/assets/FDS/Fabcol PP/Cópia de FABCOL PU PP (COMPONENTE A) - FDS - 0007.pdf" },
      { label: "Comp. B", file: "/assets/FDS/Fabcol PP/Cópia de FABCOL PU PP (COMPONENTE B) - FDS - 0008.docxREVISAO.pdf" },
    ],
  },
  {
    id: "pu-780-sv", category: "pisos",
    product: "FabCol Fixação Vertical PU 780 SV", tag: "Fixação Vertical", slug: "fabcol-fixacao-vertical-pu-780-sv",
    boletim: { file: "/assets/BOLETINS/Fabcol SV/Cópia de FABCOL® PU 780 SV · Boletim Técnico · Rev-05-23.pdf", rev: "Mai/23" },
    fds: [
      { label: "Comp. A", file: "/assets/FDS/Fabcol SV/Cópia de FABCOL PU 780 SV (COMPONENTE A) - FDS - 0013.pdf" },
      { label: "Comp. B", file: "/assets/FDS/Fabcol SV/Cópia de FABCOL PU 780 SV (COMPONENTE B) - FDS - 0014.docxREVISAO.pdf" },
    ],
  },
  {
    id: "ms-h410", category: "pisos",
    product: "FabCol MS H410", tag: "MS Polímero", slug: "fabcol-ms-h410",
    fds: [{ label: "FDS", file: "/assets/FDS/FDS MS H410/MS H410.pdf" }],
  },
// ── Grama Sintética ──
  {
    id: "grama", category: "grama",
    product: "FabCol Cola para Grama Sintética", tag: "Cola PU", slug: "fabcol-cola-para-grama-sintetica",
    boletim: { file: "/assets/BOLETINS/Fabcol Grama Sintética/Cópia de FABCOL PU GRAMA SINTÉTICA®️ · Boletim Técnico.pdf" },
    fds: [
      { label: "Comp. A", file: "/assets/FDS/Fabcol Grama/Cópia de FABCOL PU GRAMA SINTÉTICA (COMPONENTE A) - FDS - 0005.pdf" },
      { label: "Comp. B", file: "/assets/FDS/Fabcol Grama/Cópia de FABCOL PU GRAMA SINTÉTICA (COMPONENTE B) - FDS - 0006.docx REVISAO.pdf" },
    ],
  },
  // ── Impermeabilizantes ──
  {
    id: "primer-epoxi", category: "imperme",
    product: "FabFlex Impermeabilizante de Contrapiso Primer Epóxi", tag: "Primer Epóxi", slug: "fabflex-impermeabilizante-de-contrapiso-primer-epoxi",
    boletim: { file: "/assets/BOLETINS/Primer epóxi/Cópia de FABFLEX®️ PRIMER EPÓXI · Boletim Técnico · Rev-12-24.pdf", rev: "Dez/24" },
    fds: [
      { label: "Comp. A", file: "/assets/FDS/Fabflex Primer Epóxi/Cópia de FABFLEX PRIMER EPÓXI (COMPONENTE A) - FDS - 0016.pdf" },
      { label: "Comp. B", file: "/assets/FDS/Fabflex Primer Epóxi/Cópia de FABFLEX PRIMER EPÓXI (COMPONENTE B) - FDS - 0017.docxREVISAO.pdf" },
    ],
  },
  {
    id: "safe-deck", category: "imperme",
    product: "FabFlex Impermeabilizante para Madeira Safe Deck", tag: "Proteção para Madeira", slug: "fabflex-impermeabilizante-para-madeira-safe-deck",
    boletim: { file: "/assets/BOLETINS/Safe Deck/Cópia de FABFLEX®️ SAFE DECK · Boletim Técnico · Rev-05-2024.pdf", rev: "Mai/24" },
    fds: [{ label: "FDS", file: "/assets/FDS/Safe Deck/Cópia de FABFLEX SAFE DECK - FDS - 0020.pdf" }],
  },
  {
    id: "fabflex-700", category: "imperme",
    product: "FabFlex Impermeabilizante de Contrapiso", tag: "Contrapiso", slug: "fabflex-impermeabilizante-de-contrapiso",
    boletim: { file: "/assets/BOLETINS/Fabflex/Cópia de FABFLEX®️ 700 · Boletim Técnico.pdf" },
    fds: [
      { label: "Comp. A", file: "/assets/FDS/Fabflex/Cópia de FABFLEX 700 (COMPONENTE A) - FDS - 0014.pdf" },
      { label: "Comp. B", file: "/assets/FDS/Fabflex/Cópia de FABFLEX 700 (COMPONENTE B) - FDS - 0015.docxREVISAO.pdf" },
    ],
  },
  // ── Aditivos ──
  {
    id: "fabfix", category: "aditivos",
    product: "FabFix Aditivo para Contrapiso Cimentício", tag: "Aditivo Cimentício", slug: "fabfix-aditivo-para-contrapiso-cimenticio",
    boletim: { file: "/assets/fabfix-500-boletim-tecnico-rev0523.pdf", rev: "Mai/23" },
    fds: [{ label: "FDS", file: "/assets/FDS/Fabfix/Cópia de FABFIX 500 - FDS - 0018.pdf" }],
  },
  // ── Outros ──
  {
    id: "pva", category: "outros",
    product: "FabCol Cola Branca PVA 300", tag: "PVA", slug: "fabcol-cola-branca-pva",
    boletim: { file: "/assets/BOLETINS/PVA/Cópia de BOLETIM TÉCNICO FABCOL PVA.pdf" },
    fds: [{ label: "FDS", file: "/assets/FDS/PVA/Cópia de FABCOL PVA 300 - FDS - 0009.pdf" }],
  },
  {
    id: "rodape", category: "outros",
    product: "FabCol Super Cola para Rodapé", tag: "Super Cola", slug: "fabcol-super-cola-para-rodape",
    boletim: { file: "/assets/BOLETINS/Rodapé/Cópia de Boletim Técnico Fabcol Rodapé.pdf" },
    fds: [{ label: "FDS", file: "/assets/FDS/RODAPÉ/Cópia de FABCOL RODAPÉ - FDS - 0012.pdf" }],
  },
  {
    id: "fabmell", category: "outros",
    product: "FabMell Massa Acrílica para Madeira P51", tag: "Massa Acrílica", slug: "fabmell-massa-acrilica-para-madeira-p51",
    boletim: { file: "/assets/BOLETINS/FabMell/Cópia de FABMELL· Boletim Técnico.pdf" },
    fds: [{ label: "FDS", file: "/assets/FDS/FabMell/Cópia de FABMELL MASSA FIXA P51 - FDS - 0019.pdf" }],
  },
  // ── Linha para Vinílicos ──
  {
    id: "fabgrip-3k", category: "vinilicos",
    product: "FabGrip 3K", tag: "Alta Aderência", slug: "fabgrip-3k",
    boletim: { file: "/assets/BOLETINS/FabGrip 3K/Cópia de FICHA TÉCNICA PRIMER SOBREPOSICAO GRIP.pdf" },
    fds: [{ label: "FDS", file: "/assets/FDS/FabGrip 3K/Cópia de FDS PRIMER SOBREPOSICAO GRIP.pdf" }],
  },
  {
    id: "fabprimer-3k", category: "vinilicos",
    product: "FabPrimer 3K", tag: "Alto Rendimento", slug: "fabprimer-3k",
    boletim: { file: "/assets/BOLETINS/FabPrimer 3K/Cópia de FICHA TÉCNICA PRIME BASE.pdf" },
    fds: [{ label: "FDS", file: "/assets/FDS/FabPrimer 3K/Cópia de FDS PRIME BASE.pdf" }],
  },
  {
    id: "fabblock-793", category: "vinilicos",
    product: "FabBlock 793", tag: "Barreira de Umidade", slug: "fabblock-793",
    boletim: { file: "/assets/BOLETINS/FabBlock 793/Cópia de FICHA TÉCNICA BLOQUEADOR DE VAPOR DE UMIDADE (1).pdf" },
    fds: [
      { label: "Comp. A", file: "/assets/FDS/FabBlock 793/Cópia de FDS Bloqueador de Vapor de Umidade A (1).pdf" },
      { label: "Comp. B", file: "/assets/FDS/FabBlock 793/Cópia de FDS Bloqueador de Vapor de Umidade B (1).pdf" },
    ],
  },
  {
    id: "fabvinil-501", category: "vinilicos",
    product: "FabVinil 501", tag: "Fixação Imediata", slug: "fabvinil-501",
    boletim: { file: "/assets/BOLETINS/FabVinil 501/Cópia de FICHA TÉCNICA ADESIVO PARA PISOS VINILICOS.pdf" },
    fds: [{ label: "FDS", file: "/assets/FDS/FabVinil 501/Cópia de FDS ADESIVO PARA PISOS VINILICOS (1).pdf" }],
  },
];

const btCount  = allProducts.filter(p => p.boletim).length;
const fdsCount = allProducts.filter(p => p.fds?.length).length;

/* ── Page ────────────────────────────────────────────── */
export default function ManuaisPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [docType, setDocType]               = useState<"all" | "bt" | "fds">("all");
  const [search, setSearch]                 = useState("");

  const filtered = useMemo(() =>
    allProducts.filter(p => {
      if (activeCategory !== "all" && p.category !== activeCategory) return false;
      if (docType === "bt"  && !p.boletim)     return false;
      if (docType === "fds" && !p.fds?.length) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        return p.product.toLowerCase().includes(q) || p.tag.toLowerCase().includes(q);
      }
      return true;
    }),
  [activeCategory, docType, search]);

  const grouped = useMemo(() =>
    categories
      .filter(c => activeCategory === "all" || c.id === activeCategory)
      .map(c => ({ ...c, items: filtered.filter(p => p.category === c.id) }))
      .filter(c => c.items.length > 0),
  [filtered, activeCategory]);

  function navBtn(isActive: boolean) {
    return isActive
      ? { background: "#007800", color: "#fff" }
      : { color: "#4b5563" };
  }

  function navHover(isActive: boolean, el: HTMLButtonElement, enter: boolean) {
    if (!isActive) el.style.background = enter ? "#f0fdf4" : "transparent";
  }

  return (
    <main style={{ background: "#f7f8f5", minHeight: "100vh" }}>

      {/* ── HEADER ── */}
      <div style={{ background: "#fff", borderBottom: "1px solid #e7ebe8" }}>
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] mb-3" style={{ color: "#007800" }}>
                Hídrico Química
              </p>
              <h1 className="font-black text-gray-900 leading-none mb-3" style={{ fontSize: "clamp(2rem,4vw,2.75rem)" }}>
                Manuais & Boletins
              </h1>
              <p className="text-gray-500 text-sm leading-relaxed" style={{ maxWidth: 520 }}>
                Boletins Técnicos e Fichas de Dados de Segurança (FDS) dos produtos Hídrico Química disponíveis para download em PDF.
              </p>
            </div>
            <div className="flex items-center gap-8 shrink-0 pb-1">
              {[
                { n: allProducts.length, label: "Produtos"           },
                { n: btCount,            label: "Boletins Técnicos"  },
                { n: fdsCount,           label: "Com FDS"            },
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
        <aside className="w-full lg:w-64 shrink-0 lg:sticky lg:top-24">

          {/* Search */}
          <div className="relative mb-6">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"><SearchIcon /></span>
            <input
              type="text"
              placeholder="Buscar produto..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm outline-none"
              style={{ background: "#fff", border: "1px solid #e7ebe8", color: "#111827" }}
            />
          </div>

          {/* Doc type filter */}
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 px-1">Tipo de Documento</p>
          <nav className="flex flex-col gap-1 mb-6">
            {([
              { id: "all" as const, label: "Todos os tipos",        dot: "#9ca3af" },
              { id: "bt"  as const, label: "Boletim Técnico",       dot: "#007800" },
              { id: "fds" as const, label: "Ficha de Dados (FDS)",  dot: "#1e40af" },
            ]).map(t => (
              <button
                key={t.id}
                onClick={() => setDocType(t.id)}
                className="w-full text-left px-4 py-2 rounded-xl text-sm font-semibold transition-all"
                style={navBtn(docType === t.id)}
                onMouseEnter={e => navHover(docType === t.id, e.currentTarget as HTMLButtonElement, true)}
                onMouseLeave={e => navHover(docType === t.id, e.currentTarget as HTMLButtonElement, false)}
              >
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ background: docType === t.id ? "rgba(255,255,255,0.7)" : t.dot }} />
                  {t.label}
                </span>
              </button>
            ))}
          </nav>

          {/* Category filter */}
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 px-1">Categoria</p>
          <nav className="flex flex-col gap-1">
            <button
              onClick={() => setActiveCategory("all")}
              className="w-full text-left px-4 py-2 rounded-xl text-sm font-semibold transition-all"
              style={navBtn(activeCategory === "all")}
              onMouseEnter={e => navHover(activeCategory === "all", e.currentTarget as HTMLButtonElement, true)}
              onMouseLeave={e => navHover(activeCategory === "all", e.currentTarget as HTMLButtonElement, false)}
            >
              Todas as categorias
              <span className="float-right text-xs font-normal mt-0.5" style={{ opacity: 0.6 }}>{filtered.length}</span>
            </button>
            {categories.map(cat => {
              const count = filtered.filter(p => p.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className="w-full text-left px-4 py-2 rounded-xl text-sm font-semibold transition-all"
                  style={navBtn(activeCategory === cat.id)}
                  onMouseEnter={e => navHover(activeCategory === cat.id, e.currentTarget as HTMLButtonElement, true)}
                  onMouseLeave={e => navHover(activeCategory === cat.id, e.currentTarget as HTMLButtonElement, false)}
                >
                  {cat.label}
                  <span className="float-right text-xs font-normal mt-0.5" style={{ opacity: 0.6 }}>{count}</span>
                </button>
              );
            })}
          </nav>

          {/* Contact card */}
          <div className="mt-6 rounded-2xl p-5 text-sm leading-relaxed" style={{ background: "#f0fdf4", border: "1px solid rgba(0,120,0,0.15)" }}>
            <p className="font-bold text-green-900 mb-2 text-[13px]">Documento não encontrado?</p>
            <p className="text-green-800 mb-3" style={{ fontSize: "12px" }}>Fale com nossa equipe técnica.</p>
            <a href="https://wa.me/554137982010" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold" style={{ color: "#007800" }}>
              <WhatsAppIcon /> WhatsApp →
            </a>
          </div>
        </aside>

        {/* ── CONTENT ── */}
        <div className="flex-1 min-w-0">

          {/* Count + legend */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <p className="text-xs text-gray-400 uppercase tracking-wider">
              {filtered.length} {filtered.length === 1 ? "produto" : "produtos"}
              {search ? ` para "${search}"` : activeCategory !== "all" ? ` em ${categories.find(c => c.id === activeCategory)?.label}` : ""}
            </p>
            <div className="flex items-center gap-4 text-[11px] font-medium text-gray-500">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm" style={{ background: "#007800" }} />
                Boletim Técnico
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-sm" style={{ background: "#1e40af" }} />
                Ficha de Dados (FDS)
              </span>
            </div>
          </div>

          {grouped.length === 0 ? (
            <div className="rounded-2xl border flex flex-col items-center justify-center py-20 text-center"
              style={{ background: "#fff", borderColor: "#e7ebe8" }}>
              <p className="font-semibold text-gray-400 mb-3">Nenhum resultado encontrado</p>
              <button
                onClick={() => { setActiveCategory("all"); setDocType("all"); setSearch(""); }}
                className="text-sm font-semibold"
                style={{ color: "#007800" }}
              >
                Limpar filtros
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-8">
              {grouped.map(group => (
                <div key={group.id}>
                  {/* Group heading */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-1 h-5 rounded-full" style={{ background: "#007800" }} />
                    <h2 className="text-sm font-extrabold text-gray-700 uppercase tracking-wider">{group.label}</h2>
                    <div className="flex-1 h-px" style={{ background: "#e7ebe8" }} />
                  </div>

                  {/* Product rows */}
                  <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #e7ebe8", background: "#fff" }}>
                    {group.items.map((item, idx) => (
                      <div
                        key={item.id}
                        className="px-5 py-4 transition-colors hover:bg-gray-50"
                        style={{ borderBottom: idx < group.items.length - 1 ? "1px solid #f3f4f6" : "none" }}
                      >
                        <div className="flex items-start gap-4">
                          {/* Icon */}
                          <div className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center mt-0.5"
                            style={{ background: "#fff5f5", border: "1px solid #fee2e2" }}>
                            <PdfIcon />
                          </div>

                          {/* Info + actions */}
                          <div className="flex-1 min-w-0">
                            {/* Name row */}
                            <div className="flex items-start justify-between gap-3 mb-2">
                              <div className="flex flex-wrap items-center gap-2">
                                <p className="font-semibold text-gray-900 text-sm leading-snug">{item.product}</p>
                                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                                  style={{ background: "#f0fdf4", color: "#007800" }}>
                                  {item.tag}
                                </span>
                              </div>
                              {item.slug && (
                                <Link
                                  href={`/produtos/${item.slug}`}
                                  className="hidden sm:inline-flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-lg transition-colors shrink-0"
                                  style={{ color: "#6b7280", border: "1px solid #e7ebe8" }}
                                  onMouseEnter={e => {
                                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "#007800";
                                    (e.currentTarget as HTMLAnchorElement).style.color = "#007800";
                                  }}
                                  onMouseLeave={e => {
                                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "#e7ebe8";
                                    (e.currentTarget as HTMLAnchorElement).style.color = "#6b7280";
                                  }}
                                >
                                  Ver produto <ExternalIcon />
                                </Link>
                              )}
                            </div>

                            {/* Download buttons */}
                            <div className="flex flex-wrap items-center gap-2">
                              {item.boletim && docType !== "fds" && (
                                <a
                                  href={item.boletim.file}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  download
                                  className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg transition-all hover:brightness-110 active:scale-95"
                                  style={{ background: "#007800", color: "#fff" }}
                                >
                                  <DownloadIcon />
                                  Boletim Técnico
                                  {item.boletim.rev && (
                                    <span className="opacity-70 font-normal ml-1">Rev. {item.boletim.rev}</span>
                                  )}
                                </a>
                              )}
                              {item.fds && docType !== "bt" && item.fds.map(f => (
                                <a
                                  key={f.file}
                                  href={f.file}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  download
                                  className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg transition-all hover:brightness-110 active:scale-95"
                                  style={{ background: "#1e40af", color: "#fff" }}
                                >
                                  <DownloadIcon />
                                  {f.label === "FDS" ? "Ficha FDS" : `FDS · ${f.label}`}
                                </a>
                              ))}
                            </div>
                          </div>
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

/* ── Icons ───────────────────────────────────────────── */
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
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
