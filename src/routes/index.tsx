import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { collections, img, lightMaterials } from "@/data/nuova";
import { FadeUp, GoldRule, Magnetic, RevealImage } from "@/components/nuova/motion";
import {
  CtaBand,
  MaterialStudio,
  ProcessList,
  SectionHead,
} from "@/components/nuova/sections";
import { usePageWorld } from "@/components/nuova/world";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NUOVA — Luxury Furniture for Homes, Hotels & Offices" },
      {
        name: "description",
        content:
          "NUOVA designs and manufactures luxury furniture for residences, hotels, offices and corporate interiors — bespoke, architectural, made to last.",
      },
      { property: "og:title", content: "NUOVA — Luxury Furniture Atelier" },
      {
        property: "og:description",
        content:
          "Bespoke furniture programmes for homes, hotels, offices and corporate environments.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  usePageWorld("light");
  const reduce = useReducedMotion();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[100svh] w-full overflow-hidden">
        <motion.img
          src={img.heroLight}
          alt="Luxury living room with ivory bouclé sofa and travertine table"
          className="absolute inset-0 h-full w-full object-cover"
          initial={reduce ? { opacity: 0 } : { scale: 1.12, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, color-mix(in oklab, var(--background) 45%, transparent) 0%, transparent 40%, var(--background) 100%)",
          }}
        />
        <div className="shell relative flex min-h-[100svh] flex-col justify-end pb-24 pt-40">
          <FadeUp delay={0.2}>
            <span className="eyebrow">Est. Cairo — Furniture Atelier</span>
          </FadeUp>
          <FadeUp delay={0.3}>
            <h1 className="display-xl mt-6 max-w-[14ch]">
              Furniture as
              <br />
              architecture.
            </h1>
          </FadeUp>
          <GoldRule className="mt-10 w-48" />
          <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <FadeUp delay={0.4}>
              <p className="body-lg max-w-md">
                Two worlds, one standard of craft. Warm, residential calm for homes and
                hotels — dark, precise authority for offices and corporations.
              </p>
            </FadeUp>
            <FadeUp delay={0.5}>
              <div className="flex flex-wrap gap-4">
                <Magnetic>
                  <Link to="/projects" className="btn-nuova">
                    View projects
                  </Link>
                </Magnetic>
                <Magnetic>
                  <Link to="/contact" className="btn-ghost-nuova">
                    Book consultation
                  </Link>
                </Magnetic>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="shell py-28 md:py-40">
        <FadeUp>
          <p
            className="mx-auto max-w-4xl text-center"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem,3.1vw,2.75rem)",
              lineHeight: 1.25,
            }}
          >
            We do not decorate rooms. We build the pieces that give a room its
            proportion, its weight and its silence.
          </p>
        </FadeUp>
        <GoldRule className="mx-auto mt-14 w-24" />
      </section>

      {/* Collections */}
      <section className="shell pb-28 md:pb-40">
        <SectionHead
          eyebrow="Collections"
          title="Four worlds of furniture."
          copy="Each category is developed as a complete programme — from a single sculptural chair to a four-floor headquarters."
        />

        <div className="mt-16 grid gap-px bg-line md:grid-cols-2">
          {collections.map((c, i) => (
            <FadeUp key={c.to} delay={(i % 2) * 0.08}>
              <Link
                to={c.to}
                data-world={c.world}
                data-cursor="EXPLORE"
                className="group relative block h-full bg-background p-5 md:p-7"
              >
                <RevealImage
                  src={c.image}
                  alt={c.alt}
                  cursor=""
                  className="aspect-[16/11] w-full"
                  imgClassName="transition-transform duration-[1.6s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.05]"
                />
                <div className="mt-6 flex items-baseline justify-between gap-6">
                  <h3 className="display-md">{c.title}</h3>
                  <span className="text-[0.7rem] tracking-[0.28em] text-gold">{c.n}</span>
                </div>
                <p className="body-lg mt-3 max-w-md text-sm">{c.copy}</p>
                <span className="mt-6 inline-flex items-center gap-3 text-[0.66rem] uppercase tracking-[0.24em] text-gold">
                  Discover
                  <span className="h-px w-8 bg-gold transition-all duration-700 group-hover:w-14" />
                </span>
              </Link>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Materials studio */}
      <section className="bg-surface">
        <div className="shell py-28 md:py-40">
          <MaterialStudio materials={lightMaterials} />
        </div>
      </section>

      {/* Process */}
      <section className="shell py-28 md:py-40">
        <SectionHead
          eyebrow="Process"
          title="From brief to installed interior."
          copy="A single team carries your project from first measurement to final styling."
        />
        <ProcessList />
      </section>

      {/* Craft */}
      <section className="shell pb-28 md:pb-40">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <RevealImage
            src={img.craft}
            alt="Craftsman assembling a walnut furniture frame in the atelier"
            parallax={5}
            className="aspect-[4/5] w-full"
          />
          <div>
            <SectionHead
              eyebrow="The Atelier"
              title="Made by people who still measure twice."
              copy="Our workshop combines CNC precision with hand-finishing traditions — joinery, upholstery, veneer matching and metalwork under one roof."
            />
            <div className="mt-12 grid grid-cols-3 gap-6">
              {[
                { k: "18", v: "Years" },
                { k: "240+", v: "Projects" },
                { k: "5", v: "Countries" },
              ].map((s, i) => (
                <FadeUp key={s.v} delay={i * 0.07}>
                  <div className="border-t border-line pt-5">
                    <div className="display-md">{s.k}</div>
                    <div className="mt-1 text-[0.65rem] uppercase tracking-[0.24em] text-muted">
                      {s.v}
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Let's design your interior."
        copy="Share your drawings, your site or simply your intention. We'll take it from there."
      />
    </>
  );
}
