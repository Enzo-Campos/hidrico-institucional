"use client";

import { useRef, useState } from "react";
import Link from "next/link";

const stats = [
  { value: "+30", label: "Anos de mercado" },
  { value: "+15", label: "Linhas de produto" },
  { value: "100%", label: "Tecnologia nacional" },
];

export default function QuemSomosSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  function toggleMute() {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  }

  return (
    <section style={{ background: "#080f08" }}>
      <div className="max-w-3xl mx-auto px-6 py-20 lg:py-28">

        {/* Eyebrow + Title */}
        <div className="text-center mb-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] mb-4" style={{ color: "#22c55e" }}>
            Quem Somos
          </p>
          <h2 className="font-black text-white leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Mais de 30 anos{" "}
            <span style={{ color: "#22c55e" }}>transformando</span>{" "}
            o mercado
          </h2>
        </div>

        {/* Video */}
        <div className="flex justify-center mb-10">
          <div
            className="relative w-full max-w-xs rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 24px 48px rgba(0,0,0,0.6)" }}
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
              className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 py-3"
              style={{ background: "linear-gradient(to top, rgba(4,11,4,0.92) 0%, transparent 100%)" }}
            >
              <span className="text-[9px] font-bold uppercase tracking-[0.22em]" style={{ color: "rgba(34,197,94,0.6)" }}>
                Institucional
              </span>
              <button
                onClick={toggleMute}
                className="flex items-center gap-1.5 text-[10px] font-semibold px-3 py-1.5 rounded-full transition-all hover:bg-white/10"
                style={{ border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.6)" }}
              >
                {muted ? <MuteIcon /> : <UnmuteIcon />}
                {muted ? "Ativar som" : "Silenciar"}
              </button>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <p className="text-base leading-relaxed" style={{ color: "#9ca3af" }}>
            Desde 1994, desenvolvemos sistemas completos de ancoragem e impermeabilização com tecnologia nacional, servindo profissionais em todo o Brasil.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-10 pb-10 text-center" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          {stats.map(({ value, label }) => (
            <div key={label}>
              <p className="font-black leading-none mb-1" style={{ color: "#22c55e", fontSize: "2rem" }}>{value}</p>
              <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: "#4b5563" }}>{label}</p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/sobre"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all hover:brightness-110 active:scale-95"
            style={{ background: "#22c55e", color: "#071007" }}
          >
            Nossa história
            <ChevronRight />
          </Link>
          <a
            href="https://wa.me/554137982010"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm hover:bg-white/5 transition-colors"
            style={{ border: "1.5px solid rgba(255,255,255,0.12)", color: "#d1d5db" }}
          >
            Falar com especialista
          </a>
        </div>

      </div>
    </section>
  );
}

function MuteIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <line x1="23" y1="9" x2="17" y2="15" /><line x1="17" y1="9" x2="23" y2="15" />
    </svg>
  );
}

function UnmuteIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}
