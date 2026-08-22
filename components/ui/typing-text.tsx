"use client";

import { useEffect, useState } from "react";

const PHRASES = [
  "Developer",
  "Technology Enthusiast",
  "GIS Specialist",
  "Urban Explorer",
  "Photographer",
  "Writer",
  "Digital Creator",
];

const TYPING_SPEED = 75;
const DELETING_SPEED = 38;
const PAUSE_DURATION = 2200;

export function TypingText() {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const updateMotionPreference = () => {
      setIsReducedMotion(mediaQuery.matches);
    };

    updateMotionPreference();

    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => {
      mediaQuery.removeEventListener(
        "change",
        updateMotionPreference
      );
    };
  }, []);

  useEffect(() => {
    if (isReducedMotion) {
      setText("Developer & Creator");
      setIsDeleting(false);
      return;
    }

    const currentPhrase = PHRASES[phraseIndex];

    if (!isDeleting && text === currentPhrase) {
      const pauseTimer = window.setTimeout(() => {
        setIsDeleting(true);
      }, PAUSE_DURATION);

      return () => window.clearTimeout(pauseTimer);
    }

    const timer = window.setTimeout(
      () => {
        if (isDeleting) {
          const nextText = currentPhrase.slice(0, text.length - 1);

          setText(nextText);

          if (nextText.length === 0) {
            setIsDeleting(false);
            setPhraseIndex(
              (current) => (current + 1) % PHRASES.length
            );
          }

          return;
        }

        setText(currentPhrase.slice(0, text.length + 1));
      },
      isDeleting ? DELETING_SPEED : TYPING_SPEED
    );

    return () => window.clearTimeout(timer);
  }, [
    text,
    phraseIndex,
    isDeleting,
    isReducedMotion,
  ]);

  return (
    <span className="inline-flex min-h-[1.5em] items-center">
      <span className="text-[var(--foreground)]">
        {text}
      </span>

      {!isReducedMotion && (
        <span
          className="ml-[0.12em] h-[1.1em] w-[2px] bg-[var(--accent-primary)] opacity-80 animate-pulse"
          aria-hidden="true"
        />
      )}
    </span>
  );
}