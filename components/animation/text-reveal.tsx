"use client";

import { useEffect, useRef, useState } from "react";

type TextRevealProps = {
  text: string;
  className?: string;
  delay?: number;
};

export function TextReveal({
  text,
  className = "",
  delay = 0,
}: TextRevealProps) {
  const ref = useRef<HTMLHeadingElement>(null);

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
        threshold: 0.35,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [hasReducedMotion, isVisible]);

  if (hasReducedMotion) {
    return <h2 className={className}>{text}</h2>;
  }

  const words = text.split(" ");

  return (
    <h2 ref={ref} className={className}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="mr-[0.25em] inline-block overflow-hidden pb-[0.08em] align-bottom"
        >
          <span
            className={`inline-block transform-gpu transition-transform duration-[800ms] ${
              isVisible
                ? "translate-y-0"
                : "translate-y-[110%]"
            }`}
            style={{
              transitionTimingFunction:
                "cubic-bezier(0.16, 1, 0.3, 1)",
              transitionDelay: `${delay + index * 55}ms`,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </h2>
  );
}