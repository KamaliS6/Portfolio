import { Link } from "react-router";
import { motion } from "motion/react";
import { projects } from "../../data/projects";

const featured = projects
  .filter((p) => p.featured)
  .sort((a, b) => a.order - b.order);

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export function ProjectGrid() {
  return (
    <section className="mb-8">
      <div className="-mx-4 mb-6 flex items-center text-sm font-medium">
        <span className="bg-blue-500 py-1 pl-3 pr-2 text-white">Kamali</span>
        <span className="border-y-[14px] border-l-[10px] border-y-[#3b4261] border-l-blue-500" />
        <span className="bg-[#3b4261] py-1 pl-1 pr-2 text-blue-300">~/portfolio</span>
        <span className="border-y-[14px] border-l-[10px] border-y-transparent border-l-[#3b4261]" />
        <span className="pl-2 py-1 text-terminal-text">ls <span className="text-terminal-accent">projects</span></span>
        <span className="inline-block w-[0.55em] h-[1.1em] bg-terminal-green ml-1" />
      </div>

      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {featured.map((project) => (
          <motion.div key={project.slug} variants={item}>
            <Link
              to={`/project/${project.slug}`}
              className="group block rounded-lg border border-terminal-muted overflow-hidden transition-colors hover:border-terminal-green"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-terminal-dim">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-contain opacity-80 transition-opacity group-hover:opacity-100"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-terminal-bg/90 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="text-xs text-terminal-green">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="flex items-center gap-2 text-terminal-bright text-sm font-medium group-hover:text-terminal-green transition-colors">
                  {project.icon && (
                    <img src={project.icon} alt="" className="h-5 w-5 object-contain" />
                  )}
                  {project.title}
                </h3>
                <p className="mt-1 text-xs text-terminal-muted line-clamp-2">
                  {project.tagline}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] text-terminal-muted border border-terminal-muted rounded px-1.5 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
