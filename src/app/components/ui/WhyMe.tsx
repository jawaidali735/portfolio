"use client";

import { motion } from "framer-motion";
import { Code2, MessagesSquare, Clock, LifeBuoy } from "lucide-react";

const points = [
  {
    icon: Code2,
    title: "Production-ready code",
    sub: "Clean, tested & maintainable — not just a demo.",
  },
  {
    icon: MessagesSquare,
    title: "Clear communication",
    sub: "Plain-English updates, no jargon, no ghosting.",
  },
  {
    icon: Clock,
    title: "Delivered on time",
    sub: "Realistic timelines, and I stick to them.",
  },
  {
    icon: LifeBuoy,
    title: "30 days free support",
    sub: "I stay after launch to make sure it works.",
  },
];

export default function WhyMe() {
  return (
    <div className="glass-card mt-6 p-6">
      <div className="label-mono mb-6 flex items-center gap-3">
        <span className="h-px w-8 bg-indigo/60" />
        Why work with me
      </div>

      <div className="flex flex-col">
        {points.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            className={`flex items-start gap-4 py-4 ${
              i !== points.length - 1 ? "border-b border-line" : ""
            }`}
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo to-coral text-white">
              <p.icon size={19} />
            </div>
            <div>
              <div className="text-[15px] font-medium text-text">
                {p.title}
              </div>
              <div className="mt-1 text-sm leading-relaxed text-muted">
                {p.sub}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
