"use client";

import { useEffect, useRef, useState } from "react";

type RevealAnimation =
  | "fade-up"
  | "fade-right"
  | "fade"
  | "scale-up"
  | "scale-up-photo";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  animation?: RevealAnimation;
  className?: string;
  threshold?: number;
};

export function Reveal({
  children,
  delay = 0,
  animation = "fade-up",
  className = "",
  threshold = 0.15,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasReducedMotion, setHasReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const updatePreference = () => {
      setHasReducedMotion(mediaQuery.matches);
    };

    updatePreference();

    mediaQuery.addEventListener("change", updatePreference);

    return () => {
      mediaQuery.removeEventListener("change", updatePreference);
    };
  }, []);

  useEffect(() => {
    if (hasReducedMotion || isVisible) {
      return;
    }

    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [hasReducedMotion, isVisible, threshold]);

  let hiddenClasses = "opacity-0 translate-y-8";

  switch (animation) {
    case "fade-right":
      hiddenClasses = "opacity-0 -translate-x-8";
      break;

    case "fade":
      hiddenClasses = "opacity-0";
      break;

    case "scale-up":
      hiddenClasses = "opacity-0 translate-y-4 scale-[0.96]";
      break;

    case "scale-up-photo":
      hiddenClasses = "opacity-0 scale-[0.97]";
      break;

    case "fade-up":
    default:
      hiddenClasses = "opacity-0 translate-y-8";
      break;
  }

  const visibleClasses = "opacity-100 translate-x-0 translate-y-0 scale-100";

  const animationClasses =
    hasReducedMotion || isVisible ? visibleClasses : hiddenClasses;

  return (
    <div
      ref={ref}
      className={`transform-gpu ${animationClasses} ${className}`}
      style={{
        transitionProperty:
          "opacity, transform, filter",
        transitionDuration: "900ms",
        transitionTimingFunction:
          "cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}