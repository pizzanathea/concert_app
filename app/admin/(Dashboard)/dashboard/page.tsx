"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, AlertCircle, X, ShieldCheck } from "lucide-react";

type QueueOrder = {
  id: string;
  name: string;
  timeAgo: string;
  category: string;
  qty: number;
  total: number;
  status: "Menunggu verifikasi" | "Lunas" | "Ditolak";
};

const initialQueue: QueueOrder[] = [
  {
    id: "ZF-260918",
    name: "Dinda Prameswari",
    timeAgo: "4 menit lalu",
    category: "Festival",
    qty: 2,
    total: 350000,
    status: "Menunggu verifikasi",
  },
  {
    id: "ZF-260917",
    name: "Raka Aditya",
    timeAgo: "12 menit lalu",
    category: "CAT 2",
    qty: 1,
    total: 325000,
    status: "Menunggu verifikasi",
  },
  {
    id: "ZF-260916",
    name: "Alya Putri",
    timeAgo: "21 menit lalu",
    category: "CAT 1",
    qty: 1,
    total: 475000,
    status: "Menunggu verifikasi",
  },
];

const phases = [
  { num: "01", date: "01 Agu", title: "Pengumuman", status: "Selesai", state: "done" },
  { num: "02", date: "15 Agu", title: "Presale", status: "Selesai", state: "done" },
  { num: "03", date: "25 Agu", title: "Early bird", status: "Selesai", state: "done" },
  { num: "04", date: "01 Sep", title: "Penjualan umum", status: "Sedang berjalan", state: "current" },
  { num: "05", date: "01 Nov", title: "Rilis akhir", status: "Terjadwal", state: "upcoming" },
  { num: "06", date: "18 Nov", title: "Hari acara", status: "Terjadwal", state: "upcoming" },
  { num: "07", date: "19 Nov", title: "Ditutup", status: "Terjadwal", state: "upcoming" },
];

const inventory = [
  { category: "Festival", quota: 1500, ordered: 32, pending: 48, paid: 1120, remaining: 300, pct: 75 },
  { category: "CAT 2", quota: 600, ordered: 12, pending: 18, paid: 420, remaining: 150, pct: 70 },
  { category: "CAT 1", quota: 400, ordered: 8, pending: 12, paid: 320, remaining: 60, pct: 80 },
  { category: "VIP", quota: 100, ordered: 0, pending: 0, paid: 100, remaining: 0, pct: 100 },
];

