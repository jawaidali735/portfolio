"use client";

import { useEffect, useRef, useState } from "react";

type Line = { type: "in" | "out" | "sys"; text: string };

const scrollToId = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const COMMANDS: Record<
  string,
  { desc: string; run: () => Line[] | void }
> = {
  help: {
    desc: "list available commands",
    run: () => [
      { type: "out", text: "Available commands:" },
      { type: "out", text: "  whoami      who is Jawaid" },
      { type: "out", text: "  skills      tech I work with" },
      { type: "out", text: "  projects    jump to my work" },
      { type: "out", text: "  experience  background" },
      { type: "out", text: "  contact     how to reach me" },
      { type: "out", text: "  social      my links" },
      { type: "out", text: "  hire        let's work together" },
      { type: "out", text: "  clear       clear the screen" },
    ],
  },
  whoami: {
    desc: "about Jawaid",
    run: () => [
      { type: "out", text: "Jawaid Ali — AI Agent & Full-Stack Developer." },
      {
        type: "out",
        text: "I build autonomous agents, RAG chatbots & web apps that ship.",
      },
    ],
  },
  skills: {
    desc: "tech stack",
    run: () => [
      { type: "out", text: "AI      : OpenAI · LangChain · LangGraph · RAG" },
      { type: "out", text: "Web     : Next.js · React · TypeScript · Tailwind" },
      { type: "out", text: "Backend : Node.js · Python · PostgreSQL · Sanity" },
    ],
  },
  projects: {
    desc: "see my work",
    run: () => {
      scrollToId("projects");
      return [{ type: "out", text: "Opening projects… ↓" }];
    },
  },
  experience: {
    desc: "background",
    run: () => [
      { type: "out", text: "3+ years building for the web · 20+ projects shipped." },
    ],
  },
  contact: {
    desc: "reach me",
    run: () => {
      scrollToId("contact");
      return [
        { type: "out", text: "jawaidali0735@gmail.com" },
        { type: "out", text: "Scrolling to the contact form… ↓" },
      ];
    },
  },
  social: {
    desc: "links",
    run: () => [
      { type: "out", text: "github.com/jawaidali735" },
      { type: "out", text: "linkedin.com/in/jawaidaliofficial" },
    ],
  },
  hire: {
    desc: "work together",
    run: () => {
      scrollToId("contact");
      return [
        { type: "out", text: "Great choice 🚀 Let's build something." },
        { type: "out", text: "Opening the contact form… ↓" },
      ];
    },
  },
};

const WELCOME: Line[] = [
  { type: "sys", text: "jawaid-os v1.0 — interactive shell" },
  { type: "sys", text: "Type 'help' and hit enter to explore." },
];

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>(WELCOME);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
  }, [lines]);

  const submit = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    const next: Line[] = [{ type: "in", text: raw }];

    if (cmd === "clear") {
      setLines([]);
      return;
    }
    const entry = COMMANDS[cmd];
    if (entry) {
      const out = entry.run();
      if (out) next.push(...out);
    } else {
      next.push({
        type: "out",
        text: `command not found: ${cmd} — try 'help'`,
      });
    }
    setLines((prev) => [...prev, ...next]);
  };

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      className="glass-card mt-6 cursor-text overflow-hidden font-mono text-[13px]"
    >
      {/* header */}
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-coral" />
        <span className="h-2.5 w-2.5 rounded-full bg-indigo" />
        <span className="h-2.5 w-2.5 rounded-full bg-violet" />
        <span className="ml-2 text-xs text-muted">visitor@jawaid: ~</span>
      </div>

      {/* body */}
      <div
        ref={bodyRef}
        className="h-44 space-y-1 overflow-y-auto px-4 py-3 leading-relaxed"
      >
        {lines.map((l, i) => (
          <div
            key={i}
            className={
              l.type === "in"
                ? "text-text"
                : l.type === "sys"
                ? "text-muted/80"
                : "text-muted"
            }
          >
            {l.type === "in" && <span className="text-indigo">$ </span>}
            <span className="whitespace-pre-wrap break-words">{l.text}</span>
          </div>
        ))}

        {/* input line */}
        <div className="flex items-center text-text">
          <span className="text-indigo">$&nbsp;</span>
          <input
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                submit(value);
                setValue("");
              }
            }}
            spellCheck={false}
            autoComplete="off"
            aria-label="terminal input"
            className="flex-1 bg-transparent text-text caret-indigo outline-none"
            placeholder="type 'help'"
          />
        </div>
      </div>
    </div>
  );
}
