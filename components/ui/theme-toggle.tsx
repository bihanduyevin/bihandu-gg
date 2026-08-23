"use client";

import {
  Moon,
  Sun,
} from "lucide-react";

import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const {
    theme,
    toggleTheme,
  } = useTheme();

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] transition-colors hover:bg-[var(--surface-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]"
      aria-label={
        isDark
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
    >
      {isDark ? (
        <Sun
          size={17}
          aria-hidden="true"
        />
      ) : (
        <Moon
          size={17}
          aria-hidden="true"
        />
      )}

      <span className="sr-only">
        {isDark
          ? "Switch to light mode"
          : "Switch to dark mode"}
      </span>
    </button>
  );
}