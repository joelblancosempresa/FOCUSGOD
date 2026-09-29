"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Navbar() {
  const { scrollY } = useScroll();
  const shadow = useTransform(scrollY, [0, 40], ["0 0 0 rgba(0,0,0,0)", "0 2px 16px rgba(0,0,0,0.06)"]);
  const bg = useTransform(scrollY, [0, 40], ["rgba(251,246,239,0)", "rgba(251,246,239,0.95)"]);

  return (
    <motion.nav
      style={{ boxShadow: shadow, backgroundColor: bg }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-serif text-xl text-ink tracking-tight">
          Focus<span className="text-red">God</span>
        </span>
        <a
          href="#download"
          className="btn-red text-sm px-5 py-2.5 rounded-xl"
        >
          descargar gratis
        </a>
      </div>
    </motion.nav>
  );
}
