"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold text-xs tracking-wide"
            style={{ background: "#007800" }}
          >
            HQ
          </div>
          <div className="leading-tight">
            <p className="font-bold text-gray-900 text-sm">Hídrico Química</p>
            <p className="text-gray-400 text-[9px] tracking-[0.15em] uppercase">
              Adesivos Industriais
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "Início", href: "/" },
            { label: "Sobre", href: "#sobre" },
            { label: "Produtos", href: "/produtos" },
            { label: "Contato", href: "#contato" },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Phone CTA */}
        <a
          href="tel:+554137982010"
          className="hidden md:flex items-center gap-2 bg-gray-900 hover:bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors"
        >
          <PhoneIcon />
          (41) 3798-2010
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {open ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {[
            { label: "Início", href: "/" },
            { label: "Sobre", href: "#sobre" },
            { label: "Produtos", href: "/produtos" },
            { label: "Contato", href: "#contato" },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              {label}
            </Link>
          ))}
          <a
            href="tel:+554137982010"
            className="mt-2 flex items-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-full text-sm font-semibold w-fit"
          >
            <PhoneIcon />
            (41) 3798-2010
          </a>
        </div>
      )}
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
