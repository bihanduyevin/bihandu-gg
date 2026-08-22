"use client";

import * as React from "react";
import { ThemeProvider as ThemesProvider } from "@wrksz/themes";

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
    >
      {children}
    </ThemesProvider>
  );
}