"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const storySections = [
  {
    label: "THE FIRST IDEA",
    title: "It started with a simple thought.",
    text: "What if music could bring everyone into one place? Z Fest was born from a simple idea: creating a place where music, people, and unforgettable moments could come together.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=90",
  },
  {
    label: "THEN IT HAPPENED",
    title: "Our first festival.",
    text: "There was no perfect formula. No massive legacy. Just a stage, a crowd, and the courage to make the first moment happen.",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1800&q=90",
  },
  {
    label: "OUR FIRST CROWD",
    title: "The people made it real.",
    text: "The first people who showed up became part of the story. They came for the music, stayed for the atmosphere, and left with moments that would stay with us.",
    image:
      "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1800&q=90",
  },
];

export default function HistoryPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-black">
      <section className="relative flex min-h-screen flex-col justify-end px-6 pb-16 pt-32 md:px-10 md:pb-20 lg:px-16">
        <div className="pointer-events-none absolute right-[-8%] top-[12%] h-[460px] w-[460px] rounded-full bg-amber-400/[0.07] blur-[160px]" />
        <div className="relative z-10 mx-auto w-full max-w-[1500px]">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-8 text-xs font-bold uppercase tracking-[0.35em] text-black/45"
          >
            Z FEST 2026 / OUR FIRST TIME
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-6xl text-[20vw] font-black uppercase leading-[0.76] tracking-[-0.08em] md:text-[15vw] lg:text-[12vw]"
          >
            OUR
            <br />
            <span className="ml-[8vw]">FIRST</span>
            <br />
            TIME
          </motion.h1>
          <div className="mt-12 flex flex-col justify-between gap-8 border-t border-black/15 pt-6 md:flex-row md:items-end">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="max-w-md text-sm font-medium leading-7 text-black/60 md:text-base"
            >
              Every great moment has a beginning. This is the story of the first
              time Z Fest became more than just an idea.
            </motion.p>
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em]">
              <span>Scroll to discover</span>
              <ArrowDown size={16} strokeWidth={2.5} />
            </div>
          </div>
        </div>
      </section>

      {storySections.map((section, index) => (
        <section
          key={section.label}
          className="px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40"
        >
          <div className="mx-auto max-w-[1500px]">
            <div
              className={`grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-24 ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
              >
                <p className="mb-7 text-xs font-bold uppercase tracking-[0.3em] text-black/40">
                  {section.label}
                </p>
                <h2 className="max-w-xl text-5xl font-black uppercase leading-[0.88] tracking-[-0.065em] md:text-7xl lg:text-8xl">
                  {section.title}
                </h2>
                <p className="mt-8 max-w-lg text-sm font-medium leading-7 text-black/60 md:text-base">
                  {section.text}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative overflow-hidden"
              >
                <motion.img
                  src={section.image}
                  alt=""
                  whileHover={{ scale: 1.035 }}
                  transition={{ duration: 0.6 }}
                  className="h-[55vh] min-h-[420px] w-full object-cover"
                />
                <div className="absolute bottom-5 left-5 bg-white px-4 py-3 text-[9px] font-bold uppercase tracking-[0.25em]">
                  Z FEST / FIRST MOMENT
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      <section className="px-6 py-28 md:px-10 lg:px-16 lg:py-40">
        <div className="mx-auto max-w-[1500px]">
          <div className="border-y border-black/15 py-20 md:py-28">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-6xl"
            >
              <p className="mb-8 text-xs font-bold uppercase tracking-[0.3em] text-black/40">
                The beginning
              </p>
              <h2 className="text-[14vw] font-black uppercase leading-[0.78] tracking-[-0.08em] md:text-[11vw] lg:text-[9vw]">
                ONE STAGE.
                <br />
                ONE BEGINNING.
                <br />
                <span className="text-amber-500">ONE MOMENT.</span>
              </h2>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-28 text-white md:px-10 lg:px-16 lg:py-40">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">
              What we learned
            </p>
            <div>
              <h2 className="max-w-5xl text-6xl font-black uppercase leading-[0.82] tracking-[-0.07em] md:text-8xl lg:text-[8.5vw]">
                The first time
                <br />
                doesn&apos;t have
                <br />
                to be perfect.
              </h2>
              <p className="mt-10 max-w-xl text-sm font-medium leading-7 text-white/55 md:text-base">
                It just has to be real. Every first step carries a little
                uncertainty, a little excitement, and a reason to keep going.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex min-h-[90vh] items-center px-6 py-32 md:px-10 lg:px-16">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400/[0.08] blur-[170px]" />
        <div className="relative z-10 mx-auto w-full max-w-[1500px] text-center">
          <p className="mb-8 text-xs font-bold uppercase tracking-[0.35em] text-black/40">
            And this was only
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[17vw] font-black uppercase leading-[0.76] tracking-[-0.08em] md:text-[13vw] lg:text-[10.5vw]"
          >
            THE
            <br />
            BEGINNING.
          </motion.h2>
          <p className="mx-auto mt-10 max-w-lg text-sm font-medium leading-7 text-black/55 md:text-base">
            Our first time gave us a reason to start. Now, the next moment is
            waiting.
          </p>
          <Link
            href="/whats-happening"
            className="group mt-10 inline-flex items-center gap-5 border-b border-black pb-3 text-xs font-bold uppercase tracking-[0.28em]"
          >
            Explore what&apos;s happening
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>

      <div className="flex justify-center pb-20">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex flex-col items-center gap-5"
        >
          <motion.span whileHover={{ y: -5 }}>
            <ArrowDown size={22} strokeWidth={2.5} className="rotate-180" />
          </motion.span>
          <span className="text-xs font-bold uppercase tracking-[0.3em] transition-transform duration-300 group-hover:-translate-y-1">
            Back to top
          </span>
        </button>
      </div>
    </main>
  );
}
