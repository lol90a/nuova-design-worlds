import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { LogoMark } from "./Logo";

/** Architectural logo reveal on first load (~1.8s). */
export function Intro() {
  const reduce = useReducedMotion();
  const [done, setDone] = useState(true);

  useEffect(() => {
    if (reduce) return;
    if (sessionStorage.getItem("nuova-intro") === "seen") return;
    setDone(false);
    sessionStorage.setItem("nuova-intro", "seen");
    const t = setTimeout(() => setDone(true), 1850);
    return () => clearTimeout(t);
  }, [reduce]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ backgroundColor: "#070707" }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }}
        >
          <div className="relative flex flex-col items-center">
            <div className="relative">
              <LogoMark className="h-20 w-[100px]" animated />
              <motion.span
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(100deg, transparent 35%, rgba(255,240,205,0.55) 50%, transparent 65%)",
                  mixBlendMode: "screen",
                  animation: "nuova-sheen 1.1s 0.75s cubic-bezier(0.22,1,0.36,1) forwards",
                }}
              />
            </div>
            <motion.span
              className="mt-8 text-[0.7rem] uppercase"
              style={{ letterSpacing: "0.55em", color: "#C99A4B", fontFamily: "var(--font-display)" }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              Nuova
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
