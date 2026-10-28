/* eslint-disable @next/next/no-img-element */
const VERSE = "«Y todo lo que hagáis, hacedlo de corazón, como para el Señor.»";
const REF = "Colosenses 3:23";

type Vela = { kind: "vela"; title: string; sub: string; color: string; bg: string; border?: string; dim?: boolean };
type Verso = { kind: "verso"; bg: string; text: string; accent: string; sub: string };
type W = Vela | Verso;

const oscuro: Verso = { kind: "verso", bg: "#1b2128", text: "#fff", accent: "#f0b429", sub: "rgba(255,255,255,0.6)" };
const crema: Verso = { kind: "verso", bg: "#f5ede0", text: "#2b2b2b", accent: "#f0492e", sub: "#8a8478" };
const amanecer: Verso = { kind: "verso", bg: "linear-gradient(135deg, #f0492e 0%, #f7a531 60%, #fcd34d 100%)", text: "#fff", accent: "#fff", sub: "rgba(255,255,255,0.85)" };
const noche: Verso = { kind: "verso", bg: "#3b2a5e", text: "#fff", accent: "#f0b429", sub: "rgba(255,255,255,0.6)" };
const cumplido: Vela = { kind: "vela", title: "Hoy ya está", sub: "9 días seguidos", color: "#4ade80", bg: "#1b2128" };
const pendiente: Vela = { kind: "vela", title: "Te falta leer", sub: "Tus apps siguen cerradas", color: "#fff", bg: "#1b2128" };
const riesgo: Vela = { kind: "vela", title: "Tu vela se apaga", sub: "Quedan 2 h de racha", color: "#f87171", bg: "#2a1513", border: "#b4432f", dim: true };

const rows: W[][] = [
  [crema, cumplido, amanecer, pendiente],
  [noche, oscuro, riesgo, crema],
];

function Widget({ w }: { w: W }) {
  if (w.kind === "vela") {
    return (
      <div style={{ width: "150px", height: "150px", flexShrink: 0, borderRadius: "28px", background: w.bg, border: `1.5px solid ${w.border ?? "transparent"}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px", padding: "12px", boxShadow: "0 10px 24px rgba(32,36,46,0.16)" }}>
        <img src="/ilus/onb-velita.png" alt="" style={{ width: "50px", height: "auto", opacity: w.dim ? 0.5 : 1 }} />
        <p style={{ fontSize: "14px", fontWeight: 700, color: w.color, margin: "6px 0 0", textAlign: "center" }}>{w.title}</p>
        <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.55)", margin: 0, textAlign: "center" }}>{w.sub}</p>
      </div>
    );
  }
  return (
    <div style={{ width: "316px", height: "150px", flexShrink: 0, borderRadius: "28px", background: w.bg, padding: "18px 20px", display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "0 10px 24px rgba(32,36,46,0.14)" }}>
      <div>
        <p style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "0.08em", color: w.accent, margin: "0 0 8px" }}>VERSÍCULO DEL DÍA</p>
        <p style={{ fontSize: "15px", fontWeight: 700, color: w.text, lineHeight: 1.4, margin: 0 }}>{VERSE}</p>
      </div>
      <p style={{ fontSize: "11px", color: w.sub, margin: 0, display: "flex", alignItems: "center", gap: "8px" }}>
        <span style={{ width: "14px", height: "2px", background: w.accent, display: "inline-block" }} />
        {REF}
      </p>
    </div>
  );
}

export default function Widgets() {
  return (
    <section style={{ background: "#FDFCF8", overflow: "hidden" }} className="py-16 md:py-24">
      <div className="flex flex-col items-center gap-4" aria-hidden="true">
        {rows.map((row, i) => (
          <div key={i} className="flex gap-4" style={{ transform: `translateX(${i === 0 ? "-40px" : "60px"})` }}>
            {row.map((w, j) => <Widget key={j} w={w} />)}
          </div>
        ))}
      </div>
      <div className="px-6 text-center max-w-[640px] mx-auto mt-12">
        <h2 className="fg-h2 md:text-[40px]" style={{ fontWeight: 700, color: "#333333", lineHeight: 1.15, letterSpacing: "-0.4px", margin: "0 0 12px" }}>
          Widgets que te recuerdan a Dios
        </h2>
        <p className="fg-lead md:text-[19px]" style={{ color: "#838381", lineHeight: 1.5, margin: 0 }}>
          Tu vela y el versículo del día, siempre a la vista en tu pantalla de inicio.
        </p>
      </div>
    </section>
  );
}
