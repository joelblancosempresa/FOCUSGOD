import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Evita que un nombre como "=HYPERLINK(...)" se ejecute como fórmula en Google Sheets.
const safeCell = (v: string) => (/^[=+\-@]/.test(v) ? `'${v}` : v);

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  // Campo trampa para bots: si viene relleno, fingimos éxito y no guardamos nada.
  if (typeof body.web === "string" && body.web.trim()) return NextResponse.json({ ok: true });

  const nombre = String(body.nombre ?? "").trim().slice(0, 80);
  const email = String(body.email ?? "").trim().toLowerCase().slice(0, 200);
  const plataforma = body.plataforma === "android" ? "Android" : body.plataforma === "iphone" ? "iPhone" : "";
  const origen = String(body.origen ?? "web").replace(/[^\w-]/g, "").slice(0, 40) || "web";

  if (!nombre || !EMAIL_RE.test(email) || !plataforma || body.consentimiento !== true) {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  const url = process.env.SHEETS_WEBHOOK_URL;
  const secret = process.env.SHEETS_SECRET;
  if (!url || !secret) {
    console.error("Faltan SHEETS_WEBHOOK_URL o SHEETS_SECRET");
    return NextResponse.json({ ok: false, error: "config" }, { status: 500 });
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret,
        fecha: new Date().toISOString(),
        nombre: safeCell(nombre),
        email,
        plataforma,
        origen,
      }),
    });
    const data = await res.json().catch(() => null);
    if (!res.ok || !data?.ok) throw new Error(`Sheets respondió ${res.status}`);
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("No se pudo guardar en Google Sheets:", e);
    return NextResponse.json({ ok: false, error: "save" }, { status: 502 });
  }
}
