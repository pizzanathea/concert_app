"use client";

import { Fragment, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  Circle,
  type LucideIcon,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import BrandText from "@/app/components/ui/BrandText";
import ScrollVelocity from "@/app/components/ui/ScroolVelocity";
import {
  volunteerClosing,
  volunteerDivisions,
  volunteerPrinciples,
} from "../data/volunteer-data";

export default function VolunteerPage() {
  const heroRef = useRef<HTMLElement>(null);
  const [openBreakdown, setOpenBreakdown] = useState<string | null>(null);
  const { scrollY } = useScroll();
  const scrollLabelOpacity = useTransform(scrollY, [0, 100, 220], [1, 0.65, 0]);
  const scrollLabelY = useTransform(scrollY, [0, 220], [0, -12]);
  const headlineY = useTransform(scrollY, [0, 450], [0, -90]);
  const headlineOpacity = useTransform(scrollY, [0, 350], [1, 0]);
  const headlineScale = useTransform(scrollY, [0, 450], [1, 0.96]);

  const openAndScrollToBreakdown = (number: string) => {
    setOpenBreakdown(number);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document
          .getElementById(`volunteer-breakdown-row-${number}`)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-white text-black">
      <section
        ref={heroRef}
        className="relative flex min-h-screen flex-col px-6 pb-16 pt-32 md:px-10 md:pt-36 lg:px-16"
      >
        <div className="pointer-events-none absolute right-[-15%] top-[5%] h-[500px] w-[500px] rounded-full bg-amber-400/[0.07] blur-[160px]" />

        <div className="relative z-10 mx-auto flex w-full max-w-[1500px] flex-1 flex-col">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid flex-1 gap-10 pt-8 lg:grid-cols-[1.15fr_0.85fr]"
          >
            <div>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.7 }}
                className="mb-7 text-xs uppercase tracking-[0.3em] text-amber-500"
              >
                <BrandText text="Z Fest 2026 · Volunteer Crew" />
              </motion.p>

              <motion.div
                style={{
                  y: headlineY,
                  opacity: headlineOpacity,
                  scale: headlineScale,
                  transformOrigin: "bottom left",
                }}
              >
                <h1 className="max-w-5xl text-[clamp(3.2rem,7.5vw,7.5rem)] font-semibold uppercase leading-[0.86] tracking-[-0.065em]">
                  More than
                  <br />
                  just a <span className="text-amber-400">crew.</span>
                </h1>
              </motion.div>
            </div>

            <div className="flex items-start gap-7 lg:pt-[3.8rem] xl:gap-10">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.7 }}
                className="max-w-lg text-base leading-7 text-black/50 md:text-lg"
              >
                Behind every unforgettable festival is a crew that cares. Find
                your role, meet your people, and help make <BrandText text="Z Fest" /> feel
                welcoming from the first hello to the final encore.
              </motion.p>

              <motion.div
                style={{ opacity: scrollLabelOpacity, y: scrollLabelY }}
                className="hidden shrink-0 flex-col items-center md:flex"
              >
                <span className="text-[12px] font-bold uppercase tracking-[0.25em] [writing-mode:vertical-rl]">
                  Scroll
                </span>
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="mt-4"
                >
                  <ArrowDown size={15} strokeWidth={1.5} />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-20 border-t border-black/15"
          >
            <div className="grid sm:grid-cols-3">
              {[
                ["01", "One festival crew"],
                ["08", "Ways to get involved"],
                ["100%", "Show up for each other"],
              ].map(([value, label], index) => (
                <div
                  key={label}
                  className={`py-6 ${
                    index < 2 ? "border-b border-black/10 sm:border-b-0 sm:border-r" : ""
                  } ${index > 0 ? "sm:px-6" : "sm:pr-6"}`}
                >
                  <p className="text-[10px] uppercase tracking-[0.25em] text-black/35">
                    {label}
                  </p>
                  <p className="mt-2 text-sm text-black/80">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="volunteer-divisions"
        className="border-t border-black/10 bg-white px-6 py-20 text-black md:px-10 md:py-28 lg:px-16"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-12 grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end md:gap-16">
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.25em] text-amber-500">
                01—09 · Volunteer breakdown
              </p>
              <h2 className="text-[clamp(2.8rem,5vw,5rem)] font-semibold uppercase leading-[0.9] tracking-[-0.055em]">
                Find your
                <br />
                <span className="text-black/30">place.</span>
              </h2>
            </div>
            <p className="max-w-2xl pb-1 text-base leading-8 text-black/50 md:text-lg">
              Different skills, different perspectives, one shared goal: make
              every part of the festival feel effortless for the people in it.
            </p>
          </div>

          <div className="border-t border-black/15">
            <VolunteerBreakdownRow
              number="01"
              title="Responsibilities & Crew Ethics"
              description={volunteerPrinciples.description}
              tasks={volunteerPrinciples.responsibilities}
              isOpen={openBreakdown === "01"}
              onToggle={() => {
                if (openBreakdown === "01") {
                  setOpenBreakdown(null);
                } else {
                  openAndScrollToBreakdown("01");
                }
              }}
            />
            {volunteerDivisions.map((division) => (
              <VolunteerBreakdownRow
                key={division.number}
                number={division.number}
                title={division.title}
                description={division.description}
                tasks={division.tasks}
                icon={division.icon}
                isOpen={openBreakdown === division.number}
                onToggle={() => {
                  if (openBreakdown === division.number) {
                    setOpenBreakdown(null);
                  } else {
                    openAndScrollToBreakdown(division.number);
                  }
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        aria-label="Volunteer crew highlights"
        className="overflow-hidden border-y border-black/10 bg-white py-7 md:py-9"
      >
        <div className="space-y-1">
          <ScrollVelocity
            texts={["SHOW UP WITH CARE — FIND YOUR CREW — MAKE IT COUNT —"]}
            velocity={1.5}
            direction="left"
            numCopies={8}
            className="text-3xl font-medium uppercase leading-none tracking-[-0.04em] text-black md:text-5xl lg:text-6xl"
          />
          <ScrollVelocity
            texts={[
              <Fragment key="volunteer-brand-marquee">
                <BrandText text="Z FEST" tone="on-dark" /> — ONE CREW — ONE
                FESTIVAL —
              </Fragment>,
            ]}
            velocity={1.5}
            direction="right"
            numCopies={8}
            className="text-3xl font-medium uppercase leading-none tracking-[-0.04em] text-amber-600 md:text-5xl lg:text-6xl"
          />
        </div>
      </section>

      <section className="bg-amber-400 px-6 py-24 text-black md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto grid max-w-[1500px] items-center gap-14 lg:grid-cols-[90px_1fr] lg:gap-16">
          <motion.button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            initial="rest"
            whileHover="hover"
            className="group flex w-fit flex-col items-center self-center"
            aria-label="Back to top"
          >
            <motion.div
              variants={{ rest: { y: 0 }, hover: { y: -4 } }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mb-5"
            >
              <ArrowUp size={25} strokeWidth={1.5} />
            </motion.div>
            <span className="text-[12px] font-medium uppercase tracking-[0.18em] [writing-mode:vertical-rl] [transform:rotate(180deg)]">
              Back to top
            </span>
          </motion.button>

          <div>
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em]">
              <BrandText text={volunteerClosing.eyebrow} tone="on-amber" />
            </p>
            <h2 className="max-w-5xl text-[clamp(3.5rem,8vw,8rem)] font-semibold uppercase leading-[0.82] tracking-[-0.065em]">
              Let&apos;s join
              <br />
              the crew.
            </h2>
            <div className="mt-10 max-w-2xl">
              <p className="text-base leading-7 text-black/70">
                {volunteerClosing.description}
              </p>
              <a
                href="#volunteer-breakdown-row-01"
                onClick={(event) => {
                  event.preventDefault();
                  openAndScrollToBreakdown("01");
                }}
                className="group mt-8 inline-flex items-center gap-4 border-b border-black/30 pb-3 text-xs font-semibold uppercase tracking-[0.25em] text-black transition-colors duration-300 hover:border-black hover:text-black/60"
              >
                Explore the divisions
                <ArrowUpRight
                  size={17}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function VolunteerBreakdownRow({
  number,
  title,
  description,
  tasks,
  icon: Icon,
  isOpen,
  onToggle,
}: {
  number: string;
  title: string;
  description: string;
  tasks: readonly string[];
  icon?: LucideIcon;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = `volunteer-breakdown-${number}`;

  return (
    <motion.article
      id={`volunteer-breakdown-row-${number}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="scroll-mt-24 border-b border-black/10"
    >
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className="group grid w-full grid-cols-[auto_1fr_auto] items-center gap-5 py-7 text-left md:grid-cols-[80px_1fr_auto] md:gap-8 md:py-9"
      >
        <span className="text-[10px] tracking-[0.2em] text-amber-500">
          {number}
        </span>
        <span className="flex items-center gap-3 text-xl font-semibold uppercase leading-tight tracking-[-0.045em] transition-colors group-hover:text-amber-500 md:text-3xl">
          {title}
          {Icon && (
            <Icon
              aria-hidden="true"
              size={18}
              strokeWidth={1.5}
              className="shrink-0 text-black/30"
            />
          )}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-black/15 text-black/50 transition-colors group-hover:border-amber-400 group-hover:text-amber-500 md:h-11 md:w-11"
        >
          <ArrowDown size={18} strokeWidth={1.5} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="grid gap-5 pb-8 md:grid-cols-[80px_1fr_auto] md:gap-8 md:pb-10">
              <span aria-hidden="true" className="hidden md:block" />
              <div className="max-w-3xl">
                <p className="mb-5 text-sm leading-7 text-black/55 md:text-base">
                  {description}
                </p>
                <div className="border-t border-black/10">
                  {tasks.map((task) => (
                    <p
                      key={task}
                      className="flex gap-4 border-b border-black/[0.06] py-3 text-sm leading-6 text-black/55 last:border-b-0"
                    >
                      <Circle
                        size={5}
                        fill="currentColor"
                        className="mt-2 shrink-0 text-amber-400"
                      />
                      {task}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
