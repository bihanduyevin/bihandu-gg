import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/animation/reveal";

const images = [
  {
    id: "photo-01",
    src: "/images/photography/photo-01.jpg",
    alt: "Photography placeholder one",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    id: "photo-02",
    src: "/images/photography/photo-02.jpg",
    alt: "Photography placeholder two",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: "photo-03",
    src: "/images/photography/photo-03.jpg",
    alt: "Photography placeholder three",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: "photo-04",
    src: "/images/photography/photo-04.jpg",
    alt: "Photography placeholder four",
    className: "md:col-span-3 md:row-span-1",
  },
];

function PhotographyImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[radial-gradient(circle_at_50%_30%,rgba(139,92,246,0.16),transparent_35%),linear-gradient(135deg,#0b0b0f,#030303)]">
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover grayscale-[35%] transition-all duration-1000 ease-out group-hover:scale-105 group-hover:grayscale-0"
      />

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
        aria-hidden="true"
      />
    </div>
  );
}

export function Photography() {
  return (
    <section
      id="photography"
      className="relative border-b border-[var(--border)] py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal animation="fade">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent-primary)]">
                Perspective
              </p>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="text-[clamp(2.8rem,5vw,5rem)] font-bold leading-none tracking-[-0.05em] text-[var(--foreground)]">
                Through My Lens.
              </h2>
            </Reveal>
          </div>

          <Reveal
            delay={200}
            animation="fade-right"
          >
            <p className="max-w-md text-sm leading-6 text-[var(--muted)] md:text-base">
              A future space for photographs, city fragments,
              architecture, landscapes, and the quiet details that
              catch my eye.
            </p>
          </Reveal>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 gap-4 md:h-[760px] md:grid-cols-3 md:grid-rows-3 md:gap-5">
          {images.map((image, index) => (
            <Reveal
              key={image.id}
              animation="scale-up-photo"
              delay={index * 120}
              threshold={0.12}
              className={image.className}
            >
              <div className="group relative h-full min-h-[250px] overflow-hidden border border-[var(--border)] bg-[var(--surface)] transition-colors duration-500 hover:border-[var(--accent-primary)]/50">
                <PhotographyImage
                  src={image.src}
                  alt={image.alt}
                />

                <div className="absolute right-4 top-4 z-20 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white backdrop-blur-md">
                    <ArrowUpRight
                      size={15}
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}