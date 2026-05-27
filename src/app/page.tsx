import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { SectionPreview } from "@/components/layout/SectionPreview";
import { Hero } from "@/components/sections/Hero";
import { Projetos } from "@/components/sections/Projetos";
import { Escritorio } from "@/components/sections/Escritorio";
import { Sobre } from "@/components/sections/Sobre";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navigation />
      <SectionPreview />
      <main>
        <Hero />
        <Projetos />
        <Escritorio />
        <Sobre />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
