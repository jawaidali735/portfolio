"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionLabel from "./ui/SectionLabel";

const faqs = [
  {
    q: "What's your typical project timeline?",
    a: "Simple agents or chatbots: 1–2 weeks. Full-stack AI products: 3–6 weeks. Complex multi-agent systems: 6–12 weeks. I give an exact estimate after the discovery call.",
  },
  {
    q: "Do you work with non-technical founders?",
    a: "Yes — many of my clients are. I translate technical decisions into business impact. You focus on the product; I handle the engineering.",
  },
  {
    q: "What's included after the project ships?",
    a: "30 days of free support: bug fixes, small tweaks, and deployment issues. After that, affordable monthly retainers are available.",
  },
  {
    q: "Can you join our existing team?",
    a: "Absolutely. I adapt to your workflow — GitHub, Jira, Notion, Slack, whatever you use — and work as an embedded AI/full-stack specialist.",
  },
  {
    q: "What if I don't know exactly what I need?",
    a: "That's completely normal. Book a free intro call and I'll help you define the right solution for your budget, goals, and timeline.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes, always. Your idea and code are yours. I never share client work without explicit permission.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-space py-28 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <SectionLabel>// COMMON QUESTIONS</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="h-display text-4xl leading-tight text-text sm:text-5xl"
        >
          Before You <span className="text-gradient">Reach Out</span>
        </motion.h2>

        <div className="mt-12">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-line">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span
                    className={`text-lg transition-colors ${
                      isOpen ? "text-text" : "text-text hover:text-muted"
                    }`}
                  >
                    {f.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 text-muted"
                  >
                    <ChevronDown size={20} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-muted">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
