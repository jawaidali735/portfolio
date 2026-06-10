"use client";

import { motion } from "framer-motion";
import SectionLabel from "./ui/SectionLabel";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    duration: "Day 1",
    desc: "We talk about your problem, goals, timeline, and budget. I ask the hard questions others skip — before any code.",
    icon: "🎯",
  },
  {
    number: "02",
    title: "Architecture Design",
    duration: "Days 2–3",
    desc: "I design the full system: agent flow, data pipeline, tech stack, and a clear cost estimate. No surprises later.",
    icon: "🏗️",
  },
  {
    number: "03",
    title: "Build & Iterate",
    duration: "Weeks 1–3",
    desc: "Regular demos and frequent updates. You see progress constantly, with feedback loops built into the process.",
    icon: "⚡",
  },
  {
    number: "04",
    title: "Deploy & Support",
    duration: "Week 4+",
    desc: "Production deployment, monitoring, docs, and 30-day support. I don't disappear the moment it goes live.",
    icon: "🚀",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-space py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel>// HOW I WORK</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="h-display max-w-3xl text-4xl leading-tight text-text sm:text-5xl"
        >
          From Idea to Production in{" "}
          <span className="text-gradient">4 Steps</span>
        </motion.h2>

        <div className="relative mt-16">
          {/* connecting line (desktop) */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-white/20 to-transparent lg:block" />

          <div className="grid gap-10 lg:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative"
              >
                <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-line bg-space-light font-mono text-lg font-medium text-text">
                  {s.number}
                </div>
                <div className="glass-card p-6">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-2xl">{s.icon}</span>
                    <span className="rounded-full border border-line px-2.5 py-1 font-mono text-xs text-muted">
                      {s.duration}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-text">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
