import { CTA_HREF, CTA_PROPS, CTA_LABEL, CTA_NOTE } from "@/lib/cta";

// Colores sacados de la ilustración "Tiempo con Dios" de la app.
const SKY = "#b2dcf2";
const CLOUD_GOLD = "#f6d691";
const CLOUD_CREAM = "#f7e7c3";
const CLOUD_FRONT = "#F9F5EB"; // = fondo de la sección siguiente, para que no se note el corte
const CLOUD_SMALL = "#d0e7e7";
const SPARKLE = "#f5e6c2";

// Pseudoaleatorio fijo: las nubes salen iguales en el servidor y en el navegador.
const rand = (n: number) => { const x = Math.sin(n * 99.13) * 43758.5453; return x - Math.floor(x); };

// Banco de nubes con muchos bultos, más alto por los lados (como en la ilustración).
// `span` = a cuánta distancia del centro llegan a su altura máxima (en móvil solo se ve el centro).
function CloudBank({ fill, base, lift, seed, span = 720, className }: { fill: string; base: number; lift: number; seed: number; span?: number; className?: string }) {
  const puffs: [number, number, number][] = [];
  for (let x = -60, i = 0; x < 1500; i++) {
    const r = 46 + rand(seed + i) * 52;
    const edge = Math.min(1, Math.pow(Math.abs(x - 720) / span, 2));
    puffs.push([x, base - edge * lift + rand(seed + i + 50) * 22, r]);
    x += r * (1.05 + rand(seed + i + 90) * 0.4);
  }
  return (
    <svg viewBox="0 0 1440 360" preserveAspectRatio="xMidYMax slice" className={className} aria-hidden="true">
      <g fill={fill}>
        {puffs.map(([cx, cy, r], i) => <g key={i}><circle cx={cx} cy={cy} r={r} /><rect x={cx - r} y={cy} width={r * 2} height={360 - cy} /></g>)}
        <rect x="-100" y={base + 10} width="1640" height={360 - base} />
      </g>
    </svg>
  );
}

function SmallCloud({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 120 60" className={className} style={style} aria-hidden="true">
      <g fill={CLOUD_SMALL}>
        <circle cx="38" cy="34" r="20" />
        <circle cx="66" cy="26" r="24" />
        <circle cx="92" cy="38" r="15" />
        <rect x="16" y="38" width="96" height="20" rx="10" />
      </g>
    </svg>
  );
}

function Sparkle({ style, size }: { style: React.CSSProperties; size: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className="hero-sparkle absolute" style={style} aria-hidden="true">
      <path d="M12 0C13 7 17 11 24 12C17 13 13 17 12 24C11 17 7 13 0 12C7 11 11 7 12 0Z" fill={SPARKLE} />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      className="hero-sky relative overflow-hidden flex flex-col items-center pt-[calc(96px+env(safe-area-inset-top,0px))] pb-[56px] md:justify-center md:pb-[260px]"
      style={{ minHeight: "100svh", background: `linear-gradient(180deg, #a3d4f0 0%, ${SKY} 45%, #cbe6f2 100%)` }}
    >
      {/* Luz: halo cálido + dos capas de rayos que giran despacio en sentidos opuestos */}
      <div aria-hidden="true" className="hero-glow absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(255,247,222,0.95), rgba(255,247,222,0.35) 45%, transparent 75%)" }} />
      <div aria-hidden="true" className="hero-rays" />
      <div aria-hidden="true" className="hero-rays hero-rays-2" />

      {/* Nubes pequeñas y destellos */}
      <SmallCloud className="hero-cloud absolute w-[110px] md:w-[170px]" style={{ top: "20%", left: "-5%" }} />
      <SmallCloud className="hero-cloud hero-cloud-slow absolute w-[80px] md:w-[140px]" style={{ top: "13%", right: "-3%" }} />
      <SmallCloud className="hero-cloud absolute w-[100px] hidden md:block" style={{ top: "42%", left: "14%" }} />
      <Sparkle size={22} style={{ top: "15%", left: "26%" }} />
      <Sparkle size={14} style={{ top: "24%", right: "22%", animationDelay: "1.2s" }} />
      <Sparkle size={18} style={{ top: "38%", right: "12%", animationDelay: "2.1s" }} />
      <Sparkle size={12} style={{ top: "33%", left: "9%", animationDelay: "0.6s" }} />

      {/* Texto */}
      {/* Móvil: el texto en medio de la pantalla y el botón abajo, sobre las nubes. Ordenador: todo junto. */}
      <div className="relative z-10 px-6 md:pt-[70px] w-full max-w-[440px] md:max-w-[820px] text-center flex flex-col items-center flex-1 md:flex-none">
        <div className="flex-1 md:flex-none flex flex-col items-center justify-center">
        <h1 className="fg-h1-sky" style={{ fontWeight: 700, color: "#2b2f36", lineHeight: 1.1, letterSpacing: "-0.01em", margin: 0 }}>
          Pon a Dios primero.<br />Cada día.
        </h1>
        <p className="text-[15px] md:text-[20px]" style={{ color: "#4d5a63", lineHeight: 1.5, margin: "24px 0 0", maxWidth: "560px", textWrap: "balance" }}>
          FocusGod te ayuda a buscar a Dios cada día y a crecer en tu relación con Él.
          <span style={{ display: "block" }}>El móvil puede esperar.</span>
        </p>
        </div>
        <a href={CTA_HREF} {...CTA_PROPS} className="w-full md:w-auto" style={{ display: "block", marginTop: "32px", background: "#f0492e", color: "#fff", fontWeight: 700, fontSize: "17px", padding: "18px 40px", borderRadius: "16px", textDecoration: "none", textAlign: "center", boxShadow: "0 4px 0 0 #bf321c, 0 12px 30px rgba(191,50,28,0.22)" }}>
          {CTA_LABEL}
        </a>
        <p style={{ fontSize: "13px", color: "#5f6d76", margin: "14px 0 0" }}>{CTA_NOTE}</p>
      </div>

      {/* Tres capas de nubes: dorada, crema y la de delante del color de la página */}
      {/* Móvil: solo se ve el centro del dibujo, así que los lados suben antes */}
      <CloudBank fill={CLOUD_GOLD} base={170} lift={150} span={300} seed={1} className="md:hidden absolute left-0 bottom-[34px] w-full h-[230px]" />
      <CloudBank fill={CLOUD_CREAM} base={200} lift={120} span={300} seed={7} className="md:hidden absolute left-0 bottom-[14px] w-full h-[200px]" />
      <CloudBank fill={CLOUD_FRONT} base={245} lift={90} span={300} seed={13} className="md:hidden absolute left-0 bottom-0 w-full h-[150px]" />
      <CloudBank fill={CLOUD_GOLD} base={170} lift={160} seed={1} className="hidden md:block absolute left-0 bottom-[40px] w-full aspect-[1440/360]" />
      <CloudBank fill={CLOUD_CREAM} base={200} lift={130} seed={7} className="hidden md:block absolute left-0 bottom-[15px] w-full aspect-[1440/360]" />
      <CloudBank fill={CLOUD_FRONT} base={245} lift={100} seed={13} className="hidden md:block absolute left-0 bottom-0 w-full aspect-[1440/360]" />
    </section>
  );
}
