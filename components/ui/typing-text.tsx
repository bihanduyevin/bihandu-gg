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

const TYPING_SPEED = 70;
const DELETING_SPEED = 35;
const PAUSE_DURATION = 2200;

export function TypingText() {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const updatePreference = () => {
      setIsReducedMotion(mediaQuery.matches);
    };

    updatePreference();

    mediaQuery.addEventListener("change", updatePreference);

    return () => {
      mediaQuery.removeEventListener("change", updatePreference);
    };
  }, []);

  useEffect(() => {
    if (isReducedMotion) {
      setText("Developer & Creator");
      setIsDeleting(false);
      setIsPaused(false);
      return;
    }

    if (isPaused) {
      return;
    }

    const currentPhrase = PHRASES[phraseIndex];

    const timer = window.setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentPhrase.slice(0, text.length + 1);

        setText(nextText);

        if (nextText === currentPhrase) {
          setIsPaused(true);

          window.setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(true);
          }, PAUSE_DURATION);
        }

        return;
      }

      const nextText = currentPhrase.slice(0, text.length - 1);

      setText(nextText);

      if (nextText === "") {
        setIsDeleting(false);
        setPhraseIndex((current) => (current + 1) % PHRASES.length);
      }
    }, isDeleting ? DELETING_SPEED : TYPING_SPEED);

    return () => {
      window.clearTimeout(timer);
    };
  }, [text, phraseIndex, isDeleting, isReducedMotion, isPaused]);

  return (
    <span className="inline-flex min-h-[1.5em] items-center">
      <span className="text-[var(--foreground)]">{text}</span>

      {!isReducedMotion && (
        <span
          className="ml-[0.1em] h-[1.1em] w-[2px] bg-[var(--accent-primary)] opacity-70 animate-pulse"
          aria-hidden="true"
        />
      )}
    </span>
  );
}