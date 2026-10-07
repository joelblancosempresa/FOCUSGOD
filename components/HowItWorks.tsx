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
    <section style={{ background: "#FDFCF7", padding: "48px 24px" }}>
      <div className="flex flex-col gap-14 md:max-w-6xl md:mx-auto md:grid md:grid-cols-3 md:gap-10">
        {features.map((f, i) => (
          <div key={i}>
            <div style={{
              width: "100%",
              aspectRatio: "16/9",
              background: "#111111",
              borderRadius: "16px",
              marginBottom: "20px",
            }} />
            <h2 style={{
              fontSize: "22px",
              fontWeight: 700,
              color: "#333333",
              lineHeight: 1.25,
              letterSpacing: "-0.2px",
              marginBottom: "8px",
              textAlign: "center",
            }}>
              {f.title}
            </h2>
            <p style={{ fontSize: "14px", color: "#838381", lineHeight: 1.6, textAlign: "center" }}>
              {f.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
