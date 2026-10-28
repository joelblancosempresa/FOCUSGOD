import Showcase from "@/components/Showcase";

export default function HowItWorks() {
  return (
    <Showcase
      variant="ilus"
      items={[
        {
          title: "Ora de verdad",
          line: "Cierra los ojos y habla con Él. Tus apps se abren después.",
          src: "/ilus/ilus-orar.png",
          alt: "Un chico orando con los ojos cerrados delante del móvil",
        },
        {
          title: "Su Palabra, cada día",
          line: "En la app o en tu Biblia de papel: escaneas la página y cuenta.",
          src: "/ilus/ilus-escaner.png",
          alt: "Un móvil escaneando una Biblia de papel abierta",
        },
        {
          title: "Camina con Él",
          line: "Sal a andar y habla con Dios. Al volver, tus apps se abren.",
          src: "/ilus/onb-bloqueo-caminata.jpg",
          alt: "Un chico caminando por un sendero entre colinas verdes",
        },
      ]}
    />
  );
}
