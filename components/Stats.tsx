const stats = [
  { value: "50K+", label: "usuarios activos" },
  { value: "365d", label: "racha máxima" },
  { value: "2M+", label: "oraciones completadas" },
];

export default function Stats() {
  return (
    <section style={{ background: "#FDFCF8" }}>

      {/* ── MÓVIL (sin cambios) ── */}
      <div className="md:hidden" style={{ padding: "40px 24px 48px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
          {stats.map((s, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ width: "100%", aspectRatio: "16/9", background: "#111111", borderRadius: "16px", marginBottom: "20px" }} />
              <p style={{ fontSize: "36px", fontWeight: 700, color: "#333333", lineHeight: 1, letterSpacing: "-0.5px" }}>{s.value}</p>
              <p style={{ fontSize: "14px", color: "#838381", marginTop: "6px", lineHeight: 1.5 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── DESKTOP (Figma exact — 532px, 3 dark cards) ── */}
      <div
        className="hidden md:flex md:items-center md:justify-center"
        style={{ height: "532px", gap: "40px" }}
      >
        {stats.map((s, i) => (
          <div
            key={i}
            style={{
              width: "400px",
              height: "225px",
              background: "#111111",
              borderRadius: "12px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <p style={{ fontSize: "56px", fontWeight: 700, color: "#ffffff", lineHeight: 1, letterSpacing: "-1px", margin: 0 }}>
              {s.value}
            </p>
            <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.6)", margin: 0 }}>
              {s.label}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}
