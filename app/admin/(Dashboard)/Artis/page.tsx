"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import DataTable, { Column } from "@/app/components/admin/DataTable";
import Modal from "@/app/components/admin/modal";
import ConfirmDialog from "@/app/components/admin/ConfirmDialog";

type Artis = {
  id: number;
  nama: string;
  genre: string;
};

const initialData: Artis[] = [
  { id: 1, nama: "Jon Batiste", genre: "Jazz/Soul" },
  { id: 2, nama: "Ella Mai", genre: "R&B" },
  { id: 3, nama: "wave to earth", genre: "Indie" },
];

const emptyForm = { nama: "", genre: "" };

export default function ArtisPage() {
  const [data, setData] = useState<Artis[]>(initialData);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Artis | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [deleteTarget, setDeleteTarget] = useState<Artis | null>(null);

  const columns: Column<Artis>[] = [
    { key: "nama", label: "Nama Artis" },
    { key: "genre", label: "Genre" },
  ];

  const openCreate = () => { setEditing(null); setForm(emptyForm); setModalOpen(true); };
  const openEdit = (row: Artis) => { setEditing(row); setForm({ nama: row.nama, genre: row.genre }); setModalOpen(true); };

  const handleSave = () => {
    if (!form.nama || !form.genre) return;
    if (editing) {
      setData((prev) => prev.map((item) => item.id === editing.id ? { ...item, ...form } : item));
    } else {
      setData((prev) => [...prev, { id: Date.now(), ...form }]);
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
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600">Pengelolaan / Artis</span>
            <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-neutral-900">Lineup & Artis</h1>
          </div>
          <button
            onClick={openCreate}
            className="flex items-center gap-2 rounded-xl bg-amber-400 px-4 py-2.5 text-xs font-bold text-neutral-950 shadow-sm transition-all hover:bg-amber-300 hover:scale-105"
          >
            <Plus size={16} /> Tambah Artis
          </button>
        </div>
        <DataTable columns={columns} rows={data} onEdit={openEdit} onDelete={setDeleteTarget} />
      </div>

      <Modal title={editing ? "Edit Artis" : "Tambah Artis"} open={modalOpen} onClose={() => setModalOpen(false)}>
        <div className="space-y-4">
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-neutral-600">Nama Artis</label>
            <input value={form.nama} onChange={(e) => setForm({ ...form, nama: e.target.value })}
              className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm text-neutral-900 outline-none focus:border-amber-500" placeholder="Jon Batiste" />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-neutral-600">Genre</label>
            <input value={form.genre} onChange={(e) => setForm({ ...form, genre: e.target.value })}
              className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm text-neutral-900 outline-none focus:border-amber-500" placeholder="Jazz/Soul" />
          </div>
          <button onClick={handleSave}
            className="w-full rounded-xl bg-amber-400 py-3 text-xs font-bold uppercase tracking-wider text-neutral-950 transition-colors hover:bg-amber-300 shadow-sm">
            Simpan
          </button>
        </div>
      </Modal>

      <ConfirmDialog open={!!deleteTarget} title="Hapus Artis?" description={`Data "${deleteTarget?.nama}" akan dihapus permanen.`} onConfirm={handleDelete} onCancel={() => setDeleteTarget(null)} />
    </>
  );
}
