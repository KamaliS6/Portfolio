import type { Project } from "../../types";

export function ProjectBrief({ project }: { project: Project }) {
  return (
    <section className="mt-8 space-y-6">
      <div>
        <h1 className="flex items-center gap-3 text-xl font-bold text-terminal-bright">
          {project.icon && (
            <img src={project.icon} alt="" className="h-7 w-7 object-contain" />
          )}
          {project.title}
          {project.links && project.links.length > 0 &&
            project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-normal text-terminal-green hover:text-terminal-bright transition-colors"
              >
                [{link.label}]
              </a>
            ))}
        </h1>
        <p className="mt-1 text-sm text-terminal-green">{project.tagline}</p>
      </div>

      {/* Overview */}
      <p className="text-sm leading-relaxed text-terminal-text">
        {project.brief.overview}
      </p>

      {/* Metrics bar */}
      {project.metrics && project.metrics.length > 0 && (
        <div className="flex flex-wrap gap-x-6 gap-y-3 border-l-2 border-terminal-green pl-4 py-2">
          {project.metrics.map((m) => (
            <div key={m.label} className="text-xs">
              <span className="font-bold text-terminal-bright">{m.value}</span>
              {m.label && <span className="text-terminal-muted ml-1.5">{m.label}</span>}
            </div>
          ))}
        </div>
      )}

      {/* Tools */}
      <div className="flex flex-wrap gap-2">
        {project.tools.map((tool) => (
          <span
            key={tool}
            className="rounded border border-terminal-muted px-2 py-0.5 text-[10px] text-terminal-muted"
          >
            {tool}
          </span>
        ))}
      </div>
    </section>
  );
}
