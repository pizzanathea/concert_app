import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { scheduleDays } from "./schedule-data";
import BrandText from "@/app/components/ui/BrandText";

export default function ScheduleOverviewPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f1e9] text-black">
      <section className="relative isolate flex min-h-[68svh] flex-col justify-end overflow-hidden bg-[#080706] px-6 pb-14 pt-32 text-white md:min-h-[76svh] md:px-10 md:pb-20 lg:px-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_78%_26%,rgba(245,158,11,0.2),transparent_36%),radial-gradient(ellipse_at_12%_95%,rgba(180,83,9,0.18),transparent_38%),linear-gradient(155deg,#080706_25%,#171008_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-[14%] h-80 w-80 rounded-full bg-amber-400/[0.09] blur-[100px] md:right-[12%] md:h-[30rem] md:w-[30rem]"
        />
        <div className="relative mx-auto w-full max-w-7xl">
          <p className="mb-8 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.32em] text-amber-300">
            <BrandText text="Z FEST 2026" tone="on-dark" />
            <span>/ THE SCHEDULE</span>
          </p>
          <h1 className="max-w-5xl text-[20vw] font-black uppercase leading-[0.76] tracking-[-0.09em] sm:text-[17vw] md:text-[13vw] lg:text-[11vw]">
            TIME
            <br />
            <span className="ml-[8vw] text-amber-400">IN COLOR.</span>
          </h1>
          <p className="mt-10 max-w-md text-sm leading-7 text-white/55 md:text-base">
            Three days, three different tempos. Choose a day to explore its
            performances, festival moments, and everything in between.
          </p>
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(to_bottom,transparent,#f5f1e9)]"
        />
      </section>

      <section className="px-6 py-14 md:px-10 md:py-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.3em] text-amber-700">
                Browse by day
              </p>
              <h2 className="text-3xl font-semibold uppercase tracking-[-0.06em] md:text-5xl">
                Pick your pace.
              </h2>
            </div>
            <p className="max-w-xs text-xs leading-6 text-black/45">
              Each day has its own page, with only that day&apos;s rundown.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {scheduleDays.map((day, index) => (
              <Link
                key={day.slug}
                href={`/schedule/${day.slug}`}
                className={`group relative min-h-60 overflow-hidden rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1 md:min-h-80 md:p-8 ${
                  index === 1
                    ? "bg-[#17120c] text-white"
                    : "bg-white/75 text-black"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-10 -top-8 h-44 w-44 rounded-full blur-3xl ${
                    index === 1 ? "bg-amber-400/15" : "bg-orange-400/15"
                  }`}
                />
                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <span className="text-[9px] font-semibold tracking-[0.2em] text-current/45">
                      0{day.id}
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="text-current/45 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>
                  <div>
                    <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.25em] text-amber-600">
                      {day.date} · 2026
                    </p>
                    <h3 className="text-4xl font-black uppercase leading-[0.88] tracking-[-0.07em] md:text-5xl">
                      {day.weekday}
                    </h3>
                    <p className="mt-4 text-[9px] font-medium uppercase tracking-[0.2em] text-current/45">
                      {day.entries.length} moments · {day.mood}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
