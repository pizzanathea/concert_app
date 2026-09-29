"use client";

import { useState } from "react";
import DataTable, { Column } from "@/app/components/admin/DataTable";
import ConfirmDialog from "@/app/components/admin/ConfirmDialog";

type Pesanan = {
  id: number;
  pembeli: string;
  event: string;
  kelas: string;
  total: number;
  status: "Lunas" | "Pending" | "Dibatalkan";
};

const initialData: Pesanan[] = [
  { id: 1, pembeli: "Raka Pratama", event: "Z Fest Day 1", kelas: "VIP", total: 2500000, status: "Lunas" },
  { id: 2, pembeli: "Siti Halimah", event: "Z Fest Day 2", kelas: "Reguler", total: 850000, status: "Pending" },
  { id: 3, pembeli: "Dimas Anggara", event: "Z Fest Day 1", kelas: "Reguler", total: 850000, status: "Dibatalkan" },
];

const badgeClass: Record<Pesanan["status"], string> = {
  Lunas: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  Pending: "bg-amber-50 text-amber-700 border border-amber-200",
  Dibatalkan: "bg-red-50 text-red-600 border border-red-200",
};

export default function PesananPage() {
  const [data, setData] = useState<Pesanan[]>(initialData);
  const [deleteTarget, setDeleteTarget] = useState<Pesanan | null>(null);

  const formatRupiah = (n: number) =>
    new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);

  const columns: Column<Pesanan>[] = [
    { key: "pembeli", label: "Nama Pembeli" },
    { key: "event", label: "Event" },
    { key: "kelas", label: "Kelas" },
    { key: "total", label: "Total", render: (row: Pesanan) => formatRupiah(row.total) },
    {
      key: "status",
      label: "Status",
      render: (row: Pesanan) => (
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${badgeClass[row.status]}`}>
          {row.status}
        </span>
      ),
    },
  ];

  const handleDelete = () => {
    if (!deleteTarget) return;
    setData((prev) => prev.filter((item) => item.id !== deleteTarget.id));
    setDeleteTarget(null);
  };

  return (
    <>
      <div className="p-8 space-y-6 bg-white min-h-full">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600">Transaksi / Penjualan</span>
          <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-neutral-900">Daftar Pesanan</h1>
        </div>
        <DataTable columns={columns} rows={data} onDelete={setDeleteTarget} />
      </div>

      <ConfirmDialog open={!!deleteTarget} title="Hapus Pesanan?" description={`Pesanan dari "${deleteTarget?.pembeli}" akan dihapus permanen.`} onConfirm={handleDelete} onCancel={() => setDeleteTarget(null)} />
    </>
  );
}
