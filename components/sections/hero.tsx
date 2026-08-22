import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

import { TypingText } from "@/components/ui/typing-text";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/video/hero-background.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-black/70"
        aria-hidden="true"
      />

      {/* Subtle purple atmosphere */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(139,92,246,0.16),transparent_42%)]"
        aria-hidden="true"
      />

      {/* Bottom fade */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[var(--background)] to-transparent"
        aria-hidden="true"
      />

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-7xl items-center px-5 sm:px-6">
        <div className="flex w-full flex-col items-start">

          <p
            className="mb-6 animate-fade-in-up text-xs font-semibold uppercase tracking-[0.3em] text-purple-300"
            style={{ animationDelay: "0.1s" }}
          >
            Bihandu.gg
          </p>

          <h1 className="max-w-6xl text-[clamp(4.5rem,10vw,10rem)] font-bold leading-[0.84] tracking-[-0.07em] text-white">
            <span
              className="block animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              BUILD.
            </span>

            <span
              className="block animate-fade-in-up text-white/55"
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

          <div
            className="mt-9 flex flex-wrap items-center gap-x-2 text-xl font-light tracking-tight text-white/60 sm:text-2xl md:mt-11 md:text-4xl"
            style={{ animationDelay: "0.8s" }}
          >
            <span className="animate-fade-in-up">I am a</span>

            <span className="animate-fade-in-up">
              <TypingText />
            </span>
          </div>

          <p
            className="mt-6 max-w-2xl animate-fade-in-up text-base leading-7 text-white/60 sm:text-lg"
            style={{ animationDelay: "1s" }}
          >
            Building digital experiences where technology, spatial thinking,
            urban exploration, and visual storytelling meet.
          </p>

          <div
            className="mt-10 flex w-full animate-fade-in-up flex-col gap-4 sm:w-auto sm:flex-row"
            style={{ animationDelay: "1.2s" }}
          >
            <Link
              href="#about"
              className="btn-glow-effect group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(139,92,246,0.25)] sm:text-base"
            >
              Explore My World

              <ChevronDown
                size={18}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </Link>

            <Link
              href="/blog"
              className="btn-glow-effect group inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-transparent px-8 py-4 text-sm font-medium text-white transition-all hover:border-purple-400/70 hover:bg-white/5 sm:text-base"
            >
              Read My Thoughts

              <ArrowRight
                size={18}
                className="text-purple-300 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 animate-fade-in-up flex-col items-center gap-3"
        style={{ animationDelay: "1.5s" }}
      >
        <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/50">
          Scroll to Explore
        </span>

        <div className="animate-soft-bounce h-10 w-px bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </section>
  );
}