"use client";

import { useEffect, useRef, useState } from "react";

// 10 min × 365 días ≈ 60 h. Los dígitos ruedan como un contador cuando aparecen.
const HOURS = "60";

export default function TimeWithGod() {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } }, { threshold: 0.5 });
    io.observe(ref.current!);
    return () => io.disconnect();
  }, []);

  return (
    <section style={{ background: "#F9F5EB" }} className="px-6 py-20 md:py-28">
      <div ref={ref} className="max-w-[440px] md:max-w-[760px] mx-auto text-center">
        <p className="fg-lead md:text-[20px]" style={{ color: "#838381", margin: 0 }}>Solo 10 minutos al día con Dios son</p>
        <p aria-label={`${HOURS} horas`} style={{ display: "flex", justifyContent: "center", alignItems: "baseline", gap: "12px", margin: "14px 0 10px", color: "#f0492e", fontWeight: 800, letterSpacing: "-3px" }}>
          <span aria-hidden="true" style={{ display: "flex", fontSize: "clamp(96px, 34vw, 160px)", lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>
            {HOURS.split("").map((d, i) => (
              <span key={i} style={{ display: "inline-block", height: "1em", overflow: "hidden" }}>
                <span className="odometer-reel" style={{ display: "flex", flexDirection: "column", transform: `translateY(${on ? -(Number(d) + 10) : 0}em)`, transitionDelay: `${i * 0.15}s` }}>
                  {Array.from({ length: 20 }, (_, k) => <span key={k} style={{ height: "1em" }}>{k % 10}</span>)}
                </span>
              </span>
            ))}
          </span>
          <span aria-hidden="true" style={{ fontSize: "clamp(28px, 9vw, 44px)", letterSpacing: "-0.5px" }}>horas</span>
        </p>
        <p className="fg-h2 md:text-[34px]" style={{ fontWeight: 700, color: "#333333", letterSpacing: "-0.4px", margin: 0 }}>al año a solas con Él.</p>
      </div>
    </section>
  );
}
