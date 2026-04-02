import type { Project } from "../types";

export const projects: Project[] = [
  {
    slug: "club1886",
    title: "Club1886",
    tagline:
      "33 seasons of Arsenal history, 10,000+ matches, and an AI that knows every detail — in one place",
    category: "Full-Stack Web App",
    tags: ["React", "TypeScript", "Convex", "Gemini AI"],
    date: "2026-03",
    icon: "/projects/club1886/icon.png",
    thumbnail: "/projects/club1886/thumbnail.png",
    hero: { type: "image", src: "/projects/club1886/thumbnail.png" },
    brief: {
      role: "Solo Developer",
      overview:
        "Aggregates 30+ years of match data, 10,000+ fixtures, and player statistics from 6 different APIs into a single unified experience. Automated scrapers run daily to keep every score, lineup, and stat current — then a Gemini-powered AI chat lets you query the entire archive in natural language.",
    },
    metrics: [
      { label: "Seasons", value: "33" },
      { label: "Matches", value: "10,000+" },
      { label: "API Sources", value: "3+" },
      { label: "", value: "Live Tracking" },
      { label: "", value: "Automated Workflows" },
    ],
    process: [
      {
        title: "Data Rich",
        description:
          "Every player, every match, every stat. Automated scrapers pull from multiple APIs on a daily cron schedule, cross-referencing and deduplicating data to build a single source of truth spanning 33 seasons — appearances, goals, assists, ratings, and more.",
        images: [
          {
            src: "/projects/club1886/process/data-rich.png",
            alt: "Player statistics table showing detailed per-player data",
          },
        ],
      },
      {
        title: "AI-Powered Arsenal Chat",
        description:
          'A Gemini-powered conversational interface grounded in the full archive. Ask "Who scored the most goals in 2003-04?" and it queries real data — not hallucinated stats. Built on Convex with real-time sync and Clerk auth gating access.',
        images: [
          {
            src: "/projects/club1886/process/ai-chat.png",
            alt: "Gunners AI chat interface powered by Gemini",
          },
        ],
      },
      {
        title: "30 Years at a Glance",
        description:
          "Standings, fixtures, recent form, live match data, and news — all on a single dashboard. Designed around Arsenal's red and gold palette with dark/light mode. Every widget is live-updating and built to surface the data that matters at a glance.",
        images: [
          {
            src: "/projects/club1886/process/frontend.jpg",
            alt: "Dashboard showing standings, fixtures, and recent results",
          },
        ],
      },
    ],
    tools: [
      "React",
      "TypeScript",
      "TanStack Query",
      "Convex",
      "Clerk",
      "Gemini AI",
      "GitHub Actions",
      "Tailwind CSS",
    ],
    links: [{ label: "View Live", url: "https://club1886.vercel.app/" }],
    featured: true,
    order: 1,
  },
];
