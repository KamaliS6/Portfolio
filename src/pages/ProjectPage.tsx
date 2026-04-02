import { useParams, Navigate } from "react-router";
import { projects } from "../data/projects";
import { SEOHead } from "../components/ui/SEOHead";
import { ProjectHero } from "../components/project/ProjectHero";
import { ProjectBrief } from "../components/project/ProjectBrief";
import { ProcessTimeline } from "../components/project/ProcessTimeline";
import { ProjectNav } from "../components/project/ProjectNav";
import { TerminalWindow } from "../components/terminal/TerminalWindow";
import { TerminalNav } from "../components/layout/TerminalNav";
import { siteConfig } from "../data/site-config";

export function ProjectPage() {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);

  if (index === -1) {
    return <Navigate to="/404" replace />;
  }

  const project = projects[index];
  const prev = index > 0 ? projects[index - 1] : undefined;
  const next = index < projects.length - 1 ? projects[index + 1] : undefined;

  return (
    <>
      <SEOHead
        title={project.title}
        description={project.tagline}
      />
      <TerminalWindow
        title={`${siteConfig.name.toLowerCase()} — ${project.slug}`}
        navbar={<TerminalNav />}
      >
        <ProjectHero project={project} />
        <ProjectBrief project={project} />
        <ProcessTimeline steps={project.process} />
        <ProjectNav prev={prev} next={next} />
      </TerminalWindow>
    </>
  );
}
