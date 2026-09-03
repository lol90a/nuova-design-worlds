import { createFileRoute } from "@tanstack/react-router";
import { darkMaterials, img, projects } from "@/data/nuova";
import {
  CategoryGrid,
  CtaBand,
  EditorialSplit,
  MaterialStudio,
  PageHero,
  ProcessList,
  SectionHead,
} from "@/components/nuova/sections";
import { usePageWorld } from "@/components/nuova/world";

const corporateAreas = [
  { title: "Boardrooms", image: img.boardroom, alt: "Corporate boardroom with black stone table" },
  { title: "Reception & Lobby", image: img.reception, alt: "Corporate reception with backlit walnut wall" },
  { title: "Open Workspace", image: img.workspace, alt: "Corporate open workspace with walnut partitions" },
  { title: "Executive Floors", image: img.execDesk, alt: "Executive desk on a corporate floor" },
  { title: "Meeting Suites", image: img.execChair, alt: "Meeting suite with leather seating" },
  { title: "Staff Lounge", image: img.showroom, alt: "Corporate lounge furniture under spotlights" },
  { title: "Collaboration Zones", image: img.workspace, alt: "Collaboration zone with soft seating" },
  { title: "Storage Systems", image: img.execDesk, alt: "Corporate credenza storage in black oak" },
];

export const Route = createFileRoute("/corporate-furniture")({
  head: () => ({
    meta: [
      { title: "Corporate Furniture — NUOVA Company Interiors" },
      {
        name: "description",
        content:
          "Full-floor corporate furniture programmes: boardrooms, receptions, executive suites and workspaces delivered as one architectural language.",
      },
      { property: "og:title", content: "Corporate Furniture — NUOVA" },
      {
        property: "og:description",
        content: "Boardrooms, receptions and full-floor corporate furniture programmes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CorporateFurniture,
});

function CorporateFurniture() {
  usePageWorld("dark");
  const corporateProject = projects.find((p) => p.category === "Corporate");

  return (
    <div data-world="dark" className="bg-background text-foreground">
      <PageHero
        eyebrow="Company Furniture"
        title={<>One language, every floor.</>}
        copy="Corporate environments furnished end to end — from the lobby a client sees first to the boardroom where decisions are made."
        image={img.boardroom}
        alt="Dark corporate boardroom with black stone table and leather chairs"
      />

      <section className="shell py-24 md:py-32">
        <SectionHead
          eyebrow="Areas"
          title="Whole-building programmes."
          copy="We specify, manufacture and install every zone under one contract and one design language."
        />
        <div className="mt-16">
          <CategoryGrid items={corporateAreas} />
        </div>
      </section>

      <section className="bg-surface">
        <div className="shell py-24 md:py-32">
          <EditorialSplit
            eyebrow="Boardroom"
            title="The room where the company is decided."
            copy="Sixteen-metre stone surfaces, concealed technology, acoustic detailing and seating engineered for hours rather than minutes."
            bullets={[
              "Single-piece stone and veneer tables",
              "Integrated AV, power and cable routing",
              "Acoustic panelling and lighting coordination",
              "Matched reception and lounge families",
            ]}
            image={img.reception}
            alt="Corporate reception with backlit walnut wall"
            cta={{ label: "Discuss a corporate programme", to: "/contact" }}
          />
        </div>
      </section>

      {corporateProject && (
        <section className="shell py-24 md:py-32">
          <EditorialSplit
            reverse
            eyebrow="Case study"
            title={corporateProject.title}
            copy={corporateProject.story[0]?.copy ?? ""}
            bullets={[corporateProject.location, corporateProject.scope, corporateProject.materials]}
            image={corporateProject.image}
            alt={corporateProject.alt}
            cta={{ label: "View all projects", to: "/projects" }}
          />
        </section>
      )}

      <section className="bg-surface">
        <div className="shell py-24 md:py-32">
          <MaterialStudio materials={darkMaterials} />
        </div>
      </section>

      <section className="shell py-24 md:py-32">
        <SectionHead eyebrow="Process" title="From tender to handover." />
        <ProcessList />
      </section>

      <CtaBand
        title="Furnish the whole company."
        copy="Send us the floor plans and headcount — we return a phased specification and budget."
        label="Request a proposal"
      />
    </div>
  );
}
