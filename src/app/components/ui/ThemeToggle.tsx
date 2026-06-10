"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({
  className = "",
}: {
  className?: string;
}) {
  const [light, setLight] = useState(false);

  useEffect(() => {
    setLight(document.documentElement.classList.contains("light"));
  }, []);

  const toggle = () => {
    const isLight = document.documentElement.classList.toggle("light");
    setLight(isLight);
    try {
      localStorage.setItem("theme", isLight ? "light" : "dark");
    } catch {}
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle light / dark theme"
      className={`flex h-9 w-9 items-center justify-center rounded-full border border-line text-text transition-colors hover:border-indigo/60 ${className}`}
    >
      {light ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  );
}
