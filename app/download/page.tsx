import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Descargar FocusGod — Disponible en App Store",
  description: "Descarga FocusGod gratis. Bloquea apps, ora cada día, construye el hábito espiritual que siempre quisiste.",
};

const features = [
  {
    icon: "🚫",
    title: "Bloqueo real de apps",
    desc: "Instagram, TikTok, YouTube — bloqueados hasta que termines tu momento con Dios. Sin atajos.",
  },
  {
    icon: "📱",
    title: "Widget espiritual",
    desc: "Versículo del día, contador de racha y botón de oración directo en tu pantalla de inicio.",
  },
  {
    icon: "🔥",
    title: "Rachas diarias",
    desc: "Cada día que oras a primera hora suma a tu racha. 21 días para transformar un hábito.",
  },
  {
    icon: "🙏",
    title: "Oración guiada",
    desc: "No sabes cómo empezar? FocusGod te guía con oraciones cortas y lecturas bíblicas.",
  },
  {
    icon: "📊",
    title: "Seguimiento espiritual",
    desc: "Mira tu progreso semana a semana. El crecimiento espiritual merece ser medido.",
  },
  {
    icon: "🔔",
    title: "Recordatorios inteligentes",
    desc: "Te recuerda orar en el momento justo — antes de que abras el móvil con otra cosa.",
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
            <h1 className="text-4xl sm:text-5xl font-semibold text-ink leading-[1.1] mb-6">
              La forma más simple de poner a Dios primero.
            </h1>
            <p className="text-ink2 text-lg leading-relaxed mb-8">
              FocusGod bloquea Instagram, TikTok y YouTube hasta que hayas pasado tiempo con Dios — cada mañana.
            </p>

            {/* Botones — negro, pill, full-width */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "40px" }}>
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
                  padding: "16px 24px",
                  textDecoration: "none",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: "10px", opacity: 0.7, lineHeight: 1 }}>Download on the</div>
                  <div style={{ fontSize: "17px", fontWeight: 700, lineHeight: 1.2 }}>App Store</div>
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
                  padding: "16px 24px",
                  textDecoration: "none",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M3.18 23.76c.3.16.63.24.97.22l12.4-7.15-2.75-2.76-10.62 9.69z" fill="#EA4335"/>
                  <path d="M22.38 10.62l-3.24-1.87-3.07 3.08 3.07 3.07 3.27-1.88c.93-.54.93-1.86-.03-2.4z" fill="#FBBC04"/>
                  <path d="M3.18.24C2.84.06 2.46-.01 2.1.01L14.54 12.5l2.6-2.6L3.18.24z" fill="#4285F4"/>
                  <path d="M2.1.01C1.28.06.69.72.69 1.63v20.74c0 .9.59 1.57 1.41 1.62l12.44-11.99L2.1.01z" fill="#34A853"/>
                </svg>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: "10px", opacity: 0.7, lineHeight: 1 }}>GET IT ON</div>
                  <div style={{ fontSize: "17px", fontWeight: 700, lineHeight: 1.2 }}>Google Play</div>
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

        {/* Features grid */}
        <section className="bg-bg py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-ink text-center mb-12">
              Todo lo que necesitas para empezar.
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <div key={i} className="bg-cream rounded-3xl p-6">
                  <p className="text-3xl mb-3">{f.icon}</p>
                  <h3 className="font-semibold text-ink mb-2">{f.title}</h3>
                  <p className="text-sm text-ink2 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
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
