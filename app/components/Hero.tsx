"use client";

import Image from "next/image";
import { useState } from "react";

const BASE = "/assets/produtos";

const lines = [
  {
    id: "pisos",
    tab: "Pisos de Madeira",
    tagline: "FabCol · PU Bicomponente",
    headline: "Fusion XT",
    image: `${BASE}/1d75df36011faa86215a5b9753553542-15.png`,
    href: "/produtos",
    specs: [
      { label: "Compressão", value: "45 MPa", top: "1rem", left: "1rem", right: "auto", bottom: "auto" },
      { label: "Temperatura", value: "80 °C", top: "1rem", right: "1rem", left: "auto", bottom: "auto" },
      { label: "Cura inicial", value: "24 h", bottom: "5rem", left: "1rem", top: "auto", right: "auto" },
    ],
  },
  {
    id: "grama",
    tab: "Grama Sintética",
    tagline: "FabCol · Linha Grama",
    headline: "Fixação para qualquer clima.",
    image: `${BASE}/3fad2454102a29721d08dc9b58cde0dd-12.png`,
    href: "/produtos",
    specs: [
      { label: "Temperatura", value: "80 °C", top: "1rem", left: "1rem", right: "auto", bottom: "auto" },
      { label: "Emissão VOC", value: "Zero", top: "1rem", right: "1rem", left: "auto", bottom: "auto" },
      { label: "Mistura", value: "3–5 min", bottom: "5rem", left: "1rem", top: "auto", right: "auto" },
    ],
  },
  {
    id: "imperme",
    tab: "Impermeabilizantes",
    tagline: "Linha Proteção",
    headline: "FabFlex Epóxi",
    image: `${BASE}/2bd6f196ae588abe7f79e0a2a9ffa340-7.png`,
    href: "/produtos",
    specs: [
      { label: "Faixa térmica", value: "±80 °C", top: "1rem", left: "1rem", right: "auto", bottom: "auto" },
      { label: "Solventes", value: "Zero", top: "1rem", right: "1rem", left: "auto", bottom: "auto" },
      { label: "Química", value: "Resistente", bottom: "5rem", left: "1rem", top: "auto", right: "auto" },
    ],
  },
];

const MARQUEE =
  "FabCol PU  ·  Fusion XT  ·  FabCol 606  ·  FabCol 604  ·  FabFlex Safe Deck  ·  FabFlex 700  ·  FabFix 500  ·  MS H410  ·  FabMell P51  ·  FabCol Grama  ·  Primer Epóxi  ·  ";

