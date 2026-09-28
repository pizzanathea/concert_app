"use client";

import { Pencil, Trash2 } from "lucide-react";

export type Column<T> = {
  key: keyof T;
  label: string;
  render?: (row: T) => React.ReactNode;
};

type Props<T> = {
  columns: Column<T>[];
  rows: T[];
  onEdit: (row: T) => void;
  onDelete: (row: T) => void;
  emptyText?: string;
};

export default function DataTable<T extends { id: string | number }>({
  columns,
  rows,
  onEdit,
  onDelete,
  emptyText = "Belum ada data.",
}: Props<T>) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-white/10 text-xs uppercase tracking-wide text-white/50">
            {columns.map((col) => (
              <th key={String(col.key)} className="px-5 py-4 font-medium">
                {col.label}
              </th>
            ))}
            <th className="px-5 py-4 text-right font-medium">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length + 1}
                className="px-5 py-10 text-center text-white/40"
              >
                {emptyText}
              </td>
            </tr>
          ) : (
            rows.map((row) => (
              <tr
                key={row.id}
                className="border-b border-white/5 text-white/80 last:border-0 hover:bg-white/5"
              >
                {columns.map((col) => (
                  <td key={String(col.key)} className="px-5 py-4">
                    {col.render ? col.render(row) : String(row[col.key])}
                  </td>
                ))}
                <td className="px-5 py-4">
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => onEdit(row)}
                      className="rounded-lg p-2 text-white/50 hover:bg-amber-400/10 hover:text-amber-400"
                      aria-label="Edit"
                    >
                      <Pencil size={16} />
                    </button>
                    <button
                      onClick={() => onDelete(row)}
                      className="rounded-lg p-2 text-white/50 hover:bg-red-500/10 hover:text-red-400"
                      aria-label="Hapus"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
