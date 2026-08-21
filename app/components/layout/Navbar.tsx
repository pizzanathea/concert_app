"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";

const menuItems = [
  { label: "Beranda", href: "/" },
  { label: "Line Up", href: "/lineup" },
  { label: "Tiket", href: "/tiket" },
  { label: "Tentang", href: "/tentang" },
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
          <Image
            src="/logo.svg"
            alt="Logo Konser"
            width={40}
            height={40}
            style={{ height: "auto" }}
            priority
          />
          <span className="hidden text-sm font-semibold tracking-wide text-white sm:block">
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
              transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
              className="absolute inset-0 flex items-center text-sm font-medium tracking-wide text-white/90"
            >
              Menu
            </motion.span>
            <motion.span
              variants={{
                rest: { y: "100%" },
                hover: { y: 0 },
              }}
              transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
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
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
            className="fixed inset-0 z-[60] flex flex-col bg-black/95 backdrop-blur-lg"
          >
            <div className="flex w-full items-center justify-between px-6 py-4 md:px-10 lg:px-16">
              <Link href="/" onClick={() => setMenuOpen(false)}>
                <Image
                  src="/logo.svg"
                  alt="Logo Konser"
                  width={40}
                  height={40}
                  style={{ height: "auto" }}
                />
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-white/90 hover:text-amber-300"
                aria-label="Tutup menu"
              >
                <X size={24} strokeWidth={1.75} />
              </button>
            </div>

            <ul className="flex flex-1 flex-col items-start justify-center gap-6 px-10 text-4xl font-semibold text-white md:text-6xl">
              {menuItems.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="transition-colors hover:text-amber-300"
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
