export default function HowItWorks() {
  const features = [
    {
      title: "Desbloquea hablando con Dios",
      body: "Ora, lee la Biblia o pasa tiempo con Él. Después se abren tus apps.",
      image: "/howitworks-1.png",
      alt: "Jesús sentado en un banco con un niño que ha dejado el móvil a un lado",
    },
    {
      title: "Desconecta cuando lo necesites",
      body: "Por la noche, para estudiar o un día entero. Tú eliges cuándo.",
    },
    {
      title: "Protege lo que ves",
      body: "Filtro de contenido adulto y límites de tiempo, siempre activos.",
    },
  ];

  return (
    <section style={{ background: "#FDFCF8" }}>

      {/* ── MÓVIL (sin cambios) ── */}
      <div className="md:hidden" style={{ padding: "48px 24px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "56px" }}>
          {features.map((f, i) => (
            <div key={i}>
              {f.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={f.image} alt={f.alt} style={{ display: "block", width: "100%", maxWidth: "340px", height: "auto", margin: "0 auto 20px" }} />
              ) : (
                <div style={{ width: "100%", aspectRatio: "16/9", background: "#111111", borderRadius: "16px", marginBottom: "20px" }} />
              )}
              <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#333333", lineHeight: 1.25, letterSpacing: "-0.2px", marginBottom: "8px", textAlign: "center" }}>
                {f.title}
              </h2>
              <p style={{ fontSize: "14px", color: "#838381", lineHeight: 1.6, textAlign: "center" }}>
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── DESKTOP (Figma exact — 1600px height) ── */}
      <div
        className="hidden md:block"
        style={{ position: "relative", height: "1600px", overflow: "hidden" }}
      >
        {/* Centered 1440px canvas */}
        <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", width: "1440px", height: "1600px" }}>

          {/* ── Module 1 ── */}
          {/* Rectangle SVG image — right column */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={features[0].image}
            alt={features[0].alt}
            style={{ position: "absolute", left: "859px", top: "102px", width: "341px", height: "325.5px", objectFit: "contain" }}
          />
          {/* Text — left */}
          <div style={{ position: "absolute", left: "215px", top: "197px", width: "633px" }}>
            <h2 style={{ fontSize: "35px", fontWeight: 600, color: "#333333", lineHeight: 1.2, margin: 0 }}>
              {features[0].title}
            </h2>
            <p style={{ fontSize: "14px", fontWeight: 600, color: "#848482", marginTop: "16px" }}>
              {features[0].body}
            </p>
          </div>

          {/* ── Module 2 ── */}
          {/* Dark rect — right */}
          <div style={{ position: "absolute", left: "859px", top: "614px", width: "341px", height: "341px", background: "#111", borderRadius: "12px" }} />
          {/* Text — left */}
          <div style={{ position: "absolute", left: "215px", top: "706px", width: "667px" }}>
            <h2 style={{ fontSize: "35px", fontWeight: 600, color: "#333333", lineHeight: 1.2, margin: 0 }}>
              {features[1].title}
            </h2>
            <p style={{ fontSize: "14px", fontWeight: 600, color: "#848482", marginTop: "16px" }}>
              {features[1].body}
            </p>
          </div>
          {/* Large screenshot placeholder (empty in Figma) */}
          <div style={{ position: "absolute", left: "-15px", top: "887px", width: "1290px", height: "713px" }} />

          {/* ── Module 3 ── */}
          {/* Dark rect — left */}
          <div style={{ position: "absolute", left: "255px", top: "1140px", width: "277px", height: "292px", background: "#111", borderRadius: "12px" }} />
          {/* Text — right */}
          <div style={{ position: "absolute", left: "651px", top: "1226px", width: "667px" }}>
            <h2 style={{ fontSize: "35px", fontWeight: 600, color: "#333333", lineHeight: 1.2, margin: 0 }}>
              {features[2].title}
            </h2>
            <p style={{ fontSize: "14px", fontWeight: 600, color: "#848482", marginTop: "16px" }}>
              {features[2].body}
            </p>
          </div>
          {/* Bottom screenshot strip */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/howitworks-screenshot3.png"
            alt=""
            style={{ position: "absolute", left: "-15px", top: "1432px", width: "1470px", height: "168px", objectFit: "cover", borderRadius: "8px" }}
          />

        </div>
      </div>

    </section>
  );
}
