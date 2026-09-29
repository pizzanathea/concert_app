"use client";

import { useState } from "react";
import { Check, X, Search } from "lucide-react";

export type Pesanan = {
  id: string;
  nama: string;
  event: string;
  kelas: string;
  jumlah: number;
  total: number;
  tanggal: string;
  status: "Menunggu verifikasi" | "Lunas" | "Ditolak";
};

const initialData: Pesanan[] = [
  {
    id: "ZF-260918",
    nama: "Dinda Prameswari",
    event: "Z FEST 2026",
    kelas: "Festival",
    jumlah: 2,
    total: 350000,
    tanggal: "23 Sep 2026",
    status: "Menunggu verifikasi",
  },
  {
    id: "ZF-260917",
    nama: "Raka Aditya",
    event: "Z FEST 2026",
    kelas: "CAT 2",
    jumlah: 1,
    total: 325000,
    tanggal: "23 Sep 2026",
    status: "Menunggu verifikasi",
  },
  {
    id: "ZF-260916",
    nama: "Alya Putri",
    event: "Z FEST 2026",
    kelas: "CAT 1",
    jumlah: 1,
    total: 475000,
    tanggal: "23 Sep 2026",
    status: "Menunggu verifikasi",
  },
  {
    id: "ZF-260915",
    nama: "Budi Santoso",
    event: "Z FEST 2026",
    kelas: "VIP",
    jumlah: 2,
    total: 1700000,
    tanggal: "22 Sep 2026",
    status: "Lunas",
  },
  {
    id: "ZF-260914",
    nama: "Siti Aminah",
    event: "Z FEST 2026",
    kelas: "Festival",
    jumlah: 4,
    total: 700000,
    tanggal: "21 Sep 2026",
    status: "Lunas",
  },
  {
    id: "ZF-260913",
    nama: "Andi Wijaya",
    event: "Z FEST 2026",
    kelas: "Festival",
    jumlah: 1,
    total: 175000,
    tanggal: "20 Sep 2026",
    status: "Ditolak",
  },
];

export default function PesananPage() {
  const [data, setData] = useState<Pesanan[]>(initialData);
  const [filterStatus, setFilterStatus] = useState<string>("Semua");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const updateStatus = (id: string, status: Pesanan["status"]) => {
    setData((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status } : item)),
    );
  };

  const statusStyle: Record<Pesanan["status"], string> = {
    "Menunggu verifikasi": "bg-amber-400/10 text-amber-400 border border-amber-400/20",
    Lunas: "bg-green-500/10 text-green-400 border border-green-500/20",
    Ditolak: "bg-red-500/10 text-red-400 border border-red-500/20",
  };

  const filteredData = data.filter((item) => {
    const matchStatus = filterStatus === "Semua" || item.status === filterStatus;
    const matchQuery =
      item.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchStatus && matchQuery;
  });

  const formatRupiah = (num: number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(num);

  return (
    <div className="p-8 space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
            Pengelolaan / Pesanan
          </span>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-white">
            Daftar Pesanan & Verifikasi
          </h1>
        </div>

        {/* Filter controls */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={16} />
            <input
              type="text"
              placeholder="Cari pesanan atau nama..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="rounded-lg border border-white/10 bg-white/5 pl-9 pr-4 py-2 text-xs text-white placeholder-white/40 outline-none focus:border-amber-400"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="rounded-lg border border-white/10 bg-[#141008] px-3 py-2 text-xs text-white outline-none focus:border-amber-400"
          >
            <option value="Semua">Semua Status</option>
            <option value="Menunggu verifikasi">Menunggu verifikasi</option>
            <option value="Lunas">Lunas</option>
            <option value="Ditolak">Ditolak</option>
          </select>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-white/10 bg-[#141008]">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-white/5 text-xs uppercase tracking-wider text-white/40">
              <th className="px-5 py-4 font-semibold">ID Pesanan</th>
              <th className="px-5 py-4 font-semibold">Pemesan</th>
              <th className="px-5 py-4 font-semibold">Kelas</th>
              <th className="px-5 py-4 font-semibold">Jumlah</th>
              <th className="px-5 py-4 font-semibold">Total</th>
              <th className="px-5 py-4 font-semibold">Status</th>
              <th className="px-5 py-4 text-right font-semibold">Tindakan</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-5 py-8 text-center text-sm text-white/40">
                  Tidak ada pesanan ditemukan.
                </td>
              </tr>
            ) : (
              filteredData.map((row) => (
                <tr
                  key={row.id}
                  className="border-b border-white/5 text-white/80 transition-colors last:border-0 hover:bg-white/5"
                >
                  <td className="px-5 py-4 font-mono font-medium text-amber-400">{row.id}</td>
                  <td className="px-5 py-4">
                    <strong className="text-white block">{row.nama}</strong>
                    <span className="text-xs text-white/40">{row.tanggal}</span>
                  </td>
                  <td className="px-5 py-4">{row.kelas}</td>
                  <td className="px-5 py-4">{row.jumlah} tiket</td>
                  <td className="px-5 py-4 font-medium text-white">{formatRupiah(row.total)}</td>
                  <td className="px-5 py-4">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${statusStyle[row.status]}`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    {row.status === "Menunggu verifikasi" ? (
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => updateStatus(row.id, "Lunas")}
                          className="flex items-center gap-1 rounded-lg bg-green-500/10 px-2.5 py-1.5 text-xs font-medium text-green-400 transition-colors hover:bg-green-500 hover:text-white"
                          title="Verifikasi Pembayaran"
                        >
                          <Check size={14} />
                          Verifikasi
                        </button>
                        <button
                          onClick={() => updateStatus(row.id, "Ditolak")}
                          className="flex items-center gap-1 rounded-lg bg-red-500/10 px-2.5 py-1.5 text-xs font-medium text-red-400 transition-colors hover:bg-red-500 hover:text-white"
                          title="Tolak Pembayaran"
                        >
                          <X size={14} />
                          Tolak
                        </button>
                      </div>
                    ) : (
                      <span className="block text-right text-xs text-white/30">—</span>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
