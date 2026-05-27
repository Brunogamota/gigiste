import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Works } from "@/components/sections/Works";
import { Studio } from "@/components/sections/Studio";
import { Process } from "@/components/sections/Process";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Works />
        <Studio />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
