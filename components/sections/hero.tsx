import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
} from "lucide-react";

import { FlowingLines } from "@/components/ui/flowing-lines";
import { TopographicPlaceholder } from "@/components/ui/topographic-placeholder";
import { TypingText } from "@/components/ui/typing-text";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden pt-16">
      <FlowingLines />

      <div className="relative z-10 mx-auto grid min-h-[calc(100dvh-4rem)] w-full max-w-[1440px] grid-cols-1 items-center gap-8 px-5 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:px-12">
        {/* =================================
            LEFT — TYPOGRAPHY
        ================================= */}

        <div className="relative z-20 flex flex-col items-start justify-center py-12 lg:py-0">
          {/* Identity */}

          <div
            className="animate-fade-in-up text-xs font-medium uppercase tracking-[0.3em] text-[var(--accent-primary)]"
            style={{
              animationDelay: "0.1s",
            }}
          >
            Bihandu.gg
          </div>

          {/* Headline */}

          <h1 className="mt-5 text-[clamp(4.2rem,9vw,9.5rem)] font-bold leading-[0.82] tracking-[-0.075em] text-[var(--foreground)]">
            <span
              className="block animate-fade-in-up"
              style={{
                animationDelay: "0.2s",
              }}
            >
              BUILD.
            </span>

            <span
              className="block text-[var(--muted)] animate-fade-in-up"
              style={{
                animationDelay: "0.4s",
              }}
            >
              EXPLORE.
            </span>

            <span
              className="block animate-fade-in-up"
              style={{
                animationDelay: "0.6s",
              }}
            >
              IMAGINE.
            </span>
          </h1>

          {/* Typing identity */}

          <div
            className="mt-9 animate-fade-in-up text-xl font-light tracking-tight text-[var(--muted)] sm:text-2xl md:mt-11 md:text-4xl"
            style={{
              animationDelay: "0.8s",
            }}
          >
            <span>I am a </span>
            <TypingText />
          </div>

          {/* Intro */}

          <p
            className="mt-6 max-w-xl animate-fade-in-up text-base leading-7 text-[var(--muted)] sm:text-lg"
            style={{
              animationDelay: "1s",
            }}
          >
            Building digital experiences where technology,
            spatial thinking, urban exploration, and visual
            storytelling meet.
          </p>

          {/* CTA */}

          <div
            className="mt-10 flex w-full animate-fade-in-up flex-col gap-4 sm:w-auto sm:flex-row"
            style={{
              animationDelay: "1.2s",
            }}
          >
            <Link
              href="#explore"
              className="btn-glow-effect group inline-flex items-center justify-center gap-3 rounded-full bg-[var(--foreground)] px-8 py-4 text-sm font-medium text-[var(--background)] transition-transform duration-300 hover:scale-[1.02] sm:text-base"
            >
              Explore My World

              <ChevronDown
                size={18}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </Link>

            <Link
              href="/blog"
              className="btn-glow-effect group inline-flex items-center justify-center gap-3 rounded-full border border-[var(--border)] bg-[var(--surface)]/40 px-8 py-4 text-sm font-medium text-[var(--foreground)] backdrop-blur-md transition-all duration-300 hover:border-[var(--accent-primary)]/50 hover:bg-[var(--surface-hover)] sm:text-base"
            >
              Read My Thoughts

              <ArrowRight
                size={18}
                className="text-[var(--accent-primary)] transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* =================================
            RIGHT — GIS VISUAL
        ================================= */}

        <div
          className="absolute inset-0 z-0 flex items-center justify-center lg:relative lg:inset-auto lg:z-10"
          aria-hidden="true"
        >
          {/* Mobile readability mask */}

          <div className="absolute inset-0 bg-gradient-to-r from-[var(--background)] via-[var(--background)]/90 to-transparent lg:hidden" />

          <div className="relative h-[60vh] w-full min-w-0 lg:h-auto">
            <TopographicPlaceholder />
          </div>
        </div>
      </div>

      {/* =================================
          SCROLL INDICATOR
      ================================= */}

      <div
        className="absolute bottom-7 left-1/2 z-30 flex -translate-x-1/2 animate-fade-in-up flex-col items-center gap-2"
        style={{
          animationDelay: "1.5s",
        }}
      >
        <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[var(--muted)] opacity-60">
          Scroll to Explore
        </span>

        <div className="animate-soft-bounce h-10 w-px bg-gradient-to-b from-[var(--muted)] to-transparent opacity-50" />
      </div>

      {/* Explore anchor */}

      <div
        id="explore"
        className="absolute bottom-0 left-0 h-px w-full"
        aria-hidden="true"
      />
    </section>
  );
}