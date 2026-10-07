export default function FocoSection() {
  return (
    <section className="aspect-[3/4] md:aspect-[16/7]" style={{ position: "relative", width: "100%", background: "#111111" }}>
      {/* Text + button pinned to bottom */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: "32px 24px 40px",
        background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.85) 40%)",
        textAlign: "center",
      }}>
        <h2 style={{
          fontSize: "26px",
          fontWeight: 700,
          color: "#ffffff",
          lineHeight: 1.2,
          letterSpacing: "-0.3px",
          marginBottom: "20px",
        }}>
          Empieza mañana con Dios primero.
        </h2>
        <a
          href="https://apps.apple.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            background: "#f0492e",
            color: "#fff",
            fontWeight: 700,
            fontSize: "16px",
            padding: "18px",
            borderRadius: "16px",
            textDecoration: "none",
          }}
        >
          Prueba 3 días gratis
        </a>
      </div>
    </section>
  );
}
