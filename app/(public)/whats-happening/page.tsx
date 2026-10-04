"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  MapPin,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const days = [
  { id: 1, day: "FRI", date: "12 DEC", fullDate: "12 DECEMBER 2026" },
  { id: 2, day: "SAT", date: "13 DEC", fullDate: "13 DECEMBER 2026" },
  { id: 3, day: "SUN", date: "14 DEC", fullDate: "14 DECEMBER 2026" },
] as const;

const schedules = {
  1: [
    {
      time: "17:00",
      stage: "MAIN STAGE",
      title: "THE OPENING ACT",
      end: "18:00",
      image:
        "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=900&q=85",
    },
    {
      time: "18:30",
      stage: "SUNSET STAGE",
      title: "FIRST LIGHT",
      end: "19:30",
      image:
        "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=85",
    },
    {
      time: "20:00",
      stage: "MAIN STAGE",
      title: "Z FEST LIVE",
      end: "21:15",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=85",
    },
    {
      time: "21:45",
      stage: "JAZZ STAGE",
      title: "MIDNIGHT SESSION",
      end: "23:00",
      image:
        "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=900&q=85",
    },
  ],
  2: [
    {
      time: "15:30",
      stage: "COMMUNITY",
      title: "CREATIVE TALK",
      end: "16:30",
      image:
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=900&q=85",
    },
    {
      time: "17:00",
      stage: "SUNSET STAGE",
      title: "GOLDEN HOUR",
      end: "18:00",
      image:
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=900&q=85",
    },
    {
      time: "19:00",
      stage: "MAIN STAGE",
      title: "SATURDAY LIVE",
      end: "20:30",
      image:
        "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=900&q=85",
    },
    {
      time: "21:00",
      stage: "MAIN STAGE",
      title: "SPECIAL GUEST",
      end: "23:00",
      image:
        "https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?auto=format&fit=crop&w=900&q=85",
    },
  ],
  3: [
    {
      time: "16:00",
      stage: "COMMUNITY",
      title: "THE LAST SESSION",
      end: "17:00",
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85",
    },
    {
      time: "17:30",
      stage: "JAZZ STAGE",
      title: "SUNDAY SUNSET",
      end: "18:45",
      image:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=85",
    },
    {
      time: "19:30",
      stage: "SUNSET STAGE",
      title: "ONE MORE SONG",
      end: "20:45",
      image:
        "https://images.unsplash.com/photo-1524650359799-842906ca1c06?auto=format&fit=crop&w=900&q=85",
    },
    {
      time: "21:15",
      stage: "MAIN STAGE",
      title: "Z FEST FINALE",
      end: "23:00",
      image:
        "https://images.unsplash.com/photo-1472653431158-6364773b2a56?auto=format&fit=crop&w=900&q=85",
    },
  ],
} as const;

const stages = [
  "ALL",
  "MAIN STAGE",
  "SUNSET STAGE",
  "JAZZ STAGE",
  "COMMUNITY",
] as const;

type DayId = (typeof days)[number]["id"];
type Stage = (typeof stages)[number];

