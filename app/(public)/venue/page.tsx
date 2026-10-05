"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

import {
  ArrowDown,
  ArrowUpRight,
  Car,
  TrainFront,
  Bike,
  MapPin,
  Accessibility,
} from "lucide-react";

import { motion, useScroll, useTransform } from "framer-motion";

import ScrollVelocity from "@/app/components/ui/ScroolVelocity";
import TechText from "@/app/components/ui/TextTech";

// ============================================================
// TRANSPORT OPTIONS
// ============================================================

const transportOptions = [
  {
    number: "01",
    title: "BY CAR",
    description:
      "Driving to Z Fest? Follow the recommended route and arrive at your designated parking area.",
    icon: Car,
  },
  {
    number: "02",
    title: "RIDE-HAILING",
    description:
      "Using a ride-hailing service? Ask your driver to drop you at the official festival entrance.",
    icon: MapPin,
  },
  {
    number: "03",
    title: "PUBLIC TRANSPORT",
    description:
      "Take public transportation and continue your journey from the nearest station to the festival.",
    icon: TrainFront,
  },
  {
    number: "04",
    title: "BIKE / WALK",
    description:
      "For nearby guests, cycling or walking can be an easy way to reach the festival grounds.",
    icon: Bike,
  },
];

// ============================================================
// ARRIVAL STEPS
// ============================================================

const arrivalSteps = [
  {
    number: "01",
    title: "ARRIVE",
    description:
      "Reach the festival area and head toward your designated entrance.",
  },
  {
    number: "02",
    title: "SECURITY",
    description:
      "Prepare your ticket and belongings for the security screening.",
  },
  {
    number: "03",
    title: "CHECK-IN",
    description:
      "Scan your ticket at the entrance and follow the crew's direction.",
  },
  {
    number: "04",
    title: "WRISTBAND",
    description: "Collect your festival wristband if your ticket requires one.",
  },
  {
    number: "05",
    title: "ENTER",
    description:
      "You're in. Find your stage, meet your people, and let Z Fest begin.",
  },
];

// ============================================================
// PACK ITEMS
// ============================================================

const bringItems = [
  "Valid ticket",
  "ID / identification",
  "Phone",
  "Power bank",
  "Comfortable clothing",
  "Cash or digital payment",
];

const leaveItems = [
  "Outside food",
  "Large bags",
  "Professional camera equipment",
  "Restricted items",
  "Unnecessary valuables",
  "Anything prohibited by festival rules",
];

// ============================================================
// TIPS
// ============================================================

const tips = [
  "Check the weather before leaving.",
  "Charge your phone before heading out.",
  "Keep your ticket ready on your phone.",
  "Plan your journey home in advance.",
  "Arrive early to avoid long queues.",
];

// ============================================================
// PAGE
// ============================================================

