"use client";

import Image from "next/image";
import { CTA_HREF, CTA_PROPS, CTA_LABEL, CTA_NOTE } from "@/lib/cta";

export default function Hero() {
  return (
    <section style={{ overflow: "hidden" }}>

      {/* ── MÓVIL (sin cambios) ────────────────────────────── */}
      <div className="md:hidden" style={{ background: "#ffffff" }}>
        <div className="pt-[82px] w-full">
          <div className="flex justify-center mt-4">
            <Image
              src="/hero-jesus.png"
              alt="Jesús con un grupo de jóvenes saliendo de un móvil"
              width={230}
              height={308}
              style={{ display: "block" }}
              priority
            />
          </div>
          <div className="flex flex-col items-center text-center gap-[14px] px-6 pt-6 pb-[52px]">
            <h1 className="fg-h1-hero" style={{ fontWeight: 700, color: "#1a1a1a", lineHeight: 1.1, letterSpacing: "-0.5px", margin: 0 }}>
              Pon a Dios primero.<br />Cada día.
            </h1>
            <p className="fg-lead" style={{ color: "#7a7872", lineHeight: 1.6, margin: 0 }}>
              FocusGod te ayuda a orar y leer la Biblia cada día, y aparta las distracciones del móvil para que tu tiempo con Dios sea de verdad.
            </p>
            <div className="w-full flex flex-col gap-3 mt-2">
              <a href={CTA_HREF} {...CTA_PROPS} style={{ display: "block", background: "#f0492e", color: "#fff", fontWeight: 700, fontSize: "17px", padding: "18px", borderRadius: "14px", textDecoration: "none", textAlign: "center", boxShadow: "0 4px 0 0 #bf321c" }}>
                {CTA_LABEL}
              </a>
              <p style={{ fontSize: "13px", color: "#9a978f", margin: "4px 0 0" }}>{CTA_NOTE}</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── DESKTOP (exacto del Figma) ─────────────────────── */}
      <div
        className="hidden md:flex md:items-center"
        style={{ background: "#fdfcf8", height: "660px", paddingTop: "100px" }}
      >
        {/* Imagen mockup — izquierda */}
        <div style={{ marginLeft: "189px", flexShrink: 0 }}>
          <Image
            src="/hero-jesus.png"
            alt="Jesús con un grupo de jóvenes saliendo de un móvil"
            width={344}
            height={460}
            style={{ display: "block" }}
            priority
          />
        </div>

        {/* Texto + botones — derecha */}
        <div style={{ marginLeft: "79px", width: "522px", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <p role="heading" aria-level={1} style={{ fontSize: "40px", fontWeight: 600, color: "#333", lineHeight: 1.1, letterSpacing: "-0.5px", textAlign: "center", margin: 0 }}>
            Pon a Dios primero.<br />Cada día.
          </p>
          <p style={{ fontSize: "14px", fontWeight: 600, color: "#555", lineHeight: 1.6, textAlign: "center", width: "490px", margin: "16px 0 0" }}>
            FocusGod te ayuda a orar y leer la Biblia cada día, y aparta las distracciones del móvil para que tu tiempo con Dios sea de verdad.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "20px" }}>
            <a
              href={CTA_HREF}
              {...CTA_PROPS}
              style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "264px", height: "60px", borderRadius: "20px", background: "#f0492e", color: "#fff", fontWeight: 700, fontSize: "17px", textDecoration: "none", boxShadow: "0 4px 0 0 #bf321c" }}
            >
              {CTA_LABEL}
            </a>
            <p style={{ fontSize: "13px", color: "#9a978f", margin: "4px 0 0", textAlign: "center" }}>{CTA_NOTE}</p>
          </div>
        </div>
      </div>

    </section>
  );
}
