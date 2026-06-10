"use client";

import { motion } from "framer-motion";
import SectionLabel from "./ui/SectionLabel";
import SpotlightCard from "./ui/SpotlightCard";

const services = [
  {
    icon: "🤖",
    title: "AI Agent Development",
    desc: "Autonomous agents using OpenAI SDK, LangChain & LangGraph. Tool-calling, memory, and multi-step reasoning that gets real work done.",
    tags: ["OpenAI", "LangChain", "Python"],
    highlight: true,
  },
  {
    icon: "📚",
    title: "RAG & Knowledge Chatbots",
    desc: "Chatbots that answer over your PDFs, docs & databases. Semantic search, citations, and accurate Q&A on your own data.",
    tags: ["Pinecone", "LangChain", "PostgreSQL"],
  },
  {
    icon: "🏗️",
    title: "Full-Stack AI Products",
    desc: "End-to-end Next.js apps with AI built in. Auth, database, APIs, and deployment — from zero to production.",
    tags: ["Next.js", "TypeScript", "Supabase"],
  },
  {
    icon: "⚡",
    title: "Workflow Automation",
    desc: "Replace manual processes with AI pipelines. Email agents, data processors, and report generators that run themselves.",
    tags: ["n8n", "APIs", "Node.js"],
  },
  {
    icon: "💬",
    title: "Custom Web Apps",
    desc: "Responsive, fast, modern websites & dashboards. Landing pages to full SaaS — clean code and pixel-perfect UI.",
    tags: ["React", "Tailwind", "Next.js"],
  },
  {
    icon: "🔍",
    title: "AI Consulting & Audit",
    desc: "Not sure where to start? I review your idea or stack, find the right architecture, and map a realistic plan.",
    tags: ["Strategy", "Architecture", "Audit"],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-space py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel>// WHAT I BUILD</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="h-display max-w-3xl text-4xl leading-tight text-text sm:text-5xl"
        >
          Services That Drive{" "}
          <span className="text-gradient">Real Business Value</span>
        </motion.h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            >
              <SpotlightCard
                className={`h-full p-8 ${
                  s.highlight ? "border-line" : ""
                }`}
              >
                {s.highlight && (
                  <span className="absolute right-5 top-5 rounded-full border border-line px-3 py-1 text-xs font-medium text-muted">
                    Most Popular
                  </span>
                )}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-card text-2xl">
                  {s.icon}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-text">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {s.desc}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-line bg-card px-2.5 py-1 font-mono text-xs text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
