"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState } from "react";

// Teléfonos en modo oscuro para "Así funciona". Todo se dibuja en puntos de la pantalla
// del móvil de la app (258 × 522) y se escala al tamaño del teléfono de la web.

export const BLUE = "#0A84FF"; // azul del sistema de Apple en oscuro
// Las que se eligen en «Social» (paso 1) y luego se bloquean.
const APPS = [
  { id: "instagram", nombre: "Instagram" },
  { id: "tiktok", nombre: "TikTok" },
  { id: "facebook", nombre: "Facebook" },
  { id: "x", nombre: "X" },
  { id: "snapchat", nombre: "Snapchat" },
  { id: "reddit", nombre: "Reddit" },
];
// La pantalla de inicio entera, 3 × 3. FocusGod es la única que nunca se bloquea.
const INICIO = [
  ...APPS.map((a) => ({ ...a, src: `/ilus/onb-app-${a.id}.png`, bloquea: true })),
  { id: "youtube", nombre: "YouTube", src: "/ilus/onb-app-youtube.png", bloquea: true },
  { id: "clash", nombre: "Clash", src: "/ilus/onb-app-clash.png", bloquea: true },
  { id: "focusgod", nombre: "FocusGod", src: "/app-icon-vela.png", bloquea: false },
];

export function PhoneFrame({ children, phoneRef }: { children: React.ReactNode; phoneRef?: React.Ref<HTMLDivElement> }) {
  return (
    <div
      ref={phoneRef}
      aria-hidden="true"
      className="relative w-[170px] md:w-[250px] rounded-[26px] border-[5px] md:rounded-[38px] md:border-[7px] overflow-hidden [--s:0.62] md:[--s:0.915]"
      style={{ aspectRatio: "258 / 522", borderColor: "#1b1f27", background: "#000", maskImage: "linear-gradient(to bottom, #000 62%, transparent 95%)", WebkitMaskImage: "linear-gradient(to bottom, #000 62%, transparent 95%)" }}
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
      style={{ right: -6, bottom: -6, width: 26, height: 26, background: "#1c1c1e", border: "2px solid #000", opacity: visible ? 1 : 0, transform: `scale(${visible ? 1 : 0.3})`, transition: `opacity 0.35s ease ${delay}ms, transform 0.45s cubic-bezier(0.34,1.5,0.64,1) ${delay}ms` }}
    >
      <svg width="12" height="14" viewBox="0 0 12 14" fill="#fff"><path d="M3 6V4a3 3 0 0 1 6 0v2h.5A1.5 1.5 0 0 1 11 7.5v5A1.5 1.5 0 0 1 9.5 14h-7A1.5 1.5 0 0 1 1 12.5v-5A1.5 1.5 0 0 1 2.5 6H3Zm1.5 0h3V4a1.5 1.5 0 0 0-3 0v2Z" /></svg>
    </span>
  );
}

// Pantalla de inicio con las 6 apps en grande; `bloqueadas` las oscurece y les pone candado.
function HomeScreen({ bloqueadas, escalonado = false }: { bloqueadas: boolean; escalonado?: boolean }) {
  return (
    <div className="absolute inset-0" style={{ background: WALLPAPER }}>
      <div className="absolute grid" style={{ left: "50%", top: 64, transform: "translateX(-50%)", gridTemplateColumns: "repeat(3, 60px)", columnGap: 26, rowGap: 18 }}>
        {INICIO.map((a, i) => {
          const d = escalonado ? i * 120 : 0;
          const off = bloqueadas && a.bloquea;
          return (
            <div key={a.id} className="flex flex-col items-center" style={{ gap: 5 }}>
              <div className="relative" style={{ width: 60, height: 60 }}>
                <img src={a.src} alt="" style={{ width: 60, height: 60, borderRadius: 14, boxShadow: "0 2px 6px rgba(0,0,0,0.25)", filter: off ? "saturate(0) brightness(0.45)" : "none", transition: `filter 0.6s ease ${d}ms` }} />
                {a.bloquea && <Lock visible={off} delay={d} />}
              </div>
              <span style={{ fontSize: 10.5, whiteSpace: "nowrap", textShadow: "0 1px 3px rgba(0,0,0,0.5)", color: off ? "rgba(255,255,255,0.5)" : "#fff", transition: `color 0.6s ease ${d}ms` }}>{a.nombre}</span>
            </div>
          );
        })}
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
