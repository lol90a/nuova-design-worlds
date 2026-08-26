import { createFileRoute } from "@tanstack/react-router";
import { img, lightMaterials } from "@/data/nuova";
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

export const Route = createFileRoute("/home-furniture")({
  head: () => ({
    meta: [
      { title: "Home Furniture — NUOVA Residential Collection" },
      {
        name: "description",
        content:
          "Sculptural sofas, dining tables and bedroom pieces in oak, bouclé and stone. Bespoke residential furniture by the NUOVA atelier.",
      },
      { property: "og:title", content: "Home Furniture — NUOVA" },
      {
        property: "og:description",
        content: "Bespoke residential furniture in oak, bouclé, travertine and champagne metal.",
      },
    ],
  }),
  component: HomeFurniture,
});

const rooms = [
  { title: "Living Room", image: img.heroLight, alt: "Ivory bouclé sofa in a bright living room", copy: "Modular seating, coffee tables and lounge chairs." },
  { title: "Dining", image: img.dining, alt: "Sculptural stone dining table with alabaster pendants", copy: "Stone and oak tables with tailored dining chairs." },
  { title: "Bedroom", image: img.bedroom, alt: "Principal bedroom with tall upholstered headboard", copy: "Beds, headboard walls and bedside joinery." },
  { title: "Bespoke Joinery", image: img.craft, alt: "Craftsman shaping a walnut frame", copy: "Wardrobes, libraries and wall panelling." },
];

function HomeFurniture() {
  usePageWorld("light");
  return (
    <>
      <PageHero
        eyebrow="Home Furniture"
        title={<>Quiet luxury, sized to your rooms.</>}
        copy="Residential furniture designed around light, proportion and the way you actually live. Every piece is produced to your dimensions."
        image={img.heroLight}
        alt="Luxury living room in ivory and travertine"
      />

      <section className="shell py-24 md:py-32">
        <SectionHead
          eyebrow="Room by room"
          title="A complete residential programme."
          copy="We furnish whole homes, not single items — so materials, tones and proportions resolve across every room."
        />
        <div className="mt-16">
          <CategoryGrid items={rooms} />
        </div>
      </section>

      <section className="bg-surface">
        <div className="shell py-24 md:py-32">
          <EditorialSplit
            eyebrow="Bespoke"
            title="Made to the millimetre."
            copy="Standard sizes rarely suit good architecture. We adjust depth, height, seat firmness, veneer direction and stitch pitch until the piece belongs to the room."
            bullets={[
              "Custom dimensions and finishes on every model",
              "Fabric, leather and stone selected with you",
              "Technical drawings before production",
              "Delivery, installation and final styling",
            ]}
            image={img.dining}
            alt="Dining room with alabaster lighting and stone table"
            cta={{ label: "Start a project", to: "/contact" }}
          />
        </div>
      </section>

      <section className="shell py-24 md:py-32">
        <MaterialStudio materials={lightMaterials} />
      </section>

      <section className="shell pb-24 md:pb-32">
        <SectionHead eyebrow="Process" title="How a home comes together." />
        <ProcessList />
      </section>

      <CtaBand
        title="Design your home with NUOVA."
        copy="Book a consultation at our showroom or on site."
      />
    </>
  );
}
