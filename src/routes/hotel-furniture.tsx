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

export const Route = createFileRoute("/hotel-furniture")({
  head: () => ({
    meta: [
      { title: "Hotel Furniture — NUOVA Hospitality Programmes" },
      {
        name: "description",
        content:
          "Guest rooms, suites, lobbies and restaurants furnished as one coordinated hospitality programme, engineered for contract-grade wear.",
      },
      { property: "og:title", content: "Hotel Furniture — NUOVA" },
      {
        property: "og:description",
        content: "Contract-grade hospitality furniture, from 180-key room programmes to grand lobbies.",
      },
    ],
  }),
  component: HotelFurniture,
});

const areas = [
  { title: "Guest Rooms", image: img.hotelRoom, alt: "Luxury hotel suite bedroom at dusk", copy: "Beds, headboards, desks and casegoods." },
  { title: "Lobbies", image: img.hotelLobby, alt: "Grand hotel lobby with curved cream sofas", copy: "Curved lounge seating and reception joinery." },
  { title: "Restaurants", image: img.hotelRestaurant, alt: "Hotel restaurant with banquette seating", copy: "Banquettes, dining chairs and bar seating." },
  { title: "Suites", image: img.bedroom, alt: "Hotel suite with upholstered headboard", copy: "Signature suites with bespoke detailing." },
];

function HotelFurniture() {
  usePageWorld("light");
  return (
    <>
      <PageHero
        eyebrow="Hotel Furniture"
        title={<>Hospitality at residential softness.</>}
        copy="Complete FF&E programmes delivered at scale — consistent across every key, durable enough for daily turnover, warm enough to feel like a home."
        image={img.hotelLobby}
        alt="Grand hotel lobby with travertine columns"
      />

      <section className="shell py-24 md:py-32">
        <SectionHead
          eyebrow="Areas"
          title="Every space in the property."
          copy="One supplier, one material language, one delivery schedule across the whole hotel."
        />
        <div className="mt-16">
          <CategoryGrid items={areas} />
        </div>
      </section>

      <section className="bg-surface">
        <div className="shell py-24 md:py-32">
          <EditorialSplit
            eyebrow="Contract grade"
            title="Built for a thousand nights a year."
            copy="Hospitality furniture fails at the joints and the edges. We over-engineer both — reinforced frames, replaceable covers, sealed stone and tested foam densities."
            bullets={[
              "Prototype room approved before series production",
              "Fire-rated and contract-tested textiles",
              "Phased delivery aligned to floor handover",
              "Replacement parts held for five years",
            ]}
            image={img.hotelRoom}
            alt="Luxury hotel guest room"
            reverse
            cta={{ label: "Request the hotel deck", to: "/contact" }}
          />
        </div>
      </section>

      <section className="shell py-24 md:py-32">
        <MaterialStudio materials={lightMaterials} />
      </section>

      <section className="shell pb-24 md:pb-32">
        <SectionHead eyebrow="Process" title="From mock-up room to opening day." />
        <ProcessList />
      </section>

      <CtaBand
        title="Furnish your property with NUOVA."
        copy="Send us the key count and the opening date — we'll build the programme around it."
        label="Discuss your property"
      />
    </>
  );
}
