"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import Topbar from "@/app/components/admin/Topbar";
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
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(n);

  const columns: Column<Kategori>[] = [
    { key: "nama", label: "Kelas Tiket" },
    { key: "harga", label: "Harga", render: (row) => formatRupiah(row.harga) },
    {
      key: "kuota",
      label: "Sisa Kuota",
      render: (row) => {
        const sisa = row.kuota - row.terjual;
        const pct = (row.terjual / row.kuota) * 100;
        return (
          <div className="w-40">
            <div className="mb-1 flex justify-between text-xs text-white/60">
              <span>{sisa} tersisa</span>
              <span>{row.kuota} total</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full bg-amber-400"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
        );
      },
    },
  ];

  const openCreate = () => {
    setEditing(null);
    setForm(emptyForm);
    setModalOpen(true);
  };

  const openEdit = (row: Kategori) => {
    setEditing(row);
    setForm({ nama: row.nama, harga: row.harga, kuota: row.kuota });
    setModalOpen(true);
  };

  const handleSave = () => {
    if (!form.nama || form.harga <= 0 || form.kuota <= 0) return;

    if (editing) {
      setData((prev) =>
        prev.map((item) =>
          item.id === editing.id ? { ...item, ...form } : item,
        ),
      );
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
      <Topbar title="Kategori Tiket" />

      <div className="p-8">
        <div className="mb-5 flex justify-end">
          <button
            onClick={openCreate}
            className="flex items-center gap-2 rounded-lg bg-amber-400 px-4 py-2.5 text-sm font-semibold text-[#0a0500] transition-transform hover:scale-105"
          >
            <Plus size={16} />
            Tambah Kategori
          </button>
        </div>

        <DataTable
          columns={columns}
          rows={data}
          onEdit={openEdit}
          onDelete={setDeleteTarget}
        />
      </div>

      <Modal
        title={editing ? "Edit Kategori Tiket" : "Tambah Kategori Tiket"}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      >
        <div className="space-y-4">
          <div>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-white/60">
              Nama Kelas
            </label>
            <input
              value={form.nama}
              onChange={(e) => setForm({ ...form, nama: e.target.value })}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none focus:border-amber-400"
              placeholder="VIP"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-white/60">
              Harga (Rp)
            </label>
            <input
              type="number"
              value={form.harga || ""}
              onChange={(e) =>
                setForm({ ...form, harga: Number(e.target.value) })
              }
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none focus:border-amber-400"
              placeholder="2500000"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-white/60">
              Kuota Tiket
            </label>
            <input
              type="number"
              value={form.kuota || ""}
              onChange={(e) =>
                setForm({ ...form, kuota: Number(e.target.value) })
              }
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none focus:border-amber-400"
              placeholder="200"
            />
          </div>

          <button
            onClick={handleSave}
            className="w-full rounded-lg bg-amber-400 py-2.5 text-sm font-semibold text-[#0a0500] hover:scale-[1.02] transition-transform"
          >
            Simpan
          </button>
        </div>
      </Modal>

      <ConfirmDialog
        open={!!deleteTarget}
        title="Hapus Kategori?"
        description={`Kategori "${deleteTarget?.nama}" akan dihapus permanen.`}
        onConfirm={handleDelete}
        onCancel={() => setDeleteTarget(null)}
      />
    </>
  );
}
