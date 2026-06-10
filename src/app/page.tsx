import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Services from "./components/Services";
import Project from "./components/Project";
import TechStack from "./components/TechStack";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import ScrollProgress from "./components/ui/ScrollProgress";

export default function Home() {
  return (
    <main className="bg-space">
      <ScrollProgress />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Project />
      <TechStack />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}
