import Navbar from "@/app/components/layout/Navbar";
import GradientBackground from "@/app/components/layout/GradientBackground";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GradientBackground />
      <Navbar />
      <main className="pt-20">{children}</main>
    </>
  );
}