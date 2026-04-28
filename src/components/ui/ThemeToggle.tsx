import { useTheme } from "../../hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const target = theme === "dark" ? "LIGHT" : "DARK";

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${target.toLowerCase()} theme`}
      className="relative z-10 ml-auto text-xs text-terminal-text hover:text-terminal-green transition-colors"
    >
      [{target}]
    </button>
  );
}
