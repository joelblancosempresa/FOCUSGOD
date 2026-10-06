"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Problem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-cream py-20 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-blue text-sm uppercase tracking-widest mb-4 font-semibold"
        >
          📖 Versículo del día
        </motion.p>
        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-bold text-ink leading-snug italic mb-4"
        >
          &ldquo;Buscad primeramente el reino de Dios y su justicia, y todas estas cosas os serán añadidas.&rdquo;
        </motion.blockquote>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-ink2 font-medium"
        >
          — Mateo 6:33 · RVR1960
        </motion.p>
      </div>
    </section>
  );
}
