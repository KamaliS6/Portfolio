import { useState } from "react";
import { siteConfig } from "../../data/site-config";

export function CVSection() {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <section>
      <div className="-mx-4 mb-6 flex items-center text-sm font-medium">
        <span className="bg-blue-500 py-1 pl-3 pr-2 text-white">Kamali</span>
        <span className="border-y-[14px] border-l-[10px] border-y-[#3b4261] border-l-blue-500" />
        <span className="bg-[#3b4261] py-1 pl-1 pr-2 text-blue-300">~/portfolio</span>
        <span className="border-y-[14px] border-l-[10px] border-y-transparent border-l-[#3b4261]" />
        <span className="pl-2 py-1 text-terminal-text">cat <span className="text-terminal-accent">resume.pdf</span></span>
        <span className="inline-block w-[0.55em] h-[1.1em] bg-terminal-green ml-1" />
      </div>

      <div className="rounded-lg border border-terminal-muted p-6">
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="rounded border border-terminal-green px-4 py-2 text-sm text-terminal-green transition-colors hover:bg-terminal-green hover:text-terminal-bg"
          >
            {showPreview ? "Hide Resume" : "See Resume"}
          </button>
          <a
            href={siteConfig.resumePath}
            download
            className="inline-block rounded border border-terminal-muted px-4 py-2 text-sm text-terminal-text transition-colors hover:border-terminal-green hover:text-terminal-green"
          >
            Download Resume [.pdf]
          </a>
        </div>

        {showPreview && (
          <div className="mt-6 overflow-hidden rounded border border-terminal-muted">
            <iframe
              src={`${siteConfig.resumePath}#toolbar=0`}
              title="Resume preview"
              className="h-[80vh] w-full bg-white"
            />
          </div>
        )}
      </div>
    </section>
  );
}
