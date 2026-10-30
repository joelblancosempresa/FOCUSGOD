import type { Metadata, Viewport } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VerseOfDay from "@/components/VerseOfDay";
import FocoSection from "@/components/FocoSection";
import AsSeenIn from "@/components/AsSeenIn";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import HowItWorksSteps from "@/components/HowItWorksSteps";
import BlockGallery from "@/components/BlockGallery";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const title = "FocusGod — Crece cada día en tu relación con Dios";
const description =
  "FocusGod te ayuda a orar y leer la Biblia cada día. Bloquea Instagram, TikTok y YouTube hasta que pasas tiempo con Dios, para que tu relación con Él crezca de verdad.";

// El cielo de la portada llega hasta arriba del todo, por detrás de la barra de Safari
// (viewport-fit=cover), y no queda una franja de otro color.
export const viewport: Viewport = { themeColor: "#a3d4f0", viewportFit: "cover" };

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: "website", url: "https://focusgodapp.com" },
  twitter: { card: "summary_large_image", title, description },
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <VerseOfDay />
      <HowItWorksSteps />
      <BlockGallery />
      <FocoSection />
      <AsSeenIn />
      <Reviews />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
