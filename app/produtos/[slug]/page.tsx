import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, products } from "../../data/products";
import ProductVideoSection from "../../components/ProductVideoSection";
import Breadcrumb from "../../components/Breadcrumb";

function getColorChart(slug: string): string | null {
  if (slug.startsWith("fabcol-")) return "/assets/hq-catalogo-cores_digital_colas.jpg";
  if (slug.startsWith("fabmell-")) return "/assets/hq-catalogo-cores_digital_massas.png";
  return null;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.title} | Hídrico Química`,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();

  const colorChart = getColorChart(p.slug);

  return (
    <div className="min-h-screen" style={{ background: "#f4f5f0" }}>

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden pt-16 pb-16"
        style={{ background: "#0a1a0a" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute"
            style={{
              right: 0, top: 0, width: "60%", height: "100%",
              background: "radial-gradient(ellipse at center, rgba(34,197,94,0.20) 0%, rgba(34,197,94,0.08) 40%, transparent 68%)",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-12 pb-0 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <Breadcrumb
              className="mb-8"
              crumbs={[
                { label: "Início", href: "/" },
                { label: "Produtos", href: "/produtos" },
                { label: p.title },
              ]}
            />

            <span
              className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-5 border"
              style={{ background: "rgba(34,197,94,0.08)", borderColor: "rgba(34,197,94,0.25)", color: p.tagColor }}
            >
              {p.tag}
            </span>

            <h1
              className="font-extrabold text-white leading-tight tracking-tight mb-5"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
            >
              {p.title.split(" ").slice(0, -1).join(" ")}{" "}
              <span style={{ color: "#22c55e" }}>{p.title.split(" ").at(-1)}</span>
            </h1>

            <p className="text-base leading-relaxed max-w-md mb-8" style={{ color: "#9ca3af" }}>
              {p.description}
            </p>

            <div className="flex flex-wrap gap-3">
              {p.fichaTecnica && (
                <a
                  href={p.fichaTecnica}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm transition-all hover:brightness-110 active:scale-95"
                  style={{ background: "#22c55e", color: "#071007" }}
                >
                  <DownloadIcon />
                  Ficha Técnica
                </a>
              )}
              <a
                href="https://wa.me/554137982010"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm transition-colors hover:bg-white/5"
                style={{ border: "1.5px solid rgba(255,255,255,0.2)", color: "#fff" }}
              >
                Falar com especialista
              </a>
            </div>
          </div>

          {/* Right — product image */}
          <div className="relative flex justify-center items-center">
            <div
              className="absolute"
              style={{
                inset: 0,
                background: "radial-gradient(ellipse at center, rgba(34,197,94,0.25) 0%, transparent 68%)",
                filter: "blur(4px)",
              }}
            />
            <Image
              src={p.image}
              alt={p.title}
              width={420}
              height={420}
              className="relative z-10 object-contain"
              style={{ filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.7))", maxHeight: 380 }}
              priority
            />
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#007800" }}>
            Diferenciais
          </p>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-12">
            Por que escolher o <span style={{ color: "#007800" }}>{p.title.split(" ").slice(0, 2).join(" ")}</span>?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {p.features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl p-6 border transition-all hover:-translate-y-1 hover:shadow-md"
                style={{ background: "#fff", borderColor: "#e7ebe8" }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-sm mb-4"
                  style={{ background: "rgba(0,120,0,0.08)", color: "#007800" }}
                >
                  ⬡
                </div>
                <h3 className="font-bold text-gray-900 mb-1.5">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPECS + STEPS ── */}
      <section className="py-20 px-6" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Specs */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#007800" }}>
              Ficha Técnica
            </p>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Especificações técnicas</h2>
            <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "#e7ebe8" }}>
              {p.specs.map((s, i) => (
                <div
                  key={s.label}
                  className="flex items-start justify-between gap-4 px-5 py-4"
                  style={{
                    background: i % 2 === 0 ? "#f9faf9" : "#fff",
                    borderBottom: i < p.specs.length - 1 ? "1px solid #e7ebe8" : "none",
                  }}
                >
                  <span className="text-sm font-semibold text-gray-500 shrink-0">{s.label}</span>
                  <span className="text-sm font-bold text-gray-900 text-right">{s.value}</span>
                </div>
              ))}
            </div>
            {p.fichaTecnica && (
              <div
                className="mt-6 rounded-2xl p-5 flex items-start gap-4 border"
                style={{ background: "#f0fdf4", borderColor: "rgba(34,197,94,0.2)" }}
              >
                <div className="mt-0.5 shrink-0 text-green-600"><InfoIcon /></div>
                <p className="text-sm text-green-900 leading-relaxed">
                  Para dados completos de rendimento, embalagens disponíveis e ensaios, baixe o boletim técnico oficial.
                </p>
              </div>
            )}

            {colorChart && (
              <div className="mt-6 rounded-2xl overflow-hidden border" style={{ borderColor: "#e7ebe8" }}>
                <div className="px-5 py-4" style={{ background: "#f9faf9", borderBottom: "1px solid #e7ebe8" }}>
                  <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#007800" }}>
                    Cores Disponíveis
                  </p>
                </div>
                <Image
                  src={colorChart}
                  alt={`Catálogo de cores — ${p.title}`}
                  width={700}
                  height={990}
                  className="w-full h-auto"
                />
              </div>
            )}
          </div>

          {/* Steps + Video tabs */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#007800" }}>
              Modo de Uso
            </p>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Como aplicar</h2>
            <ProductVideoSection steps={p.steps} video={p.video} />
          </div>
        </div>
      </section>

      {/* ── SURFACES ── */}
      {p.surfaces.length > 0 && (
        <section className="py-16 px-6" style={{ background: "#f4f5f0" }}>
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#007800" }}>
              Compatibilidade
            </p>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Superfícies compatíveis</h2>
            <div className="flex flex-wrap gap-3">
              {p.surfaces.map((s) => (
                <span
                  key={s}
                  className="px-5 py-2.5 rounded-full text-sm font-semibold border"
                  style={{ background: "#fff", borderColor: "#e7ebe8", color: "#374151" }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── RELATED ── */}
      <section className="py-20 px-6" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#007800" }}>
            Linha FabCol
          </p>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-10">Produtos relacionados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {p.related.map((r) => (
              <Link
                key={r.slug}
                href={`/produtos/${r.slug}`}
                className="group rounded-2xl overflow-hidden border flex flex-col transition-all hover:-translate-y-1.5 hover:shadow-lg"
                style={{ borderColor: "#e7ebe8" }}
              >
                <div
                  className="relative flex items-center justify-center overflow-hidden"
                  style={{ height: 200, background: "#0a1a0a" }}
                >
                  <div
                    className="absolute inset-0"
                    style={{ background: "radial-gradient(ellipse at center, rgba(34,197,94,0.20) 0%, transparent 68%)" }}
                  />
                  <Image
                    src={r.img}
                    alt={r.title}
                    width={160}
                    height={160}
                    className="object-contain relative z-10 transition-transform duration-500 group-hover:scale-105"
                    style={{ filter: "drop-shadow(0 8px 20px rgba(0,0,0,0.6))" }}
                  />
                </div>
                <div className="p-5 flex flex-col flex-1" style={{ background: "#f9faf9" }}>
                  <span className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: "#007800" }}>
                    {r.tag}
                  </span>
                  <p className="font-bold text-gray-900 text-sm leading-snug mb-4">{r.title}</p>
                  <span className="mt-auto text-xs font-semibold flex items-center gap-1" style={{ color: "#007800" }}>
                    Ver produto <span>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6" style={{ background: "#0a1a0a" }}>
        <div
          className="relative max-w-3xl mx-auto text-center overflow-hidden rounded-3xl px-10 py-16"
          style={{ background: "#0e1a0e", border: "1px solid rgba(34,197,94,0.14)" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at center, rgba(34,197,94,0.12) 0%, transparent 68%)" }}
          />
          <p className="text-xs font-bold uppercase tracking-widest mb-4 relative z-10" style={{ color: "#22c55e" }}>
            Fale com a Hídrico
          </p>
          <h2 className="text-3xl font-extrabold text-white mb-4 relative z-10">Precisa de ajuda técnica?</h2>
          <p className="text-gray-400 mb-8 leading-relaxed relative z-10">
            Nossa equipe está pronta para indicar o produto ideal e tirar dúvidas sobre aplicação, rendimento e compatibilidade.
          </p>
          <div className="flex flex-wrap gap-3 justify-center relative z-10">
            <a
              href="https://wa.me/554137982010"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm transition-all hover:brightness-110"
              style={{ background: "#22c55e", color: "#071007" }}
            >
              <WhatsAppIcon />
              Falar no WhatsApp
            </a>
            <a
              href="tel:+554137982010"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm hover:bg-white/5 transition-colors"
              style={{ border: "1.5px solid rgba(255,255,255,0.2)", color: "#fff" }}
            >
              (41) 3798-2010
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}
