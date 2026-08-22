import Link from "next/link";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaReddit,
  FaDiscord,
  FaXTwitter,
} from "react-icons/fa6";

const socialLinks = [
  {
    name: "GitHub",
    href: "#",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: FaLinkedin,
  },
  {
    name: "X",
    href: "#",
    icon: FaXTwitter,
  },
  {
    name: "Reddit",
    href: "#",
    icon: FaReddit,
  },
  {
    name: "Discord",
    href: "#",
    icon: FaDiscord,
  },
  {
    name: "Instagram",
    href: "#",
    icon: FaInstagram,
  },
  {
    name: "Facebook",
    href: "#",
    icon: FaFacebook,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 md:py-20">

        {/* Main footer */}
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">

          {/* Brand */}
          <div className="max-w-md">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight text-[var(--foreground)]"
            >
              Bihandu
              <span className="text-[var(--accent-primary)]">.gg</span>
            </Link>

            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
              A digital map of a creative mind — exploring technology,
              GIS, urban environments, photography, and visual storytelling.
            </p>
          </div>

          {/* Social links */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--muted)]">
              Connect
            </p>

            <nav
              aria-label="Social media"
              className="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3"
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="group flex items-center gap-2.5 text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
                  >
                    <Icon
                      className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:text-[var(--accent-primary)]"
                      aria-hidden="true"
                    />

                    <span>{social.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--border)] pt-6 text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {currentYear} Bihandu. All rights reserved.
          </span>

          <span className="tracking-wide">
            Built with curiosity.
          </span>
        </div>
      </div>
    </footer>
  );
}