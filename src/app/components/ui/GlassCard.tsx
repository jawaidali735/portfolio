"use client";

import { ReactNode } from "react";

export default function GlassCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-line bg-card backdrop-blur-md transition-all duration-300 hover:border-indigo/40 hover:shadow-lg hover:shadow-indigo/10 ${className}`}
    >
      {children}
    </div>
  );
}
