"use client";

import { motion } from "framer-motion";

export default function SectionLabel({ children }: { children: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-5 flex items-center gap-3 label-mono"
    >
      <span className="h-px w-8 bg-card" />
      {children}
    </motion.div>
  );
}
