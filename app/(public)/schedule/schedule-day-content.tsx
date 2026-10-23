"use client";

import { motion } from "framer-motion";
import type { ScheduleDay, ScheduleEntry } from "./schedule-data";

const stageNames = [
  "FESTIVAL GROUNDS",
  "COMMUNITY",
  "SUNSET STAGE",
  "MAIN STAGE",
  "JAZZ STAGE",
] as const;

const stageColumns: Record<ScheduleEntry["stage"], number> = {
  "FESTIVAL GROUNDS": 2,
  COMMUNITY: 3,
  "SUNSET STAGE": 4,
  "MAIN STAGE": 5,
  "JAZZ STAGE": 6,
};

const eventColors = {
  artist: "bg-orange-500 text-white",
  activity: "bg-[#d9d6d0] text-black",
  experience: "bg-amber-200 text-black",
  closing: "bg-[#24180e] text-white",
} as const;

const timeToMinutes = (time: string) => {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};

const timeSlots = Array.from({ length: 32 }, (_, index) => {
  const totalMinutes = 15 * 60 + index * 15;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return {
    label: `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`,
    isHour: minutes === 0,
    isHalfHour: minutes === 30,
    index,
  };
});

export default function ScheduleDayContent({ day }: { day: ScheduleDay }) {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f1e9] text-black">
      <section className="px-4 pb-24 pt-28 md:px-8 md:pb-32 md:pt-32 lg:px-12">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold md:text-base">Schedule:</p>
            <h2 className="mt-1 text-xl font-semibold tracking-[-0.03em] md:text-2xl">
              {day.fullDate}
            </h2>
            <p className="mt-3 text-[9px] font-medium uppercase tracking-[0.22em] text-black/40">
              Scroll sideways to explore every stage
            </p>
          </div>

          <div
            className="overflow-x-auto overscroll-x-contain rounded-t-xl"
            role="region"
            aria-label={`${day.fullDate} stage schedule`}
            tabIndex={0}
          >
            <div className="min-w-[1020px]">
              <div
                className="grid"
                style={{
                  gridTemplateColumns: "76px repeat(5, minmax(0, 1fr))",
                  gridTemplateRows: "62px repeat(32, 30px)",
                  backgroundImage:
                    "linear-gradient(to right, rgba(0,0,0,0.18) 1px, transparent 1px), repeating-linear-gradient(to bottom, transparent 0, transparent 29px, rgba(0,0,0,0.12) 29px, rgba(0,0,0,0.12) 30px)",
                  backgroundSize: "calc((100% - 76px) / 5) 100%, 100% 30px",
                  backgroundPosition: "76px 0, 0 62px",
                  backgroundRepeat: "repeat-x, repeat",
                }}
              >
                <div className="flex items-center justify-center bg-[#f5f1e9] px-2 text-[8px] font-bold uppercase tracking-[0.12em] text-black/45">
                  Time
                </div>
                {stageNames.map((stage, index) => (
                  <div
                    key={stage}
                    className={`flex items-center justify-center bg-[#272522] px-2 text-center text-[9px] font-bold uppercase leading-tight text-white sm:text-[10px] ${
                      index > 0 ? "border-l border-white/15" : ""
                    }`}
                    style={{ gridColumn: index + 2, gridRow: 1 }}
                  >
                    {stage}
                  </div>
                ))}

                {timeSlots
                  .filter((slot) => slot.index % 2 === 0)
                  .map((slot) => (
                    <div
                      key={slot.label}
                      className={`z-10 flex -translate-y-1/2 items-start justify-end bg-[#f5f1e9] pr-2 text-[10px] ${
                        slot.isHour
                          ? "font-bold text-black/75"
                          : "font-medium text-black/35"
                      }`}
                      style={{
                        gridColumn: 1,
                        gridRow: slot.index + 2,
                      }}
                    >
                      {slot.label}
                    </div>
                  ))}

                {day.entries.map((entry, index) => {
                  const startOffset =
                    timeToMinutes(entry.time) - 15 * 60;
                  const duration =
                    timeToMinutes(entry.end) - timeToMinutes(entry.time);
                  const startRow = Math.floor(startOffset / 15) + 2;
                  const rowSpan = Math.max(2, Math.ceil(duration / 15));

                  return (
                    <motion.article
                      key={`${entry.time}-${entry.stage}-${entry.title}`}
                      initial={{ opacity: 0, scale: 0.96 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{
                        duration: 0.32,
                        delay: Math.min(index * 0.04, 0.2),
                      }}
                      className={`z-10 m-[2px] flex min-w-0 flex-col overflow-hidden p-2 sm:p-3 ${
                        eventColors[entry.kind]
                      }`}
                      style={{
                        gridColumn: stageColumns[entry.stage],
                        gridRow: `${startRow} / span ${rowSpan}`,
                      }}
                      aria-label={`${entry.time} to ${entry.end}, ${entry.stage}: ${entry.title}. ${entry.detail}`}
                    >
                      <span className="text-[8px] font-bold leading-tight sm:text-[9px]">
                        {entry.time} — {entry.end}
                      </span>
                      <h3 className="mt-2 break-words text-[10px] font-black uppercase leading-[1.05] tracking-[-0.02em] sm:text-xs">
                        {entry.title}
                      </h3>
                      {rowSpan >= 6 && (
                        <p className="mt-2 line-clamp-3 text-[9px] leading-tight opacity-75">
                          {entry.detail}
                        </p>
                      )}
                    </motion.article>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between rounded-b-xl bg-[#272522] px-4 py-3 text-[8px] font-medium uppercase tracking-[0.16em] text-white/55 sm:px-6">
            <span>Amber · Live performance</span>
            <span>Gray · Festival activity</span>
            <span>Times shown in local time</span>
          </div>
        </div>
      </section>
    </main>
  );
}
