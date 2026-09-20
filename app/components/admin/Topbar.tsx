"use client";

type Props = {
  title: string;
};

export default function Topbar({ title }: Props) {
  return (
    <header className="flex items-center justify-between border-b border-white/10 bg-black/20 px-8 py-5 backdrop-blur-md">
      <h1 className="text-xl font-bold text-white">{title}</h1>

      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-400/15 text-sm font-semibold text-amber-400">
          A
        </div>
        <span className="text-sm text-white/70">Admin</span>
      </div>
    </header>
  );
}
