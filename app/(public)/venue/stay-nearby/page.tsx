import Link from "next/link";
import { ArrowUpRight, BedDouble, CalendarDays, MapPin } from "lucide-react";
import { VenuePageIntro, VenueReveal, VenueSubnav } from "../venue-subnav";

const planningSteps = [
  {
    number: "01",
    title: "Wait for the confirmed venue",
    description:
      "The official venue address has not been published yet. Confirm the location before choosing accommodation.",
    icon: MapPin,
  },
  {
    number: "02",
    title: "Compare your options",
    description:
      "Look at hotels, guesthouses, and serviced stays near the confirmed venue, and compare cancellation terms.",
    icon: BedDouble,
  },
  {
    number: "03",
    title: "Match your event dates",
    description:
      "Z Fest takes place 12–14 December 2026. Check check-in and check-out times around your travel plans.",
    icon: CalendarDays,
  },
];

export default function StayNearbyPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <VenueSubnav current="/venue/stay-nearby" />
      <VenuePageIntro
        eyebrow="04 / Stay nearby · Z Fest 2026"
        title={
          <>
            MAKE ROOM
            <br />
            FOR THE MUSIC.
          </>
        }
        description="Planning to stay in Jakarta for the festival? Use this checklist to find accommodation that fits your trip and is convenient for the confirmed venue."
      />

      <section className="bg-[#f3f1ec] px-6 py-14 md:px-10 md:py-20 lg:px-16">
        <VenueReveal className="mx-auto max-w-7xl border-l-2 border-amber-500 pl-5 md:pl-8">
          <p className="text-[9px] font-medium uppercase tracking-[0.25em] text-amber-800">
            Important venue update
          </p>
          <h2 className="mt-3 text-xl font-medium md:text-2xl">
            Confirm the address before booking.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-black/55">
            Z Fest Grounds is listed in Jakarta, Indonesia, but a specific
            address has not yet been announced. We are not listing hotels or
            distances until the venue location is confirmed.
          </p>
        </VenueReveal>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-28 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <VenueReveal>
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-black/40">
              Plan your stay
            </p>
            <h2 className="mt-5 max-w-3xl text-4xl font-medium leading-[0.95] tracking-[-0.06em] md:text-6xl">
              THREE THINGS TO
              <br />
              CHECK BEFORE YOU BOOK.
            </h2>
          </VenueReveal>
          <div className="mt-12 grid border-t border-black/10 md:grid-cols-3">
            {planningSteps.map(({ number, title, description, icon: Icon }) => (
              <VenueReveal
                key={number}
                delay={Number(number) * 0.07}
                className="border-b border-black/10 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0"
              >
                <article className="h-full py-7 transition-colors hover:bg-black/[0.02]">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] tracking-[0.2em] text-amber-700">
                      {number}
                    </span>
                    <Icon
                      size={20}
                      strokeWidth={1.3}
                      className="text-black/40"
                    />
                  </div>
                  <h3 className="mt-8 text-xl font-medium">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-black/50">
                    {description}
                  </p>
                </article>
              </VenueReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-16 text-white md:px-10 md:py-20 lg:px-16">
        <VenueReveal className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-amber-300">
              Keep planning
            </p>
            <h2 className="mt-5 text-4xl font-medium tracking-[-0.06em] md:text-6xl">
              GETTING THERE?
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-white/50">
              Read the travel guide to compare transport options and prepare
              your journey to the event.
            </p>
          </div>
          <Link
            href="/venue/getting-there"
            className="group inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em]"
          >
            Open travel guide
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </VenueReveal>
      </section>
    </main>
  );
}
