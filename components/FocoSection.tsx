"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FocoSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-bg py-12 px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto rounded-3xl px-8 py-14 text-center text-white"
        style={{ background: "linear-gradient(135deg, #1CB0F6 0%, #0EA5E9 100%)" }}
      >
        <h2 className="text-3xl sm:text-4xl font-black mb-4">
          Recupera el tiempo que le robas a Dios.
        </h2>
        <p className="text-white/80 text-lg mb-8">
          Miles de personas ya lo están haciendo. Empieza hoy.
        </p>
        <a
          href="https://apps.apple.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-blue font-black px-8 py-4 rounded-2xl text-lg hover:opacity-90 transition-opacity active:scale-95"
          style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}
        >
          Prueba 3 días gratis →
        </a>
      </motion.div>
    </section>
  );
}
