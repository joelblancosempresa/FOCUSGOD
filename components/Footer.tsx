import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/about", label: "Sobre Nosotros" },
  { href: "/blog", label: "Blog" },
  { href: "/download", label: "Descargar" },
  { href: "/privacidad", label: "Privacidad" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#111", padding: "48px 24px 40px" }}>
      <div className="flex flex-col gap-8 md:max-w-6xl md:mx-auto md:flex-row md:items-start md:justify-between">

        {/* Logo + tagline */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
            <Image src="/app-icon.png" alt="FocusGod" width={36} height={36} style={{ borderRadius: "8px" }} />
            <span style={{ fontSize: "17px", fontWeight: 700, color: "#fff" }}>FocusGod</span>
          </div>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", lineHeight: 1.5, maxWidth: "220px" }}>
            Ora primero. Desbloquea todo.
          </p>
        </div>

        {/* Links */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 24px" }}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
              {l.label}
            </Link>
          ))}
        </div>

        {/* Store badges */}
        <div style={{ display: "flex", gap: "12px" }}>
          <div style={{
            display: "flex", alignItems: "center", gap: "8px",
            background: "#222", borderRadius: "10px", padding: "10px 16px",
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div>
              <div style={{ fontSize: "8px", color: "rgba(255,255,255,0.6)", letterSpacing: "0.3px" }}>Download on the</div>
              <div style={{ fontSize: "13px", fontWeight: 600, color: "#fff" }}>App Store</div>
            </div>
          </div>
          <div style={{
            display: "flex", alignItems: "center", gap: "8px",
            background: "#222", borderRadius: "10px", padding: "10px 16px",
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M3.18 23.76c.3.16.63.24.97.22l12.4-7.15-2.75-2.76-10.62 9.69z" fill="#EA4335"/>
              <path d="M22.38 10.62l-3.24-1.87-3.07 3.08 3.07 3.07 3.27-1.88c.93-.54.93-1.86-.03-2.4z" fill="#FBBC04"/>
              <path d="M3.18.24C2.84.06 2.46-.01 2.1.01L14.54 12.5l2.6-2.6L3.18.24z" fill="#4285F4"/>
              <path d="M2.1.01C1.28.06.69.72.69 1.63v20.74c0 .9.59 1.57 1.41 1.62l12.44-11.99L2.1.01z" fill="#34A853"/>
            </svg>
            <div>
              <div style={{ fontSize: "8px", color: "rgba(255,255,255,0.6)", letterSpacing: "0.3px" }}>GET IT ON</div>
              <div style={{ fontSize: "13px", fontWeight: 600, color: "#fff" }}>Google Play</div>
            </div>
          </div>
        </div>
      </div>

      <p className="md:max-w-6xl md:mx-auto" style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)", marginTop: "32px" }}>
        © 2025 FocusGod. Todos los derechos reservados.
      </p>
    </footer>
  );
}
