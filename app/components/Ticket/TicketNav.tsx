"use client";

import Link from "next/link";

export default function TicketNav() {
  const links = [
    { label: "Home", href: "/" },
    { label: "Pesan Tiket", href: "/Tickets" },
    { label: "Login", href: "/admin/login" },
  ];

  return (
    <header className="w-full border-b border-white/10 bg-black/40 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-10">
        <Link
          href="/"
          className="text-lg font-extrabold tracking-tight text-white"
        >
          Z<span className="text-amber-400">FEST</span>
        </Link>

        <ul className="flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="inline-block origin-left text-xs font-semibold uppercase tracking-widest text-white/60 transition-all duration-300 ease-out hover:-skew-x-6 hover:text-amber-400"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
