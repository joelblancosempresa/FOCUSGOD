import Showcase from "@/components/Showcase";

export default function HowItWorks() {
  return (
    <Showcase
      items={[
        {
          title: "Ora de verdad",
          line: "Cierra los ojos y habla con Él. Tus apps se abren después.",
          src: "/app/orar.jpg",
          alt: "Pantalla de oración de FocusGod: Cierra los ojos y ora con Dios",
        },
        {
          title: "Su Palabra, cada día",
          line: "La Biblia completa en tu iPhone, también sin internet.",
          src: "/app/lectura.jpg",
          alt: "Lectura de Génesis 1 en FocusGod",
        },
        {
          title: "Mira crecer tu fe",
          line: "Tu vela se enciende cada día que buscas a Dios.",
          src: "/app/inicio.jpg",
          alt: "Inicio de FocusGod con la vela Foco en Dios",
        },
      ]}
    />
  );
}
