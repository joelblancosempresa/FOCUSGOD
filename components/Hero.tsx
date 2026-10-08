"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section style={{ overflow: "hidden" }}>

      {/* ── MÓVIL (sin cambios) ────────────────────────────── */}
      <div className="md:hidden" style={{ background: "#ffffff" }}>
        <div className="pt-[82px] w-full">
          <div className="flex justify-center mt-11">
            <div style={{ borderRadius: "32px", overflow: "hidden" }} className="w-[290px]">
              <div style={{ background: "#20242e", padding: "32px 24px 28px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "12px", marginBottom: "28px" }}>
                  {["📸", "🎵", "▶️", "🐦", "💬", "📘", "🎮", "📺"].map((emoji, i) => (
                    <div key={i} style={{ background: "rgba(255,255,255,0.08)", borderRadius: "16px", aspectRatio: "1", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "28px", opacity: 0.4 }}>
                      {emoji}
                    </div>
                  ))}
                </div>
                <button style={{ width: "100%", background: "#f0492e", color: "#fff", fontWeight: 700, fontSize: "17px", padding: "18px", borderRadius: "14px", border: "none", cursor: "pointer", boxShadow: "0 4px 0 0 #bf321c" }}>
                  🙏 Orar ahora
                </button>
                <div style={{ marginTop: "18px", textAlign: "center", paddingBottom: "4px" }}>
                  <span style={{ color: "#f0b429", fontWeight: 700, fontSize: "28px" }}>🔥 14</span>
                  <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", marginTop: "6px" }}>días seguidos</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center text-center gap-[14px] px-6 pt-10 pb-[52px]">
            <h1 style={{ fontSize: "2.6rem", fontWeight: 700, color: "#1a1a1a", lineHeight: 1.1, letterSpacing: "-0.5px", margin: 0 }}>
              Ora primero.<br />Enfoca tu día.
            </h1>
            <p style={{ fontSize: "16px", color: "#7a7872", lineHeight: 1.6, margin: 0 }}>
              FocusGod bloquea Instagram, TikTok y YouTube hasta que hayas pasado tiempo con Dios.
            </p>
            <div className="w-full flex flex-col gap-3 mt-2">
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" style={{ display: "block", background: "#f0492e", color: "#fff", fontWeight: 700, fontSize: "17px", padding: "18px", borderRadius: "14px", textDecoration: "none", textAlign: "center", boxShadow: "0 4px 0 0 #bf321c" }}>
                Descargar gratis
              </a>
              <a href="/download" style={{ display: "block", background: "rgba(255,255,255,0.7)", color: "#333", fontWeight: 600, fontSize: "16px", padding: "18px", borderRadius: "14px", textDecoration: "none", textAlign: "center", border: "1.5px solid rgba(0,0,0,0.1)" }}>
                Ya tengo cuenta
              </a>
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
            src="/hero-mockup.png"
            alt="FocusGod App"
            width={422}
            height={413}
            style={{ display: "block" }}
            priority
          />
        </div>

        {/* Texto + botones — derecha */}
        <div style={{ marginLeft: "79px", width: "522px", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h1 style={{ fontSize: "40px", fontWeight: 600, color: "#333", lineHeight: 1.1, letterSpacing: "-0.5px", textAlign: "center", margin: 0 }}>
            Ora primero. Enfoca tu día.
          </h1>
          <p style={{ fontSize: "14px", fontWeight: 600, color: "#555", lineHeight: 1.6, textAlign: "center", width: "490px", margin: "16px 0 0" }}>
            FocusGod bloquea Instagram, TikTok y YouTube hasta que hayas pasado tiempo con Dios.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "20px" }}>
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "264px", height: "60px", borderRadius: "20px", background: "#f0492e", color: "#fff", fontWeight: 700, fontSize: "17px", textDecoration: "none", boxShadow: "0 4px 0 0 #bf321c" }}
            >
              Descargar gratis
            </a>
            <a
              href="/download"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "264px", height: "60px", borderRadius: "20px", background: "#fff", color: "#333", fontWeight: 600, fontSize: "16px", textDecoration: "none", border: "1px solid #ebe9dd", boxShadow: "0 4px 0 0 #d4cec6" }}
            >
              Ya tengo cuenta
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
