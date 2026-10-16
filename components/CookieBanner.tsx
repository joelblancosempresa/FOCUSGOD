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
      style={{
        position: "fixed",
        left: 12,
        right: 12,
        bottom: "calc(12px + env(safe-area-inset-bottom, 0px))",
        maxWidth: 440,
        margin: "0 auto",
        zIndex: 60,
        background: "#fff",
        borderRadius: 24,
        overflow: "hidden",
        boxShadow: "0 8px 40px rgba(0,0,0,0.18)",
      }}
    >
      <div style={{ padding: "24px 22px 22px" }}>
        <p style={{ fontSize: 16, lineHeight: 1.55, color: "#1a1a1a", margin: "0 0 20px" }}>
          Usamos solo lo imprescindible para que la web funcione. No usamos cookies de seguimiento ni de publicidad.
        </p>
        <button
          onClick={accept}
          style={{
            width: "100%",
            height: 52,
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
        style={{
          background: "#f3f1ea",
          padding: "12px 22px",
          display: "flex",
          justifyContent: "center",
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
