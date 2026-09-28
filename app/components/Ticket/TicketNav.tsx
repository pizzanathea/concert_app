import Link from "next/link";
import { Oswald } from "next/font/google";

// Font condensed biar mirip link "HOME / CONTACT US / LOGIN" di referensi.
// Kalau gak mau pakai font ini, hapus 2 baris Oswald + `${oswald.className}` di <ul>.
const oswald = Oswald({ subsets: ["latin"], weight: ["500", "600"] });

const links = [
  { label: "Home", href: "/" },
  { label: "Pesan Tiket", href: "/Tickets" },
  { label: "Login", href: "/admin/login" },
];

export default function TicketNav() {
  return (
    <header className="w-full border-b border-neutral-200 bg-white
    
    ">
      {/* Tanpa max-w: logo nempel kiri, menu nempel kanan (kayak referensi) */}
      <nav className="flex h-24 items-center justify-between px-6 md:h-32 md:px-12 lg:px-[72px]">
        <Link
          href="/"
          className="text-3xl font-extrabold tracking-tight text-[#0a0500] md:text-4xl"
        >
          Z<span className="text-amber-500">FEST</span>
        </Link>

        <ul className={`${oswald.className} flex items-center gap-8 md:gap-12`}>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="inline-block origin-left text-base font-semibold uppercase tracking-wider text-neutral-600 transition-all duration-300 ease-out hover:-skew-x-6 hover:text-amber-600 md:text-xl"
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
