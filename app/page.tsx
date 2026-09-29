import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Reviews from "@/components/Reviews";
import Stats from "@/components/Stats";
import FocoSection from "@/components/FocoSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Stats />
        <Reviews />
        <FocoSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
