import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Domains from "@/components/Domains";
import Process from "@/components/Process";
import WhyChooseUs from "@/components/WhyChooseUs";
import About from "@/components/About";
import Certificate from "@/components/Certificate";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <Domains />
        <Process />
        <WhyChooseUs />
        <About />
        <Certificate />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
