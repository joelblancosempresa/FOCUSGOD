export default function FocoSection() {
  return (
    <section>

      {/* ── MÓVIL (sin cambios) ── */}
      <div className="md:hidden aspect-[3/4]" style={{ position: "relative", width: "100%", background: "#111111" }}>
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "32px 24px 40px",
          background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.85) 40%)",
          textAlign: "center",
        }}>
          <h2 style={{ fontSize: "26px", fontWeight: 700, color: "#ffffff", lineHeight: 1.2, letterSpacing: "-0.3px", marginBottom: "20px" }}>
            Empieza mañana con Dios primero.
          </h2>
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "block", background: "#f0492e", color: "#fff", fontWeight: 700, fontSize: "16px", padding: "18px", borderRadius: "16px", textDecoration: "none" }}
          >
            Prueba 3 días gratis
          </a>
        </div>
      </div>

      {/* ── DESKTOP (Figma exact) ── */}
      <div
        className="hidden md:block"
        style={{ position: "relative", width: "100%", height: "518px", overflow: "hidden" }}
      >
        {/* Background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/foco-desktop-bg.png"
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "155.21%",
            top: "-55.21%",
            objectFit: "cover",
            pointerEvents: "none",
          }}
        />

        {/* Content overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <h2 style={{
            fontSize: "35px",
            fontWeight: 600,
            color: "#333333",
            lineHeight: 1.2,
            textAlign: "center",
            maxWidth: "702px",
            marginBottom: "32px",
          }}>
            Empieza cada mañana con Dios primero.
          </h2>
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "280px",
              height: "60px",
              background: "#f0492e",
              color: "#fff",
              fontWeight: 700,
              fontSize: "16px",
              borderRadius: "16px",
              textDecoration: "none",
            }}
          >
            Prueba 3 días gratis
          </a>
        </div>
      </div>

    </section>
  );
}
