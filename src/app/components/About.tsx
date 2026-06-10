"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionLabel from "./ui/SectionLabel";
import WhyMe from "./ui/WhyMe";

const differentiators = [
  "I think in systems — not just features",
  "Production-first: clean, tested, deployed code",
  "Clear communication, no jargon walls",
  "I stay for support after launch",
];

const worksBestWith = [
  "Founders shipping their first AI product",
  "Agencies needing an AI specialist",
  "Teams modernizing legacy workflows",
  "Anyone tired of demos that never ship",
];

const skillGroups = [
  {
    label: "AI / Agents",
    skills: ["OpenAI SDK", "LangChain", "LangGraph", "RAG", "Vector DBs", "Prompt Eng"],
  },
  {
    label: "Frontend",
    skills: ["Next.js 14", "React", "TypeScript", "Tailwind", "Framer Motion"],
  },
  {
    label: "Backend / Data",
    skills: ["Node.js", "Python", "PostgreSQL", "Supabase", "REST APIs"],
  },
];

export default function About() {
  return (
    <section id="about" className="bg-space py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel>// ABOUT ME</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="h-display max-w-3xl text-4xl text-text sm:text-5xl"
        >
          I Turn Complex AI Problems Into{" "}
          <span className="text-gradient">Shipped Products</span>
        </motion.h2>

        <div className="mt-14 grid gap-12 lg:grid-cols-5">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <p className="text-lg leading-relaxed text-muted">
              I&apos;m Jawaid Ali, a developer from Pakistan who blends{" "}
              <span className="text-text">AI engineering</span> with{" "}
              <span className="text-text">full-stack web development</span>. I
              build autonomous agents, RAG chatbots that answer over your own
              data, and modern Next.js apps with real databases behind them.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              My focus is simple: ship things that actually work in production —
              not impressive demos that fall apart the moment a real user shows
              up. From the first call to deployment and support, I handle the
              engineering so you can focus on your product.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="glass-card p-6">
                <h3 className="mb-4 font-medium text-text">
                  What makes me different
                </h3>
                <ul className="space-y-2.5">
                  {differentiators.map((d) => (
                    <li key={d} className="flex gap-2 text-sm text-muted">
                      <span className="text-muted">✦</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass-card p-6">
                <h3 className="mb-4 font-medium text-text">
                  I work best with
                </h3>
                <ul className="space-y-2.5">
                  {worksBestWith.map((d) => (
                    <li key={d} className="flex gap-2 text-sm text-muted">
                      <span className="text-muted">✦</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* why work with me */}
            <WhyMe />
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-indigo via-coral to-transparent opacity-25 blur-2xl" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-space-light">
                <Image
                  src="/profile.png"
                  alt="Jawaid Ali"
                  fill
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-space/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-base font-semibold tracking-tight text-text">
                  Jawaid Ali<span className="text-indigo">.</span>
                </div>
              </div>

              {/* floating chips */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="glass absolute -left-5 bottom-12 rounded-2xl px-4 py-2.5 shadow-glow"
              >
                <div className="text-lg font-bold text-gradient">3+ yrs</div>
                <div className="font-mono text-[9px] uppercase tracking-widest text-muted">
                  experience
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="glass absolute -right-4 top-10 rounded-2xl px-4 py-2.5"
              >
                <div className="text-lg font-bold text-gradient">20+</div>
                <div className="font-mono text-[9px] uppercase tracking-widest text-muted">
                  projects
                </div>
              </motion.div>
            </div>

            <div className="mt-8 space-y-5">
              {skillGroups.map((g) => (
                <div key={g.label}>
                  <div className="mb-2 label-mono">{g.label}</div>
                  <div className="flex flex-wrap gap-2">
                    {g.skills.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-line bg-card px-3 py-1 font-mono text-xs text-muted transition-colors hover:border-indigo/50 hover:text-text"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
