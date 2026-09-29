"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const reviews = [
  {
    name: "Carlos",
    age: 28,
    flag: "🇪🇸",
    stars: 5,
    text: "Llevo 3 semanas orando antes de abrir el móvil. Nunca había durado tanto. Esta app hizo lo que ningún bloqueador había conseguido.",
  },
  {
    name: "María",
    age: 34,
    flag: "🇲🇽",
    stars: 5,
    text: "Mi relación con Dios cambió en dos semanas. Ahora lo primero que hago al despertarme es orar, no ver stories. Impresionante.",
  },
  {
    name: "Andrés",
    age: 31,
    flag: "🇨🇴",
    stars: 5,
    text: "Por fin algo que bloquea el móvil de verdad hasta que oro. Sin atajos. Sin poder saltármelo. Exactamente lo que necesitaba.",
  },
];

export default function Reviews() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-bg2 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-red text-sm uppercase tracking-widest mb-3 font-medium text-center"
        >
          lo que dicen
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-serif text-3xl sm:text-4xl text-ink text-center mb-12"
        >
          vidas que están cambiando.
        </motion.h2>

        <div className="grid gap-5 sm:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="bg-card rounded-3xl p-6 shadow-sm border border-ink/5 flex flex-col gap-4"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: r.stars }).map((_, j) => (
                  <span key={j} className="text-amber text-sm">★</span>
                ))}
              </div>
              <p className="text-sm text-ink2 leading-relaxed flex-1">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="flex items-center gap-2 pt-2 border-t border-ink/5">
                <span className="text-xl">{r.flag}</span>
                <div>
                  <p className="text-sm font-semibold text-ink">{r.name}</p>
                  <p className="text-xs text-ink3">{r.age} años</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
