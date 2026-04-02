const skillCategories = [
  {
    title: "Languages",
    items: ["C++", "JavaScript", "Python", "HTML/CSS"],
  },
  {
    title: "Frameworks",
    items: ["React", "Vite", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Tools",
    items: ["Cursor", "Claude Code", "Codex", "Git/GitHub", "Vercel", "Linux"],
  },
  {
    title: "Practices",
    items: ["CI/CD", "REST APIs", "Data Pipelines", "Prompt Engineering"],
  },
];

export function SkillsGrid() {
  return (
    <section className="mb-8">
      <div className="-mx-4 mb-6 flex items-center text-sm font-medium">
        <span className="bg-blue-500 py-1 pl-3 pr-2 text-white">Kamali</span>
        <span className="border-y-[14px] border-l-[10px] border-y-[#3b4261] border-l-blue-500" />
        <span className="bg-[#3b4261] py-1 pl-1 pr-2 text-blue-300">~/portfolio</span>
        <span className="border-y-[14px] border-l-[10px] border-y-transparent border-l-[#3b4261]" />
        <span className="pl-2 py-1 text-terminal-text">ls <span className="text-cyan-300">skills</span></span>
        <span className="inline-block w-[0.55em] h-[1.1em] bg-terminal-green ml-1" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="rounded-lg border border-terminal-muted p-4"
          >
            <h3 className="mb-3 text-xs font-medium text-terminal-green">
              /{category.title.toLowerCase()}
            </h3>
            <ul className="space-y-1">
              {category.items.map((item) => (
                <li key={item} className="text-xs text-terminal-text">
                  <span className="text-terminal-muted mr-2">&gt;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
