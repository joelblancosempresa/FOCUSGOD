import { CTA_HREF, CTA_PROPS, CTA_LABEL } from "@/lib/cta";
export default function FocoSection() {
  return (
    <section>

      {/* ── MÓVIL (sin cambios) ── */}
      <div className="md:hidden" style={{ background: "#FDFCF8", padding: "48px 24px 56px", textAlign: "center" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/howitworks-1.png" alt="Jesús sentado en un banco con un niño que ha dejado el móvil a un lado" style={{ display: "block", width: "100%", maxWidth: "320px", height: "auto", margin: "0 auto 24px" }} />
        <h2 style={{ fontSize: "26px", fontWeight: 700, color: "#333333", lineHeight: 1.2, letterSpacing: "-0.3px", marginBottom: "20px" }}>
          Antes que el scroll, Dios.
        </h2>
        <a
          href={CTA_HREF}
          {...CTA_PROPS}
          style={{ display: "block", background: "#f0492e", color: "#fff", fontWeight: 700, fontSize: "16px", padding: "18px", borderRadius: "14px", textDecoration: "none", boxShadow: "0 4px 0 0 #bf321c" }}
        >
          {CTA_LABEL}
        </a>
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

        {/* Centered 1440px canvas — exact Figma positions */}
        <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", width: "1440px", height: "518px" }}>
          <h2 style={{
            position: "absolute",
            left: "630px",
            top: "142px",
            width: "702px",
            fontSize: "35px",
            fontWeight: 600,
            color: "#333333",
            lineHeight: 1.2,
            margin: 0,
          }}>
            Antes que el scroll, Dios.
          </h2>
          <a
            href={CTA_HREF}
            {...CTA_PROPS}
            style={{
              position: "absolute",
              left: "836px",
              top: "219px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "280px",
              height: "60px",
              background: "#f0492e",
              color: "#fff",
              fontWeight: 700,
              fontSize: "16px",
              borderRadius: "14px",
              textDecoration: "none",
              boxShadow: "0 4px 0 0 #bf321c",
            }}
          >
            {CTA_LABEL}
          </a>
        </div>
      </div>

    </section>
  );
}
