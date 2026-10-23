"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { opportunities, sponsorNames } from "../data/get-involved-data";

export default function GetInvolvedSection({ sectionId }: { sectionId: string }) {
  const opportunity = opportunities.find((item) => item.id === sectionId);
  if (!opportunity) return null;

  const isSponsorsOrPartners =
    opportunity.id === "sponsors" || opportunity.id === "partners";

  return (
    <main className="min-h-screen bg-[#f7f7f6] text-[#17140f]">
      <section className="px-6 pb-12 pt-32 md:px-10 md:pb-16 lg:px-16">
        <div className="mx-auto max-w-7xl"> 

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 text-center md:mb-16"
          >
            <p className="mb-3 text-[9px] font-medium uppercase tracking-[0.24em] text-black/40">
              Z Fest · Get involved · {opportunity.number}
            </p>
            <h1 className="text-4xl font-medium tracking-[-0.055em] md:text-6xl">
              {opportunity.pageTitle}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-black/55 md:text-base">
              {opportunity.pageIntro}
            </p>
          </motion.div>

          {isSponsorsOrPartners ? (
            <>
              <div className="grid grid-cols-2 border-l border-t border-black/[0.08] sm:grid-cols-3 lg:grid-cols-5">
                {sponsorNames.map((sponsor, index) => (
                  <motion.div
                    key={sponsor.name}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.045,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="flex min-h-40 items-center justify-center border-b border-r border-black/[0.08] px-4 py-8 sm:min-h-48 md:min-h-56"
                  >
                    <Image
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      width={180}
                      height={90}
                      className="h-auto max-h-16 w-auto max-w-40 object-contain"
                    />
                  </motion.div>
                ))}
              </div>
              <p className="mt-5 text-center text-[8px] font-medium uppercase tracking-[0.16em] text-black/35">
                Brand examples · Concept only · Not an official sponsor or partner list
              </p>
            </>
          ) : (
            <div className="mx-auto grid max-w-6xl gap-10 border-t border-black/10 pt-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16 md:pt-12">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-amber-800">
                  {opportunity.label}
                </p>
                <h2 className="mt-5 max-w-md text-4xl font-black uppercase leading-[0.9] tracking-[-0.07em] md:text-6xl">
                  {opportunity.title}
                </h2>
                <p className="mt-6 max-w-md text-sm leading-7 text-black/55">
                  {opportunity.description}
                </p>
              </div>

              <div>
                <h3 className="mb-5 text-[9px] font-semibold uppercase tracking-[0.22em] text-black/40">
                  {opportunity.pageSectionTitle}
                </h3>
                <div className="border-t border-black/10">
                  {opportunity.pageDetails.map((detail, index) => (
                    <motion.div
                      key={detail}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.07,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="flex items-center justify-between gap-5 border-b border-black/10 py-5"
                    >
                      <span className="flex items-baseline gap-4 text-sm md:text-base">
                        <span className="text-[9px] text-amber-800">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {detail}
                      </span>
                      <ArrowUpRight
                        aria-hidden="true"
                        size={16}
                        className="shrink-0 text-black/30"
                      />
                    </motion.div>
                  ))}
                </div>
                <p className="mt-6 text-xs leading-6 text-black/40">
                  {opportunity.detail}. Application details and official
                  announcements will be shared through Z Fest channels.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
