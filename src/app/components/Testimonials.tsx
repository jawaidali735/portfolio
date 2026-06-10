"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, MessageSquare } from "lucide-react";
import SectionLabel from "./ui/SectionLabel";

// Honest "principles" cards — swap these for real client quotes
// (name, role, platform, text) the moment you collect them.
const principles = [
  {
    icon: ShieldCheck,
    title: "Production over demos",
    text: "Anyone can wire up a flashy demo. I build systems that survive real users, real data, and real edge cases — because shipped beats impressive.",
  },
  {
    icon: MessageSquare,
    title: "Clear, honest communication",
    text: "You get plain-English updates, realistic timelines, and the trade-offs explained. No jargon walls, no ghosting, no overpromising.",
    featured: true,
  },
  {
    icon: Zap,
    title: "Speed without the mess",
    text: "Fast delivery with clean, documented code you (or your next dev) can actually maintain. Quick now shouldn't mean painful later.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-space-light py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel>// HOW I WORK WITH CLIENTS</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="h-display max-w-3xl text-4xl leading-tight text-text sm:text-5xl"
        >
          The Standards I <span className="text-gradient">Hold Myself To</span>
        </motion.h2>
        <p className="mt-4 max-w-2xl text-muted">
          I&apos;m early in building my public review wall — so instead of
          borrowed quotes, here&apos;s exactly what you can expect when we work
          together.
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`glass-card p-8 ${
                p.featured ? "border-line lg:-translate-y-3" : ""
              }`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-card text-text">
                <p.icon size={22} />
              </div>
              <h3 className="mt-5 text-lg font-medium text-text">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {p.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
