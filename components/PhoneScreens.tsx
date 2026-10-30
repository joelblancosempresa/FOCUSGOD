"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState } from "react";

// Teléfonos en modo oscuro para "Así funciona". Todo se dibuja en puntos de la pantalla
// del móvil de la app (258 × 522) y se escala al tamaño del teléfono de la web.

export const BLUE = "#0A84FF"; // azul del sistema de Apple en oscuro
// Difuminado suave del teléfono hacia el fondo de la página (varias paradas para que no se note el corte).
const FADE = "linear-gradient(to bottom, #000 0%, #000 55%, rgba(0,0,0,0.85) 66%, rgba(0,0,0,0.55) 76%, rgba(0,0,0,0.25) 86%, transparent 97%)";
// Las que se eligen en «Social» (paso 1) y luego se bloquean.
const APPS = [
  { id: "instagram", nombre: "Instagram" },
  { id: "tiktok", nombre: "TikTok" },
  { id: "facebook", nombre: "Facebook" },
  { id: "x", nombre: "X" },
  { id: "snapchat", nombre: "Snapchat" },
];
const app = (id: string, nombre: string, src = `/ilus/onb-app-${id}.png`, bloquea = true) => ({ id, nombre, src, bloquea });
// Pantalla de inicio como un iPhone, con apps grandes en 3 columnas: widget del versículo arriba,
// dos filas de apps que se bloquean y, abajo (ya en el difuminado), el widget de la racha con FocusGod al lado.
// FocusGod (y sus widgets) es lo único que nunca se bloquea.
const FILA_1 = [app("instagram", "Instagram"), app("tiktok", "TikTok"), app("facebook", "Facebook")];
const FILA_2 = [app("snapchat", "Snapchat"), app("youtube", "YouTube"), app("x", "X")];
const FOCUSGOD = app("focusgod", "FocusGod", "/app-icon-vela.png", false);
const ICONO = 60;
const COLS = { gridTemplateColumns: `repeat(3, ${ICONO}px)`, columnGap: 26 } as const;

export function PhoneFrame({ children, phoneRef }: { children: React.ReactNode; phoneRef?: React.Ref<HTMLDivElement> }) {
  return (
    <div
      ref={phoneRef}
      aria-hidden="true"
      className="relative w-[170px] md:w-[250px] rounded-[26px] border-[5px] md:rounded-[38px] md:border-[7px] overflow-hidden [--s:0.62] md:[--s:0.915]"
      style={{ aspectRatio: "258 / 522", borderColor: "#1b1f27", background: "#000", maskImage: FADE, WebkitMaskImage: FADE }}
    >
      <div className="absolute left-0 top-0" style={{ width: 258, height: 522, transform: "scale(var(--s))", transformOrigin: "top left", color: "#fff", textAlign: "left" }}>
        {children}
        <div className="absolute" style={{ left: 21, top: 8, fontSize: 12.6, fontWeight: 600 }}>10:18</div>
        <div className="absolute rounded-full" style={{ left: 93.5, top: 12, width: 71, height: 22, background: "#000" }} />
      </div>
    </div>
  );
}

// Avanza de etapa en etapa (ms entre cada una) mientras el teléfono se ve; al salir vuelve a 0.
// Tras la última, espera `pausa` y empieza de nuevo.
export function useStages(pasos: number[], pausa: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [etapa, setEtapa] = useState(0);
  useEffect(() => {
    let timers: number[] = [];
    const parar = () => { timers.forEach(clearTimeout); timers = []; };
    const correr = () => {
      parar();
      setEtapa(0);
      let t = 0;
      pasos.forEach((ms, i) => { t += ms; timers.push(window.setTimeout(() => setEtapa(i + 1), t)); });
      timers.push(window.setTimeout(correr, t + pausa));
    };
    const io = new IntersectionObserver(([e]) => (e.isIntersecting ? correr() : (parar(), setEtapa(0))), { threshold: 0.5 });
    io.observe(ref.current!);
    return () => { io.disconnect(); parar(); };
  }, [pasos, pausa]);
  return { ref, etapa };
}

