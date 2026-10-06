export default function HowItWorks() {
  const features = [
    {
      label: "🚫 Bloquea redes de apps",
      title: "Instagram puede esperar.\nDios no.",
      body: "FocusGod bloquea Instagram, TikTok y YouTube hasta que termines tu oración. Sin trucos. Sin atajos.",
    },
    {
      label: "🔥 Rachas diarias",
      title: "Cada día suma.\nCada racha importa.",
      body: "21 días para crear un hábito. Construye tu racha espiritual una mañana a la vez.",
    },
    {
      label: "🙏 Oración guiada",
      title: "No sabes cómo\nempezar. Nosotros sí.",
      body: "Oraciones cortas, versículos relevantes y guía paso a paso. Cada mañana lista para ti.",
    },
  ];

  return (
    <>
      {features.map((f, i) => (
        <section key={i} style={{ background: "#FDFCF7", padding: "40px 24px 48px" }}>
          <div style={{ maxWidth: "420px", margin: "0 auto" }}>
            {/* Black rectangle placeholder */}
            <div style={{
              width: "100%",
              aspectRatio: "16/9",
              background: "#111111",
              borderRadius: "16px",
              marginBottom: "20px",
            }} />

            {/* Title */}
            <h2 style={{
              fontSize: "22px",
              fontWeight: 700,
              color: "#333333",
              lineHeight: 1.25,
              letterSpacing: "-0.2px",
              marginBottom: "8px",
              textAlign: "center",
            }}>
              {f.title.replace("\n", " ")}
            </h2>

            {/* Body */}
            <p style={{ fontSize: "14px", color: "#838381", lineHeight: 1.6, textAlign: "center" }}>
              {f.body}
            </p>
          </div>
        </section>
      ))}
    </>
  );
}
