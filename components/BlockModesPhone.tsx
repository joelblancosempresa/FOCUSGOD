"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { PhoneFrame } from "@/components/PhoneScreens";

// La pantalla S13 del onboarding («Tú eliges cómo»): los tipos de bloqueo pasan en una cinta,
// y el del centro cambia la imagen y la frase del móvil. Medida en puntos de la app (258 × 522).
const FORMAS = [
  { icono: "ic-biblia-abierta", nombre: "Leer la Biblia", pide: "Haz una foto de tu Biblia abierta y se desbloquean.", imagen: "onb-biblia-foto.png" },
  { icono: "ic-orar", nombre: "Orar", pide: "Ora antes de abrir tus apps.", imagen: "onb-bloqueo-orar.jpg" },
  { icono: "ic-tiempo", nombre: "Tiempo con Dios", pide: "Haz una foto de tu devocional de hoy.", imagen: "onb-bloqueo-tiempo.jpg" },
  { icono: "ic-paloma", nombre: "Caminata con Dios", pide: "Sal a caminar con Dios y haz una foto del paseo.", imagen: "onb-bloqueo-caminata.jpg" },
  { icono: "ic-diana", nombre: "Concentración", pide: "Bloquea tus apps mientras te concentras.", imagen: "onb-bloqueo-concentracion.jpg" },
  { icono: "ic-calendario", nombre: "Por horario", pide: "Tus apps se bloquean solas a tus horas.", imagen: "onb-bloqueo-horario.jpg" },
  { icono: "ic-luna", nombre: "Wind Down", pide: "Antes de dormir, el móvil descansa.", imagen: "onb-bloqueo-winddown.jpg" },
  { icono: "ic-sin-movil", nombre: "Digital Detox", pide: "Un día entero para ti y para Dios.", imagen: "onb-bloqueo-detox.jpg" },
  { icono: "ic-filtro-adulto", nombre: "Filtro adulto", pide: "Bloqueado siempre. Guarda tu corazón y tu mente.", imagen: "onb-bloqueo-filtro.jpg" },
];
const N = FORMAS.length;
const LISTA = [...FORMAS, ...FORMAS, ...FORMAS];
const TINTA = "#20242E";

export default function BlockModesPhone() {
  const [paso, setPaso] = useState(N);
  const [animar, setAnimar] = useState(false);
  const [x, setX] = useState(0);
  const cinta = useRef<HTMLDivElement>(null);
  const chips = useRef<(HTMLDivElement | null)[]>([]);
  const actual = FORMAS[paso % N];

  // Avanza una forma cada 2 s; al llegar a la tercera copia vuelve a la segunda sin animación.
  useEffect(() => {
    let t2 = 0;
    const t = window.setInterval(() => {
      setAnimar(true);
      setPaso((p) => {
        if (p + 1 >= N * 2) t2 = window.setTimeout(() => { setAnimar(false); setPaso((q) => q - N); }, 600);
        return p + 1;
      });
    }, 2000);
    return () => { clearInterval(t); clearTimeout(t2); };
  }, []);

  // Centra el chip actual en la cinta.
  useLayoutEffect(() => {
    const c = chips.current[paso];
    if (c && cinta.current) setX(cinta.current.offsetWidth / 2 - (c.offsetLeft + c.offsetWidth / 2));
  }, [paso]);

  return (
    <div className="flex flex-col items-center w-full" aria-hidden="true">
      <PhoneFrame>
        <img src="/ilus/onb-velita.png" alt="" className="absolute" style={{ left: 0, top: 39, width: 108, height: 85, objectFit: "contain" }} />
        <p key={actual.pide} className="fg-fade absolute" style={{ left: 96, top: 62, width: 148, margin: 0, padding: "10px 12px", fontSize: 12.5, fontWeight: 600, lineHeight: 1.3, background: "#1c1c1e", borderRadius: 16, border: "1px solid rgba(255,255,255,0.10)" }}>
          {actual.pide}
        </p>
        <img key={actual.imagen} src={`/ilus/${actual.imagen}`} alt="" className="fg-fade absolute" style={{ left: 34, top: 138, width: 190, height: 190, objectFit: "cover", borderRadius: 16 }} />
      </PhoneFrame>

      {/* Cinta de chips; la del centro, en rojo */}
      <div ref={cinta} className="relative w-screen shrink-0 overflow-hidden -mt-12 md:-mt-16 mb-6 py-2">
        <div className="flex w-max" style={{ gap: 12, transform: `translateX(${x}px)`, transition: animar ? "transform 0.55s ease-in-out" : "none" }}>
          {LISTA.map((f, i) => {
            const on = i === paso;
            return (
              <div
                key={i}
                ref={(el) => { chips.current[i] = el; }}
                className="flex items-center shrink-0 rounded-full"
                style={{ gap: 8, height: 46, padding: "0 18px 0 16px", background: "#fff", border: on ? "2px solid #BF321C" : "1px solid rgba(32,36,46,0.12)", boxShadow: "0 2px 4px rgba(0,0,0,0.05)", transform: `scale(${on ? 1.05 : 1})`, transition: "transform 0.3s, border-color 0.3s" }}
              >
                <img src={`/ilus/${f.icono}.png`} alt="" style={{ width: 22, height: 22 }} />
                <span style={{ fontSize: 16, fontWeight: 600, whiteSpace: "nowrap", color: on ? "#D63A22" : TINTA }}>{f.nombre}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
