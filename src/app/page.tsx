import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Mission from "@/components/Mission";
import Sourcing from "@/components/Sourcing";
import HowItWorks from "@/components/HowItWorks";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Mission />
        <Sourcing />
        <HowItWorks />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
