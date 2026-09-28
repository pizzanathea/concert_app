"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import Topbar from "@/app/components/admin/Topbar";
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

const emptyForm = { nama: "", tanggal: "", status: "Buka" as const };

export default function EventPage() {
  const [data, setData] = useState<EventItem[]>(initialData);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<EventItem | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [deleteTarget, setDeleteTarget] = useState<EventItem | null>(null);

  const columns: Column<EventItem>[] = [
    { key: "nama", label: "Nama Event" },
    { key: "tanggal", label: "Tanggal" },
    {
      key: "status",
      label: "Status",
      render: (row) => (
        <span
          className={[
            "rounded-full px-3 py-1 text-xs font-semibold",
            row.status === "Buka"
              ? "bg-green-500/10 text-green-400"
              : "bg-white/10 text-white/50",
          ].join(" ")}
        >
          {row.status}
        </span>
      ),
    },
  ];

  const openCreate = () => {
    setEditing(null);
    setForm(emptyForm);
    setModalOpen(true);
  };

  const openEdit = (row: EventItem) => {
    setEditing(row);
    setForm({ nama: row.nama, tanggal: row.tanggal, status: row.status });
    setModalOpen(true);
  };

  const handleSave = () => {
    if (!form.nama || !form.tanggal) return;

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
      <Topbar title="Event/Konser" />

      <div className="p-8">
        <div className="mb-5 flex justify-end">
          <button
            onClick={openCreate}
            className="flex items-center gap-2 rounded-lg bg-amber-400 px-4 py-2.5 text-sm font-semibold text-[#0a0500] transition-transform hover:scale-105"
          >
            <Plus size={16} />
            Tambah Event
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
        title={editing ? "Edit Event" : "Tambah Event"}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      >
        <div className="space-y-4">
          <div>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-white/60">
              Nama Event
            </label>
            <input
              value={form.nama}
              onChange={(e) => setForm({ ...form, nama: e.target.value })}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none focus:border-amber-400"
              placeholder="Z Fest Day 1"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-white/60">
              Tanggal
            </label>
            <input
              type="date"
              value={form.tanggal}
              onChange={(e) => setForm({ ...form, tanggal: e.target.value })}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none focus:border-amber-400"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-white/60">
              Status
            </label>
            <select
              value={form.status}
              onChange={(e) =>
                setForm({ ...form, status: e.target.value as "Buka" | "Tutup" })
              }
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none focus:border-amber-400"
            >
              <option value="Buka">Buka</option>
              <option value="Tutup">Tutup</option>
            </select>
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
        title="Hapus Event?"
        description={`Event "${deleteTarget?.nama}" akan dihapus permanen.`}
        onConfirm={handleDelete}
        onCancel={() => setDeleteTarget(null)}
      />
    </>
  );
}
