export function PageVideoBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.20] dark:opacity-[0.28]"
      >
        <source
          src="/video/hero-background.mp4"
          type="video/mp4"
        />
      </video>

      {/* Keep text readable without killing the video */}
      <div className="absolute inset-0 bg-[var(--background)]/30 dark:bg-[var(--background)]/25" />

      {/* Subtle purple atmosphere */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(139,92,246,0.10),transparent_40%)]"
        aria-hidden="true"
      />

      {/* Top fade */}
      <div
        className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[var(--background)]/35 to-transparent"
        aria-hidden="true"
      />

      {/* Bottom fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--background)]/70 to-transparent"
        aria-hidden="true"
      />

      {/* Soft edge vignette */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,var(--background)_120%)] opacity-20"
        aria-hidden="true"
      />
    </div>
  );
}