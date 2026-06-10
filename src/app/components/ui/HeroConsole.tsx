"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check, Loader2, Search, Database, FileText, Send } from "lucide-react";

const steps = [
  { icon: Search, label: "Searching the web", tool: "search()" },
  { icon: Database, label: "Querying vector DB", tool: "retrieve()" },
  { icon: FileText, label: "Drafting the report", tool: "generate()" },
  { icon: Send, label: "Sending to client", tool: "deliver()" },
];

export default function HeroConsole() {
  const [active, setActive] = useState(0);
  const [bars, setBars] = useState<number[]>(
    Array.from({ length: 16 }, () => 20 + Math.random() * 60)
  );

  // cycle through agent steps
  useEffect(() => {
    const id = setInterval(() => {
      setActive((a) => (a + 1) % (steps.length + 1));
    }, 1300);
    return () => clearInterval(id);
  }, []);

  // animate the throughput chart
  useEffect(() => {
    const id = setInterval(() => {
      setBars((prev) => [...prev.slice(1), 20 + Math.random() * 70]);
    }, 700);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative">
      {/* glow */}
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-indigo via-coral to-transparent opacity-25 blur-2xl" />

      <motion.div
        whileHover={{ rotateX: 3, rotateY: -4 }}
        style={{ transformStyle: "preserve-3d", perspective: 1000 }}
        className="glass-card relative overflow-hidden p-5 shadow-glow"
      >
        {/* header */}
        <div className="flex items-center justify-between border-b border-line pb-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-coral" />
            <span className="h-3 w-3 rounded-full bg-indigo" />
            <span className="h-3 w-3 rounded-full bg-violet" />
            <span className="ml-2 font-mono text-xs text-muted">agent.ts</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-indigo/30 bg-indigo/10 px-2.5 py-1">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo" />
            <span className="font-mono text-[10px] uppercase tracking-wider text-indigo">
              running
            </span>
          </div>
        </div>

        {/* code line */}
        <div className="mt-4 font-mono text-[13px] leading-relaxed">
          <div>
            <span className="text-coral">const</span>{" "}
            <span className="text-violet">agent</span>{" "}
            <span className="text-muted">=</span> createAgent({"{"}
          </div>
          <div className="pl-4 text-muted">
            model: <span className="text-cyan">&quot;gpt-4o&quot;</span>,
          </div>
          <div className="pl-4 text-muted">
            tools: [<span className="text-cyan">web, db, email</span>],
          </div>
          <div>{"}"});</div>
        </div>

        {/* agent steps */}
        <div className="mt-4 space-y-2 rounded-xl border border-line bg-space/40 p-3">
          {steps.map((s, i) => {
            const done = i < active;
            const running = i === active;
            return (
              <div
                key={s.label}
                className={`flex items-center gap-2.5 text-sm transition-opacity ${
                  done || running ? "opacity-100" : "opacity-35"
                }`}
              >
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-md border ${
                    done
                      ? "border-indigo/40 bg-indigo/15 text-indigo"
                      : running
                      ? "border-coral/40 bg-coral/15 text-coral"
                      : "border-line text-muted"
                  }`}
                >
                  {done ? (
                    <Check size={13} />
                  ) : running ? (
                    <Loader2 size={13} className="animate-spin" />
                  ) : (
                    <s.icon size={13} />
                  )}
                </span>
                <span className="flex-1 text-text/90">{s.label}</span>
                <span className="font-mono text-[11px] text-muted">
                  {s.tool}
                </span>
              </div>
            );
          })}
        </div>

        {/* throughput chart */}
        <div className="mt-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
              tokens / sec
            </span>
            <span className="font-mono text-xs text-gradient">live</span>
          </div>
          <div className="flex h-14 items-end gap-1">
            {bars.map((h, i) => (
              <motion.div
                key={i}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex-1 rounded-sm bg-gradient-to-t from-indigo/40 to-coral"
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
