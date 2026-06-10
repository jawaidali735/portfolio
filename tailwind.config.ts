import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: { min: "300px", max: "639px" },
      },
      colors: {
        // Theme-aware (flip via CSS vars for dark/light)
        space: "var(--bg)",
        "space-light": "var(--surface)",
        text: "var(--text)",
        muted: "var(--muted)",
        line: "var(--line)",
        card: "var(--card-bg)",
        // Orange accent — same in both themes
        indigo: "#FF7A1A",
        violet: "#FF9A3D",
        cyan: "#FFB872",
        pink: "#FF5E3A",
        coral: "#FF5E3A",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        display: ["var(--font-inter)", "Inter", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "sans-serif"],
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        banner: "url('/banner.png')",
        "radial-glow":
          "radial-gradient(circle at 80% 20%, rgba(139,92,246,0.18), transparent 45%)",
      },
      boxShadow: {
        glow: "0 0 50px -8px rgba(255,122,26,0.55)",
        "glow-cyan": "0 0 40px -8px rgba(255,154,61,0.45)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        marquee: "marquee 35s linear infinite",
        "marquee-reverse": "marquee-reverse 35s linear infinite",
        "spin-slow": "spin 8s linear infinite",
        "aurora-1": "aurora1 18s ease-in-out infinite",
        "aurora-2": "aurora2 22s ease-in-out infinite",
        "aurora-3": "aurora3 26s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "orb-spin": "orbSpin 24s linear infinite",
        "orb-float": "orbFloat 9s ease-in-out infinite",
        "fade-up": "fadeUp 0.8s ease forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        aurora1: {
          "0%, 100%": { transform: "translate(0%, 0%) scale(1)" },
          "33%": { transform: "translate(12%, 8%) scale(1.15)" },
          "66%": { transform: "translate(-8%, 12%) scale(0.95)" },
        },
        aurora2: {
          "0%, 100%": { transform: "translate(0%, 0%) scale(1)" },
          "33%": { transform: "translate(-14%, 6%) scale(1.1)" },
          "66%": { transform: "translate(10%, -10%) scale(1.05)" },
        },
        aurora3: {
          "0%, 100%": { transform: "translate(0%, 0%) scale(1.05)" },
          "50%": { transform: "translate(8%, -12%) scale(0.9)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        orbSpin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        orbFloat: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-22px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%, 100%": {
            boxShadow: "0 0 0 0 rgba(108,99,255,0.4)",
            opacity: "1",
          },
          "50%": {
            boxShadow: "0 0 24px 6px rgba(108,99,255,0.15)",
            opacity: "0.85",
          },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
