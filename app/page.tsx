import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DesktopCTA from "@/components/DesktopCTA";
import VerseOfDay from "@/components/VerseOfDay";
import HowItWorks from "@/components/HowItWorks";
import FocoSection from "@/components/FocoSection";
import AsSeenIn from "@/components/AsSeenIn";
import Reviews from "@/components/Reviews";
import Stats from "@/components/Stats";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const title = "FocusGod — El bloqueador de apps cristiano";
const description =
  "FocusGod bloquea Instagram, TikTok y YouTube hasta que pasas tiempo con Dios. Ora, lee la Biblia y desconecta cuando lo necesites.";

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
      <Stats />
      <div className="md:hidden"><FinalCTA /></div>
      <DesktopCTA />
      <Footer />
    </main>
  );
}
