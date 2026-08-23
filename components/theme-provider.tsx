"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext =
  createContext<ThemeContextValue | null>(null);

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setThemeState] =
    useState<Theme>("dark");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(
      "bihandu-theme",
    ) as Theme | null;

    if (savedTheme === "light" || savedTheme === "dark") {
      setThemeState(savedTheme);
      document.documentElement.classList.toggle(
        "dark",
        savedTheme === "dark",
      );
      return;
    }

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    const initialTheme: Theme = prefersDark
      ? "dark"
      : "light";

    setThemeState(initialTheme);

    document.documentElement.classList.toggle(
      "dark",
      initialTheme === "dark",
    );
  }, []);

  const setTheme = (nextTheme: Theme) => {
    setThemeState(nextTheme);

    window.localStorage.setItem(
      "bihandu-theme",
      nextTheme,
    );

    document.documentElement.classList.toggle(
      "dark",
      nextTheme === "dark",
    );
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme must be used inside ThemeProvider",
    );
  }

  return context;
}