export default function Home() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-5 sm:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-[var(--accent-primary)]">
          Bihandu.gg
        </p>

        <h1 className="text-5xl font-bold tracking-tighter text-[var(--foreground)] sm:text-6xl md:text-8xl">
          System{" "}
          <span className="text-[var(--accent-primary)]">Online.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[var(--muted)] sm:text-lg">
          The foundation is ready. Next up: the cinematic Bihandu.gg
          experience.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--muted)]">
            Dark / Light
          </span>

          <span className="rounded-full border border-[var(--accent-primary)]/40 bg-[var(--accent-primary)]/10 px-4 py-2 text-sm text-[var(--accent-primary)]">
            Foundation Ready
          </span>
        </div>
      </div>
    </section>
  );
}