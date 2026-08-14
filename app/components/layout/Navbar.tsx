"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
      <nav className="flex items-center justify-between px-6 py-4 md:px-10 lg:px-16"> 
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="Logo Konser"
            width={40}
            height={40}
            priority
          />
          <span className="hidden text-sm font-semibold tracking-wide text-white sm:block">
            NAMA EVENT
          </span>
        </Link>

        {/* Menu kanan (desktop) */}
        <button
          onClick={() => setMenuOpen(true)}
          className="flex items-center gap-2 text-white/90 transition-colors hover:text-white"
        >
          <span className="text-sm font-medium tracking-wide">Menu</span>
          <Menu size={20} strokeWidth={1.75} />
        </button>
      </nav>

      {/* Overlay menu fullscreen, dipicu dari tombol Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-black/95 backdrop-blur-lg">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-10">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <Image src="/logo.svg" alt="Logo Konser" width={40} height={40} />
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white/90 hover:text-white"
              aria-label="Tutup menu"
            >
              <X size={24} strokeWidth={1.75} />
            </button>
          </div>

          <ul className="flex flex-1 flex-col items-start justify-center gap-6 px-10 text-4xl font-semibold text-white md:text-6xl">
            {[
              { label: "Beranda", href: "/" },
              { label: "Line Up", href: "/lineup" },
              { label: "Tiket", href: "/tiket" },
              { label: "Tentang", href: "/tentang" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="transition-opacity hover:opacity-70"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
