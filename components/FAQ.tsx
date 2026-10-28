const faqs = [
  {
    q: "¿Cuándo sale FocusGod?",
    a: "Está en la revisión final de Apple. Apúntate a la lista y te avisamos el mismo día que se pueda descargar.",
  },
  {
    q: "¿Y si un día no puedo orar o no tengo mi Biblia?",
    a: "Llueve, estás enfermo o la Biblia se quedó en casa: existe «No puedo ahora». Abre tus apps hasta mañana, pero no cuenta como hecho: ni racha ni vela.",
  },
  {
    q: "¿FocusGod ve qué apps uso?",
    a: "No. Las eliges con el selector de Apple y iOS solo le da a FocusGod unas fichas cifradas, nunca los nombres de las apps ni cuánto las usas.",
  },
  {
    q: "¿La cámara graba mientras oro?",
    a: "No. Solo comprueba que tienes los ojos cerrados y, en el escáner, lee la página de tu Biblia. Todo pasa en tu iPhone, al momento: no se graba ni se guarda ninguna imagen.",
  },
  {
    q: "¿Necesito crear una cuenta?",
    a: "No. No hay registro ni cuenta, y la Biblia viene completa dentro de la app: funciona sin conexión.",
  },
  {
    q: "¿Cuánto cuesta?",
    a: "Tendrá un plan anual con 3 días de prueba gratis y un plan mensual. Verás el precio antes de pagar y podrás cancelar cuando quieras desde los Ajustes de tu iPhone.",
  },
  {
    q: "¿Estará para Android?",
    a: "Sí. Primero sale en iPhone y Android llega en la segunda fase, que ya está en marcha. Apúntate eligiendo Android y te avisamos el día que salga.",
  },
];

export default function FAQ() {
  return (
    <section style={{ background: "#FDFCF8" }} className="px-6 py-14 md:py-24">
      <div className="max-w-[420px] md:max-w-[760px] mx-auto">
        <h2 className="fg-h2 md:text-[35px]" style={{ fontWeight: 700, color: "#333333", textAlign: "center", lineHeight: 1.2, letterSpacing: "-0.2px", margin: "0 0 28px" }}>
          Preguntas frecuentes
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {faqs.map((f) => (
            <details key={f.q} className="faq-item" style={{ background: "#fff", borderRadius: "16px", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
              <summary
                className="fg-lead md:text-[18px]"
                style={{ cursor: "pointer", listStyle: "none", padding: "18px 20px", fontWeight: 600, color: "#333333", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px" }}
              >
                {f.q}
                <span aria-hidden="true" className="faq-plus" style={{ color: "#f0492e", fontSize: "22px", fontWeight: 400, flexShrink: 0, lineHeight: 1 }}>+</span>
              </summary>
              <p className="text-[15px] md:text-[16px]" style={{ color: "#666", lineHeight: 1.6, margin: 0, padding: "0 20px 20px" }}>
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
      <style>{`
        .faq-item summary::-webkit-details-marker { display: none; }
        .faq-item[open] .faq-plus { transform: rotate(45deg); }
        .faq-plus { transition: transform 0.15s ease; }
      `}</style>
    </section>
  );
}
