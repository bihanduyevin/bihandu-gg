import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/animation/reveal";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { BlogReel } from "@/components/sections/blog-reel";
import { Photography } from "@/components/sections/photography";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero */}
      <Hero />

      {/* Main content */}
      <div className="relative z-10 bg-[var(--background)]">
        {/* About */}
        <div id="about">
          <About />
        </div>

        {/* Featured Projects */}
        <FeaturedProjects />

        {/* Blog */}
        <BlogReel />

        {/* Photography */}
        <Photography />

        {/* =====================================================
            HOMEPAGE CONTACT CTA
            ===================================================== */}

        <section className="relative overflow-hidden border-t border-[var(--border)] py-28 md:py-36">
          {/* Subtle background atmosphere */}
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(139,92,246,0.08),transparent_35%)]"
            aria-hidden="true"
          />

          <div className="pointer-events-none absolute inset-0 bg-spatial-grid opacity-[0.02] dark:opacity-[0.04]" />

          <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6">
            <Reveal animation="fade">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent-primary)]">
                Contact
              </p>
            </Reveal>

            <Reveal
              delay={100}
              animation="fade-up"
            >
              <h2 className="max-w-5xl text-[clamp(3rem,7vw,7rem)] font-bold leading-[0.9] tracking-[-0.06em] text-[var(--foreground)]">
                HAVE AN IDEA?
                <br />
                LET&apos;S BUILD IT.
              </h2>
            </Reveal>

            <Reveal
              delay={200}
              animation="fade-up"
            >
              <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-[var(--muted)] md:text-xl">
                From digital products and GIS experiments to
                creative collaborations, I&apos;m always interested
                in building something meaningful.
              </p>
            </Reveal>

            <Reveal
              delay={300}
              animation="fade-up"
            >
              <Link
                href="/contact"
                className="btn-glow-effect group mt-10 inline-flex items-center gap-3 rounded-full bg-[var(--foreground)] px-8 py-4 text-sm font-medium text-[var(--background)] transition-all hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(139,92,246,0.2)] md:text-base"
              >
                Start a Conversation

                <ArrowUpRight
                  size={18}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </Reveal>

            {/* Small supporting line */}
            <Reveal
              delay={400}
              animation="fade-up"
            >
              <div className="mt-12 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                <span className="h-px w-8 bg-[var(--border)]" />
                Open to interesting ideas
                <span className="h-px w-8 bg-[var(--border)]" />
              </div>
            </Reveal>
          </div>
        </section>
      </div>
    </div>
  );
}