export default function Hero() {
  const [active, setActive] = useState(0);

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: "#080f08" }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(34,197,94,0.10) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute"
          style={{
            right: 0,
            top: 0,
            width: "70%",
            height: "100%",
            background:
              "radial-gradient(ellipse at 65% 45%, rgba(34,197,94,0.18) 0%, transparent 62%)",
          }}
        />
        <div
          className="absolute"
          style={{
            left: 0,
            top: "20%",
            width: "45%",
            height: "70%",
            background:
              "radial-gradient(ellipse at 30% 50%, rgba(34,197,94,0.05) 0%, transparent 65%)",
          }}
        />
      </div>

      {/* Main grid */}
      <div className="relative flex-1 max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center pt-24 pb-10">

        {/* ── LEFT ── */}
        <div className="lg:col-span-2 flex flex-col order-1 lg:order-1">

          {/* Headline */}
          <h1
            className="font-black text-white tracking-tight mb-6"
            style={{ fontSize: "clamp(2.6rem, 4.5vw, 3.8rem)", lineHeight: "0.96" }}
          >
            Expertise
            <br />
            em{" "}
            <span style={{ color: "#22c55e" }}>soluções</span>
            <br />
            químicas para
            <br />
            a construção.
          </h1>

          <p
            className="text-sm leading-relaxed mb-10"
            style={{ color: "#FFF", maxWidth: 340 }}
          >
            Mais de 30 anos desenvolvendo tecnologias para impermeabilização, preparação de superfícies e proteção de estruturas — com alto padrão de qualidade e durabilidade.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <a
              href="/produtos"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm transition-all hover:brightness-110 active:scale-95"
              style={{ background: "#22c55e", color: "#071007" }}
            >
              Ver todos os produtos
              <ArrowRight />
            </a>
            <a
              href="https://wa.me/554137982010"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm transition-colors hover:bg-white/5"
              style={{
                border: "1.5px solid rgba(255,255,255,0.12)",
                color: "#d1d5db",
              }}
            >
              Falar com especialista
            </a>
          </div>
        </div>

        {/* ── RIGHT ── */}
        <div className="lg:col-span-3 order-2 lg:order-2 flex flex-col">

          {/* Category tabs — below stage on mobile, above on desktop */}
          <div className="flex gap-2 flex-wrap order-2 lg:order-1 mt-6 lg:mt-0 lg:mb-5">
            {lines.map((l, i) => (
              <button
                key={l.id}
                onClick={() => setActive(i)}
                className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer"
                style={
                  active === i
                    ? { background: "#22c55e", color: "#071007" }
                    : {
                        background: "rgba(255,255,255,0.04)",
                        color: "#6b7280",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }
                }
              >
                {l.tab}
              </button>
            ))}
          </div>

          {/* Product stage */}
          <div
            className="relative rounded-3xl overflow-hidden order-1 lg:order-2 mt-6 lg:mt-0 min-h-105 lg:min-h-0 lg:aspect-16/10"
            style={{
              background: "linear-gradient(160deg, #0d1f0d 0%, #070f07 100%)",
              border: "1px solid rgba(34,197,94,0.12)",
              boxShadow:
                "0 0 80px rgba(34,197,94,0.07), inset 0 1px 0 rgba(255,255,255,0.04)",
            }}
          >
            {/* Inner glow */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 60% 50%, rgba(34,197,94,0.20) 0%, transparent 62%)",
              }}
            />

            {/* Floor fade */}
            <div
              className="absolute bottom-0 left-0 right-0"
              style={{
                height: "40%",
                background:
                  "linear-gradient(to top, rgba(7,15,7,0.98) 0%, transparent 100%)",
              }}
            />

            {/* Spec badges — all rendered, active set visible */}
            {lines.map((l, i) =>
              l.specs.map((s, j) => (
                <div
                  key={`${l.id}-${j}`}
                  className="absolute z-20 transition-opacity duration-300"
                  style={{
                    top: s.top,
                    left: s.left,
                    right: s.right,
                    bottom: s.bottom,
                    opacity: active === i ? 1 : 0,
                  }}
                >
                  <div
                    className="px-3 py-2 rounded-xl"
                    style={{
                      background: "rgba(7,15,7,0.88)",
                      border: "1px solid rgba(34,197,94,0.22)",
                      backdropFilter: "blur(8px)",
                      WebkitBackdropFilter: "blur(8px)",
                    }}
                  >
                    <p
                      className="font-black"
                      style={{ color: "#22c55e", fontSize: "1rem", lineHeight: 1 }}
                    >
                      {s.value}
                    </p>
                    <p
                      className="font-bold uppercase tracking-widest mt-0.5"
                      style={{ fontSize: "8px", color: "#4b5563" }}
                    >
                      {s.label}
                    </p>
                  </div>
                </div>
              ))
            )}

            {/* Product images — all rendered, active one visible */}
            {lines.map((l, i) => (
              <div
                key={l.id}
                className="absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-400"
                style={{ opacity: active === i ? 1 : 0 }}
              >
                <Image
                  src={l.image}
                  alt={l.tab}
                  width={340}
                  height={340}
                  className="object-contain"
                  style={{
                    maxHeight: "72%",
                    width: "auto",
                    filter: "drop-shadow(0 20px 48px rgba(0,0,0,0.85))",
                  }}
                  priority={i === 0}
                />
              </div>
            ))}

            {/* Bottom overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
              {lines.map((l, i) => (
                <div
                  key={l.id}
                  className="transition-opacity duration-300"
                  style={{
                    opacity: active === i ? 1 : 0,
                    position: active === i ? "relative" : "absolute",
                    inset: active === i ? "auto" : 0,
                  }}
                >
                  <p
                    className="font-bold uppercase tracking-[0.18em] mb-1"
                    style={{ fontSize: "9px", color: "#22c55e" }}
                  >
                    {l.tagline}
                  </p>
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-bold text-white text-sm leading-snug">
                      {l.headline}
                    </p>
                    <a
                      href={l.href}
                      className="shrink-0 inline-flex items-center gap-1.5 text-xs font-bold transition-all hover:gap-3"
                      style={{ color: "#22c55e" }}
                    >
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div
        className="relative overflow-hidden py-3.5"
        style={{
          borderTop: "1px solid rgba(34,197,94,0.07)",
          background: "rgba(0,0,0,0.25)",
        }}
      >
        <div
          className="flex whitespace-nowrap"
          style={{ animation: "hq-marquee 32s linear infinite" }}
        >
          {[MARQUEE, MARQUEE].map((text, i) => (
            <span
              key={i}
              className="font-bold uppercase tracking-[0.22em] pr-8"
              style={{ fontSize: "10px", color: "rgba(34,197,94,0.35)" }}
            >
              {text}
            </span>
          ))}
        </div>
        <style>{`
          @keyframes hq-marquee {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50%       { opacity: 0.4; }
          }
        `}</style>
      </div>
    </section>
  );
}

function ArrowRight({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
