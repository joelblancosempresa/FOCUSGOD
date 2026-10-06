"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const reviews = [
  {
    name: "Carlos M.",
    city: "Ciudad de México 🇲🇽",
    stars: 5,
    text: "Llevo 3 semanas orando antes de abrir el móvil. Nunca había durado tanto. Esta app hizo lo que ningún bloqueador había conseguido.",
  },
  {
    name: "Valentina R.",
    city: "Bogotá 🇨🇴",
    stars: 5,
    text: "Mi relación con Dios cambió en dos semanas. Ahora lo primero que hago al despertarme es orar, no ver stories. Impresionante.",
  },
  {
    name: "Diego P.",
    city: "Madrid 🇪🇸",
    stars: 5,
    text: "Por fin algo que bloquea el móvil de verdad hasta que oro. Sin atajos. Sin poder saltármelo. Exactamente lo que necesitaba.",
  },
];

export default function Reviews() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-cream py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-black text-ink text-center mb-12"
        >
          Vidas que están cambiando.
        </motion.h2>

        <div className="grid gap-5 sm:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="bg-white rounded-3xl p-6 shadow-sm border border-black/5 flex flex-col gap-4"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: r.stars }).map((_, j) => (
                  <span key={j} className="text-yellow text-base">★</span>
                ))}
              </div>
              <p className="text-sm text-ink2 leading-relaxed flex-1">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="pt-2 border-t border-black/5">
                <p className="text-sm font-bold text-ink">{r.name}</p>
                <p className="text-xs text-ink3">{r.city}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
