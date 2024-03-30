import Achivement from "@/components/sections/Achivement";
import Clients from "@/components/sections/Clients";
import FAQ from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Achivement />
      <Projects />
      <Services />
      <FAQ />
      <Clients />
    </main>
  );
}
