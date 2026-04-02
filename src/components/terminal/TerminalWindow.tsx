import type { ReactNode } from "react";

interface TerminalWindowProps {
  title?: string;
  navbar?: ReactNode;
  children: ReactNode;
}

export function TerminalWindow({ title = "terminal", navbar, children }: TerminalWindowProps) {
  return (
    <div className="rounded-lg border border-terminal-muted overflow-hidden">
      {/* Title bar */}
      <div className="relative flex items-center border-b border-terminal-muted bg-terminal-dim px-4 py-2">
        {/* Traffic lights */}
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        {/* Centered title with folder icon */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="flex items-center gap-1.5 text-xs text-terminal-bright">
            <svg className="h-3.5 w-3.5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
            </svg>
            {title}
          </span>
        </div>
      </div>
      {/* Navbar */}
      {navbar && (
        <div className="border-b border-terminal-muted bg-terminal-bg px-4 py-3">
          {navbar}
        </div>
      )}
      {/* Content */}
      <div className="bg-terminal-bg p-4">{children}</div>
    </div>
  );
}
