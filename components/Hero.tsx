"use client";

export default function Hero() {
  return (
    <section style={{ background: "#ffffff", paddingTop: "82px", overflow: "hidden" }}>
      <div className="md:max-w-6xl md:mx-auto md:flex md:items-center md:gap-16 md:px-14 md:pb-20">

        {/* Phone mockup — top on mobile, LEFT on desktop */}
        <div className="flex justify-center mt-11 md:mt-0 md:flex-1 md:order-1">
          <div style={{ maxWidth: "290px", width: "100%", borderRadius: "28px", overflow: "hidden" }}>
            <div style={{ background: "#20242e", padding: "28px 20px 24px" }}>
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
        </div>

        {/* Text + buttons — bottom on mobile, RIGHT on desktop */}
        <div className="flex flex-col items-center text-center gap-[14px] px-6 pt-10 pb-[52px] md:flex-1 md:order-2 md:items-start md:text-left md:p-0">
          <h1
            className="md:text-[4rem]"
            style={{ fontSize: "2.6rem", fontWeight: 700, color: "#333333", lineHeight: 1.1, letterSpacing: "-0.5px", margin: 0 }}
          >
            Ora primero.<br />Enfoca tu día.
          </h1>
          <p style={{ fontSize: "16px", color: "#838381", lineHeight: 1.6, margin: 0 }}>
            FocusGod bloquea Instagram, TikTok y YouTube hasta que hayas pasado tiempo con Dios.
          </p>
          <div className="w-full md:max-w-[340px] flex flex-col gap-3 mt-2">
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
      </div>
    </section>
  );
}
