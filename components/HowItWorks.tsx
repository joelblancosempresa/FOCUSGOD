"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    emoji: "🚫",
    title: "Bloquea Instagram, TikTok y YouTube",
    desc: "La app bloquea las apps que te roban el tiempo hasta que completes tu momento con Dios. Sin atajos. Sin poder saltártelo.",
  },
  {
    emoji: "🙏",
    title: "Ora y lee la Biblia cada día",
    desc: "Una rutina espiritual guiada cada mañana. Oraciones, versículos y reflexiones que caben en 5 minutos.",
  },
  {
    emoji: "🔥",
    title: "Construye el hábito que siempre quisiste",
    desc: "Rachas diarias, recordatorios inteligentes y seguimiento de tu crecimiento espiritual. El hábito se forma solo.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" ref={ref} className="bg-bg py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-blue text-sm uppercase tracking-widest mb-2 font-semibold text-center"
        >
          Cómo funciona
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-black text-ink text-center mb-14"
        >
          Simple. Poderoso. Efectivo.
        </motion.h2>

        <div className="flex flex-col gap-16">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className={`flex flex-col md:flex-row gap-8 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="flex-1">
                <p className="text-5xl mb-4">{f.emoji}</p>
                <h3 className="text-2xl font-black text-ink mb-3">{f.title}</h3>
                <p className="text-ink2 text-lg leading-relaxed">{f.desc}</p>
              </div>
              <div className="w-48 h-48 bg-cream rounded-3xl flex items-center justify-center text-8xl shadow-sm flex-shrink-0">
                {f.emoji}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
