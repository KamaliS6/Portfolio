import { Link, useLocation } from "react-router";
import { SEOHead } from "../components/ui/SEOHead";
import { TerminalWindow } from "../components/terminal/TerminalWindow";

export function NotFoundPage() {
  const { pathname } = useLocation();

  return (
    <>
      <SEOHead title="404" />
      <div className="flex flex-col items-center justify-center py-20">
        <TerminalWindow title="error">
          <div className="space-y-2 text-sm">
            <p className="text-terminal-muted">
              <span className="text-terminal-green">$</span> cd {pathname}
            </p>
            <p className="text-red-400">
              bash: cd: {pathname}: No such file or directory
            </p>
            <div className="mt-6">
              <Link
                to="/"
                className="text-terminal-green hover:text-terminal-bright transition-colors"
              >
                <span className="text-terminal-muted">$</span> cd ~
              </Link>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </>
  );
}
