import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Descargar FocusGod — Disponible en App Store",
  description: "Descarga FocusGod gratis. Bloquea apps, ora cada día, construye el hábito espiritual que siempre quisiste.",
};

const features = [
  {
    title: "Bloqueo real de apps",
    desc: "Instagram, TikTok, YouTube — bloqueados hasta que termines tu momento con Dios. Sin atajos.",
  },
  {
    title: "Widget espiritual",
    desc: "Versículo del día, contador de racha y botón de oración directo en tu pantalla de inicio.",
  },
  {
    title: "Rachas diarias",
    desc: "Cada día que oras a primera hora suma a tu racha. 21 días para transformar un hábito.",
  },
  {
    title: "Oración guiada",
    desc: "¿No sabes cómo empezar? FocusGod te guía con oraciones cortas y lecturas bíblicas.",
  },
];

export default function Download() {
  return (
    <>
      <Navbar />
      <main className="pt-14">

        {/* Hero — estilo Manna */}
        <section style={{ background: "#FEF3C7", paddingBottom: "0", overflow: "hidden" }} className="pt-20 px-6 text-center">
          <div className="max-w-sm mx-auto">
            <h1 className="text-2xl font-semibold text-ink leading-[1.2] mb-4">
              La forma más simple de poner a Dios primero.
            </h1>
            <p className="text-ink2 text-sm leading-relaxed mb-8">
              FocusGod bloquea Instagram, TikTok y YouTube hasta que hayas pasado tiempo con Dios — cada mañana.
            </p>

            {/* Botones — negro, pill, ancho centrado como Manna */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "40px", maxWidth: "280px", margin: "0 auto 40px" }}>
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  background: "#111",
                  color: "#fff",
                  borderRadius: "50px",
                  padding: "12px 20px",
                  textDecoration: "none",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: "9px", opacity: 0.7, lineHeight: 1 }}>Download on the</div>
                  <div style={{ fontSize: "15px", fontWeight: 700, lineHeight: 1.2 }}>App Store</div>
                </div>
              </a>

              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  background: "#111",
                  color: "#fff",
                  borderRadius: "50px",
                  padding: "12px 20px",
                  textDecoration: "none",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M3.18 23.76c.3.16.63.24.97.22l12.4-7.15-2.75-2.76-10.62 9.69z" fill="#EA4335"/>
                  <path d="M22.38 10.62l-3.24-1.87-3.07 3.08 3.07 3.07 3.27-1.88c.93-.54.93-1.86-.03-2.4z" fill="#FBBC04"/>
                  <path d="M3.18.24C2.84.06 2.46-.01 2.1.01L14.54 12.5l2.6-2.6L3.18.24z" fill="#4285F4"/>
                  <path d="M2.1.01C1.28.06.69.72.69 1.63v20.74c0 .9.59 1.57 1.41 1.62l12.44-11.99L2.1.01z" fill="#34A853"/>
                </svg>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: "9px", opacity: 0.7, lineHeight: 1 }}>GET IT ON</div>
                  <div style={{ fontSize: "15px", fontWeight: 700, lineHeight: 1.2 }}>Google Play</div>
                </div>
              </a>
            </div>

            {/* Placeholder ilustración */}
            <div style={{
              background: "#FCD34D",
              borderRadius: "20px 20px 0 0",
              height: "200px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "48px",
              letterSpacing: "8px",
            }}>
              🙏📱✝️
            </div>
          </div>
        </section>

        {/* Features — imagen arriba + texto abajo, estilo Manna */}
        <section className="bg-bg py-16 px-6">
          <div style={{ maxWidth: "420px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "48px" }}>
            {features.map((f, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                {/* Placeholder imagen — negro */}
                <div style={{
                  background: "#111",
                  borderRadius: "24px",
                  height: "220px",
                  marginBottom: "24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(255,255,255,0.2)",
                  fontSize: "13px",
                  letterSpacing: "0.5px",
                }}>
                  imagen
                </div>
                <h3 className="text-2xl font-semibold text-ink mb-3">{f.title}</h3>
                <p className="text-ink2 text-base leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA final */}
        <section className="bg-cream py-20 px-6 text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-semibold text-ink mb-4">Empieza hoy. Es gratis.</h2>
            <p className="text-ink2 text-lg mb-8">3 días de prueba completa. Sin tarjeta de crédito.</p>
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="btn-blue text-lg">
              🍎 Descargar en App Store
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
