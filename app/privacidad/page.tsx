import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacidad — FocusGod",
  description: "Qué datos trata FocusGod y por qué. Sin cuentas, sin servidores propios: lo tuyo se queda en tu iPhone.",
};

const EMAIL = "joelblancosempresa@gmail.com";

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: "1. Datos que se quedan en tu iPhone",
    body: (
      <>
        <p>Estos datos se guardan solo en tu dispositivo. Nunca se envían a nosotros ni a terceros:</p>
        <ul>
          <li><strong>Tu progreso:</strong> el nombre que escribes, tus respuestas del cuestionario inicial, oraciones completadas, lectura de la Biblia, favoritos, planes, racha y estadísticas.</li>
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
    title: "2. Datos que tratan nuestros proveedores",
    body: (
      <>
        <p>Para gestionar las suscripciones usamos dos proveedores:</p>
        <ul>
          <li><strong>RevenueCat</strong> (gestión de suscripciones): recibe un identificador anónimo generado por la app, el historial de compras de FocusGod que facilita Apple y datos técnicos del dispositivo (modelo, versión de iOS, país de la tienda). Sirve para saber si tienes una suscripción activa. <a href="https://www.revenuecat.com/privacy">Política de RevenueCat</a>.</li>
          <li><strong>Superwall</strong> (pantallas de suscripción): recibe un identificador anónimo, datos técnicos del dispositivo e interacciones con la pantalla de suscripción. <a href="https://superwall.com/privacy">Política de Superwall</a>.</li>
        </ul>
        <p>Ninguno de estos datos incluye tu nombre, tu email, tus oraciones, tu lectura ni las apps que bloqueas. No vendemos datos, no mostramos publicidad y no hacemos seguimiento entre apps de otras empresas.</p>
        <p>Los pagos los procesa Apple. Nunca vemos los datos de tu tarjeta ni de tu cuenta de Apple.</p>
      </>
    ),
  },
  {
    title: "3. Lista de espera de la web",
    body: (
      <>
        <p>Si te apuntas en <strong>focusgodapp.com/app</strong> para que te avisemos cuando salga la app, guardamos tu <strong>nombre</strong>, tu <strong>email</strong>, si usas <strong>iPhone o Android</strong>, la fecha y desde qué enlace llegaste.</p>
        <p>Solo lo usamos para avisarte del lanzamiento y contarte novedades de FocusGod. Se guarda en una hoja de cálculo de Google (Google Sheets) a la que solo accedemos nosotros, y podemos usar un servicio de envío de emails para escribirte. No lo vendemos ni lo compartimos con nadie más.</p>
        <p>Cada email que te enviemos incluye un enlace para darte de baja. También puedes pedirnos que borremos tus datos escribiéndonos.</p>
      </>
    ),
  },
  {
    title: "4. Base legal",
    body: <p>Tratamos los datos de suscripción porque son necesarios para darte el servicio que contratas (ejecución del contrato) y, para mejorar la pantalla de suscripción, por interés legítimo. Los datos de la lista de espera los tratamos porque nos das tu consentimiento al apuntarte, y puedes retirarlo cuando quieras.</p>,
  },
  {
    title: "5. Conservación",
    body: <p>RevenueCat y Superwall conservan sus datos mientras sean necesarios para gestionar tu suscripción o según sus propias políticas. Los datos del dispositivo se conservan hasta que borras la app. Los de la lista de espera, hasta que te des de baja o nos pidas borrarlos.</p>,
  },
  {
    title: "6. Tus derechos",
    body: <p>Puedes pedir acceso, rectificación o eliminación de los datos que tengan nuestros proveedores, u oponerte a su tratamiento, escribiéndonos a <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. También puedes reclamar ante la autoridad de protección de datos de tu país; en España, la Agencia Española de Protección de Datos (aepd.es).</p>,
  },
  {
    title: "7. Menores",
    body: <p>FocusGod no está dirigida a menores de 13 años y no recoge conscientemente datos de ellos.</p>,
  },
  {
    title: "8. Cambios",
    body: <p>Si cambiamos esta política, actualizaremos la fecha de arriba. Si el cambio es importante, te avisaremos en la app.</p>,
  },
  {
    title: "9. Contacto",
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
              FocusGod no tiene cuentas ni servidores propios. Aquí te contamos qué datos trata la app y por qué.
            </p>
            <p className="text-ink3 text-sm mt-6">Última actualización: 27 de octubre de 2026</p>
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
