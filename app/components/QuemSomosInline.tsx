"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Breadcrumb from "./Breadcrumb";

export default function QuemSomosInline() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  function toggleMute() {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  }

  return (
    <div className="pt-32 pb-16 px-6" style={{ background: "#fff", borderBottom: "1px solid #e7ebe8" }}>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">

        {/* Video */}
        <div className="shrink-0 w-full max-w-[300px] mx-auto lg:mx-0">
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{ border: "1px solid #e7ebe8", boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}
          >
            <video
              ref={videoRef}
              src="/assets/institucional.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full block"
              style={{ aspectRatio: "9/16", objectFit: "cover" }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 flex items-center justify-end px-3 py-2"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%)" }}
            >
              <button
                onClick={toggleMute}
                className="flex items-center gap-1 text-[9px] font-semibold px-2.5 py-1 rounded-full transition-all hover:bg-white/20"
                style={{ border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)" }}
              >
                {muted ? <MuteIcon /> : <UnmuteIcon />}
                {muted ? "Som" : "Mudo"}
              </button>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="flex-1">
          <Breadcrumb
            className="mb-4"
            variant="light"
            crumbs={[
              { label: "Início", href: "/" },
              { label: "Sobre" },
            ]}
          />
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] mb-3" style={{ color: "#007800" }}>
            Hídrico Química
          </p>
          <h1 className="font-black text-gray-900 leading-tight mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Mais de 30 anos transformando o mercado de pisos
          </h1>
          <p className="text-gray-500 text-base leading-relaxed mb-8" style={{ maxWidth: 480 }}>
            A Hídrico Química nasceu da paixão pela química aplicada à construção civil. Desenvolvemos sistemas completos de ancoragem e impermeabilização com tecnologia de ponta, segurança e consciência ambiental — 100% nacionais.
          </p>

          <div className="flex gap-8 mb-8">
            {[
              { value: "+30", label: "Anos de mercado" },
              { value: "+15", label: "Linhas de produto" },
              { value: "100%", label: "Nacional" },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-2xl font-black leading-none mb-0.5" style={{ color: "#007800" }}>{value}</p>
                <p className="text-xs text-gray-400 uppercase tracking-wide">{label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/produtos"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all hover:brightness-110 active:scale-95"
              style={{ background: "#007800", color: "#fff" }}
            >
              Conhecer produtos
            </Link>
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-colors"
              style={{ border: "1.5px solid #e7ebe8", color: "#374151" }}
            >
              Fale conosco
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

function MuteIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <line x1="23" y1="9" x2="17" y2="15" /><line x1="17" y1="9" x2="23" y2="15" />
    </svg>
  );
}

function UnmuteIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  );
}
