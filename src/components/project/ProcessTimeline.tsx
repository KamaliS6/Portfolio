import { motion } from "motion/react";
import type { ProcessStep } from "../../types";
import { LazyImage } from "../ui/LazyImage";

export function ProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  if (steps.length === 0) return null;

  return (
    <section className="mt-12">
      <h2 className="mb-6 text-sm text-terminal-muted">
        <span className="text-terminal-green">$</span> cat process.log
      </h2>

      <div className="space-y-1">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className="rounded-lg border border-terminal-muted overflow-hidden"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            {/* Log entry header */}
            <div className="flex items-center gap-3 border-b border-terminal-muted bg-terminal-dim px-4 py-2">
              <span className="text-[10px] text-terminal-muted font-mono">
                [{String(i + 1).padStart(2, "0")}]
              </span>
              <span className="text-xs text-terminal-green">INFO</span>
              <h3 className="text-xs font-medium text-terminal-bright">
                {step.title}
              </h3>
            </div>

            {/* Log entry body */}
            <div className="bg-terminal-bg p-4">
              <p className="text-xs leading-relaxed text-terminal-text">
                {step.description}
              </p>

              {step.images.length > 0 && (
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {step.images.map((img, j) => (
                    <div key={j}>
                      <LazyImage
                        src={img.src}
                        alt={img.alt}
                        className="aspect-video rounded border border-terminal-muted"
                      />
                      {img.caption && (
                        <p className="mt-1 text-[10px] text-terminal-muted">
                          {img.caption}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
