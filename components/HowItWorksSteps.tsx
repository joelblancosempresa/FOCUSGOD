import { ChooseAppsPhone, BibleScanPhone, UnlockAppsPhone } from "@/components/PhoneScreens";

// Los 3 pasos cuentan una historia: eliges las apps → pasas tiempo con Dios → se abren.
const steps = [
  { pill: "Paso 1", title: "Elige las apps que te distraen", line: "Las eliges con el selector de Apple. FocusGod nunca ve cuáles son.", Phone: ChooseAppsPhone },
  { pill: "Paso 2", title: "Pasa tiempo con Dios", line: "Cuando quieras abrirlas, primero ora o lee su Palabra. Tú eliges cómo.", Phone: BibleScanPhone },
  { pill: "Paso 3", title: "Y después, el móvil", line: "Al terminar, tus apps se abren solas. Y tu vela crece cada día que lo cumples.", Phone: UnlockAppsPhone },
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
            <div className="relative flex flex-col items-center w-full">
              <div aria-hidden="true" style={{ position: "absolute", left: "50%", top: 0, width: 420, height: 420, transform: "translateX(-50%)", background: "radial-gradient(closest-side, rgba(247,165,49,0.22), transparent)", pointerEvents: "none" }} />
              <s.Phone />
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
