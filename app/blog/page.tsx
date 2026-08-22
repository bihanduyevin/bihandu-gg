import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/animation/reveal";
import { blogPosts } from "@/lib/data/blog";

export const metadata: Metadata = {
  title: "Blog | Bihandu.gg",
  description:
    "Thoughts, notes, experiments, and observations about technology, GIS, urban planning, photography, and more.",
};

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const allNotes = blogPosts.slice(1);

  return (
    <main className="min-h-screen pt-24 pb-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        {/* =====================================================
            PAGE HEADER
            ===================================================== */}

        <header className="border-b border-[var(--border)] py-16 md:py-24">
          <Reveal animation="fade">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent-primary)]">
              Blog
            </p>
          </Reveal>

          <Reveal
            delay={100}
            animation="fade-up"
          >
            <h1 className="mb-8 text-[clamp(3rem,6vw,6rem)] font-bold leading-[0.9] tracking-[-0.055em] text-[var(--foreground)]">
              THOUGHTS / SIGNALS /{" "}
              <br className="hidden md:block" />
              NOTES.
            </h1>
          </Reveal>

          <Reveal
            delay={200}
            animation="fade-up"
          >
            <p className="max-w-2xl text-lg font-light leading-relaxed text-[var(--muted)] md:text-xl">
              This is where I document my process. A collection of
              writings on technology, spatial data, urban exploration,
              photography, and the experiments that connect them all.
            </p>
          </Reveal>
        </header>

        {/* =====================================================
            FEATURED POST
            ===================================================== */}

        <section className="mb-24 pt-16 md:mb-32 md:pt-24">
          <Reveal animation="fade">
            <h2 className="mb-8 text-xs font-bold uppercase tracking-[0.2em] text-[var(--muted)]">
              Featured Entry
            </h2>
          </Reveal>

          {featuredPost && (
            <Reveal
              animation="scale-up"
              threshold={0.2}
            >
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="group block"
              >
                <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-16">
                  {/* Image */}
                  <div className="relative aspect-[16/9] overflow-hidden border border-[var(--border)] bg-[var(--surface)] transition-colors duration-500 group-hover:border-[var(--accent-primary)]/50 lg:col-span-8">
                    <img
                      src={featuredPost.imageUrl}
                      alt={featuredPost.title}
                      className="h-full w-full object-cover grayscale-[20%] transition-all duration-1000 ease-out group-hover:scale-105 group-hover:grayscale-0"
                    />

                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center lg:col-span-4">
                    <div className="mb-4 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
                      <span className="font-semibold text-[var(--accent-primary)]">
                        {featuredPost.category}
                      </span>

                      <span
                        className="h-px w-4 bg-[var(--border)]"
                        aria-hidden="true"
                      />

                      <span>{featuredPost.date}</span>

                      <span
                        className="hidden h-px w-4 bg-[var(--border)] md:block"
                        aria-hidden="true"
                      />

                      <span className="hidden md:block">
                        {featuredPost.readTime}
                      </span>
                    </div>

                    <h3 className="mb-6 text-3xl font-bold tracking-tight text-[var(--foreground)] transition-colors group-hover:text-[var(--accent-primary)] md:text-4xl">
                      {featuredPost.title}
                    </h3>

                    <p className="mb-8 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                      {featuredPost.excerpt}
                    </p>

                    <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--foreground)] transition-colors group-hover:text-[var(--accent-primary)]">
                      Read Article

                      <ArrowRight
                        size={16}
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          )}
        </section>

        {/* =====================================================
            ALL NOTES
            ===================================================== */}

        <section>
          <Reveal animation="fade">
            <h2 className="mb-8 text-xs font-bold uppercase tracking-[0.2em] text-[var(--muted)]">
              All Notes
            </h2>
          </Reveal>

          <div className="border-t border-[var(--border)]">
            {allNotes.map((post, index) => (
              <Reveal
                key={post.id}
                animation="fade-up"
                delay={index * 100}
                threshold={0.1}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col gap-6 border-b border-[var(--border)] py-10 transition-colors hover:bg-[var(--surface)]/30 md:flex-row md:items-center"
                >
                  {/* Number */}
                  <div className="hidden w-12 shrink-0 text-sm font-bold tracking-[0.18em] text-[var(--muted)] opacity-50 transition-all duration-300 group-hover:text-[var(--accent-primary)] group-hover:opacity-100 lg:block">
                    {(index + 2)
                      .toString()
                      .padStart(2, "0")}
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <div className="mb-3 flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-[var(--muted)] md:text-xs">
                      <span className="font-semibold text-[var(--accent-primary)]">
                        {post.category}
                      </span>

                      <span aria-hidden="true">•</span>

                      <span>{post.date}</span>

                      <span
                        className="hidden md:inline"
                        aria-hidden="true"
                      >
                        •
                      </span>

                      <span className="hidden md:inline">
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="mb-3 text-xl font-bold text-[var(--foreground)] transition-colors group-hover:text-[var(--accent-primary)] md:text-2xl">
                      {post.title}
                    </h3>

                    <p className="max-w-3xl text-sm leading-relaxed text-[var(--muted)] md:text-base">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Thumbnail + arrow */}
                  <div className="mt-2 flex items-center justify-between gap-8 md:mt-0 md:justify-end">
                    <div className="h-24 w-24 shrink-0 overflow-hidden border border-[var(--border)] transition-colors duration-500 group-hover:border-[var(--accent-primary)]/50 md:h-32 md:w-32">
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="h-full w-full object-cover grayscale-[60%] transition-all duration-700 ease-out group-hover:scale-110 group-hover:grayscale-0"
                      />
                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] transition-all duration-300 group-hover:border-[var(--foreground)] group-hover:bg-[var(--foreground)] group-hover:text-[var(--background)]">
                      <ArrowUpRight
                        size={18}
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:rotate-45"
                      />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}