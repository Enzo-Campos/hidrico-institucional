"use client";

import { useState } from "react";
import type { ProductStep } from "../data/products";

interface Props {
  steps: ProductStep[];
  video?: string;
}

export default function ProductVideoSection({ steps, video }: Props) {
  const [tab, setTab] = useState<"steps" | "video">("steps");

  return (
    <div>
      {/* Tab bar */}
      <div
        className="flex gap-1 mb-8 p-1 rounded-xl w-fit"
        style={{ background: "#f3f4f6" }}
      >
        <button
          onClick={() => setTab("steps")}
          className="px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer"
          style={
            tab === "steps"
              ? { background: "#fff", color: "#111827", boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }
              : { background: "transparent", color: "#6b7280" }
          }
        >
          Como Aplicar
        </button>
        <button
          onClick={() => setTab("video")}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer"
          style={
            tab === "video"
              ? { background: "#fff", color: "#111827", boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }
              : { background: "transparent", color: "#6b7280" }
          }
        >
          <PlayIcon />
          Vídeo Demonstrativo
        </button>
      </div>

      {/* Steps tab */}
      {tab === "steps" && (
        <div className="flex flex-col gap-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="flex gap-5 items-start rounded-2xl p-5 border transition-all hover:border-green-200"
              style={{ background: "#f9faf9", borderColor: "#e7ebe8" }}
            >
              <span
                className="shrink-0 text-2xl font-black leading-none mt-0.5"
                style={{ color: "rgba(0,120,0,0.15)" }}
              >
                {s.n}
              </span>
              <div>
                <p className="font-bold text-gray-900 mb-1">{s.title}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Video tab */}
      {tab === "video" && (
        <div>
          {video ? (
            <div
              className="relative w-full overflow-hidden rounded-2xl"
              style={{ aspectRatio: "16/9", background: "#0a1a0a" }}
            >
              <iframe
                src={video}
                title="Vídeo demonstrativo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                style={{ border: "none" }}
              />
            </div>
          ) : (
            <div
              className="flex flex-col items-center justify-center rounded-2xl border text-center py-16 px-8"
              style={{ background: "#f9faf9", borderColor: "#e7ebe8", minHeight: 280 }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: "rgba(0,120,0,0.08)" }}
              >
                <PlayIcon size={24} color="#007800" />
              </div>
              <p className="font-bold text-gray-700 mb-2">Vídeo em breve</p>
              <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
                O vídeo demonstrativo deste produto estará disponível em breve. Entre em contato para orientação técnica.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function PlayIcon({ size = 14, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}
