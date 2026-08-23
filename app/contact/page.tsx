"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MessageCircle,
  Send,
} from "lucide-react";

import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

import { Reveal } from "@/components/animation/reveal";
import { PageVideoBackground } from "@/components/ui/page-video-background";

const FORMSPREE_ENDPOINT =
  "https://formspree.io/f/xljrvyda";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/bihanduyevin",
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
    name: "Instagram",
    href: "#",
    icon: FaInstagram,
  },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] =
    useState(false);
  const [isSuccess, setIsSuccess] =
    useState(false);
  const [errorMessage, setErrorMessage] =
    useState("");

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setIsSubmitting(true);
    setIsSuccess(false);
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        FORMSPREE_ENDPOINT,
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        },
      );

      if (!response.ok) {
        throw new Error(
          "Form submission failed.",
        );
      }

      form.reset();
      setIsSuccess(true);
    } catch {
      setErrorMessage(
        "Something went wrong while sending your message. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden pt-24 pb-32">
      <PageVideoBackground />

      <div className="relative z-10">
        {/* Header */}
        <section className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="border-b border-[var(--border)] py-16 md:py-24">
            <Reveal animation="fade">
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent-primary)]">
                Contact
              </p>
            </Reveal>

            <Reveal
              delay={100}
              animation="fade-up"
            >
              <h1 className="max-w-5xl text-[clamp(3rem,7vw,7rem)] font-bold leading-[0.9] tracking-[-0.06em] text-[var(--foreground)]">
                LET&apos;S BUILD
                <br />
                SOMETHING.
              </h1>
            </Reveal>

            <Reveal
              delay={200}
              animation="fade-up"
            >
              <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-[var(--muted)] md:text-xl">
                Have an idea, project, collaboration, question, or
                just want to say hello? Send me a message and
                let&apos;s start a conversation.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Contact content */}
        <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 pt-16 sm:px-6 md:pt-24 lg:grid-cols-12 lg:gap-20">
          {/* Left */}
          <div className="lg:col-span-4">
            <Reveal animation="fade-right">
              <div>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--accent-primary)]">
                  <MessageCircle
                    size={19}
                    aria-hidden="true"
                  />
                </div>

                <h2 className="text-2xl font-bold tracking-tight text-[var(--foreground)]">
                  Start a conversation.
                </h2>

                <p className="mt-4 text-sm leading-7 text-[var(--muted)] md:text-base">
                  Whether it&apos;s a web project, GIS idea, urban
                  planning experiment, photography collaboration, or
                  something completely unexpected, I&apos;d love to
                  hear about it.
                </p>
              </div>
            </Reveal>

            <Reveal
              delay={150}
              animation="fade-up"
            >
              <div className="mt-10 border-t border-[var(--border)] pt-8">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                  <Mail
                    size={15}
                    aria-hidden="true"
                  />
                  Contact
                </div>

                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  Fill out the form and your message will be
                  delivered securely through Formspree.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-8">
            <Reveal
              animation="scale-up"
              threshold={0.1}
            >
              <div className="border border-[var(--border)] bg-[var(--surface)]/80 backdrop-blur-[2px]">
                <div className="border-b border-[var(--border)] px-5 py-5 sm:px-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--accent-primary)]">
                    Direct Channel
                  </p>

                  <h2 className="mt-1 text-xl font-semibold text-[var(--foreground)]">
                    Send a message
                  </h2>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-7 p-5 sm:p-7"
                >
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      className="w-full border-b border-[var(--border)] bg-transparent px-0 py-3 text-base text-[var(--foreground)] outline-none placeholder:text-[var(--muted)]/60 transition-colors focus:border-[var(--accent-primary)]"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@example.com"
                      className="w-full border-b border-[var(--border)] bg-transparent px-0 py-3 text-base text-[var(--foreground)] outline-none placeholder:text-[var(--muted)]/60 transition-colors focus:border-[var(--accent-primary)]"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]"
                    >
                      Subject
                    </label>

                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      placeholder="What are we talking about?"
                      className="w-full border-b border-[var(--border)] bg-transparent px-0 py-3 text-base text-[var(--foreground)] outline-none placeholder:text-[var(--muted)]/60 transition-colors focus:border-[var(--accent-primary)]"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={7}
                      placeholder="Tell me a little about your idea..."
                      className="w-full resize-y border border-[var(--border)] bg-transparent px-4 py-4 text-base leading-7 text-[var(--foreground)] outline-none placeholder:text-[var(--muted)]/60 transition-colors focus:border-[var(--accent-primary)]"
                    />
                  </div>

                  {/* Honeypot */}
                  <input
                    type="text"
                    name="_gotcha"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  {/* Success */}
                  {isSuccess && (
                    <div className="flex items-start gap-3 border border-[var(--accent-primary)]/30 bg-[var(--accent-primary)]/5 p-4">
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-[var(--accent-primary)]"
                        aria-hidden="true"
                      />

                      <div>
                        <p className="text-sm font-semibold text-[var(--foreground)]">
                          Message sent.
                        </p>

                        <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                          Thanks for reaching out. I&apos;ll get
                          back to you as soon as I can.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Error */}
                  {errorMessage && (
                    <div className="border border-red-500/30 bg-red-500/5 p-4">
                      <p className="text-sm leading-6 text-[var(--muted)]">
                        {errorMessage}
                      </p>
                    </div>
                  )}

                  {/* Submit */}
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs leading-5 text-[var(--muted)]">
                      Your message will be sent securely through
                      Formspree.
                    </p>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--foreground)] px-7 py-3.5 text-sm font-semibold text-[var(--background)] transition-all hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(139,92,246,0.18)] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isSubmitting
                        ? "Sending..."
                        : "Send Message"}

                      <Send
                        size={16}
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </button>
                  </div>
                </form>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Social links */}
        <section className="mx-auto mt-24 max-w-7xl border-t border-[var(--border)] px-5 pt-12 sm:px-6 md:mt-32 md:pt-16">
          <Reveal animation="fade">
            <p className="mb-8 text-xs font-bold uppercase tracking-[0.2em] text-[var(--muted)]">
              Find Me Elsewhere
            </p>
          </Reveal>

          <div className="flex flex-wrap gap-3">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;

              return (
                <Reveal
                  key={social.name}
                  delay={index * 70}
                  animation="fade-up"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--foreground)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent-primary)] hover:bg-[var(--surface-hover)] hover:text-[var(--accent-primary)]"
                  >
                    <Icon
                      size={14}
                      aria-hidden="true"
                    />

                    {social.name}

                    <ArrowUpRight
                      size={14}
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </Reveal>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}