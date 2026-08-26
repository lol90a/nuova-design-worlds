import { Link } from "@tanstack/react-router";
import { lazy, Suspense, useState, type ReactNode } from "react";
import { FadeUp, GoldRule, Magnetic, RevealImage } from "./motion";
import { process as processSteps } from "@/data/nuova";

const MaterialObject = lazy(() => import("@/components/three/MaterialObject"));

/* ---------------------------------------------------------------- Hero -- */

export function PageHero({
  eyebrow,
  title,
  copy,
  image,
  alt,
}: {
  eyebrow: string;
  title: ReactNode;
  copy: string;
  image: string;
  alt: string;
}) {
  return (
    <section className="relative min-h-[86vh] w-full overflow-hidden">
      <RevealImage
        src={image}
        alt={alt}
        priority
        cursor=""
        parallax={4}
        className="absolute inset-0 h-full w-full"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--background) 55%, transparent) 0%, color-mix(in oklab, var(--background) 15%, transparent) 42%, var(--background) 100%)",
        }}
      />
      <div className="shell relative flex min-h-[86vh] flex-col justify-end pb-20 pt-40 md:pb-28">
        <FadeUp>
          <span className="eyebrow">{eyebrow}</span>
        </FadeUp>
        <FadeUp delay={0.08}>
          <h1 className="display-xl mt-6 max-w-[16ch]">{title}</h1>
        </FadeUp>
        <GoldRule className="mt-10 w-40" />
        <FadeUp delay={0.16}>
          <p className="body-lg mt-8 max-w-xl">{copy}</p>
        </FadeUp>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Section -- */

export function SectionHead({
  eyebrow,
  title,
  copy,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <FadeUp>
        <span className="eyebrow">{eyebrow}</span>
      </FadeUp>
      <FadeUp delay={0.06}>
        <h2 className="display-lg mt-5">{title}</h2>
      </FadeUp>
      {copy && (
        <FadeUp delay={0.12}>
          <p className="body-lg mt-6">{copy}</p>
        </FadeUp>
      )}
      <GoldRule className={`mt-8 w-28 ${align === "center" ? "mx-auto" : ""}`} />
    </div>
  );
}

/* --------------------------------------------------------------- Grids -- */

export function CategoryGrid({
  items,
}: {
  items: { title: string; image: string; alt: string; copy?: string }[];
}) {
  return (
    <div className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, i) => (
        <FadeUp key={item.title + i} delay={(i % 4) * 0.06}>
          <article className="group h-full bg-background p-4" data-cursor="EXPLORE">
            <RevealImage
              src={item.image}
              alt={item.alt}
              className="aspect-[4/5] w-full"
              imgClassName="transition-transform duration-[1.4s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.06]"
            />
            <h3 className="display-md mt-5 text-[1.15rem]">{item.title}</h3>
            {item.copy && <p className="body-lg mt-2 text-sm">{item.copy}</p>}
          </article>
        </FadeUp>
      ))}
    </div>
  );
}

