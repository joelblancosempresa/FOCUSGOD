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
              &ldquo;Mas buscad primeramente el reino de Dios y su justicia, y todas estas cosas os serán añadidas.&rdquo;
            </p>
          </div>

          <p style={{ fontSize: "14px", color: "#838381", marginBottom: "4px" }}>Mateo 6:33</p>
          <p style={{ fontSize: "12px", color: "#838381", marginBottom: "36px" }}>
            Powered by{" "}
            <a href="https://www.biblegateway.com" target="_blank" rel="noopener noreferrer" style={{ color: "#4a8fe8", textDecoration: "none" }}>
              BibleGateway.com
            </a>
          </p>

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
            &ldquo;Mas buscad primeramente el reino de Dios y su justicia, y todas estas cosas os serán añadidas.&rdquo;
          </p>

          {/* Reference */}
          <p style={{ fontSize: "14px", fontWeight: 600, color: "#333333", marginBottom: "32px" }}>
            Mateo 6:33
          </p>

        </div>
      </div>

    </section>
  );
}
