export default function DesktopCTA() {
  return (
    <div className="hidden md:block">

      {/* Illustration section — crop top portion to hide baked-in text at bottom of image */}
      <div style={{ position: "relative", width: "100%", height: "380px", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/cta-desktop-bg.png"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
        />
      </div>

      {/* CTA text section */}
      <div
        style={{
          background: "#ffffff",
          height: "198px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <h2 style={{
          fontSize: "40px",
          fontWeight: 600,
          color: "#333333",
          textAlign: "center",
          maxWidth: "667px",
          margin: 0,
          lineHeight: 1.2,
        }}>
          Tu rutina espiritual empieza hoy
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
          Descargar gratis
        </a>
      </div>

    </div>
  );
}
