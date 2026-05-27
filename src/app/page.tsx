import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Works } from "@/components/sections/Works";
import { Featured } from "@/components/sections/Featured";
import { About } from "@/components/sections/About";
import { Process } from "@/components/sections/Process";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Works />
        <Featured />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
