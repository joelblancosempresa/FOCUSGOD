export default function DesktopCTA() {
  return (
    <section
      className="hidden md:flex md:flex-col md:items-center md:justify-center"
      style={{ background: "#ffffff", height: "300px" }}
    >
      <h2 style={{ fontSize: "40px", fontWeight: 700, color: "#1a1a1a", textAlign: "center", margin: "0 0 24px" }}>
        Empieza hoy. Es gratis.
      </h2>
      <a
        href="https://apps.apple.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "280px", height: "58px", borderRadius: "50px", background: "#f0492e", color: "#fff", fontWeight: 700, fontSize: "16px", textDecoration: "none", boxShadow: "0 4px 0 0 #bf321c" }}
      >
        🍎 Descargar en App Store
      </a>
    </section>
  );
}
