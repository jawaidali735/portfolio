"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import SectionLabel from "./ui/SectionLabel";

const filters = ["All", "AI Agents", "RAG", "Full-Stack"] as const;
type Filter = (typeof filters)[number];

const projects = [
  // ---- AI projects first ----
  {
    title: "Physical AI & Humanoid Robotics",
    category: "RAG",
    description:
      "An interactive learning platform on humanoid robotics (ROS 2, simulation, AI) with a built-in RAG chatbot that answers questions over the entire book's content.",
    tech: ["Next.js", "RAG", "OpenAI", "Vector DB"],
    metrics: "Live · RAG chatbot over the book",
    gradient: "from-indigo to-coral",
    image: "/robotics_full.png",
    imgPos: "object-top",
    demo: "https://jawaidali735.github.io/humanoid-robotics-book/",
    github: "https://github.com/jawaidali735/humanoid-robotics-book",
  },
  {
    title: "AutoFlow Content Agent",
    category: "AI Agents",
    description:
      "A multi-step autonomous agent that researches topics, drafts content, and schedules posts — turning a full content workflow into one prompt.",
    tech: ["OpenAI SDK", "LangGraph", "Next.js", "Supabase"],
    metrics: "Automates a full content pipeline",
    gradient: "from-indigo to-coral",
    image: null,
    imgPos: "object-center",
    demo: "#",
    github: "https://github.com/jawaidali735",
  },
  {
    title: "Multi-Agent Research Bot",
    category: "AI Agents",
    description:
      "A LangGraph system where Researcher, Writer, and Editor agents collaborate to produce structured, well-sourced reports automatically.",
    tech: ["LangGraph", "Python", "FastAPI"],
    metrics: "Researcher + Writer + Editor agents",
    gradient: "from-violet to-coral",
    image: null,
    imgPos: "object-center",
    demo: "#",
    github: "https://github.com/jawaidali735",
  },
  {
    title: "DocuMind RAG Chatbot",
    category: "RAG",
    description:
      "Chat with any PDF or document set. Semantic search with citation tracking and accurate multi-document Q&A over private data.",
    tech: ["LangChain", "Pinecone", "FastAPI", "Next.js"],
    metrics: "Answers with source citations",
    gradient: "from-coral to-indigo",
    image: null,
    imgPos: "object-center",
    demo: "#",
    github: "https://github.com/jawaidali735",
  },
  // ---- Full-stack & web projects ----
  {
    title: "Hekto — Full-Stack E-Commerce",
    category: "Full-Stack",
    description:
      "A complete e-commerce store with Sanity CMS, Stripe checkout, Clerk authentication, and ShipEngine shipping. Product catalog, cart, wishlist, and orders — end to end.",
    tech: ["Next.js", "Sanity", "Stripe", "Clerk", "TypeScript"],
    metrics: "Live · CMS · Payments · Auth · Shipping",
    gradient: "from-indigo to-coral",
    image: "/ecommerce_full.png",
    imgPos: "object-top",
    demo: "https://full-stack-e-commerce-site-omega.vercel.app/",
    github: "https://github.com/jawaidali735/Full-Stack-E-commerce-Site",
  },
  {
    title: "ShopEase — E-Commerce Store",
    category: "Full-Stack",
    description:
      "A modern online store for phones, cases & accessories — product catalog, cart, wishlist, and a clean responsive shopping experience.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    metrics: "Live · cart · wishlist",
    gradient: "from-violet to-indigo",
    image: "/ecom2.png",
    imgPos: "object-bottom",
    demo: "https://e-commerce-site-3dym.vercel.app/",
    github: "https://github.com/jawaidali735/E-Commerce-site",
  },
  {
    title: "Vibe With Jawaid — Blog",
    category: "Full-Stack",
    description:
      "A dynamic blog platform with category filtering and article pages — covering technology, startups, and lifestyle, built with a modern Next.js stack.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    metrics: "Live · dynamic blog",
    gradient: "from-indigo to-violet",
    image: "/blog.png",
    imgPos: "object-top",
    demo: "https://dynamic-blog-site-ecji.vercel.app/",
    github: "https://github.com/jawaidali735/Dynamic-Blog-Site",
  },
  {
    title: "TravelSpot — Multi-Page Site",
    category: "Full-Stack",
    description:
      "A responsive multi-page travel website with Home, About, Destinations & Contact pages — clean layouts and pixel-perfect Tailwind styling.",
    tech: ["HTML", "Tailwind CSS", "JavaScript"],
    metrics: "Live · fully responsive",
    gradient: "from-coral to-indigo",
    image: "/multipage.png",
    imgPos: "object-top",
    demo: "https://assign01-mlti-page-tailwindcss.vercel.app/",
    github: "https://github.com/jawaidali735/assign01-multipage-site-with-tailwind-css",
  },
  {
    title: "Portfolio Website",
    category: "Full-Stack",
    description:
      "A personal portfolio that showcases my skills, projects, and journey — built with a modern Next.js + TypeScript stack and smooth animations.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    metrics: "This very site — live & responsive",
    gradient: "from-indigo to-violet",
    image: "/portfolio.jpeg",
    imgPos: "object-center",
    demo: "#",
    github: "https://github.com/jawaidali735",
  },
  {
    title: "Landing Page (Codsoft)",
    category: "Full-Stack",
    description:
      "A clean, conversion-focused landing page built during my internship at Codsoft, with a focus on design and user engagement.",
    tech: ["HTML", "CSS", "JavaScript"],
    metrics: "Internship project · live",
    gradient: "from-indigo to-coral",
    image: "/landing.png",
    imgPos: "object-top",
    demo: "https://landing-page-website-iota.vercel.app/",
    github: "https://github.com/jawaidali735",
  },
];

export default function Project() {
  const [active, setActive] = useState<Filter>("All");
  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-space-light py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute right-[-10%] top-1/4 h-[40vh] w-[40vh] rounded-full bg-indigo opacity-[0.06] blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel>// FEATURED WORK</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="h-display max-w-3xl text-4xl leading-tight text-text sm:text-5xl"
        >
          Projects That <span className="text-gradient">Ship and Scale</span>
        </motion.h2>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                active === f
                  ? "bg-text text-space"
                  : "border border-line text-muted hover:border-line hover:text-text"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="glass-card group flex flex-col overflow-hidden"
              >
                {/* thumbnail */}
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className={`object-cover transition-transform duration-500 group-hover:scale-105 ${p.imgPos}`}
                    />
                  ) : (
                    <div
                      className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${p.gradient} opacity-90`}
                    >
                      <span className="font-mono text-sm font-medium text-muted">
                        {p.category}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-space-light via-transparent to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="w-fit rounded-full border border-line px-2.5 py-1 font-mono text-xs text-muted">
                    {p.category}
                  </span>
                  <h3 className="mt-4 text-xl font-medium text-text">
                    {p.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {p.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-line bg-card px-2 py-0.5 font-mono text-[11px] text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 font-mono text-xs text-muted">
                    {p.metrics}
                  </div>
                  <div className="mt-5 flex gap-4 border-t border-line pt-4">
                    {p.demo !== "#" && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-text"
                      >
                        <ExternalLink size={14} /> Live Demo
                      </a>
                    )}
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-indigo"
                    >
                      <Github size={14} /> Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/jawaidali735"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3 font-medium text-text transition-colors hover:border-line"
          >
            <Github size={18} /> View All Projects on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
