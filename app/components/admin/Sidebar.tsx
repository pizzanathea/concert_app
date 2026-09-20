"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  CalendarDays,
  Ticket,
  Mic2,
  ClipboardList,
  LogOut,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Event/Konser", href: "/admin/event", icon: CalendarDays },
  { label: "Kategori Tiket", href: "/admin/kategori-tiket", icon: Ticket },
  { label: "Artis", href: "/admin/artis", icon: Mic2 },
  { label: "Pesanan", href: "/admin/pesanan", icon: ClipboardList },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/admin/login");
  };

  return (
    <aside className="flex h-screen w-64 flex-col border-r border-white/10 bg-black/40 backdrop-blur-md">
      <div className="px-6 py-6">
        <Link
          href="/admin/dashboard"
          className="text-xl font-extrabold tracking-tight text-white"
        >
          Z<span className="text-amber-400">FEST</span>
        </Link>
        <p className="mt-1 text-xs text-white/40">Admin Panel</p>
      </div>

      <nav className="flex-1 space-y-1 px-3">
        {navItems.map(({ label, href, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={[
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                active
                  ? "bg-amber-400/15 text-amber-400"
                  : "text-white/60 hover:bg-white/5 hover:text-white",
              ].join(" ")}
            >
              <Icon size={18} strokeWidth={1.75} />
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-white/10 px-3 py-4">
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-white/60 transition-colors hover:bg-red-500/10 hover:text-red-400"
        >
          <LogOut size={18} strokeWidth={1.75} />
          Logout
        </button>
      </div>
    </aside>
  );
}
