import type { Project } from "../../types";

export function ProjectHero({ project }: { project: Project }) {
  return (
    <div className="relative w-full overflow-hidden rounded-lg border border-terminal-muted">
      {project.hero.type === "video" ? (
        <video
          src={project.hero.src}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-contain"
        />
      ) : (
        <img
          src={project.hero.src}
          alt={project.title}
          className="w-full block"
        />
      )}
    </div>
  );
}
