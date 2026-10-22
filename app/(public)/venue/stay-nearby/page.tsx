"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BedDouble,
  CalendarDays,
  Check,
  MapPin,
  TrainFront,
} from "lucide-react";
import { VenuePageIntro, VenueReveal } from "../venue-subnav";
import BrandText from "@/app/components/ui/BrandText";

const planningTasks = [
  {
    id: "venue",
    title: "Wait for the confirmed venue",
    detail: "Confirm the address before choosing where to stay.",
    icon: MapPin,
  },
  {
    id: "stay",
    title: "Compare places to stay",
    detail: "Check location, cancellation policy, and check-in times.",
    icon: BedDouble,
  },
  {
    id: "transport",
    title: "Plan the trip to the festival",
    detail: "Look at transport options from your accommodation.",
    icon: TrainFront,
  },
];

const festivalDays = [
  { day: "12", label: "DAY ONE" },
  { day: "13", label: "DAY TWO" },
  { day: "14", label: "DAY THREE" },
];

export default function StayNearbyPage() {
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  const progress = Math.round(
    (completedTasks.length / planningTasks.length) * 100,
  );

  const toggleTask = (taskId: string) => {
    setCompletedTasks((current) =>
      current.includes(taskId)
        ? current.filter((item) => item !== taskId)
        : [...current, taskId],
    );
  };

  return (
    <main className="min-h-screen bg-[#f7f5f0] text-black">
      <VenuePageIntro
        eyebrow={
          <>
            04 / Stay nearby · <BrandText text="Z Fest 2026" />
          </>
        }
        title={
          <>
            MAKE A WEEKEND
            <br />
            OUT OF IT.
          </>
        }
        description="Give yourself time to settle in, find your way around, and enjoy every day of the festival. Start with a simple stay-planning checklist."
      />

      <section className="px-6 pb-16 md:px-10 md:pb-24 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <VenueReveal className="relative flex min-h-[360px] flex-col justify-between overflow-hidden bg-black p-6 text-white md:min-h-[430px] md:p-10">
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-amber-300/15 blur-[90px]"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-orange-700/20 blur-[80px]"
            />
            <div className="relative z-10 flex items-start justify-between">
              <div>
                <p className="text-[9px] uppercase tracking-[0.28em] text-amber-300">
                  Save the dates
                </p>
                <h2 className="mt-4 text-3xl font-medium tracking-[-0.05em] md:text-4xl">
                  YOUR FESTIVAL
                  <br />
                  WEEKEND.
                </h2>
              </div>
              <CalendarDays
                size={21}
                className="text-amber-200"
                strokeWidth={1.3}
              />
            </div>
            <div className="relative z-10">
              <div className="grid grid-cols-3 border-y border-white/15">
                {festivalDays.map(({ day, label }, index) => (
                  <motion.div
                    key={day}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.12, duration: 0.45 }}
                    className="border-r border-white/15 py-5 last:border-r-0"
                  >
                    <p className="text-[8px] tracking-[0.18em] text-white/40">
                      DEC
                    </p>
                    <p className="mt-1 text-4xl font-light tracking-[-0.06em] md:text-5xl">
                      {day}
                    </p>
                    <p className="mt-2 text-[7px] tracking-[0.16em] text-amber-200/65">
                      {label}
                    </p>
                  </motion.div>
                ))}
              </div>
              <p className="mt-4 text-[8px] uppercase tracking-[0.24em] text-white/35">
                12—14 December · Jakarta · 2026
              </p>
            </div>
          </VenueReveal>

          <VenueReveal
            delay={0.1}
            className="relative overflow-hidden border border-black/10 bg-white p-6 md:p-10"
          >
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
              <div>
                <p className="text-[9px] font-medium uppercase tracking-[0.28em] text-amber-800">
                  Your stay planner
                </p>
                <h2 className="mt-3 text-2xl font-medium tracking-[-0.04em] md:text-3xl">
                  Get the basics sorted.
                </h2>
              </div>
              <div className="relative flex h-16 w-16 shrink-0 items-center justify-center">
                <svg className="absolute inset-0 -rotate-90" viewBox="0 0 64 64">
                  <circle
                    cx="32"
                    cy="32"
                    r="27"
                    fill="none"
                    stroke="currentColor"
                    strokeOpacity="0.1"
                    strokeWidth="3"
                  />
                  <motion.circle
                    cx="32"
                    cy="32"
                    r="27"
                    fill="none"
                    stroke="#b45309"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray={Math.PI * 54}
                    initial={{ strokeDashoffset: Math.PI * 54 }}
                    animate={{
                      strokeDashoffset:
                        Math.PI * 54 * (1 - completedTasks.length / 3),
                    }}
                    transition={{ duration: 0.45 }}
                  />
                </svg>
                <span className="text-[9px] font-medium">{progress}%</span>
              </div>
            </div>

            <div className="mt-7 border-t border-black/10">
              {planningTasks.map(({ id, title, detail, icon: Icon }, index) => {
                const isComplete = completedTasks.includes(id);
                return (
                  <motion.button
                    key={id}
                    type="button"
                    onClick={() => toggleTask(id)}
                    whileTap={{ scale: 0.99 }}
                    className="group flex w-full items-center gap-4 border-b border-black/10 py-4 text-left"
                    aria-pressed={isComplete}
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors ${
                        isComplete
                          ? "border-amber-700 bg-amber-700 text-white"
                          : "border-black/10 text-black/45 group-hover:border-amber-700"
                      }`}
                    >
                      {isComplete ? (
                        <Check size={15} />
                      ) : (
                        <Icon size={16} strokeWidth={1.3} />
                      )}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span
                        className={`block text-sm font-medium transition-colors ${
                          isComplete ? "text-black/40 line-through" : ""
                        }`}
                      >
                        {title}
                      </span>
                      <span className="mt-1 block text-[10px] leading-5 text-black/45">
                        {detail}
                      </span>
                    </span>
                    <span className="text-[8px] tracking-[0.18em] text-black/30">
                      0{index + 1}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </VenueReveal>
        </div>
      </section>

      <section className="bg-[#eae6dc] px-6 py-14 md:px-10 md:py-20 lg:px-16">
        <VenueReveal className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.35fr_1fr]">
          <div>
            <p className="text-[9px] font-medium uppercase tracking-[0.28em] text-amber-800">
              Booking note
            </p>
            <MapPin
              size={24}
              strokeWidth={1.2}
              className="mt-5 text-amber-800"
            />
          </div>
          <div>
            <h2 className="max-w-2xl text-2xl font-medium leading-tight tracking-[-0.04em] md:text-4xl">
              Wait for the confirmed venue address before choosing a place to
              stay.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-black/55">
              The specific venue address has not been announced yet, so we’re
              not listing hotels or travel distances. Once the location is
              confirmed, compare nearby options and check cancellation terms.
            </p>
          </div>
        </VenueReveal>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 border-t border-black/10 pt-8 md:flex-row md:items-end">
          <VenueReveal>
            <p className="text-[9px] font-medium uppercase tracking-[0.28em] text-amber-800">
              Make the trip easy
            </p>
            <h2 className="mt-4 text-4xl font-medium tracking-[-0.06em] md:text-6xl">
              PLAN YOUR RIDE.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-6 text-black/50">
              Once your stay is picked, decide how you’ll get to and from the
              festival.
            </p>
          </VenueReveal>
          <Link
            href="/venue/getting-there"
            className="group inline-flex items-center gap-3 text-[9px] font-medium uppercase tracking-[0.2em]"
          >
            Open travel guide
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/20 transition-all group-hover:border-black group-hover:bg-black group-hover:text-white">
              <ArrowUpRight size={15} />
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
