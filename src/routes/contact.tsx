import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { img } from "@/data/nuova";
import { FadeUp, GoldRule, RevealImage } from "@/components/nuova/motion";
import { SectionHead } from "@/components/nuova/sections";
import { usePageWorld } from "@/components/nuova/world";

const interests = ["Home", "Hotel", "Office", "Corporate"] as const;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact NUOVA — Book a Furniture Consultation" },
      {
        name: "description",
        content:
          "Book a consultation with NUOVA for residential, hotel, office or corporate furniture. Showroom in New Cairo, projects across the region.",
      },
      { property: "og:title", content: "Contact NUOVA" },
      {
        property: "og:description",
        content: "Book a furniture consultation with the NUOVA studio in New Cairo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  usePageWorld("light");
  const [sent, setSent] = useState(false);
  const [interest, setInterest] = useState<string>("Home");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  const field =
    "mt-3 w-full border-b border-line bg-transparent pb-3 text-sm text-foreground outline-none transition-colors duration-500 placeholder:text-muted focus:border-gold";

  return (
    <div data-world="light" className="bg-background text-foreground">
      <section className="shell grid gap-16 pb-24 pt-40 md:grid-cols-2 md:gap-20 md:pb-32 md:pt-48">
        <div>
          <SectionHead
            eyebrow="Contact"
            title="Begin a conversation."
            copy="Tell us about the space, the timeline and the ambition. We reply to every enquiry within two working days."
          />

          <div className="mt-14 space-y-10">
            <div>
              <h3 className="eyebrow">Studio</h3>
              <p className="body-lg mt-4 text-sm">90th Street, New Cairo — Egypt</p>
              <p className="mt-1 text-sm text-muted">Sunday – Thursday, 10:00 – 19:00</p>
            </div>
            <div>
              <h3 className="eyebrow">Direct</h3>
              <p className="mt-4 text-sm">
                <a href="tel:+201000000000" className="link-underline hover:text-gold">
                  +20 100 000 0000
                </a>
              </p>
              <p className="mt-1 text-sm">
                <a href="mailto:studio@nuova.com" className="link-underline hover:text-gold">
                  studio@nuova.com
                </a>
              </p>
            </div>
          </div>

          <GoldRule className="mt-14 w-24" />
        </div>

        <FadeUp delay={0.08}>
          {sent ? (
            <div className="flex h-full flex-col justify-center border border-line p-10">
              <span className="eyebrow">Thank you</span>
              <h2 className="display-md mt-6">Your enquiry is with the studio.</h2>
              <GoldRule className="mt-6 w-20" />
              <p className="body-lg mt-6 text-sm">
                A member of the NUOVA team will be in touch within two working days.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="btn-ghost-nuova mt-10 self-start"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-10">
              <div>
                <label htmlFor="name" className="eyebrow">
                  Full name
                </label>
                <input id="name" name="name" required placeholder="Your name" className={field} />
              </div>
              <div className="grid gap-10 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="eyebrow">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className={field}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="eyebrow">
                    Phone
                  </label>
                  <input id="phone" name="phone" placeholder="+20 …" className={field} />
                </div>
              </div>

              <fieldset>
                <legend className="eyebrow">Interested in</legend>
                <div className="mt-4 flex flex-wrap gap-3">
                  {interests.map((i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setInterest(i)}
                      aria-pressed={interest === i}
                      className="border px-5 py-3 text-[0.65rem] uppercase tracking-[0.22em] transition-colors duration-500"
                      style={{
                        borderColor: interest === i ? "var(--gold)" : "var(--line)",
                        color: interest === i ? "var(--gold)" : "var(--muted)",
                      }}
                    >
                      {i}
                    </button>
                  ))}
                </div>
              </fieldset>

              <div>
                <label htmlFor="message" className="eyebrow">
                  Project details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Location, scope, timeline…"
                  className={field}
                />
              </div>

              <button type="submit" className="btn-nuova">
                Send enquiry
              </button>
            </form>
          )}
        </FadeUp>
      </section>

      <section className="shell pb-24 md:pb-32">
        <RevealImage
          src={img.showroom}
          alt="NUOVA showroom interior with furniture under directional lighting"
          parallax={5}
          className="aspect-[16/7] w-full"
        />
      </section>
    </div>
  );
}
