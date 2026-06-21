import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { StarField } from "./components/star-field";
import { ScrollProgress } from "./components/scroll-progress";
import { MobileTabBar } from "./components/mobile-tab-bar";
import { Hero } from "./sections/hero";
import { About } from "./sections/about";
import { Skills } from "./sections/skills";
import { ProfessionalWork } from "./sections/professional-work";
import { PersonalProjects } from "./sections/personal-projects";
import { Playground } from "./sections/playground";
import { Contact } from "./sections/contact";

export default function Home() {
  return (
    <>
      <StarField />
      <ScrollProgress />
      <Header />
      <main className="relative z-10 flex flex-1 flex-col pb-24 md:pb-0">
        <Hero />
        <About />
        <Skills />
        <ProfessionalWork />
        <PersonalProjects />
        <Playground />
        <Contact />
      </main>
      <Footer />
      <MobileTabBar />
    </>
  );
}
