import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soporte — FocusGod",
  description: "¿Necesitas ayuda con FocusGod? Escríbenos.",
};

const EMAIL = "support@focusgodapp.com";

const faqs = [
  {
    q: "Las apps no se bloquean",
    a: "Comprueba que diste permiso de Tiempo de Uso a FocusGod en Ajustes → Tiempo de uso, y que el bloqueo está activo en la app.",
  },
  {
    q: "¿Cómo cancelo mi suscripción?",
    a: "En tu iPhone: Ajustes → tu nombre → Suscripciones → FocusGod. Cancela al menos 24 horas antes de la renovación.",
  },
  {
    q: "Cambié de iPhone y no tengo mi suscripción",
    a: "Abre FocusGod, ve a la pantalla de suscripción y toca «Restaurar compra» con la misma cuenta de Apple.",
  },
];

export default function Soporte() {
  return (
    <>
      <Navbar />
      <main className="pt-14">

        <section className="bg-cream py-20 px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-blue font-bold text-base mb-4">Soporte</p>
            <h1 className="text-4xl sm:text-5xl font-semibold text-ink leading-[1.1] mb-6">
              ¿En qué te ayudamos?
            </h1>
            <p className="text-ink2 text-lg leading-relaxed mb-8">
              Escríbenos y te respondemos lo antes posible.
            </p>
            <a href={`mailto:${EMAIL}`} className="btn-blue">{EMAIL}</a>
          </div>
        </section>

        <section className="bg-bg py-16 px-6">
          <div className="max-w-2xl mx-auto flex flex-col gap-6">
            {faqs.map((f) => (
              <div key={f.q} className="card p-6 sm:p-8">
                <h2 className="text-lg font-semibold text-ink mb-2">{f.q}</h2>
                <p className="text-ink2 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