export default function DashboardPage() {
  const [queue, setQueue] = useState<QueueOrder[]>(initialQueue);
  const [selectedOrder, setSelectedOrder] = useState<QueueOrder | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleApprove = (orderId: string) => {
    setQueue((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, status: "Lunas" } : o))
    );
    setSelectedOrder(null);
    showToast("Pembayaran diverifikasi. Tiket digital berhasil diterbitkan.");
  };

  const handleReject = (orderId: string) => {
    setQueue((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, status: "Ditolak" } : o))
    );
    setSelectedOrder(null);
    showToast("Pembayaran ditolak. Alasan penolakan telah dicatat.");
  };

  const formatRupiah = (num: number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(num);

  return (
    <div className="px-6 py-8 md:px-8 space-y-8">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-xl border border-amber-400/40 bg-[#1a140b] px-4 py-3 text-sm text-amber-200 shadow-2xl backdrop-blur-md transition-all animate-bounce">
          <CheckCircle2 size={18} className="text-amber-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Section Head: Pusat festival / Edisi 2026 */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
            Pusat festival / Edisi 2026
          </span>
          <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Menuju hari pertemuan.
          </h1>
        </div>
        <Link
          href="/admin/event"
          className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:border-amber-400/40 hover:bg-white/10"
        >
          Kelola festival
          <ArrowRight size={15} className="text-amber-400" />
        </Link>
      </div>

      {/* Phase Line (Timeline 7 Tahapan) */}
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-4 lg:grid-cols-7">
        {phases.map((p) => {
          const isCurrent = p.state === "current";
          return (
            <div
              key={p.num}
              className={[
                "flex flex-col justify-between p-4 transition-colors",
                isCurrent
                  ? "bg-amber-400 text-[#0a0500] ring-2 ring-amber-400/80 z-10"
                  : "bg-[#0a0500] text-white hover:bg-white/[0.02]",
              ].join(" ")}
            >
              <small
                className={[
                  "text-[11px] font-mono",
                  isCurrent ? "text-[#0a0500]/70 font-semibold" : "text-white/40",
                ].join(" ")}
              >
                {p.num} / {p.date}
              </small>
              <strong
                className={[
                  "my-2 text-base font-bold tracking-tight block",
                  isCurrent ? "text-[#0a0500]" : "text-white",
                ].join(" ")}
              >
                {p.title}
              </strong>
              <span
                className={[
                  "text-xs inline-flex items-center gap-1",
                  isCurrent
                    ? "font-semibold text-[#0a0500]"
                    : p.state === "done"
                    ? "text-emerald-400/80"
                    : "text-white/40",
                ].join(" ")}
              >
                {isCurrent && <span className="h-1.5 w-1.5 rounded-full bg-[#0a0500] animate-ping" />}
                {p.status}
              </span>
            </div>
          );
        })}
      </div>

      {/* Festival Admin: Grid 1.6fr / 1fr */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.6fr_1fr]">
        {/* Left Column: Inventori Tiket & Antrean Pembayaran */}
        <section className="space-y-8">
          {/* Table Inventori */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-white/50">
                Penjualan umum / inventori
              </span>
              <span className="text-xs text-white/40">Z FEST 2026</span>
            </div>

            <div className="overflow-hidden rounded-xl border border-white/10 bg-[#141008]">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5 text-[11px] uppercase tracking-wider text-white/40">
                    <th className="px-4 py-3 font-semibold">Kategori</th>
                    <th className="px-4 py-3 font-semibold text-right">Kuota</th>
                    <th className="px-4 py-3 font-semibold text-right">Dipesan</th>
                    <th className="px-4 py-3 font-semibold text-right">Menunggu</th>
                    <th className="px-4 py-3 font-semibold text-right">Lunas</th>
                    <th className="px-4 py-3 font-semibold text-right">Tersisa</th>
                    <th className="px-4 py-3 font-semibold text-left">Terjual</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {inventory.map((row) => (
                    <tr
                      key={row.category}
                      className="text-white/80 transition-colors hover:bg-white/5"
                    >
                      <th className="px-4 py-3.5 font-bold text-white">{row.category}</th>
                      <td className="px-4 py-3.5 text-right font-mono text-white/70">
                        {row.quota.toLocaleString("id-ID")}
                      </td>
                      <td className="px-4 py-3.5 text-right font-mono text-white/50">{row.ordered}</td>
                      <td className="px-4 py-3.5 text-right font-mono text-amber-400/90">{row.pending}</td>
                      <td className="px-4 py-3.5 text-right font-mono font-medium text-emerald-400">
                        {row.paid.toLocaleString("id-ID")}
                      </td>
                      <td className="px-4 py-3.5 text-right font-mono text-white/50">{row.remaining}</td>
                      <td className="px-4 py-3.5">
                        <div className="flex items-center gap-2">
                          <div className="h-1.5 w-16 overflow-hidden rounded-full bg-white/10">
                            <div
                              className="h-full bg-amber-400 transition-all duration-500"
                              style={{ width: `${row.pct}%` }}
                            />
                          </div>
                          <span className="font-mono text-xs text-white/60">{row.pct}%</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Antrean Pembayaran */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h2 className="text-lg font-bold text-white">Antrean pembayaran</h2>
              <Link
                href="/admin/pesanan"
                className="text-xs font-semibold text-amber-400 underline decoration-amber-400/30 underline-offset-4 transition-colors hover:text-amber-300"
              >
                Lihat semua
              </Link>
            </div>

            <div className="divide-y divide-white/10 rounded-xl border border-white/10 bg-[#141008] px-4">
              {queue.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <strong className="block text-sm font-semibold text-white">{item.name}</strong>
                    <small className="flex items-center gap-1.5 text-xs text-white/40">
                      <Clock size={12} />
                      {item.id} · {item.timeAgo} · {item.category} ({item.qty} tiket)
                    </small>
                  </div>
                  <div className="flex items-center justify-between gap-4 sm:justify-end">
                    <span className="font-mono text-sm font-semibold text-white">
                      {formatRupiah(item.total)}
                    </span>
                    {item.status === "Lunas" ? (
                      <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                        Lunas
                      </span>
                    ) : item.status === "Ditolak" ? (
                      <span className="rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-400">
                        Ditolak
                      </span>
                    ) : (
                      <button
                        onClick={() => setSelectedOrder(item)}
                        className="rounded-lg border border-amber-400/30 bg-amber-400/10 px-3 py-1.5 text-xs font-semibold text-amber-400 transition-colors hover:bg-amber-400 hover:text-[#0a0500]"
                      >
                        Periksa
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Right Column: Aside (Rilis aktif & Note box) */}
        <aside className="space-y-6">
          {/* Card Rilis Aktif */}
          <div className="relative overflow-hidden rounded-2xl border border-amber-400/20 bg-gradient-to-br from-[#1a1205] to-[#120d04] p-6 shadow-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
              Rilis aktif
            </span>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-white">
              Senandika<br />Festival 2026
            </h2>
            <strong className="my-5 block text-5xl font-extrabold tracking-tight text-white">
              1.960
            </strong>
            <p className="text-sm text-white/60">
              tiket telah lunas dari 2.600 total kuota
            </p>

            <div className="mt-6">
              <div className="mb-2 flex justify-between text-xs text-white/50">
                <span>Progres kuota</span>
                <span className="font-mono font-semibold text-amber-400">75%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-amber-500 to-amber-300"
                  style={{ width: "75%" }}
                />
              </div>
            </div>
          </div>

          {/* Note Box */}
          <div className="rounded-xl border-l-4 border-amber-400 bg-white/5 p-5">
            <div className="flex items-start gap-3">
              <AlertCircle size={18} className="mt-0.5 text-amber-400 shrink-0" />
              <div>
                <strong className="block text-sm font-semibold text-white">
                  Persiapan rilis akhir
                </strong>
                <p className="mt-1 text-xs leading-relaxed text-white/60">
                  Pastikan kuota dan harga tiket sudah diperiksa sebelum fase berikutnya dibuka pada 1 November.
                </p>
              </div>
            </div>
          </div>

          {/* Button Kelola Tahapan Tiket */}
          <Link
            href="/admin/kategori-tiket"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400 px-5 py-3 text-sm font-bold text-[#0a0500] shadow-lg shadow-amber-400/10 transition-all hover:bg-amber-300 hover:scale-[1.01]"
          >
            Kelola tahapan tiket
            <ArrowRight size={16} />
          </Link>
        </aside>
      </div>

      {/* Modal Dialog Detail Pesanan (Periksa) */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#141008] p-6 shadow-2xl">
            {/* Modal Head */}
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400">
                  Verifikasi Pembayaran
                </span>
                <h3 className="text-lg font-bold text-white">
                  Detail pesanan {selectedOrder.id}
                </h3>
              </div>
              <button
                onClick={() => setSelectedOrder(null)}
                className="rounded-lg p-1 text-white/50 hover:bg-white/10 hover:text-white"
                aria-label="Tutup"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-bold text-white">{selectedOrder.name}</h4>
                <p className="mt-1 text-sm text-white/60">
                  Z FEST 2026 · {selectedOrder.category} × {selectedOrder.qty} tiket
                </p>
              </div>

              <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3">
                <span className="text-xs uppercase tracking-wide text-white/50">Total Tagihan</span>
                <strong className="text-lg font-bold text-amber-400">
                  {formatRupiah(selectedOrder.total)}
                </strong>
              </div>

              {/* Note Status */}
              <div className="rounded-lg border-l-2 border-amber-400 bg-amber-400/5 p-3 text-xs text-amber-200/90">
                <strong className="block text-amber-300">Menunggu verifikasi</strong>
                Tiket digital akan langsung diterbitkan setelah Anda menyetujui transaksi ini.
              </div>

              {/* Bukti Pembayaran Panel */}
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-white/40">
                  Bukti Pembayaran
                </span>
                <div className="rounded-xl border border-white/10 bg-[#0d0904] p-4 font-mono text-xs">
                  <div className="mb-2 flex items-center justify-between text-[10px] text-white/40">
                    <span>BUKTI SIMULASI · BUKAN TRANSAKSI BANK</span>
                    <ShieldCheck size={14} className="text-emerald-400" />
                  </div>
                  <div className="my-2 border-y border-white/5 py-2">
                    <strong className="block text-sm font-sans font-bold text-white">
                      Transfer Berhasil
                    </strong>
                    <p className="text-xs text-white/70">
                      {formatRupiah(selectedOrder.total)} · {selectedOrder.name}
                    </p>
                  </div>
                  <div className="flex justify-between text-[11px] text-white/40">
                    <span>Referensi: DEMO-{selectedOrder.id}</span>
                    <span>BCA Virtual Account</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-6 flex gap-3 pt-2">
                <button
                  onClick={() => handleReject(selectedOrder.id)}
                  className="flex-1 rounded-xl border border-red-500/30 bg-red-500/10 py-2.5 text-xs font-semibold text-red-400 transition-colors hover:bg-red-500 hover:text-white"
                >
                  Tolak pembayaran
                </button>
                <button
                  onClick={() => handleApprove(selectedOrder.id)}
                  className="flex-1 rounded-xl bg-amber-400 py-2.5 text-xs font-bold text-[#0a0500] transition-transform hover:bg-amber-300 hover:scale-[1.01]"
                >
                  Verifikasi & terbitkan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
