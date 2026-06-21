import { StarField } from "@/components/shared/StarField";
import { Navigation } from "@/components/shared/Navigation";
import { Footer } from "@/components/shared/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Work } from "@/components/sections/Work";
import { Projects } from "@/components/sections/Projects";
import { Playground } from "@/components/sections/Playground";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <StarField />
      <Navigation />
      <main className="relative z-10 flex-1">
        <Hero />
        <About />
        <Skills />
        <Work />
        <Projects />
        <Playground />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
