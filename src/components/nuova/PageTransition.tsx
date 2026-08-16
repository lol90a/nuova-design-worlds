import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { LogoMark } from "./Logo";

const DARK_ROUTES = ["/office-furniture", "/corporate-furniture"];

/** Gold-line curtain between pages (~700ms). */
export function PageTransition() {
  const reduce = useReducedMotion();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [veil, setVeil] = useState<string | null>(null);
  const [first, setFirst] = useState(true);

  useEffect(() => {
    if (reduce) return;
    if (first) {
      setFirst(false);
      return;
    }
    setVeil(pathname);
    const t = setTimeout(() => setVeil(null), 720);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, reduce]);

  const dark = DARK_ROUTES.some((r) => (veil ?? "").startsWith(r));

  return (
    <AnimatePresence>
      {veil && (
        <motion.div
          key={veil}
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[95] flex items-center justify-center"
          style={{ backgroundColor: dark ? "#070707" : "#F7F3EB" }}
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(100% 0 0 0)" }}
          transition={{ duration: 0.42, ease: [0.65, 0, 0.35, 1] }}
        >
          <div className="flex flex-col items-center gap-5">
            <LogoMark className="h-9 w-[45px]" />
            <motion.span
              className="block h-px w-32 origin-left"
              style={{ backgroundColor: "#C99A4B" }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
