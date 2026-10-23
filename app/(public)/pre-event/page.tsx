"use client";

import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  AudioLines,
  Headphones,
  MapPin,
  Mic2,
  Radio,
  Sparkles,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "@/app/components/ui/ScrollReveal";

const experiences = [
  {
    number: "01",
    type: "LISTEN",
    icon: Headphones,
    title: "The listening room",
    description:
      "A shared listening session for deep cuts, first loves, and the stories hiding between the notes. Bring a track suggestion; leave with a new favorite.",
    date: "07 NOV · 16:30—18:00",
    venue: "M Bloc Space",
    area: "Jakarta Selatan",
    prompts: ["Bring one song", "Hosted listening circle", "All ears welcome"],
    accent: "bg-amber-100",
  },
  {
    number: "02",
    type: "MAKE",
    icon: AudioLines,
    title: "Rhythm lab",
    description:
      "Turn everyday sounds into a beat. Make a loop with found objects, trade rhythms with someone new, then build one shared track together.",
    date: "14 NOV · 14:00—16:00",
    venue: "Taman Ismail Marzuki",
    area: "Jakarta Pusat",
    prompts: ["Hands-on beat making", "No experience needed", "Make it together"],
    accent: "bg-orange-100",
  },
  {
    number: "03",
    type: "WANDER",
    icon: Radio,
    title: "Jakarta, in stereo",
    description:
      "Take a slow soundwalk through the old city. Collect the little sounds people usually pass by, then bring them back for a spontaneous group listening.",
    date: "21 NOV · 07:00—09:00",
    venue: "Kota Tua",
    area: "Jakarta Barat",
    prompts: ["Guided city soundwalk", "Phone recorder is enough", "Morning pace"],
    accent: "bg-lime-100",
  },
  {
    number: "04",
    type: "PLAY",
    icon: Mic2,
    title: "Open circle",
    description:
      "A low-pressure mic, a loose house band, and room for a poem, a chorus, or a first-time performance. The crowd is part of the set.",
    date: "05 DEC · 16:30—19:00",
    venue: "Urban Forest Cipete",
    area: "Jakarta Selatan",
    prompts: ["Open mic", "Drop-in jam", "Cheer someone on"],
    accent: "bg-rose-100",
  },
] as const;

