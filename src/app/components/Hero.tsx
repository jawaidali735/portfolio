"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowUpRight, Sparkles } from "lucide-react";
import HeroConsole from "./ui/HeroConsole";

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-space"
    >
      {/* warm ambient glows */}
      <div className="pointer-events-none absolute -right-32 top-10 h-[60vh] w-[60vh] rounded-full bg-indigo opacity-20 blur-[120px]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[45vh] w-[45vh] rounded-full bg-coral opacity-10 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,var(--bg)_100%)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-6 pt-32 pb-20 lg:grid-cols-12 lg:px-10">
        {/* Left */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-indigo/30 bg-indigo/10 px-4 py-1.5 text-sm text-text"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo" />
            </span>
            Available for freelance &amp; full-time
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="h-display mt-7 text-[3.25rem] text-text sm:text-7xl lg:text-[5.4rem]"
          >
            I build <span className="text-gradient">AI agents</span>
            <br />
            that ship to
            <br />
            production.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-7 flex items-center gap-3 font-mono text-sm text-muted sm:text-base"
          >
            <Sparkles size={18} className="shrink-0 text-indigo" />
            <TypeAnimation
              sequence={[
                "autonomous agent systems",
                2000,
                "RAG chatbots over your data",
                2000,
                "multi-agent orchestration",
                2000,
                "full-stack Next.js & TypeScript",
                2000,
                "OpenAI & LangChain pipelines",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-text"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-7 max-w-lg text-base leading-relaxed text-muted"
          >
            I&apos;m Jawaid Ali — an AI Agent &amp; Full-Stack Developer. I design and
            ship intelligent agents, RAG-powered chatbots, and modern web apps
            with Next.js &amp; databases. From idea to launch.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => scrollTo("projects")}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo to-coral px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.03]"
            >
              View my work
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 text-sm font-medium text-text transition-colors hover:border-indigo/60"
            >
              Start a project
            </button>
          </motion.div>
        </div>

        {/* Right — live AI agent console */}
        <div className="relative flex justify-center lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="w-full max-w-md"
          >
            <HeroConsole />
          </motion.div>
        </div>
      </div>

      {/* bottom scroll hint */}
      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-3 label-mono lg:flex">
        <span className="h-8 w-px bg-card" />
        Scroll
      </div>
    </section>
  );
}
