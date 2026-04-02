export function BlinkingCursor() {
  return (
    <span
      className="inline-block w-[0.6em] h-[1.1em] bg-terminal-green align-middle animate-[blink_1s_step-end_infinite]"
      aria-hidden="true"
    />
  );
}