export function EditorialSplit({
  eyebrow,
  title,
  copy,
  bullets,
  image,
  alt,
  reverse = false,
  cta,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  bullets?: string[];
  image: string;
  alt: string;
  reverse?: boolean;
  cta?: { label: string; to: string };
}) {
  return (
    <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
      <RevealImage
        src={image}
        alt={alt}
        parallax={5}
        className={`aspect-[4/5] w-full ${reverse ? "md:order-2" : ""}`}
      />
      <div className={reverse ? "md:order-1" : ""}>
        <FadeUp>
          <span className="eyebrow">{eyebrow}</span>
        </FadeUp>
        <FadeUp delay={0.06}>
          <h2 className="display-lg mt-5">{title}</h2>
        </FadeUp>
        <GoldRule className="mt-7 w-24" />
        <FadeUp delay={0.12}>
          <p className="body-lg mt-7">{copy}</p>
        </FadeUp>
        {bullets && (
          <ul className="mt-8 space-y-3">
            {bullets.map((b, i) => (
              <FadeUp as="li" key={b} delay={0.16 + i * 0.05} className="flex gap-4 text-sm text-muted">
                <span className="mt-2 h-px w-6 shrink-0 bg-gold" />
                {b}
              </FadeUp>
            ))}
          </ul>
        )}
        {cta && (
          <FadeUp delay={0.24}>
            <div className="mt-10">
              <Magnetic>
                <Link to={cta.to} className="btn-nuova">
                  {cta.label}
                </Link>
              </Magnetic>
            </div>
          </FadeUp>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------- Process -- */

export function ProcessList() {
  return (
    <ol className="mt-16 border-t border-line">
      {processSteps.map((s, i) => (
        <FadeUp as="li" key={s.n} delay={i * 0.05}>
          <div className="group grid items-baseline gap-3 border-b border-line py-8 md:grid-cols-[6rem_1fr_1.2fr] md:gap-10 md:py-10">
            <span className="text-[0.7rem] tracking-[0.28em] text-gold">{s.n}</span>
            <h3 className="display-md transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-x-2">
              {s.title}
            </h3>
            <p className="body-lg text-sm">{s.copy}</p>
          </div>
        </FadeUp>
      ))}
    </ol>
  );
}

/* ----------------------------------------------------------- Materials -- */

const presets: Record<string, { color: string; roughness: number; metalness: number }> = {
  "Natural Oak": { color: "#C9A87C", roughness: 0.62, metalness: 0 },
  "Ivory Bouclé": { color: "#EFE8DD", roughness: 0.95, metalness: 0 },
  "Warm Stone": { color: "#D6CEC0", roughness: 0.55, metalness: 0.05 },
  "Champagne Metal": { color: "#D6AF69", roughness: 0.18, metalness: 1 },
  Walnut: { color: "#3A2418", roughness: 0.5, metalness: 0.02 },
  "Black Leather": { color: "#141414", roughness: 0.68, metalness: 0.02 },
  "Smoked Glass": { color: "#22262A", roughness: 0.1, metalness: 0.4 },
  Bronze: { color: "#A97835", roughness: 0.28, metalness: 1 },
  "Brushed Gold": { color: "#C99A4B", roughness: 0.32, metalness: 1 },
};

export function MaterialStudio({
  materials,
}: {
  materials: { name: string; hex: string }[];
}) {
  const [active, setActive] = useState(materials[0]?.name ?? "Walnut");
  const preset = presets[active] ?? presets["Walnut"]!;

  return (
    <div className="grid items-center gap-12 md:grid-cols-[1.1fr_1fr] md:gap-20">
      <div
        className="relative aspect-square w-full overflow-hidden bg-surface"
        data-cursor="ROTATE"
      >
        <Suspense fallback={<div className="h-full w-full animate-pulse bg-surface-2" />}>
          <MaterialObject preset={preset} />
        </Suspense>
        <span className="pointer-events-none absolute bottom-5 left-5 text-[0.62rem] uppercase tracking-[0.24em] text-muted">
          Drag your pointer — {active}
        </span>
      </div>
      <div>
        <SectionHead
          eyebrow="Materials"
          title="Selected by hand, finished by craft."
          copy="Every NUOVA piece begins with the material. Explore the palette in three dimensions."
        />
        <div className="mt-10 flex flex-wrap gap-3">
          {materials.map((m) => (
            <button
              key={m.name}
              type="button"
              onClick={() => setActive(m.name)}
              className="flex items-center gap-3 border px-4 py-3 text-[0.65rem] uppercase tracking-[0.2em] transition-colors duration-500"
              style={{
                borderColor: active === m.name ? "var(--gold)" : "var(--line)",
                color: active === m.name ? "var(--gold)" : "var(--muted)",
              }}
            >
              <span className="h-4 w-4 rounded-full" style={{ backgroundColor: m.hex }} />
              {m.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------- CTA bar -- */

export function CtaBand({
  title,
  copy,
  label = "Book a consultation",
  to = "/contact",
}: {
  title: string;
  copy?: string;
  label?: string;
  to?: string;
}) {
  return (
    <section data-world="dark" className="bg-background text-foreground">
      <div className="shell py-24 text-center md:py-32">
        <FadeUp>
          <h2 className="display-lg mx-auto max-w-[18ch]">{title}</h2>
        </FadeUp>
        {copy && (
          <FadeUp delay={0.08}>
            <p className="body-lg mx-auto mt-6 max-w-xl">{copy}</p>
          </FadeUp>
        )}
        <GoldRule className="mx-auto mt-10 w-32" />
        <FadeUp delay={0.16}>
          <div className="mt-10">
            <Magnetic>
              <Link to={to} className="btn-nuova">
                {label}
              </Link>
            </Magnetic>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
