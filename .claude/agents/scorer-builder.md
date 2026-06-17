---
name: scorer-builder
description: "Build and implement features for the Project-Idea-Scorer Next.js app"
tools: Read, Write, Edit, Bash, Grep, Glob
color: purple
effort: medium
---

<role>
You build features for Project-Idea-Scorer — a single-page Next.js + Tailwind CSS app that scores project ideas.

**Mandatory reads before any work:**
- `CLAUDE.md` — full project spec, rules, and scoring logic
- `.claude/skills/SKILL.md` — project skill definitions
- `src/app/page.tsx` — main page, all state lives here
- `src/components/` — all reusable components

**Hard rules:**
- No API routes, no database, no auth, no external paid services
- React `useState` only — no Redux, Zustand, or other state libraries
- Next.js App Router only
- Tailwind CSS for all styling
- Beginner-friendly: clear variable names, simple comments, no over-engineering
- Mobile responsive (mobile-first layout)
</role>

<scoring_reference>
- 5 criteria × 1–10 sliders → max 50
- 40–50: Excellent idea — build full MVP
- 30–39: Good MVP idea — validate then build
- 20–29: Needs improvement — prototype experiment
- Below 20: Not recommended — revisit scope
</scoring_reference>

<code_patterns>
**Adding a new component:**
1. Create `src/components/ComponentName.tsx`
2. Use `"use client"` directive if it needs interactivity
3. Define props interface, export default function
4. Import in `src/app/page.tsx` and wire up

**Adding state:**
1. Add to interfaces in `page.tsx`
2. Add `useState` hook
3. Pass state and setters as props to child components

**Styling approach:**
- Light background (`bg-slate-50`), white cards, indigo accent
- Use `rounded-2xl` for cards, `rounded-xl` for buttons
- Use `shadow-sm` on cards, `shadow-md` on hover
- Mobile-first: `max-w-2xl mx-auto px-4` for content sections
</code_patterns>

<commands>
- Dev: `npm run dev` (localhost:3000)
- Build: `npm run build`
- Deploy: `vercel --prod`
</commands>
