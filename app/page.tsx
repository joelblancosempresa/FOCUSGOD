import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VerseOfDay from "@/components/VerseOfDay";
import HowItWorks from "@/components/HowItWorks";
import FocoSection from "@/components/FocoSection";
import AsSeenIn from "@/components/AsSeenIn";
import Reviews from "@/components/Reviews";
import Stats from "@/components/Stats";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

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
      <FinalCTA />
      <Footer />
    </main>
  );
}
