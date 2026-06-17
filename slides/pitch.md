---
marp: true
paginate: true
transition: fade
# PechaKucha: 6 slides, 20s auto-advance. Do not change the count.
auto-advance: 20
---

<!-- slide 1 -->
# Who's my person?
<!-- 20s -->

**Aspiring makers & early-career developers** who have lots of project ideas
but don't know which one is actually worth building.

They're excited about AI, learning to code, and want to ship something real —
but they've been burned by picking the wrong idea before.

---

<!-- slide 2 -->
# Their problem

They jump into projects based on excitement alone, then **hit walls**:

- The scope is too big for their team
- The problem isn't real — nobody wants it
- AI isn't actually adding value
- They waste weeks before realizing it's the wrong idea

**No simple, free tool exists** to help them score an idea before committing time.

---

<!-- slide 3 -->
# What I built

**AI Project Idea Scorer** — a single-page web app that scores ideas in seconds:

1. Enter your project idea (6 fields)
2. Rate it on 5 criteria with sliders (1–10)
3. Get an instant total score out of **50**
4. See a **recommendation** + MVP suggestion + risk warning + next step

5 sample ideas to try with one click. Free. No login. No data stored.

---

<!-- slide 4 -->
# How I built it

**Stack:** Next.js 16 + TypeScript + Tailwind CSS • Deployed on Vercel

**Built entirely with Claude Code:**

| Tool | What I used |
|------|-------------|
| **MCP** | `claude-mem` — memory & context across sessions |
| **Skill** | `project-idea-scorer` — custom SKILL.md with rules, design system, scoring logic |
| **Agent** | `scorer-builder` — built all 6 components + page |
| | `scorer-reviewer` — reviewed for bugs, a11y, mobile |
| | `scorer-ui-agent` — polished Tailwind design system |

**No API. No database. No auth.** Pure frontend — beginner-friendly by design.

---

<!-- slide 5 -->
# Why it matters

- **Saves time** — 2 minutes scoring vs. 2 weeks on the wrong idea
- **Teaches structured thinking** — 5 criteria framework anyone can learn
- **Beginner-friendly** — no backend, no complexity, just React + Tailwind
- **Free & private** — no login, no tracking, no data collection
- **Deployable in one click** — Vercel, live at `ai-project-idea-scorer.vercel.app`

Makers go from _"I have an idea!"_ to _"Here's whether I should build it."_

---

<!-- slide 6 -->
# Done checklist

- [x] **Repo public** — `github.com/swezinpreciousai-sys/my-profile-project`
- [x] **MCP + skill + agent used** — claude-mem, custom SKILL.md, 3 custom agents
- [x] **Deployed** — live on Vercel at `ai-project-idea-scorer.vercel.app`
- [x] **Builds clean** — `npm run build` passes with zero errors
- [x] **Mobile responsive** — works from 320px to desktop
- [x] **6 reusable components** — Hero, Form, Slider, ResultCard, SampleIdeas, Footer
