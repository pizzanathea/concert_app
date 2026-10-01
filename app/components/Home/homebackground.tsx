"use client";

import { useEffect, useState } from "react";

type Spark = {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
};

export default function HomeBackground() {
  const [sparks, setSparks] = useState<Spark[]>([]);

  // Generate posisi acak di client doang (hindari mismatch SSR/CSR)
  useEffect(() => {
    const generated = Array.from({ length: 45 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 2 + Math.random() * 4,
      duration: 4 + Math.random() * 5,
      delay: Math.random() * 3,
      // arah & jarak goyang ke samping, beda-beda tiap spark (bisa kiri/kanan)
      drift: (Math.random() - 0.5) * 2 * (30 + Math.random() * 40),
    }));
    setSparks(generated);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {sparks.map((s) => (
        <span
          key={s.id}
          className="spark"
          style={
            {
              left: `${s.left}%`,
              width: s.size,
              height: s.size,
              animationDuration: `${s.duration}s`,
              animationDelay: `${s.delay}s`,
              "--drift": `${s.drift}px`,
            } as React.CSSProperties
          }
        />
      ))}
      <div className="light-sweep" />
    </div>
  );
}