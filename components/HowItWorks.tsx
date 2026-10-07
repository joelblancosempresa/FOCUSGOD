export default function HowItWorks() {
  const features = [
    {
      title: "Instagram puede esperar. Dios no.",
      body: "FocusGod bloquea Instagram, TikTok y YouTube hasta que termines tu oración. Sin trucos. Sin atajos.",
    },
    {
      title: "Cada día suma. Cada racha importa.",
      body: "21 días para crear un hábito. Construye tu racha espiritual una mañana a la vez.",
    },
    {
      title: "No sabes cómo empezar. Nosotros sí.",
      body: "Oraciones cortas, versículos relevantes y guía paso a paso. Cada mañana lista para ti.",
    },
  ];

  return (
    <section style={{ background: "#FDFCF8" }}>

      {/* ── MÓVIL (sin cambios) ── */}
      <div className="md:hidden" style={{ padding: "48px 24px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "56px" }}>
          {features.map((f, i) => (
            <div key={i}>
              <div style={{ width: "100%", aspectRatio: "16/9", background: "#111111", borderRadius: "16px", marginBottom: "20px" }} />
              <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#333333", lineHeight: 1.25, letterSpacing: "-0.2px", marginBottom: "8px", textAlign: "center" }}>
                {f.title}
              </h2>
              <p style={{ fontSize: "14px", color: "#838381", lineHeight: 1.6, textAlign: "center" }}>
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── DESKTOP (Figma exact — 1600px height) ── */}
      <div
        className="hidden md:block"
        style={{ position: "relative", height: "1600px", overflow: "hidden" }}
      >
        {/* Centered 1440px canvas */}
        <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", width: "1440px", height: "1600px" }}>

          {/* ── Module 1 ── */}
          {/* Rectangle SVG image — right column */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/howitworks-module1.svg"
            alt=""
            style={{ position: "absolute", left: "859px", top: "102px", width: "341px", height: "325.5px", objectFit: "cover" }}
          />
          {/* Text — left */}
          <div style={{ position: "absolute", left: "215px", top: "197px", width: "633px" }}>
            <h2 style={{ fontSize: "35px", fontWeight: 600, color: "#333333", lineHeight: 1.2, margin: 0 }}>
              Instagram puede esperar.<br />Dios no.
            </h2>
            <p style={{ fontSize: "14px", fontWeight: 600, color: "#848482", marginTop: "16px" }}>
              Bloqueo real de distracciones digitales
            </p>
          </div>

          {/* ── Module 2 ── */}
          {/* Dark rect — right */}
          <div style={{ position: "absolute", left: "859px", top: "614px", width: "341px", height: "341px", background: "#111", borderRadius: "12px" }} />
          {/* Text — left */}
          <div style={{ position: "absolute", left: "215px", top: "706px", width: "667px" }}>
            <h2 style={{ fontSize: "35px", fontWeight: 600, color: "#333333", lineHeight: 1.2, margin: 0 }}>
              Cada día suma.<br />Cada racha importa.
            </h2>
            <p style={{ fontSize: "14px", fontWeight: 600, color: "#848482", marginTop: "16px" }}>
              Hábito espiritual construido día a día
            </p>
          </div>
          {/* Large screenshot placeholder (full-width overlay) */}
          <div style={{ position: "absolute", left: "-15px", top: "887px", width: "1290px", height: "713px", background: "#111", borderRadius: "12px" }} />

          {/* ── Module 3 ── */}
          {/* Dark rect — left */}
          <div style={{ position: "absolute", left: "255px", top: "1140px", width: "277px", height: "292px", background: "#111", borderRadius: "12px" }} />
          {/* Text — right */}
          <div style={{ position: "absolute", left: "651px", top: "1226px", width: "667px" }}>
            <h2 style={{ fontSize: "35px", fontWeight: 600, color: "#333333", lineHeight: 1.2, margin: 0 }}>
              No sabes cómo empezar.<br />Nosotros sí.
            </h2>
            <p style={{ fontSize: "14px", fontWeight: 600, color: "#848482", marginTop: "16px" }}>
              Guías de oración personalizadas
            </p>
          </div>
          {/* Bottom screenshot strip */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/howitworks-screenshot3.png"
            alt=""
            style={{ position: "absolute", left: "-15px", top: "1432px", width: "1470px", height: "168px", objectFit: "cover", borderRadius: "8px" }}
          />

        </div>
      </div>

    </section>
  );
}
