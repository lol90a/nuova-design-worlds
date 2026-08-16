import heroLight from "@/assets/hero-light.jpg";
import heroDark from "@/assets/hero-dark.jpg";
import bedroom from "@/assets/bedroom.jpg";
import dining from "@/assets/dining.jpg";
import hotelRoom from "@/assets/hotel-room.jpg";
import hotelLobby from "@/assets/hotel-lobby.jpg";
import hotelRestaurant from "@/assets/hotel-restaurant.jpg";
import boardroom from "@/assets/boardroom.jpg";
import execDesk from "@/assets/exec-desk.jpg";
import execChair from "@/assets/exec-chair.jpg";
import reception from "@/assets/reception.jpg";
import workspace from "@/assets/workspace.jpg";
import showroom from "@/assets/showroom.jpg";
import materials from "@/assets/materials.jpg";
import materialsDark from "@/assets/materials-dark.jpg";
import projectVilla from "@/assets/project-villa.jpg";
import craft from "@/assets/craft.jpg";

export const img = {
  heroLight,
  heroDark,
  bedroom,
  dining,
  hotelRoom,
  hotelLobby,
  hotelRestaurant,
  boardroom,
  execDesk,
  execChair,
  reception,
  workspace,
  showroom,
  materials,
  materialsDark,
  projectVilla,
  craft,
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Home Furniture", to: "/home-furniture" },
  { label: "Hotel", to: "/hotel-furniture" },
  { label: "Office", to: "/office-furniture" },
  { label: "Corporate", to: "/corporate-furniture" },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

export const collections = [
  {
    n: "01",
    title: "Home Furniture",
    to: "/home-furniture",
    world: "light" as const,
    image: heroLight,
    alt: "Ivory bouclé sofa and travertine table in a luxury living room",
    copy: "Sculptural seating, fine upholstery and natural materials for residential interiors.",
  },
  {
    n: "02",
    title: "Hotel Furniture",
    to: "/hotel-furniture",
    world: "light" as const,
    image: hotelLobby,
    alt: "Grand hotel lobby with curved cream sofas and travertine columns",
    copy: "Complete hospitality programmes, from guest rooms to grand lobbies.",
  },
  {
    n: "03",
    title: "Office Furniture",
    to: "/office-furniture",
    world: "dark" as const,
    image: heroDark,
    alt: "Dark executive office with walnut panelling and city skyline",
    copy: "Executive desks, seating and workplace systems in black, bronze and walnut.",
  },
  {
    n: "04",
    title: "Company Furniture",
    to: "/corporate-furniture",
    world: "dark" as const,
    image: boardroom,
    alt: "Dark corporate boardroom with black stone table and leather chairs",
    copy: "Corporate environments delivered as one architectural language.",
  },
];

export const executiveCollections = [
  { title: "Executive Desks", image: execDesk, alt: "Black oak executive desk with bronze inlay" },
  { title: "Executive Chairs", image: execChair, alt: "Black leather executive chair with bronze base" },
  { title: "Boardrooms", image: boardroom, alt: "Dark boardroom with long stone table" },
  { title: "Meeting Tables", image: workspace, alt: "Dark workplace with meeting pods" },
  { title: "Reception", image: reception, alt: "Dark corporate reception with backlit walnut wall" },
  { title: "Workstations", image: workspace, alt: "Rows of dark workstations with walnut partitions" },
  { title: "Storage", image: execDesk, alt: "Dark credenza storage detail in black oak" },
  { title: "Lounge Furniture", image: showroom, alt: "Dark showroom lounge furniture under spotlights" },
];

export const process = [
  { n: "01", title: "Brief & Planning", copy: "Programme, phasing and specification defined with your team." },
  { n: "02", title: "Space & Selection", copy: "Layouts, proportions and furniture selection per zone." },
  { n: "03", title: "Customization", copy: "Dimensions, finishes and details tailored to the architecture." },
  { n: "04", title: "Production", copy: "Manufactured in our atelier under controlled quality standards." },
  { n: "05", title: "Delivery & Setup", copy: "Logistics, installation and final styling on site." },
];

export const lightMaterials = [
  { name: "Natural Oak", hex: "#C9A87C", swatch: materials },
  { name: "Ivory Bouclé", hex: "#EFE8DD", swatch: materials },
  { name: "Warm Stone", hex: "#D6CEC0", swatch: materials },
  { name: "Champagne Metal", hex: "#D6AF69", swatch: materials },
  { name: "Walnut", hex: "#3A2418", swatch: materialsDark },
];

export const darkMaterials = [
  { name: "Walnut", hex: "#3A2418", swatch: materialsDark },
  { name: "Black Leather", hex: "#141414", swatch: materialsDark },
  { name: "Smoked Glass", hex: "#22262A", swatch: materialsDark },
  { name: "Bronze", hex: "#A97835", swatch: materialsDark },
  { name: "Brushed Gold", hex: "#C99A4B", swatch: materialsDark },
];

export type Project = {
  slug: string;
  title: string;
  location: string;
  category: "Residential" | "Hospitality" | "Office" | "Corporate";
  scope: string;
  materials: string;
  world: "light" | "dark";
  image: string;
  alt: string;
  gallery: { src: string; alt: string }[];
  story: { heading: string; copy: string }[];
};

export const projects: Project[] = [
  {
    slug: "luxury-villa-cairo",
    title: "Luxury Villa — Cairo",
    location: "New Cairo, Egypt",
    category: "Residential",
    scope: "Full furniture programme, living, dining and bedrooms",
    materials: "Travertine, light oak, ivory bouclé, champagne metal",
    world: "light",
    image: projectVilla,
    alt: "Double height villa living room in travertine and cream",
    gallery: [
      { src: heroLight, alt: "Villa living room with bouclé sofa" },
      { src: dining, alt: "Sculptural stone dining table with alabaster pendants" },
      { src: bedroom, alt: "Principal bedroom with upholstered headboard" },
    ],
    story: [
      { heading: "Project Introduction", copy: "A private villa organised around a double-height living volume, where daylight and stone set the tone for every furniture decision." },
      { heading: "Design Direction", copy: "Low horizons, soft radii and a restrained palette allow the architecture to remain the primary gesture." },
      { heading: "Materials & Finishes", copy: "Travertine, brushed champagne metal, light oak and ivory bouclé, selected for warmth and longevity." },
      { heading: "Furniture Selection", copy: "Modular seating, a monolithic stone table and tailored bedroom joinery, all produced to project dimensions." },
      { heading: "Final Interior", copy: "A calm, architectural home designed for daily living and effortless hosting." },
    ],
  },
  {
    slug: "executive-office-new-cairo",
    title: "Executive Office — New Cairo",
    location: "New Cairo, Egypt",
    category: "Office",
    scope: "Executive suite, meeting room and reception",
    materials: "Black oak, bronze, black leather, smoked glass",
    world: "dark",
    image: heroDark,
    alt: "Executive office with walnut panelling and skyline view",
    gallery: [
      { src: execDesk, alt: "Executive desk detail in black oak with bronze inlay" },
      { src: execChair, alt: "Black leather executive chair" },
      { src: reception, alt: "Dark reception with backlit walnut wall" },
    ],
    story: [
      { heading: "Project Introduction", copy: "A chairman's suite conceived as a single dark volume, lit only where presence is required." },
      { heading: "Design Direction", copy: "Authority expressed through proportion and shadow rather than ornament." },
      { heading: "Materials & Finishes", copy: "Black stained oak, bronze inlay, full-grain leather and smoked glass partitions." },
      { heading: "Furniture Selection", copy: "A custom 3.2m desk, lounge seating and integrated storage in a matched grain sequence." },
      { heading: "Final Interior", copy: "An executive environment that reads as architecture, not as office furniture." },
    ],
  },
  {
    slug: "hotel-suite-collection",
    title: "Hotel Suite Collection",
    location: "Sahl Hasheesh, Egypt",
    category: "Hospitality",
    scope: "180 guest rooms and suites",
    materials: "Oak, linen, warm stone, antique brass",
    world: "light",
    image: hotelRoom,
    alt: "Luxury hotel suite with city view at dusk",
    gallery: [
      { src: hotelRoom, alt: "Hotel suite bedroom" },
      { src: hotelLobby, alt: "Hotel lobby lounge" },
      { src: hotelRestaurant, alt: "Hotel restaurant banquette seating" },
    ],
    story: [
      { heading: "Project Introduction", copy: "A full guest-room programme engineered for hospitality wear without losing residential softness." },
      { heading: "Design Direction", copy: "Tailored upholstery, rounded edges and warm indirect light in every room typology." },
      { heading: "Materials & Finishes", copy: "Oak veneer, linen and wool blends, warm stone tops and antique brass detailing." },
      { heading: "Furniture Selection", copy: "Beds, headboards, desks, lounge chairs and casegoods produced as one coordinated set." },
      { heading: "Final Interior", copy: "Consistent five-star delivery across 180 keys." },
    ],
  },
  {
    slug: "corporate-headquarters",
    title: "Corporate Headquarters",
    location: "Cairo, Egypt",
    category: "Corporate",
    scope: "Four floors — workspace, meeting, reception, lounge",
    materials: "Walnut, graphite metal, leather, smoked glass",
    world: "dark",
    image: workspace,
    alt: "Dark corporate open workspace with walnut partitions",
    gallery: [
      { src: workspace, alt: "Open workspace" },
      { src: boardroom, alt: "Boardroom with stone table" },
      { src: reception, alt: "Corporate reception" },
    ],
    story: [
      { heading: "Project Introduction", copy: "A headquarters delivered floor by floor while the business remained operational." },
      { heading: "Design Direction", copy: "One material language from reception to workstation, scaled by seniority." },
      { heading: "Materials & Finishes", copy: "Walnut, graphite metal, leather and smoked glass." },
      { heading: "Furniture Selection", copy: "Benching systems, acoustic pods, boardroom and executive suites." },
      { heading: "Final Interior", copy: "A workplace that carries the brand without a single logo." },
    ],
  },
  {
    slug: "private-residence",
    title: "Private Residence",
    location: "Zamalek, Cairo",
    category: "Residential",
    scope: "Living, dining and principal bedroom",
    materials: "Walnut, cream wool, alabaster, brass",
    world: "light",
    image: bedroom,
    alt: "Principal bedroom with tall upholstered headboard",
    gallery: [
      { src: bedroom, alt: "Bedroom with warm lamps" },
      { src: dining, alt: "Dining room with alabaster lighting" },
      { src: craft, alt: "Craftsman assembling a walnut frame" },
    ],
    story: [
      { heading: "Project Introduction", copy: "A compact residence rebuilt around bespoke pieces sized to the millimetre." },
      { heading: "Design Direction", copy: "Quiet proportions and a single continuous tone across rooms." },
      { heading: "Materials & Finishes", copy: "Walnut, cream wool, alabaster and unlacquered brass." },
      { heading: "Furniture Selection", copy: "Bed, headboard wall, dining table and lounge seating." },
      { heading: "Final Interior", copy: "Intimate, warm and precisely tailored." },
    ],
  },
  {
    slug: "boardroom-project",
    title: "Boardroom Project",
    location: "Downtown Cairo",
    category: "Corporate",
    scope: "Boardroom and executive lounge",
    materials: "Black marble, walnut, leather, bronze",
    world: "dark",
    image: boardroom,
    alt: "Boardroom with long black marble table",
    gallery: [
      { src: boardroom, alt: "Boardroom table detail" },
      { src: execChair, alt: "Executive chair" },
      { src: showroom, alt: "Dark showroom lounge" },
    ],
    story: [
      { heading: "Project Introduction", copy: "A 16-seat boardroom with integrated technology concealed in stone." },
      { heading: "Design Direction", copy: "One uninterrupted surface, lit by a single architectural line." },
      { heading: "Materials & Finishes", copy: "Black marble, walnut, leather and bronze." },
      { heading: "Furniture Selection", copy: "Custom table, executive seating and credenza." },
      { heading: "Final Interior", copy: "A room built for decisions." },
    ],
  },
];
