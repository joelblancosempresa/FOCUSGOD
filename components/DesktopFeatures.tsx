const features = [
  { icon: "🔒", title: "Bloqueo real", desc: "Instagram, TikTok y YouTube bloqueados hasta que ores." },
  { icon: "📖", title: "Oración guiada", desc: "Lecturas bíblicas y oraciones cortas para empezar el día." },
  { icon: "🔥", title: "Rachas diarias", desc: "21 días para transformar el hábito espiritual de tu vida." },
  { icon: "🙏", title: "Widget espiritual", desc: "Versículo del día y botón de oración en tu pantalla." },
];

export default function DesktopFeatures() {
  return (
    <section
      className="hidden md:block"
      style={{ background: "#f8f7f5", height: "500px" }}
    >
      <div style={{ display: "flex", gap: "32px", paddingLeft: "112px", paddingTop: "80px" }}>
        {features.map((f, i) => (
          <div
            key={i}
            style={{ width: "280px", height: "280px", background: "#fff", borderRadius: "24px", padding: "24px", flexShrink: 0 }}
          >
            <p style={{ fontSize: "36px", margin: "0 0 36px" }}>{f.icon}</p>
            <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#20242e", margin: "0 0 8px" }}>{f.title}</h3>
            <p style={{ fontSize: "14px", color: "#7a7872", lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
