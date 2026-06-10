# World-Class AI Developer Portfolio — Claude Code Prompt

Paste this ENTIRE prompt into Claude Code terminal.

---

## PROMPT START — COPY EVERYTHING BELOW

```
Create a complete Next.js 14 portfolio website for an AI Agent Developer.
Use App Router, TypeScript, Tailwind CSS, Framer Motion.
Build the ENTIRE project — every file, every component, fully working.

=== SETUP COMMANDS TO RUN FIRST ===
npx create-next-app@latest portfolio --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd portfolio
npm install framer-motion lucide-react @next/font react-type-animation

=== PROJECT STRUCTURE TO CREATE ===
src/
  app/
    layout.tsx          ← root layout with fonts + metadata
    page.tsx            ← imports all sections
    globals.css         ← custom CSS variables, scrollbar, cursor
  components/
    layout/
      Navbar.tsx
      Footer.tsx
    sections/
      Loader.tsx
      Hero.tsx
      Stats.tsx
      About.tsx
      Services.tsx
      Projects.tsx
      TechStack.tsx
      Process.tsx
      Testimonials.tsx
      FAQ.tsx
      Contact.tsx
    ui/
      GlassCard.tsx
      Badge.tsx
      SectionLabel.tsx
      AnimatedCounter.tsx
      ParticleCanvas.tsx

=== TAILWIND CONFIG (tailwind.config.ts) ===
Extend with these custom values:
colors:
  space: '#080B14'
  indigo: '#6C63FF'
  cyan: '#00F5D4'
  coral: '#FF6B6B'
  text: '#E8EAF0'
  muted: '#3A3F5C'
  card: 'rgba(255,255,255,0.03)'

fontFamily:
  display: ['Space Grotesk', 'sans-serif']
  body: ['Inter', 'sans-serif']
  mono: ['JetBrains Mono', 'monospace']

animation:
  float: 'float 6s ease-in-out infinite'
  pulse-glow: 'pulseGlow 2s ease-in-out infinite'
  marquee: 'marquee 25s linear infinite'

Add keyframes for float, pulseGlow, marquee.

=== globals.css ===
- CSS variable: --bg: #080B14
- Custom scrollbar: 4px wide, indigo color, transparent track
- ::selection background: #6C63FF40
- html { scroll-behavior: smooth }
- Import Google Fonts: Space Grotesk, Inter, JetBrains Mono

=== COMPONENT: layout.tsx ===
- Title: "[Name] — AI Agent & Full-Stack Developer"
- Meta description: "Pakistan-based AI Agent Architect..."
- OG tags for social sharing
- Dark background color in body

=== COMPONENT: Navbar.tsx ===
- 'use client'
- Fixed top, z-50
- bg: rgba(8,11,20,0.85) with backdrop-blur-xl
- Border bottom appears on scroll (useState + useEffect)
- Left: Logo "[AN]" in brackets, indigo color, font-mono
- Center: nav links array mapped — Home, About, Services, 
  Projects, Process, Testimonials, Contact
- Each link: smooth scroll onClick, hover:text-indigo transition
- Active link: small indigo dot underneath (track with 
  IntersectionObserver on each section)
- Right: "Hire Me →" button — bg-indigo, rounded-full, 
  px-5 py-2, hover:opacity-90
- Mobile: hamburger icon (Lucide Menu/X), 
  slide-down mobile menu with all links
- Framer Motion: navbar slides down on mount

=== COMPONENT: Loader.tsx ===
- 'use client'  
- Full screen fixed overlay, bg-space, z-[100]
- Center: SVG initials that draw themselves 
  (stroke-dashoffset animation from full length to 0)
- Below SVG: thin indigo progress bar, width animates 
  0→100% over 2.5s using Framer Motion
- After 2.8s: whole loader fades out and sets 
  loaded state (pass as prop or use context)
- Parent page.tsx: show loader, then animate 
  main content in with opacity 0→1

=== COMPONENT: ParticleCanvas.tsx ===
- 'use client'
- HTML5 Canvas, position absolute, fill parent
- 180 particles: random x/y/vx/vy/radius/opacity
- On requestAnimationFrame: move particles, 
  wrap at edges, draw white dots
- Connect particles within 120px with thin lines 
  (opacity based on distance)
- Mouse interaction: particles near cursor gently 
  drift toward it
- useEffect cleanup on unmount

=== COMPONENT: Hero.tsx ===
- 'use client'
- min-h-screen, relative, overflow-hidden
- bg-space with ParticleCanvas behind everything
- Subtle radial gradient overlay: 
  indigo at 20% opacity in top-right corner
- Top: Availability badge — 
  pill shape, border border-indigo/30, bg-indigo/10
  green pulsing dot + "✦ Available for Projects"
  Framer Motion: fade in from top
- H1: "Building AI Agents" — 
  text-6xl md:text-8xl font-display font-bold
  "AI Agents" has gradient: from-indigo to-cyan
  Framer Motion: slide up with delay
- H2: "That Actually Work in Production" — 
  text-2xl text-muted, font-display
- Typewriter: use react-type-animation
  Strings: 
  "autonomous agent systems 🤖",
  "RAG pipelines over your data 📚",  
  "multi-agent orchestration 🔗",
  "full-stack AI SaaS products 🚀",
  "OpenAI & LangChain architectures ⚡"
  Style: text-xl text-cyan font-mono
- Short para: 60% width max, text-muted, text-lg
- CTA row:
  Button 1: "View My Work →" 
    bg-indigo, hover:bg-indigo/80, rounded-full
    px-8 py-4, font-semibold
    Framer Motion hover: scale 1.05
  Button 2: "Download CV ↓"
    border border-indigo/50, rounded-full
    hover:bg-indigo/10, px-8 py-4
- Right side floating code card:
  bg: rgba(255,255,255,0.04)
  border: border-indigo/20
  backdrop-blur-md, rounded-2xl, p-6
  font-mono text-sm
  Syntax-highlighted fake code:
  
  const agent = new OpenAI.Agent({
    model: "gpt-4o",
    tools: [searchWeb, queryDB, sendEmail],
    memory: new VectorMemory({ 
      store: pinecone 
    }),
  });
  
  const result = await agent.run(
    "Research competitors and 
     draft a report"
  );
  
  Color the keywords: const/await in coral,
  strings in cyan, comments in muted,
  function names in indigo
  
  Card animation: float up/down (CSS animation-float)
  Slight 3D tilt on hover using Framer Motion 
  rotateX and rotateY

- Bottom: "Powered by" tech badge row —
  OpenAI · LangChain · Next.js · TypeScript · Supabase
  text-xs text-muted, spaced with dots

=== COMPONENT: Stats.tsx ===
- Full width section, bg slightly lighter than space
- py-16, border-y border-indigo/10
- 5 stats in flex row, divided by thin lines:
  15+ | Projects Delivered
  8+  | Happy Clients
  3+  | Years Experience
  100%| Job Success Rate
  48h | Avg Response Time
- AnimatedCounter component:
  useInView from framer-motion
  When in view: count up from 0 to target
  Duration: 2s, easeOut
- Numbers: text-5xl font-mono text-indigo
- Labels: text-sm text-muted uppercase tracking-widest

=== COMPONENT: About.tsx ===
- id="about", py-32
- SectionLabel: "// ABOUT ME"
- H2: "I Turn Complex AI Problems Into Shipped Products"
  text-5xl font-display, gradient on "Shipped Products"
- Grid: 3/5 left, 2/5 right on desktop, stacked mobile

LEFT SIDE:
- Two paragraphs (copy above)
- Two glassmorphism boxes side by side:
  "What makes me different" list
  "I work best with" list
  Each list item: indigo "✦" bullet
  GlassCard component with hover glow

RIGHT SIDE:
- Image placeholder: 
  rounded-2xl, aspect-square
  indigo gradient border (use ring or outline trick)
  Inner: gradient bg with initials centered
  Glow shadow: shadow-indigo/20
- Below: skill groups
  Each group: cyan label + flex-wrap pills
  Pill style: bg-indigo/10 border border-indigo/20 
  rounded-full px-3 py-1 text-xs font-mono
  hover: bg-indigo/20 transition

All elements: Framer Motion fadeInUp on scroll
Use whileInView + viewport={{ once: true }}

=== COMPONENT: Services.tsx ===
- id="services", py-32
- SectionLabel: "// WHAT I BUILD"
- H2: "Services That Drive Real Business Value"
- 6 cards in 3x2 grid (gap-6):

Card data array:
[
  {
    icon: "🤖",
    title: "AI Agent Development",
    desc: "Autonomous agents using OpenAI SDK, LangChain, 
    LangGraph. Tool-calling, memory, multi-step reasoning.",
    tags: ["OpenAI", "LangChain", "Python"],
    highlight: true  ← this card gets extra glow
  },
  {
    icon: "🏗️",
    title: "Full-Stack AI Products",
    desc: "End-to-end Next.js apps with AI built-in. 
    Auth, DB, API, deployment — from zero to production.",
    tags: ["Next.js", "TypeScript", "Supabase"]
  },
  {
    icon: "📚",
    title: "RAG & Knowledge Systems",
    desc: "Connect PDFs, docs, databases to LLMs. 
    Smart search, Q&A chatbots over your own data.",
    tags: ["Pinecone", "LangChain", "PostgreSQL"]
  },
  {
    icon: "⚡",
    title: "Workflow Automation",
    desc: "Replace manual processes with AI pipelines. 
    Email agents, data processors, report generators.",
    tags: ["N8N", "Zapier", "Custom APIs"]
  },
  {
    icon: "💬",
    title: "Custom AI Chatbots",
    desc: "Production chatbots trained on your data. 
    Website, WhatsApp, Slack — any platform.",
    tags: ["OpenAI", "Vercel AI SDK", "Next.js"]
  },
  {
    icon: "🔍",
    title: "AI Consulting & Audit",
    desc: "Review your AI stack, find bottlenecks, 
    define the right architecture for your use case.",
    tags: ["Strategy", "Architecture", "Audit"]
  }
]

GlassCard styles:
- bg: rgba(255,255,255,0.03)
- border: border-white/5
- rounded-2xl, p-8
- hover: border-indigo/40, shadow-lg shadow-indigo/10
- transition-all duration-300
- Framer Motion: staggered fade-up (each card 0.1s delay)
- Top-right corner: small tag chip in coral for "highlight" card
  "Most Popular" label

=== COMPONENT: Projects.tsx ===
- id="projects", py-32
- SectionLabel: "// FEATURED WORK"
- H2: "Projects That Ship and Scale"
- Filter tabs row: "All" | "AI Agents" | "Full-Stack" | "RAG"
  Active tab: bg-indigo, others: ghost
  useState for activeFilter
  Filter project cards based on category

Projects array (6 projects):
[
  {
    title: "AutoFlow Agent",
    category: "AI Agents",
    description: "Multi-step autonomous agent that researches, 
    writes, and schedules social content. 
    Reduced client workload by 80%.",
    tech: ["OpenAI SDK", "LangGraph", "Next.js", "Supabase"],
    metrics: "80% time saved · 500+ posts generated",
    gradient: "from-indigo/20 to-cyan/10",
    demo: "#",
    github: "#"
  },
  {
    title: "DocuMind RAG",
    category: "RAG",
    description: "Chat with any PDF using RAG pipeline. 
    Semantic search, citation tracking, 
    multi-document analysis.",
    tech: ["LangChain", "Pinecone", "FastAPI", "Next.js"],
    metrics: "500+ users · 10k+ queries/day",
    gradient: "from-cyan/20 to-indigo/10",
    demo: "#",
    github: "#"
  },
  {
    title: "SalesBot CRM Agent",
    category: "AI Agents",
    description: "AI agent that qualifies leads, sends 
    personalized follow-ups, updates CRM automatically.",
    tech: ["OpenAI", "PostgreSQL", "Node.js", "Zapier"],
    metrics: "3x conversion rate · $50k revenue tracked",
    gradient: "from-coral/20 to-indigo/10",
    demo: "#",
    github: "#"
  },
  {
    title: "DataChat Analytics",
    category: "Full-Stack",
    description: "Natural language interface for your database. 
    Ask questions in English, get SQL + charts instantly.",
    tech: ["Next.js", "OpenAI", "PostgreSQL", "Recharts"],
    metrics: "Used by 3 SaaS companies",
    gradient: "from-indigo/20 to-coral/10",
    demo: "#",
    github: "#"
  },
  {
    title: "MultiAgent Research Bot",
    category: "AI Agents",
    description: "LangGraph multi-agent system: Researcher + 
    Writer + Editor agents collaborate to produce reports.",
    tech: ["LangGraph", "CrewAI", "Python", "FastAPI"],
    metrics: "10x faster research · 95% accuracy",
    gradient: "from-cyan/20 to-coral/10",
    demo: "#",
    github: "#"
  },
  {
    title: "AI SaaS Boilerplate",
    category: "Full-Stack",
    description: "Production-ready Next.js SaaS starter with 
    AI features: auth, billing, AI chat, usage limits.",
    tech: ["Next.js", "Stripe", "Supabase", "OpenAI"],
    metrics: "Open source · 200+ GitHub stars",
    gradient: "from-indigo/20 to-cyan/10",
    demo: "#",
    github: "#"
  }
]

Card design:
- rounded-2xl overflow-hidden
- Top: gradient banner (from project.gradient) h-3 (thin bar at top)
- Body: p-6, dark card bg
- Tech tags: small font-mono pills
- Metrics line: text-cyan text-sm font-mono "📊 [metrics]"
- Bottom: two icon buttons — ExternalLink + Github (lucide icons)
- Hover: lift up (translateY -4px), border glow
- Framer Motion: stagger grid reveal

"View All Projects on GitHub →" button below grid

=== COMPONENT: TechStack.tsx ===
- py-24, overflow-hidden
- SectionLabel: "// MY ARSENAL"
- H2: "Tools I Ship With"
- Two marquee rows:
  Row 1 (left to right): 
  OpenAI · GPT-4o · LangChain · LangGraph · CrewAI · 
  Vercel AI SDK · AutoGen · Pinecone · Weaviate · ChromaDB
  
  Row 2 (right to left, opposite direction):
  Next.js 14 · TypeScript · React · TailwindCSS · 
  Supabase · PostgreSQL · Prisma · Redis · Docker · 
  FastAPI · Python · Node.js · Vercel · AWS · GitHub Actions

Each badge: 
- font-mono text-sm
- bg: rgba(108,99,255,0.08)
- border: border-indigo/15
- rounded-full px-5 py-2
- mx-3 whitespace-nowrap
- Indigo dot separator between items

CSS marquee animation (infinite scroll):
Row 1: animation-marquee (left direction)
Row 2: animation-marquee-reverse (right direction)
Fade edges: left/right gradient overlay mask

=== COMPONENT: Process.tsx ===
- id="process", py-32
- SectionLabel: "// HOW I WORK"
- H2: "From Idea to Production in 4 Steps"
- Horizontal timeline on desktop, vertical on mobile

Steps array:
[
  {
    number: "01",
    title: "Discovery Call",
    duration: "Day 1",
    desc: "We talk about your problem, goals, timeline, 
    and budget. I ask the hard questions others skip.",
    icon: "🎯"
  },
  {
    number: "02", 
    title: "Architecture Design",
    duration: "Days 2-3",
    desc: "I design the full system: agent flow, data 
    pipeline, tech stack, cost estimate. No surprises later.",
    icon: "🏗️"
  },
  {
    number: "03",
    title: "Build & Iterate",
    duration: "Weeks 1-3",
    desc: "Weekly demos, daily updates. You see progress 
    constantly. Feedback loops built into the process.",
    icon: "⚡"
  },
  {
    number: "04",
    title: "Deploy & Support",
    duration: "Week 4+",
    desc: "Production deployment, monitoring setup, 
    docs, and 30-day support. I don't disappear after launch.",
    icon: "🚀"
  }
]

Design:
- Horizontal line connecting all steps on desktop
- Each step: circle with number (indigo bg), 
  card below with glassmorphism
- Active/hover step: number circle gets glow
- Framer Motion: steps animate in left to right on scroll

=== COMPONENT: Testimonials.tsx ===
- py-32
- SectionLabel: "// CLIENT WORDS"
- H2: "What People Say After We Ship"

3 testimonial cards:
[
  {
    name: "Sarah K.",
    role: "SaaS Founder, USA",
    avatar: "SK",
    rating: 5,
    platform: "Upwork",
    text: "He built us an AI agent that replaced 3 manual 
    processes overnight. Delivered ahead of schedule, 
    explained every decision, and stayed for support. 
    Best hire I made this year."
  },
  {
    name: "Ahmed R.",
    role: "Tech Lead, UK",  
    avatar: "AR",
    rating: 5,
    platform: "Direct",
    text: "Deep knowledge of LangChain and OpenAI SDK — 
    not just tutorials, actual production experience. 
    Our RAG system handles 10k queries/day without issues. 
    Will work together again.",
    featured: true  ← center card, larger, more prominent
  },
  {
    name: "Maria L.",
    role: "Agency Owner, Germany",
    avatar: "ML",
    rating: 5,
    platform: "Fiverr",
    text: "I've worked with 20+ developers. This was 
    different — he understood the business problem first, 
    then built the solution. The chatbot increased our 
    leads by 40%."
  }
]

Layout: 3 columns, center card slightly taller and brighter
Stars: 5 gold stars (★★★★★) 
Platform badge: small "via Upwork" / "via Fiverr" chip
Avatar: circle with initials, indigo gradient bg
Framer Motion: cards fade up with stagger

=== COMPONENT: FAQ.tsx ===
- py-32
- SectionLabel: "// COMMON QUESTIONS"
- H2: "Before You Reach Out"
- Accordion component (no library, custom built)
  useState for openIndex

FAQ items:
[
  {
    q: "What's your typical project timeline?",
    a: "Simple agents: 1-2 weeks. Full-stack AI products: 
    3-6 weeks. Complex multi-agent systems: 6-12 weeks. 
    I give exact estimates after the discovery call."
  },
  {
    q: "Do you work with non-technical founders?",
    a: "Yes — most of my clients are. I translate tech 
    decisions into business impact. You focus on the product, 
    I handle the engineering."
  },
  {
    q: "What's included after the project ships?",
    a: "30 days of free support: bug fixes, small tweaks, 
    deployment issues. After that, affordable monthly 
    retainers available."
  },
  {
    q: "Can you join our existing team?",
    a: "Absolutely. I've worked as an embedded AI specialist 
    in teams of 2 to 20+. I adapt to your workflow: 
    GitHub, Jira, Notion — whatever you use."
  },
  {
    q: "What if I don't know exactly what I need?",
    a: "That's fine — it's actually common. Book a free 
    30-min call. I'll help you define the right solution 
    for your budget and goals."
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes, always. Your idea and code are yours. 
    I never share client work without explicit permission."
  }
]

Accordion design:
- Each item: bottom border border-white/5
- Question row: flex justify-between, cursor-pointer
- ChevronDown icon rotates 180° when open (Framer Motion)
- Answer: AnimatePresence for smooth open/close height animation
- Hover: question text turns indigo

=== COMPONENT: Contact.tsx ===
- id="contact", py-32
- SectionLabel: "// LET'S BUILD"
- H2: "Start a Project"  
- Subtitle: "Available for freelance · Full-time · Consulting"
- Availability badge: green dot + "Currently accepting new projects"

Grid: 3/5 left (form), 2/5 right (info)

LEFT — Contact Form:
  All inputs styled: 
    bg: rgba(255,255,255,0.04)
    border: border-white/10
    rounded-xl, px-4 py-3
    focus: border-indigo outline-none
    text-text placeholder:text-muted
    
  Fields:
  - Name input
  - Email input
  - "Project Type" select dropdown:
    Options: AI Agent Development, RAG System, 
    Full-Stack AI Product, Chatbot, Consulting, Other
  - Budget range select:
    $500-2k, $2k-5k, $5k-15k, $15k+, Let's discuss
  - Textarea: "Tell me about your project" (rows=5)
  - Submit button: full width, bg-indigo, rounded-xl
    "Send Message →" text
    Loading state: spinner + "Sending..."
    Success state: green checkmark + "Message Sent!"
    (useState for form state, no real backend needed)

RIGHT — Info:
  Card 1: glassmorphism, p-6
    Email icon + hello@[name].dev
    Calendar icon + "Book a free 30-min call →" (link)
    
  Card 2: "Find me on" section
    Upwork logo text + link
    GitHub logo text + link  
    LinkedIn logo text + link
    Twitter/X logo text + link
    
  Card 3: Response time box
    "⚡ Usually respond within 4 hours"
    Working hours: "Mon-Fri, 9am-6pm PKT"

=== COMPONENT: Footer.tsx ===
- bg slightly lighter than space
- border-t border-white/5
- py-16

Top row:
- Left: Logo "[AN]" + tagline
- Right: Quick links in 2 columns

Middle: thin divider

Bottom row:
- Left: "© 2024 [Name]. Built with Next.js & ☕"
- Center: "Available for work worldwide"
- Right: Social icon links (GitHub, LinkedIn, Twitter, Upwork)
  Icons from lucide-react
  hover: text-indigo

=== ANIMATIONS SUMMARY ===
- All sections: fadeInUp on scroll via Framer Motion whileInView
- viewport={{ once: true, margin: "-100px" }}
- Staggered children: use staggerChildren in parent variants
- Page load: Loader → fade in main content
- Hover states: all interactive elements scale/glow
- Scroll progress: thin indigo bar at very top of page
  (fixed, tracks window.scrollY / document.body.scrollHeight)

=== FINAL NOTES ===
- Every section has id for smooth scroll nav
- All colors from Tailwind config (no hardcoded hex in JSX)
- Fully responsive: mobile-first, md: and lg: breakpoints
- No console errors
- Images: use Next.js Image component or div placeholders
- All animations respect prefers-reduced-motion
- Run: npm run dev to start
- Should look Awwwards-worthy — dark, premium, technical
```

---

## HOW TO USE IN CLAUDE CODE

**Step 1:** Open terminal
```bash
claude
```

**Step 2:** Type this first:
```
I want to build a Next.js portfolio. 
Read the full prompt below and create every file completely.
Do not stop until the entire project is built and runs without errors.
```

**Step 3:** Paste the full prompt above

**Step 4:** When done:
```bash
cd portfolio && npm run dev
```
Open: http://localhost:3000

---

## CUSTOMIZE THESE BEFORE RUNNING

| Location | What to Change |
|----------|---------------|
| `[APNA NAAM]` | Apna actual naam |
| `[AN]` | Apne initials |
| `hello@[name].dev` | Apni real email |
| Demo/GitHub `"#"` | Real project URLs |
| Stats numbers | Apni real experience |
| Testimonials | Real client reviews |

---

## AFTER BUILDING — DEPLOY

```bash
# Vercel pe deploy (free)
npm install -g vercel
vercel

# Ya GitHub se connect karo vercel.com pe
```
