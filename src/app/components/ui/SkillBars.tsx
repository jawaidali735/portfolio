"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Next.js / React", pct: 92 },
  { name: "TypeScript", pct: 88 },
  { name: "AI · LangChain · RAG", pct: 85 },
  { name: "Node.js · Python", pct: 80 },
  { name: "Tailwind CSS", pct: 95 },
  { name: "Sanity · Databases", pct: 78 },
];

export default function SkillBars() {
  return (
    <div className="glass-card mt-6 p-6">
      <div className="label-mono mb-6 flex items-center gap-3">
        <span className="h-px w-8 bg-indigo/60" />
        My Toolkit
      </div>

      <div className="space-y-5">
        {skills.map((s, i) => (
          <div key={s.name}>
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="text-text">{s.name}</span>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="font-mono text-xs text-muted"
              >
                {s.pct}%
              </motion.span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-line">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.pct}%` }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 1.1, delay: i * 0.1, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-indigo to-coral"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
