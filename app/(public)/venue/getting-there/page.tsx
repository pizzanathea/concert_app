import { Bike, Car, MapPin, TrainFront } from "lucide-react";
import { VenuePageIntro, VenueReveal, VenueSubnav } from "../venue-subnav";

const travelOptions = [
  {
    number: "01",
    title: "By car",
    description: "Follow the official event route and use the designated festival parking area. Check parking availability before you leave.",
    icon: Car,
  },
  {
    number: "02",
    title: "Ride-hailing",
    description: "Ask your driver to use the official festival drop-off point. Follow event signs and crew instructions when you arrive.",
    icon: MapPin,
  },
  {
    number: "03",
    title: "Public transport",
    description: "Travel to the nearest available station, then follow official updates for connecting transport and the final approach.",
    icon: TrainFront,
  },
  {
    number: "04",
    title: "Bike or walk",
    description: "If you're staying nearby, check the recommended walking or cycling route and allow extra time to reach the entrance.",
    icon: Bike,
  },
];

const tips = [
  "Check your route and event travel updates before leaving.",
  "Allow extra time for traffic, transfers, and entrance queues.",
  "Save the venue address once it is published by the organizers.",
  "Plan your journey home before the final performance ends.",
  "Use the official pick-up and drop-off points for ride-hailing.",
];

export default function GettingTherePage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <VenueSubnav current="/venue/getting-there" />
      <VenuePageIntro
        eyebrow="02 / Getting there · Z Fest 2026"
        title={<>CHOOSE YOUR<br />WAY HERE.</>}
        description="Pick the travel option that works for you and make a plan before event day. Final routes and transport details will be shared when confirmed."
      />

      <section className="bg-[#f3f1ec] px-6 py-16 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-black/40">Choose your way</p>
          <h2 className="mt-5 max-w-4xl text-4xl font-medium leading-[0.95] tracking-[-0.06em] md:text-7xl">
            HOW ARE YOU<br />GETTING HERE?
          </h2>
          <div className="mt-12 border-t border-black/15">
            {travelOptions.map(({ number, title, description, icon: Icon }) => (
              <VenueReveal key={number} delay={Number(number) * 0.05}>
              <article className="group flex gap-5 border-b border-black/15 py-7 transition-colors hover:bg-black/[0.02] md:gap-8 md:py-9">
                <span className="pt-1 text-[10px] tracking-[0.2em] text-amber-700">{number}</span>
                <div className="flex flex-1 flex-col justify-between gap-5 sm:flex-row sm:items-center">
                  <div>
                    <h3 className="text-2xl font-medium uppercase tracking-[-0.03em] md:text-4xl">{title}</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-black/50">{description}</p>
                  </div>
                  <Icon size={22} strokeWidth={1.3} className="shrink-0 text-black/50" />
                </div>
              </article>
              </VenueReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-28 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <VenueReveal>
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-black/40">Before you leave</p>
            <h2 className="mt-5 text-4xl font-medium leading-[0.95] tracking-[-0.06em] md:text-6xl">
              A LITTLE PREP<br />GOES A LONG WAY.
            </h2>
          </VenueReveal>
          <VenueReveal>
          <ol className="border-t border-black/10">
            {tips.map((tip, index) => (
              <li key={tip} className="flex gap-6 border-b border-black/10 py-5 transition-colors hover:bg-black/[0.02]">
                <span className="text-[9px] font-medium tracking-[0.2em] text-amber-700">0{index + 1}</span>
                <p className="text-sm leading-6 text-black/65 md:text-base">{tip}</p>
              </li>
            ))}
          </ol>
          </VenueReveal>
        </div>
      </section>
    </main>
  );
}
