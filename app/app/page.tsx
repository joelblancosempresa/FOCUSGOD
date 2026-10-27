import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "Apúntate a FocusGod — Te avisamos el día que salga",
  description: "FocusGod llega muy pronto al App Store. Apúntate y te avisamos el día del lanzamiento.",
};

export default function AppWaitlist() {
  return (
    <>
      <Navbar />
      <main style={{ background: "linear-gradient(180deg, #FEF3C7 0%, #FDFCF8 70%)" }} className="px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-[440px] mx-auto text-center">
          <Image
            src="/app-icon-vela.png"
            alt="Icono de FocusGod: una vela con un halo"
            width={88}
            height={88}
            style={{ borderRadius: "22px", boxShadow: "0 12px 26px rgba(32,36,46,0.22)", margin: "0 auto" }}
            priority
          />
          <h1 className="text-[32px] md:text-[42px]" style={{ fontWeight: 700, color: "#333333", lineHeight: 1.15, letterSpacing: "-0.6px", margin: "24px 0 0" }}>
            FocusGod llega muy pronto
          </h1>
          <p className="text-[16px] md:text-[18px]" style={{ color: "#7a7872", lineHeight: 1.55, margin: "14px 0 28px" }}>
            Apúntate y te avisamos el día que salga en el App Store. Sin spam: solo lo importante.
          </p>
          <WaitlistForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
