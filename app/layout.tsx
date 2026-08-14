import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/layout/Navbar";
import GradientBackground from "@/app/components/layout/GradientBackground";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Nama Event Konser",
  description: "Pemesanan tiket konser resmi",
};

export default function RootLayout({
  children,

}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={inter.variable}>
      <body className="min-h-screen bg-black font-sans text-white antialiased">
        <GradientBackground />
        <Navbar />
        {/* pt-20 supaya konten gak ketutup navbar fixed */}
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}