// Fondo de pantalla al estilo de los de iOS: manchas de color difuminadas.
const WALLPAPER = [
  "radial-gradient(60% 40% at 18% 12%, #ff8a5c 0%, transparent 70%)",
  "radial-gradient(55% 40% at 88% 28%, #8a5cff 0%, transparent 70%)",
  "radial-gradient(75% 50% at 40% 70%, #2b6cff 0%, transparent 70%)",
  "radial-gradient(60% 40% at 90% 95%, #ff5c8a 0%, transparent 70%)",
  "linear-gradient(180deg, #2a1b4d 0%, #101433 100%)",
].join(", ");

function Lock({ visible, delay = 0 }: { visible: boolean; delay?: number }) {
  return (
    <span
      className="absolute flex items-center justify-center rounded-full"
      style={{ right: -6, bottom: -6, width: 25, height: 25, background: "#1c1c1e", border: "2px solid #000", opacity: visible ? 1 : 0, transform: `scale(${visible ? 1 : 0.3})`, transition: `opacity 0.35s ease ${delay}ms, transform 0.45s cubic-bezier(0.34,1.5,0.64,1) ${delay}ms` }}
    >
      <svg width="11" height="13" viewBox="0 0 12 14" fill="#fff"><path d="M3 6V4a3 3 0 0 1 6 0v2h.5A1.5 1.5 0 0 1 11 7.5v5A1.5 1.5 0 0 1 9.5 14h-7A1.5 1.5 0 0 1 1 12.5v-5A1.5 1.5 0 0 1 2.5 6H3Zm1.5 0h3V4a1.5 1.5 0 0 0-3 0v2Z" /></svg>
    </span>
  );
}

