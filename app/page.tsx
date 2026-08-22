import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Hero />

      {/* Temporary section.
          This will become the About / Identity section
          in the next milestone. */}
      <section
        id="explore-content"
        className="flex min-h-screen items-center justify-center border-t border-[var(--border)] bg-[var(--background)]"
      >
        <div className="px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--accent-primary)]">
            Next Section
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
            The world below is still being built.
          </h2>
        </div>
      </section>
    </div>
  );
}