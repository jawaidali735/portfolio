"use client";

/**
 * Pure-CSS 3D gradient orb — the hero focal point (Stability-AI style).
 * Slowly floats; an inner conic sheen swirls inside it.
 */
export default function Orb({ className = "" }: { className?: string }) {
  return (
    <div
      className={`animate-orb-float ${className}`}
      aria-hidden
    >
      <div className="relative aspect-square w-full">
        <div className="orb-glow" />
        <div className="orb h-full w-full" />
      </div>
    </div>
  );
}
