import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Showcase from "@/components/Showcase";
import BlockGallery from "@/components/BlockGallery";
import Achievements from "@/components/Achievements";
import Widgets from "@/components/Widgets";
import { CTA_HREF, CTA_PROPS, CTA_NOTE } from "@/lib/cta";

export const metadata: Metadata = {
  title: "La app FocusGod — Pon a Dios primero cada día",
  description:
    "Ora con los ojos cerrados, lee la Biblia cada día y mira crecer tu fe. FocusGod llega muy pronto al App Store: apúntate y te avisamos.",
};

function AppStoreBadge() {
  return (
    <a
      href={CTA_HREF}
      {...CTA_PROPS}
      style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#111", color: "#fff", borderRadius: "14px", padding: "12px 22px", textDecoration: "none", boxShadow: "0 4px 0 0 #bf321c" }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden="true">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
      </svg>
      <span style={{ textAlign: "left" }}>
        <span style={{ display: "block", fontSize: "10px", opacity: 0.75, lineHeight: 1 }}>Muy pronto en el</span>
        <span style={{ display: "block", fontSize: "17px", fontWeight: 700, lineHeight: 1.2 }}>App Store</span>
      </span>
    </a>
  );
}

export default function Download() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{ background: "linear-gradient(180deg, #FEF3C7 0%, #FDFCF8 100%)" }} className="px-6 pt-32 pb-16 md:pt-40 md:pb-24 text-center">
          <div className="max-w-[460px] md:max-w-[720px] mx-auto">
            <h1 className="fg-h1 md:text-[48px]" style={{ fontWeight: 700, color: "#333333", lineHeight: 1.15, letterSpacing: "-0.6px", margin: 0, textWrap: "balance" }}>
              La forma más sencilla de poner a Dios primero
            </h1>
            <p className="fg-lead md:text-[19px]" style={{ color: "#7a7872", lineHeight: 1.55, margin: "16px auto 28px", maxWidth: "520px" }}>
              FocusGod te ayuda a orar y leer la Biblia cada día, y aparta lo que te distrae hasta que lo haces.
            </p>
            <AppStoreBadge />
            <p style={{ fontSize: "13px", color: "#9a978f", margin: "14px 0 0" }}>{CTA_NOTE}</p>
            <div className="flex justify-center mt-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/app-icon-vela.png" alt="Icono de FocusGod: una vela con un halo" className="w-[112px] md:w-[136px]" style={{ height: "auto", borderRadius: "28px", boxShadow: "0 14px 30px rgba(32,36,46,0.22)" }} />
            </div>
          </div>
        </section>

        <Showcase
          items={[
            {
              title: "Ora con los ojos cerrados",
              line: "El reloj solo avanza mientras hablas con Él.",
              src: "/app/orar-v4.jpg",
              alt: "Pantalla de oración: Cierra los ojos y ora con Dios",
            },
            {
              title: "¿Cómo llega tu corazón hoy?",
              line: "Le cuentas cómo estás y recibes un versículo para ese momento.",
              src: "/app/corazon-v4.jpg",
              alt: "Pantalla ¿Cómo llega tu corazón hoy? con estados de ánimo",
            },
            {
              title: "Tu vela, tu constancia",
              line: "Se enciende cada día que buscas a Dios. Y se apaga si lo dejas.",
              src: "/app/inicio-v4.jpg",
              alt: "Inicio de FocusGod con la vela Foco en Dios",
            },
            {
              title: "La Biblia, también la de papel",
              line: "Lee en la app o en tu Biblia de papel: escaneas la página y cuenta.",
              src: "/app/lectura.jpg",
              alt: "Lectura de Génesis 1 en FocusGod",
            },
          ]}
        />

        <Widgets />
        <BlockGallery />
        <Achievements />

        {/* Final */}
        <section style={{ background: "#FEF3C7" }} className="px-6 py-16 md:py-20 text-center">
          <h2 className="fg-h2 md:text-[40px]" style={{ fontWeight: 700, color: "#333333", lineHeight: 1.15, letterSpacing: "-0.4px", margin: "0 0 24px" }}>
            Sé de los primeros en tenerla
          </h2>
          <AppStoreBadge />
          <p style={{ fontSize: "13px", color: "#9a978f", margin: "14px 0 0" }}>{CTA_NOTE}</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
