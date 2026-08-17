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
      {/* Large atmospheric glow */}
      <div className="absolute left-[55%] top-[38%] h-[55vw] w-[55vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent-primary)] opacity-[0.06] blur-[110px] dark:opacity-[0.12]" />

      <div className="absolute left-[15%] top-[65%] h-[40vw] w-[40vw] rounded-full bg-[var(--accent-secondary)] opacity-[0.04] blur-[110px] dark:opacity-[0.08]" />

      {/* Main contour system */}
      <svg
        className="absolute -inset-[10%] h-[120%] w-[120%] animate-flow-drift"
        viewBox="0 0 1400 1000"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Purple contour group */}
        <g
          stroke="var(--accent-primary)"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M-200 180 C80 40, 220 320, 500 180 S900 80, 1200 240 S1500 420, 1700 220"
            strokeWidth="1.5"
            opacity="0.40"
            className="animate-flow-dash"
          />

          <path
            d="M-200 260 C100 120, 260 420, 520 250 S920 140, 1210 330 S1500 500, 1700 300"
            strokeWidth="1"
            opacity="0.32"
            className="animate-flow-dash"
            style={{ animationDelay: "-8s" }}
          />

          <path
            d="M-200 350 C120 200, 280 500, 560 320 S950 220, 1240 420 S1500 580, 1700 370"
            strokeWidth="0.8"
            opacity="0.26"
            className="animate-flow-dash"
            style={{ animationDelay: "-16s" }}
          />

          <path
            d="M-200 450 C140 300, 340 590, 600 390 S980 300, 1260 500 S1500 680, 1700 460"
            strokeWidth="0.7"
            opacity="0.20"
            className="animate-flow-dash"
            style={{ animationDelay: "-24s" }}
          />
        </g>

        {/* Blue/indigo counter-flow */}
        <g
          stroke="var(--accent-secondary)"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M-100 820 C180 640, 400 900, 650 700 S1050 500, 1450 700"
            strokeWidth="1.2"
            opacity="0.28"
            className="animate-flow-dash-reverse"
          />

          <path
            d="M-100 900 C210 710, 430 980, 700 770 S1080 590, 1500 800"
            strokeWidth="0.8"
            opacity="0.18"
            className="animate-flow-dash-reverse"
            style={{ animationDelay: "-12s" }}
          />

          <path
            d="M-100 980 C240 780, 470 1060, 740 850 S1120 670, 1550 880"
            strokeWidth="0.6"
            opacity="0.12"
            className="animate-flow-dash-reverse"
            style={{ animationDelay: "-24s" }}
          />
        </g>
      </svg>

      {/* Floating luminous points */}
      <div className="absolute left-[18%] top-[30%] h-1 w-1 animate-pulse rounded-full bg-[var(--accent-primary)] shadow-[0_0_18px_var(--accent-primary)]" />

      <div
        className="absolute left-[72%] top-[24%] h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--accent-secondary)] shadow-[0_0_22px_var(--accent-secondary)]"
        style={{ animationDelay: "1.2s" }}
      />

      <div
        className="absolute left-[82%] top-[68%] h-1 w-1 animate-pulse rounded-full bg-[var(--accent-primary)] shadow-[0_0_16px_var(--accent-primary)]"
        style={{ animationDelay: "2.4s" }}
      />

      {/* Soft vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,var(--background)_100%)] opacity-80" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-[var(--background)] to-transparent" />
    </div>
  );
}