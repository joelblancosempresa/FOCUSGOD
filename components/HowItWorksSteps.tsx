/* eslint-disable @next/next/no-img-element */

const steps = [
  { pill: "Mis bloqueos", title: "Elige qué apps bloquear", line: "Instagram, TikTok, YouTube… Las que más tiempo te quitan.", src: "/app/bloqueos-v4.jpg", alt: "Pantalla de bloqueos de FocusGod" },
  { pill: "Oración", title: "Ora o lee la Biblia", line: "Cierras los ojos y hablas con Dios. La cámara no graba nada, solo ve que sigues orando.", src: "/app/orar-v4.jpg", alt: "Pantalla de oración de FocusGod" },
  { pill: "Tu vela", title: "Y tus apps se desbloquean", line: "Cada día que lo cumples, tu vela crece.", src: "/app/inicio-v4.jpg", alt: "Pantalla de inicio de FocusGod con la vela" },
];

const pill: React.CSSProperties = { display: "inline-block", border: "1.5px solid rgba(51,51,51,0.14)", borderRadius: "999px", padding: "6px 16px", fontSize: "14px", fontWeight: 600, color: "#838381", margin: "0 0 16px" };

export default function HowItWorksSteps() {
  return (
    <section style={{ background: "#FDFCF8", overflow: "hidden" }} className="px-6 py-20 md:py-28">
      <div className="max-w-[440px] md:max-w-[760px] mx-auto text-center">


        <h2 className="fg-h2 md:text-[40px]" style={{ fontWeight: 700, color: "#333333", lineHeight: 1.15, letterSpacing: "-0.4px", margin: 0 }}>
          Así funciona
        </h2>

        {steps.map((s) => (
          <div key={s.pill} className="mt-16 md:mt-24 flex flex-col items-center">
            <div className="relative w-[170px] md:w-[250px]">
              <div aria-hidden="true" style={{ position: "absolute", inset: "-35% -60%", background: "radial-gradient(closest-side, rgba(247,165,49,0.22), transparent)", pointerEvents: "none" }} />
              {/* El móvil se funde con el fondo en su mitad de abajo, como en Opal */}
              <img src={s.src} alt={s.alt} loading="lazy" className="rounded-[26px] border-[5px] md:rounded-[38px] md:border-[7px]" style={{ position: "relative", display: "block", width: "100%", height: "auto", borderColor: "#1b1f27", background: "#1b1f27", maskImage: "linear-gradient(to bottom, #000 45%, transparent 92%)", WebkitMaskImage: "linear-gradient(to bottom, #000 45%, transparent 92%)" }} />
            </div>
            <span style={{ ...pill, marginTop: "4px" }}>{s.pill}</span>
            <h3 className="fg-h2 md:text-[40px]" style={{ fontWeight: 700, color: "#333333", lineHeight: 1.15, letterSpacing: "-0.4px", margin: "0 0 12px", textWrap: "balance" }}>
              {s.title}
            </h3>
            <p className="fg-lead md:text-[19px]" style={{ color: "#838381", lineHeight: 1.55, margin: 0, maxWidth: "520px" }}>
              {s.line}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}
