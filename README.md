# 💡🎯 Project Idea Scorer

A free web tool to score and evaluate your AI project idea before you build it. Enter your idea, rate it across 5 key criteria, and get an instant score with actionable recommendations.

## Features

- **Idea Description Form** — Describe your project idea, target users, problem statement, AI usage, team size, and estimated build time
- **5-Criteria Scoring** — Rate your idea on a 1–10 scale across:
  1. Real User Problem
  2. AI Value
  3. Scope
  4. Market Demand
  5. Team Excitement
- **Instant Result** — Get a total score out of 50 with a verdict:
  - 🟢 **Excellent Idea** (40+) — Build a full MVP
  - 🔵 **Good MVP Idea** (30–39) — Build a focused MVP
  - 🟡 **Needs Improvement** (20–29) — Prototype and get feedback first
  - 🔴 **Not Recommended Yet** (<20) — Revisit the problem and scope
- **Actionable Advice** — Each result includes an MVP suggestion, risk warning, and next step
- **Sample Ideas** — Click a pre-built sample to auto-fill the form and try it out instantly

## Tech Stack

- [Next.js](https://nextjs.org) 16 (App Router)
- [React](https://react.dev) 19
- [Tailwind CSS](https://tailwindcss.com) 4
- TypeScript

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
git clone <repo-url>
cd Project-Idea-Scorer
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build & Production

```bash
npm run build
npm run start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout with Geist font
│   ├── page.tsx          # Main page — state, scoring logic, composition
│   └── globals.css       # Tailwind imports
└── components/
    ├── HeroSection.tsx   # Landing hero with CTA
    ├── SampleIdeas.tsx   # Pre-built sample project ideas
    ├── IdeaForm.tsx      # Project idea input form
    ├── ScoreSlider.tsx   # Reusable 1–10 range slider
    ├── ResultCard.tsx    # Score breakdown + recommendations
    └── Footer.tsx        # Page footer
```

## Scoring Guide

| Score Range | Verdict              | Recommendation                                        |
| ----------- | -------------------- | ----------------------------------------------------- |
| 40–50       | Excellent Idea       | Build a full MVP with core features. Ship fast.       |
| 30–39       | Good MVP Idea        | Build a focused MVP. Start with one key feature.      |
| 20–29       | Needs Improvement    | Prototype a small experiment. Get feedback first.     |
| 10–19       | Not Recommended Yet  | Revisit the problem and scope. Consider simpler ideas.|

## Deploy

Deploy to [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app) with one click, or follow the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for other platforms.

## How to run

Open https://ai-project-idea-scorer.vercel.app in any browser. That's it.