import { useState, useEffect, useCallback } from "react";

interface UseTypingAnimationOptions {
  lines: string[];
  speed?: number;
  lineDelay?: number;
  startDelay?: number;
}

export function useTypingAnimation({
  lines,
  speed = 40,
  lineDelay = 300,
  startDelay = 200,
}: UseTypingAnimationOptions) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  const animate = useCallback(() => {
    let lineIdx = 0;
    let charIdx = 0;
    let cancelled = false;

    function tick() {
      if (cancelled) return;

      if (lineIdx >= lines.length) {
        setDone(true);
        return;
      }

      const line = lines[lineIdx];

      if (charIdx <= line.length) {
        setDisplayedLines((prev) => {
          const next = [...prev];
          next[lineIdx] = line.slice(0, charIdx);
          return next;
        });

        if (charIdx === line.length) {
          // Line done — pause, then start next
          lineIdx++;
          charIdx = 0;
          if (lineIdx < lines.length) {
            setDisplayedLines((prev) => [...prev, ""]);
          }
          setTimeout(tick, lineDelay);
        } else {
          charIdx++;
          setTimeout(tick, speed);
        }
      }
    }

    // Kick off after start delay
    const startTimeout = setTimeout(() => {
      setDisplayedLines([""]);
      tick();
    }, startDelay);

    return () => {
      cancelled = true;
      clearTimeout(startTimeout);
    };
  }, [lines, speed, lineDelay, startDelay]);

  useEffect(() => {
    setDisplayedLines([]);
    setDone(false);
    return animate();
  }, [animate]);

  return { displayedLines, done };
}
