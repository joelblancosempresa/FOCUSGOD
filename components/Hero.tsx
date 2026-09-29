"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="min-h-screen bg-bg flex flex-col items-center justify-center pt-20 pb-16 px-6 text-center overflow-hidden">
      {/* Badges */}
      <motion.div
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="flex items-center gap-3 mb-8"
      >
        <span className="inline-flex items-center gap-1.5 bg-white border border-ink/10 rounded-full px-4 py-1.5 text-sm font-medium text-ink2 shadow-sm">
          <span className="text-amber">★</span> 4.9 en App Store
        </span>
        <span className="inline-flex items-center gap-1.5 bg-white border border-ink/10 rounded-full px-4 py-1.5 text-sm font-medium text-ink2 shadow-sm">
          🔥 10K+ usuarios
        </span>
      </motion.div>

      {/* Headline */}
      <motion.h1
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="font-serif text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.08] tracking-tight max-w-2xl"
      >
        tus apps bloqueadas.
        <br />
        <span className="text-red">hasta que pongas a Dios primero.</span>
      </motion.h1>

      <motion.p
        custom={2}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="mt-6 text-lg text-ink2 max-w-sm leading-relaxed"
      >
        ora. lee la biblia. desbloquea todo.
      </motion.p>

      {/* CTAs */}
      <motion.div
        custom={3}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="mt-8 flex flex-col sm:flex-row items-center gap-3"
      >
        <a href="#download" className="btn-red text-base">
          empezar — 3 días gratis
        </a>
        <span className="text-sm text-ink3">sin tarjeta. sin excusas.</span>
      </motion.div>

      {/* Phone mockup */}
      <motion.div
        custom={4}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="mt-14 relative"
      >
        <PhoneMockup />
      </motion.div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[220px] sm:w-[260px]">
      {/* Glow */}
      <div className="absolute inset-0 blur-3xl rounded-full bg-red/20 scale-110 -z-10" />

      {/* Phone shell */}
      <div className="relative bg-ink rounded-[40px] p-[3px] shadow-2xl">
        <div className="bg-bg2 rounded-[38px] overflow-hidden">
          {/* Status bar */}
          <div className="bg-ink h-7 flex items-center justify-center">
            <div className="w-20 h-4 bg-black rounded-full" />
          </div>

          {/* Screen content */}
          <div className="px-5 py-6 space-y-5">
            {/* Header */}
            <div className="text-center">
              <p className="text-xs text-ink3 font-medium uppercase tracking-wider">buenos días</p>
              <p className="font-serif text-lg text-ink mt-0.5">Tu llama te espera 🔥</p>
            </div>

            {/* Foco flame */}
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-b from-amber to-red flex items-center justify-center text-3xl shadow-lg">
                🔥
              </div>
            </div>

            {/* Blocked apps */}
            <div className="bg-white rounded-2xl p-3 shadow-sm">
              <p className="text-xs text-ink3 mb-2 font-medium">bloqueadas hasta que ores</p>
              <div className="grid grid-cols-4 gap-2">
                {["📱", "📸", "🎵", "🐦"].map((emoji, i) => (
                  <div
                    key={i}
                    className="aspect-square bg-ink/5 rounded-xl flex items-center justify-center text-lg grayscale opacity-50"
                  >
                    {emoji}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <button className="w-full bg-red text-white text-xs font-semibold py-3 rounded-2xl">
              orar ahora →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
