import { useTypingAnimation } from "../../hooks/useTypingAnimation";
import { BlinkingCursor } from "./BlinkingCursor";

interface TypingTextProps {
  lines: string[];
  speed?: number;
  lineDelay?: number;
  onDone?: () => void;
}

export function TypingText({
  lines,
  speed = 40,
  lineDelay = 300,
}: TypingTextProps) {
  const { displayedLines, done } = useTypingAnimation({
    lines,
    speed,
    lineDelay,
  });

  return (
    <div className="font-mono">
      {displayedLines.map((line, i) => (
        <div key={i} className="flex items-center">
          <span className="text-terminal-green mr-2">&gt;</span>
          <span className="text-terminal-text">{line}</span>
          {i === displayedLines.length - 1 && !done && <BlinkingCursor />}
        </div>
      ))}
      {done && (
        <div className="flex items-center">
          <span className="text-terminal-green mr-2">&gt;</span>
          <BlinkingCursor />
        </div>
      )}
    </div>
  );
}
