import AdminHeader from "@/app/components/admin/AdminHeader";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col justify-between bg-white text-neutral-900">
      <AdminHeader />
      <main className="flex-1 mx-auto w-full max-w-7xl">{children}</main>

      {/* Footer Full Putih Bersih */}
      <footer className="w-full border-t border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5 text-xs text-neutral-500 md:px-8">
          <div className="flex items-center gap-4">
            <span className="text-lg font-extrabold tracking-tight text-neutral-900">
              Z<span className="text-amber-500">FEST</span>
            </span>
            <span className="hidden sm:inline">
              &copy; 2026 Z Fest. All Rights Reserved
            </span>
          </div>
          <Link href="/terms" className="text-amber-600 font-semibold transition-colors hover:underline">
            Terms and Conditions
          </Link>
        </div>
      </footer>
    </div>
  );
}