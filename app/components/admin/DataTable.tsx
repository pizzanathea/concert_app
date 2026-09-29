"use client";

import { ReactNode } from "react";
import { Pencil, Trash2 } from "lucide-react";

export type Column<T> = {
  key: keyof T;
  label: string;
  render?: (row: T) => ReactNode;
};

type Props<T extends { id: number }> = {
  columns: Column<T>[];
  rows: T[];
  onEdit: (row: T) => void;
  onDelete: (row: T) => void;
};

export default function DataTable<T extends { id: number }>({
  columns,
  rows,
  onEdit,
  onDelete,
}: Props<T>) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/10 bg-white/5">
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-white/40">
              #
            </th>
            {columns.map((col) => (
              <th
                key={String(col.key)}
                className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-white/40"
              >
                {col.label}
              </th>
            ))}
            <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-white/40">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length + 2}
                className="px-4 py-8 text-center text-sm text-white/30"
              >
                Belum ada data.
              </td>
            </tr>
          ) : (
            rows.map((row, i) => (
              <tr
                key={row.id}
                className="border-b border-white/5 transition-colors hover:bg-white/5"
              >
                <td className="px-4 py-3 text-white/30">{i + 1}</td>
                {columns.map((col) => (
                  <td key={String(col.key)} className="px-4 py-3 text-white/80">
                    {col.render ? col.render(row) : String(row[col.key] ?? "")}
                  </td>
                ))}
                <td className="px-4 py-3">
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => onEdit(row)}
                      className="rounded-lg p-2 text-white/50 transition-colors hover:bg-amber-400/10 hover:text-amber-400"
                      aria-label="Edit"
                    >
                      <Pencil size={14} />
                    </button>
                    <button
                      onClick={() => onDelete(row)}
                      className="rounded-lg p-2 text-white/50 transition-colors hover:bg-red-500/10 hover:text-red-400"
                      aria-label="Hapus"
                    >
                      <Trash2 size={14} />
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
