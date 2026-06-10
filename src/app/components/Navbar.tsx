"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ui/ThemeToggle";

const links = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "process", label: "Process" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
    >
      <div
        className={`flex w-full max-w-5xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 ${
          scrolled
            ? "glass"
            : "border border-transparent bg-transparent"
        }`}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="text-lg font-semibold tracking-tight text-text"
        >
          Jawaid Ali<span className="text-indigo">.</span>
        </button>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="relative text-sm text-muted transition-colors hover:text-text"
            >
              {l.label}
              {active === l.id && (
                <motion.span
                  layoutId="nav-dot"
                  className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-indigo"
                />
              )}
            </button>
          ))}
        </div>

        {/* Right cluster */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          {/* CTA */}
          <button
            onClick={() => scrollTo("contact")}
            className="hidden rounded-full bg-text px-5 py-2 text-sm font-medium text-space transition-transform hover:scale-105 md:block"
          >
            Hire Me →
          </button>

          {/* Mobile toggle */}
          <button
            className="text-text md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass absolute left-4 right-4 top-20 rounded-2xl p-2 md:hidden"
        >
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="rounded-xl px-4 py-3 text-left text-muted transition-colors hover:bg-card hover:text-text"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="mt-1 rounded-xl bg-text px-5 py-3 text-center text-sm font-medium text-space"
            >
              Hire Me →
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