function AppIcon({ a, bloqueadas, abiertas, d }: { a: ReturnType<typeof app>; bloqueadas: boolean; abiertas: string[]; d: number }) {
  const off = bloqueadas && a.bloquea && !abiertas.includes(a.id);
  return (
    <div className="flex flex-col items-center" style={{ gap: 4, width: ICONO }}>
      <div className="relative" style={{ width: ICONO, height: ICONO }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={a.src} alt="" style={{ width: ICONO, height: ICONO, borderRadius: 14, boxShadow: "0 2px 6px rgba(0,0,0,0.25)", filter: off ? "saturate(0) brightness(0.45)" : "none", transition: `filter 0.6s ease ${d}ms` }} />
        {a.bloquea && <Lock visible={off} delay={d} />}
      </div>
      <span style={{ fontSize: 10, whiteSpace: "nowrap", textShadow: "0 1px 3px rgba(0,0,0,0.5)", color: off ? "rgba(255,255,255,0.5)" : "#fff", transition: `color 0.6s ease ${d}ms` }}>{a.nombre}</span>
    </div>
  );
}

// Pantalla de inicio; `bloqueadas` oscurece las apps y les pone candado (menos las `abiertas` y FocusGod).
function HomeScreen({ bloqueadas, escalonado = false, abiertas = [] }: { bloqueadas: boolean; escalonado?: boolean; abiertas?: string[] }) {
  const d = (i: number) => (escalonado ? i * 120 : 0);
  return (
    <div className="absolute inset-0" style={{ background: WALLPAPER }}>
      {/* Widget mediano: versículo del día, con el cielo y las nubes de la web */}
      <div className="absolute overflow-hidden" style={{ left: 14, top: 48, width: 230, height: 82, borderRadius: 20, background: "radial-gradient(70% 90% at 50% 0%, rgba(255,247,222,0.95), transparent 70%), linear-gradient(180deg, #a3d4f0 0%, #b2dcf2 55%, #cbe6f2 100%)", padding: "10px 14px", boxShadow: "0 6px 16px rgba(0,0,0,0.3)", color: "#2b2f36" }}>
        <svg viewBox="0 0 230 30" width="230" height="30" className="absolute" style={{ left: 0, bottom: 0 }} aria-hidden="true">
          <g fill="#f6d691">{[[10, 26, 16], [44, 22, 18], [84, 27, 15], [150, 26, 16], [190, 21, 19], [226, 26, 15]].map(([x, y, r]) => <circle key={x} cx={x} cy={y} r={r} />)}</g>
          <g fill="#f9f2e2">{[[0, 32, 14], [30, 30, 15], [66, 33, 14], [118, 31, 16], [170, 33, 14], [210, 30, 16]].map(([x, y, r]) => <circle key={x} cx={x} cy={y} r={r} />)}</g>
        </svg>
        <p className="relative" style={{ fontSize: 7.5, fontWeight: 800, letterSpacing: "0.08em", color: "#d63a22", margin: 0 }}>VERSÍCULO DEL DÍA</p>
        <p className="relative" style={{ fontSize: 10.5, fontWeight: 700, lineHeight: 1.35, margin: "4px 0 0" }}>«Mas buscad primeramente el reino de Dios y su justicia.»</p>
        <p className="relative" style={{ fontSize: 8, color: "#4d5a63", margin: "3px 0 0" }}>Mateo 6:33</p>
      </div>
      {/* Fila 1 */}
      <div className="absolute grid" style={{ left: 13, top: 142, ...COLS }}>
        {FILA_1.map((a, i) => <AppIcon key={a.id} a={a} bloqueadas={bloqueadas} abiertas={abiertas} d={d(i)} />)}
      </div>
      {/* Fila 2 */}
      <div className="absolute grid" style={{ left: 13, top: 232, ...COLS }}>
        {FILA_2.map((a, i) => <AppIcon key={a.id} a={a} bloqueadas={bloqueadas} abiertas={abiertas} d={d(i + 3)} />)}
      </div>
      {/* Widget de la racha (2 columnas): la vela grande con su luz, los días y la semana */}
      <div className="absolute overflow-hidden flex items-center" style={{ left: 13, top: 322, width: 146, height: 84, borderRadius: 20, background: "linear-gradient(160deg, #2a2420 0%, #16181d 70%)", boxShadow: "0 6px 16px rgba(0,0,0,0.35)", padding: "0 10px 0 6px", gap: 6 }}>
        <span className="absolute rounded-full" style={{ left: -8, top: -4, width: 80, height: 80, background: "radial-gradient(closest-side, rgba(247,165,49,0.45), transparent)" }} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/ilus/velita-recortada.png" alt="" className="relative" style={{ height: 66, width: "auto", marginLeft: 8 }} />
        <div className="relative">
          <p style={{ margin: 0, lineHeight: 1, color: "#f7a531" }}><span style={{ fontSize: 26, fontWeight: 800 }}>12</span> <span style={{ fontSize: 10, fontWeight: 700 }}>días</span></p>
          <p style={{ fontSize: 8.5, color: "rgba(255,255,255,0.6)", margin: "3px 0 6px" }}>de racha</p>
          <div className="flex" style={{ gap: 3 }}>
            {[1, 1, 1, 1, 1, 0, 0].map((on, k) => <span key={k} className="rounded-full" style={{ width: 6, height: 6, background: on ? "#f7a531" : "rgba(255,255,255,0.2)" }} />)}
          </div>
        </div>
      </div>
      <div className="absolute" style={{ left: 185, top: 322 }}>
        <AppIcon a={FOCUSGOD} bloqueadas={bloqueadas} abiertas={abiertas} d={0} />
      </div>
    </div>
  );
}

// Paso 1: el selector de apps de Apple → entra en Social, marca las redes → quedan bloqueadas.
const CATS = [
  { nombre: "Todas las apps y categorías", color: "#636366", emoji: "▦" },
  { nombre: "Social", color: "#30B0C7", emoji: "💬" },
  { nombre: "Juegos", color: "#FF375F", emoji: "🎮" },
  { nombre: "Entretenimiento", color: "#FF9F0A", emoji: "🍿" },
  { nombre: "Productividad", color: "#5E5CE6", emoji: "✈︎" },
];
const PICK_PASOS = [900, 500, 280, 280, 280, 280, 280, 280, 600, 450, 500];
// etapa 1: toca Social · 2: se abre · 3-8: marca cada app · 9: toca OK · 10: inicio · 11: se bloquean

function Check({ on }: { on: boolean }) {
  return (
    <span className="flex items-center justify-center rounded-full shrink-0" style={{ width: 20, height: 20, border: on ? "none" : "1.5px solid #48484a", background: on ? BLUE : "transparent", transition: "background 0.2s" }}>
      {on && <svg width="10" height="8" viewBox="0 0 10 8" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1 4l2.6 2.6L9 1" /></svg>}
    </span>
  );
}

export function ChooseAppsPhone() {
  const { ref, etapa } = useStages(PICK_PASOS, 3200);
  const abierta = etapa >= 2;
  const marcadas = Math.max(0, Math.min(APPS.length, etapa - 2));
  const enInicio = etapa >= 10;
  return (
    <PhoneFrame phoneRef={ref}>
      {/* Selector de Apple */}
      <div className="absolute inset-0" style={{ background: "#000", opacity: enInicio ? 0 : 1, transition: "opacity 0.4s" }}>
        <div className="absolute flex items-center justify-between" style={{ left: 14, right: 14, top: 44, fontSize: 12.5 }}>
          <span style={{ color: BLUE }}>Cancelar</span>
          <span style={{ fontWeight: 600 }}>Elegir apps</span>
          <span style={{ color: BLUE, fontWeight: 600, padding: "2px 6px", borderRadius: 6, background: etapa === 9 ? "rgba(10,132,255,0.25)" : "transparent", transition: "background 0.2s" }}>OK</span>
        </div>
        <div className="absolute rounded-[9px]" style={{ left: 12, right: 12, top: 72, height: 28, background: "#1c1c1e", color: "#8e8e93", fontSize: 12, padding: "6px 10px" }}>⌕ Buscar</div>
        <div className="absolute overflow-hidden rounded-[12px]" style={{ left: 12, right: 12, top: 112, background: "#1c1c1e" }}>
          {CATS.map((c, ci) => (
            <div key={c.nombre}>
              <div className="flex items-center" style={{ gap: 9, height: 40, padding: "0 10px", borderTop: ci ? "0.5px solid #38383a" : "none", background: ci === 1 && etapa === 1 ? "#2c2c2e" : "transparent", transition: "background 0.2s" }}>
                <Check on={ci === 1 && marcadas === APPS.length} />
                <span className="flex items-center justify-center rounded-[6px]" style={{ width: 22, height: 22, background: c.color, fontSize: 12 }}>{c.emoji}</span>
                <span style={{ fontSize: 12.5, flex: 1, whiteSpace: "nowrap" }}>{c.nombre}</span>
                {ci > 0 && <span style={{ color: "#8e8e93", fontSize: 13, transform: `rotate(${ci === 1 && abierta ? 90 : 0}deg)`, transition: "transform 0.25s" }}>›</span>}
              </div>
              {ci === 1 && (
                <div style={{ maxHeight: abierta ? 6 * 36 : 0, overflow: "hidden", transition: "max-height 0.4s ease" }}>
                  {APPS.map((a, ai) => (
                    <div key={a.id} className="flex items-center" style={{ gap: 9, height: 36, padding: "0 10px 0 22px", borderTop: "0.5px solid #38383a" }}>
                      <Check on={ai < marcadas} />
                      <img src={`/ilus/onb-app-${a.id}.png`} alt="" style={{ width: 22, height: 22, borderRadius: 5 }} />
                      <span style={{ fontSize: 12.5 }}>{a.nombre}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Pantalla de inicio: aparecen y se bloquean */}
      <div className="absolute inset-0" style={{ opacity: enInicio ? 1 : 0, transition: "opacity 0.4s" }}>
        <HomeScreen bloqueadas={etapa >= 11} escalonado />
      </div>
    </PhoneFrame>
  );
}

// Paso 3: las apps, oscuras y con candado, se desbloquean una a una.
const UNLOCK_PASOS = [1200];

export function UnlockAppsPhone() {
  const { ref, etapa } = useStages(UNLOCK_PASOS, 3600);
  return (
    <PhoneFrame phoneRef={ref}>
      <HomeScreen bloqueadas={etapa === 0} escalonado />
    </PhoneFrame>
  );
}

// Toque del dedo: un círculo que aparece y se encoge donde se pulsa.
function Tap({ x, y, on }: { x: number; y: number; on: boolean }) {
  return (
    <span
      className="absolute rounded-full pointer-events-none"
      style={{ left: x - 22, top: y - 22, width: 44, height: 44, background: "rgba(255,255,255,0.55)", border: "2px solid rgba(255,255,255,0.9)", opacity: on ? 1 : 0, transform: `scale(${on ? 0.75 : 1.3})`, transition: "opacity 0.2s, transform 0.35s ease-out", zIndex: 5 }}
    />
  );
}

// Pantalla de bloqueo de FocusGod (al estilo de Opal): vela, título, qué hacer, una cita y el botón.
function Shield({ visible, titulo, texto, cita, ref_, boton }: { visible: boolean; titulo: string; texto: string; cita: string; ref_: string; boton: string }) {
  return (
    <div className="absolute inset-0" style={{ background: "#161618", transform: `translateY(${visible ? 0 : 100}%)`, transition: "transform 0.45s cubic-bezier(0.2,0.8,0.2,1)", zIndex: 2, textAlign: "center" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/app-icon-vela.png" alt="" className="absolute" style={{ left: 97, top: 66, width: 64, height: 64, borderRadius: 15, boxShadow: "0 8px 24px rgba(240,73,46,0.25)" }} />
      <p className="absolute w-full" style={{ top: 144, fontSize: 21, fontWeight: 700, margin: 0 }}>{titulo}</p>
      <p className="absolute" style={{ left: 26, right: 26, top: 178, fontSize: 12.5, lineHeight: 1.45, color: "rgba(255,255,255,0.78)", margin: 0 }}>{texto}</p>
      <p className="absolute" style={{ left: 30, right: 30, top: 228, fontSize: 12, lineHeight: 1.45, fontStyle: "italic", color: "rgba(255,255,255,0.6)", margin: 0 }}>
        «{cita}»<span style={{ display: "block", fontStyle: "normal", fontSize: 10.5, marginTop: 3, color: "rgba(255,255,255,0.45)" }}>{ref_}</span>
      </p>
      <span className="absolute flex items-center justify-center rounded-full" style={{ left: 34, top: 292, width: 190, height: 42, background: "#f0492e", fontSize: 14, fontWeight: 700 }}>{boton}</span>
      <span className="absolute w-full" style={{ left: 0, top: 346, fontSize: 12.5, color: "rgba(255,255,255,0.55)" }}>Ahora no</span>
    </div>
  );
}

// Paso 2: apps bloqueadas → Instagram → escudo «Primero, su Palabra» → cámara escanea la Biblia → Instagram abierta
// → TikTok → escudo «Habla con Él primero» → la cámara ve los ojos cerrados mientras se llena el círculo → oración completada.
const TIEMPO_PASOS = [1200, 450, 2400, 450, 2000, 1500, 1100, 450, 2400, 450, 2900, 2000];
// 1 toca Instagram · 2 escudo Biblia · 3 toca botón · 4 cámara · 5 detectada · 6 Instagram abierta
// 7 toca TikTok · 8 escudo orar · 9 toca botón · 10 orando · 11 completada

export function BibleScanPhone() {
  const { ref, etapa } = useStages(TIEMPO_PASOS, 1800);
  const camara = etapa >= 4 && etapa <= 5;
  const detectada = etapa === 5;
  const orando = etapa >= 10;
  const completada = etapa >= 11;
  return (
    <PhoneFrame phoneRef={ref}>
      <HomeScreen bloqueadas abiertas={etapa >= 6 ? ["instagram"] : []} />
      <Tap x={43} y={172} on={etapa === 1} />
      <Tap x={129} y={172} on={etapa === 7} />

      <Shield visible={etapa >= 2 && etapa <= 5} titulo="Primero, su Palabra" texto="Abre tu Biblia y hazle una foto para abrir Instagram." cita="Lámpara es a mis pies tu palabra" ref_="Salmo 119:105" boton="Abrir cámara" />
      <Shield visible={etapa >= 8} titulo="Habla con Él primero" texto="Cierra los ojos y ora un momento para abrir TikTok." cita="Orad sin cesar" ref_="1 Tesalonicenses 5:17" boton="Orar ahora" />
      <Tap x={129} y={313} on={etapa === 3 || etapa === 9} />

      {/* Cámara escaneando la Biblia */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(80% 60% at 50% 45%, #8a6342 0%, #4b3220 70%, #2b1c12 100%)", opacity: camara ? 1 : 0, transition: "opacity 0.35s", zIndex: 3 }}>
        <p className="absolute w-full text-center" style={{ top: 70, fontSize: 13, fontWeight: 600 }}>
          {detectada ? "¡Biblia detectada!" : "Enfoca tu Biblia abierta"}
        </p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/ilus/onb-biblia.png" alt="" className="absolute" style={{ left: 39, top: 168, width: 180, filter: "drop-shadow(0 10px 18px rgba(0,0,0,0.45))" }} />
        {[[30, 132, "0deg"], [196, 132, "90deg"], [196, 298, "180deg"], [30, 298, "270deg"]].map(([x, y, r]) => (
          <span key={`${x}-${y}`} className="absolute" style={{ left: x as number, top: y as number, width: 32, height: 32, borderTop: `3px solid ${detectada ? "#34c759" : "#fff"}`, borderLeft: `3px solid ${detectada ? "#34c759" : "#fff"}`, borderTopLeftRadius: 10, transform: `rotate(${r})`, transition: "border-color 0.3s" }} />
        ))}
        {camara && !detectada && <span className="scan-line absolute" style={{ left: 36, width: 186, height: 2, background: "linear-gradient(90deg, transparent, #fff, transparent)", boxShadow: "0 0 12px rgba(255,255,255,0.9)" }} />}
        <span className="absolute flex items-center justify-center rounded-full" style={{ left: 79, top: 350, width: 100, height: 32, background: "#34c759", fontSize: 12.5, fontWeight: 700, opacity: detectada ? 1 : 0, transform: `scale(${detectada ? 1 : 0.6})`, transition: "opacity 0.3s, transform 0.4s cubic-bezier(0.34,1.5,0.64,1)" }}>
          ✓ Detectada
        </span>
      </div>

      {/* Orando: la cámara frontal ve la cara, marca los ojos cerrados y el círculo se llena */}
      <div className="absolute inset-0 text-center" style={{ background: "#0b0b0d", opacity: orando ? 1 : 0, transition: "opacity 0.35s", zIndex: 4 }}>
        <p className="absolute w-full" style={{ left: 0, top: 66, fontSize: 15, fontWeight: 700, margin: 0 }}>{completada ? "Oración completada" : "Cierra los ojos y ora con Dios"}</p>
        <div className="absolute" style={{ left: 49, top: 104, width: 160, height: 160 }}>
          {/* Cara en la cámara, con el escáner de los ojos encima */}
          <div className="absolute overflow-hidden rounded-full" style={{ left: 10, top: 10, width: 140, height: 140 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/ilus/orar-cara-v2.jpg" alt="" style={{ width: 140, height: 140, display: "block" }} />
            {[33, 77].map((x) => (
              <span key={x} className="absolute" style={{ left: x, top: 67, width: 28, height: 12, border: "1.5px solid #34c759", borderRadius: 5, background: "rgba(52,199,89,0.12)" }}>
                <span className="absolute text-center" style={{ left: -6, right: -6, top: -12, fontSize: 7.5, fontWeight: 700, color: "#34c759" }}>cerrado</span>
              </span>
            ))}
            {orando && !completada && <span className="face-scan absolute" style={{ left: 0, width: 140, height: 2, background: "linear-gradient(90deg, transparent, #34c759, transparent)", boxShadow: "0 0 10px #34c759" }} />}
          </div>
          <svg width="160" height="160" viewBox="0 0 160 160" className="absolute inset-0" style={{ transform: "rotate(-90deg)" }}>
            <circle cx="80" cy="80" r="75" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="5" />
            <circle cx="80" cy="80" r="75" fill="none" stroke={completada ? "#34c759" : "#f0492e"} strokeWidth="5" strokeLinecap="round" strokeDasharray={471} strokeDashoffset={orando ? 0 : 471} style={{ transition: orando ? "stroke-dashoffset 2.8s linear, stroke 0.3s" : "none" }} />
          </svg>
        </div>
        <span className="absolute inline-flex items-center justify-center rounded-full" style={{ left: 69, top: 280, width: 120, height: 28, gap: 6, background: "rgba(52,199,89,0.16)", color: "#34c759", fontSize: 12, fontWeight: 700 }}>
          <span className="rounded-full" style={{ width: 7, height: 7, background: "#34c759" }} />Ojos cerrados
        </span>
        <p className="absolute w-full" style={{ left: 0, top: 322, fontSize: 12.5, color: "rgba(255,255,255,0.8)", margin: 0, opacity: completada ? 1 : 0, transition: "opacity 0.4s" }}>TikTok ya se puede abrir.</p>
        <p className="absolute w-full" style={{ left: 0, top: 322, fontSize: 11, color: "rgba(255,255,255,0.45)", margin: 0, opacity: completada ? 0 : 1 }}>La cámara no graba nada.</p>
      </div>
    </PhoneFrame>
  );
}
