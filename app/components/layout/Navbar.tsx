"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import MagneticIcon from "@/app/components/ui/MagneticIcon";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Festival Info", href: "/info" },
  { label: "The Venue", href: "/venue" },
  { label: "Artists Lineup", href: "/lineup" },
  { label: "Schedule", href: "/schedule" },
  { label: "Pre Event", href: "/pre-event" },
  { label: "Live Streaming", href: "/live" },
  { label: "Take a Part", href: "/take-a-part" },
  { label: "Tickets", href: "/Tickets" },
  { label: "F.A.Q", href: "/faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dotX = useMotionValue(0);
  const dotY = useMotionValue(0);
  const MAX_OFFSET_X = 11; // batas gerak titik ke kiri/kanan, dalam px
  const MAX_OFFSET_Y_TOP = 11; // batas gerak titik ke atas, dalam px
  const MAX_OFFSET_Y_BOTTOM = 20; // batas gerak titik ke bawah, dilebarin

  const handleHamburgerMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    dotX.set(Math.max(-MAX_OFFSET_X, Math.min(MAX_OFFSET_X, relX)));
    dotY.set(
      relY < 0
        ? Math.max(-MAX_OFFSET_Y_TOP, relY)
        : Math.min(MAX_OFFSET_Y_BOTTOM, relY),
    );
  };

  const resetDot = () => {
    dotX.set(0);
    dotY.set(0);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-black/60 backdrop-blur-md border-b border-white/10"
          : "bg-transparent border-b border-transparent",
      ].join(" ")}
    >
      <nav className="flex items-center justify-between px-6 pb-4 pt-6 md:px-10 md:pt-7 lg:px-16">
        <Link href="/" className="flex items-center gap-3">
          <span className="hidden text-xl font-bold tracking-wide text-white sm:block">
            Z FEST
          </span>
        </Link>

        <motion.button
          onClick={() => setMenuOpen(true)}
          whileHover="hover"
          initial="rest"
          animate="rest"
          className="group flex items-center gap-2 text-white/90"
        >
          <div className="relative h-5 w-12 overflow-hidden">
            <motion.span
              variants={{
                rest: { y: 0 },
                hover: { y: "-100%" },
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="absolute inset-0 flex items-center text-sm font-medium tracking-wide text-white/90"
            >
              Menu
            </motion.span>
            <motion.span
              variants={{
                rest: { y: "100%" },
                hover: { y: 0 },
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="absolute inset-0 flex items-center text-sm font-medium tracking-wide text-amber-300"
            >
              Open
            </motion.span>
          </div>

          <div
            onMouseMove={handleHamburgerMove}
            onMouseLeave={resetDot}
            className="relative h-6 w-6 pb-4"
          >
            {/* 2 garis hamburger */}
            <motion.span
              variants={{
                rest: { opacity: 1, y: 0 },
                hover: { opacity: 0, y: -4 },
              }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 top-[6px] h-[2px] w-full rounded-full bg-white/90 group-hover:bg-amber-300"
            />
            <motion.span
              variants={{
                rest: { opacity: 1, y: 0 },
                hover: { opacity: 0, y: 4 },
              }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 top-[13px] h-[2px] w-[70%] rounded-full bg-white/90 group-hover:bg-amber-300"
            />

            {/* Titik yang muncul & ngikutin cursor pas hover, dibatasi area hamburger */}
            <motion.span
              style={{ x: dotX, y: dotY }}
              variants={{
                rest: { opacity: 0, scale: 0 },
                hover: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.2 }}
              className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300"
            />
          </div>
        </motion.button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{
              clipPath: "circle(150% at 100% 0%)",
              transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
            }}
            exit={{
              clipPath: ["inset(0% 0% 0% 0%)", "inset(0% 0% 100% 0%)"],
              transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1] },
            }}
            className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-black/95 backdrop-blur-lg"
          >
            <div className="flex w-full items-center justify-end px-6 py-4 md:px-10 lg:px-16">
              <div className="flex translate-y-14 items-center gap-3">
                <span className="text-sm font-medium tracking-wide text-white/80">
                  Close
                </span>
                <MagneticIcon
                  label="Tutup menu"
                  onClick={() => setMenuOpen(false)}
                  maxOffset={8}
                >
                  <X size={20} strokeWidth={1.75} />
                </MagneticIcon>
              </div>
            </div>

            <ul className="flex flex-1 translate-y-16 flex-col items-start justify-center gap-8 px-20 py-10 text-4xl font-semibold text-white md:translate-y-20 md:gap-10 md:px-40 md:text-6xl lg:px-56">
              {menuItems.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{
                    delay: 0.2 + i * 0.07,
                    type: "spring",
                    stiffness: 120,
                    damping: 16,
                    mass: 0.8,
                  }}
                  className="relative"
                >
                  <span className="absolute -left-7 -top-1 text-sm font-normal text-white/40 md:-left-10 md:text-base">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="inline-block origin-left transition-all duration-300 ease-out hover:-skew-x-6 hover:text-amber-400"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
