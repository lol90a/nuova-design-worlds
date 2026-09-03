import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { img, projects } from "@/data/nuova";
import { FadeUp, GoldRule, RevealImage } from "@/components/nuova/motion";
import { CtaBand, PageHero, SectionHead } from "@/components/nuova/sections";
import { usePageWorld } from "@/components/nuova/world";

const filters = ["All", "Residential", "Hospitality", "Office", "Corporate"] as const;

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — NUOVA Furniture Case Studies" },
      {
        name: "description",
        content:
          "Selected NUOVA projects: private villas, hotel suite programmes, executive offices and corporate boardrooms across Egypt and the region.",
      },
      { property: "og:title", content: "Projects — NUOVA" },
      {
        property: "og:description",
        content: "Villas, hotels, executive offices and boardrooms furnished by NUOVA.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  usePageWorld("light");
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div data-world="light" className="bg-background text-foreground">
      <PageHero
        eyebrow="Projects"
        title={<>Rooms we were trusted with.</>}
        copy="A selection of residential, hospitality and corporate interiors delivered from first sketch to final styling."
        image={img.projectVilla}
        alt="Double height villa living room in travertine and cream"
      />

      <section className="shell py-24 md:py-32">
        <SectionHead
          eyebrow="Selected work"
          title="Case studies."
          copy="Each project below is a complete furniture programme — designed, manufactured and installed by NUOVA."
        />

        <div className="mt-12 flex flex-wrap gap-3">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className="border px-5 py-3 text-[0.65rem] uppercase tracking-[0.22em] transition-colors duration-500"
              style={{
                borderColor: filter === f ? "var(--gold)" : "var(--line)",
                color: filter === f ? "var(--gold)" : "var(--muted)",
              }}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-14 grid gap-x-10 gap-y-16 md:grid-cols-2">
          {visible.map((p, i) => (
            <FadeUp key={p.slug} delay={(i % 2) * 0.08}>
              <article className="group" data-cursor="VIEW">
                <Link to="/projects/$slug" params={{ slug: p.slug }} className="block">
                  <RevealImage
                    src={p.image}
                    alt={p.alt}
                    className="aspect-[4/3] w-full"
                    imgClassName="transition-transform duration-[1.4s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.05]"
                  />
                  <div className="mt-6 flex items-baseline justify-between gap-6">
                    <h3 className="display-md text-[1.4rem]">{p.title}</h3>
                    <span className="text-[0.62rem] uppercase tracking-[0.24em] text-gold">
                      {p.category}
                    </span>
                  </div>
                  <GoldRule className="mt-5 w-20" />
                  <p className="body-lg mt-5 text-sm">{p.scope}</p>
                  <p className="mt-2 text-[0.68rem] uppercase tracking-[0.22em] text-muted">
                    {p.location}
                  </p>
                </Link>
              </article>
            </FadeUp>
          ))}
        </div>
      </section>

      <CtaBand
        title="Your project could be next."
        copy="Tell us about the space, the timeline and the ambition."
        label="Start a project"
      />
    </div>
  );
}
