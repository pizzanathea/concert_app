import Link from "next/link";
import TicketNav from "@/app/components/Ticket/TicketNav";

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
    // h-screen + overflow-hidden = halaman pas 1 layar, gak bisa di-scroll
    <div className="flex h-screen flex-col overflow-hidden bg-white text-neutral-900">
      <TicketNav />

      {/* min-h-0 wajib biar area tengah boleh mengecil dan gak ngedorong footer keluar layar */}
      <main className="flex min-h-0 flex-1 flex-col items-center justify-center px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-600">
            Z Fest 2026
          </span>
          <h1 className="mt-3 text-4xl font-extrabold text-[#0a0500] md:text-5xl">
            Pesan Tiket Lewat Aplikasi Mobile
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-neutral-600 md:text-base">
            Semua transaksi tiket Z Fest cuma bisa dilakukan lewat aplikasi
            resmi kami. Download sekarang biar gak kehabisan tiket kelas favorit
            kamu.
          </p>
        </div>

        {/* Kenapa lewat app */}
        <div className="mx-auto mt-10 grid w-full max-w-4xl gap-5 md:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-2xl border border-neutral-200 bg-white p-5 text-left shadow-sm"
            >
              <h3 className="text-lg font-bold text-amber-600">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600">{reason.desc}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer: warna sama dengan navbar, dibikin pendek (satu baris, py-4) */}
      <footer className="shrink-0 bg-[#0a0500]">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 text-xs text-white/60 lg:px-10">
          <div className="flex items-center gap-4">
            <span className="text-lg font-extrabold tracking-tight text-white">
              Z<span className="text-amber-400">FEST</span>
            </span>
            <span className="hidden sm:inline">
              &copy; 2026 Z Fest. All Rights Reserved
            </span>
          </div>
          <Link href="/terms" className="text-amber-400 hover:underline">
            Terms and Conditions
          </Link>
        </div>
      </footer>
    </div>
  );
}
