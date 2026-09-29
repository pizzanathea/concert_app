"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import TicketNav from "@/app/components/Ticket/TicketNav";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Email dan password wajib diisi.");
      return;
    }

    // Arahkan ke admin dashboard
    router.push("/admin/dashboard");
  };

  return (
    <div className="flex min-h-screen flex-col bg-white text-neutral-900">
      {/* 1. Navbar Sticky yang memendek saat di-scroll & ada efek underline sinkron */}
      <TicketNav />

      {/* 2. Main Content: Fleksibel bisa di-scroll, proporsi card persis seperti gambar referensi */}
      <main className="flex min-h-[calc(100vh-100px)] flex-1 flex-col items-center justify-center px-6 py-12 md:py-20">
        {/* Title tanpa logo */}
        <h1 className="mb-7 text-center text-3xl font-extrabold tracking-tight text-neutral-800 md:text-4xl">
          Login to Your Account
        </h1>

        {/* Card Form: Ukuran dan proporsi persis sesuai screenshot referensi */}
        <div className="w-full max-w-[420px] rounded-2xl border border-neutral-300/70 bg-[#ededed] p-8 md:p-10 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Input Email */}
            <div className="flex items-center gap-4 border-b border-neutral-400/80 py-1 transition-colors focus-within:border-neutral-900">
              <label
                htmlFor="email"
                className="w-20 text-sm font-medium text-neutral-500"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent py-1 text-sm text-neutral-900 outline-none"
                autoComplete="email"
              />
            </div>

            {/* Input Password */}
            <div className="flex items-center gap-4 border-b border-neutral-400/80 py-1 transition-colors focus-within:border-neutral-900">
              <label
                htmlFor="password"
                className="w-20 text-sm font-medium text-neutral-500"
              >
                Password
              </label>
              <div className="relative flex-1">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-transparent py-1 pr-8 text-sm text-neutral-900 outline-none"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-neutral-400 transition-colors hover:text-neutral-700"
                  tabIndex={-1}
                  aria-label={showPassword ? "Sembunyikan password" : "Lihat password"}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="rounded-lg border border-amber-500/20 bg-amber-500/10 px-3.5 py-2 text-xs font-medium text-amber-700">
                {error}
              </div>
            )}

            {/* Tombol LOGIN (Border persegi panjang, tanpa logo) */}
            <button
              type="submit"
              className="mt-7 flex w-full items-center justify-center border border-neutral-800 bg-transparent py-2.5 text-xs font-bold uppercase tracking-widest text-neutral-900 transition-all hover:bg-neutral-900 hover:text-white"
            >
              LOGIN
            </button>

            {/* Forgot Password (Warna palet amber kita) */}
            <div className="pt-1 text-center">
              <a
                href="#forgot"
                className="text-xs font-medium text-amber-500 transition-colors hover:text-amber-600 hover:underline"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>

        {/* Don't have an account? Sign up (Warna palet amber kita) */}
        <p className="mt-6 text-center text-xs font-medium text-neutral-600">
          Don&apos;t have an account?{" "}
          <Link
            href="/admin/login"
            className="font-semibold text-amber-500 transition-colors hover:text-amber-600 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </main>

      {/* 3. Footer di bawah (tenggelam di awal, muncul saat scroll ke bawah) */}
      <footer className="w-full bg-[#0a0500]">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5 text-xs text-white/60 lg:px-10">
          <div className="flex items-center gap-4">
            <span className="text-lg font-extrabold tracking-tight text-white">
              Z<span className="text-amber-400">FEST</span>
            </span>
            <span className="hidden sm:inline">
              &copy; 2026 Z Fest. All Rights Reserved
            </span>
          </div>
          <Link href="/terms" className="text-amber-400 transition-colors hover:underline">
            Terms and Conditions
          </Link>
        </div>
      </footer>
    </div>
  );
}