"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Problem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-ink py-20 px-6 text-center">
      <motion.p
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="text-ink3 text-sm uppercase tracking-widest mb-8 font-medium"
      >
        el problema
      </motion.p>

      <motion.h2
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-[1.1] max-w-2xl mx-auto"
      >
        ¿y si en vez de abrir instagram
        <br />
        nada más levantarte...
        <br />
        <span className="text-red">hablaras primero con Dios?</span>
      </motion.h2>

      <motion.p
        custom={2}
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="mt-8 text-base text-white/60 max-w-md mx-auto leading-relaxed"
      >
        el problema no eres tú. son los ingenieros con doctorados en psicología
        que diseñaron esas apps para que no puedas parar.
        <br className="hidden sm:block" />
        <span className="text-white/90 font-medium"> no es una batalla justa.</span>
      </motion.p>

      <motion.div
        custom={3}
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="mt-12 flex flex-wrap justify-center gap-3 max-w-lg mx-auto"
      >
        {[
          "abres el móvil al despertar",
          "te prometes orar luego",
          "el día pasa",
          "no oraste",
          "mañana lo mismo",
        ].map((item, i) => (
          <span
            key={i}
            className="bg-white/8 border border-white/10 text-white/80 text-sm px-4 py-2 rounded-full"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
