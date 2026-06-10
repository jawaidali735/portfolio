"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Sparkles,
  Wrench,
  Database,
  Check,
} from "lucide-react";

const nodes = [
  { icon: MessageSquare, label: "User request", sub: "“Research & draft a report”" },
  { icon: Sparkles, label: "Plan & reason", sub: "break the goal into steps" },
  { icon: Wrench, label: "Call tools", sub: "search · db · email" },
  { icon: Database, label: "Retrieve memory", sub: "vector store lookup" },
  { icon: Check, label: "Deliver answer", sub: "structured & verified" },
];

export default function AgentFlow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((a) => (a + 1) % nodes.length),
      1300
    );
    return () => clearInterval(id);
  }, []);

  const progress = (active / (nodes.length - 1)) * 100;

  return (
    <div className="glass-card mt-6 overflow-hidden p-6">
      {/* header */}
      <div className="mb-6 flex items-center justify-between">
        <div className="label-mono flex items-center gap-3">
          <span className="h-px w-8 bg-indigo/60" />
          Agent Pipeline
        </div>
        <div className="flex items-center gap-1.5 rounded-full border border-indigo/30 bg-indigo/10 px-2.5 py-1">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo" />
          <span className="font-mono text-[10px] uppercase tracking-wider text-indigo">
            running
          </span>
        </div>
      </div>

      {/* flow */}
      <div className="relative pl-2">
        {/* base vertical line */}
        <div className="absolute left-[18px] top-3 bottom-3 w-px bg-line" />
        {/* progress line */}
        <motion.div
          className="absolute left-[18px] top-3 w-px bg-gradient-to-b from-indigo to-coral"
          animate={{ height: `calc(${progress}% - 0px)` }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ maxHeight: "calc(100% - 24px)" }}
        />

        <div className="space-y-4">
          {nodes.map((n, i) => {
            const done = i < active;
            const isActive = i === active;
            const Icon = done ? Check : n.icon;
            return (
              <div key={n.label} className="relative flex items-center gap-4">
                {/* node dot */}
                <div
                  className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                    isActive
                      ? "border-transparent bg-gradient-to-br from-indigo to-coral text-white shadow-glow"
                      : done
                      ? "border-indigo/40 bg-indigo/15 text-indigo"
                      : "border-line bg-space-light text-muted"
                  }`}
                >
                  <Icon size={15} />
                </div>

                {/* label */}
                <div
                  className={`flex-1 rounded-xl border px-3 py-2 transition-all duration-300 ${
                    isActive
                      ? "border-indigo/40 bg-indigo/[0.06]"
                      : "border-transparent"
                  }`}
                >
                  <div
                    className={`text-sm font-medium transition-colors ${
                      isActive || done ? "text-text" : "text-muted"
                    }`}
                  >
                    {n.label}
                  </div>
                  <div className="font-mono text-[11px] text-muted">
                    {n.sub}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
