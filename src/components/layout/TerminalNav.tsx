import { Link, useLocation, useNavigate } from "react-router";
import { siteConfig } from "../../data/site-config";
import { socialLinks } from "../../data/social-links";

export function TerminalNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const currentPath = isHome
    ? "~/portfolio"
    : `~/portfolio${location.pathname}`;

  return (
    <div className="flex items-center justify-between text-sm">
      {/* Left: nav buttons + prompt */}
      <div className="flex items-center gap-4">
        {!isHome && (
          <button
            onClick={() => navigate(-1)}
            className="text-terminal-muted hover:text-terminal-green transition-colors text-lg leading-none"
            aria-label="Go back"
          >
            &larr;
          </button>
        )}
        <Link to="/" className="text-terminal-text hover:text-terminal-green transition-colors" aria-label="Home">
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </Link>
        <span className="text-terminal-muted">:</span>
        <span className="text-terminal-text">{currentPath}</span>
        <span className="text-terminal-green">$</span>
      </div>

      {/* Right: links */}
      <div className="flex items-center gap-6">
        <a
          href={`mailto:${siteConfig.email}`}
          className="text-terminal-text hover:text-terminal-green transition-colors"
          aria-label="Email"
        >
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
        </a>

        {socialLinks.map((link) => (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-terminal-text hover:text-terminal-green transition-colors"
            aria-label={link.platform}
          >
            {link.platform}
          </a>
        ))}
      </div>
    </div>
  );
}
