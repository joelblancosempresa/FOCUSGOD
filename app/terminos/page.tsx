import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos de uso — FocusGod",
  description: "Las condiciones para usar FocusGod: suscripción, prueba gratuita, cancelación y responsabilidades.",
};

const EMAIL = "joelblancosempresa@gmail.com";

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: "1. Quiénes somos",
    body: <p>FocusGod es una app para iPhone desarrollada por Joel Blanco Sierra (en adelante, &ldquo;nosotros&rdquo;). Al descargar o usar la app o esta web aceptas estos términos. Si no estás de acuerdo, no la uses.</p>,
  },
  {
    title: "2. Qué hace FocusGod",
    body: (
      <>
        <p>FocusGod te ayuda a poner a Dios primero bloqueando las apps que eliges hasta que completas un momento de oración, lectura de la Biblia u otra actividad dentro de la app.</p>
        <p>El bloqueo funciona con Tiempo de Uso de Apple (Family Controls). Por eso depende de que des los permisos necesarios y de que Apple mantenga ese sistema activo. Tú puedes quitar esos permisos o desactivar el bloqueo en cualquier momento desde los Ajustes del iPhone.</p>
      </>
    ),
  },
  {
    title: "3. Suscripción y prueba gratuita",
    body: (
      <>
        <ul>
          <li>Algunas funciones requieren una suscripción de pago. El precio y la duración se muestran en la app antes de comprar.</li>
          <li>Si se ofrece una prueba gratuita, al terminar se cobra automáticamente la suscripción salvo que la canceles al menos 24 horas antes de que acabe.</li>
          <li>La suscripción se renueva sola al final de cada periodo, salvo que la canceles al menos 24 horas antes de la renovación.</li>
          <li>El pago lo cobra Apple en tu cuenta de Apple. Puedes gestionar o cancelar la suscripción en Ajustes &gt; tu nombre &gt; Suscripciones.</li>
          <li>Los reembolsos los gestiona Apple según sus propias condiciones. Puedes pedirlos en <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>.</li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Uso correcto",
    body: <p>Te comprometes a usar FocusGod solo para fines personales y legales, y a no copiar, modificar, descompilar ni intentar saltarte las protecciones de la app.</p>,
  },
  {
    title: "5. Contenido",
    body: <p>Los textos, diseños, ilustraciones y el código de FocusGod nos pertenecen o tenemos permiso para usarlos. Los textos bíblicos pertenecen a sus respectivos titulares y se usan según sus licencias.</p>,
  },
  {
    title: "6. Sin garantías",
    body: <p>Hacemos todo lo posible para que FocusGod funcione bien, pero la app se ofrece &ldquo;tal cual&rdquo;. No garantizamos que funcione sin interrupciones ni errores. FocusGod es una herramienta de apoyo: no sustituye el consejo médico, psicológico ni pastoral.</p>,
  },
  {
    title: "7. Responsabilidad",
    body: <p>En la medida en que lo permita la ley, no somos responsables de daños indirectos derivados del uso de la app, como el tiempo en que una app permanezca bloqueada. Nada de esto limita los derechos que te reconoce la ley como consumidor.</p>,
  },
  {
    title: "8. Condiciones de Apple",
    body: <p>Además de estos términos, se aplica el <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">Acuerdo de licencia estándar de Apple (EULA)</a>. Apple no es responsable de la app ni de su soporte.</p>,
  },
  {
    title: "9. Privacidad",
    body: <p>Cómo tratamos tus datos está explicado en nuestra <a href="/privacidad">política de privacidad</a>.</p>,
  },
  {
    title: "10. Cambios",
    body: <p>Podemos actualizar estos términos. Cambiaremos la fecha de arriba y, si el cambio es importante, te avisaremos en la app.</p>,
  },
  {
    title: "11. Ley aplicable",
    body: <p>Estos términos se rigen por la ley española. Si eres consumidor, también te protegen las leyes de tu país de residencia.</p>,
  },
  {
    title: "12. Contacto",
    body: <p>Joel Blanco Sierra · <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>,
  },
];

export default function Terminos() {
  return (
    <>
      <Navbar />
      <main className="pt-14">

        <section className="bg-cream py-20 px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-blue font-bold text-base mb-4">Términos de uso</p>
            <h1 className="text-4xl sm:text-5xl font-semibold text-ink leading-[1.1] mb-6">
              Las reglas, claras y cortas.
            </h1>
            <p className="text-ink2 text-lg leading-relaxed">
              Lo que aceptas al usar FocusGod: cómo funciona la suscripción, cómo cancelarla y qué puedes esperar de la app.
            </p>
            <p className="text-ink3 text-sm mt-6">Última actualización: 15 de octubre de 2026</p>
          </div>
        </section>

        <section className="bg-bg py-16 px-6">
          <div className="max-w-2xl mx-auto flex flex-col gap-6">
            {sections.map((s) => (
              <div
                key={s.title}
                className="card p-6 sm:p-8 text-ink2 leading-relaxed [&_p]:mb-3 [&_p:last-child]:mb-0 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-3 [&_li]:mb-2 [&_strong]:text-ink [&_a]:text-blue [&_a]:underline"
              >
                <h2 className="text-xl font-semibold text-ink mb-4">{s.title}</h2>
                {s.body}
              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
