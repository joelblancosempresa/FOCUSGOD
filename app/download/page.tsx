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

        {/* Hero */}
        <section className="bg-cream py-20 px-6">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-blue font-semibold text-sm uppercase tracking-widest mb-4">
                Disponible en App Store
              </p>
              <h1 className="text-4xl sm:text-5xl font-semibold text-ink leading-[1.1] mb-6">
                La forma más simple de poner a Dios primero.
              </h1>
              <p className="text-ink2 text-lg leading-relaxed mb-8">
                FocusGod ayuda a los creyentes a construir una rutina espiritual diaria — bloqueando las distracciones y abriendo el camino a Dios, cada mañana.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-blue text-lg"
                >
                  🍎 Descargar para iPhone
                </a>
              </div>
              <p className="text-ink3 text-sm mt-4">Gratis · 3 días de prueba · Sin tarjeta</p>
            </div>

            {/* Phone mockup */}
            <div className="flex justify-center">
              <div className="w-64 bg-ink rounded-3xl p-5 shadow-2xl">
                <p className="text-white/50 text-xs mb-1">Buen día, Joel 👋</p>
                <p className="text-white font-bold text-sm mb-4">Ora antes de abrir el móvil</p>
                <div className="bg-blue/20 rounded-2xl p-4 mb-4 text-center">
                  <p className="text-white/70 text-xs mb-1">📖 Versículo de hoy</p>
                  <p className="text-white text-xs italic leading-relaxed">&ldquo;Buscad primeramente el reino de Dios...&rdquo;</p>
                  <p className="text-white/50 text-xs mt-1">Mateo 6:33</p>
                </div>
                <button className="w-full bg-blue text-white font-bold py-3 rounded-2xl text-sm mb-3">
                  🙏 Comenzar oración
                </button>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-yellow font-semibold text-xl">🔥 14</span>
                    <p className="text-white/50 text-xs">días seguidos</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-bold text-sm">3 min</p>
                    <p className="text-white/50 text-xs">para desbloquear</p>
                  </div>
                </div>
              </div>
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