export default function PreEventPage() {
  const { scrollY } = useScroll();
  const backgroundTextX = useTransform(scrollY, [0, 1000], [0, -420]);

  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#17140f]">
      <section className="relative isolate flex min-h-[calc(100svh-5rem)] flex-col justify-between overflow-hidden bg-white px-6 pb-10 pt-20 text-[#17140f] md:px-10 md:pb-14 lg:px-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_76%_38%,rgba(245,158,11,0.09),transparent_32%),radial-gradient(ellipse_at_12%_85%,rgba(180,83,9,0.06),transparent_34%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-[18%] -z-10 h-72 w-72 rounded-full border border-amber-700/[0.08] md:right-[12%] md:h-[34rem] md:w-[34rem]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 top-[23%] -z-10 h-52 w-52 rounded-full border border-amber-700/[0.06] md:right-[16%] md:h-[26rem] md:w-[26rem]"
        />
        <motion.div
          aria-hidden="true"
          style={{ x: backgroundTextX }}
          className="pointer-events-none absolute left-[-12%] top-[26%] -z-10 w-max select-none whitespace-nowrap text-[31vw] font-black uppercase leading-none tracking-[-0.12em] text-black/[0.035] md:top-[18%] md:text-[23vw]"
        >
          Z FEST&nbsp;&nbsp;&nbsp;Z FEST&nbsp;&nbsp;&nbsp;Z FEST
        </motion.div>

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center py-16 md:py-20">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-7 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.32em] text-amber-700 md:text-[10px]"
          >
            <Sparkles size={14} strokeWidth={1.5} />
            Z Fest presents · Jakarta, 2026
          </motion.p>
          <ScrollReveal
            mode="scrub"
            splitBy="words"
            effect="rise"
            highlightColor="#d97706"
            stagger={0.08}
            duration={0.8}
            smoothing={0}
            baseOpacity={0.12}
            baseRotation={0}
            baseOffset={12}
            enableBlur
            blurStrength={3}
            rotationEnd="top bottom"
            wordAnimationEnd="bottom top+=25%"
            containerClassName="my-0 max-w-6xl"
            textClassName="!text-left !text-[19vw] !font-black uppercase !leading-[0.76] tracking-[-0.095em] sm:!text-[16vw] md:!text-[12vw] lg:!text-[10vw]"
          >
            BEFORE THE BEAT.
          </ScrollReveal>

          <div className="mt-10 flex flex-col justify-between gap-8 border-t border-black/15 pt-6 md:mt-14 md:flex-row md:items-end">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.65 }}
              className="max-w-lg"
            >
              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-amber-700">
                Road to Z Fest
              </p>
              <p className="mt-3 text-sm leading-7 text-black/60 md:text-base">
                Not just a countdown: listen closer, make some noise, wander
                the city, and meet the people who make a festival feel alive.
              </p>
            </motion.div>
            <motion.a
              href="#sessions"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.6 }}
              className="group inline-flex w-fit items-center gap-3 rounded-full border border-black/15 px-5 py-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-black/70 transition-colors hover:border-amber-600/60 hover:text-amber-800"
            >
              Explore the experiences
              <ArrowDown
                size={15}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </motion.a>
          </div>
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between border-t border-black/10 pt-4 text-[8px] font-medium uppercase tracking-[0.22em] text-black/40 sm:text-[9px]">
          <span>Four ways to join in</span>
          <span>November — December</span>
        </div>
      </section>

      <section
        id="sessions"
        className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end"
          >
            <div>
              <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.3em] text-amber-800">
                More than a warm-up
              </p>
              <h2 className="max-w-3xl text-5xl font-black uppercase leading-[0.86] tracking-[-0.075em] md:text-7xl lg:text-8xl">
                Pick your
                <br />
                <span className="text-black/35">side quest.</span>
              </h2>
            </div>
            <div className="max-w-xs border-l border-amber-600/50 pl-4 text-xs leading-6 text-black/55">
              Four ways to get close to the music before festival weekend.
              Come curious; leave with a story.
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;

              return (
              <motion.article
                key={experience.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative flex min-h-[25rem] flex-col overflow-hidden rounded-2xl border border-black/10 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-amber-700/25 hover:shadow-[0_24px_70px_rgba(55,38,13,0.09)] sm:p-8"
              >
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-16 -top-16 -z-0 h-48 w-48 rounded-full ${experience.accent} opacity-40 blur-3xl transition-transform duration-700 group-hover:scale-150`}
                />
                <div className="relative z-10 flex items-center justify-between">
                  <span className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.25em] text-amber-800">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f5f1e9]">
                      <Icon size={15} strokeWidth={1.6} />
                    </span>
                    {experience.type}
                  </span>
                  <span className="text-xs font-medium tracking-[0.15em] text-black/30">
                    {experience.number}
                  </span>
                </div>

                <div className="relative z-10 mt-8">
                  <h3 className="max-w-sm text-3xl font-black uppercase leading-[0.92] tracking-[-0.065em] sm:text-4xl">
                    {experience.title}
                  </h3>
                  <p className="mt-4 max-w-lg text-sm leading-6 text-black/55">
                    {experience.description}
                  </p>
                </div>

                <div className="relative z-10 mt-6 flex flex-wrap gap-2">
                  {experience.prompts.map((prompt) => (
                    <span
                      key={prompt}
                      className="rounded-full border border-black/10 px-3 py-1.5 text-[8px] font-medium uppercase tracking-[0.12em] text-black/55"
                    >
                      {prompt}
                    </span>
                  ))}
                </div>

                <div className="relative z-10 mt-auto flex flex-col gap-3 border-t border-black/10 pt-5 text-xs text-black/60">
                  <span className="font-semibold uppercase tracking-[0.16em] text-black/75">
                    {experience.date}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <MapPin size={14} strokeWidth={1.7} />
                    <span>
                      {experience.venue}
                      <span className="ml-1 text-black/35">· {experience.area}</span>
                    </span>
                  </span>
                </div>
              </motion.article>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col justify-between gap-4 text-[9px] font-medium uppercase tracking-[0.18em] text-black/40 sm:flex-row">
            <p>Program concepts · Venues and details are proposed.</p>
            <p>Jakarta · November—December 2026</p>
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 bg-white px-6 py-16 text-[#17140f] md:px-10 md:py-20 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.28em] text-amber-700">
              And then, the main event
            </p>
            <p className="text-3xl font-black uppercase leading-[0.9] tracking-[-0.06em] sm:text-5xl">
              Z Fest · 12—14 December
            </p>
          </div>
          <Link
            href="/lineup"
            className="group inline-flex w-fit items-center gap-3 border-b border-black/30 pb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-black/75 transition-colors hover:border-amber-600 hover:text-amber-800"
          >
            Explore the lineup
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}
