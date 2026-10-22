"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function VenuePageIntro({
  eyebrow,
  title,
  description,
  dark = false,
}: {
  eyebrow: ReactNode;
  title: ReactNode;
  description: string;
  dark?: boolean;
}) {
  return (
    <section
      className={`px-6 pb-16 pt-16 md:px-10 md:pb-24 md:pt-20 lg:px-16 ${
        dark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className={`text-[10px] font-medium uppercase tracking-[0.3em] ${
            dark ? "text-amber-300" : "text-amber-700"
          }`}
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.9] tracking-[-0.07em] md:text-8xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32 }}
          className={`mt-7 max-w-2xl text-sm leading-7 md:text-base ${
            dark ? "text-white/55" : "text-black/50"
          }`}
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}

export function VenueReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
