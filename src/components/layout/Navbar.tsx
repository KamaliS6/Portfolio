import { useState } from "react";
import { Link, useLocation } from "react-router";
import { siteConfig } from "../../data/site-config";
import { socialLinks } from "../../data/social-links";

const navLinks = [
  { path: "/", label: "portfolio" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const currentPath =
    location.pathname === "/"
      ? "~"
      : `~${location.pathname}`;

  return (
    <nav className="px-6 py-4">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        {/* Left: prompt + current path */}
        <Link to="/" className="flex items-center gap-2 text-terminal-text hover:text-terminal-green transition-colors">
          <span className="text-terminal-green">{siteConfig.name.toLowerCase()}</span>
          <span className="text-terminal-muted">:</span>
          <span className="text-terminal-text">{currentPath}</span>
          <span className="text-terminal-green">$</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors ${
                location.pathname === link.path
                  ? "text-terminal-green"
                  : "text-terminal-text hover:text-terminal-green"
              }`}
            >
              <span className="text-terminal-muted mr-1">&gt;</span>
              {link.label}
            </Link>
          ))}

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

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-terminal-text hover:text-terminal-green md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? "[x]" : "[=]"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mt-4 flex flex-col gap-3 border-t border-terminal-muted pt-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`transition-colors ${
                location.pathname === link.path
                  ? "text-terminal-green"
                  : "text-terminal-text hover:text-terminal-green"
              }`}
            >
              <span className="text-terminal-muted mr-1">&gt;</span>
              cd {link.label}
            </Link>
          ))}

          <a
            href={`mailto:${siteConfig.email}`}
            className="text-terminal-text hover:text-terminal-green transition-colors flex items-center gap-2"
            aria-label="Email"
          >
            <span className="text-terminal-muted mr-1">&gt;</span>
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </a>

          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-terminal-text hover:text-terminal-green transition-colors"
              >
                [{link.platform}]
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