export default function ExperiencePage() {
  const [activeDay, setActiveDay] = useState<DayId>(1);
  const [activeStage, setActiveStage] = useState<Stage>("ALL");
  const [hovered, setHovered] = useState<number | null>(null);

  const currentDay = days.find((day) => day.id === activeDay)!;
  const currentSchedule = schedules[activeDay].filter(
    (item) => activeStage === "ALL" || item.stage === activeStage,
  );

  return (
    <main className="min-h-screen overflow-hidden bg-white text-black">
      {/* HERO */}
      <section className="relative flex min-h-screen flex-col justify-end px-6 pb-16 pt-32 md:px-10 md:pb-20 lg:px-16">
        <div className="pointer-events-none absolute right-[-10%] top-[10%] h-[520px] w-[520px] rounded-full bg-amber-400/[0.07] blur-[170px]" />
        <div className="pointer-events-none absolute left-[-10%] top-[42%] h-[350px] w-[350px] rounded-full bg-amber-400/[0.05] blur-[140px]" />

        <div className="relative z-10 mx-auto w-full max-w-[1500px]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-7 text-xs font-bold uppercase tracking-[0.35em] text-black/45"
          >
            Z FEST 2026 / THE EXPERIENCE
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-6xl text-[17vw] font-black leading-[0.78] tracking-[-0.075em] md:text-[13vw] lg:text-[11.5vw]"
          >
            WHAT&apos;S
            <br />
            <span className="ml-[8vw]">HAPPENING</span>
          </motion.h1>

          <div className="mt-12 flex flex-col justify-between gap-8 border-t border-black/15 pt-6 md:flex-row md:items-end">
            <p className="max-w-md text-sm font-medium leading-7 text-black/60 md:text-base">
              Three days. Different stages. Endless moments. Explore the full Z
              Fest schedule and find the moment that belongs to you.
            </p>
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em]">
              <span>Scroll to explore</span>
              <ArrowDown size={16} strokeWidth={2.5} />
            </div>
          </div>
        </div>
      </section>

      {/* SNAPSHOT */}
      <section className="px-6 py-24 md:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-12 flex items-end justify-between border-b border-black/15 pb-5">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/45">
              Festival snapshot
            </p>
            <p className="hidden text-xs font-bold uppercase tracking-[0.25em] md:block">
              ZF / 26
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              ["03", "DAYS"],
              ["12–14", "DECEMBER"],
              ["05", "STAGES"],
              ["JKT", "JAKARTA"],
            ].map(([value, label], index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.08 }}
                className="border-b border-black/15 py-7 pr-5 md:border-b-0 md:border-r md:py-3 md:pr-8 md:last:border-r-0"
              >
                <p className="text-4xl font-black tracking-[-0.05em] md:text-6xl lg:text-7xl">
                  {value}
                </p>
                <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.28em] text-black/45 md:text-xs">
                  {label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section className="px-6 pb-28 md:px-10 lg:px-16 lg:pb-40">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-black/45">
                Plan your day
              </p>
              <h2 className="text-5xl font-black tracking-[-0.06em] md:text-7xl lg:text-8xl">
                THE
                <br />
                SCHEDULE
              </h2>
            </div>

            <div className="flex max-w-2xl flex-wrap border-l border-black/15 pl-5">
              {stages.map((stage) => (
                <button
                  key={stage}
                  onClick={() => setActiveStage(stage)}
                  className={`mr-6 border-b py-3 text-[10px] font-bold uppercase tracking-[0.22em] transition-all duration-300 ${
                    activeStage === stage
                      ? "border-amber-500 text-black"
                      : "border-transparent text-black/35 hover:text-black"
                  }`}
                >
                  {stage}
                </button>
              ))}
            </div>
          </div>

          {/* Day selector */}
          <div className="mb-14 grid grid-cols-3 border-y border-black/15">
            {days.map((day) => (
              <button
                key={day.id}
                onClick={() => setActiveDay(day.id)}
                className={`group relative px-4 py-7 text-left transition-all duration-500 md:px-8 md:py-10 ${
                  activeDay === day.id
                    ? "bg-black text-white"
                    : "hover:bg-black/[0.035]"
                }`}
              >
                <span className="block text-4xl font-black tracking-[-0.06em] md:text-6xl">
                  {String(day.id).padStart(2, "0")}
                </span>
                <span className="mt-3 block text-[10px] font-bold uppercase tracking-[0.25em] opacity-60">
                  {day.day} / {day.date}
                </span>
                {activeDay === day.id && (
                  <motion.span
                    layoutId="day-line"
                    className="absolute bottom-0 left-0 h-1 w-full bg-amber-400"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="mb-7 flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-black/45">
              {currentDay.fullDate}
            </p>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/35">
              {currentSchedule.length} moments
            </p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeDay}-${activeStage}`}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.35 }}
            >
              {currentSchedule.map((item, index) => (
                <motion.div
                  key={`${item.time}-${item.title}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06 }}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                  className="group relative grid grid-cols-[72px_1fr_auto] gap-5 border-t border-black/15 py-8 md:grid-cols-[130px_1fr_90px] md:gap-8 md:py-10"
                >
                  <div>
                    <p className="text-xl font-black tracking-[-0.04em] md:text-3xl">
                      {item.time}
                    </p>
                    <div className="mt-3 h-px w-8 bg-amber-500 transition-all duration-300 group-hover:w-14" />
                  </div>

                  <div className="relative min-w-0">
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-black/40">
                      {item.stage}
                    </p>
                    <h3 className="text-2xl font-black uppercase tracking-[-0.045em] transition-transform duration-500 group-hover:translate-x-2 md:text-5xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-xs font-medium uppercase tracking-[0.15em] text-black/45">
                      {item.time} — {item.end}
                    </p>
                  </div>

                  <div className="flex items-center justify-end">
                    <motion.div
                      animate={{ x: hovered === index ? 6 : 0 }}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-black/15 transition-colors duration-300 group-hover:border-black group-hover:bg-black group-hover:text-white md:h-16 md:w-16"
                    >
                      <ArrowUpRight size={20} strokeWidth={1.8} />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {hovered === index && (
                      <motion.img
                        src={item.image}
                        alt=""
                        initial={{ opacity: 0, scale: 0.85, rotate: -5, y: 20 }}
                        animate={{ opacity: 1, scale: 1, rotate: -4, y: 0 }}
                        exit={{ opacity: 0, scale: 0.85, rotate: 3, y: 15 }}
                        transition={{ duration: 0.3 }}
                        className="pointer-events-none absolute right-[9%] top-1/2 z-20 hidden h-44 w-32 -translate-y-1/2 object-cover shadow-2xl md:block lg:h-56 lg:w-40"
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* VENUE */}
      <section className="bg-black px-6 py-28 text-white md:px-10 lg:px-16 lg:py-40">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-white/40">
                Where it happens
              </p>
              <h2 className="text-6xl font-black uppercase leading-[0.85] tracking-[-0.07em] md:text-8xl lg:text-[9vw]">
                JAKARTA
                <br />
                INTERNATIONAL
                <br />
                EXPO
              </h2>
              <div className="mt-10 flex items-start gap-3 text-sm font-medium leading-7 text-white/60">
                <MapPin size={17} className="mt-1 shrink-0 text-amber-400" />
                <p>Jl. Benyamin Sueb No. 1, Kemayoran, Jakarta.</p>
              </div>
              <Link
                href="#map"
                className="group mt-8 inline-flex items-center gap-4 border-b border-white/25 pb-3 text-xs font-bold uppercase tracking-[0.25em] transition-colors hover:border-amber-400 hover:text-amber-400"
              >
                Explore the venue
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div
              className="relative min-h-[430px] overflow-hidden bg-white/[0.05]"
              id="map"
            >
              <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:55px_55px]" />
              <div className="absolute left-[47%] top-[22%] h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_0_10px_rgba(251,191,36,0.12)]" />
              <div className="absolute left-[22%] top-[52%] h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_0_10px_rgba(251,191,36,0.12)]" />
              <div className="absolute left-[70%] top-[55%] h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_0_10px_rgba(251,191,36,0.12)]" />
              <div className="absolute left-[48%] top-[76%] h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_0_10px_rgba(251,191,36,0.12)]" />

              <p className="absolute left-[51%] top-[17%] text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
                Main Stage
              </p>
              <p className="absolute left-[25%] top-[47%] text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
                Sunset Stage
              </p>
              <p className="absolute left-[73%] top-[50%] text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
                Jazz Stage
              </p>
              <p className="absolute left-[51%] top-[81%] text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
                Entrance
              </p>

              <div className="absolute bottom-6 left-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                Festival map / 2026
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="relative overflow-hidden px-6 py-32 md:px-10 lg:px-16 lg:py-44">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400/[0.08] blur-[170px]" />
        <div className="relative z-10 mx-auto max-w-[1500px] text-center">
          <p className="mb-8 text-xs font-bold uppercase tracking-[0.35em] text-black/40">
            Save the moment
          </p>
          <h2 className="text-[18vw] font-black leading-[0.78] tracking-[-0.08em] md:text-[13vw] lg:text-[11vw]">
            12 — 14
            <br />
            DECEMBER
          </h2>
          <p className="mx-auto mt-10 max-w-lg text-sm font-medium leading-7 text-black/55 md:text-base">
            Three days in Jakarta. Music, people, places and moments waiting to
            become part of your story.
          </p>
          <Link
            href="/tickets"
            className="group mt-10 inline-flex items-center gap-5 border-b border-black pb-3 text-xs font-bold uppercase tracking-[0.28em]"
          >
            Get your tickets
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>

      {/* BACK TO TOP */}
      <div className="flex justify-center pb-20">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex flex-col items-center gap-5"
        >
          <motion.span whileHover={{ y: -5 }}>
            <ArrowUp size={22} strokeWidth={2.5} />
          </motion.span>
          <span className="text-xs font-bold uppercase tracking-[0.3em] transition-transform duration-300 group-hover:-translate-y-1">
            Back to top
          </span>
        </button>
      </div>
    </main>
  );
}
