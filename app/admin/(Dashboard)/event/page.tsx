"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import DataTable, { Column } from "@/app/components/admin/DataTable";
import Modal from "@/app/components/admin/modal";
import ConfirmDialog from "@/app/components/admin/ConfirmDialog";

type EventItem = {
  id: number;
  nama: string;
  tanggal: string;
  status: "Buka" | "Tutup";
};

const initialData: EventItem[] = [
  { id: 1, nama: "Z Fest Day 1", tanggal: "2026-05-29", status: "Buka" },
  { id: 2, nama: "Z Fest Day 2", tanggal: "2026-05-30", status: "Buka" },
  { id: 3, nama: "Pre Event A", tanggal: "2026-04-10", status: "Tutup" },
];

const emptyForm: { nama: string; tanggal: string; status: "Buka" | "Tutup" } = { nama: "", tanggal: "", status: "Buka" };

export default function EventPage() {
  const [data, setData] = useState<EventItem[]>(initialData);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<EventItem | null>(null);
  const [form, setForm] = useState<{ nama: string; tanggal: string; status: "Buka" | "Tutup" }>(emptyForm);
  const [deleteTarget, setDeleteTarget] = useState<EventItem | null>(null);

  const columns: Column<EventItem>[] = [
    { key: "nama", label: "Nama Event" },
    { key: "tanggal", label: "Tanggal" },
    {
      key: "status",
      label: "Status",
      render: (row: EventItem) => (
        <span className={[
          "rounded-full px-3 py-1 text-xs font-semibold",
          row.status === "Buka"
            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
            : "bg-neutral-100 text-neutral-500 border border-neutral-200",
        ].join(" ")}>
          {row.status}
        </span>
      ),
    },
  ];

  const openCreate = () => { setEditing(null); setForm(emptyForm); setModalOpen(true); };
  const openEdit = (row: EventItem) => { setEditing(row); setForm({ nama: row.nama, tanggal: row.tanggal, status: row.status }); setModalOpen(true); };

  const handleSave = () => {
    if (!form.nama || !form.tanggal) return;
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
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600">Pengelolaan / Konser</span>
            <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-neutral-900">Daftar Event & Konser</h1>
          </div>
          <button
            onClick={openCreate}
            className="flex items-center gap-2 rounded-xl bg-amber-400 px-4 py-2.5 text-xs font-bold text-neutral-950 shadow-sm transition-all hover:bg-amber-300 hover:scale-105"
          >
            <Plus size={16} /> Tambah Event
          </button>
        </div>
        <DataTable columns={columns} rows={data} onEdit={openEdit} onDelete={setDeleteTarget} />
      </div>

      <Modal title={editing ? "Edit Event" : "Tambah Event"} open={modalOpen} onClose={() => setModalOpen(false)}>
        <div className="space-y-4">
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-neutral-600">Nama Event</label>
            <input value={form.nama} onChange={(e) => setForm({ ...form, nama: e.target.value })}
              className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm text-neutral-900 outline-none focus:border-amber-500"
              placeholder="Z Fest Day 1" />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-neutral-600">Tanggal</label>
            <input type="date" value={form.tanggal} onChange={(e) => setForm({ ...form, tanggal: e.target.value })}
              className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm text-neutral-900 outline-none focus:border-amber-500" />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-neutral-600">Status</label>
            <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value as "Buka" | "Tutup" })}
              className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm text-neutral-900 outline-none focus:border-amber-500">
              <option value="Buka">Buka</option>
              <option value="Tutup">Tutup</option>
            </select>
          </div>
          <button onClick={handleSave}
            className="w-full rounded-xl bg-amber-400 py-3 text-xs font-bold uppercase tracking-wider text-neutral-950 transition-colors hover:bg-amber-300 shadow-sm">
            Simpan
          </button>
        </div>
      </Modal>

      <ConfirmDialog open={!!deleteTarget} title="Hapus Event?" description={`Event "${deleteTarget?.nama}" akan dihapus permanen.`} onConfirm={handleDelete} onCancel={() => setDeleteTarget(null)} />
    </>
  );
}
