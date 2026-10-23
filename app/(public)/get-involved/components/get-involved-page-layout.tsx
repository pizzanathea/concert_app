"use client";

import { motion } from "framer-motion";
import { opportunities } from "../data/get-involved-data";

export default function GetInvolvedPageLayout({
  sectionId,
  children,
}: {
  sectionId: string;
  children: React.ReactNode;
}) {
  const opportunity = opportunities.find((item) => item.id === sectionId);
  if (!opportunity) return null;

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
          {children}
        </div>
      </section>
    </main>
  );
}
