import Link from "next/link";

const socialLinks = [
  { name: "GitHub", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "X", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "Reddit", href: "#" },
  { name: "Discord", href: "#" },
  { name: "Facebook", href: "#" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-5 py-12 text-center sm:px-6 md:py-16">
        <Link
          href="/"
          className="text-xl font-bold tracking-tighter text-[var(--foreground)]"
        >
          Bihandu<span className="text-[var(--accent-primary)]">.gg</span>
        </Link>

        <p className="mt-3 max-w-md text-sm leading-6 text-[var(--muted)]">
          A digital map of a creative mind. Exploring technology, GIS, urban
          planning, photography, and visual storytelling.
        </p>

        <nav
          aria-label="Social links"
          className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-3"
        >
          {socialLinks.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              className="text-xs font-medium uppercase tracking-wider text-[var(--muted)] transition-colors hover:text-[var(--accent-primary)]"
            >
              {social.name}
            </Link>
          ))}
        </nav>

        <p className="mt-8 text-xs text-[var(--muted)]">
          © {currentYear} Bihandu. All rights reserved.
        </p>
      </div>
    </footer>
  );
}