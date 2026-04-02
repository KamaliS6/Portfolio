export function HeroSection() {
  return (
    <section className="mb-8">
      <div className="-mx-4 mb-4 flex items-center text-sm font-medium">
        <span className="bg-blue-500 py-1 pl-3 pr-2 text-white">Kamali</span>
        <span className="border-y-[14px] border-l-[10px] border-y-[#3b4261] border-l-blue-500" />
        <span className="bg-[#3b4261] py-1 pl-1 pr-2 text-blue-300">~/portfolio</span>
        <span className="border-y-[14px] border-l-[10px] border-y-transparent border-l-[#3b4261]" />
        <span className="pl-2 py-1 text-terminal-text">cat <span className="text-cyan-300">who_am_i.txt</span></span>
        <span className="inline-block w-[0.55em] h-[1.1em] bg-terminal-green ml-1" />
      </div>
      <div className="mt-2">
        <h1 className="text-4xl sm:text-5xl font-bold text-terminal-bright">Kamali</h1>
        <p className="mt-2 text-sm text-terminal-text">
          <span className="text-terminal-green font-medium">AI Native</span> Software Developer, based in New York
        </p>
      </div>
    </section>
  );
}
