"use client";
import { useRef } from "react";

const reviews = [
  { name: "María O.", location: "México 🇲🇽", text: "La tengo en presave desde el día uno. Solo con saber que existe ya cambié cómo empiezo mis mañanas. No puedo esperar a que salga." },
  { name: "Carlos M.", location: "España 🇪🇸", text: "Llevo semanas esperando el lanzamiento. El concepto me hizo darme cuenta de lo mucho que miro el móvil antes de orar. Ya estoy cambiando." },
  { name: "Valentina R.", location: "Colombia 🇨🇴", text: "Tengo el presave. Mi grupo de la iglesia también lo tiene. Vamos a usarla juntos desde el primer día que salga." },
  { name: "Andrés F.", location: "Argentina 🇦🇷", text: "Solo leer cómo funciona ya me convenció. Me apunté al presave y comparto la web con todos mis amigos. Esto llena un hueco real." },
  { name: "Lucía P.", location: "Chile 🇨🇱", text: "Presave hecho. Llevo años intentando orar antes de abrir Instagram y nunca lo logro. Esto es exactamente lo que necesito." },
  { name: "Diego S.", location: "Perú 🇵🇪", text: "Ya noto la diferencia solo de haberme comprometido a descargarla. Cambié mi mentalidad antes de que salga. Eso es poderoso." },
  { name: "Sofía G.", location: "México 🇲🇽", text: "Tengo el presave y cuento los días. Nunca había visto una app que de verdad te obligue a buscar a Dios primero. Necesaria." },
];

export default function Reviews() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({ left: dir === "right" ? 280 : -280, behavior: "smooth" });
  };

  return (
    <section style={{ background: "#FCFBF2", padding: "56px 0" }}>
      {/* Header */}
      <div className="px-6 pb-7 max-w-[420px] md:max-w-6xl mx-auto">
        <h2 style={{
          fontSize: "28px",
          fontWeight: 700,
          color: "#333333",
          letterSpacing: "-0.2px",
          textAlign: "center",
        }}>
          Lo que dicen nuestros usuarios
        </h2>
      </div>

      {/* Carousel */}
      <div style={{ position: "relative" }}>
        {/* Cards track */}
        <div
          ref={trackRef}
          style={{
            display: "flex",
            gap: "14px",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            paddingLeft: "24px",
            paddingRight: "24px",
            paddingBottom: "8px",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          className="hide-scrollbar"
        >
          {reviews.map((r, i) => (
            <div key={i} style={{
              flex: "0 0 260px",
              scrollSnapAlign: "start",
              background: "#fff",
              borderRadius: "20px",
              padding: "20px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
            }}>
              <svg width="52" height="40" viewBox="0 0 52 40" fill="none" style={{ marginBottom: "12px" }}>
                <path d="M0 40V16C0 7.163 7.163 0 16 0H20V10H16C12.686 10 10 12.686 10 16V22H20V40H0Z" fill="#d4d0c8"/>
                <path d="M28 40V16C28 7.163 35.163 0 44 0H48V10H44C40.686 10 38 12.686 38 16V22H48V40H28Z" fill="#d4d0c8"/>
              </svg>
              <p style={{ fontSize: "14px", color: "#838381", lineHeight: 1.6, marginBottom: "14px" }}>
                {r.text}
              </p>
              <div>
                <p style={{ fontSize: "13px", fontWeight: 700, color: "#333333" }}>{r.name}</p>
                <p style={{ fontSize: "12px", color: "#b0ada8", marginTop: "2px" }}>{r.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Arrow buttons */}
        <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginTop: "20px", padding: "0 24px" }}>
          <button
            onClick={() => scroll("left")}
            style={{
              width: "44px", height: "44px",
              borderRadius: "50%",
              border: "1.5px solid rgba(0,0,0,0.12)",
              background: "#fff",
              cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "18px",
              color: "#333",
            }}
          >
            ←
          </button>
          <button
            onClick={() => scroll("right")}
            style={{
              width: "44px", height: "44px",
              borderRadius: "50%",
              border: "1.5px solid rgba(0,0,0,0.12)",
              background: "#fff",
              cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "18px",
              color: "#333",
            }}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
