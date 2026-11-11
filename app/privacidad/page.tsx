import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacidad — FocusGod",
  description: "Qué datos trata FocusGod y por qué. Sin cuentas: tus oraciones, tu lectura y tu racha nunca salen de tu iPhone.",
};

const EMAIL = "support@focusgodapp.com";

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: "1. Lo que nunca sale de tu iPhone",
    body: (
      <>
        <p><strong>Tus oraciones, tus lecturas de la Biblia, los versículos que guardas, tu racha y el progreso de tu vela se quedan en tu dispositivo.</strong> No se envían a ningún servidor, no se guardan en ninguna base de datos y nadie de FocusGod puede verlos.</p>
        <p>Lo decimos claro porque son datos sobre tus creencias religiosas, que la ley de protección de datos (RGPD, artículo 9) protege de forma especial. La app está diseñada a propósito para que nunca salgan de tu teléfono.</p>
        <p>También se quedan en tu iPhone:</p>
        <ul>
          <li><strong>Tu progreso:</strong> el nombre que escribes, tus respuestas del cuestionario inicial, tus planes y tus estadísticas.</li>
          <li><strong>Apps bloqueadas:</strong> FocusGod usa Tiempo de Uso de Apple (Family Controls). Apple nos entrega identificadores cifrados, así que no podemos saber qué apps o webs eliges ni cuánto las usas.</li>
          <li><strong>Cámara:</strong> se usa para comprobar que tienes los ojos cerrados mientras oras y para reconocer el texto de tu Biblia de papel. Las imágenes se analizan al momento en el dispositivo y no se graban, guardan ni envían.</li>
          <li><strong>Movimiento:</strong> los pasos de tu caminata se leen del iPhone y no se comparten.</li>
          <li><strong>Ubicación:</strong> solo la usa el bloqueo «Domingo en la iglesia». Se comprueba en ese momento si estás cerca de tu iglesia y se olvida: no se guarda dónde has estado ni se envía a nadie.</li>
          <li><strong>Notificaciones:</strong> los recordatorios se programan en el propio dispositivo.</li>
        </ul>
        <p>Si borras la app, estos datos se eliminan.</p>
      </>
    ),
  },
  {
    title: "2. Lo único que la app envía a nuestro servidor",
    body: <p>Si escribes un código de recomendación antes de suscribirte, la app pregunta a nuestro servidor si ese código existe. Se envía <strong>solo el código</strong>: ni quién lo escribe, ni su correo, ni ningún identificador.</p>,
  },
  {
    title: "3. Datos de compra",
    body: (
      <>
        <p>Cuando alguien compra una suscripción, <strong>RevenueCat</strong> (nuestro gestor de suscripciones) envía directamente a nuestro servidor los datos de esa compra. No los envía tu teléfono. Guardamos solo esto:</p>
        <ul>
          <li>El identificador que RevenueCat asigna al cliente.</li>
          <li>Qué se compró, cuándo, por cuánto y en qué moneda.</li>
          <li>Si la compra llegó recomendada por un afiliado, su código.</li>
        </ul>
        <p>Nada de esto incluye tu nombre, tu email, tus oraciones, tu lectura ni las apps que bloqueas.</p>
      </>
    ),
  },
  {
    title: "4. Nuestros proveedores",
    body: (
      <>
        <p>Estos proveedores tratan datos en nuestro nombre (encargados del tratamiento):</p>
        <ul>
          <li><strong>Supabase</strong> (servidor y base de datos): guarda los datos de compra del punto 3 y los de los afiliados del punto 5. Los datos están en un servidor de la Unión Europea, así que no salen de la UE. <a href="https://supabase.com/privacy">Política de Supabase</a>.</li>
          <li><strong>RevenueCat</strong> (gestión de suscripciones): recibe un identificador anónimo generado por la app, el historial de compras de FocusGod que facilita Apple y datos técnicos del dispositivo (modelo, versión de iOS, país de la tienda). Sirve para saber si tienes una suscripción activa. <a href="https://www.revenuecat.com/privacy">Política de RevenueCat</a>.</li>
          <li><strong>Superwall</strong> (pantallas de suscripción): recibe un identificador anónimo, datos técnicos del dispositivo e interacciones con la pantalla de suscripción. <a href="https://superwall.com/privacy">Política de Superwall</a>.</li>
        </ul>
        <p>No vendemos datos, no mostramos publicidad y no hacemos seguimiento entre apps de otras empresas. Los pagos los procesa Apple: nunca vemos los datos de tu tarjeta ni de tu cuenta de Apple.</p>
      </>
    ),
  },
  {
    title: "5. Programa de afiliados",
    body: <p>Si te das de alta como afiliado de FocusGod, guardamos tu <strong>nombre</strong>, tu <strong>correo</strong>, tu <strong>código</strong> y tu <strong>comisión</strong>, para poder pagarte. Esto solo afecta a quien se apunta al programa, no a los usuarios de la app.</p>,
  },
  {
    title: "6. Lista de espera de la web",
    body: (
      <>
        <p>Si te apuntas en <strong>focusgodapp.com/app</strong> para que te avisemos cuando salga la app, guardamos tu <strong>nombre</strong>, tu <strong>email</strong>, si usas <strong>iPhone o Android</strong>, la fecha y desde qué enlace llegaste.</p>
        <p>Solo lo usamos para avisarte del lanzamiento y contarte novedades de FocusGod. Se guarda en una hoja de cálculo de Google (Google Sheets) a la que solo accedemos nosotros, y podemos usar un servicio de envío de emails para escribirte. No lo vendemos ni lo compartimos con nadie más.</p>
        <p>Cada email que te enviemos incluye un enlace para darte de baja. También puedes pedirnos que borremos tus datos escribiéndonos.</p>
      </>
    ),
  },
  {
    title: "7. Base legal",
    body: <p>Tratamos los datos de compra y de suscripción porque son necesarios para darte el servicio que contratas (ejecución del contrato) y, para mejorar la pantalla de suscripción, por interés legítimo. Los datos de los afiliados, porque son necesarios para el acuerdo de afiliación y para pagar sus comisiones. Los datos de la lista de espera, porque nos das tu consentimiento al apuntarte, y puedes retirarlo cuando quieras.</p>,
  },
  {
    title: "8. Conservación",
    body: <p>Los datos de compra y de afiliados se conservan mientras sean necesarios para gestionar las suscripciones y las comisiones, y para cumplir nuestras obligaciones legales y contables. RevenueCat y Superwall conservan sus datos según sus propias políticas. Los datos del dispositivo se conservan hasta que borras la app. Los de la lista de espera, hasta que te des de baja o nos pidas borrarlos.</p>,
  },
  {
    title: "9. Tus derechos",
    body: <p>Como FocusGod no tiene cuentas ni inicio de sesión, para ejercer cualquier derecho (acceso, rectificación, supresión, oposición o portabilidad) escríbenos a <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. Te responderemos en un plazo máximo de un mes. También puedes reclamar ante la autoridad de protección de datos de tu país; en España, la Agencia Española de Protección de Datos (aepd.es).</p>,
  },
  {
    title: "10. Menores",
    body: <p>FocusGod no está dirigida a menores de 13 años y no recoge conscientemente datos de ellos.</p>,
  },
  {
    title: "11. Cambios",
    body: <p>Si cambiamos esta política, actualizaremos la fecha de arriba. Si el cambio es importante, te avisaremos en la app.</p>,
  },
  {
    title: "12. Contacto",
    body: <p>Joel Blanco Sierra · <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>,
  },
];

export default function Privacidad() {
  return (
    <>
      <Navbar />
      <main className="pt-14">

        <section className="bg-cream py-20 px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-blue font-bold text-base mb-4">Privacidad</p>
            <h1 className="text-4xl sm:text-5xl font-semibold text-ink leading-[1.1] mb-6">
              Lo tuyo se queda en tu iPhone.
            </h1>
            <p className="text-ink2 text-lg leading-relaxed">
              FocusGod no tiene cuentas. Tus oraciones, tu lectura y tu racha nunca salen de tu iPhone. Aquí te contamos qué datos trata la app y por qué.
            </p>
            <p className="text-ink3 text-sm mt-6">Última actualización: 6 de noviembre de 2026</p>
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
