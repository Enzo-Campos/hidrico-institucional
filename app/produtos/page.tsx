import type { Metadata } from "next";
import { Suspense } from "react";
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
    <div className="min-h-screen" style={{ background: "#f4f5f0" }}>
      {/* Page header */}
      <div className="pt-32 pb-14 px-6" style={{ background: "#fff", borderBottom: "1px solid #e7ebe8" }}>
        <div className="max-w-7xl mx-auto">
          <p
            className="text-[10px] font-bold uppercase tracking-[0.3em] mb-3"
            style={{ color: "#007800" }}
          >
            Hídrico Química
          </p>
          <h1 className="font-black text-gray-900 mb-4 leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Soluções para cada superfície
          </h1>
          <p className="text-gray-500 text-base leading-relaxed" style={{ maxWidth: 520 }}>
            Linha completa de adesivos, colas e selantes desenvolvidos para entregar máxima performance em campo.
          </p>
        </div>
      </div>

      {/* Interactive filter + grid */}
      <Suspense>
        <ProductsClient />
      </Suspense>
    </div>
  );
}
