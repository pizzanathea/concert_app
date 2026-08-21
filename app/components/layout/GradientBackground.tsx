export default function GradientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#0a0500]">
      {/* Base gelap */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#3a1a00_0%,_#0a0500_70%)]" />

      {/* Glow lembut yang geser pelan */}
      <div className="aurora-layer aurora-1" />

      {/* Vignette biar tepi tetep gelap */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_#0a0500_90%)]" />
    </div>
  );
}