const VERSE = "«Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres.»";
const REF = "Colosenses 3:23";

const velas = [
  { title: "Hoy ya está", sub: "9 días seguidos", color: "#4ade80", bg: "#1b2128", border: "transparent", label: "Cumplido" },
  { title: "Te falta leer", sub: "Tus apps siguen cerradas", color: "#ffffff", bg: "#1b2128", border: "transparent", label: "Pendiente" },
  { title: "Tu vela se apaga", sub: "Quedan 2 h de racha", color: "#f87171", bg: "#2a1513", border: "#b4432f", label: "En riesgo" },
];

const temas = [
  { name: "Oscuro", bg: "#1b2128", text: "#ffffff", accent: "#f0b429", sub: "rgba(255,255,255,0.6)" },
  { name: "Crema", bg: "#f5ede0", text: "#2b2b2b", accent: "#f0492e", sub: "#8a8478" },
  { name: "Amanecer", bg: "linear-gradient(135deg, #f0492e 0%, #f7a531 60%, #fcd34d 100%)", text: "#ffffff", accent: "#ffffff", sub: "rgba(255,255,255,0.85)" },
  { name: "Noche", bg: "#3b2a5e", text: "#ffffff", accent: "#f0b429", sub: "rgba(255,255,255,0.6)" },
];

function VelaWidget({ v }: { v: (typeof velas)[number] }) {
  return (
    <div style={{ width: "150px", flexShrink: 0 }}>
      <div style={{ aspectRatio: "1", borderRadius: "26px", background: v.bg, border: `1.5px solid ${v.border}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "4px", padding: "12px", boxShadow: "0 10px 24px rgba(32,36,46,0.18)" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/ilus/onb-velita.png" alt="" style={{ width: "54px", height: "auto", opacity: v.label === "En riesgo" ? 0.55 : 1 }} />
        <p style={{ fontSize: "14px", fontWeight: 700, color: v.color, margin: "6px 0 0", textAlign: "center" }}>{v.title}</p>
        <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.55)", margin: 0, textAlign: "center" }}>{v.sub}</p>
      </div>
      <p style={{ fontSize: "12px", color: "#9a978f", textAlign: "center", margin: "8px 0 0" }}>{v.label}</p>
    </div>
  );
}

function VersoWidget({ t }: { t: (typeof temas)[number] }) {
  return (
    <div>
      <div style={{ borderRadius: "26px", background: t.bg, padding: "18px 20px", minHeight: "150px", display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "0 10px 24px rgba(32,36,46,0.16)" }}>
        <div>
          <p style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "0.08em", color: t.accent, margin: "0 0 8px" }}>VERSÍCULO DEL DÍA</p>
          <p style={{ fontSize: "14px", fontWeight: 700, color: t.text, lineHeight: 1.4, margin: 0 }}>{VERSE}</p>
        </div>
        <p style={{ fontSize: "11px", color: t.sub, margin: "12px 0 0", display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ width: "14px", height: "2px", background: t.accent, display: "inline-block" }} />
          {REF}
        </p>
      </div>
      <p style={{ fontSize: "12px", color: "#9a978f", textAlign: "center", margin: "8px 0 0" }}>{t.name}</p>
    </div>
  );
}

export default function Widgets({ compact = false }: { compact?: boolean }) {
  return (
    <section style={{ background: compact ? "#F9F5EB" : "#FDFCF8" }} className="py-16 md:py-24">
      <div className="px-6 text-center max-w-[720px] mx-auto">
        <h2 className="fg-h2 md:text-[40px]" style={{ fontWeight: 700, color: "#333333", lineHeight: 1.15, letterSpacing: "-0.4px", margin: "0 0 12px", textWrap: "balance" }}>
          Tu fe, en tu pantalla de inicio
        </h2>
        <p className="fg-lead md:text-[19px]" style={{ color: "#838381", lineHeight: 1.5, margin: 0 }}>
          Tu vela y el versículo del día siempre a la vista, sin abrir la app. Y a las 20:00, tu vela te avisa si aún no has orado.
        </p>
      </div>

      {/* La vela: tres caras */}
      <div className="mt-10 flex gap-4 overflow-x-auto px-6 pb-2 md:justify-center" style={{ scrollbarWidth: "none" }}>
        {velas.map((v) => <VelaWidget key={v.label} v={v} />)}
      </div>

      {/* Versículo: cuatro temas */}
      <div className={`mt-10 px-6 mx-auto grid gap-5 ${compact ? "max-w-[380px]" : "max-w-[420px] md:max-w-[760px] md:grid-cols-2"}`}>
        {(compact ? temas.slice(0, 1) : temas).map((t) => <VersoWidget key={t.name} t={t} />)}
      </div>

      {!compact && (
        <div className="mt-12 px-6 max-w-[760px] mx-auto">
          <p style={{ fontSize: "14px", fontWeight: 600, color: "#555", textAlign: "center", margin: "0 0 16px" }}>También en tu pantalla de bloqueo</p>
          <div style={{ background: "#1b2128", borderRadius: "26px", padding: "22px", display: "flex", flexWrap: "wrap", gap: "14px", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: "64px", height: "64px", borderRadius: "50%", border: "5px solid rgba(255,255,255,0.18)", borderTopColor: "#fff", borderRightColor: "#fff", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "18px" }}>
              60
            </div>
            <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: "14px", padding: "10px 14px", maxWidth: "200px" }}>
              <p style={{ fontSize: "12px", fontWeight: 700, color: "#fff", margin: "0 0 2px" }}>{REF}</p>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.75)", lineHeight: 1.35, margin: 0 }}>«Y todo lo que hagáis, hacedlo de corazón, como para el Señor.»</p>
            </div>
            <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: "10px", padding: "8px 14px", color: "#fff", fontSize: "13px" }}>
              Te falta leer la Palabra
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
