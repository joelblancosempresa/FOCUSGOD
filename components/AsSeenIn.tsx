const studies = [
  { source: "Harvard Medical School", fact: "Una rutina espiritual matutina reduce el cortisol y el estrés hasta un 40%." },
  { source: "Stanford University", fact: "Se necesitan 21 días para crear un hábito duradero. La constancia es la clave." },
  { source: "American Psychological Association", fact: "Reducir el tiempo de pantalla por la mañana mejora el bienestar mental y el enfoque." },
  { source: "MIT — Media Lab", fact: "El móvil en la primera hora del día aumenta la ansiedad y reduce la productividad." },
];

export default function AsSeenIn() {
  return (
    <section style={{ background: "#FDFCF7" }}>

      {/* ── MÓVIL (sin cambios) ── */}
      <div className="md:hidden" style={{ padding: "48px 20px" }}>
        <div style={{ maxWidth: "420px", margin: "0 auto", background: "#F6F1E3", borderRadius: "24px", padding: "28px 20px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#333333", letterSpacing: "-0.2px", textAlign: "center", marginBottom: "20px" }}>
            Respaldado por datos
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {studies.map((s, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: "14px", padding: "14px 16px" }}>
                <p style={{ fontSize: "11px", fontWeight: 700, color: "#f0492e", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "5px" }}>
                  {s.source}
                </p>
                <p style={{ fontSize: "14px", color: "#838381", lineHeight: 1.55 }}>{s.fact}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── DESKTOP (Figma exact — 573px) ── */}
      <div
        className="hidden md:flex md:items-center md:justify-center"
        style={{ height: "573px" }}
      >
        <div style={{
          width: "1009px",
          height: "394px",
          background: "#F6F1E3",
          borderRadius: "24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "36px",
        }}>
          <h2 style={{
            fontSize: "20px",
            fontWeight: 600,
            color: "#333333",
            letterSpacing: "-0.2px",
            textAlign: "center",
            marginBottom: "28px",
          }}>
            Respaldado por datos
          </h2>

          <div style={{ display: "flex", gap: "105px" }}>
            {studies.map((s, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "147px", height: "200px", background: "#ddd8ce", borderRadius: "16px" }} />
                <p style={{ fontSize: "11px", fontWeight: 700, color: "#333", textTransform: "uppercase", letterSpacing: "0.04em", textAlign: "center", maxWidth: "147px" }}>
                  {s.source}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
