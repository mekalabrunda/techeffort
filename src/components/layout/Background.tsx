export default function Background() {
  // Decorative, non-interactive background (kept behind content)
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* soft wave-like gradients (no opaque white overlay) */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-20%,rgba(0,0,0,0.03),transparent_60%),radial-gradient(900px_500px_at_50%_40%,rgba(0,0,0,0.04),transparent_60%)]" />
      {/* large blurred hill */}
      <div className="absolute -top-[25%] left-1/2 -translate-x-1/2 h-[55vh] w-[120vw] rounded-[999px] blur-3xl opacity-30 bg-gradient-to-b from-white to-transparent" />
      {/* faint vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(75%_60%_at_50%_50%,transparent_65%,rgba(0,0,0,0.05))]" />
    </div>
  );
}
