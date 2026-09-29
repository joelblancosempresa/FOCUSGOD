"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FocoSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-ink py-20 px-6 text-center overflow-hidden">
      <div className="max-w-2xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-ink3 text-sm uppercase tracking-widest mb-10 font-medium"
        >
          foco — tu llama espiritual
        </motion.p>

        {/* Foco states */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center items-end gap-8 mb-12"
        >
          <FocoState emoji="🌑" label="sin orar" dim />
          <FocoState emoji="🔥" label="orando" big />
          <FocoState emoji="✨" label="constante" bright />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-serif text-3xl sm:text-4xl text-white leading-[1.15] mb-6"
        >
          foco refleja tu alma.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-white/60 text-base leading-relaxed max-w-md mx-auto"
        >
          cuando buscas a Dios, crece y brilla.
          <br />
          cuando te alejas, se apaga.
          <br />
          <span className="text-white/90">no te juzga. solo te muestra dónde estás.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 inline-block bg-white/5 border border-white/10 rounded-2xl px-6 py-4"
        >
          <p className="text-white/50 text-xs uppercase tracking-wider mb-1">versículo ancla</p>
          <p className="text-white/90 text-sm italic font-serif leading-relaxed">
            &ldquo;Mas buscad primeramente el reino de Dios y su justicia,<br />
            y todas estas cosas os serán añadidas.&rdquo;
          </p>
          <p className="text-red text-xs mt-2 font-medium">Mateo 6:33</p>
        </motion.div>
      </div>
    </section>
  );
}

function FocoState({
  emoji,
  label,
  dim,
  big,
  bright,
}: {
  emoji: string;
  label: string;
  dim?: boolean;
  big?: boolean;
  bright?: boolean;
}) {
  const size = big ? "w-24 h-24 text-5xl" : "w-16 h-16 text-3xl";
  const glow = bright
    ? "shadow-[0_0_40px_rgba(232,137,12,0.5)]"
    : big
    ? "shadow-[0_0_24px_rgba(240,73,46,0.4)]"
    : "";

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={`${size} rounded-full flex items-center justify-center transition-all ${
          dim ? "opacity-30 grayscale" : ""
        } ${glow}`}
        style={
          big
            ? { background: "radial-gradient(circle at 40% 40%, #E8890C, #F0492E)" }
            : bright
            ? { background: "radial-gradient(circle at 40% 40%, #FFD700, #E8890C)" }
            : { background: "rgba(255,255,255,0.05)" }
        }
      >
        {emoji}
      </div>
      <p className={`text-xs font-medium ${dim ? "text-white/30" : bright ? "text-amber" : "text-red"}`}>
        {label}
      </p>
    </div>
  );
}
