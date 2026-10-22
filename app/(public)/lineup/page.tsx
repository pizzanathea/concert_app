"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import BrandText from "@/app/components/ui/BrandText";
import ScrambledText from "@/app/components/ui/ScrambledText";

const lineupDays = [
  {
    id: 1,
    weekday: "FRIDAY",
    date: "12 DEC",
    artists: ["Jon Batiste"],
  },
  {
    id: 2,
    weekday: "SATURDAY",
    date: "13 DEC",
    artists: ["Ella Mai", "The 1975"],
  },
  {
    id: 3,
    weekday: "SUNDAY",
    date: "14 DEC",
    artists: ["wave to earth"],
  },
] as const;

export default function LineupPage() {
  const [activeDay, setActiveDay] = useState(1);
  const currentDay = lineupDays.find((day) => day.id === activeDay)!;

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f5f0] text-black">
      <section className="relative isolate flex min-h-[68vh] flex-col justify-end overflow-hidden bg-[#080706] px-6 pb-14 pt-32 text-white md:min-h-[72vh] md:px-10 md:pb-20 lg:px-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_78%_38%,rgba(245,158,11,0.2),transparent_35%),radial-gradient(ellipse_at_12%_90%,rgba(180,83,9,0.15),transparent_42%),linear-gradient(115deg,#080706_25%,#120d07_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-[18%] h-72 w-72 rounded-full bg-amber-300/[0.08] blur-[90px] md:right-[12%] md:top-[10%] md:h-[28rem] md:w-[28rem]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-8 top-[33%] h-32 w-56 rotate-[-28deg] rounded-[45%] bg-orange-500/[0.12] blur-[55px] md:right-[17%] md:top-[27%] md:h-52 md:w-80"
        />

        <div className="relative mx-auto w-full max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.35em] text-amber-300"
          >
            <span className="h-px w-8 bg-amber-300" />
            <BrandText text="Z FEST 2026" tone="on-dark" />
            <span>/ ARTISTS LINEUP</span>
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 42 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 max-w-5xl text-[19vw] font-black uppercase leading-[0.77] tracking-[-0.085em] sm:text-[16vw] md:text-[13vw] lg:text-[11vw]"
          >
            SOUND
            <br />
            <span className="ml-[8vw] text-amber-400">IN MOTION.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"
          >
            <p className="max-w-md text-sm leading-7 text-white/55 md:text-base">
              Three days, a different rhythm every day. Choose a date and meet
              the artists taking the stage.
            </p>
            <span className="text-[9px] font-medium uppercase tracking-[0.28em] text-white/35">
              12—14 December · Jakarta
            </span>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-24 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.3em] text-amber-700">
                Find your day
              </p>
              <h2 className="text-3xl font-semibold uppercase tracking-[-0.06em] md:text-5xl">
                Choose a date.
              </h2>
            </div>
            <p className="text-[9px] font-medium uppercase tracking-[0.24em] text-black/40">
              2026 festival schedule
            </p>
          </div>

          <div
            role="group"
            aria-label="Choose a festival day"
            className="grid grid-cols-3 gap-2 sm:gap-4"
          >
            {lineupDays.map((day) => {
              const isActive = activeDay === day.id;

              return (
                <button
                  key={day.id}
                  type="button"
                  onClick={() => setActiveDay(day.id)}
                  aria-pressed={isActive}
                  className={`group relative min-h-28 overflow-hidden rounded-2xl px-3 py-5 text-left transition-all duration-300 sm:min-h-36 sm:px-7 sm:py-7 ${
                    isActive
                      ? "bg-black text-white shadow-[0_18px_45px_rgba(0,0,0,0.14)]"
                      : "bg-white/70 text-black/55 hover:-translate-y-1 hover:bg-white hover:text-black"
                  }`}
                >
                  <span
                    className={`block text-[8px] font-semibold uppercase tracking-[0.2em] sm:text-[10px] sm:tracking-[0.28em] ${
                      isActive ? "text-amber-300" : "text-black/40"
                    }`}
                  >
                    {day.weekday}
                  </span>
                  <span className="mt-2 block text-2xl font-black tracking-[-0.06em] sm:mt-3 sm:text-4xl">
                    {day.date}
                  </span>
                  {isActive && (
                    <motion.span
                      layoutId="lineup-active-day"
                      className="pointer-events-none absolute -bottom-10 -right-8 h-28 w-28 rounded-full bg-amber-400/20 blur-2xl"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-8 flex items-center justify-between">
            <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-black/40">
              {currentDay.weekday} · {currentDay.date} 2026
            </p>
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/40">
              {String(currentDay.artists.length).padStart(2, "0")} ARTIST
              {currentDay.artists.length === 1 ? "" : "S"}
            </p>
          </div>

          <motion.div
            key={currentDay.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28 }}
            className="mt-2"
          >
            {currentDay.artists.map((artist, index) => (
              <motion.div
                key={`${currentDay.id}-${artist}`}
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08, duration: 0.35 }}
                className={`group relative flex min-h-36 items-center gap-4 overflow-hidden rounded-2xl px-5 py-7 sm:min-h-48 sm:gap-8 sm:px-10 sm:py-10 ${
                  index % 2 === 0 ? "bg-white/70" : "bg-[#efebe2]"
                }`}
              >
                <span className="relative z-10 w-8 shrink-0 self-start pt-2 text-[9px] font-semibold tracking-[0.18em] text-amber-700 sm:w-12 sm:pt-4 sm:text-xs">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="relative z-10 min-w-0 flex-1 text-[clamp(1.9rem,7vw,5.5rem)] font-black uppercase leading-[0.9] tracking-[-0.075em] transition-transform duration-300 group-hover:translate-x-2">
                  <ScrambledText
                    className="inline-block"
                    effect="scramble"
                    radius={110}
                    strength={1}
                    trail={0.25}
                    duration={0.35}
                    speed={1}
                    scrambleChars=".:"
                    scrambleColor="#d97706"
                    clickBurst
                    intro
                  >
                    {artist}
                  </ScrambledText>
                </h3>
                <span
                  aria-hidden="true"
                  className="relative z-10 h-2 w-2 shrink-0 rounded-full bg-amber-400 transition-shadow duration-300 group-hover:shadow-[0_0_18px_rgba(251,191,36,0.8)] sm:h-3 sm:w-3"
                />
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-10 top-1/2 h-40 w-56 -translate-y-1/2 rounded-[45%] blur-[55px] ${
                    index % 2 === 0 ? "bg-amber-300/20" : "bg-orange-400/15"
                  }`}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
