import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

import { Reveal } from "@/components/animation/reveal";
import { PageVideoBackground } from "@/components/ui/page-video-background";
import { featuredProjects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Projects | Bihandu.gg",
  description:
    "Selected projects, experiments, GIS tools, creative technology, and digital experiences by Bihandu.",
};

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden pt-24 pb-32">
      <PageVideoBackground />

      <div className="relative z-10">
        {/* Page Header */}
        <header className="mx-auto max-w-7xl border-b border-[var(--border)] px-5 py-16 sm:px-6 md:py-24">
          <Reveal animation="fade">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent-primary)]">
              Projects
            </p>
          </Reveal>

          <Reveal delay={100} animation="fade-up">
            <h1 className="mb-8 text-[clamp(2.5rem,5vw,5rem)] font-bold leading-[1] tracking-[-0.05em] text-[var(--foreground)]">
              SELECTED WORK /
              <br className="hidden md:block" />
              EXPERIMENTS / BUILDS.
            </h1>
          </Reveal>

          <Reveal delay={200} animation="fade-up">
            <p className="max-w-2xl text-lg font-light leading-relaxed text-[var(--muted)] md:text-xl">
              A comprehensive archive of digital experiences, GIS tools,
              urban-planning analysis, and creative technology experiments.
              Building at the intersection of code and spatial data.
            </p>
          </Reveal>
        </header>

        {/* Projects */}
        <div className="mx-auto max-w-7xl space-y-24 px-5 pt-16 sm:px-6 md:space-y-40 md:pt-24">
          {featuredProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <article
                key={project.id}
                className="group grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16"
              >
                {/* Image */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Reveal
                    animation="scale-up"
                    threshold={0.2}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-[var(--border)] bg-[var(--surface)]/80 backdrop-blur-[2px] transition-colors duration-500 hover:border-[var(--accent-primary)]/50 lg:aspect-[16/10]">
                      <div
                        className="pointer-events-none absolute inset-0 z-10 bg-[var(--foreground)]/5 mix-blend-overlay"
                        aria-hidden="true"
                      />

                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="h-full w-full object-cover grayscale-[30%] transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                      />

                      <div
                        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/30 to-transparent"
                        aria-hidden="true"
                      />

                      <div className="absolute left-5 top-5 z-20 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                        {(index + 1)
                          .toString()
                          .padStart(2, "0")}
                      </div>
                    </div>
                  </Reveal>
                </div>

                {/* Project information */}
                <div
                  className={`lg:col-span-5 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Reveal
                    delay={100}
                    animation="fade-up"
                  >
                    <div className="mb-4 flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-[var(--muted)]">
                      <span>
                        {(index + 1)
                          .toString()
                          .padStart(2, "0")}
                      </span>

                      <span
                        className="h-px w-8 bg-[var(--border)]"
                        aria-hidden="true"
                      />

                      <span className="text-[var(--accent-primary)]">
                        {project.category}
                      </span>
                    </div>
                  </Reveal>

                  <Reveal
                    delay={200}
                    animation="fade-up"
                  >
                    <h2 className="mb-6 text-3xl font-bold tracking-tight text-[var(--foreground)] md:text-4xl">
                      {project.title}
                    </h2>
                  </Reveal>

                  <Reveal
                    delay={300}
                    animation="fade-up"
                  >
                    <p className="mb-8 text-base leading-relaxed text-[var(--muted)]">
                      {project.description}
                    </p>
                  </Reveal>

                  {/* Technologies */}
                  <div className="mb-10 flex flex-wrap gap-2">
                    {project.technologies.map(
                      (tech, techIndex) => (
                        <Reveal
                          key={tech}
                          delay={400 + techIndex * 100}
                          animation="fade-up"
                        >
                          <span className="inline-flex rounded-full border border-[var(--border)] bg-[var(--surface)]/80 px-3 py-1 text-xs tracking-wider text-[var(--muted)]">
                            {tech}
                          </span>
                        </Reveal>
                      ),
                    )}
                  </div>

                  {/* Links */}
                  <Reveal
                    delay={500}
                    animation="fade"
                  >
                    <div className="flex items-center gap-6">
                      {project.liveUrl &&
                        project.liveUrl !== "#" && (
                          <Link
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-[var(--foreground)] transition-colors hover:text-[var(--accent-primary)]"
                          >
                            Live Project

                            <ArrowUpRight
                              size={16}
                              aria-hidden="true"
                              className="transition-transform duration-300 group-hover/link:-translate-y-1 group-hover/link:translate-x-1"
                            />
                          </Link>
                        )}

                      {project.githubUrl &&
                        project.githubUrl !== "#" && (
                          <Link
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--muted)] transition-colors hover:text-[var(--accent-primary)]"
                            aria-label={`Open ${project.title} on GitHub`}
                          >
                            <FaGithub
                              size={20}
                              aria-hidden="true"
                            />
                          </Link>
                        )}
                    </div>
                  </Reveal>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}