import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

import { FlowingLines } from "@/components/ui/flowing-lines";
import { TypingText } from "@/components/ui/typing-text";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] flex-col justify-center overflow-hidden pt-16">
      <FlowingLines />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-center px-5 sm:px-6">
        {/* Identity */}
        <div
          className="mb-6 animate-fade-in-up text-xs font-medium uppercase tracking-[0.28em] text-[var(--accent-primary)]"
          style={{ animationDelay: "0.1s" }}
        >
          Bihandu.gg
        </div>

        {/* Main headline */}
        <h1 className="max-w-6xl text-[clamp(4.25rem,11vw,10rem)] font-bold leading-[0.82] tracking-[-0.07em] text-[var(--foreground)]">
          <span
            className="block animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            BUILD.
          </span>

          <span
            className="block animate-fade-in-up text-[var(--muted)]"
            style={{ animationDelay: "0.4s" }}
          >
            EXPLORE.
          </span>

          <span
            className="block animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            IMAGINE.
          </span>
        </h1>

        {/* Typing identity */}
        <div
          className="mt-9 animate-fade-in-up text-xl font-light tracking-tight text-[var(--muted)] sm:text-2xl md:mt-11 md:text-4xl"
          style={{ animationDelay: "0.8s" }}
        >
          <span>I am a </span>
          <TypingText />
        </div>

        {/* Introduction */}
        <p
          className="mt-6 max-w-2xl animate-fade-in-up text-base leading-7 text-[var(--muted)] sm:text-lg"
          style={{ animationDelay: "1s" }}
        >
          Building digital experiences where technology, spatial thinking,
          urban exploration, and visual storytelling meet.
        </p>

        {/* CTA buttons */}
        <div
          className="mt-10 flex w-full animate-fade-in-up flex-col gap-4 sm:w-auto sm:flex-row"
          style={{ animationDelay: "1.2s" }}
        >
          <Link
            href="#explore"
            className="btn-glow-effect group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--foreground)] px-8 py-4 text-sm font-medium text-[var(--background)] transition-transform hover:scale-[1.02] sm:text-base"
          >
            Explore My World

            <ChevronDown
              size={18}
              className="transition-transform group-hover:translate-y-1"
            />
          </Link>

          <Link
            href="/blog"
            className="btn-glow-effect group inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/40 px-8 py-4 text-sm font-medium text-[var(--foreground)] backdrop-blur-sm transition-colors hover:border-[var(--accent-primary)]/50 hover:bg-[var(--surface-hover)] sm:text-base"
          >
            Read My Thoughts

            <ArrowRight
              size={18}
              className="text-[var(--accent-primary)] transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 animate-fade-in-up flex-col items-center gap-2"
        style={{ animationDelay: "1.5s" }}
      >
        <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[var(--muted)] opacity-60">
          Scroll to Explore
        </span>

        <div className="animate-soft-bounce h-10 w-px bg-gradient-to-b from-[var(--muted)] to-transparent opacity-50" />
      </div>

      {/* CTA anchor */}
      <div
        id="explore"
        className="absolute bottom-0 left-0 h-px w-full"
        aria-hidden="true"
      />
    </section>
  );
}