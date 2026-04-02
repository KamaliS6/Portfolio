import { Link } from "react-router";
import type { Project } from "../../types";

interface ProjectNavProps {
  prev: Project | undefined;
  next: Project | undefined;
}

export function ProjectNav({ prev, next }: ProjectNavProps) {
  return (
    <nav className="mt-16 flex justify-between border-t border-terminal-muted pt-6 text-sm">
      {prev ? (
        <Link
          to={`/project/${prev.slug}`}
          className="text-terminal-text hover:text-terminal-green transition-colors"
        >
          <span className="text-terminal-muted">&lt;-</span> {prev.title}
        </Link>
      ) : (
        <span />
      )}

      {next ? (
        <Link
          to={`/project/${next.slug}`}
          className="text-terminal-text hover:text-terminal-green transition-colors"
        >
          {next.title} <span className="text-terminal-muted">-&gt;</span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
