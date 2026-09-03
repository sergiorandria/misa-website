"use client";

import { ArrowRight, Repeat2 } from "lucide-react";
import { useState } from "react";
import { cn } from "../../lib/utils";

export default function CardFlip({
  title = "Design Systems",
  subtitle = "Explore the fundamentals",
  description = "Dive deep into the world of modern UI/UX design.",
  features = ["UI/UX", "Modern Design", "Tailwind CSS", "Kokonut UI"],
  icon: Icon,
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group relative w-full max-w-[320px] sm:max-w-[360px] h-[340px] sm:h-[360px] mx-auto [perspective:2000px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped((v) => !v)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setIsFlipped((v) => !v);
        }
      }}
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
        {/* Front — MISA palette */}
        <div
          className={cn(
            "absolute inset-0 h-full w-full",
            "[backface-visibility:hidden] [transform:rotateY(0deg)]",
            "overflow-hidden rounded-2xl",
            "bg-white",
            "border border-[var(--color-misa-line)]",
            "shadow-sm",
            "transition-shadow duration-500",
            "group-hover:shadow-md"
          )}
        >
          <div className="relative h-full overflow-hidden bg-gradient-to-b from-[var(--color-misa-paper)] to-white">
            <div aria-hidden="true" className="absolute inset-0 flex items-start justify-center pt-20 sm:pt-24">
              <div className="relative flex h-[100px] w-[200px] items-center justify-center">
                {[...Array(8)].map((_, i) => (
                  <div
                    className={cn(
                      "absolute h-[48px] w-[48px]",
                      "rounded-full",
                      "animate-[scale_3s_linear_infinite]",
                      "motion-reduce:animate-none",
                      "opacity-0",
                      "shadow-[0_0_40px_rgba(175,35,35,0.18)]",
                      "border border-[var(--color-misa-red)]/10",
                      "group-hover:animate-[scale_2s_linear_infinite]"
                    )}
                    key={i}
                    style={{ animationDelay: `${i * 0.32}s` }}
                  />
                ))}
                {/* Icon — refined center badge */}
                {Icon && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-[var(--color-misa-red)]/10 blur-[8px]" />
                      <div className="relative w-14 h-14 rounded-full bg-white border border-[var(--color-misa-line)] shadow-sm flex items-center justify-center text-[var(--color-misa-red)] group-hover:border-[var(--color-misa-red)]/30 group-hover:shadow-md transition-all duration-300">
                        <Icon size={26} strokeWidth={1.7} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* Mobile tap hint — MISA style */}
            <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 text-[10px] tracking-[0.14em] uppercase text-neutral-400 font-medium sm:hidden bg-white/90 border border-[var(--color-misa-line)] px-2 py-1 shadow-xs">
              <Repeat2 size={12} className="text-[var(--color-misa-red)]" /> Tap to flip
            </div>
          </div>

          <div className="absolute right-0 bottom-0 left-0 p-5 bg-gradient-to-t from-white via-white to-transparent">
            <div className="flex items-center justify-between gap-3">
              <div className="space-y-1.5 min-w-0 flex-1">
                <h3 className="font-semibold text-base sm:text-lg text-[var(--color-misa-ink)] leading-snug tracking-tight transition-transform duration-500 ease-out-expo group-hover:translate-y-[-4px] line-clamp-2">
                  {title}
                </h3>
                <p className="line-clamp-2 text-xs sm:text-sm text-neutral-600 tracking-tight transition-transform delay-[50ms] duration-500 ease-out-expo group-hover:translate-y-[-4px]">
                  {subtitle}
                </p>
              </div>
              <div className="group/icon relative shrink-0">
                <div
                  className={cn(
                    "absolute inset-[-8px] rounded-full transition-opacity duration-300",
                    "bg-[var(--color-misa-red)]/10 opacity-0 group-hover:opacity-100"
                  )}
                />
                <div className="relative w-8 h-8 rounded-full bg-[var(--color-misa-paper)] border border-[var(--color-misa-line)] flex items-center justify-center group-hover:border-[var(--color-misa-red)]/20 transition">
                  <Repeat2
                    aria-hidden="true"
                    className="h-4 w-4 text-[var(--color-misa-red)] transition-transform duration-300 group-hover/icon:-rotate-12 group-hover/icon:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back — MISA palette */}
        <div
          className={cn(
            "absolute inset-0 h-full w-full",
            "[backface-visibility:hidden] [transform:rotateY(180deg)]",
            "rounded-2xl p-5 sm:p-6",
            "bg-gradient-to-b from-[var(--color-misa-paper)] to-white",
            "border border-[var(--color-misa-line)]",
            "shadow-sm",
            "flex flex-col",
            "transition-shadow duration-500",
            "group-hover:shadow-md"
          )}
        >
          <div className="flex-1 space-y-4 sm:space-y-5 min-h-0 overflow-hidden">
            <div className="space-y-2">
              <h3 className="font-semibold text-base sm:text-lg text-[var(--color-misa-ink)] leading-snug tracking-tight line-clamp-2">
                {title}
              </h3>
              <p className="line-clamp-3 text-xs sm:text-sm text-neutral-600 tracking-tight leading-relaxed">
                {description}
              </p>
            </div>

            <div className="space-y-1.5">
              {features.map((feature, index) => (
                <div
                  className="flex items-center gap-2 text-xs sm:text-sm text-neutral-700"
                  key={feature}
                  style={{
                    transform: isFlipped ? "translateX(0)" : "translateX(-10px)",
                    opacity: isFlipped ? 1 : 0,
                    transitionDelay: `${index * 50 + 150}ms`,
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-misa-red)] shrink-0" />
                  <span className="line-clamp-1">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 sm:mt-6 border-[var(--color-misa-line)] border-t pt-4 sm:pt-5">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsFlipped(false);
              }}
              className={cn(
                "group/start relative w-full",
                "flex items-center justify-between",
                "-m-3 rounded-xl p-3",
                "transition-all duration-300",
                "bg-white border border-[var(--color-misa-line)]",
                "hover:bg-[var(--color-misa-paper)] hover:border-[var(--color-misa-red)]/20",
                "hover:scale-[1.01] active:scale-[0.98]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-misa-red)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              )}
              type="button"
              aria-label="Retour"
            >
              <span className="font-medium text-xs sm:text-sm text-[var(--color-misa-ink)] group-hover/start:text-[var(--color-misa-red)] transition">
                Retour
              </span>
              <div className="w-8 h-8 rounded-full bg-[var(--color-misa-paper)] border border-[var(--color-misa-line)] flex items-center justify-center group-hover/start:border-[var(--color-misa-red)]/20 group-hover/start:bg-white transition">
                <Repeat2
                  aria-hidden="true"
                  className="h-4 w-4 text-[var(--color-misa-red)] transition-transform duration-300 group-hover/start:rotate-12 group-hover/start:scale-110"
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scale {
          0% {
            transform: scale(2);
            opacity: 0;
            box-shadow: 0px 0px 50px rgba(175, 35, 35, 0.15);
          }
          50% {
            transform: translate(0px, -5px) scale(1);
            opacity: 1;
            box-shadow: 0px 8px 20px rgba(175, 35, 35, 0.15);
          }
          100% {
            transform: translate(0px, 5px) scale(0.1);
            opacity: 0;
            box-shadow: 0px 10px 20px rgba(175, 35, 35, 0);
          }
        }
      `}</style>
    </div>
  );
}
