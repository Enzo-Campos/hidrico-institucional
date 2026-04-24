import type { Metadata } from "next";
import ProductsClient from "../components/ProductsClient";

export const metadata: Metadata = {
  title: "Produtos | Hídrico Química",
  description:
    "Linha completa FabCol — adesivos, colas e selantes para pisos de madeira, grama sintética e revestimentos. Alto desempenho em cada formulação.",
  keywords: [
    "FabCol",
    "FabFlex",
    "Fabfix",
    "Fabmell",
    "cola PU",
    "adesivo poliuretânico",
    "pisos de madeira",
    "grama sintética",
    "impermeabilizante",
    "rodapé",
    "contrapiso",
    "Hídrico Química",
  ],
  openGraph: {
    title: "Produtos FabCol | Hídrico Química",
    description:
      "Conheça a linha completa de adesivos industriais desenvolvidos para máxima performance em campo.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function ProdutosPage() {
  return (
    <div className="min-h-screen pt-16" style={{ background: "#f4f5f0" }}>
      {/* Page header — static, rendered server-side for SEO */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <p
          className="text-xs font-bold uppercase tracking-[0.2em] mb-4"
          style={{ color: "#007800" }}
        >
          Linha FabCol
        </p>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Produtos para cada{" "}
            <span style={{ color: "#007800" }}>superfície</span>.
          </h1>
          <p className="text-gray-500 text-base leading-relaxed max-w-md">
            Conheça nossa linha completa de adesivos, colas e selantes —
            desenvolvidos para entregar máxima performance em campo.
          </p>
        </div>
      </div>

      {/* Interactive filter + grid */}
      <ProductsClient />
    </div>
  );
}
