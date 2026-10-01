import Link from "next/link";
import { Calendar, MapPin, Clock, Ticket } from "lucide-react";

const quickInfo = [
  { icon: Calendar, label: "Tanggal", value: "29–30 Mei 2026" },
  { icon: MapPin, label: "Lokasi", value: "Jakarta International Expo" },
  { icon: Clock, label: "Jam Buka Pintu", value: "15.00 WIB" },
  { icon: Ticket, label: "Kelas Tiket", value: "Reguler & VIP" },
];

const highlights = [
  {
    title: "Line Up Internasional",
    desc: "Belasan musisi dalam dan luar negeri tampil di 3 panggung berbeda sepanjang 2 hari.",
  },
  {
    title: "Area Kuliner & Komunitas",
    desc: "Puluhan tenant makanan lokal dan booth komunitas kreatif tersebar di seluruh venue.",
  },
  {
    title: "Akses Lewat Aplikasi",
    desc: "Tiket, jadwal panggung, dan peta venue semuanya ada di satu aplikasi Z Fest.",
  },
];

const faqs = [
  {
    q: "Apakah tiket bisa dibeli di tempat (on the spot)?",
    a: "Tidak. Semua tiket Z Fest hanya dijual lewat aplikasi mobile resmi untuk menghindari antrean dan tiket palsu.",
  },
  {
    q: "Apakah anak di bawah umur boleh masuk?",
    a: "Boleh, dengan pendampingan orang tua atau wali. Beberapa area khusus memiliki batas usia tersendiri.",
  },
  {
    q: "Apakah tersedia tempat parkir?",
    a: "Tersedia area parkir di venue dengan kapasitas terbatas. Kami sarankan menggunakan transportasi umum.",
  },
];

export default function FestivalInfoPage() {
  return (
    <div className="px-6 py-16 md:px-10 md:py-24 lg:px-16">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
          Z Fest 2026
        </span>
        <h1 className="mt-3 text-4xl font-extrabold text-white md:text-5xl">
          Festival Info
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm text-white/70 md:text-base">
          Semua yang perlu kamu tahu sebelum datang ke Z Fest 2026 — tanggal,
          lokasi, dan hal-hal penting lainnya.
        </p>
      </div>

      {/* Kartu info cepat */}
      <div className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {quickInfo.map(({ icon: Icon, label, value }) => (
          <div
            key={label}
            className="rounded-2xl border border-white/10 bg-black/40 p-6 text-center backdrop-blur-md"
          >
            <Icon size={22} className="mx-auto text-amber-400" />
            <p className="mt-3 text-xs uppercase tracking-widest text-white/50">
              {label}
            </p>
            <p className="mt-1 text-base font-semibold text-white">{value}</p>
          </div>
        ))}
      </div>

      {/* Tentang festival */}
      <div className="mx-auto mt-20 max-w-3xl">
        <h2 className="text-2xl font-bold text-white md:text-3xl">
          Tentang Z Fest
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">
          Z Fest adalah festival musik tahunan yang menghadirkan musisi lokal
          dan internasional lintas genre dalam satu panggung besar. Lebih dari
          sekadar konser, Z Fest adalah ruang berkumpul anak muda untuk
          merayakan musik, kreativitas, dan budaya bareng-bareng.
        </p>
      </div>

      {/* Highlight */}
      <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-md"
          >
            <h3 className="text-lg font-bold text-amber-400">{item.title}</h3>
            <p className="mt-2 text-sm text-white/70">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* FAQ singkat */}
      <div className="mx-auto mt-20 max-w-3xl">
        <h2 className="text-2xl font-bold text-white md:text-3xl">
          Pertanyaan Umum
        </h2>
        <div className="mt-6 divide-y divide-white/10 border-y border-white/10">
          {faqs.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="cursor-pointer list-none text-sm font-semibold text-white marker:content-none md:text-base">
                {item.q}
              </summary>
              <p className="mt-3 text-sm text-white/60">{item.a}</p>
            </details>
          ))}
        </div>
      </div>

      {/* CTA ke Tickets */}
      <div className="mx-auto mt-20 max-w-3xl rounded-2xl border border-white/10 bg-black/40 p-10 text-center backdrop-blur-md">
        <h2 className="text-xl font-bold text-white md:text-2xl">
          Siap gabung di Z Fest 2026?
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-white/60">
          Pesan tiketmu sekarang lewat aplikasi mobile Z Fest sebelum kehabisan.
        </p>
        <Link
          href="/Tickets"
          className="mt-6 inline-block rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-[#0a0500] transition-transform hover:scale-105"
        >
          Lihat Cara Pesan Tiket
        </Link>
      </div>
    </div>
  );
}
