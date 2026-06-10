"use client";

import { Github, Linkedin, Instagram, Facebook, ArrowUp, Mail } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/jawaidali735", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/jawaidaliofficial/",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/nawab_javedali/",
    label: "Instagram",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=100083658815943",
    label: "Facebook",
  },
];

const quickLinks = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "process", label: "Process" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden border-t border-line bg-space-light">
      {/* top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo to-transparent opacity-70" />
      {/* ambient glow */}
      <div className="pointer-events-none absolute -bottom-24 left-1/2 h-64 w-[80%] -translate-x-1/2 rounded-full bg-indigo opacity-[0.07] blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* ---- CTA band ---- */}
        <div className="flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-center">
          <div>
            <div className="label-mono mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-indigo/60" />
              Have a project in mind?
            </div>
            <h2 className="h-display max-w-xl text-3xl text-text sm:text-4xl">
              Let&apos;s build something{" "}
              <span className="text-gradient">great together</span>.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => scrollTo("contact")}
              className="rounded-full bg-gradient-to-r from-indigo to-coral px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105"
            >
              Start a project →
            </button>
            <a
              href="mailto:jawaidali0735@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-text transition-colors hover:border-indigo/60"
            >
              <Mail size={16} /> Email me
            </a>
          </div>
        </div>

        <div className="h-px w-full bg-line" />

        {/* ---- Columns ---- */}
        <div className="grid gap-10 py-14 sm:grid-cols-2 md:grid-cols-4">
          <div className="sm:col-span-2 md:col-span-2 max-w-sm">
            <div className="text-xl font-semibold tracking-tight text-text">
              Jawaid Ali<span className="text-indigo">.</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              AI Agent &amp; Full-Stack Developer building autonomous agents, RAG
              chatbots, and production-grade web apps that ship and scale.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-xs text-text">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo" />
              </span>
              Available for work worldwide
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-medium text-text">Navigate</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => scrollTo(l.id)}
                    className="text-sm text-muted transition-colors hover:text-indigo"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-medium text-text">Connect</h4>
            <ul className="space-y-2.5">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted transition-colors hover:text-indigo"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="h-px w-full bg-line" />

        {/* ---- Bottom bar ---- */}
        <div className="flex flex-col items-center justify-between gap-6 py-8 text-sm text-muted md:flex-row">
          <p>
            © 2026 Jawaid Ali. All rights reserved.{" "}
            <span className="text-muted/70">· Built with Next.js &amp; ☕</span>
          </p>
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-indigo/60 hover:text-indigo"
              >
                <s.icon size={16} />
              </a>
            ))}
            <button
              onClick={() => scrollTo("hero")}
              aria-label="Back to top"
              className="ml-1 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-indigo to-coral text-white transition-transform hover:scale-110"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
