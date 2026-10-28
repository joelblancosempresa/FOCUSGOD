"use client";

import { useState } from "react";
import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/cta";

type Status = "idle" | "sending" | "done" | "error";

const inputStyle: React.CSSProperties = {
  width: "100%",
  height: "52px",
  borderRadius: "14px",
  border: "1.5px solid #e6e2d8",
  background: "#fff",
  padding: "0 16px",
  fontSize: "16px",
  color: "#333",
  outline: "none",
};

export default function WaitlistForm() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [plataforma, setPlataforma] = useState<"" | "iphone" | "android">("");
  const [consentimiento, setConsentimiento] = useState(false);
  const [web, setWeb] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!nombre.trim()) return setError("Escribe tu nombre.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) return setError("Revisa tu email.");
    if (!plataforma) return setError("Dinos si tienes iPhone o Android.");
    if (!consentimiento) return setError("Marca la casilla para que podamos avisarte.");

    setStatus("sending");
    const origen = new URLSearchParams(window.location.search).get("o") ?? "web";
    try {
      const res = await fetch("/api/lista", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, email, plataforma, consentimiento, origen, web }),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
    } catch {
      setStatus("error");
      setError("No se ha podido guardar. Inténtalo otra vez.");
    }
  }

  if (status === "done") {
    return (
      <div style={{ background: "#fff", borderRadius: "24px", padding: "32px 24px", boxShadow: "0 2px 16px rgba(0,0,0,0.07)", textAlign: "center" }}>
        <p style={{ fontSize: "40px", margin: "0 0 8px" }} aria-hidden="true">🙏</p>
        <h2 style={{ fontSize: "24px", fontWeight: 700, color: "#333", margin: "0 0 10px" }}>
          ¡Listo, {nombre.trim().split(" ")[0]}!
        </h2>
        <p style={{ fontSize: "16px", color: "#7a7872", lineHeight: 1.55, margin: 0 }}>
          Te avisaremos el día que FocusGod salga.
          {plataforma === "android" && " Android llega en la segunda fase: te avisaremos en cuanto esté."}
        </p>
        {WHATSAPP_URL && (
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "block", marginTop: "24px", background: "#25D366", color: "#fff", fontWeight: 700, fontSize: "16px", padding: "16px", borderRadius: "14px", textDecoration: "none", boxShadow: "0 4px 0 0 #1a9e4b" }}
          >
            Únete a la comunidad en WhatsApp
          </a>
        )}
        <Link href="/download" style={{ display: "inline-block", marginTop: "18px", fontSize: "15px", color: "#f0492e", fontWeight: 600, textDecoration: "none" }}>
          Mientras, mira qué hace la app →
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate style={{ background: "#fff", borderRadius: "24px", padding: "24px", boxShadow: "0 2px 16px rgba(0,0,0,0.07)", textAlign: "left", display: "flex", flexDirection: "column", gap: "14px" }}>
      <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "14px", fontWeight: 600, color: "#333" }}>
        Nombre
        <input style={inputStyle} value={nombre} onChange={(e) => { setNombre(e.target.value); setError(""); }} autoComplete="given-name" placeholder="Tu nombre" />
      </label>
      <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "14px", fontWeight: 600, color: "#333" }}>
        Email
        <input style={inputStyle} type="email" inputMode="email" value={email} onChange={(e) => { setEmail(e.target.value); setError(""); }} autoComplete="email" placeholder="tu@email.com" />
      </label>

      <fieldset style={{ border: "none", padding: 0, margin: 0 }}>
        <legend style={{ fontSize: "14px", fontWeight: 600, color: "#333", marginBottom: "6px" }}>¿Qué móvil tienes?</legend>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
          {(["iphone", "android"] as const).map((p) => {
            const on = plataforma === p;
            return (
              <button
                key={p}
                type="button"
                aria-pressed={on}
                onClick={() => { setPlataforma(p); setError(""); }}
                style={{ height: "52px", borderRadius: "14px", fontSize: "16px", fontWeight: 600, cursor: "pointer", border: on ? "2px solid #f0492e" : "1.5px solid #e6e2d8", background: on ? "#fff4f1" : "#fff", color: on ? "#f0492e" : "#555" }}
              >
                {p === "iphone" ? "iPhone" : "Android"}
              </button>
            );
          })}
        </div>
        {plataforma === "android" && (
          <p style={{ fontSize: "13px", color: "#7a7872", lineHeight: 1.5, margin: "8px 0 0" }}>
            FocusGod sale primero en iPhone. Android llega en la segunda fase, que ya está en marcha: apúntate y te avisamos.
          </p>
        )}
      </fieldset>

      <label style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "13px", color: "#7a7872", lineHeight: 1.5, cursor: "pointer" }}>
        <input type="checkbox" checked={consentimiento} onChange={(e) => { setConsentimiento(e.target.checked); setError(""); }} style={{ width: "18px", height: "18px", marginTop: "2px", accentColor: "#f0492e", flexShrink: 0 }} />
        <span>
          Quiero recibir emails de FocusGod sobre el lanzamiento y novedades. Puedo darme de baja cuando quiera. Ver la{" "}
          <Link href="/privacidad" style={{ color: "#f0492e" }}>política de privacidad</Link>.
        </span>
      </label>

      <input type="text" name="web" value={web} onChange={(e) => setWeb(e.target.value)} tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }} />

      {error && <p role="alert" style={{ fontSize: "14px", color: "#c0392b", margin: 0 }}>{error}</p>}

      <button
        type="submit"
        disabled={status === "sending"}
        style={{ height: "56px", border: "none", borderRadius: "14px", background: "#f0492e", color: "#fff", fontWeight: 700, fontSize: "17px", cursor: status === "sending" ? "wait" : "pointer", boxShadow: "0 4px 0 0 #bf321c", opacity: status === "sending" ? 0.8 : 1, marginTop: "4px" }}
      >
        {status === "sending" ? "Guardando…" : "Avísame"}
      </button>
    </form>
  );
}
