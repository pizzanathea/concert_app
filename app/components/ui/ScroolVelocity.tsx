"use client";

import React from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
} from "motion/react";

interface ScrollVelocityProps {
  texts: string[];
  velocity?: number;
  className?: string;
  numCopies?: number;
  direction?: "left" | "right";
}

interface VelocityTextProps {
  children: React.ReactNode;
  baseVelocity: number;
  className?: string;
  numCopies: number;
}

function VelocityText({
  children,
  baseVelocity,
  className = "",
  numCopies,
}: VelocityTextProps) {
  const baseX = useMotionValue(0);

  const x = useTransform(baseX, (value) => `${value}%`);

  useAnimationFrame((_, delta) => {
    const moveBy = baseVelocity * (delta / 1000);

    let current = baseX.get() + moveBy;

    // Loop ke kiri
    if (current <= -25) {
      current += 25;
    }

    // Loop ke kanan
    if (current >= 0) {
      current -= 25;
    }

    baseX.set(current);
  });

  return (
    <motion.div className="flex w-max shrink-0" style={{ x }}>
      {Array.from({
        length: numCopies,
      }).map((_, index) => (
        <span
          key={index}
          className={`
            inline-block
            shrink-0
            whitespace-nowrap
            pr-16
            ${className}
          `}
        >
          {children}
        </span>
      ))}
    </motion.div>
  );
}

export default function ScrollVelocity({
  texts,
  velocity = 12,
  className = "",
  numCopies = 8,
  direction = "left",
}: ScrollVelocityProps) {
  const baseVelocity =
    direction === "left" ? -Math.abs(velocity) : Math.abs(velocity);

  return (
    <div className="relative w-full overflow-hidden">
      {texts.map((text, index) => (
        <VelocityText
          key={index}
          baseVelocity={baseVelocity}
          className={className}
          numCopies={numCopies}
        >
          {text}
        </VelocityText>
      ))}
    </div>
  );
}
