"use client";

import { useState } from "react";
import {
  Bike,
  Car,
  Check,
  MapPin,
  TrainFront,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import ScrollVelocity from "@/app/components/ui/ScroolVelocity";
import { VenuePageIntro, VenueReveal } from "../venue-subnav";

const travelOptions = [
  {
    number: "01",
    title: "By car",
    shortTitle: "Drive",
    description:
      "Follow the official event route and use the designated festival parking area. Check parking availability before you leave.",
    note: "Parking details will be announced with the confirmed venue information.",
    icon: Car,
    color: "from-orange-300 to-amber-500",
  },
  {
    number: "02",
    title: "Ride-hailing",
    shortTitle: "Get dropped off",
    description:
      "Ask your driver to use the official festival drop-off point. Follow event signs and crew instructions when you arrive.",
    note: "Use only the event's designated pick-up and drop-off points.",
    icon: MapPin,
    color: "from-amber-200 to-yellow-500",
  },
  {
    number: "03",
    title: "Public transport",
    shortTitle: "Take transit",
    description:
      "Travel to the nearest available station, then follow official updates for connecting transport and the final approach.",
    note: "Station and shuttle information will be posted after the venue is confirmed.",
    icon: TrainFront,
    color: "from-yellow-200 to-orange-400",
  },
  {
    number: "04",
    title: "Bike or walk",
    shortTitle: "Walk or ride",
    description:
      "If you're staying nearby, check the recommended walking or cycling route and allow extra time to reach the entrance.",
    note: "Check local access and bike-parking guidance before event day.",
    icon: Bike,
    color: "from-orange-200 to-amber-400",
  },
];

const tips = [
  "Check your route and event travel updates before leaving.",
  "Allow extra time for traffic, transfers, and entrance queues.",
  "Save the venue address once it is published by the organizers.",
  "Plan your journey home before the final performance ends.",
];

export default function GettingTherePage() {
  const [selectedOption, setSelectedOption] = useState(0);
  const activeOption = travelOptions[selectedOption];
  const ActiveIcon = activeOption.icon;

  return (
    <main className="min-h-screen bg-white text-black">
      <VenuePageIntro
        eyebrow="02 / Getting there · Z Fest 2026"
        title={
          <>
            THE WAY THERE
            <br />
            IS PART OF IT.
          </>
        }
        description="Choose how you want to arrive. We’ll share the confirmed routes and travel details as soon as the venue information is announced."
      />

      <section className="bg-[#f3f1ec] px-6 py-14 text-black md:px-10 md:py-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-amber-700">
                Your journey, your way
              </p>
              <h2 className="mt-4 text-3xl font-medium tracking-[-0.05em] md:text-5xl">
                HOW WILL YOU GET HERE?
              </h2>
            </div>
            <p className="max-w-sm text-xs leading-6 text-black/45">
              Pick a travel style to see the details to keep in mind.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {travelOptions.map(({ title, shortTitle, icon: Icon }, index) => {
                const isActive = selectedOption === index;
                return (
                  <motion.button
                    key={title}
                    type="button"
                    onClick={() => setSelectedOption(index)}
                    whileHover={{ x: isActive ? 0 : 4 }}
                    whileTap={{ scale: 0.985 }}
                    className={`group relative flex min-h-24 items-center gap-4 overflow-hidden border p-4 text-left transition-colors md:p-5 ${
                      isActive
                        ? "border-black bg-black text-white"
                        : "border-black/10 bg-white text-black/70 hover:border-black/30"
                    }`}
                    aria-pressed={isActive}
                  >
                    <span className="text-[9px] tracking-[0.2em] opacity-50">
                      0{index + 1}
                    </span>
                    <Icon
                      size={21}
                      strokeWidth={1.4}
                      className={`shrink-0 ${isActive ? "text-amber-300" : "text-black/45"}`}
                    />
                    <span>
                      <span className="block text-[9px] uppercase tracking-[0.2em] opacity-60">
                        {shortTitle}
                      </span>
                      <span className="mt-1 block text-sm font-medium md:text-base">
                        {title}
                      </span>
                    </span>
                    {isActive && (
                      <motion.span
                        layoutId="travel-selected-indicator"
                        className="absolute inset-y-0 right-0 w-1 bg-amber-300"
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>

            <div className="relative flex min-h-[330px] flex-col justify-between overflow-hidden border border-black/10 bg-[#080706] p-6 text-white md:min-h-[410px] md:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:40px_40px]"
              />
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-300/10 blur-[90px]" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeOption.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.28 }}
                  className="relative z-10 flex h-full flex-1 flex-col"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-[9px] uppercase tracking-[0.25em] text-white/40">
                      Selected route · 0{selectedOption + 1}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-amber-300/35 text-amber-300">
                      <ActiveIcon size={21} strokeWidth={1.3} />
                    </div>
                  </div>
                  <h3 className="mt-12 text-3xl font-medium tracking-[-0.05em] md:text-5xl">
                    {activeOption.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/55">
                    {activeOption.description}
                  </p>
                  <div className="mt-auto border-t border-white/10 pt-5">
                    <p className="text-[9px] uppercase tracking-[0.2em] text-amber-300">
                      Keep in mind
                    </p>
                    <p className="mt-2 text-xs leading-6 text-white/45">
                      {activeOption.note}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
              <motion.div
                key={`route-${selectedOption}`}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className={`pointer-events-none absolute bottom-7 right-6 h-20 w-36 bg-gradient-to-r ${activeOption.color} opacity-20 blur-2xl`}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-black/10 bg-white py-5">
        <ScrollVelocity
          texts={["TAKE THE SCENIC ROUTE — MEET US AT Z FEST —"]}
          velocity={2.5}
          direction="left"
          numCopies={8}
          className="text-2xl font-medium uppercase leading-none tracking-[-0.04em] text-black/75 md:text-4xl"
        />
      </section>

      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <VenueReveal>
            <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-amber-700">
              Before you leave
            </p>
            <h2 className="mt-5 text-4xl font-medium leading-[0.95] tracking-[-0.06em] md:text-6xl">
              A LITTLE PREP
              <br />
              GOES A LONG WAY.
            </h2>
          </VenueReveal>
          <ol className="border-t border-black/10">
            {tips.map((tip, index) => (
              <VenueReveal key={tip} delay={index * 0.05}>
                <li className="group flex items-center gap-5 border-b border-black/10 py-5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/10 text-[9px] text-amber-700 transition-colors group-hover:border-amber-500 group-hover:bg-amber-500 group-hover:text-black">
                    0{index + 1}
                  </span>
                  <p className="text-sm leading-6 text-black/60">{tip}</p>
                  <Check
                    size={15}
                    className="ml-auto shrink-0 text-amber-700 opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </li>
              </VenueReveal>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
