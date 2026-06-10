"use client";

/**
 * Animated aurora / mesh-gradient background.
 * Soft floating color blobs (violet, cyan, pink) that drift slowly.
 * Place inside a `relative overflow-hidden` parent.
 */
export default function Aurora({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      <div className="aurora-blob animate-aurora-1 left-[-10%] top-[-15%] h-[55vh] w-[55vh] bg-indigo" />
      <div className="aurora-blob animate-aurora-2 right-[-12%] top-[5%] h-[50vh] w-[50vh] bg-cyan opacity-40" />
      <div className="aurora-blob animate-aurora-3 bottom-[-20%] left-[25%] h-[45vh] w-[45vh] bg-pink opacity-35" />
    </div>
  );
}
