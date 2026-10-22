import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { VenuePageIntro, VenueReveal, VenueSubnav } from "../venue-subnav";

const gates = [
  {
    gate: "Gate A",
    ticket: "General Admission",
    description: "For general festival ticket holders and standard admission.",
  },
  {
    gate: "Gate B",
    ticket: "VIP Entrance",
    description: "Dedicated entrance for VIP and selected premium ticket holders.",
  },
];

export default function VenueMapPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <VenueSubnav current="/venue/map" />
      <VenuePageIntro
        eyebrow="03 / Festival map · Z Fest 2026"
        title={<>ARRIVE AT<br />THE RIGHT PLACE.</>}
        description="Check the entrance guide before you set off. Use the gate assigned to your ticket and follow on-site signage and crew directions."
        dark
      />

      <section className="px-6 pb-20 md:px-10 md:pb-28 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <VenueReveal>
          <div
            role="img"
            aria-label="Illustrative festival layout showing the main entrance and Gates A and B around the Z Fest area"
            className="relative min-h-[420px] border border-white/15 md:min-h-[560px]"
          >
            <div className="absolute inset-6 md:inset-10">
              <div className="absolute left-1/2 top-1/2 h-40 w-56 -translate-x-1/2 -translate-y-1/2 border border-white/30 md:h-56 md:w-96">
                <div className="absolute inset-6 flex items-center justify-center border border-white/15 md:inset-8">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-white/50">Z Fest Area</span>
                </div>
              </div>
              <div className="absolute left-1/2 top-0 -translate-x-1/2 text-center">
                <span className="text-[9px] uppercase tracking-[0.25em] text-white/50">Main Entrance</span>
                <div className="mx-auto mt-3 h-10 w-px origin-top animate-pulse bg-amber-300" />
              </div>
              <span className="absolute bottom-0 left-0 text-[9px] uppercase tracking-[0.25em] text-white/50">Gate A</span>
              <span className="absolute bottom-0 right-0 text-[9px] uppercase tracking-[0.25em] text-white/50">Gate B</span>
            </div>
            <span className="absolute bottom-3 right-4 text-[8px] uppercase tracking-[0.18em] text-white/30">
              Illustrative guide · final map to be announced
            </span>
          </div>
          </VenueReveal>

          <div className="mt-12 grid border-t border-white/15 md:grid-cols-2">
            {gates.map(({ gate, ticket, description }) => (
              <VenueReveal
                key={gate}
                delay={gate === "Gate A" ? 0 : 0.12}
                className="border-b border-white/15 md:even:border-l md:even:pl-8"
              >
              <article className="py-7 transition-colors hover:bg-white/[0.03] md:py-9 md:pr-8">
                <p className="text-[9px] uppercase tracking-[0.25em] text-white/40">{gate}</p>
                <h2 className="mt-3 text-2xl font-medium">{ticket}</h2>
                <p className="mt-3 max-w-md text-sm leading-6 text-white/45">{description}</p>
              </article>
              </VenueReveal>
            ))}
          </div>

          <VenueReveal className="mt-10 flex flex-col justify-between gap-5 border-t border-white/15 pt-7 sm:flex-row sm:items-center">
            <p className="max-w-2xl text-sm leading-6 text-white/50">
              This is a general entrance guide, not a final site map. Check the
              official event updates for the confirmed layout and gate details.
            </p>
            <Link href="/venue/arrival" className="inline-flex shrink-0 items-center gap-2 text-[9px] uppercase tracking-[0.2em] hover:text-amber-300">
              Arrival guide <ArrowUpRight size={14} />
            </Link>
          </VenueReveal>
        </div>
      </section>
    </main>
  );
}
