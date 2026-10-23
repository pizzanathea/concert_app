"use client";

import {
  ArrowDown,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { opportunities } from "../data/get-involved-data";

export default function GetInvolvedPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#17140f]">
      <section className="relative isolate flex min-h-[calc(88svh-5rem)] flex-col justify-end overflow-hidden px-6 pb-12 pt-32 md:px-10 md:pb-16 lg:px-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-[8%] -z-10 h-[30rem] w-[30rem] rounded-full border border-amber-700/[0.07] md:right-[8%] md:h-[42rem] md:w-[42rem]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-12 top-[18%] -z-10 h-[22rem] w-[22rem] rounded-full border border-amber-700/[0.06] md:right-[15%] md:h-[30rem] md:w-[30rem]"
        />
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-none absolute left-[-10%] top-[18%] -z-10 select-none whitespace-nowrap text-[27vw] font-black uppercase leading-none tracking-[-0.1em] text-black/[0.035] md:text-[21vw]"
        >
          TOGETHER&nbsp;&nbsp;TOGETHER
        </motion.div>

        <div className="mx-auto w-full max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.3em] text-amber-700 md:text-[10px]"
          >
            <span className="h-px w-8 bg-amber-600" />
            Z Fest · Open call
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-6xl text-[18vw] font-black uppercase leading-[0.76] tracking-[-0.09em] sm:text-[15vw] md:text-[12vw] lg:text-[10vw]"
          >
            GET
            <br />
            <span className="ml-[9vw] text-amber-600">INVOLVED.</span>
          </motion.h1>

          <div className="mt-12 flex flex-col justify-between gap-8 border-t border-black/15 pt-6 md:flex-row md:items-end">
            <p className="max-w-lg text-sm leading-7 text-black/60 md:text-base">
              A festival is more than what happens on stage. Bring your brand,
              your craft, your story, or your energy—and help shape the whole
              experience.
            </p>
            <a
              href="#opportunities"
              className="group inline-flex w-fit items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-black/70 transition-colors hover:text-amber-800"
            >
              Find your way in
              <ArrowDown
                size={15}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </a>
          </div>
        </div>

        <div className="mx-auto mt-14 flex w-full max-w-7xl justify-between border-t border-black/10 pt-4 text-[8px] font-medium uppercase tracking-[0.2em] text-black/40 sm:text-[9px]">
          <span>Six ways to take part</span>
          <span>Z Fest · 2026</span>
        </div>
      </section>

      <section
        id="opportunities"
        className="scroll-mt-24 px-6 py-20 md:px-10 md:py-28 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="mb-12 max-w-2xl md:mb-16"
          >
            <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.3em] text-amber-800">
              Find your place in the story
            </p>
            <h2 className="text-4xl font-black uppercase leading-[0.88] tracking-[-0.07em] md:text-6xl">
              Different strengths.
              <br />
              <span className="text-black/35">One shared festival.</span>
            </h2>
          </motion.div>

          <div className="grid border-l border-t border-black/10 sm:grid-cols-2 lg:grid-cols-3">
            {opportunities.map((opportunity, index) => {
              const Icon = opportunity.icon;

              return (
                <motion.article
                  key={opportunity.number}
                  id={opportunity.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.55,
                    delay: (index % 3) * 0.07,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group relative flex min-h-[20rem] scroll-mt-28 flex-col border-b border-r border-black/10 p-6 transition-colors duration-500 hover:bg-[#fbf9f5] sm:p-8 lg:min-h-[23rem] lg:p-9"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-amber-800 transition-colors duration-300 group-hover:border-amber-700/30 group-hover:bg-amber-100">
                      <Icon size={17} strokeWidth={1.6} />
                    </span>
                    <span className="text-[9px] font-medium tracking-[0.2em] text-black/35">
                      {opportunity.number}
                    </span>
                  </div>

                  <p className="mt-8 text-[8px] font-semibold uppercase tracking-[0.25em] text-amber-800">
                    {opportunity.label}
                  </p>
                  <h3 className="mt-3 max-w-xs text-2xl font-black uppercase leading-[0.95] tracking-[-0.055em] md:text-3xl">
                    {opportunity.title}
                  </h3>
                  <p className="mt-4 text-xs leading-6 text-black/55 md:text-sm">
                    {opportunity.description}
                  </p>
                  <p className="mt-auto border-t border-black/10 pt-5 text-[8px] font-medium uppercase leading-5 tracking-[0.1em] text-black/40">
                    {opportunity.detail}
                  </p>
                </motion.article>
              );
            })}
          </div>

          <p className="mt-6 text-[9px] font-medium uppercase tracking-[0.16em] text-black/40">
            Application details and contact information will be shared through
            official Z Fest channels.
          </p>
        </div>
      </section>

      <section className="border-t border-black/10 px-6 py-14 md:px-10 md:py-16 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <p className="max-w-xl text-sm leading-6 text-black/55">
            Not sure where you fit? Keep an eye on official updates as each
            opportunity opens.
          </p>
          <a
            href="#opportunities"
            className="group inline-flex w-fit items-center gap-3 border-b border-black/25 pb-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-black/70 transition-colors hover:border-amber-700 hover:text-amber-800"
          >
            Explore opportunities
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </section>
    </main>
  );
}
