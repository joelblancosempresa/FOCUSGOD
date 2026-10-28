import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DesktopCTA from "@/components/DesktopCTA";
import VerseOfDay from "@/components/VerseOfDay";
import HowItWorks from "@/components/HowItWorks";
import FocoSection from "@/components/FocoSection";
import AsSeenIn from "@/components/AsSeenIn";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const title = "FocusGod — Crece cada día en tu relación con Dios";
const description =
  "FocusGod te ayuda a orar y leer la Biblia cada día. Bloquea Instagram, TikTok y YouTube hasta que pasas tiempo con Dios, para que tu relación con Él crezca de verdad.";

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
      <HowItWorks />
      <FocoSection />
      <AsSeenIn />
      <Reviews />
      <FAQ />
      <div className="md:hidden"><FinalCTA /></div>
      <DesktopCTA />
      <Footer />
    </main>
  );
}
