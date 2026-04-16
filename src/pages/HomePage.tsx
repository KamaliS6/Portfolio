import { SEOHead } from "../components/ui/SEOHead";
import { HeroSection } from "../components/home/HeroSection";
import { ProjectGrid } from "../components/home/ProjectGrid";
import { SkillsGrid } from "../components/about/SkillsGrid";
import { CVSection } from "../components/about/CVSection";
import { TerminalWindow } from "../components/terminal/TerminalWindow";
import { TerminalNav } from "../components/layout/TerminalNav";

export function HomePage() {
  return (
    <>
      <SEOHead />
      <TerminalWindow
        title="Kamali's Portfolio"
        navbar={<TerminalNav />}
      >
        <HeroSection />
        <ProjectGrid />
        <SkillsGrid />
        <CVSection />
      </TerminalWindow>
    </>
  );
}
