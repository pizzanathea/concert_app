"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import Topbar from "@/app/components/admin/Topbar";

type Pesanan = {
  id: number;
  nama: string;
  event: string;
  kelas: string;
  jumlah: number;
  status: "Pending" | "Lunas" | "Ditolak";
};

const initialData: Pesanan[] = [
  {
    id: 1,
    nama: "Budi Santoso",
    event: "Z Fest Day 1",
    kelas: "VIP",
    jumlah: 2,
    status: "Pending",
  },
  {
    id: 2,
    nama: "Siti Aminah",
    event: "Z Fest Day 2",
    kelas: "Reguler",
    jumlah: 4,
    status: "Lunas",
  },
  {
    id: 3,
    nama: "Andi Wijaya",
    event: "Z Fest Day 1",
    kelas: "Reguler",
    jumlah: 1,
    status: "Pending",
  },
];

export default function PesananPage() {
  const [data, setData] = useState<Pesanan[]>(initialData);

  const updateStatus = (id: number, status: Pesanan["status"]) => {
    setData((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status } : item)),
    );
  };

  const statusStyle = {
    Pending: "bg-amber-400/10 text-amber-400",
    Lunas: "bg-green-500/10 text-green-400",
    Ditolak: "bg-red-500/10 text-red-400",
  };

  return (
    <>
      <Topbar title="Daftar Pesanan" />

      <div className="p-8">
        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs uppercase tracking-wide text-white/50">
                <th className="px-5 py-4 font-medium">Pemesan</th>
                <th className="px-5 py-4 font-medium">Event</th>
                <th className="px-5 py-4 font-medium">Kelas</th>
                <th className="px-5 py-4 font-medium">Jumlah</th>
                <th className="px-5 py-4 font-medium">Status</th>
                <th className="px-5 py-4 text-right font-medium">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr
                  key={row.id}
                  className="border-b border-white/5 text-white/80 last:border-0 hover:bg-white/5"
                >
                  <td className="px-5 py-4">{row.nama}</td>
                  <td className="px-5 py-4">{row.event}</td>
                  <td className="px-5 py-4">{row.kelas}</td>
                  <td className="px-5 py-4">{row.jumlah}</td>
                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyle[row.status]}`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    {row.status === "Pending" ? (
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => updateStatus(row.id, "Lunas")}
                          className="rounded-lg p-2 text-white/50 hover:bg-green-500/10 hover:text-green-400"
                          aria-label="Verifikasi"
                        >
                          <Check size={16} />
                        </button>
                        <button
                          onClick={() => updateStatus(row.id, "Ditolak")}
                          className="rounded-lg p-2 text-white/50 hover:bg-red-500/10 hover:text-red-400"
                          aria-label="Tolak"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ) : (
                      <span className="block text-right text-xs text-white/30">
                        —
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
