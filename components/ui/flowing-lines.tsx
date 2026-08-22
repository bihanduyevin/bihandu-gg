"use client";

import { useEffect, useState } from "react";

export function FlowingLines() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* Atmospheric glow - no panels / no boxes */}
      <div className="absolute left-[55%] top-[40%] h-[55vw] w-[55vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent-primary)] opacity-[0.05] blur-[120px] dark:opacity-[0.10]" />

      <div className="absolute left-[15%] top-[70%] h-[45vw] w-[45vw] rounded-full bg-[var(--accent-secondary)] opacity-[0.03] blur-[120px] dark:opacity-[0.06]" />

      {/* Continuous SVG background */}
      <svg
        className="absolute -inset-[15%] h-[130%] w-[130%] animate-flow-drift"
        viewBox="0 0 1400 1000"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="animate-flow-dash"
          stroke="var(--accent-primary)"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M-200 180 C80 40 220 320 500 180 S900 80 1200 240 S1500 420 1700 220"
            strokeWidth="1.6"
            opacity="0.42"
          />

          <path
            d="M-200 260 C100 120 260 420 520 250 S920 140 1210 330 S1500 500 1700 300"
            strokeWidth="1.1"
            opacity="0.34"
          />

          <path
            d="M-200 350 C120 200 280 500 560 320 S950 220 1240 420 S1500 580 1700 370"
            strokeWidth="0.8"
            opacity="0.26"
          />

          <path
            d="M-200 450 C140 300 340 590 600 390 S980 300 1260 500 S1500 680 1700 460"
            strokeWidth="0.7"
            opacity="0.20"
          />

          <path
            d="M-250 560 C100 400 300 700 650 490 S1050 380 1350 580 S1600 760 1800 550"
            strokeWidth="0.55"
            opacity="0.16"
          />
        </g>

        <g
          className="animate-flow-dash-reverse"
          stroke="var(--accent-secondary)"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M-100 820 C180 640 400 900 650 700 S1050 500 1450 700"
            strokeWidth="1.2"
            opacity="0.30"
          />

          <path
            d="M-100 900 C210 710 430 980 700 770 S1080 590 1500 800"
            strokeWidth="0.8"
            opacity="0.20"
          />

          <path
            d="M-100 980 C240 780 470 1060 740 850 S1120 670 1550 880"
            strokeWidth="0.6"
            opacity="0.14"
          />
        </g>
      </svg>

      {/* Tiny floating points */}
      <div className="absolute left-[18%] top-[30%] h-1 w-1 rounded-full bg-[var(--accent-primary)] shadow-[0_0_16px_var(--accent-primary)] animate-pulse" />

      <div
        className="absolute left-[74%] top-[26%] h-1.5 w-1.5 rounded-full bg-[var(--accent-secondary)] shadow-[0_0_20px_var(--accent-secondary)] animate-pulse"
        style={{ animationDelay: "1.4s" }}
      />

      <div
        className="absolute left-[82%] top-[67%] h-1 w-1 rounded-full bg-[var(--accent-primary)] shadow-[0_0_16px_var(--accent-primary)] animate-pulse"
        style={{ animationDelay: "2.8s" }}
      />

      {/* Soft center vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,var(--background)_100%)] opacity-70" />

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--background)] to-transparent" />
    </div>
  );
}