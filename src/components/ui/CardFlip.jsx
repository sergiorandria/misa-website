"use client";

import { ArrowRight, Repeat2 } from "lucide-react";
import { memo, useCallback, useState } from "react";
import { cn } from "../../lib/utils";

function CardFlipInner({
  title = "Design Systems",
  subtitle = "Explore the fundamentals",
  description = "Dive deep into the world of modern UI/UX design.",
  features = ["UI/UX", "Modern Design", "Tailwind CSS", "Kokonut UI"],
  icon: Icon,
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = useCallback(() => setIsFlipped((v) => !v), []);
  const handleKeyDown = useCallback((e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsFlipped((v) => !v);
    }
  }, []);

  return (
    <div
      className="group relative w-full max-w-[260px] sm:max-w-[280px] h-[300px] sm:h-[320px] mx-auto [perspective:2000px] will-change-transform"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={handleFlip}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label={`${title} — flip card`}
    >
      <div
        className={cn(
          "relative h-full w-full",
          "[transform-style:preserve-3d]",
          "transition-[transform] duration-500 ease-[cubic-bezier(0.77,0,0.175,1)]",
          "motion-reduce:transition-none",
          isFlipped ? "[transform:rotateY(180deg)]" : "[transform:rotateY(0deg)]"
        )}
      >
        {/* Front — MISA palette (reduced) */}
        <div
          className={cn(
            "absolute inset-0 h-full w-full",
            "[backface-visibility:hidden] [transform:rotateY(0deg)]",
            "overflow-hidden rounded-xl",
            "bg-white",
            "border border-[var(--color-misa-line)]",
            "shadow-sm",
            "transition-shadow duration-500",
            "group-hover:shadow-md"
          )}
        >
          <div className="relative h-full overflow-hidden bg-gradient-to-b from-[var(--color-misa-paper)] to-white">
            <div aria-hidden="true" className="absolute inset-0 flex items-start justify-center pt-14 sm:pt-16">
              <div className="relative flex h-[80px] w-[160px] items-center justify-center">
                {[...Array(6)].map((_, i) => (
                  <div
                    className={cn(
                      "absolute h-[40px] w-[40px]",
                      "rounded-full",
                      "animate-[scale_3s_linear_infinite]",
                      "motion-reduce:animate-none",
                      "opacity-0",
                      "shadow-[0_0_30px_rgba(175,35,35,0.14)]",
                      "border border-[var(--color-misa-red)]/10",
                      "group-hover:animate-[scale_2s_linear_infinite]"
                    )}
                    key={i}
                    style={{ animationDelay: `${i * 0.35}s` }}
                  />
                ))}
                {Icon && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-[var(--color-misa-red)]/10 blur-[6px]" />
                      <div className="relative w-12 h-12 rounded-full bg-white border border-[var(--color-misa-line)] shadow-sm flex items-center justify-center text-[var(--color-misa-red)] group-hover:border-[var(--color-misa-red)]/30 group-hover:shadow-md transition-all duration-300">
                        <Icon size={22} strokeWidth={1.7} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1 text-[10px] tracking-widest uppercase text-neutral-400 font-medium sm:hidden bg-white/90 border border-[var(--color-misa-line)] px-2 py-1 shadow-xs">
              <Repeat2 size={12} className="text-[var(--color-misa-red)]" /> Tap
            </div>
          </div>

          <div className="absolute right-0 bottom-0 left-0 p-4 bg-gradient-to-t from-white via-white to-transparent">
            <div className="flex items-center justify-between gap-2">
              <div className="space-y-1 min-w-0 flex-1">
                <h3 className="font-semibold text-sm sm:text-[15px] text-[var(--color-misa-ink)] leading-snug tracking-tight line-clamp-2">
                  {title}
                </h3>
                <p className="line-clamp-2 text-[11px] sm:text-xs text-neutral-600 tracking-tight line-clamp-1">
                  {subtitle}
                </p>
              </div>
              <div className="w-7 h-7 rounded-full bg-[var(--color-misa-paper)] border border-[var(--color-misa-line)] flex items-center justify-center shrink-0">
                <Repeat2 size={14} className="text-[var(--color-misa-red)]" />
              </div>
            </div>
          </div>
        </div>

        {/* Back — MISA palette (compact) */}
        <div
          className={cn(
            "absolute inset-0 h-full w-full",
            "[backface-visibility:hidden] [transform:rotateY(180deg)]",
            "rounded-xl p-4 sm:p-5",
            "bg-gradient-to-b from-[var(--color-misa-paper)] to-white",
            "border border-[var(--color-misa-line)]",
            "shadow-sm",
            "flex flex-col",
            "transition-shadow duration-500",
            "group-hover:shadow-md"
          )}
        >
          <div className="flex-1 space-y-3 min-h-0 overflow-hidden">
            <div className="space-y-1.5">
              <h3 className="font-semibold text-sm sm:text-[15px] text-[var(--color-misa-ink)] leading-snug line-clamp-2">
                {title}
              </h3>
              <p className="line-clamp-2 text-[11px] sm:text-xs text-neutral-600 leading-relaxed">
                {description}
              </p>
            </div>

            <div className="space-y-1">
              {features.map((feature, index) => (
                <div
                  className="flex items-center gap-1.5 text-[11px] sm:text-xs text-neutral-700"
                  key={feature}
                  style={{
                    transform: isFlipped ? "translateX(0)" : "translateX(-8px)",
                    opacity: isFlipped ? 1 : 0,
                    transitionDelay: `${index * 40 + 120}ms`,
                  }}
                >
                  <span className="w-1 h-1 rounded-full bg-[var(--color-misa-red)] shrink-0" />
                  <span className="line-clamp-1">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-3 border-[var(--color-misa-line)] border-t pt-3">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsFlipped(false);
              }}
              className={cn(
                "group/start relative w-full",
                "flex items-center justify-between",
                "-m-2 rounded-lg p-2",
                "transition-all duration-300",
                "bg-white border border-[var(--color-misa-line)]",
                "hover:bg-[var(--color-misa-paper)] hover:border-[var(--color-misa-red)]/20",
                "hover:scale-[1.01] active:scale-[0.99]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-misa-red)] focus-visible:ring-offset-1"
              )}
              type="button"
              aria-label="Retour"
            >
              <span className="font-medium text-xs text-[var(--color-misa-ink)] group-hover/start:text-[var(--color-misa-red)] transition">
                Retour
              </span>
              <div className="w-7 h-7 rounded-full bg-[var(--color-misa-paper)] border border-[var(--color-misa-line)] flex items-center justify-center">
                <Repeat2 size={14} className="text-[var(--color-misa-red)]" />
              </div>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scale {
          0% { transform: scale(1.8); opacity: 0; box-shadow: 0px 0px 30px rgba(175, 35, 35, 0.12); }
          50% { transform: translate(0px, -4px) scale(1); opacity: 1; box-shadow: 0px 6px 16px rgba(175, 35, 35, 0.12); }
          100% { transform: translate(0px, 4px) scale(0.1); opacity: 0; box-shadow: 0px 8px 16px rgba(175, 35, 35, 0); }
        }
      `}</style>
    </div>
  );
}

export default memo(CardFlipInner);
