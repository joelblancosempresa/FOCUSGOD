"use client";

export default function Hero() {
  return (
    <section
      className="pt-[82px] md:pt-[110px] md:pb-[56px]"
      style={{ background: "#ffffff", overflow: "hidden" }}
    >
      <div className="md:max-w-6xl md:mx-auto md:flex md:items-center md:gap-12 md:px-16 w-full">

        {/* Phone mockup — top on mobile, LEFT on desktop */}
        <div className="flex justify-center mt-11 md:mt-0 md:flex-1 md:order-1">
          <div
            style={{ borderRadius: "32px", overflow: "hidden" }}
            className="w-[290px] md:w-full md:max-w-[420px]"
          >
            <div style={{ background: "#20242e", padding: "32px 24px 28px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "12px", marginBottom: "28px" }}>
                {["📸", "🎵", "▶️", "🐦", "💬", "📘", "🎮", "📺"].map((emoji, i) => (
                  <div key={i} style={{
                    background: "rgba(255,255,255,0.08)",
                    borderRadius: "16px",
                    aspectRatio: "1",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "28px",
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
                fontSize: "17px",
                padding: "18px",
                borderRadius: "50px",
                border: "none",
                cursor: "pointer",
              }}>
                🙏 Orar ahora
              </button>
              <div style={{ marginTop: "18px", textAlign: "center", paddingBottom: "4px" }}>
                <span style={{ color: "#f0b429", fontWeight: 700, fontSize: "28px" }}>🔥 14</span>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", marginTop: "6px" }}>días seguidos</p>
              </div>
            </div>
          </div>
        </div>

        {/* Text + buttons — bottom on mobile, RIGHT on desktop */}
        <div className="flex flex-col items-center text-center gap-[14px] px-6 pt-10 pb-[52px] md:flex-1 md:order-2 md:items-start md:text-left md:p-0">
          <h1
            className="md:text-[3rem]"
            style={{ fontSize: "2.6rem", fontWeight: 700, color: "#1a1a1a", lineHeight: 1.1, letterSpacing: "-0.5px", margin: 0 }}
          >
            Ora primero.<br />Enfoca tu día.
          </h1>
          <p style={{ fontSize: "16px", color: "#7a7872", lineHeight: 1.6, margin: 0 }}>
            FocusGod bloquea Instagram, TikTok y YouTube hasta que hayas pasado tiempo con Dios.
          </p>
          <div className="w-full flex flex-col gap-3 mt-2 md:max-w-[320px]">
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
                background: "rgba(255,255,255,0.7)",
                color: "#333",
                fontWeight: 600,
                fontSize: "16px",
                padding: "18px",
                borderRadius: "50px",
                textDecoration: "none",
                textAlign: "center",
                border: "1.5px solid rgba(0,0,0,0.1)",
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
