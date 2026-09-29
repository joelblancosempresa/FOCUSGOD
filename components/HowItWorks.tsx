"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "bloquea tus apps",
    desc: "elige qué apps se bloquean cada mañana. instagram, tiktok, youtube — lo que sea. quedan cerradas hasta que cumplas.",
    icon: "🔒",
    color: "bg-red/10 text-red",
  },
  {
    number: "02",
    title: "pon a Dios primero",
    desc: "ora. lee la biblia. un par de minutos son suficientes. FocusGod te guía si no sabes por dónde empezar.",
    icon: "🙏",
    color: "bg-amber/10 text-amber",
  },
  {
    number: "03",
    title: "desbloquea todo",
    desc: "cumpliste. las apps se abren. el día es tuyo — sin culpa, sin pelea contigo mismo.",
    icon: "✅",
    color: "bg-green/10 text-green",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-bg py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-red text-sm uppercase tracking-widest mb-3 font-medium text-center"
        >
          cómo funciona
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-serif text-3xl sm:text-4xl text-ink text-center mb-14"
        >
          tres pasos. sin trampa.
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
              className="bg-card rounded-3xl p-7 shadow-sm border border-ink/5"
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-5 ${step.color}`}>
                {step.icon}
              </div>
              <p className="text-xs text-ink3 font-semibold uppercase tracking-widest mb-2">
                paso {step.number}
              </p>
              <h3 className="font-serif text-xl text-ink mb-3">{step.title}</h3>
              <p className="text-sm text-ink2 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
