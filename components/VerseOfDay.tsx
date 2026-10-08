import Image from "next/image";

export default function VerseOfDay() {
  return (
    <section style={{ background: "#F9F5EB" }}>

      {/* ── MÓVIL (sin cambios) ── */}
      <div className="md:hidden" style={{ padding: "56px 24px 60px" }}>
        <div style={{ maxWidth: "420px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            fontSize: "26px",
            fontWeight: 700,
            color: "#333333",
            letterSpacing: "-0.2px",
            marginBottom: "28px",
          }}>
            <Image src="/bible-icon.png" alt="" width={30} height={30} style={{ flexShrink: 0 }} />
            Versículo del día
          </h2>

          <div style={{ marginBottom: "20px" }}>
            <svg width="52" height="40" viewBox="0 0 52 40" fill="none" style={{ display: "block", marginBottom: "12px" }}>
              <path d="M0 40V16C0 7.163 7.163 0 16 0H20V10H16C12.686 10 10 12.686 10 16V22H20V40H0Z" fill="#c4bdb0"/>
              <path d="M28 40V16C28 7.163 35.163 0 44 0H48V10H44C40.686 10 38 12.686 38 16V22H48V40H28Z" fill="#c4bdb0"/>
            </svg>
            <p style={{ fontSize: "16px", lineHeight: 1.6, color: "#333333", textAlign: "center" }}>
              &ldquo;Busca primero el reino de Dios y su justicia, y todas estas cosas os serán añadidas...&rdquo;
            </p>
          </div>

          <p style={{ fontSize: "14px", color: "#838381", marginBottom: "4px" }}>Mateo 6:33</p>
          <p style={{ fontSize: "12px", color: "#838381", marginBottom: "36px" }}>
            Powered by{" "}
            <a href="https://www.biblegateway.com" target="_blank" rel="noopener noreferrer" style={{ color: "#4a8fe8", textDecoration: "none" }}>
              BibleGateway.com
            </a>
          </p>

          <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "#111", color: "#fff", borderRadius: "14px", padding: "10px 18px", minWidth: "140px", boxShadow: "0 4px 0 0 #bf321c" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              <div>
                <div style={{ fontSize: "9px", opacity: 0.8, letterSpacing: "0.3px" }}>Download on the</div>
                <div style={{ fontSize: "14px", fontWeight: 600, lineHeight: 1.2 }}>App Store</div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "#111", color: "#fff", borderRadius: "14px", padding: "10px 18px", minWidth: "140px", boxShadow: "0 4px 0 0 #bf321c" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3.18 23.76c.3.16.63.24.97.22l12.4-7.15-2.75-2.76-10.62 9.69z" fill="#EA4335"/><path d="M22.38 10.62l-3.24-1.87-3.07 3.08 3.07 3.07 3.27-1.88c.93-.54.93-1.86-.03-2.4z" fill="#FBBC04"/><path d="M3.18.24C2.84.06 2.46-.01 2.1.01L14.54 12.5l2.6-2.6L3.18.24z" fill="#4285F4"/><path d="M2.1.01C1.28.06.69.72.69 1.63v20.74c0 .9.59 1.57 1.41 1.62l12.44-11.99L2.1.01z" fill="#34A853"/></svg>
              <div>
                <div style={{ fontSize: "9px", opacity: 0.8, letterSpacing: "0.3px" }}>GET IT ON</div>
                <div style={{ fontSize: "14px", fontWeight: 600, lineHeight: 1.2 }}>Google Play</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── DESKTOP (Figma exact) ── */}
      <div
        className="hidden md:block"
        style={{ height: "548px", position: "relative", overflow: "hidden" }}
      >
        {/* Right decoration */}
        <Image
          src="/verse-decoration.svg"
          alt=""
          width={276}
          height={342}
          style={{ position: "absolute", right: "20px", top: "188px", pointerEvents: "none" }}
        />

        {/* Content centered */}
        <div style={{ textAlign: "center", paddingTop: "101px" }}>
          {/* Title + icon */}
          <h2 style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "25px",
            fontWeight: 600,
            color: "#333333",
            marginBottom: "24px",
          }}>
            <Image src="/bible-icon.png" alt="" width={56} height={41} style={{ flexShrink: 0 }} />
            Versículo del día
          </h2>

          {/* Quote marks */}
          <div style={{ display: "flex", justifyContent: "flex-start", paddingLeft: "calc(50% - 425px)", marginBottom: "14px" }}>
            <svg width="62" height="48" viewBox="0 0 52 40" fill="none">
              <path d="M0 40V16C0 7.163 7.163 0 16 0H20V10H16C12.686 10 10 12.686 10 16V22H20V40H0Z" fill="#c4bdb0"/>
              <path d="M28 40V16C28 7.163 35.163 0 44 0H48V10H44C40.686 10 38 12.686 38 16V22H48V40H28Z" fill="#c4bdb0"/>
            </svg>
          </div>

          {/* Verse */}
          <p style={{
            fontSize: "36px",
            fontWeight: 400,
            lineHeight: 1.5,
            color: "#333333",
            maxWidth: "976px",
            margin: "0 auto 20px",
            padding: "0 32px",
          }}>
            &ldquo;Busca primero el reino de Dios y su justicia, y todas estas cosas os serán añadidas.&rdquo;
          </p>

          {/* Reference */}
          <p style={{ fontSize: "14px", fontWeight: 600, color: "#333333", marginBottom: "32px" }}>
            Mateo 6:33
          </p>

          {/* Store badges */}
          <div style={{ display: "inline-flex", gap: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", background: "#111", color: "#fff", borderRadius: "14px", padding: "12px 22px", boxShadow: "0 4px 0 0 #bf321c" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              <div>
                <div style={{ fontSize: "9px", opacity: 0.8 }}>Download on the</div>
                <div style={{ fontSize: "14px", fontWeight: 600, lineHeight: 1.2 }}>App Store</div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", background: "#111", color: "#fff", borderRadius: "14px", padding: "12px 22px", boxShadow: "0 4px 0 0 #bf321c" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3.18 23.76c.3.16.63.24.97.22l12.4-7.15-2.75-2.76-10.62 9.69z" fill="#EA4335"/><path d="M22.38 10.62l-3.24-1.87-3.07 3.08 3.07 3.07 3.27-1.88c.93-.54.93-1.86-.03-2.4z" fill="#FBBC04"/><path d="M3.18.24C2.84.06 2.46-.01 2.1.01L14.54 12.5l2.6-2.6L3.18.24z" fill="#4285F4"/><path d="M2.1.01C1.28.06.69.72.69 1.63v20.74c0 .9.59 1.57 1.41 1.62l12.44-11.99L2.1.01z" fill="#34A853"/></svg>
              <div>
                <div style={{ fontSize: "9px", opacity: 0.8 }}>GET IT ON</div>
                <div style={{ fontSize: "14px", fontWeight: 600, lineHeight: 1.2 }}>Google Play</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
