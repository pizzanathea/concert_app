export default function GradientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Base gradient gelap ke merah */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#3a0a0a_0%,_#000000_70%)]" />

      {/* Blob kiri bawah */}
      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-red-700/40 blur-[120px]" />

      {/* Blob kanan tengah */}
      <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-red-900/50 blur-[140px]" />
    </div>
  );
}
