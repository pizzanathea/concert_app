import Link from "next/link";
import TicketNav from "@/app/components/Ticket/TicketNav";
import GradientBackground from "@/app/components/layout/GradientBackground";

const reasons = [
  {
    title: "Booking Lebih Cepat",
    desc: "Pilih kelas tiket, bayar, dan langsung dapat konfirmasi dalam hitungan menit.",
  },
  {
    title: "QR Code Tiket",
    desc: "Tiket kamu otomatis tersimpan di aplikasi, tinggal scan pas hari-H.",
  },
  {
    title: "Riwayat Pesanan",
    desc: "Semua histori pemesanan kamu tersimpan rapi, gampang dicek kapan aja.",
  },
];

export default function TicketsPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <GradientBackground />
      <TicketNav />

      <main className="flex-1 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
            Z Fest 2026
          </span>
          <h1 className="mt-3 text-4xl font-extrabold text-white md:text-5xl">
            Pesan Tiket Lewat Aplikasi Mobile
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/70 md:text-base">
            Semua transaksi tiket Z Fest cuma bisa dilakukan lewat aplikasi
            resmi kami. Download sekarang biar gak kehabisan tiket kelas favorit
            kamu.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#"
              className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-[#0a0500] transition-transform hover:scale-105"
            >
              Download di App Store
            </a>
            <a
              href="#"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-amber-400 hover:text-amber-400"
            >
              Download di Play Store
            </a>
          </div>
        </div>

        {/* Kenapa lewat app */}
        <div className="mx-auto mt-20 grid max-w-4xl gap-6 md:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-2xl border border-white/10 bg-black/40 p-6 text-left backdrop-blur-md"
            >
              <h3 className="text-lg font-bold text-amber-400">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm text-white/70">{reason.desc}</p>
            </div>
          ))}
        </div>

        {/* Info event singkat */}
        <div className="mx-auto mt-16 max-w-4xl rounded-2xl border border-white/10 bg-black/40 p-8 text-center backdrop-blur-md md:p-10">
          <p className="text-xs uppercase tracking-widest text-white/50">
            Jadwal & Lokasi
          </p>
          <p className="mt-2 text-xl font-semibold text-white md:text-2xl">
            29–30 Mei 2026 · Jakarta International Expo
          </p>
        </div>
      </main>

      <footer className="border-t border-white/10 bg-black/40 px-6 py-6 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs text-white/50 md:flex-row">
          <p>&copy; 2026 Z Fest. All Rights Reserved</p>
          <Link href="/terms" className="text-amber-400 hover:underline">
            Terms and Conditions
          </Link>
        </div>
      </footer>
    </div>
  );
}
