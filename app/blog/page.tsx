import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — FocusGod | Tecnología, fe y salud digital",
  description: "Artículos sobre cómo las redes sociales, la pornografía y la tecnología afectan tu cerebro, tu fe y tu vida espiritual.",
};

const categories = ["Todo", "Redes Sociales", "Pornografía & Cerebro", "Salud Digital", "Fe & Tecnología"];

const posts = [
  {
    slug: "instagram-disenado-para-robarte-la-atencion",
    category: "Redes Sociales",
    date: "Oct 2, 2026",
    title: "Instagram fue diseñado para robarte la atención — y funciona",
    excerpt: "Los ingenieros de Meta no diseñaron una red social. Diseñaron una máquina de dopamina. Aquí está la ciencia detrás de cada función que te tiene pegado a la pantalla.",
  },
  {
    slug: "pornografia-cerebro-lo-que-la-ciencia-dice",
    category: "Pornografía & Cerebro",
    date: "Sep 28, 2026",
    title: "Lo que la pornografía le hace a tu cerebro: la neurociencia lo explica",
    excerpt: "La pornografía activa los mismos circuitos de recompensa que la cocaína. No es una metáfora — es neurología. Y las consecuencias espirituales van mucho más allá.",
  },
  {
    slug: "tiktok-scroll-infinito-dopamina",
    category: "Redes Sociales",
    date: "Sep 20, 2026",
    title: "TikTok y el scroll infinito: cómo destruyen tu capacidad de concentración",
    excerpt: "El scroll infinito fue inventado por un ingeniero que lo llama 'el mayor error de su vida'. Los estudios muestran que reduce la capacidad de atención a menos de 8 segundos.",
  },
  {
    slug: "movil-al-despertar-destruye-tu-dia",
    category: "Salud Digital",
    date: "Sep 15, 2026",
    title: "Por qué revisar el móvil al despertar destruye literalmente tu día",
    excerpt: "Los primeros 30 minutos del día determinan tu estado mental las siguientes horas. La ciencia del cortisol y la atención explica por qué Mateo 6:33 es también un consejo de neurología.",
  },
  {
    slug: "facebook-experimento-emocional",
    category: "Redes Sociales",
    date: "Sep 8, 2026",
    title: "Facebook manipuló las emociones de 700.000 usuarios sin decirles nada",
    excerpt: "En 2014, Facebook publicó un estudio confesando que había manipulado los feeds de casi un millón de personas para alterar su estado de ánimo. Aquí está lo que eso revela sobre las redes.",
  },
  {
    slug: "notificaciones-trampa-dopamina",
    category: "Salud Digital",
    date: "Sep 1, 2026",
    title: "La trampa de las notificaciones: por qué no puedes ignorarlas",
    excerpt: "Cada notificación activa una pequeña descarga de dopamina — suficiente para interrumpir cualquier tarea. Y están diseñadas exactamente para eso.",
  },
  {
    slug: "pantalla-antes-de-dormir-fe",
    category: "Fe & Tecnología",
    date: "Ago 25, 2026",
    title: "Pantalla antes de dormir: el enemigo silencioso de tu descanso y tu fe",
    excerpt: "La luz azul suprime la melatonina. Pero el daño espiritual es igual de real — llenar tu mente de contenido mundano justo antes de dormir aleja la voz de Dios.",
  },
  {
    slug: "adiccion-redes-sociales-fe-cristiana",
    category: "Fe & Tecnología",
    date: "Ago 18, 2026",
    title: "Adicción a las redes sociales: lo que la fe cristiana sabe que la ciencia acaba de descubrir",
    excerpt: "La Biblia lleva siglos hablando de idolatría. Hoy los psicólogos lo llaman 'uso compulsivo de tecnología'. El diagnóstico es el mismo; solo cambió el ídolo.",
  },
];

export default function Blog() {
  return (
    <>
      <Navbar />
      <main className="pt-14">

        {/* Header */}
        <section className="bg-cream py-16 px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-blue font-semibold text-sm uppercase tracking-widest mb-4">El Blog de FocusGod</p>
            <h1 className="text-4xl sm:text-5xl font-semibold text-ink leading-[1.1] mb-4">
              Tecnología, fe y salud digital.
            </h1>
            <p className="text-ink2 text-lg">
              Lo que las redes sociales, la pornografía y la tecnología le hacen a tu cerebro — y cómo recuperar el control.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="bg-bg border-b border-black/5 px-6 py-4">
          <div className="max-w-4xl mx-auto flex gap-3 overflow-x-auto pb-1">
            {categories.map((c, i) => (
              <button
                key={i}
                className={`whitespace-nowrap text-sm font-semibold px-4 py-2 rounded-full transition-colors ${
                  i === 0 ? "bg-blue text-white" : "bg-cream text-ink2 hover:text-ink"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </section>

        {/* Posts grid */}
        <section className="bg-bg py-16 px-6">
          <div className="max-w-4xl mx-auto">

            {/* Featured post */}
            <div className="bg-cream rounded-3xl p-8 mb-8 border border-black/5">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-blue text-white text-xs font-bold px-3 py-1 rounded-full">
                  {posts[0].category}
                </span>
                <span className="text-ink3 text-xs">{posts[0].date}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-ink mb-3 leading-snug">
                {posts[0].title}
              </h2>
              <p className="text-ink2 leading-relaxed mb-6">{posts[0].excerpt}</p>
              <Link
                href={`/blog/${posts[0].slug}`}
                className="btn-blue inline-block"
              >
                Leer artículo →
              </Link>
            </div>

            {/* Rest of posts */}
            <div className="grid sm:grid-cols-2 gap-6">
              {posts.slice(1).map((p, i) => (
                <Link
                  key={i}
                  href={`/blog/${p.slug}`}
                  className="bg-white rounded-3xl p-6 border border-black/5 hover:border-blue/30 transition-colors group"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-blue text-xs font-bold">{p.category}</span>
                    <span className="text-ink3 text-xs">· {p.date}</span>
                  </div>
                  <h3 className="font-semibold text-ink leading-snug mb-2 group-hover:text-blue transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-ink2 leading-relaxed line-clamp-3">{p.excerpt}</p>
                </Link>
              ))}
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="bg-cream py-16 px-6 text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl font-semibold text-ink mb-3">¿Listo para tomar el control?</h2>
            <p className="text-ink2 mb-6">Descarga FocusGod y pon a Dios primero cada mañana.</p>
            <a href="/download" className="btn-blue">
              🍎 Descargar gratis →
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
