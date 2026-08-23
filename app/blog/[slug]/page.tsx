import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

import { Reveal } from "@/components/animation/reveal";
import {
  getAllPosts,
  getPostBySlug,
} from "@/lib/mdx";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | Bihandu.gg",
      description:
        "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} | Bihandu.gg`,
    description: post.excerpt,
  };
}

const mdxComponents = {
  h1: (props: React.ComponentProps<"h1">) => (
    <h1
      className="mb-6 mt-12 text-4xl font-bold tracking-tight text-[var(--foreground)]"
      {...props}
    />
  ),

  h2: (props: React.ComponentProps<"h2">) => (
    <h2
      className="mb-6 mt-12 border-b border-[var(--border)] pb-2 text-3xl font-bold tracking-tight text-[var(--foreground)]"
      {...props}
    />
  ),

  h3: (props: React.ComponentProps<"h3">) => (
    <h3
      className="mb-4 mt-8 text-2xl font-bold tracking-tight text-[var(--foreground)]"
      {...props}
    />
  ),

  p: (props: React.ComponentProps<"p">) => (
    <p
      className="mb-6 text-lg font-light leading-relaxed text-[var(--muted)]"
      {...props}
    />
  ),

  a: (props: React.ComponentProps<"a">) => (
    <a
      className="text-[var(--accent-primary)] underline-offset-4 transition-colors hover:underline"
      {...props}
    />
  ),

  ul: (props: React.ComponentProps<"ul">) => (
    <ul
      className="mb-6 list-disc space-y-2 pl-6 text-lg font-light text-[var(--muted)]"
      {...props}
    />
  ),

  ol: (props: React.ComponentProps<"ol">) => (
    <ol
      className="mb-6 list-decimal space-y-2 pl-6 text-lg font-light text-[var(--muted)]"
      {...props}
    />
  ),

  li: (props: React.ComponentProps<"li">) => (
    <li
      className="pl-1"
      {...props}
    />
  ),

  blockquote: (
    props: React.ComponentProps<"blockquote">,
  ) => (
    <blockquote
      className="my-8 border-l-4 border-[var(--accent-primary)] bg-[var(--surface)]/30 py-3 pl-6 text-xl italic text-[var(--foreground)]"
      {...props}
    />
  ),

  pre: (props: React.ComponentProps<"pre">) => (
    <pre
      className="mb-6 overflow-x-auto rounded-md border border-[var(--border)] bg-[var(--surface)] p-5 text-sm text-[var(--muted)]"
      {...props}
    />
  ),

  code: (props: React.ComponentProps<"code">) => (
    <code
      className="rounded-sm bg-[var(--surface)] px-1.5 py-0.5 text-sm text-[var(--accent-primary)]"
      {...props}
    />
  ),

  img: (props: React.ComponentProps<"img">) => (
    <img
      className="my-8 h-auto w-full rounded-sm border border-[var(--border)]"
      alt={props.alt ?? "Blog image"}
      {...props}
    />
  ),
};

export default async function BlogPostPage({
  params,
}: BlogPostPageProps) {
  const { slug } = await params;

  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts();

  const relatedPosts = allPosts
    .filter((item) => item.id !== post.id)
    .slice(0, 2);

  return (
    <main className="min-h-screen pt-24 pb-32">
      <article className="mx-auto max-w-7xl px-5 sm:px-6">
        {/* Back navigation */}
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

        {/* Header */}
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

        {/* Hero image */}
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

        {/* MDX */}
        <div className="mx-auto max-w-3xl">
          <Reveal
            animation="fade-up"
            threshold={0.15}
          >
            <div className="prose-container">
              <MDXRemote
                source={post.content}
                components={mdxComponents}
              />
            </div>
          </Reveal>
        </div>
      </article>

      {/* Related */}
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