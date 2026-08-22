import {
  Camera,
  Code2,
  Map,
  PencilLine,
  ScanLine,
} from "lucide-react";

import { Reveal } from "@/components/animation/reveal";
import { TextReveal } from "@/components/animation/text-reveal";

const identities = [
  {
    label: "DEVELOPER",
    icon: Code2,
  },
  {
    label: "GIS",
    icon: Map,
  },
  {
    label: "URBAN",
    icon: ScanLine,
  },
  {
    label: "PHOTO",
    icon: Camera,
  },
  {
    label: "BLOG",
    icon: PencilLine,
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-[var(--border)] py-28 md:py-36"
    >
      {/* Spatial grid */}
      <div
        className="bg-spatial-grid pointer-events-none absolute inset-0 opacity-[0.025] dark:opacity-[0.05]"
        aria-hidden="true"
      />

      {/* Subtle purple atmosphere */}
      <div
        className="pointer-events-none absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-[var(--accent-primary)] opacity-[0.025] blur-[100px] dark:opacity-[0.06]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-16 px-5 sm:px-6 lg:grid-cols-12 lg:gap-20">
        {/* Left */}
        <div className="flex flex-col justify-center lg:col-span-7">
          <Reveal
            animation="fade"
            threshold={0.25}
          >
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent-primary)]">
              About / Identity
            </p>
          </Reveal>

          <TextReveal
            text="I like building things, exploring places, and understanding how technology connects the two."
            className="max-w-4xl text-[clamp(2.8rem,6vw,6rem)] font-bold leading-[0.95] tracking-[-0.05em] text-[var(--foreground)]"
          />

          <Reveal
            delay={750}
            animation="fade-right"
            threshold={0.2}
          >
            <div className="mt-10 h-px w-24 bg-[var(--accent-primary)] opacity-60" />
          </Reveal>
        </div>

        {/* Right */}
        <div className="flex flex-col justify-center lg:col-span-5">
          <Reveal delay={150}>
            <p className="text-lg leading-8 text-[var(--muted)] md:text-xl">
              My interests sit where technology, geography, urban
              environments, photography, and visual storytelling
              overlap.
            </p>
          </Reveal>

          <Reveal delay={280}>
            <p className="mt-6 text-base leading-7 text-[var(--muted)] md:text-lg">
              I enjoy learning how systems work, turning ideas into
              digital experiences, exploring spatial data, and
              documenting the world through images and writing.
            </p>
          </Reveal>

          {/* Identity buttons */}
          <div className="mt-10 flex flex-wrap gap-3">
            {identities.map(({ label, icon: Icon }, index) => (
              <Reveal
                key={label}
                delay={420 + index * 90}
                animation="fade-up"
                threshold={0.15}
              >
                <div className="identity-outline-button group">
                  <Icon
                    size={14}
                    strokeWidth={1.8}
                    aria-hidden="true"
                    className="text-[var(--muted)] transition-colors duration-300 group-hover:text-[var(--accent-primary)]"
                  />

                  <span>{label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}