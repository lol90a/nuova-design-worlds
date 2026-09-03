import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { projects } from "@/data/nuova";
import { FadeUp, GoldRule, RevealImage } from "@/components/nuova/motion";
import { CtaBand, PageHero } from "@/components/nuova/sections";
import { usePageWorld } from "@/components/nuova/world";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project not found — NUOVA" }, { name: "robots", content: "noindex" }],
      };
    }
    const { project } = loaderData;
    const title = `${project.title} — NUOVA Project`;
    const description = `${project.scope}. ${project.location}. Materials: ${project.materials}.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: ProjectNotFound,
  component: ProjectDetail,
});

function ProjectNotFound() {
  return (
    <div className="shell flex min-h-screen flex-col items-center justify-center text-center">
      <h1 className="display-lg">This project isn't available.</h1>
      <GoldRule className="mt-8 w-24" />
      <Link to="/projects" className="btn-nuova mt-10">
        Back to projects
      </Link>
    </div>
  );
}

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  usePageWorld(project.world);

  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <div data-world={project.world} className="bg-background text-foreground">
      <PageHero
        eyebrow={project.category}
        title={<>{project.title}</>}
        copy={project.scope}
        image={project.image}
        alt={project.alt}
      />

      <section className="shell py-20 md:py-28">
        <dl className="grid gap-10 border-y border-line py-10 sm:grid-cols-3">
          {[
            { k: "Location", v: project.location },
            { k: "Scope", v: project.scope },
            { k: "Materials", v: project.materials },
          ].map((row) => (
            <FadeUp key={row.k}>
              <dt className="eyebrow">{row.k}</dt>
              <dd className="body-lg mt-4 text-sm">{row.v}</dd>
            </FadeUp>
          ))}
        </dl>
      </section>

      <section className="shell pb-8">
        <div className="grid gap-14 md:grid-cols-2 md:gap-20">
          {project.story.map((s, i) => (
            <FadeUp key={s.heading} delay={(i % 2) * 0.06}>
              <h2 className="display-md text-[1.4rem]">{s.heading}</h2>
              <GoldRule className="mt-5 w-16" />
              <p className="body-lg mt-5 text-sm">{s.copy}</p>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="shell py-20 md:py-28">
        <div className="grid gap-6 md:grid-cols-3">
          {project.gallery.map((g, i) => (
            <RevealImage
              key={g.src + i}
              src={g.src}
              alt={g.alt}
              parallax={4}
              className="aspect-[3/4] w-full"
            />
          ))}
        </div>
      </section>

      <section className="shell pb-24 md:pb-32">
        <h2 className="display-md">More projects</h2>
        <GoldRule className="mt-6 w-20" />
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {others.map((p) => (
            <Link
              key={p.slug}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="group block"
              data-cursor="VIEW"
            >
              <RevealImage
                src={p.image}
                alt={p.alt}
                className="aspect-[4/3] w-full"
                imgClassName="transition-transform duration-[1.4s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.05]"
              />
              <h3 className="display-md mt-5 text-[1.15rem]">{p.title}</h3>
              <p className="mt-2 text-[0.65rem] uppercase tracking-[0.22em] text-muted">
                {p.location}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand
        title="Let's design yours."
        copy="Share your drawings and we'll propose a complete furniture programme."
        label="Book a consultation"
      />
    </div>
  );
}
