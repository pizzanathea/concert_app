"use client";

import { ReactNode } from "react";
import { X } from "lucide-react";

type Props = {
  title: string;
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function Modal({ title, open, onClose, children }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-3xl border border-neutral-200 bg-white p-6 shadow-2xl text-neutral-900 md:p-8">
        <div className="mb-5 flex items-center justify-between border-b border-neutral-200 pb-4">
          <h2 className="text-lg font-bold text-neutral-900">{title}</h2>
          <button
            onClick={onClose}
            className="rounded-lg p-1 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-700"
            aria-label="Tutup"
          >
            <X size={20} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}