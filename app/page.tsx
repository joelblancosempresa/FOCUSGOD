import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import FocoSection from "@/components/FocoSection";
import Reviews from "@/components/Reviews";
import Stats from "@/components/Stats";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <HowItWorks />
      <FocoSection />
      <Reviews />
      <Stats />
      <FinalCTA />
      <Footer />
    </main>
  );
}
