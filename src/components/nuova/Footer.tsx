import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

const columns = [
  {
    title: "Products",
    links: [
      { label: "Home Furniture", to: "/home-furniture" },
      { label: "Hotel Furniture", to: "/hotel-furniture" },
      { label: "Office Furniture", to: "/office-furniture" },
      { label: "Company Furniture", to: "/corporate-furniture" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Interior Consultation", to: "/contact" },
      { label: "Custom Furniture", to: "/about" },
      { label: "Hotel Projects", to: "/hotel-furniture" },
      { label: "Corporate Projects", to: "/corporate-furniture" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About NUOVA", to: "/about" },
      { label: "Projects", to: "/projects" },
      { label: "Materials", to: "/about" },
      { label: "Contact", to: "/contact" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer data-world="dark" className="bg-background text-foreground">
      <div className="shell py-20 md:py-28">
        <div className="grid gap-14 md:grid-cols-[1.4fr_repeat(3,1fr)] md:gap-10">
          <div className="max-w-xs">
            <Logo />
            <p className="body-lg mt-6 text-sm">
              Luxury furniture for homes, hotels, offices and corporate environments.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="eyebrow" style={{ fontFamily: "var(--font-sans)" }}>
                {col.title}
              </h3>
              <ul className="mt-6 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="link-underline text-sm text-muted transition-colors hover:text-foreground">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 border-t border-line pt-10 md:grid-cols-2">
          <div>
            <h3 className="eyebrow" style={{ fontFamily: "var(--font-sans)" }}>
              Contact
            </h3>
            <ul className="mt-6 space-y-2 text-sm text-muted">
              <li>
                <a href="tel:+201000000000" className="link-underline hover:text-foreground">
                  +20 100 000 0000
                </a>
              </li>
              <li>
                <a href="mailto:studio@nuova.com" className="link-underline hover:text-foreground">
                  studio@nuova.com
                </a>
              </li>
              <li>90th Street, New Cairo — Egypt</li>
            </ul>
          </div>
          <div className="md:text-right">
            <h3 className="eyebrow" style={{ fontFamily: "var(--font-sans)" }}>
              Follow
            </h3>
            <ul className="mt-6 flex gap-6 text-sm text-muted md:justify-end">
              {["Instagram", "Pinterest", "LinkedIn"].map((s) => (
                <li key={s}>
                  <a href="#" className="link-underline hover:text-foreground">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rule-gold mt-14" />
        <div className="mt-6 flex flex-col gap-3 text-[0.7rem] uppercase tracking-[0.2em] text-muted md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} NUOVA — All Rights Reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="link-underline">
              Privacy Policy
            </a>
            <a href="#" className="link-underline">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
