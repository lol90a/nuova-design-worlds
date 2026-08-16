import { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

/** Elegant custom cursor. Desktop pointers only. */
export function Cursor() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const x = useSpring(useMotionValue(-100), { stiffness: 600, damping: 40, mass: 0.35 });
  const y = useSpring(useMotionValue(-100), { stiffness: 600, damping: 40, mass: 0.35 });

  useEffect(() => {
    if (reduce) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    setEnabled(true);

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-cursor]");
      setLabel(target?.dataset.cursor ?? null);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduce, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[90] hidden md:block"
      style={{ x, y }}
    >
      <motion.div
        className="flex items-center justify-center rounded-full border border-gold text-[0.55rem] font-medium uppercase tracking-[0.22em] text-gold"
        style={{ translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: label ? 82 : 10,
          height: label ? 82 : 10,
          backgroundColor: label ? "rgba(201,154,75,0.10)" : "rgba(201,154,75,1)",
          backdropFilter: label ? "blur(2px)" : "blur(0px)",
        }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        {label}
      </motion.div>
    </motion.div>
  );
}
