/* eslint-disable @next/next/no-img-element */
// Arriba los bloqueos que solo tiene FocusGod (la fila que más se mira); abajo los de controlar las redes.
const top = [
  { name: "Ora para desbloquear", line: "Tus apps se abren al terminar tu oración del día.", src: "/ilus/bloqueo-orar-v2.jpg" },
  { name: "Lee la Biblia para desbloquear", line: "Lee en la app o haz una foto a tu Biblia de papel.", src: "/ilus/bloqueo-biblia-v2.jpg" },
  { name: "Tiempo con Dios", line: "Un rato a solas con Él y una foto de tu reflexión al acabar.", src: "/ilus/onb-bloqueo-tiempo.jpg" },
  { name: "Sal a caminar con Dios", line: "Sal a andar y haz una foto fuera para desbloquear.", src: "/ilus/onb-bloqueo-caminata.jpg" },
  { name: "Domingo en la iglesia", line: "Tus apps se bloquean mientras estás en la iglesia y se abren al salir.", src: "/ilus/bloqueo-iglesia-tmp.jpg" },
];
const bottom = [
  { name: "Un día sin redes", line: "Eliges un día y tus apps siguen cerradas hasta que acaba.", src: "/ilus/onb-bloqueo-detox.jpg" },
  { name: "Noches sin pantalla", line: "Desde la hora que elijas hasta que amanece.", src: "/ilus/onb-bloqueo-winddown.jpg" },
  { name: "Modo estudio o trabajo", line: "Todo cerrado hasta que acaba tu sesión.", src: "/ilus/onb-bloqueo-concentracion.jpg" },
  { name: "Bloqueo por horario", line: "Tus apps se cierran solas a las horas que elijas.", src: "/ilus/onb-bloqueo-horario.jpg" },
  { name: "Límite de tiempo", line: "Tus apps se cierran al gastar los minutos del día.", src: "/ilus/bloqueo-limite-tmp.jpg" },
  { name: "Filtro de contenido adulto", line: "Bloquea el contenido para adultos. Siempre activo.", src: "/ilus/onb-bloqueo-filtro.jpg" },
];

const rows = [top, bottom];

function Card({ b }: { b: (typeof top)[number] }) {
  return (
    <div className="shrink-0 w-[200px] md:w-[240px]" style={{ background: "#fff", borderRadius: "22px", overflow: "hidden", boxShadow: "0 2px 14px rgba(0,0,0,0.07)" }}>
      <img src={b.src} alt="" loading="lazy" style={{ display: "block", width: "100%", aspectRatio: "1", objectFit: "cover" }} />
      {/* Texto centrado; el título reserva 2 líneas para que todas las tarjetas queden alineadas */}
      <div style={{ padding: "16px 16px 20px", textAlign: "center" }}>
        <p style={{ fontSize: "16px", fontWeight: 700, color: "#333", lineHeight: 1.3, minHeight: "2.6em", margin: "0 0 6px", display: "flex", alignItems: "center", justifyContent: "center", textWrap: "balance" }}>{b.name}</p>
        <p style={{ fontSize: "13px", color: "#838381", lineHeight: 1.45, margin: 0, textWrap: "balance" }}>{b.line}</p>
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
          Al despertar, antes de dormir o mientras estudias. Tú decides cuándo.
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

    </section>
  );
}
