"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"], weight: ["500", "600"] });

const links = [
  { label: "Home", href: "/" },
  { label: "Pesan Tiket", href: "/Tickets" },
  { label: "Login", href: "/admin/login" },
];

export default function TicketNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/95 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      {/* Navbar tingginya mengecil/memendek secara smooth saat di-scroll */}
      <nav
        className={`flex items-center justify-between px-6 transition-all duration-300 md:px-12 lg:px-[72px] ${
          scrolled ? "h-16 md:h-20" : "h-24 md:h-32"
        }`}
      >
        <Link
          href="/"
          className={`font-extrabold tracking-tight text-[#0a0500] transition-all duration-300 ${
            scrolled ? "text-2xl md:text-3xl" : "text-3xl md:text-4xl"
          }`}
        >
          Z<span className="text-amber-500">FEST</span>
        </Link>

        {/* Menu Navigasi: underline hanya muncul bersamaan dengan transisi warna saat terkena cursor (hover) */}
        <ul className={`${oswald.className} flex h-full items-center gap-8 md:gap-12`}>
          {links.map((link) => (
            <li key={link.href} className="relative flex h-full items-center">
              <Link
                href={link.href}
                className={`group relative flex h-full items-center font-semibold uppercase tracking-wider text-neutral-600 transition-colors duration-300 hover:text-amber-500 ${
                  scrolled ? "text-sm md:text-lg" : "text-base md:text-xl"
                }`}
              >
                <span>{link.label}</span>

                {/* Garis bawah di tepi border navbar: hanya muncul saat kursor mengenai menu (hover) */}
                <span className="absolute bottom-0 left-0 right-0 h-[4px] origin-center scale-x-0 bg-amber-500 opacity-0 transition-all duration-300 ease-out group-hover:scale-x-100 group-hover:opacity-100" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
