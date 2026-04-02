import { siteConfig } from "../../data/site-config";
import { socialLinks } from "../../data/social-links";

export function Footer() {
  return (
    <footer className="px-6 py-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-sm md:flex-row md:justify-between border-t border-terminal-muted pt-6">
        {/* Email — always visible */}
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

        {/* Socials */}
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${
                link.primary
                  ? "text-terminal-green hover:text-terminal-bright"
                  : "text-terminal-text hover:text-terminal-green"
              }`}
            >
              [{link.platform}]
            </a>
          ))}
        </div>

        {/* Copyright */}
        <span className="text-terminal-muted">
          &copy; {new Date().getFullYear()} {siteConfig.name}
        </span>
      </div>
    </footer>
  );
}
