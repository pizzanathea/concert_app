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

  const openCreate = () => {
    setEditing(null);
    setForm(emptyForm);
    setModalOpen(true);
  };

  const openEdit = (row: Artis) => {
    setEditing(row);
    setForm({ nama: row.nama, genre: row.genre });
    setModalOpen(true);
  };

  const handleSave = () => {
    if (!form.nama || !form.genre) return;

    if (editing) {
      setData((prev) =>
        prev.map((item) =>
          item.id === editing.id ? { ...item, ...form } : item,
        ),
      );
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

      <div className="p-8">
        <div className="mb-5 flex justify-end">
          <button
            onClick={openCreate}
            className="flex items-center gap-2 rounded-lg bg-amber-400 px-4 py-2.5 text-sm font-semibold text-[#0a0500] transition-transform hover:scale-105"
          >
            <Plus size={16} />
            Tambah Artis
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
        title={editing ? "Edit Artis" : "Tambah Artis"}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      >
        <div className="space-y-4">
          <div>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-white/60">
              Nama Artis
            </label>
            <input
              value={form.nama}
              onChange={(e) => setForm({ ...form, nama: e.target.value })}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none focus:border-amber-400"
              placeholder="Jon Batiste"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-white/60">
              Genre
            </label>
            <input
              value={form.genre}
              onChange={(e) => setForm({ ...form, genre: e.target.value })}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none focus:border-amber-400"
              placeholder="Jazz/Soul"
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
        title="Hapus Artis?"
        description={`Data "${deleteTarget?.nama}" akan dihapus permanen.`}
        onConfirm={handleDelete}
        onCancel={() => setDeleteTarget(null)}
      />
    </>
  );
}
