import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/animation/reveal";
import { blogPosts } from "@/lib/data/blog";

function BlogImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[radial-gradient(circle_at_60%_35%,rgba(99,102,241,0.18),transparent_35%),linear-gradient(135deg,#0b0b0f,#030303)]">
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover grayscale-[25%] transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
      />

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent"
        aria-hidden="true"
      />
    </div>
  );
}

export function BlogReel() {
  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1, 4);

  return (
    <section
      id="blog"
      className="relative border-b border-[var(--border)] bg-[var(--surface)]/20 py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal animation="fade">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent-primary)]">
                Writing
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="max-w-4xl text-[clamp(2.4rem,5vw,5rem)] font-bold leading-none tracking-[-0.05em] text-[var(--foreground)]">
                Thoughts / Signals / Notes.
              </h2>
            </Reveal>
          </div>

          <Reveal
            delay={200}
            animation="fade-right"
          >
            <Link
              href="/blog"
              className="group inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)] transition-colors hover:text-[var(--accent-primary)]"
            >
              Explore More

              <ArrowRight
                size={15}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Featured article */}
          <Reveal
            animation="scale-up"
            threshold={0.15}
            className="lg:col-span-7"
          >
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group block"
            >
              <div className="relative mb-6 aspect-[16/10] overflow-hidden border border-[var(--border)] bg-[var(--surface)] transition-colors duration-500 group-hover:border-[var(--accent-primary)]/50">
                <BlogImage
                  src={featuredPost.imageUrl}
                  alt={featuredPost.title}
                />

                <div className="absolute left-5 top-5 z-10 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                  Featured
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                <span className="text-[var(--accent-primary)]">
                  {featuredPost.category}
                </span>

                <span aria-hidden="true">•</span>

                <span>{featuredPost.date}</span>

                <span aria-hidden="true">•</span>

                <span>{featuredPost.readTime}</span>
              </div>

              <h3 className="mt-4 text-2xl font-bold tracking-tight text-[var(--foreground)] transition-colors group-hover:text-[var(--accent-primary)] md:text-3xl">
                {featuredPost.title}
              </h3>

              <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)]">
                {featuredPost.excerpt}
              </p>
            </Link>
          </Reveal>

          {/* Recent posts */}
          <div className="flex flex-col divide-y divide-[var(--border)] lg:col-span-5">
            {recentPosts.map((post, index) => (
              <Reveal
                key={post.id}
                delay={150 + index * 100}
                animation="fade-right"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group grid grid-cols-3 gap-5 py-6 first:pt-0 last:pb-0"
                >
                  <div className="relative aspect-square overflow-hidden border border-[var(--border)] bg-[var(--surface)] transition-colors duration-500 group-hover:border-[var(--accent-primary)]/50">
                    <BlogImage
                      src={post.imageUrl}
                      alt={post.title}
                    />
                  </div>

                  <div className="col-span-2 flex flex-col justify-center">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--accent-primary)]">
                      {post.category}
                    </div>

                    <h4 className="mt-2 line-clamp-2 text-base font-semibold leading-6 text-[var(--foreground)] transition-colors group-hover:text-[var(--accent-primary)]">
                      {post.title}
                    </h4>

                    <span className="mt-2 text-xs text-[var(--muted)]">
                      {post.date} · {post.readTime}
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mobile CTA */}
        <Reveal
          animation="fade-up"
          delay={300}
        >
          <div className="mt-12 md:hidden">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--foreground)] transition-colors hover:text-[var(--accent-primary)]"
            >
              Explore More

              <ArrowRight
                size={14}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}