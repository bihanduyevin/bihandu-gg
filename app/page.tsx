import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      <section className="min-h-screen flex items-center justify-center border-t border-[var(--border)] relative z-10 bg-[var(--background)]">
        <p className="text-[var(--muted)] tracking-widest uppercase text-sm">
          Milestone 3 Content Area
        </p>
      </section>
    </div>
  );
}