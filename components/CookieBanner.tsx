"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const KEY = "fg-cookies-ok";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      setShow(true);
    }
  }, []);

  if (!show) return null;

  const accept = () => {
    try {
      localStorage.setItem(KEY, "1");
    } catch {}
    setShow(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      // Móvil: centrado abajo. Ordenador: rectángulo en la esquina inferior izquierda.
      className="fixed z-[60] left-3 right-3 mx-auto max-w-[440px] rounded-[24px] bottom-[calc(12px+env(safe-area-inset-bottom,0px))] md:left-6 md:right-auto md:bottom-6 md:mx-0 md:max-w-[520px] md:rounded-[16px]"
      style={{
        background: "#fff",
        overflow: "hidden",
        boxShadow: "0 8px 40px rgba(0,0,0,0.18)",
      }}
    >
      <div className="px-[22px] pt-6 pb-[22px] md:p-5 md:flex md:items-center md:gap-5">
        <p className="text-[16px] mb-5 md:text-[14px] md:mb-0" style={{ lineHeight: 1.55, color: "#1a1a1a" }}>
          Usamos solo lo imprescindible para que la web funcione. No usamos cookies de seguimiento ni de publicidad.
        </p>
        <button
          onClick={accept}
          className="w-full h-[52px] md:w-auto md:h-11 md:px-7 shrink-0"
          style={{
            border: "none",
            borderRadius: 14,
            background: "#f0492e",
            color: "#fff",
            fontWeight: 700,
            fontSize: 16,
            cursor: "pointer",
            boxShadow: "0 4px 0 0 #bf321c",
          }}
        >
          Aceptar
        </button>
      </div>
      <div
        className="py-3 px-[22px] justify-center md:justify-start md:py-2.5 md:px-5"
        style={{
          background: "#f3f1ea",
          display: "flex",
          gap: 24,
          fontSize: 14,
        }}
      >
        <Link href="/privacidad" style={{ color: "#7a7872", textDecoration: "none" }}>
          Política de privacidad
        </Link>
        <Link href="/terminos" style={{ color: "#7a7872", textDecoration: "none" }}>
          Términos de uso
        </Link>
      </div>
    </div>
  );
}
