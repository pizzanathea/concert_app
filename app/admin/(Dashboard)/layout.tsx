import AdminHeader from "@/app/components/admin/AdminHeader";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0a0500] text-white">
      <AdminHeader />
      <div className="mx-auto max-w-7xl">{children}</div>
    </div>
  );
}