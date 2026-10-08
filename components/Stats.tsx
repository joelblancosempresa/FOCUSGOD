const stats = [
  { value: "50K+", label: "usuarios activos", sublabel: "Una comunidad creciente", cardLeft: 80, emojiLeft: 260 },
  { value: "365d", label: "racha máxima", sublabel: "Disciplina espiritual real", cardLeft: 520, emojiLeft: 700 },
  { value: "2M+", label: "oraciones completadas", sublabel: "Momentos con Dios", cardLeft: 960, emojiLeft: 1140 },
];

export default function Stats() {
  return (
    <section style={{ background: "#FDFCF8" }}>

      {/* ── MÓVIL (sin cambios) ── */}
      <div className="md:hidden" style={{ padding: "40px 24px 48px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
          {stats.map((s, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ width: "100%", aspectRatio: "16/9", background: "#111111", borderRadius: "16px", marginBottom: "20px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "36px" }}>
                🙏
              </div>
              <p style={{ fontSize: "36px", fontWeight: 700, color: "#333333", lineHeight: 1, letterSpacing: "-0.5px" }}>{s.value}</p>
              <p style={{ fontSize: "14px", color: "#838381", marginTop: "6px", lineHeight: 1.5 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── DESKTOP (Figma exact — 532px) ── */}
      <div
        className="hidden md:block"
        style={{ height: "532px", position: "relative" }}
      >
        {/* Centered 1440px canvas */}
        <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", width: "1440px", height: "532px" }}>
          {stats.map((s, i) => (
            <div key={i}>
              {/* Dark card with emoji */}
              <div style={{
                position: "absolute",
                left: `${s.cardLeft}px`,
                top: "36px",
                width: "400px",
                height: "225px",
                background: "#111111",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "36px",
              }}>
                🙏
              </div>
              {/* Value — below card */}
              <p style={{ position: "absolute", left: `${s.cardLeft}px`, top: "285px", width: "400px", fontSize: "36px", fontWeight: 700, color: "#1a1a1a", margin: 0, letterSpacing: "-0.5px" }}>
                {s.value}
              </p>
              {/* Label */}
              <p style={{ position: "absolute", left: `${s.cardLeft}px`, top: "333px", width: "400px", fontSize: "16px", color: "#7a7872", margin: 0 }}>
                {s.label}
              </p>
              {/* Sub-label */}
              <p style={{ position: "absolute", left: `${s.cardLeft}px`, top: "365px", width: "400px", fontSize: "14px", fontWeight: 600, color: "#1a1a1a", margin: 0 }}>
                {s.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
