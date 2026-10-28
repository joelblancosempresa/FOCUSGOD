const studies = [
  { source: "IDC · 2013", fact: "El 79% coge el móvil en los primeros 15 minutos después de despertarse." },
  { source: "University of Texas · 2017", fact: "Solo con tener el móvil cerca, aunque esté boca abajo, se reduce tu capacidad de concentración." },
  { source: "University College London · 2010", fact: "Crear un hábito lleva una media de 66 días. No basta con un buen propósito: hace falta constancia." },
  { source: "American Bible Society · 2024", fact: "Los jóvenes que leen la Biblia con constancia muestran más esperanza y bienestar que los que no." },
]

export default function AsSeenIn() {
  return (
    <section style={{ background: "#FDFCF7" }}>

      {/* ── MÓVIL (sin cambios) ── */}
      <div className="md:hidden" style={{ padding: "48px 20px" }}>
        <div style={{ maxWidth: "420px", margin: "0 auto", background: "#F6F1E3", borderRadius: "24px", padding: "28px 20px" }}>
          <h2 className="fg-h2" style={{ fontWeight: 700, color: "#333333", letterSpacing: "-0.2px", textAlign: "center", marginBottom: "20px" }}>
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
          minHeight: "394px",
          paddingBottom: "36px",
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

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", padding: "0 36px", width: "100%" }}>
            {studies.map((s, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: "16px", padding: "20px 18px" }}>
                <p style={{ fontSize: "11px", fontWeight: 700, color: "#f0492e", textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 10px", lineHeight: 1.4 }}>
                  {s.source}
                </p>
                <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.55, margin: 0 }}>{s.fact}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
