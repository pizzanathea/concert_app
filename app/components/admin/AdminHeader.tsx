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
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur-md">
      {/* admin-top: brand kiri, utility kanan */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
        <Link
          href="/admin/dashboard"
          className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-neutral-900 transition-opacity hover:opacity-90"
        >
          <span>
            Z<span className="text-amber-500">FEST</span>
          </span>
          <span className="rounded border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-600">
            Admin
          </span>
        </Link>

        <div className="flex items-center gap-4 text-xs">
          <span className="hidden text-neutral-500 md:inline-block">
            {currentDate}
          </span>
          <div className="flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1.5 text-neutral-700">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold">Admin · Panitia</span>
          </div>
          <button
            onClick={handleLogout}
            className="text-neutral-500 underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-amber-600"
          >
            Logout
          </button>
        </div>
      </div>

      {/* admin-nav: tab horizontal dengan nomor urut & underline hover/active */}
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
                  "group relative whitespace-nowrap py-3.5 text-sm font-semibold transition-colors",
                  active
                    ? "text-neutral-950 font-bold"
                    : "text-neutral-500 hover:text-amber-600",
                ].join(" ")}
              >
                <span className="mr-2 text-[11px] font-mono text-neutral-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {label}

                {/* Garis indikator bawah (underline solid seperti login/ticket nav) */}
                <span
                  className={[
                    "absolute bottom-0 left-0 right-0 h-[3px] bg-amber-500 transition-all duration-300",
                    active
                      ? "opacity-100 scale-x-100"
                      : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100",
                  ].join(" ")}
                />
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
