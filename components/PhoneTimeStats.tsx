"use client";

import { useEffect, useRef, useState } from "react";

// Como el "Average time saved" de Opal: la pantalla (dato + CTA naranja) se queda fija
// y al bajar solo cambia el número; al llegar a 8 años la página sigue.
// Media mundial: más de 3 h al día con el móvil (DataReportal, Digital 2025).
// 3 h × 365 = 1.095 h ≈ 45 días. 45 días × 65 años (de los 15 a los 80) ≈ 8 años.
const STATS = [
  { big: "3 horas", small: "cada día" },
  { big: "45 días", small: "cada año" },
  { big: "8 años", small: "de tu vida" },
];

export default function PhoneTimeStats({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      // Empieza a cambiar cuando la sección va por el 30 % de la pantalla, antes de quedarse fija.
      const r = ref.current!.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.3;
      const p = Math.min(0.999, Math.max(0, (start - r.top) / (start + r.height - vh)));
      setStep(Math.floor(p * STATS.length));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); cancelAnimationFrame(raf); };
  }, []);

  return (
    <div ref={ref} className="relative" style={{ height: "220svh" }}>
      <div className="sticky top-0 flex flex-col" style={{ height: "100svh" }}>
        <div className="flex-1 flex flex-col items-center justify-center gap-8 md:gap-10 px-6 pt-[124px] pb-12" style={{ background: "#FDFCF8" }}>
          <h2 className="text-[28px] md:text-[44px]" style={{ fontWeight: 700, color: "#333333", lineHeight: 1.15, letterSpacing: "-0.5px", textAlign: "center", margin: 0, maxWidth: "640px", textWrap: "balance" }}>
            Tiempo medio que pasamos con el móvil
          </h2>
          <div className="relative w-full h-[132px] md:h-[190px]" aria-live="polite">
            {STATS.map((s, i) => (
              <div
                key={s.big}
                aria-hidden={i !== step}
                className="absolute inset-0 flex flex-col items-center justify-center"
                style={{ opacity: i === step ? 1 : 0, transform: `translateY(${i === step ? 0 : i < step ? -24 : 24}px)`, transition: "opacity 0.5s, transform 0.5s" }}
              >
                <p className="text-[72px] md:text-[120px]" style={{ fontWeight: 700, lineHeight: 1, letterSpacing: "-2px", margin: 0, background: "linear-gradient(180deg, #2b2f36 35%, #9a978f)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                  {s.big}
                </p>
                <p className="text-[20px] md:text-[26px]" style={{ fontWeight: 700, color: "#a8a6a0", margin: "18px 0 0" }}>{s.small}</p>
              </div>
            ))}
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
