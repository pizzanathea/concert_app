"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Crown,
  DoorOpen,
  Info,
  Ticket,
} from "lucide-react";
import { VenuePageIntro, VenueReveal } from "../venue-subnav";

const gates = [
  {
    id: "A",
    name: "General Admission",
    description:
      "For general festival ticket holders and standard admission. Have your ticket ready for scanning.",
    icon: Ticket,
  },
  {
    id: "B",
    name: "VIP Entrance",
    description:
      "Dedicated entrance for VIP and selected premium ticket holders. Check your ticket details before joining the queue.",
    icon: Crown,
  },
];

export default function VenueMapPage() {
  const [selectedGate, setSelectedGate] = useState("A");
  const activeGate = gates.find((gate) => gate.id === selectedGate) ?? gates[0];

  return (
    <main className="min-h-screen bg-[#080706] text-white">
      <VenuePageIntro
        eyebrow="03 / Festival map · Z Fest 2026"
        title={
          <>
            KNOW YOUR
            <br />
            WAY IN.
          </>
        }
        description="Find the entrance that matches your ticket, then follow the signs and crew on site. Select a gate to see who it’s for."
        dark
      />

      <section className="relative overflow-hidden px-6 pb-20 md:px-10 md:pb-28 lg:px-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(245,158,11,0.12),transparent_45%)]"
        />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-5 flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-amber-200/70">
            <span className="h-px w-6 bg-amber-300/70" />
            Choose your entrance
          </div>

          <div className="relative overflow-hidden border border-white/10 bg-[#0d0c0a]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:56px_56px]"
            />
            <div className="relative grid min-h-[510px] lg:grid-cols-[1fr_330px]">
              <div
                role="img"
                aria-label={`Illustrative festival entrance diagram. Gate ${selectedGate} is selected.`}
                className="relative min-h-[370px] overflow-hidden md:min-h-[510px]"
              >
                <div className="absolute left-1/2 top-[43%] h-52 w-[72%] -translate-x-1/2 -translate-y-1/2 border border-white/15 md:h-64 md:w-[64%]">
                  <div className="absolute inset-5 border border-white/[0.08] md:inset-8" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-[8px] uppercase tracking-[0.3em] text-white/35">
                      Festival grounds
                    </span>
                    <span className="mt-3 text-2xl font-medium tracking-[-0.05em] md:text-4xl">
                      Z FEST
                    </span>
                    <span className="mt-1 text-[8px] uppercase tracking-[0.25em] text-amber-200/50">
                      Jakarta · 2026
                    </span>
                  </div>
                </div>

                <div className="absolute left-1/2 top-[6%] -translate-x-1/2 text-center">
                  <span className="text-[8px] uppercase tracking-[0.24em] text-white/45">
                    Main entrance
                  </span>
                  <motion.div
                    animate={{ height: [24, 40, 24], opacity: [0.45, 1, 0.45] }}
                    transition={{ duration: 2.8, repeat: Infinity }}
                    className="mx-auto mt-3 w-px bg-gradient-to-b from-amber-300 to-transparent"
                  />
                </div>

                <svg
                  aria-hidden="true"
                  viewBox="0 0 800 500"
                  className="pointer-events-none absolute inset-0 h-full w-full"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M 400 90 C 400 150, 335 175, 335 220 L 335 270"
                    fill="none"
                    stroke={selectedGate === "A" ? "#fcd34d" : "#ffffff30"}
                    strokeWidth="2"
                    strokeDasharray="7 9"
                    animate={{ strokeDashoffset: [0, -32] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.path
                    d="M 400 90 C 400 150, 465 175, 465 220 L 465 270"
                    fill="none"
                    stroke={selectedGate === "B" ? "#fcd34d" : "#ffffff30"}
                    strokeWidth="2"
                    strokeDasharray="7 9"
                    animate={{ strokeDashoffset: [0, -32] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                </svg>

                <motion.button
                  type="button"
                  onClick={() => setSelectedGate("A")}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                  className={`absolute bottom-[12%] left-[12%] flex items-center gap-2 border px-3 py-2 text-left transition-colors md:bottom-[14%] md:left-[18%] ${
                    selectedGate === "A"
                      ? "border-amber-300 bg-amber-300 text-black"
                      : "border-white/20 bg-black/70 text-white/70 hover:border-white/60"
                  }`}
                  aria-pressed={selectedGate === "A"}
                >
                  <DoorOpen size={15} />
                  <span className="text-[8px] uppercase tracking-[0.2em]">
                    Gate A
                  </span>
                </motion.button>
                <motion.button
                  type="button"
                  onClick={() => setSelectedGate("B")}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                  className={`absolute bottom-[12%] right-[12%] flex items-center gap-2 border px-3 py-2 text-left transition-colors md:bottom-[14%] md:right-[18%] ${
                    selectedGate === "B"
                      ? "border-amber-300 bg-amber-300 text-black"
                      : "border-white/20 bg-black/70 text-white/70 hover:border-white/60"
                  }`}
                  aria-pressed={selectedGate === "B"}
                >
                  <DoorOpen size={15} />
                  <span className="text-[8px] uppercase tracking-[0.2em]">
                    Gate B
                  </span>
                </motion.button>

                <div className="absolute bottom-3 left-4 text-[8px] uppercase tracking-[0.18em] text-white/30">
                  Illustrative guide · final map to be announced
                </div>
              </div>

              <div className="relative border-t border-white/10 bg-white/[0.025] p-6 md:p-8 lg:border-l lg:border-t-0">
                <p className="text-[8px] uppercase tracking-[0.25em] text-white/35">
                  Gate information
                </p>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeGate.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="mt-8 flex h-12 w-12 items-center justify-center rounded-full border border-amber-300/30 text-amber-300">
                      <activeGate.icon size={21} strokeWidth={1.3} />
                    </div>
                    <p className="mt-8 text-[9px] uppercase tracking-[0.2em] text-amber-300">
                      Gate {activeGate.id}
                    </p>
                    <h2 className="mt-3 text-2xl font-medium leading-tight tracking-[-0.04em]">
                      {activeGate.name}
                    </h2>
                    <p className="mt-4 text-xs leading-6 text-white/50">
                      {activeGate.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
                <div className="mt-10 border-t border-white/10 pt-5">
                  <p className="text-[8px] uppercase tracking-[0.2em] text-white/35">
                    Before you queue
                  </p>
                  <p className="mt-2 text-xs leading-6 text-white/50">
                    Check your ticket for the correct entrance and keep it
                    ready to scan.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <VenueReveal className="mt-6 flex items-start gap-3 border border-amber-200/15 bg-amber-200/[0.04] p-4 md:p-5">
            <Info
              size={16}
              className="mt-0.5 shrink-0 text-amber-200/80"
              strokeWidth={1.4}
            />
            <p className="text-[10px] leading-5 text-white/45">
              This is an illustrative entrance guide, not the final site map.
              Official gate locations and the confirmed map will be announced
              by the event organizers.
            </p>
          </VenueReveal>

          <VenueReveal className="mt-10 flex flex-col justify-between gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center">
            <p className="max-w-xl text-xs leading-6 text-white/45">
              Need to plan your arrival before event day? See the step-by-step
              arrival guide.
            </p>
            <Link
              href="/venue/arrival"
              className="group inline-flex shrink-0 items-center gap-2 text-[9px] uppercase tracking-[0.2em] hover:text-amber-300"
            >
              Arrival guide
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </VenueReveal>
        </div>
      </section>
    </main>
  );
}
