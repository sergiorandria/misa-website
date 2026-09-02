import { MousePointerClick } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";
import { cn } from "../../lib/utils";

function SuccessParticles({ buttonRef }) {
  const rect = buttonRef.current?.getBoundingClientRect();
  if (!rect) return null;

  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  return (
    <AnimatePresence>
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, x: 0, y: 0 }}
          animate={{
            scale: [0, 1, 0],
            x: [0, (i % 2 ? 1 : -1) * (Math.random() * 50 + 20)],
            y: [0, -Math.random() * 50 - 20],
          }}
          transition={{
            duration: 0.6,
            delay: i * 0.1,
            ease: "easeOut",
          }}
          className="fixed h-1.5 w-1.5 rounded-full bg-[var(--color-misa-red)] dark:bg-white pointer-events-none z-[100]"
          style={{ left: centerX, top: centerY }}
        />
      ))}
    </AnimatePresence>
  );
}

export default function ParticleButton({
  children,
  onClick,
  onSuccess,
  successDuration = 1000,
  className,
  variant = "primary",
  ...props
}) {
  const [showParticles, setShowParticles] = useState(false);
  const buttonRef = useRef(null);

  const handleClick = (e) => {
    setShowParticles(true);
    setTimeout(() => setShowParticles(false), successDuration);
    if (onSuccess) onSuccess();
    if (onClick) onClick(e);
  };

  const baseStyles =
    "relative inline-flex items-center justify-center gap-2 min-h-[48px] px-7 py-3 text-xs font-bold tracking-[0.12em] uppercase transition duration-200 cursor-pointer select-none";

  const variants = {
    primary:
      "bg-[var(--color-misa-red)] text-white hover:bg-[var(--color-misa-red-dark)] shadow-xs",
    outline:
      "border-2 border-[var(--color-misa-ink)] text-[var(--color-misa-ink)] bg-transparent hover:bg-[var(--color-misa-ink)] hover:text-white",
    ghost:
      "bg-transparent text-[var(--color-misa-ink)] hover:bg-[var(--color-misa-paper)] border border-transparent",
  };

  return (
    <>
      {showParticles && <SuccessParticles buttonRef={buttonRef} />}
      <motion.button
        ref={buttonRef}
        onClick={handleClick}
        className={cn(
          baseStyles,
          variants[variant] || variants.primary,
          showParticles && "scale-[0.97]",
          "transition-transform duration-100",
          className
        )}
        whileTap={{ scale: 0.97 }}
        {...props}
      >
        <span className="flex items-center gap-2">
          {children}
          <MousePointerClick className="h-4 w-4 opacity-80" />
        </span>
      </motion.button>
    </>
  );
}
