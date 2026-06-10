"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Calendar,
  Github,
  Linkedin,
  Instagram,
  CheckCircle2,
  Loader2,
  Clock,
} from "lucide-react";
import SectionLabel from "./ui/SectionLabel";

type State = "idle" | "sending" | "sent" | "error";

// Submissions are emailed here via FormSubmit (no backend needed).
const FORM_ENDPOINT = "https://formsubmit.co/ajax/jawaidali0735@gmail.com";

const socials = [
  {
    icon: Github,
    label: "GitHub",
    handle: "@jawaidali735",
    href: "https://github.com/jawaidali735",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "in/jawaidaliofficial",
    href: "https://www.linkedin.com/in/jawaidaliofficial/",
  },
  {
    icon: Instagram,
    label: "Instagram",
    handle: "@nawab_javedali",
    href: "https://www.instagram.com/nawab_javedali/",
  },
];

export default function Contact() {
  const [state, setState] = useState<State>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setState("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setState("sent");
        form.reset();
        setTimeout(() => setState("idle"), 5000);
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  };

  const inputClass =
    "w-full rounded-xl border border-line bg-card px-4 py-3 text-text placeholder:text-muted outline-none transition-colors focus:border-indigo/60";
  const selectClass =
    "w-full rounded-xl border border-line bg-space-light px-4 py-3 text-text outline-none transition-colors focus:border-indigo/60";
  const optClass = "bg-space-light text-text";

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-space-light to-space py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel>// LET&apos;S BUILD</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="h-display text-4xl leading-tight text-text sm:text-5xl"
        >
          Start a <span className="text-gradient">Project</span>
        </motion.h2>
        <p className="mt-3 text-muted">
          Available for freelance · Full-time · Consulting
        </p>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-line px-4 py-1.5 text-sm text-text">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo" />
          </span>
          Currently accepting new projects
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="space-y-4 lg:col-span-3"
          >
            {/* FormSubmit config */}
            <input
              type="hidden"
              name="_subject"
              value="New project inquiry — Portfolio"
            />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="Name"
                placeholder="Your name"
                required
                className={inputClass}
              />
              <input
                type="email"
                name="Email"
                placeholder="Your email"
                required
                className={inputClass}
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <select
                name="Project Type"
                required
                defaultValue=""
                className={selectClass}
              >
                <option value="" disabled className={optClass}>
                  Project type
                </option>
                <option className={optClass}>AI Agent Development</option>
                <option className={optClass}>RAG / Chatbot</option>
                <option className={optClass}>Full-Stack AI Product</option>
                <option className={optClass}>Web App / Website</option>
                <option className={optClass}>Consulting</option>
                <option className={optClass}>Other</option>
              </select>
              <select
                name="Budget"
                required
                defaultValue=""
                className={selectClass}
              >
                <option value="" disabled className={optClass}>
                  Budget range
                </option>
                <option className={optClass}>$300 – $1k</option>
                <option className={optClass}>$1k – $3k</option>
                <option className={optClass}>$3k – $8k</option>
                <option className={optClass}>$8k+</option>
                <option className={optClass}>Let&apos;s discuss</option>
              </select>
            </div>
            <textarea
              rows={5}
              name="Message"
              placeholder="Tell me about your project..."
              required
              className={inputClass}
            />
            <button
              type="submit"
              disabled={state === "sending" || state === "sent"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo to-coral px-6 py-3.5 font-semibold text-white shadow-glow transition-transform hover:scale-[1.01] disabled:opacity-70"
            >
              {state === "idle" && <>Send Message →</>}
              {state === "error" && <>Try again →</>}
              {state === "sending" && (
                <>
                  <Loader2 size={18} className="animate-spin" /> Sending...
                </>
              )}
              {state === "sent" && (
                <>
                  <CheckCircle2 size={18} /> Message Sent!
                </>
              )}
            </button>
            {state === "error" && (
              <p className="text-center text-xs text-coral">
                Something went wrong. Please email me directly at
                jawaidali0735@gmail.com
              </p>
            )}
            {state !== "error" && (
              <p className="text-center text-xs text-muted">
                Prefer email? Reach me directly below — I usually reply within a
                day.
              </p>
            )}
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-5 lg:col-span-2"
          >
            <div className="glass-card p-6">
              <a
                href="mailto:jawaidali0735@gmail.com"
                className="flex items-center gap-3 text-text transition-colors hover:text-muted"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-card text-text">
                  <Mail size={18} />
                </span>
                <span className="text-sm">jawaidali0735@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/jawaidaliofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center gap-3 text-text transition-colors hover:text-muted"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-card text-text">
                  <Calendar size={18} />
                </span>
                <span className="text-sm">Book a free intro call →</span>
              </a>
            </div>

            <div className="glass-card p-6">
              <h4 className="mb-4 text-sm font-medium text-text">
                Find me on
              </h4>
              <div className="space-y-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted transition-colors hover:text-text"
                  >
                    <s.icon size={18} />
                    <span className="text-sm">{s.handle}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center gap-2 text-text">
                <Clock size={18} />
                <span className="font-medium">Usually replies within a day</span>
              </div>
              <p className="mt-2 text-sm text-muted">
                Working hours: Mon–Sat, 10am–8pm PKT
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
