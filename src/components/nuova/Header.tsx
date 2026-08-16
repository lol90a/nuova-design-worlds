import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Magnetic } from "./motion";
import { navLinks } from "@/data/nuova";
import { useWorld } from "./world";

export function Header() {
  const world = useWorld();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      data-world={world}
      className="fixed inset-x-0 top-0 z-[80] text-foreground"
      style={{
        backgroundColor: scrolled
          ? world === "dark"
            ? "rgba(7,7,7,0.72)"
            : "rgba(252,250,246,0.72)"
          : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
        transition: "background-color .6s cubic-bezier(.22,1,.36,1), border-color .6s, backdrop-filter .6s",
      }}
    >
      <div className="shell flex items-center justify-between" style={{ height: scrolled ? 72 : 88, transition: "height .6s cubic-bezier(.22,1,.36,1)" }}>
        <Link to="/" aria-label="NUOVA home" className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {navLinks.slice(1).map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className="link-underline text-[0.68rem] font-medium uppercase tracking-[0.22em] transition-colors hover:text-gold"
                data-active={active}
                style={active ? { color: "var(--gold)" } : undefined}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Magnetic>
            <Link to="/contact" className="btn-ghost-nuova">
              Book Consultation
            </Link>
          </Magnetic>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 flex-col items-end justify-center gap-[6px] lg:hidden"
        >
          <span
            className="block h-px bg-foreground transition-all duration-500"
            style={{ width: 26, transform: open ? "translateY(3.5px) rotate(45deg)" : "none" }}
          />
          <span
            className="block h-px bg-foreground transition-all duration-500"
            style={{ width: open ? 26 : 18, transform: open ? "translateY(-3.5px) rotate(-45deg)" : "none" }}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            data-world={world}
            className="fixed inset-0 top-0 -z-10 flex flex-col justify-between bg-background px-6 pb-10 pt-28 lg:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0.6 }}
            animate={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
            exit={{ clipPath: "inset(0 0 100% 0)", opacity: 0.6 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav aria-label="Mobile" className="flex flex-col gap-1">
              {navLinks.slice(1).map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 + i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    to={l.to}
                    className="block border-b border-line py-4 text-[1.65rem]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <Link to="/contact" className="btn-nuova justify-center">
              Book an appointment
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
