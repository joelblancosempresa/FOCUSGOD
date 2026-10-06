import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre FocusGod — Nuestra misión y visión",
  description: "Ayudamos a las personas a poner a Dios primero en la era de las distracciones digitales.",
};

const values = [
  {
    icon: "🎯",
    title: "Enfoque",
    desc: "Creemos que el enfoque es espiritual. Lo que eliges ver primero cada mañana define quién eres.",
  },
  {
    icon: "🤝",
    title: "Accesibilidad",
    desc: "Ya seas nuevo en la fe o lleves años caminando con Dios, FocusGod es para ti.",
  },
  {
    icon: "🔬",
    title: "Tecnología con propósito",
    desc: "Usamos la tecnología para combatir la adicción tecnológica. No es una ironía — es una misión.",
  },
  {
    icon: "🔥",
    title: "Hábito real",
    desc: "No basta con querer orar. FocusGod crea el entorno donde el hábito se forma solo.",
  },
];

export default function About() {
  return (
    <>
      <Navbar />
      <main className="pt-14">

        {/* Hero */}
        <section className="bg-cream py-20 px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-blue font-semibold text-sm uppercase tracking-widest mb-4">Sobre FocusGod</p>
            <h1 className="text-4xl sm:text-5xl font-semibold text-ink leading-[1.1] mb-6">
              Ayudando a las personas a poner a Dios primero en la era digital.
            </h1>
            <p className="text-ink2 text-lg leading-relaxed">
              En FocusGod creemos que la sabiduría espiritual merece ser accesible, práctica y profundamente personal — no solo para unos pocos, sino para todos.
            </p>
          </div>
        </section>

        {/* Vision */}
        <section className="bg-bg py-20 px-6">
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-blue font-semibold text-sm uppercase tracking-widest mb-3">Nuestra visión</p>
              <h2 className="text-2xl font-semibold text-ink mb-4">Recuperar el tiempo que le robamos a Dios</h2>
              <p className="text-ink2 leading-relaxed">
                En generaciones anteriores, las distracciones eran pocas. Hoy, miles de ingenieros con doctorados en psicología trabajan para que no puedas dejar el teléfono. FocusGod existe para nivelar esa batalla — poniendo a Dios de nuevo en el primer lugar del día.
              </p>
            </div>
            <div>
              <p className="text-blue font-semibold text-sm uppercase tracking-widest mb-3">Nuestra misión</p>
              <h2 className="text-2xl font-semibold text-ink mb-4">Formar seguidores completamente devotos</h2>
              <p className="text-ink2 leading-relaxed">
                Nuestra misión es ayudar a las personas a convertirse en seguidores completamente devotos de Dios, transformando cómo empiezan cada día — creando un espacio donde la oración no es opcional, es el punto de partida.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-cream py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-blue font-semibold text-sm uppercase tracking-widest mb-2 text-center">Nuestros valores</p>
            <h2 className="text-3xl font-semibold text-ink text-center mb-12">Lo que nos guía</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((v, i) => (
                <div key={i} className="bg-white rounded-3xl p-6 border border-black/5">
                  <p className="text-4xl mb-3">{v.icon}</p>
                  <h3 className="text-lg font-semibold text-ink mb-2">{v.title}</h3>
                  <p className="text-sm text-ink2 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Commitment */}
        <section className="bg-bg py-20 px-6 text-center">
          <div className="max-w-xl mx-auto">
            <p className="text-blue font-semibold text-sm uppercase tracking-widest mb-4">Nuestro compromiso</p>
            <h2 className="text-3xl font-semibold text-ink mb-6">Contigo en cada paso</h2>
            <p className="text-ink2 text-lg leading-relaxed mb-8">
              Nos esforzamos por animarte y desafiarte en tu camino espiritual — no solo para orar más, sino para conocer a Dios más íntimamente, y vivir de una manera que refleje Su verdad.
            </p>
            <a href="/download" className="btn-blue">
              Empieza gratis hoy →
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
