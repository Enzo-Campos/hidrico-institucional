"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "#ffffff",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/assets/logo.webp"
            alt="Hídrico Química"
            width={140}
            height={40}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "Inicio", href: "/" },
            { label: "Produtos", href: "/produtos" },
            { label: "Blog", href: "/blog" },
            { label: "Manuais", href: "/manuais" },
            { label: "Contato", href: "/contato" },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-sm font-medium transition-colors"
              style={{ color: "#374151" }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#007800")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "#374151")
              }
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Phone CTA */}
        <a
          href="tel:+554137982010"
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-colors"
          style={{
            background: "#007800",
            color: "#ffffff",
            border: "1px solid #007800",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.background = "#005f00")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.background = "#007800")
          }
        >
          <PhoneIcon />
          (41) 3798-2010
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
          className="md:hidden p-2 rounded-lg transition-colors"
          style={{ color: "#374151" }}
        >
          {open ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-6 py-4 flex flex-col gap-4"
          style={{
            background: "rgba(10,26,10,0.96)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {[
            { label: "Inicio", href: "/" },
            { label: "Produtos", href: "/produtos" },
            { label: "Blog", href: "/blog" },
            { label: "Manuais", href: "/manuais" },
            { label: "Contato", href: "/contato" },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium"
              style={{ color: "#d1d5db" }}
            >
              {label}
            </Link>
          ))}
          <a
            href="tel:+554137982010"
            className="mt-2 flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold w-fit"
            style={{ background: "#111827", color: "#ffffff" }}
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
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
