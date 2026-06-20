---
name: project-idea-scorer
description: "Build and iterate on the AI Project Idea Scorer — a single-page Next.js app"
allowed-tools:
  - Read
  - Write
  - Edit
  - Bash
  - Agent
  - AskUserQuestion
---

<objective>
Work on the Project-Idea-Scorer — a single-page Next.js + Tailwind CSS app that helps users score project ideas.

**Always follow:**
- No backend API routes
- No database integration
- No authentication
- No external paid services
- React local state only (`useState`)
- Beginner-friendly, simple code
- Mobile responsive with Tailwind CSS
- Reusable components

**Source:** `@CLAUDE.md` in the project root for full spec and rules.
</objective>

<project_structure>
- `src/app/page.tsx` — Main page (all state management lives here)
- `src/app/layout.tsx` — Root layout with metadata
- `src/app/globals.css` — Global styles (indigo accent, light theme)
- `src/components/HeroSection.tsx` — Hero with title, subtitle, CTA
- `src/components/IdeaForm.tsx` — 6-field project idea form
- `src/components/ScoreSlider.tsx` — Reusable 1–10 slider component
- `src/components/ResultCard.tsx` — Score result with breakdown, MVP tip, risk, next step
- `src/components/SampleIdeas.tsx` — 5 clickable sample idea cards
- `src/components/Footer.tsx` — Simple footer
</project_structure>

<commands>
**Run dev server:**
```bash
npm run dev
```

**Build for production:**
```bash
npm run build
```

**Deploy to Vercel:**
```bash
vercel --prod
```
</commands>

<scoring_logic>
- 5 criteria × 1–10 sliders → max total: 50
- 40–50: Excellent idea
- 30–39: Good MVP idea
- 20–29: Needs improvement
- Below 20: Not recommended yet
</scoring_logic>
