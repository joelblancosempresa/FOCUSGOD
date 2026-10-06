"use client";

export default function Hero() {
  return (
    <section style={{ background: "#FDFCF7", paddingTop: "84px", overflow: "hidden" }}>

      {/* Mockup — top, no label above */}
      <div style={{ display: "flex", justifyContent: "center", padding: "24px 24px 8px" }}>
        <div style={{
          width: "100%",
          maxWidth: "340px",
          background: "#20242e",
          borderRadius: "24px",
          padding: "20px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
        }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "8px", marginBottom: "20px" }}>
            {["📸", "🎵", "▶️", "🐦", "💬", "📘", "🎮", "📺"].map((emoji, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.08)",
                borderRadius: "12px",
                aspectRatio: "1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "22px",
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
            fontSize: "14px",
            padding: "14px",
            borderRadius: "14px",
            border: "none",
            cursor: "pointer",
          }}>
            🙏 Orar ahora
          </button>
          <div style={{ marginTop: "12px", textAlign: "center" }}>
            <span style={{ color: "#f0b429", fontWeight: 700, fontSize: "22px" }}>🔥 14</span>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px", marginTop: "4px" }}>días seguidos</p>
          </div>
        </div>
      </div>

      {/* Title + subtitle + buttons */}
      <div style={{
        padding: "32px 24px 48px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: "12px",
        maxWidth: "420px",
        margin: "0 auto",
      }}>
        <h1 style={{
          fontSize: "2.5rem",
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
              fontSize: "16px",
              padding: "16px",
              borderRadius: "14px",
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            🍎 Descargar gratis
          </a>
          <a
            href="/download"
            style={{
              display: "block",
              background: "rgba(255,255,255,0.6)",
              color: "#333",
              fontWeight: 600,
              fontSize: "16px",
              padding: "16px",
              borderRadius: "14px",
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
