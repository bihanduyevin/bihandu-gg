"use client";

import { useEffect, useState } from "react";

export function FlowingLines() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* ---------------------------------
          Atmospheric glow
      --------------------------------- */}

      <div className="absolute left-[58%] top-[38%] h-[60vw] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent-primary)] opacity-[0.025] blur-[120px] dark:opacity-[0.07]" />

      <div className="absolute left-[18%] top-[68%] h-[45vw] w-[45vw] rounded-full bg-[var(--accent-secondary)] opacity-[0.015] blur-[120px] dark:opacity-[0.04]" />

      {/* ---------------------------------
          Editorial grain
      --------------------------------- */}

      <div
        className="absolute inset-0 opacity-[0.018] mix-blend-overlay dark:opacity-[0.025]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* ---------------------------------
          Global contour system
      --------------------------------- */}

      <svg
        className="absolute -inset-[8%] h-[116%] w-[116%] animate-flow-drift"
        viewBox="0 0 1400 1000"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Purple flow */}

        <g
          stroke="var(--accent-primary)"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M-200 160 C100 20 240 310 500 170 S900 60 1200 230 S1500 390 1700 200"
            strokeWidth="1.2"
            opacity="0.28"
            className="animate-flow-dash"
          />

          <path
            d="M-200 240 C100 100 270 390 530 240 S930 120 1210 320 S1500 480 1700 290"
            strokeWidth="0.9"
            opacity="0.22"
            className="animate-flow-dash"
            style={{ animationDelay: "-8s" }}
          />

          <path
            d="M-200 320 C90 180 300 470 560 310 S960 200 1230 410 S1500 560 1700 370"
            strokeWidth="0.75"
            opacity="0.18"
            className="animate-flow-dash"
            style={{ animationDelay: "-16s" }}
          />

          <path
            d="M-200 410 C110 260 320 560 590 390 S980 280 1260 500 S1500 650 1700 460"
            strokeWidth="0.6"
            opacity="0.14"
            className="animate-flow-dash"
            style={{ animationDelay: "-24s" }}
          />
        </g>

        {/* Indigo counter-flow */}

        <g
          stroke="var(--accent-secondary)"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M-100 810 C180 650 400 890 650 690 S1050 500 1500 690"
            strokeWidth="1"
            opacity="0.2"
            className="animate-flow-dash"
            style={{ animationDelay: "-12s" }}
          />

          <path
            d="M-100 890 C210 720 440 970 700 760 S1080 590 1500 790"
            strokeWidth="0.7"
            opacity="0.14"
            className="animate-flow-dash"
            style={{ animationDelay: "-28s" }}
          />
        </g>

        {/* Bright moving energy path */}

        <path
          d="M-180 320 C100 180 300 470 560 310 S960 200 1230 410 S1500 560 1700 370"
          stroke="var(--accent-glow)"
          strokeWidth="1.4"
          strokeLinecap="round"
          fill="none"
          className="animate-energy-pulse"
          style={{ animationDuration: "18s" }}
        />

        <path
          d="M-100 810 C180 650 400 890 650 690 S1050 500 1500 690"
          stroke="var(--accent-glow)"
          strokeWidth="0.9"
          strokeLinecap="round"
          fill="none"
          className="animate-energy-pulse"
          style={{
            animationDelay: "-7s",
            animationDuration: "16s",
          }}
        />
      </svg>

      {/* ---------------------------------
          Small luminous points
      --------------------------------- */}

      <span className="absolute left-[22%] top-[28%] h-1 w-1 rounded-full bg-[var(--accent-glow)] shadow-[0_0_18px_var(--accent-glow)] animate-pulse" />

      <span
        className="absolute left-[71%] top-[24%] h-1.5 w-1.5 rounded-full bg-[var(--accent-secondary)] shadow-[0_0_22px_var(--accent-secondary)] animate-pulse"
        style={{ animationDelay: "1.1s" }}
      />

      <span
        className="absolute left-[84%] top-[68%] h-1 w-1 rounded-full bg-[var(--accent-glow)] shadow-[0_0_16px_var(--accent-glow)] animate-pulse"
        style={{ animationDelay: "2.2s" }}
      />

      {/* ---------------------------------
          Vignette
      --------------------------------- */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,var(--background)_100%)] opacity-75" />

      {/* Bottom fade */}

      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-[var(--background)] to-transparent" />
    </div>
  );
}