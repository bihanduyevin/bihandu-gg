"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { ThemeToggle } from "@/components/ui/theme-toggle";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/#about",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold tracking-tighter text-[var(--foreground)] transition-colors hover:text-[var(--accent-primary)]"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Bihandu
          <span className="text-[var(--accent-primary)]">
            .gg
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6 text-sm font-medium text-[var(--muted)]">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-[var(--foreground)]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div
            className="h-4 w-px bg-[var(--border)]"
            aria-hidden="true"
          />

          <ThemeToggle />
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />

          <button
            type="button"
            onClick={() =>
              setIsMobileMenuOpen(
                (current) => !current,
              )
            }
            className="flex h-9 w-9 items-center justify-center text-[var(--foreground)]"
            aria-label={
              isMobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X size={20} aria-hidden="true" />
            ) : (
              <Menu
                size={20}
                aria-hidden="true"
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 right-0 border-t border-[var(--border)] bg-[var(--surface)] md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() =>
                  setIsMobileMenuOpen(false)
                }
                className="border-b border-[var(--border)] py-4 text-sm font-medium text-[var(--muted)] transition-colors last:border-b-0 hover:text-[var(--foreground)]"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}