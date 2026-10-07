export default function FinalCTA() {
  return (
    <section style={{ background: "#f0492e", padding: "60px 24px", textAlign: "center" }}>
      <div className="max-w-[420px] md:max-w-xl mx-auto">
        <h2 style={{
          fontSize: "32px",
          fontWeight: 700,
          color: "#fff",
          lineHeight: 1.2,
          letterSpacing: "-0.3px",
          marginBottom: "10px",
        }}>
          Tu rutina espiritual empieza hoy.
        </h2>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.75)", marginBottom: "28px", lineHeight: 1.6 }}>
          Es para siempre. Sin atajos. Sin excusas.
        </p>
        <a
          href="https://apps.apple.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            background: "#fff",
            color: "#f0492e",
            fontWeight: 700,
            fontSize: "16px",
            padding: "16px 32px",
            borderRadius: "14px",
            textDecoration: "none",
          }}
        >
          Descargar gratis →
        </a>
      </div>
    </section>
  );
}
