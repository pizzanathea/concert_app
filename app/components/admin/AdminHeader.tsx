"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { label: "Ringkasan", href: "/admin/dashboard" },
  { label: "Konser", href: "/admin/event" },
  { label: "Kategori Tiket", href: "/admin/kategori-tiket" },
  { label: "Artis", href: "/admin/Artis" },
  { label: "Pesanan", href: "/admin/pesanan" },
];

export default function AdminHeader() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/admin/login");
  };

  const currentDate = new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());

  return (
    <header className="border-b border-white/10 bg-[#0a0500]">
      {/* admin-top: brand kiri, utility kanan */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
        <Link
          href="/admin/dashboard"
          className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-white transition-opacity hover:opacity-90"
        >
          <span>
            Z<span className="text-amber-400">FEST</span>
          </span>
          <span className="rounded border border-amber-400/20 bg-amber-400/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-400">
            Admin
          </span>
        </Link>

        <div className="flex items-center gap-4 text-xs">
          <span className="hidden text-white/50 md:inline-block">
            {currentDate}
          </span>
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-white/80">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium">Admin · Panitia</span>
          </div>
          <button
            onClick={handleLogout}
            className="text-white/60 underline decoration-white/30 underline-offset-4 transition-colors hover:text-amber-400"
          >
            Logout
          </button>
        </div>
      </div>

      {/* admin-nav: tab horizontal dengan nomor urut */}
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <nav className="flex gap-8 overflow-x-auto" aria-label="Pengelolaan">
          {navItems.map(({ label, href }, i) => {
            const active =
              pathname === href ||
              pathname?.toLowerCase() === href.toLowerCase();
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={[
                  "whitespace-nowrap border-b-2 py-3.5 text-sm transition-colors",
                  active
                    ? "border-amber-400 font-semibold text-white"
                    : "border-transparent text-white/50 hover:text-white/80",
                ].join(" ")}
              >
                <span className="mr-2 text-[11px] font-mono text-white/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
