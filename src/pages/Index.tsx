import { Sidebar } from "@/components/layout/Sidebar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Problem } from "@/components/sections/Problem";
import { Capability } from "@/components/sections/Capability";
import { Services } from "@/components/sections/Services";
import { Market } from "@/components/sections/Market";
import { Government } from "@/components/sections/Government";
import { Competitive } from "@/components/sections/Competitive";
import { Pipeline } from "@/components/sections/Pipeline";
import { Roadmap } from "@/components/sections/Roadmap";
import { Capital } from "@/components/sections/Capital";
import { Team } from "@/components/sections/Team";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  return (
    <>
      <Sidebar />
      <main className="lg:ml-60">
        <Hero />
        <About />
        <Problem />
        <Capability />
        <Services />
        <Market />
        <Government />
        <Competitive />
        <Pipeline />
        <Roadmap />
        <Capital />
        <Team />
        <Contact />
      </main>
    </>
  );
};

export default Index;
