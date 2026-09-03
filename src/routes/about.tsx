import { createFileRoute } from "@tanstack/react-router";
import { img, lightMaterials } from "@/data/nuova";
import { FadeUp, GoldRule } from "@/components/nuova/motion";
import {
  CtaBand,
  EditorialSplit,
  MaterialStudio,
  PageHero,
  ProcessList,
  SectionHead,
} from "@/components/nuova/sections";
import { usePageWorld } from "@/components/nuova/world";

const stats = [
  { n: "18", label: "Years of craft" },
  { n: "240+", label: "Projects delivered" },
  { n: "9", label: "Countries served" },
  { n: "60", label: "Artisans in atelier" },
];

const values = [
  {
    title: "Material honesty",
    copy: "Solid timber, natural stone and full-grain leather — finished to reveal what they are, not to disguise them.",
  },
  {
    title: "Architectural proportion",
    copy: "Every piece is drawn against the room it will live in, so furniture and architecture read as one decision.",
  },
  {
    title: "Made to last",
    copy: "Joinery, frames and upholstery built to survive decades of daily use, in homes and in 200-room hotels alike.",
  },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About NUOVA — Luxury Furniture Atelier" },
      {
        name: "description",
        content:
          "NUOVA is a luxury furniture atelier designing and manufacturing bespoke pieces for homes, hotels, offices and corporate interiors.",
      },
      { property: "og:title", content: "About NUOVA" },
      {
        property: "og:description",
        content: "A luxury furniture atelier built on material honesty and architectural proportion.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  usePageWorld("light");

  return (
    <div data-world="light" className="bg-background text-foreground">
      <PageHero
        eyebrow="About NUOVA"
        title={<>Furniture drawn like architecture.</>}
        copy="We design and manufacture complete furniture programmes — from a single commissioned table to an entire hotel."
        image={img.craft}
        alt="Craftsman assembling a walnut frame in the NUOVA atelier"
      />

      <section className="shell py-24 md:py-32">
        <div className="grid gap-14 md:grid-cols-[1fr_1.1fr] md:gap-20">
          <SectionHead
            eyebrow="The studio"
            title="One atelier, two worlds."
            copy="NUOVA works in two registers: the warm, daylight-led world of homes and hotels, and the dark, architectural world of offices and corporate interiors. Both share the same joinery, the same tolerances and the same obsession with material."
          />
          <FadeUp delay={0.1}>
            <div className="grid grid-cols-2 gap-x-10 gap-y-12">
              {stats.map((s) => (
                <div key={s.label}>
                  <span className="display-lg block text-[2.6rem]">{s.n}</span>
                  <GoldRule className="mt-4 w-12" />
                  <span className="mt-4 block text-[0.65rem] uppercase tracking-[0.22em] text-muted">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="bg-surface">
        <div className="shell py-24 md:py-32">
          <EditorialSplit
            eyebrow="The atelier"
            title="Made by hand, measured by machine."
            copy="Our workshop pairs traditional cabinetmaking with precision machining. Frames are dry-assembled and reviewed before a single finish is applied."
            bullets={[
              "In-house joinery, upholstery and finishing",
              "Grain-matched veneer sequencing",
              "Full-scale prototyping before production",
              "Contract-grade testing for hospitality",
            ]}
            image={img.showroom}
            alt="NUOVA showroom with furniture under directional lighting"
            cta={{ label: "Visit the showroom", to: "/contact" }}
          />
        </div>
      </section>

      <section className="shell py-24 md:py-32">
        <SectionHead eyebrow="Values" title="What we refuse to compromise." />
        <div className="mt-16 grid gap-px bg-line md:grid-cols-3">
          {values.map((v, i) => (
            <FadeUp key={v.title} delay={i * 0.07}>
              <div className="h-full bg-background p-10">
                <span className="text-[0.7rem] tracking-[0.28em] text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display-md mt-6 text-[1.3rem]">{v.title}</h3>
                <p className="body-lg mt-5 text-sm">{v.copy}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="bg-surface">
        <div className="shell py-24 md:py-32">
          <MaterialStudio materials={lightMaterials} />
        </div>
      </section>

      <section className="shell py-24 md:py-32">
        <SectionHead eyebrow="Process" title="How a NUOVA project runs." />
        <ProcessList />
      </section>

      <CtaBand
        title="Come and see the work."
        copy="Book a visit to the showroom or invite us to your site."
        label="Book a consultation"
      />
    </div>
  );
}
