import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

import { Reveal } from "@/components/animation/reveal";
import { featuredProjects } from "@/lib/data/projects";

export function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="relative border-b border-[var(--border)] py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-6 md:mb-24 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal animation="fade">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent-primary)]">
                Selected Work
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="text-[clamp(2.8rem,5vw,5rem)] font-bold leading-none tracking-[-0.05em] text-[var(--foreground)]">
                Featured Projects.
              </h2>
            </Reveal>
          </div>

          <Reveal delay={200} animation="fade-right">
            <Link
              href="/projects"
              className="group hidden items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)] transition-colors hover:text-[var(--accent-primary)] md:inline-flex"
            >
              View Archive

              <ArrowUpRight
                size={15}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        </div>

        {/* Projects */}
        <div className="space-y-24 md:space-y-36">
          {featuredProjects.map((project, index) => {
            const reversed = index % 2 !== 0;

            return (
              <article
                key={project.id}
                className="group grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16"
              >
                {/* Image */}
                <div
                  className={`lg:col-span-7 ${
                    reversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Reveal
                    animation="scale-up"
                    threshold={0.18}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden border border-[var(--border)] bg-[var(--surface)] transition-colors duration-500 hover:border-[var(--accent-primary)]/50">
                      <div
                        className="pointer-events-none absolute inset-0 z-10 bg-[var(--foreground)]/5 mix-blend-overlay"
                        aria-hidden="true"
                      />

                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="h-full w-full object-cover grayscale-[25%] transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                      />

                      <div
                        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/30 to-transparent"
                        aria-hidden="true"
                      />

                      <div className="absolute left-5 top-5 z-20 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                        0{index + 1}
                      </div>
                    </div>
                  </Reveal>
                </div>

                {/* Information */}
                <div
                  className={`lg:col-span-5 ${
                    reversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Reveal
                    delay={100}
                    animation="fade-up"
                  >
                    <div className="mb-4 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                      <span className="text-[var(--accent-primary)]">
                        {project.category}
                      </span>

                      <span
                        className="h-px w-7 bg-[var(--border)]"
                        aria-hidden="true"
                      />

                      <span>Featured</span>
                    </div>
                  </Reveal>

                  <Reveal
                    delay={200}
                    animation="fade-up"
                  >
                    <h3 className="text-3xl font-bold tracking-tight text-[var(--foreground)] md:text-4xl">
                      {project.title}
                    </h3>
                  </Reveal>

                  <Reveal
                    delay={300}
                    animation="fade-up"
                  >
                    <p className="mt-5 text-base leading-7 text-[var(--muted)]">
                      {project.description}
                    </p>
                  </Reveal>

                  {/* Technologies */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.technologies.map(
                      (technology, technologyIndex) => (
                        <Reveal
                          key={technology}
                          delay={400 + technologyIndex * 70}
                          animation="fade-up"
                        >
                          <span className="inline-flex rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--muted)]">
                            {technology}
                          </span>
                        </Reveal>
                      ),
                    )}
                  </div>

                  {/* Links */}
                  <Reveal
                    delay={550}
                    animation="fade"
                  >
                    <div className="mt-9 flex items-center gap-6">
                      {project.liveUrl &&
                        project.liveUrl !== "#" && (
                          <Link
                            href={project.liveUrl}
                            className="group/link inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--foreground)] transition-colors hover:text-[var(--accent-primary)]"
                          >
                            Live Project

                            <ArrowUpRight
                              size={15}
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
                            aria-label={`Open ${project.title} on GitHub`}
                            className="text-[var(--muted)] transition-colors hover:text-[var(--accent-primary)]"
                          >
                            <FaGithub
                              size={19}
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

        {/* Mobile archive */}
        <Reveal
          animation="fade-up"
          delay={200}
        >
          <div className="mt-20 flex justify-center md:hidden">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--foreground)] transition-colors hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]"
            >
              View Archive

              <ArrowUpRight
                size={14}
                aria-hidden="true"
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}