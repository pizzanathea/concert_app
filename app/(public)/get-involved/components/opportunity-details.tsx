"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { opportunities } from "../data/get-involved-data";

export default function OpportunityDetails({ sectionId }: { sectionId: string }) {
  const opportunity = opportunities.find((item) => item.id === sectionId);
  if (!opportunity) return null;

  return (
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
          {opportunity.detail}. Application details and official announcements
          will be shared through Z Fest channels.
        </p>
      </div>
    </div>
  );
}
