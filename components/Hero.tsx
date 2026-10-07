"use client";

export default function Hero() {
  return (
    <section style={{ background: "#FDFCF7", paddingTop: "56px", overflow: "hidden" }}>

      {/* Mockup — borde a borde, sin card flotante */}
      <div style={{ margin: "44px 20px 0", borderRadius: "28px", overflow: "hidden" }}>
        <div style={{
          background: "#20242e",
          padding: "28px 20px 24px",
        }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "10px", marginBottom: "24px" }}>
            {["📸", "🎵", "▶️", "🐦", "💬", "📘", "🎮", "📺"].map((emoji, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.08)",
                borderRadius: "14px",
                aspectRatio: "1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "26px",
                opacity: 0.4,
              }}>
                {emoji}
              </div>
            ))}
          </div>
          <button style={{
            width: "100%",
            background: "#f0492e",
            color: "#fff",
            fontWeight: 700,
            fontSize: "16px",
            padding: "16px",
            borderRadius: "50px",
            border: "none",
            cursor: "pointer",
          }}>
            🙏 Orar ahora
          </button>
          <div style={{ marginTop: "14px", textAlign: "center" }}>
            <span style={{ color: "#f0b429", fontWeight: 700, fontSize: "24px" }}>🔥 14</span>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px", marginTop: "4px" }}>días seguidos</p>
          </div>
        </div>
      </div>

      {/* Title + subtitle + buttons */}
      <div style={{
        padding: "40px 24px 52px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: "14px",
        maxWidth: "420px",
        margin: "0 auto",
      }}>
        <h1 style={{
          fontSize: "2.6rem",
          fontWeight: 700,
          color: "#333333",
          lineHeight: 1.1,
          letterSpacing: "-0.5px",
          margin: 0,
        }}>
          Ora primero.<br />Enfoca tu día.
        </h1>
        <p style={{ fontSize: "16px", color: "#838381", lineHeight: 1.6, margin: 0 }}>
          FocusGod bloquea Instagram, TikTok y YouTube hasta que hayas pasado tiempo con Dios.
        </p>
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "12px", marginTop: "8px" }}>
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              background: "#f0492e",
              color: "#fff",
              fontWeight: 700,
              fontSize: "17px",
              padding: "18px",
              borderRadius: "50px",
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            Descargar gratis
          </a>
          <a
            href="/download"
            style={{
              display: "block",
              background: "rgba(255,255,255,0.6)",
              color: "#333",
              fontWeight: 600,
              fontSize: "16px",
              padding: "18px",
              borderRadius: "50px",
              textDecoration: "none",
              textAlign: "center",
              border: "1px solid rgba(0,0,0,0.08)",
            }}
          >
            Ya tengo cuenta
          </a>
        </div>
      </div>
    </section>
  );
}
