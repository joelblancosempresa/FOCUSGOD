import { CTA_HREF, CTA_PROPS, CTA_LABEL } from "@/lib/cta";

// La ilustración del mar de fondo y el texto y el botón encima, abajo.
export default function FocoSection() {
  return (
    <section className="relative overflow-hidden flex flex-col items-center justify-end text-center px-6 pb-12 md:pb-16 h-[560px] md:h-[640px]" style={{ background: "#0c1a6b" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/ilus/foco-fondo.jpg"
        alt="Una persona sentada junto al mar mirando la luz que baja del cielo"
        className="absolute inset-0 w-full h-full object-cover object-[42%_center]"
      />
      {/* Oscurece un poco la parte de abajo para que el texto se lea bien */}
      <div aria-hidden="true" className="absolute inset-0" style={{ background: "linear-gradient(0deg, rgba(4,20,30,0.7) 0%, rgba(4,20,30,0.35) 35%, transparent 60%)" }} />
      <div className="relative z-10 w-full max-w-[440px] md:max-w-[640px] flex flex-col items-center">
        <h2 className="fg-h2 md:text-[40px]" style={{ fontWeight: 700, color: "#fff", lineHeight: 1.2, letterSpacing: "-0.4px", margin: "0 0 24px" }}>
          Antes que el scroll, Dios.
        </h2>
        <a
          href={CTA_HREF}
          {...CTA_PROPS}
          className="w-full md:w-[280px]"
          style={{ display: "block", background: "#f0492e", color: "#fff", fontWeight: 700, fontSize: "16px", padding: "18px", borderRadius: "14px", textDecoration: "none", boxShadow: "0 4px 0 0 #bf321c" }}
        >
          {CTA_LABEL}
        </a>
      </div>
    </section>
  );
}
