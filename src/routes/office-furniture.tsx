import { createFileRoute } from "@tanstack/react-router";
import { darkMaterials, executiveCollections, img } from "@/data/nuova";
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

export const Route = createFileRoute("/office-furniture")({
  head: () => ({
    meta: [
      { title: "Office Furniture — NUOVA Executive Collection" },
      {
        name: "description",
        content:
          "Executive desks, leather seating, boardrooms and workstations in black oak, bronze and smoked glass. Dark, architectural workplace furniture.",
      },
      { property: "og:title", content: "Office Furniture — NUOVA" },
      {
        property: "og:description",
        content: "Executive desks, chairs and boardrooms in black oak, bronze and leather.",
      },
    ],
  }),
  component: OfficeFurniture,
});

function OfficeFurniture() {
  usePageWorld("dark");
  return (
    <div data-world="dark" className="bg-background text-foreground">
      <PageHero
        eyebrow="Office Furniture"
        title={<>Authority, built in shadow.</>}
        copy="Executive environments in black oak, bronze and full-grain leather — furniture that reads as architecture rather than office equipment."
        image={img.heroDark}
        alt="Dark executive office with walnut panelling and skyline view"
      />

      <section className="shell py-24 md:py-32">
        <SectionHead
          eyebrow="Collections"
          title="Eight executive programmes."
          copy="Specify a single chairman's suite or an entire floor from one coordinated system."
        />
        <div className="mt-16">
          <CategoryGrid items={executiveCollections} />
        </div>
      </section>

      <section className="bg-surface">
        <div className="shell py-24 md:py-32">
          <EditorialSplit
            eyebrow="Executive suite"
            title="The desk as a statement of intent."
            copy="Monolithic tops, concealed cable management, bronze inlay and grain-matched veneer. Every executive piece is drawn to the room it will occupy."
            bullets={[
              "Desks up to 4m in a single sequence",
              "Integrated power, data and screen lift",
              "Ergonomic seating in full-grain leather",
              "Matched credenzas, storage and lounge",
            ]}
            image={img.execDesk}
            alt="Black oak executive desk with bronze inlay"
            cta={{ label: "Request the office catalogue", to: "/contact" }}
          />
        </div>
      </section>

      <section className="shell py-24 md:py-32">
        <MaterialStudio materials={darkMaterials} />
      </section>

      <section className="shell pb-24 md:pb-32">
        <SectionHead eyebrow="Process" title="Specification to installed floor." />
        <ProcessList />
      </section>

      <CtaBand
        title="Build an office with presence."
        copy="Share your floor plan and headcount — we'll return a full specification."
        label="Start the specification"
      />
    </div>
  );
}
