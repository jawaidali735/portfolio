"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "./ui/AnimatedCounter";

const stats = [
  { value: 20, suffix: "+", label: "Projects Built" },
  { value: 10, suffix: "+", label: "Happy Clients" },
  { value: 3, suffix: "+", label: "Years Coding" },
  { value: 100, suffix: "%", label: "Commitment" },
  { value: 24, suffix: "h", label: "Avg Response" },
];

export default function Stats() {
  return (
    <section className="border-y border-line bg-space-light py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-6 sm:grid-cols-3 lg:grid-cols-5 lg:px-10">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col items-center text-center lg:border-r lg:border-line lg:last:border-r-0"
          >
            <div className="font-mono text-4xl font-bold text-gradient sm:text-5xl">
              <AnimatedCounter value={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-2 text-xs uppercase tracking-widest text-muted">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
