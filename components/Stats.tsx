const stats = [
  { value: "50K+", label: "usuarios activos" },
  { value: "365d", label: "racha máxima" },
  { value: "2M+", label: "oraciones completadas" },
];

export default function Stats() {
  return (
    <section style={{ background: "#FDFCF7", padding: "40px 24px 48px" }}>
      <div className="flex flex-col gap-12 md:max-w-6xl md:mx-auto md:grid md:grid-cols-3 md:gap-10">
        {stats.map((s, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <div style={{
              width: "100%",
              aspectRatio: "16/9",
              background: "#111111",
              borderRadius: "16px",
              marginBottom: "20px",
            }} />
            <p style={{ fontSize: "36px", fontWeight: 700, color: "#333333", lineHeight: 1, letterSpacing: "-0.5px" }}>
              {s.value}
            </p>
            <p style={{ fontSize: "14px", color: "#838381", marginTop: "6px", lineHeight: 1.5 }}>
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
