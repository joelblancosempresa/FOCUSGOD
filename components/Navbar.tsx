"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "Nosotros" },
  { href: "/download", label: "Descargar" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none"
         style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}>
      <style>{`
        @media (min-width: 768px) {
          .navbar-pill {
            margin: 0 !important;
            padding: 0 12% !important;
            border-radius: 0 !important;
            box-shadow: none !important;
            background: rgba(255,255,255,0.98) !important;
          }
        }
      `}</style>
      <div
        className="navbar-pill pointer-events-auto w-full"
        style={{
          margin: "8px 12px 0",
          padding: open ? "0 12px 12px 8px" : "0 12px 0 8px",
          borderRadius: "18px",
          background: "rgba(255, 255, 255, 0.97)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          boxShadow: "0 1px 10px rgba(0,0,0,0.06)",
        }}
      >
        {/* Logo row */}
        <div className="flex items-center justify-between pt-1" style={{ height: "68px" }}>
          {/* Logo — izquierda */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 md:flex-1 md:pl-10">
            <Image src="/app-icon.png" alt="FocusGod" width={40} height={40} className="rounded-[11px]" priority />
            <span style={{ fontSize: "18px", fontWeight: 700, color: "#20242e", letterSpacing: "-0.3px" }}>
              FocusGod
            </span>
          </Link>

          {/* Desktop: links centrados */}
          <div className="hidden md:flex items-center gap-12 flex-1 justify-end">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm font-medium text-ink2 hover:text-ink transition-colors">
                {l.label}
              </Link>
            ))}
          </div>

          {/* Desktop: CTA derecha */}
          <div className="hidden md:flex flex-1 justify-center">
            <Link href="/download" className="btn-blue text-sm px-5 py-2.5" style={{ boxShadow: "0 4px 0px rgba(190,35,10,0.5)" }}>Descargar gratis</Link>
          </div>

          {/* Hamburger — solo móvil */}
          <button
            className="md:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
            style={{ fontSize: "20px", lineHeight: 1, color: "#20242e", background: "none", border: "none", cursor: "pointer" }}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="md:hidden" style={{ display: "flex", flexDirection: "column" }}>
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-ink2 px-2 py-3 transition-colors"
                style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/download"
              onClick={() => setOpen(false)}
              className="btn-blue text-sm px-5 py-3 text-center mt-3"
            >
              Descargar gratis
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
