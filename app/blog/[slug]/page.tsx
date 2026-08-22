import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

import { Reveal } from "@/components/animation/reveal";
import { blogPosts } from "@/lib/data/blog";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = blogPosts.find(
    (item) => item.slug === slug,
  );

  if (!post) {
    return {
      title: "Post Not Found | Bihandu.gg",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} | Bihandu.gg`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: BlogPostPageProps) {
  const { slug } = await params;

  const post = blogPosts.find(
    (item) => item.slug === slug,
  );

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((item) => item.id !== post.id)
    .slice(0, 2);

  return (
    <main className="min-h-screen pt-24 pb-32">
      <article className="mx-auto max-w-7xl px-5 sm:px-6">
        {/* =====================================================
            BACK TO BLOG
            ===================================================== */}

        <Reveal animation="fade-right">
          <Link
            href="/blog"
            className="group mb-16 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)] transition-colors hover:text-[var(--accent-primary)]"
          >
            <ArrowLeft
              size={16}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />

            Back to Blog
          </Link>
        </Reveal>

        {/* =====================================================
            ARTICLE HEADER
            ===================================================== */}

        <header className="mx-auto mb-16 max-w-4xl text-center md:mb-24">
          <Reveal animation="fade-up">
            <div className="mb-8 flex flex-wrap items-center justify-center gap-3 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              <span className="font-bold text-[var(--accent-primary)]">
                {post.category}
              </span>

              <span aria-hidden="true">•</span>

              <span>{post.date}</span>

              <span aria-hidden="true">•</span>

              <span>{post.readTime}</span>
            </div>
          </Reveal>

          <Reveal
            animation="fade-up"
            delay={100}
          >
            <h1 className="mb-8 text-4xl font-bold leading-[1.1] tracking-[-0.04em] text-[var(--foreground)] md:text-5xl lg:text-7xl">
              {post.title}
            </h1>
          </Reveal>

          <Reveal
            animation="fade-up"
            delay={200}
          >
            <p className="mx-auto max-w-3xl text-lg font-light leading-relaxed text-[var(--muted)] md:text-xl">
              {post.excerpt}
            </p>
          </Reveal>
        </header>

        {/* =====================================================
            ARTICLE IMAGE
            ===================================================== */}

        <Reveal
          animation="scale-up"
          delay={300}
          threshold={0.1}
        >
          <div className="mb-16 aspect-[16/9] w-full overflow-hidden border border-[var(--border)] bg-[var(--surface)] md:mb-24 md:aspect-[21/9]">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="h-full w-full object-cover grayscale-[10%]"
            />
          </div>
        </Reveal>

        {/* =====================================================
            PLACEHOLDER ARTICLE BODY
            ===================================================== */}

        <div className="mx-auto max-w-3xl">
          <Reveal
            animation="fade-up"
            threshold={0.2}
          >
            <div className="relative overflow-hidden rounded-sm border border-dashed border-[var(--border-hover)] bg-[var(--surface)]/30 p-10 text-center md:p-16">
              <div
                className="bg-spatial-grid pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                aria-hidden="true"
              />

              <div className="relative z-10">
                <p className="mb-4 text-lg font-medium text-[var(--foreground)] md:text-xl">
                  This article is a placeholder.
                </p>

                <p className="mx-auto max-w-md text-sm leading-6 text-[var(--muted)] md:text-base">
                  Replace this content when the real post is written.
                  Eventually, this section will render your actual
                  Markdown/MDX article content.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </article>

      {/* =====================================================
          RELATED POSTS
          ===================================================== */}

      {relatedPosts.length > 0 && (
        <section className="mx-auto mt-32 max-w-7xl border-t border-[var(--border)] px-5 pt-16 sm:px-6 md:mt-40">
          <Reveal animation="fade">
            <h2 className="mb-12 text-xs font-bold uppercase tracking-[0.2em] text-[var(--muted)]">
              Keep Reading
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
            {relatedPosts.map((relatedPost, index) => (
              <Reveal
                key={relatedPost.id}
                animation="fade-up"
                delay={index * 150}
              >
                <Link
                  href={`/blog/${relatedPost.slug}`}
                  className="group block"
                >
                  <div className="mb-6 aspect-[16/9] overflow-hidden border border-[var(--border)] bg-[var(--surface)] transition-colors duration-500 group-hover:border-[var(--accent-primary)]/50">
                    <img
                      src={relatedPost.imageUrl}
                      alt={relatedPost.title}
                      className="h-full w-full object-cover grayscale-[40%] transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                    />
                  </div>

                  <div className="mb-3 flex items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
                    <span className="font-semibold text-[var(--accent-primary)]">
                      {relatedPost.category}
                    </span>

                    <span aria-hidden="true">•</span>

                    <span>{relatedPost.date}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-[var(--foreground)] transition-colors group-hover:text-[var(--accent-primary)]">
                    {relatedPost.title}
                  </h3>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}