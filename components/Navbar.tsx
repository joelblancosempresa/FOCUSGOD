"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "Nosotros" },
  { href: "/download", label: "Descargar" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-black/5">
      <div className="max-w-5xl mx-auto px-5 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-ink">
          <span className="text-2xl">🔒</span><span>FocusGod</span>
        </Link>

        <div className="hidden sm:flex items-center gap-6">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-medium text-ink2 hover:text-ink transition-colors">
              {l.label}
            </Link>
          ))}
          <Link href="/download" className="btn-blue text-sm px-5 py-2.5">
            Descargar gratis
          </Link>
        </div>

        <button className="sm:hidden p-2 text-ink2" onClick={() => setOpen(!open)} aria-label="Menú">
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="sm:hidden bg-white border-t border-black/5 px-5 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-ink2">
              {l.label}
            </Link>
          ))}
          <Link href="/download" onClick={() => setOpen(false)} className="btn-blue text-sm px-5 py-2.5 text-center">
            Descargar gratis
          </Link>
        </div>
      )}
    </nav>
  );
}
