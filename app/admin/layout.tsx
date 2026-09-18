import GradientBackground from "@/app/components/layout/GradientBackground";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen">
      <GradientBackground />
      {children}
    </div>
  );
}