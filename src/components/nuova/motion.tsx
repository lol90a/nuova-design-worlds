import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

export function FadeUp({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "span" | "li";
}) {
  const reduce = useReducedMotion();
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{ duration: reduce ? 0.4 : 1, delay, ease: EASE }}
    >
      {children}
    </Comp>
  );
}

export function GoldRule({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`rule-gold origin-left ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.3, ease: EASE }}
    />
  );
}

/** Image revealed with a clip-path mask + optional slow parallax. */
export function RevealImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  parallax = 0,
  priority = false,
  cursor = "VIEW",
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  parallax?: number;
  priority?: boolean;
  cursor?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`-${parallax}%`, `${parallax}%`]);

  return (
    <motion.div
      ref={ref}
      data-cursor={cursor}
      className={`relative overflow-hidden ${className}`}
      initial={reduce ? { opacity: 0 } : { clipPath: "inset(100% 0 0 0)" }}
      whileInView={reduce ? { opacity: 1 } : { clipPath: "inset(0% 0 0 0)" }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 1.4, ease: EASE }}
    >
      <motion.img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        style={reduce || !parallax ? undefined : { y, scale: 1 + parallax / 40 }}
        className={`h-full w-full object-cover ${imgClassName}`}
      />
    </motion.div>
  );
}

/** Subtle magnetic hover for buttons (desktop only). */
export function Magnetic({
  children,
  className = "",
  strength = 6,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 20 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 20 });

  return (
    <motion.span
      ref={ref}
      className={`inline-block ${className}`}
      style={reduce ? undefined : { x, y }}
      onPointerMove={(e) => {
        if (reduce || e.pointerType !== "mouse" || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        x.set(((e.clientX - (r.left + r.width / 2)) / r.width) * strength * 2);
        y.set(((e.clientY - (r.top + r.height / 2)) / r.height) * strength * 2);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.span>
  );
}

export function useInViewOnce<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  return { ref, inView };
}

/** Smooth scrolling (Lenis), disabled for reduced motion. */
export function useSmoothScroll() {
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) return;
    let raf = 0;
    let lenis: { raf: (t: number) => void; destroy: () => void } | null = null;
    let cancelled = false;
    import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      lenis = new Lenis({ duration: 1.1, smoothWheel: true });
      const loop = (t: number) => {
        lenis?.raf(t);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    });
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      lenis?.destroy();
    };
  }, [reduce]);
}
