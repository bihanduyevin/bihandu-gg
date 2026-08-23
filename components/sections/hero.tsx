import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
} from "lucide-react";

import { TypingText } from "@/components/ui/typing-text";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      {/* =====================================================
          BACKGROUND VIDEO
          ===================================================== */}

      <div className="absolute inset-0 -z-10 overflow-hidden bg-[var(--background)]">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover opacity-30 dark:opacity-[0.15]"
          aria-hidden="true"
        >
          <source
            src="/video/hero-background.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark overlay */}
        <div
          className="absolute inset-0 bg-black/15 dark:bg-black/30"
          aria-hidden="true"
        />

        {/* Purple atmosphere */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(139,92,246,0.12),transparent_42%)]"
          aria-hidden="true"
        />

        {/* Editorial grain */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.015] mix-blend-overlay dark:opacity-[0.03]"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          }}
          aria-hidden="true"
        />

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-[var(--background)] to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* =====================================================
          HERO CONTENT
          ===================================================== */}

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-[1440px] items-center px-5 sm:px-6 lg:px-12">
        <div className="flex w-full flex-col items-start">
          {/* Main headline */}
          <h1 className="text-[clamp(4.5rem,8vw,10rem)] font-bold leading-[0.85] tracking-[-0.07em] text-[var(--foreground)]">
            <span
              className="block animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              BUILD.
            </span>

            <span
              className="block animate-fade-in-up text-[var(--muted)]"
              style={{ animationDelay: "0.3s" }}
            >
              EXPLORE.
            </span>

            <span
              className="block animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              IMAGINE.
            </span>
          </h1>

          {/* Typing */}
          <div
            className="mt-8 animate-fade-in-up text-2xl font-light tracking-tight text-[var(--muted)] sm:text-3xl md:mt-10 md:text-4xl"
            style={{ animationDelay: "0.7s" }}
          >
            <span className="inline-flex flex-wrap items-center gap-x-2">
              <span>I am a</span>
              <TypingText />
            </span>
          </div>

          {/* Description */}
          <p
            className="mt-6 max-w-lg animate-fade-in-up text-base leading-relaxed text-[var(--muted)] sm:text-lg md:mt-8"
            style={{ animationDelay: "0.9s" }}
          >
            Crafting digital experiences at the
            intersection of spatial data, clean code,
            and visual storytelling.
          </p>

          {/* CTA buttons */}
          <div
            className="mt-10 flex w-full animate-fade-in-up flex-col gap-4 sm:w-auto sm:flex-row md:mt-12"
            style={{ animationDelay: "1.1s" }}
          >
            <Link
              href="/#about"
              className="btn-glow-effect group inline-flex items-center justify-center gap-3 rounded-full bg-[var(--foreground)] px-8 py-4 text-sm font-medium text-[var(--background)] transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] md:text-base"
            >
              Explore My World

              <ChevronDown
                size={18}
                aria-hidden="true"
                className="opacity-80 transition-transform group-hover:translate-y-1"
              />
            </Link>

            <Link
              href="/blog"
              className="btn-glow-effect group inline-flex items-center justify-center gap-3 rounded-full border border-[var(--border)] bg-[var(--surface)]/30 px-8 py-4 text-sm font-medium text-[var(--foreground)] backdrop-blur-sm transition-all hover:border-[var(--accent-primary)]/40 hover:bg-[var(--surface-hover)] md:text-base"
            >
              Read My Thoughts

              <ArrowRight
                size={18}
                aria-hidden="true"
                className="text-[var(--accent-primary)] transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="pointer-events-none absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 animate-fade-in-up flex-col items-center gap-3 md:bottom-10"
        style={{ animationDelay: "1.5s" }}
      >
        <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[var(--muted)] opacity-60">
          Scroll to Explore
        </span>

        <div className="animate-soft-bounce h-8 w-px bg-gradient-to-b from-[var(--muted)] to-transparent opacity-40 md:h-10" />
      </div>
    </section>
  );
}