import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "../app/globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jawaidali.dev"),
  title: "Jawaid Ali — AI Agent & Full-Stack Developer",
  description:
    "Pakistan-based AI Agent Architect & Full-Stack Developer. I build autonomous AI agents, RAG chatbots, and production-grade Next.js applications that ship and scale.",
  keywords: [
    "AI Agent Developer",
    "RAG Chatbot",
    "Next.js Developer",
    "Full-Stack Developer",
    "LangChain",
    "OpenAI",
    "TypeScript",
    "Jawaid Ali",
  ],
  authors: [{ name: "Jawaid Ali" }],
  openGraph: {
    title: "Jawaid Ali — AI Agent & Full-Stack Developer",
    description:
      "I build autonomous AI agents, RAG chatbots, and production-grade web apps that ship and scale.",
    type: "website",
    locale: "en_US",
    siteName: "Jawaid Ali",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jawaid Ali — AI Agent & Full-Stack Developer",
    description:
      "I build autonomous AI agents, RAG chatbots, and production-grade web apps.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.add('light');}}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrains.variable} bg-space text-text antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
