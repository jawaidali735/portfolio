"use client";

import SectionLabel from "./ui/SectionLabel";

const row1 = [
  "OpenAI",
  "GPT-4o",
  "LangChain",
  "LangGraph",
  "CrewAI",
  "Vercel AI SDK",
  "Pinecone",
  "ChromaDB",
  "Hugging Face",
  "RAG",
];

const row2 = [
  "Next.js 14",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Supabase",
  "PostgreSQL",
  "Prisma",
  "Node.js",
  "FastAPI",
  "Python",
  "Vercel",
  "Git",
];

function Marquee({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-mask flex overflow-hidden">
      <div
        className={`flex shrink-0 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="mx-3 flex items-center gap-3 whitespace-nowrap rounded-full border border-line bg-card px-5 py-2 font-mono text-sm text-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-card" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section className="overflow-hidden bg-space py-24">
      <div className="mx-auto mb-12 max-w-7xl px-6 lg:px-10">
        <SectionLabel>// MY ARSENAL</SectionLabel>
        <h2 className="h-display text-4xl text-text sm:text-5xl">
          Tools I <span className="text-gradient">Ship With</span>
        </h2>
      </div>
      <div className="space-y-5">
        <Marquee items={row1} />
        <Marquee items={row2} reverse />
      </div>
    </section>
  );
}