export default function VenuePage() {
  const [activeTransport, setActiveTransport] = useState("01");

  const { scrollY, scrollYProgress } = useScroll();

  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, -120]);

  // Scroll indicator fades away when user scrolls
  const scrollIndicatorOpacity = useTransform(scrollY, [0, 260], [1, 0]);

  // ============================================================
  // HASH SCROLL
  // ============================================================

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
          });
        }
      }, 500);
    }
  }, []);

  return (
    <main className="min-h-screen bg-white text-black">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative flex min-h-screen overflow-hidden bg-black text-white">
        {/* BACKGROUND IMAGE */}

        <div className="absolute inset-0">
          <div
            className="absolute inset-0 scale-105 bg-cover bg-center"
            style={{
              backgroundImage: "url('/venue-arrival.jpg')",
            }}
          />

          <div className="absolute inset-0 bg-black/55" />

          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />
        </div>

        {/* HERO CONTENT */}

        <motion.div
          style={{
            y: heroY,
          }}
          className="relative z-10 flex w-full flex-col px-6 pb-10 pt-36 md:px-10 md:pb-14 md:pt-40 lg:px-16"
        >
          {/* =====================================================
              TOP
          ====================================================== */}

          <div className="flex items-start justify-between">
            <div>
              <p className="mb-3 text-[9px] font-medium uppercase tracking-[0.35em] text-white/50 md:text-[10px]">
                01 / ARRIVAL
              </p>

              <p className="max-w-[180px] text-[10px] font-light uppercase tracking-[0.2em] text-white/50 md:max-w-xs">
                Everything you need to know before stepping into Z Fest.
              </p>
            </div>

            <div className="hidden text-right md:block">
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/50">
                Z FEST 2026
              </p>

              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/35">
                12—14 DECEMBER
              </p>
            </div>
          </div>

          {/* =====================================================
              TITLE
          ====================================================== */}

          <div className="relative mt-12 max-w-7xl md:mt-16 lg:mt-20">
            {" "}
            {/* LABEL */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mb-8 text-[10px] font-medium uppercase tracking-[0.35em] text-amber-300 md:mb-10 md:text-xs"
            >
              Arrive at Z Fest
            </motion.p>
            {/* HEADLINE + SCROLL */}
            <div className="relative flex items-start">
              {/* HEADLINE */}
              <div className="w-full max-w-6xl pr-20 md:pr-28 lg:pr-36">
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 70,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.3,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="w-full"
                >
                  <TechText
                    text="GET HERE."
                    fontWeight={600}
                    fontSize={220}
                    reveal="letter"
                    dashLength={4}
                    dashGap={2}
                    specks={15}
                    fontFamily=""
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
                  />
                </motion.div>

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 70,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.42,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="-mt-1 w-full"
                >
                  <TechText
                    text="GET IN THERE"
                    fontWeight={600}
                    fontSize={220}
                    reveal="letter"
                    dashLength={4}
                    dashGap={2}
                    specks={15}
                    fontFamily=""
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
                  />
                </motion.div>
              </div>

              {/* SCROLL INDICATOR */}
              <motion.div
                style={{
                  opacity: scrollIndicatorOpacity,
                }}
                whileHover="hover"
                initial="initial"
                className="group fixed right-6 top-[520px] z-30 flex -translate-y-1/2 cursor-pointer flex-col items-center gap-7 md:right-8 md:top-[560px] md:gap-8 lg:right-10 lg:top-[580px]"
              >
                {/* SCROLL TEXT */}
                <motion.span
                  variants={{
                    initial: {
                      opacity: 0.7,
                      letterSpacing: "0.4em",
                    },
                    hover: {
                      opacity: 1,
                      letterSpacing: "0.55em",
                    },
                  }}
                  transition={{
                    duration: 0.35,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-[11px] font-medium uppercase text-white md:text-xs"
                  style={{
                    writingMode: "vertical-rl",
                  }}
                >
                  SCROLL
                </motion.span>

                {/* ARROW */}
                <motion.div
                  variants={{
                    initial: {
                      y: 0,
                      opacity: 0.7,
                    },
                    hover: {
                      y: 8,
                      opacity: 1,
                    },
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <ArrowDown
                    size={28}
                    strokeWidth={1}
                    className="text-white transition-colors duration-300 group-hover:text-amber-300 md:h-8 md:w-8"
                  />
                </motion.div>
              </motion.div>
            </div>
            {/* DESCRIPTION */}
            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.65,
              }}
              className="mt-8 max-w-md text-sm leading-6 text-white/60 md:text-base"
            >
              Your journey to Z Fest starts before you enter the gate. Plan your
              route, know your entrance, and arrive ready.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* =====================================================
          ARRIVAL MARQUEE
      ====================================================== */}

      <section className="overflow-hidden border-y border-black/10 bg-white py-10 md:py-16">
        <div className="space-y-1 md:space-y-2">
          <ScrollVelocity
            texts={["ARRIVE EARLY — STAY LATE — MAKE IT COUNT —"]}
            velocity={3}
            direction="left"
            numCopies={8}
            className="text-3xl font-medium uppercase leading-none tracking-[-0.04em] text-black md:text-5xl lg:text-6xl"
          />

          <ScrollVelocity
            texts={["Z FEST — 12—14 DECEMBER — JAKARTA —"]}
            velocity={3}
            direction="right"
            numCopies={8}
            className="text-3xl font-medium uppercase leading-none tracking-[-0.04em] text-black md:text-5xl lg:text-6xl"
          />
        </div>
      </section>

      {/* =====================================================
          WHERE IT HAPPENS
      ====================================================== */}

      <section
        id="arrive"
        className="relative overflow-hidden px-6 py-28 md:px-10 md:py-40 lg:px-16"
      >
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-black/40">
              Where it happens
            </p>

            <h2 className="mt-5 max-w-md text-5xl font-medium leading-[0.95] tracking-[-0.05em] md:text-7xl">
              ONE
              <br />
              DESTINATION.
            </h2>
          </div>

          <div className="max-w-2xl">
            <p className="text-xl leading-relaxed tracking-[-0.02em] md:text-3xl">
              Z Fest brings music, people and unforgettable moments together in
              one place.
            </p>

            <div className="mt-14 border-t border-black/10 pt-8">
              <div className="flex flex-col justify-between gap-8 sm:flex-row">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.25em] text-black/35">
                    Venue
                  </p>

                  <p className="mt-3 text-lg font-medium">Z Fest Grounds</p>

                  <p className="mt-1 text-sm text-black/45">
                    Jakarta, Indonesia
                  </p>
                </div>

                {/* OPEN LOCATION */}

                <Link
                  href="#"
                  className="group relative inline-flex items-center gap-3 self-start text-sm uppercase tracking-[0.2em] text-black transition-colors duration-500"
                >
                  <span className="relative transition-colors duration-500 group-hover:text-amber-500">
                    OPEN LOCATION
                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-amber-500 transition-all duration-500 group-hover:w-full" />
                  </span>

                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.5}
                    className="transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-amber-500"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CHOOSE YOUR WAY
      ====================================================== */}

      <section
        id="getting-there"
        className="bg-[#f3f1ec] px-6 py-28 md:px-10 md:py-40 lg:px-16"
      >
        <div className="mb-20 max-w-3xl">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-black/40">
            Choose your way
          </p>

          <h2 className="mt-5 text-5xl font-medium leading-[0.9] tracking-[-0.06em] md:text-8xl">
            HOW ARE YOU
            <br />
            GETTING HERE?
          </h2>
        </div>

        <div className="border-t border-black/15">
          {transportOptions.map((option) => {
            const Icon = option.icon;
            const isActive = activeTransport === option.number;

            return (
              <motion.div
                key={option.number}
                onClick={() => setActiveTransport(option.number)}
                className="group cursor-pointer border-b border-black/15"
              >
                <div className="flex items-center justify-between py-7 md:py-9">
                  <div className="flex items-center gap-5 md:gap-8">
                    <span
                      className={`text-[10px] font-medium tracking-[0.2em] transition-colors duration-300 ${
                        isActive ? "text-amber-600" : "text-black/25"
                      }`}
                    >
                      {option.number}
                    </span>

                    <h3
                      className={`text-2xl font-medium uppercase tracking-[-0.03em] transition-all duration-500 md:text-5xl ${
                        isActive ? "translate-x-2" : "text-black/70"
                      }`}
                    >
                      {option.title}
                    </h3>
                  </div>

                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-500 md:h-12 md:w-12 ${
                      isActive
                        ? "border-black bg-black text-white"
                        : "border-black/15 text-black/40"
                    }`}
                  >
                    <Icon size={17} strokeWidth={1.3} />
                  </div>
                </div>

                <AnimateHeight open={isActive}>
                  <div className="grid pb-8 pl-12 md:grid-cols-[1fr_auto] md:pl-20">
                    <p className="max-w-xl text-sm leading-7 text-black/50 md:text-base">
                      {option.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.2em] md:mt-0">
                      Open route
                      <ArrowUpRight size={14} strokeWidth={1.3} />
                    </div>
                  </div>
                </AnimateHeight>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* =====================================================
          GATE GUIDE
      ====================================================== */}

      <section
        id="festival-map"
        className="relative overflow-hidden bg-black px-6 py-28 text-white md:px-10 md:py-40 lg:px-16"
      >
        <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/35">
              Know your gate
            </p>

            <h2 className="mt-5 text-5xl font-medium leading-[0.9] tracking-[-0.06em] md:text-8xl">
              ARRIVE AT
              <br />
              THE RIGHT
              <br />
              PLACE.
            </h2>
          </div>

          <div className="relative min-h-[500px] border border-white/10">
            <div className="absolute inset-8">
              <div className="absolute left-1/2 top-1/2 h-44 w-64 -translate-x-1/2 -translate-y-1/2 border border-white/20 md:h-56 md:w-96">
                <div className="absolute inset-8 flex items-center justify-center border border-white/10">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-white/30">
                    Z FEST AREA
                  </span>
                </div>
              </div>

              <div className="absolute left-1/2 top-4 -translate-x-1/2 text-center">
                <span className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                  Main Entrance
                </span>

                <div className="mx-auto mt-3 h-10 w-px bg-amber-300" />
              </div>

              <div className="absolute bottom-4 left-0">
                <span className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                  Gate A
                </span>
              </div>

              <div className="absolute bottom-4 right-0">
                <span className="text-[9px] uppercase tracking-[0.25em] text-white/30">
                  Gate B
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-8 border-t border-white/10 pt-10 md:grid-cols-2">
          <div>
            <p className="text-[9px] uppercase tracking-[0.25em] text-white/30">
              Gate A
            </p>

            <p className="mt-3 text-2xl font-medium">General Admission</p>

            <p className="mt-3 max-w-md text-sm leading-6 text-white/40">
              For general festival ticket holders and standard admission.
            </p>
          </div>

          <div>
            <p className="text-[9px] uppercase tracking-[0.25em] text-white/30">
              Gate B
            </p>

            <p className="mt-3 text-2xl font-medium">VIP Entrance</p>

            <p className="mt-3 max-w-md text-sm leading-6 text-white/40">
              Dedicated entrance for VIP and selected premium ticket holders.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          ARRIVAL FLOW
      ====================================================== */}

      <section className="px-6 py-28 md:px-10 md:py-40 lg:px-16">
        <div className="mb-20">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-black/40">
            Your arrival
          </p>

          <h2 className="mt-5 max-w-4xl text-5xl font-medium leading-[0.9] tracking-[-0.06em] md:text-8xl">
            FIVE STEPS.
            <br />
            THEN YOU&apos;RE IN.
          </h2>
        </div>

        <div className="grid border-t border-black/10 md:grid-cols-5">
          {arrivalSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                delay: index * 0.08,
                duration: 0.6,
              }}
              className="border-b border-black/10 py-8 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0"
            >
              <span className="text-[10px] font-medium tracking-[0.2em] text-amber-600">
                {step.number}
              </span>

              <h3 className="mt-10 text-xl font-medium tracking-[-0.02em]">
                {step.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-black/45">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =====================================================
          PACK LIGHT
      ====================================================== */}

      <section className="bg-[#f3f1ec] px-6 py-28 md:px-10 md:py-40 lg:px-16">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* BRING */}

          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-black/40">
              Pack light
            </p>

            <h2 className="mt-5 text-5xl font-medium tracking-[-0.06em] md:text-7xl">
              COME
              <br />
              READY.
            </h2>

            <div className="mt-12 border-t border-black/10">
              {bringItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between border-b border-black/10 py-4"
                >
                  <span className="text-sm">{item}</span>

                  <span className="text-amber-600">+</span>
                </div>
              ))}
            </div>
          </div>

          {/* LEAVE */}

          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-black/40">
              Leave it
            </p>

            <h2 className="mt-5 text-5xl font-medium tracking-[-0.06em] md:text-7xl">
              NOT
              <br />
              THIS TIME.
            </h2>

            <div className="mt-12 border-t border-black/10">
              {leaveItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between border-b border-black/10 py-4"
                >
                  <span className="text-sm">{item}</span>

                  <span className="text-black/20">×</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BEFORE YOU LEAVE
      ====================================================== */}

      <section className="px-6 py-28 md:px-10 md:py-40 lg:px-16">
        <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-black/40">
              Before you leave
            </p>

            <h2 className="mt-5 text-5xl font-medium leading-[0.9] tracking-[-0.06em] md:text-7xl">
              A LITTLE
              <br />
              PREP GOES
              <br />A LONG WAY.
            </h2>
          </div>

          <div className="border-t border-black/10">
            {tips.map((tip, index) => (
              <div
                key={tip}
                className="flex items-center gap-6 border-b border-black/10 py-6"
              >
                <span className="text-[9px] font-medium tracking-[0.2em] text-amber-600">
                  0{index + 1}
                </span>

                <p className="text-base text-black/65 md:text-lg">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          ACCESSIBILITY
      ====================================================== */}

      <section
        id="accessibility"
        className="border-t border-black/10 px-6 py-20 md:px-10 lg:px-16"
      >
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-center">
          <div className="flex items-start gap-5">
            <Accessibility size={24} strokeWidth={1.2} />

            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-black/40">
                Everyone&apos;s invited
              </p>

              <h3 className="mt-2 text-2xl font-medium">
                Accessibility at Z Fest
              </h3>
            </div>
          </div>

          <p className="max-w-xl text-sm leading-6 text-black/45">
            Accessible entrances, parking assistance and priority support are
            available for guests who need them.
          </p>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="relative overflow-hidden bg-black px-6 py-32 text-white md:px-10 md:py-48 lg:px-16">
        <div className="relative z-10">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-amber-300">
            See you there
          </p>

          <h2 className="mt-8 max-w-6xl text-[16vw] font-semibold leading-[0.78] tracking-[-0.08em] md:text-[11vw]">
            YOU&apos;VE
            <br />
            MADE IT.
          </h2>

          <div className="mt-16 flex flex-col justify-between gap-10 border-t border-white/10 pt-8 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                Z FEST 2026
              </p>

              <p className="mt-2 text-sm text-white/60">
                12—14 December · Jakarta
              </p>
            </div>

            <Link
              href="/tickets"
              className="group flex items-center gap-4 text-sm font-medium uppercase tracking-[0.2em]"
            >
              Get your tickets
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition-all duration-500 group-hover:border-amber-300 group-hover:bg-amber-300 group-hover:text-black">
                <ArrowUpRight size={17} strokeWidth={1.3} />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

// ============================================================
// ANIMATED HEIGHT
// ============================================================

function AnimateHeight({
  open,
  children,
}: {
  open: boolean;
  children: ReactNode;
}) {
  return (
    <AnimatePresenceWrapper open={open}>{children}</AnimatePresenceWrapper>
  );
}

function AnimatePresenceWrapper({
  open,
  children,
}: {
  open: boolean;
  children: ReactNode;
}) {
  return (
    <motion.div
      initial={false}
      animate={{
        height: open ? "auto" : 0,
        opacity: open ? 1 : 0,
      }}
      transition={{
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="overflow-hidden"
    >
      {children}
    </motion.div>
  );
}
