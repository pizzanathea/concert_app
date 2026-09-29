"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import DataTable, { Column } from "@/app/components/admin/DataTable";
import Modal from "@/app/components/admin/modal";
import ConfirmDialog from "@/app/components/admin/ConfirmDialog";

type Kategori = {
  id: number;
  nama: string;
  harga: number;
  kuota: number;
  terjual: number;
};

const initialData: Kategori[] = [
  { id: 1, nama: "VIP", harga: 2500000, kuota: 200, terjual: 150 },
  { id: 2, nama: "Reguler", harga: 850000, kuota: 1000, terjual: 640 },
];

const emptyForm = { nama: "", harga: 0, kuota: 0 };

export default function KategoriTiketPage() {
  const [data, setData] = useState<Kategori[]>(initialData);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Kategori | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [deleteTarget, setDeleteTarget] = useState<Kategori | null>(null);

  const formatRupiah = (n: number) =>
    new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);

  const columns: Column<Kategori>[] = [
    { key: "nama", label: "Kelas Tiket" },
    { key: "harga", label: "Harga", render: (row: Kategori) => formatRupiah(row.harga) },
    {
      key: "kuota",
      label: "Sisa Kuota",
      render: (row: Kategori) => {
        const sisa = row.kuota - row.terjual;
        const pct = (row.terjual / row.kuota) * 100;
        return (
          <div className="w-44">
            <div className="mb-1.5 flex justify-between text-xs text-neutral-600 font-medium">
              <span>{sisa} tersisa</span>
              <span>{row.kuota} total</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-neutral-200">
              <div className="h-full bg-amber-500" style={{ width: `${pct}%` }} />
            </div>
          </div>
        );
      },
    },
  ];

  const openCreate = () => { setEditing(null); setForm(emptyForm); setModalOpen(true); };
  const openEdit = (row: Kategori) => { setEditing(row); setForm({ nama: row.nama, harga: row.harga, kuota: row.kuota }); setModalOpen(true); };

  const handleSave = () => {
    if (!form.nama || form.harga <= 0 || form.kuota <= 0) return;
    if (editing) {
      setData((prev) => prev.map((item) => item.id === editing.id ? { ...item, ...form } : item));
    } else {
      setData((prev) => [...prev, { id: Date.now(), ...form, terjual: 0 }]);
    }
    setModalOpen(false);
  };

  const handleDelete = () => {
    if (!deleteTarget) return;
    setData((prev) => prev.filter((item) => item.id !== deleteTarget.id));
    setDeleteTarget(null);
  };

  return (
    <>
      <div className="p-8 space-y-6 bg-white min-h-full">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600">Pengelolaan / Tiket</span>
            <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-neutral-900">Kategori & Harga Tiket</h1>
          </div>
          <button
            onClick={openCreate}
            className="flex items-center gap-2 rounded-xl bg-amber-400 px-4 py-2.5 text-xs font-bold text-neutral-950 shadow-sm transition-all hover:bg-amber-300 hover:scale-105"
          >
            <Plus size={16} /> Tambah Kategori
          </button>
        </div>
        <DataTable columns={columns} rows={data} onEdit={openEdit} onDelete={setDeleteTarget} />
      </div>

      <Modal title={editing ? "Edit Kategori Tiket" : "Tambah Kategori Tiket"} open={modalOpen} onClose={() => setModalOpen(false)}>
        <div className="space-y-4">
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-neutral-600">Nama Kelas</label>
            <input value={form.nama} onChange={(e) => setForm({ ...form, nama: e.target.value })}
              className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm text-neutral-900 outline-none focus:border-amber-500" placeholder="VIP" />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-neutral-600">Harga (Rp)</label>
            <input type="number" value={form.harga || ""} onChange={(e) => setForm({ ...form, harga: Number(e.target.value) })}
              className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm text-neutral-900 outline-none focus:border-amber-500" placeholder="2500000" />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-neutral-600">Kuota Tiket</label>
            <input type="number" value={form.kuota || ""} onChange={(e) => setForm({ ...form, kuota: Number(e.target.value) })}
              className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm text-neutral-900 outline-none focus:border-amber-500" placeholder="200" />
          </div>
          <button onClick={handleSave}
            className="w-full rounded-xl bg-amber-400 py-3 text-xs font-bold uppercase tracking-wider text-neutral-950 transition-colors hover:bg-amber-300 shadow-sm">
            Simpan
          </button>
        </div>
      </Modal>

      <ConfirmDialog open={!!deleteTarget} title="Hapus Kategori?" description={`Kategori "${deleteTarget?.nama}" akan dihapus permanen.`} onConfirm={handleDelete} onCancel={() => setDeleteTarget(null)} />
    </>
  );
}
