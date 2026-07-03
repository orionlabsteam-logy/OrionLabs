import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Domains } from "@/components/sections/Domains";
import { Programs } from "@/components/sections/Programs";
import { Process } from "@/components/sections/Process";
import { WhyOrionLabs } from "@/components/sections/WhyOrionLabs";
import { About } from "@/components/sections/About";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <Hero />
        <Stats />
        <Domains />
        <Programs />
        <Process />
        <WhyOrionLabs />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
