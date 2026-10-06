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
    <>
      {/* Island pill — floats over the page */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none"
           style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}>
        <div
          className="pointer-events-auto w-full flex items-center justify-between"
          style={{
            margin: "10px 14px 0",
            height: "64px",
            padding: "0 14px 0 10px",
            borderRadius: "24px",
            background: "rgba(252, 251, 249, 0.55)",
            backdropFilter: "blur(20px) saturate(160%)",
            WebkitBackdropFilter: "blur(20px) saturate(160%)",
            boxShadow: "0 1px 16px rgba(32,36,46,0.06), 0 0 0 1px rgba(32,36,46,0.04)",
          }}
        >
          {/* Logo + name */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/app-icon.png"
              alt="FocusGod"
              width={46}
              height={46}
              className="rounded-[12px]"
              priority
            />
            <span style={{ fontSize: "19px", fontWeight: 700, color: "#20242e", letterSpacing: "-0.3px" }}>
              FocusGod
            </span>
          </Link>

          {/* Desktop links */}
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

          {/* Hamburger */}
          <button
            className="sm:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            <span className={`block w-[22px] h-[2px] bg-ink rounded-full transition-all duration-200 ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-[22px] h-[2px] bg-ink rounded-full transition-all duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-[22px] h-[2px] bg-ink rounded-full transition-all duration-200 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div
          className="fixed z-40 left-0 right-0 sm:hidden"
          style={{
            top: "calc(env(safe-area-inset-top, 0px) + 86px)",
            margin: "0 14px",
            borderRadius: "20px",
            background: "rgba(252, 251, 249, 0.97)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            boxShadow: "0 8px 32px rgba(32,36,46,0.12)",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-ink2 hover:text-ink px-2 py-3 rounded-xl hover:bg-black/5 transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/download"
            onClick={() => setOpen(false)}
            className="btn-blue text-sm px-5 py-3 text-center mt-2"
          >
            Descargar gratis
          </Link>
        </div>
      )}
    </>
  );
}
