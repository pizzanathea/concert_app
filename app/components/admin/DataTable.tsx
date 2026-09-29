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
  onEdit?: (row: T) => void;
  onDelete: (row: T) => void;
};

export default function DataTable<T extends { id: number }>({
  columns,
  rows,
  onEdit,
  onDelete,
}: Props<T>) {
  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-200 bg-neutral-50 text-[11px] font-bold uppercase tracking-wider text-neutral-600">
            <th className="px-5 py-4">#</th>
            {columns.map((col) => (
              <th key={String(col.key)} className="px-5 py-4">
                {col.label}
              </th>
            ))}
            <th className="px-5 py-4 text-right">Aksi</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-100">
          {rows.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length + 2}
                className="px-5 py-8 text-center text-sm text-neutral-500"
              >
                Belum ada data.
              </td>
            </tr>
          ) : (
            rows.map((row, i) => (
              <tr
                key={row.id}
                className="text-neutral-800 transition-colors hover:bg-neutral-50/70"
              >
                <td className="px-5 py-4 font-mono text-neutral-500">{i + 1}</td>
                {columns.map((col) => (
                  <td key={String(col.key)} className="px-5 py-4 text-neutral-800 font-medium">
                    {col.render ? col.render(row) : String(row[col.key] ?? "")}
                  </td>
                ))}
                <td className="px-5 py-4">
                  <div className="flex justify-end gap-2">
                    {onEdit && (
                      <button
                        onClick={() => onEdit(row)}
                        className="rounded-lg p-2 text-neutral-500 transition-colors hover:bg-amber-500/10 hover:text-amber-600"
                        aria-label="Edit"
                      >
                        <Pencil size={15} />
                      </button>
                    )}
                    <button
                      onClick={() => onDelete(row)}
                      className="rounded-lg p-2 text-neutral-500 transition-colors hover:bg-red-500/10 hover:text-red-600"
                      aria-label="Hapus"
                    >
                      <Trash2 size={15} />
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
