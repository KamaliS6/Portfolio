import { siteConfig } from "../../data/site-config";

export function BioSection() {
  return (
    <section className="mb-8">
      <div className="-mx-4 mb-4 flex items-center text-sm font-medium">
        <span className="bg-blue-500 py-1 pl-3 pr-2 text-white">Kamali</span>
        <span className="border-y-[14px] border-l-[10px] border-y-[#3b4261] border-l-blue-500" />
        <span className="bg-[#3b4261] py-1 pl-1 pr-2 text-blue-300">~/about</span>
        <span className="border-y-[14px] border-l-[10px] border-y-transparent border-l-[#3b4261]" />
        <span className="pl-2 py-1 text-terminal-text">cat <span className="text-terminal-accent">about.txt</span></span>
        <span className="inline-block w-[0.55em] h-[1.1em] bg-terminal-green ml-1" />
      </div>
      <div className="space-y-4 text-sm leading-relaxed text-terminal-text">
        <p>
          Hey, I'm{" "}
          <span className="text-terminal-green font-medium">
            {siteConfig.name}
          </span>
          , a software developer and Fordham University graduate with a
          Computer Science major and Cybersecurity minor.
        </p>
        <p>
          I'm deep into AI and building AI-native applications — tools that
          don't just bolt on a model but are designed around intelligence from
          the ground up. I care about clean code, good UX, and shipping things
          that actually work.
        </p>
        <p>
          When I'm not writing code, you'll find me tinkering with side
          projects, diving into open source, or trying to automate something
          that probably didn't need automating.
        </p>
      </div>
    </section>
  );
}
