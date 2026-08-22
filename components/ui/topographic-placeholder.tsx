"use client";

import { useEffect, useState } from "react";

export function TopographicPlaceholder() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className="relative flex h-full min-h-[360px] w-full items-center justify-center lg:min-h-[560px]"
      aria-hidden="true"
    >
      {/* ---------------------------------
          Ambient glow behind the terrain
      --------------------------------- */}

      <div className="absolute left-1/2 top-1/2 h-[65%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent-primary)] opacity-[0.07] blur-[90px] dark:opacity-[0.14]" />

      {/* ---------------------------------
          Perspective wrapper

          IMPORTANT:
          The rotation lives on this outer
          wrapper so the drift animation
          cannot overwrite it.
      --------------------------------- */}

      <div
        className="relative aspect-square w-[115%] max-w-[680px]"
        style={{
          perspective: "1200px",
        }}
      >
        <div
          className="relative h-full w-full"
          style={{
            transform: "rotateX(58deg) rotateZ(-38deg)",
            transformStyle: "preserve-3d",
          }}
        >
          <div
            className="relative flex h-full w-full items-center justify-center animate-flow-drift"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {/* ---------------------------------
                Outer contour
            --------------------------------- */}

            <div
              className="absolute inset-0 rounded-full border border-[var(--accent-primary)]/10"
              style={{
                transform: "translateZ(0px)",
              }}
            >
              <svg
                viewBox="0 0 100 100"
                className="h-full w-full overflow-visible opacity-60"
                fill="none"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="47"
                  stroke="var(--accent-secondary)"
                  strokeWidth="0.2"
                  strokeDasharray="1 2"
                />

                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="var(--accent-primary)"
                  strokeWidth="0.18"
                  strokeDasharray="1 2"
                  opacity="0.7"
                />

                <circle
                  cx="50"
                  cy="50"
                  r="33"
                  stroke="var(--accent-primary)"
                  strokeWidth="0.16"
                  strokeDasharray="1 2"
                  opacity="0.55"
                />
              </svg>
            </div>

            {/* ---------------------------------
                Contour layer 1
            --------------------------------- */}

            <div
              className="absolute inset-[7%] rounded-[42%] border border-[var(--accent-primary)]/20"
              style={{
                transform: "translateZ(28px) rotate(12deg)",
              }}
            >
              <svg
                viewBox="0 0 100 100"
                className="h-full w-full overflow-visible"
                fill="none"
              >
                <path
                  d="M8 54 C20 24 42 20 52 41 C63 66 79 71 92 45"
                  stroke="var(--accent-primary)"
                  strokeWidth="0.34"
                  opacity="0.55"
                />

                <path
                  d="M6 61 C22 33 43 29 55 48 C66 64 79 76 94 56"
                  stroke="var(--accent-secondary)"
                  strokeWidth="0.22"
                  opacity="0.4"
                />
              </svg>
            </div>

            {/* ---------------------------------
                Contour layer 2
            --------------------------------- */}

            <div
              className="absolute inset-[14%] rounded-[38%] border border-[var(--accent-primary)]/30"
              style={{
                transform: "translateZ(55px) rotate(-10deg)",
              }}
            >
              <svg
                viewBox="0 0 100 100"
                className="h-full w-full overflow-visible"
                fill="none"
              >
                <path
                  d="M5 50 C20 75 37 82 51 57 C63 35 80 24 96 50"
                  stroke="var(--accent-primary)"
                  strokeWidth="0.5"
                  opacity="0.8"
                />

                <path
                  d="M13 50 C27 68 39 71 51 53 C63 36 74 30 88 51"
                  stroke="var(--accent-secondary)"
                  strokeWidth="0.25"
                  opacity="0.55"
                />

                <path
                  d="M20 49 C31 60 42 62 51 50 C60 38 68 36 81 49"
                  stroke="var(--accent-glow)"
                  strokeWidth="0.16"
                  opacity="0.7"
                />
              </svg>
            </div>

            {/* ---------------------------------
                Inner terrain core
            --------------------------------- */}

            <div
              className="absolute inset-[21%] rounded-[34%] border border-[var(--accent-secondary)]/50 bg-[var(--background)]/15 backdrop-blur-[2px]"
              style={{
                transform: "translateZ(85px) rotate(5deg)",
              }}
            >
              <svg
                viewBox="0 0 100 100"
                className="h-full w-full overflow-visible"
                fill="none"
              >
                <path
                  d="M18 51 C30 76 42 80 51 56 C60 34 72 25 83 49"
                  stroke="var(--accent-secondary)"
                  strokeWidth="0.75"
                  opacity="0.8"
                />

                <path
                  d="M25 51 C35 68 43 70 51 53 C59 40 67 34 75 49"
                  stroke="var(--accent-primary)"
                  strokeWidth="0.4"
                  opacity="0.65"
                />

                <path
                  d="M33 51 C41 61 46 62 51 52 C56 43 61 40 68 49"
                  stroke="var(--accent-glow)"
                  strokeWidth="0.25"
                  opacity="0.75"
                />

                {/* Energy line */}
                <path
                  d="M25 51 C35 68 43 70 51 53 C59 40 67 34 75 49"
                  stroke="var(--accent-glow)"
                  strokeWidth="1.2"
                  className="animate-energy-pulse"
                  style={{ animationDuration: "10s" }}
                />
              </svg>
            </div>

            {/* ---------------------------------
                Vertical connection lines
            --------------------------------- */}

            <svg
              className="absolute inset-0 h-full w-full overflow-visible opacity-30"
              viewBox="0 0 100 100"
              fill="none"
              style={{
                transform: "translateZ(42px) rotateX(-90deg)",
              }}
            >
              <line
                x1="50"
                y1="2"
                x2="50"
                y2="98"
                stroke="var(--accent-primary)"
                strokeWidth="0.18"
                strokeDasharray="1 3"
              />

              <line
                x1="2"
                y1="50"
                x2="98"
                y2="50"
                stroke="var(--accent-secondary)"
                strokeWidth="0.15"
                strokeDasharray="1 3"
              />
            </svg>

            {/* ---------------------------------
                Floating points
            --------------------------------- */}

            <span
              className="absolute left-[31%] top-[36%] h-1.5 w-1.5 rounded-full bg-[var(--accent-glow)] shadow-[0_0_16px_var(--accent-glow)] animate-pulse"
              style={{
                transform: "translateZ(100px)",
              }}
            />

            <span
              className="absolute left-[66%] top-[58%] h-1 w-1 rounded-full bg-[var(--accent-secondary)] shadow-[0_0_14px_var(--accent-secondary)] animate-pulse"
              style={{
                animationDelay: "1.3s",
                transform: "translateZ(95px)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Soft edge glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,var(--background)_90%)] opacity-80" />
    </div>
  );
}