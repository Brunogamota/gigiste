import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Projects } from "@/components/sections/Projects";
import { Philosophy } from "@/components/sections/Philosophy";
import { Process } from "@/components/sections/Process";
import { Studio } from "@/components/sections/Studio";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Marquee } from "@/components/sections/Marquee";

export default function Home() {
  return (
    <main className="relative bg-[#0A0A0A]">
      <Navigation />
      <Hero />
      <Marquee />
      <Manifesto />
      <Projects />
      <Philosophy />
      <Process />
      <Studio />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
