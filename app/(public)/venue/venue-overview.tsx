import Link from "next/link";
import { Fragment } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Building2,
  MapPin,
  Navigation,
  TrainFront,
} from "lucide-react";
import ScrollVelocity from "@/app/components/ui/ScroolVelocity";
import TechText from "@/app/components/ui/TextTech";
import BrandText from "@/app/components/ui/BrandText";
import { VenueReveal } from "./venue-subnav";

const venuePages = [
  {
    number: "01",
    title: "Arrive at Z Fest",
    description:
      "Venue details, entry steps, and everything to prepare before you arrive.",
    href: "/venue/arrival",
    icon: MapPin,
  },
  {
    number: "02",
    title: "Find Your Way",
    description: "Compare ways to travel and plan your journey to the festival.",
    href: "/venue/getting-there",
    icon: Navigation,
  },
  {
    number: "03",
    title: "Explore the Map",
    description:
      "See the festival entrance layout and find the gate for your ticket.",
    href: "/venue/map",
    icon: MapPin,
  },
  {
    number: "04",
    title: "Stay Nearby",
    description:
      "Plan where to stay and what to check before booking your trip.",
    href: "/venue/stay-nearby",
    icon: Building2,
  },
];

export default function VenueOverview() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="relative isolate grid min-h-[calc(100svh-5rem)] overflow-hidden bg-[#080706] px-6 pb-14 pt-28 text-white md:px-10 md:pb-16 md:pt-32 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_72%_42%,rgba(245,158,11,0.23),transparent_34%),radial-gradient(ellipse_at_12%_85%,rgba(180,83,9,0.18),transparent_30%),linear-gradient(115deg,#080706_25%,#120d07_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]"
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl lg:col-span-2 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-4">
          <div className="relative z-10">
            <div className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.35em] text-amber-300">
              <span className="h-px w-8 bg-amber-300" />
              The Venue · <BrandText text="Z Fest 2026" tone="on-dark" />
            </div>
            <div className="mt-10 max-w-6xl">
              <TechText
                text="GET HERE."
                fontWeight={600}
                fontSize={190}
                reveal="letter"
                dashLength={4}
                dashGap={2}
                specks={15}
                color="#ffffff"
                accentColor="#fcd34d"
                letterSpacing={-0.05}
                reach={240}
                softness={0.7}
                strokeWidth={1.5}
                speed={1}
                lineStyle="dashed"
                selection
                labels
                draggable
                sweep
                className="min-h-[0.82em] drop-shadow-[0_8px_35px_rgba(255,255,255,0.1)]"
              />
              <TechText
                text="GET IN THERE"
                fontWeight={600}
                fontSize={190}
                reveal="letter"
                dashLength={4}
                dashGap={2}
                specks={15}
                color="#ffffff"
                accentColor="#fcd34d"
                letterSpacing={-0.05}
                reach={240}
                softness={0.7}
                strokeWidth={1.5}
                speed={1}
                lineStyle="dashed"
                selection
                labels
                draggable
                sweep={false}
                className="-mt-2 min-h-[0.82em] drop-shadow-[0_8px_35px_rgba(255,255,255,0.1)]"
              />
            </div>
            <div className="mt-8 flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between lg:justify-start lg:gap-12">
              <p className="max-w-md text-sm leading-7 text-white/60 md:text-base">
                Plan your journey, choose the right entrance, and get ready for
                your days at <BrandText text="Z Fest" tone="on-dark" />.
              </p>
              <Link
                href="#venue-guides"
                className="group inline-flex shrink-0 items-center gap-3 self-start text-[10px] font-medium uppercase tracking-[0.2em] text-white"
              >
                Explore venue guides
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 transition-all duration-300 group-hover:border-amber-300 group-hover:bg-amber-300 group-hover:text-black">
                  <ArrowUpRight size={16} />
                </span>
              </Link>
            </div>
          </div>

          <div
            aria-label="Illustrative Z Fest entrance map"
            role="img"
            className="relative mx-auto mt-14 aspect-square w-full max-w-[390px] lg:mt-0 lg:max-w-[460px]"
          >
            <div className="absolute inset-[9%] rounded-full border border-amber-200/15" />
            <div className="absolute inset-[19%] animate-[spin_36s_linear_infinite] rounded-full border border-dashed border-amber-200/25" />
            <div className="absolute inset-[29%] rounded-full border border-white/10" />
            <div className="absolute inset-[9%] animate-[spin_24s_linear_infinite]">
              <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-amber-300 shadow-[0_0_24px_8px_rgba(252,211,77,0.4)]" />
            </div>
            <div className="absolute inset-[20%] animate-[spin_30s_linear_infinite_reverse]">
              <span className="absolute bottom-[8%] right-[8%] h-2 w-2 rounded-full bg-white shadow-[0_0_18px_6px_rgba(255,255,255,0.2)]" />
            </div>
            <div className="absolute inset-[30%] flex flex-col items-center justify-center border border-amber-200/30 bg-black/40 text-center backdrop-blur-sm">
              <span className="text-[8px] uppercase tracking-[0.3em] text-white/40">
                12—14 December
              </span>
              <span className="mt-3 text-2xl font-semibold tracking-[-0.06em] md:text-3xl">
                <BrandText text="Z FEST" tone="on-dark" />
              </span>
              <span className="mt-1 text-[8px] uppercase tracking-[0.3em] text-amber-300">
                Jakarta · 2026
              </span>
            </div>
            <span className="absolute left-[3%] top-[34%] text-[8px] uppercase tracking-[0.22em] text-white/45">
              Gate A
            </span>
            <span className="absolute right-[1%] top-[57%] text-[8px] uppercase tracking-[0.22em] text-white/45">
              Gate B
            </span>
            <span className="absolute left-[43%] top-[1%] text-[8px] uppercase tracking-[0.22em] text-amber-200/75">
              Main entrance
            </span>
            <span className="absolute bottom-[7%] left-[27%] text-[8px] uppercase tracking-[0.22em] text-white/35">
              Illustrative venue guide
            </span>
            <div className="absolute left-1/2 top-0 h-[30%] w-px origin-bottom -translate-x-1/2 bg-gradient-to-t from-amber-300/70 to-transparent" />
            <div className="absolute bottom-0 left-1/2 h-[30%] w-px -translate-x-1/2 bg-gradient-to-b from-white/25 to-transparent" />
          </div>

          <a
            href="#venue-guides"
            className="mt-10 flex items-center gap-3 text-[9px] uppercase tracking-[0.25em] text-white/35 lg:absolute lg:bottom-7 lg:left-0 lg:mt-0"
          >
            <span className="flex h-8 w-8 animate-bounce items-center justify-center rounded-full border border-white/20">
              <ArrowDown size={13} />
            </span>
            Explore The Venue
          </a>
        </div>
      </section>

      <section
        aria-label="Festival highlights"
        className="overflow-hidden border-y border-black/10 bg-white py-7 md:py-9"
      >
        <div className="space-y-1">
          <ScrollVelocity
            texts={["ARRIVE EARLY — STAY LATE — MAKE IT COUNT —"]}
            velocity={3}
            direction="left"
            numCopies={8}
            className="text-3xl font-medium uppercase leading-none tracking-[-0.04em] text-black md:text-5xl lg:text-6xl"
          />
          <ScrollVelocity
            texts={[
              <Fragment key="venue-brand-marquee">
                <BrandText text="Z FEST" tone="on-dark" /> — 12—14 DECEMBER —
                JAKARTA —
              </Fragment>,
            ]}
            velocity={3}
            direction="right"
            numCopies={8}
            className="text-3xl font-medium uppercase leading-none tracking-[-0.04em] text-amber-600 md:text-5xl lg:text-6xl"
          />
        </div>
      </section>

      <section
        id="venue-guides"
        className="scroll-mt-20 px-6 py-20 md:px-10 md:py-28 lg:px-16"
      >
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <VenueReveal>
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-black/40">
              Your visit
            </p>
            <h2 className="mt-4 text-4xl font-medium tracking-[-0.06em] md:text-6xl">
              PICK YOUR GUIDE.
            </h2>
          </VenueReveal>
          <VenueReveal
            delay={0.1}
            className="max-w-md text-sm leading-6 text-black/50"
          >
            Each guide has its own page, so you can go straight to the details
            that matter to you.
          </VenueReveal>
        </div>

        <div className="grid border-t border-black/10 md:grid-cols-2">
          {venuePages.map(({ number, title, description, href, icon: Icon }) => (
            <VenueReveal
              key={href}
              delay={Number(number) * 0.06}
              className="border-b border-black/10 md:even:border-l md:even:pl-7"
            >
              <Link
                href={href}
                className="group block py-7 transition-colors duration-300 hover:bg-black/[0.02] md:py-9"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.2em] text-amber-600">
                    {number}
                  </span>
                  <Icon
                    size={20}
                    strokeWidth={1.3}
                    className="text-black/40 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-amber-600"
                  />
                </div>
                <h3 className="mt-8 text-2xl font-medium tracking-[-0.03em] md:text-3xl">
                  <BrandText text={title} tone="on-dark" />
                </h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-black/50">
                  {description}
                </p>
                <span className="mt-7 inline-flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.2em]">
                  Open guide <ArrowUpRight size={14} strokeWidth={1.3} />
                </span>
              </Link>
            </VenueReveal>
          ))}
        </div>

        <VenueReveal className="mt-14 flex items-start gap-4 border-t border-black/10 pt-7">
          <TrainFront
            size={19}
            strokeWidth={1.3}
            className="mt-0.5 shrink-0"
          />
          <p className="max-w-2xl text-sm leading-6 text-black/50">
            The venue is in Jakarta, Indonesia. Check each guide for the
            information relevant to your visit and keep an eye on official
            announcements for final event details.
          </p>
        </VenueReveal>
      </section>
    </main>
  );
}
