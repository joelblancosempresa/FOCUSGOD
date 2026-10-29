/* eslint-disable @next/next/no-img-element */
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

const rows = [blocks.slice(0, 4), blocks.slice(4)];

function Card({ b }: { b: (typeof blocks)[number] }) {
  return (
    <div className="shrink-0 w-[200px] md:w-[240px]" style={{ background: "#fff", borderRadius: "22px", overflow: "hidden", boxShadow: "0 2px 14px rgba(0,0,0,0.07)" }}>
      <img src={b.src} alt="" loading="lazy" style={{ display: "block", width: "100%", aspectRatio: "1", objectFit: "cover" }} />
      <div style={{ padding: "14px 16px 18px" }}>
        <p style={{ fontSize: "16px", fontWeight: 700, color: "#333", margin: "0 0 4px" }}>{b.name}</p>
        <p style={{ fontSize: "13px", color: "#838381", lineHeight: 1.45, margin: 0 }}>{b.line}</p>
      </div>
    </div>
  );
}

export default function BlockGallery() {
  return (
    <section style={{ background: "#F9F5EB", overflow: "hidden" }} className="py-16 md:py-24">
      <div className="px-6 text-center max-w-[720px] mx-auto">
        <span style={{ display: "inline-block", border: "1.5px solid rgba(51,51,51,0.14)", borderRadius: "999px", padding: "6px 16px", fontSize: "14px", fontWeight: 600, color: "#838381", marginBottom: "16px" }}>
          11 tipos de bloqueo
        </span>
        <h2 className="fg-h2 md:text-[40px]" style={{ fontWeight: 700, color: "#333333", lineHeight: 1.15, letterSpacing: "-0.4px", margin: "0 0 12px", textWrap: "balance" }}>
          Un bloqueo para cada momento
        </h2>
        <p className="fg-lead md:text-[19px]" style={{ color: "#838381", lineHeight: 1.5, margin: 0 }}>
          Al despertar, antes de dormir o mientras estudias. Con el Modo Estricto, ni tú puedes quitarlos.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-5" aria-label="Tipos de bloqueo">
        {rows.map((row, i) => (
          // Cada fila va duplicada para que el bucle no tenga corte; la segunda va al revés.
          <div key={i} className={`marquee ${i ? "marquee-reverse" : ""}`}>
            {[...row, ...row, ...row, ...row].map((b, j) => (
              <div key={j} className="flex" aria-hidden={j >= row.length}><Card b={b} /></div>
            ))}
          </div>
        ))}
      </div>

      <p className="px-6 text-center" style={{ fontSize: "14px", color: "#a8a6a0", margin: "24px 0 0" }}>
        Además: Tiempo con Dios, Límite de tiempo y Domingo en la iglesia.
      </p>
    </section>
  );
}
