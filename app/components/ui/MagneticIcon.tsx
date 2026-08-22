"use client";

import { ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type Props = {
  children: ReactNode;
  href: string;
  label: string;
  maxOffset?: number; // batas gerak dari titik tengah, dalam px
};

export default function MagneticIcon({
  children,
  href,
  label,
  maxOffset = 10,
}: Props) {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 500, damping: 32, mass: 0.4 });
  const y = useSpring(rawY, { stiffness: 500, damping: 32, mass: 0.4 });

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    rawX.set(Math.max(-maxOffset, Math.min(maxOffset, relX)));
    rawY.set(Math.max(-maxOffset, Math.min(maxOffset, relY)));
  };

  const reset = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      initial="rest"
      whileHover="hover"
      animate="rest"
      style={{ x, y }}
      className="relative flex h-9 w-9 items-center justify-center"
    >
      {/* Lingkaran background, muncul pas hover */}
      <motion.span
        variants={{
          rest: { scale: 0, opacity: 0 },
          hover: { scale: 1, opacity: 1 },
        }}
        transition={{ duration: 0.25 }}
        className="absolute inset-0 rounded-full bg-amber-400"
      />
      <motion.div
        variants={{
          rest: { color: "rgba(255,255,255,0.8)" },
          hover: { color: "#0a0500" },
        }}
        transition={{ duration: 0.2 }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </motion.a>
  );
}
