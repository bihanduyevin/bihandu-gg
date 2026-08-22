import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { BlogReel } from "@/components/sections/blog-reel";
import { Photography } from "@/components/sections/photography";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Hero />

      <div className="relative z-10 bg-[var(--background)]">
        <About />
        <FeaturedProjects />
        <BlogReel />
        <Photography />

        <section
          id="contact-preview"
          className="flex min-h-[50vh] items-center justify-center border-t border-[var(--border)] bg-[var(--surface)]/15 px-5"
        >
          <div className="text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent-primary)]">
              Next
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
              Contact section coming next.
            </h2>

            <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[var(--muted)]">
              This area will become the final contact experience in
              the next milestone.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}