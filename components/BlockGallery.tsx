const blocks = [
  { name: "Hasta que ores", line: "Tus apps se abren cuando hablas con Él", src: "/ilus/onb-bloqueo-orar.jpg" },
  { name: "Hasta que leas la Biblia", line: "En la app o escaneando tu Biblia de papel", src: "/ilus/onb-bloqueo-tiempo.jpg" },
  { name: "Caminata con Dios", line: "Sal a andar y habla con Él", src: "/ilus/onb-bloqueo-caminata.jpg" },
  { name: "Digital Detox", line: "Un día entero sin distracciones", src: "/ilus/onb-bloqueo-detox.jpg" },
  { name: "Wind Down", line: "Sin redes desde tu hora hasta el amanecer", src: "/ilus/onb-bloqueo-winddown.jpg" },
  { name: "Concentración", line: "Todo bloqueado mientras estudias o trabajas", src: "/ilus/onb-bloqueo-concentracion.jpg" },
  { name: "Por horario", line: "Se activa solo a las horas que elijas", src: "/ilus/onb-bloqueo-horario.jpg" },
  { name: "Filtro adulto", line: "Contenido para adultos bloqueado siempre", src: "/ilus/onb-bloqueo-filtro.jpg" },
];

export default function BlockGallery() {
  return (
    <section style={{ background: "#FDFCF8" }} className="py-16 md:py-24">
      <div className="px-6 text-center max-w-[720px] mx-auto">
        <h2 className="text-[28px] md:text-[40px]" style={{ fontWeight: 700, color: "#333333", lineHeight: 1.15, letterSpacing: "-0.4px", margin: "0 0 12px", textWrap: "balance" }}>
          11 formas de proteger tu tiempo con Dios
        </h2>
        <p className="text-[16px] md:text-[19px]" style={{ color: "#838381", lineHeight: 1.5, margin: 0 }}>
          Elige cómo y cuándo. Y con el Modo Estricto, no hay vuelta atrás en un momento de debilidad.
        </p>
      </div>

      <div
        className="mt-10 flex gap-4 overflow-x-auto px-6 pb-4 md:grid md:grid-cols-4 md:gap-5 md:overflow-visible md:max-w-[1040px] md:mx-auto"
        style={{ scrollSnapType: "x mandatory", scrollPaddingInline: "24px", scrollbarWidth: "none" }}
      >
        {blocks.map((b) => (
          <div key={b.name} className="shrink-0 w-[200px] md:w-auto" style={{ scrollSnapAlign: "start", background: "#fff", borderRadius: "22px", overflow: "hidden", boxShadow: "0 2px 14px rgba(0,0,0,0.07)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={b.src} alt="" loading="lazy" style={{ display: "block", width: "100%", aspectRatio: "1", objectFit: "cover" }} />
            <div style={{ padding: "14px 16px 18px" }}>
              <p style={{ fontSize: "16px", fontWeight: 700, color: "#333", margin: "0 0 4px" }}>{b.name}</p>
              <p style={{ fontSize: "13px", color: "#838381", lineHeight: 1.45, margin: 0 }}>{b.line}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="px-6 text-center" style={{ fontSize: "14px", color: "#9a978f", margin: "16px 0 0" }}>
        Y también: Tiempo con Dios, Límite de tiempo y Domingo en la iglesia.
      </p>
    </section>
  );
}
