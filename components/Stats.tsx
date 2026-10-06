"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "500M+", label: "horas robadas por redes sociales al día" },
  { value: "La 1ª", label: "app que bloquea apps hasta que oras" },
  { value: "Mateo 6:33", label: "el versículo que lo cambió todo" },
];

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-bg py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl sm:text-5xl font-black text-blue">{s.value}</p>
              <p className="text-sm text-ink2 mt-2 leading-snug max-w-[160px] mx-auto">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
