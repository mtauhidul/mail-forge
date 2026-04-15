# MailForge AI — Landing Page Development Plan

> **Project:** AI Email Assistant Landing Page
> **Purpose:** Portfolio showcase — modern design & animations
> **Started:** April 15, 2026
> **Status:** 🟡 In Progress
> **Current Phase:** Phase 5 — Problem & How It Works

---

## 📋 Product Overview

| Detail      | Info                                                   |
| ----------- | ------------------------------------------------------ |
| **Name**    | MailForge AI                                           |
| **Tagline** | "Write Perfect Emails in 10 Seconds"                   |
| **Type**    | AI Email Writing Assistant SaaS                        |
| **Layout**  | Single-page, scroll-based                              |
| **Design**  | Dark-first, colorful gradients, glassmorphism, minimal |

### Design Goals

- Animated gradient backgrounds and mesh effects
- Scroll-triggered animations (Framer Motion)
- Glassmorphism cards with glow effects
- Dark/Light mode with smooth transitions
- Fully responsive (mobile-first)
- Micro-interactions on all interactive elements

---

## 🛠 Tech Stack

| Tool                  | Purpose                |
| --------------------- | ---------------------- |
| React 19 + TypeScript | UI framework           |
| Vite 8                | Build tool             |
| Tailwind CSS v4       | Styling                |
| Shadcn/UI             | Base component library |
| Framer Motion         | Animations             |
| Lucide React          | Icons                  |
| clsx + tailwind-merge | Class utilities        |
| pnpm                  | Package manager        |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # Shadcn base components
│   ├── common/          # Shared reusable components
│   │   ├── GradientText.tsx
│   │   ├── GlassCard.tsx
│   │   ├── AnimatedSection.tsx
│   │   └── Badge.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Problem.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Features.tsx
│   │   ├── Demo.tsx
│   │   ├── UseCases.tsx
│   │   ├── Pricing.tsx
│   │   ├── Testimonials.tsx
│   │   └── FinalCTA.tsx
│   └── effects/
│       ├── GradientBackground.tsx
│       └── ScrollProgress.tsx
├── lib/
│   ├── utils.ts          # cn() utility
│   └── animations.ts     # Framer Motion variants
├── hooks/
│   ├── useTheme.ts
│   └── useScrollAnimation.ts
├── data/
│   ├── content.ts        # All text/copy
│   └── mockData.ts       # Demo emails, testimonials
├── contexts/
│   └── ThemeContext.tsx
├── styles/
│   └── design-tokens.css
├── App.tsx
├── main.tsx
└── index.css
```

---

## 🎨 Design System

### Color Palette

```
Blue:    #2563eb   (primary actions)
Purple:  #8b5cf6   (accents, gradients)
Cyan:    #06b6d4   (highlights)
Green:   #10b981   (success, pricing)
Pink:    #ec4899   (accents)

Gradients:
  Hero background:  #0f0c29 → #302b63 → #24243e
  Primary button:   #6366f1 → #8b5cf6
  CTA section:      #667eea → #764ba2
  Feature cards:    #4facfe → #00f2fe

Dark bg:   #0a0a0f
Card bg:   rgba(255,255,255,0.05)  [glassmorphism]
Border:    rgba(255,255,255,0.1)
```

### Typography

```
Headings:  'Inter' or 'Space Grotesk' (bold, tight tracking)
Body:      'Inter' (regular, relaxed line-height)
Mono:      'JetBrains Mono' (code/demo sections)

Scale:
  hero:    clamp(3rem, 6vw, 5rem)
  h1:      clamp(2rem, 4vw, 3.5rem)
  h2:      clamp(1.5rem, 3vw, 2.5rem)
  body:    1rem / 1.7
```

### Animation Conventions

```
Fade in up:     y: 30 → 0, opacity: 0 → 1, duration: 0.6s
Stagger:        delayChildren: 0.1, staggerChildren: 0.1
Spring:         type: "spring", stiffness: 100, damping: 15
Hover lift:     y: -4, scale: 1.02, transition: 0.2s
```

> **Rule:** Every section gets scroll-triggered fade-in. Dark mode and responsive breakpoints are built into each component as it's developed — not added later.

---

## 🗺 Page Sections (in order)

1. **Header** — Logo, nav links, dark mode toggle, CTA button
2. **Hero** — Headline, subheadline, CTAs, interactive demo, gradient bg
3. **Problem** — 5 pain points with icons in a grid
4. **How It Works** — 3-step process with connecting lines
5. **Features** — Bento grid with 6 feature cards
6. **Demo** — Before/after email examples with tone toggle
7. **Use Cases** — 6 user personas in cards
8. **Testimonials** — Auto-scrolling card carousel
9. **Pricing** — 3 tiers with monthly/annual toggle
10. **Final CTA** — Email signup with particle/gradient background
11. **Footer** — Links, socials, copyright

---

## ✅ Phase 0: Project Setup — COMPLETE

**Completed:** April 15, 2026

- [x] Vite + React + TypeScript initialized
- [x] Tailwind CSS v4 with `@tailwindcss/postcss`
- [x] Shadcn/UI configured with `components.json`
- [x] Path aliases (`@/` → `src/`)
- [x] `src/lib/utils.ts` with `cn()` utility
- [x] `src/components/ui/` directory created
- [x] Plan document created

---

## ✅ Phase 1: Design System & Foundation — COMPLETE

**Completed:** April 15, 2026

- [x] Install Framer Motion: `pnpm add framer-motion`
- [x] Install Google Fonts (Inter + Space Grotesk) via CSS `@import`
- [x] Create `src/styles/design-tokens.css` with all CSS variables
- [x] Update `tailwind.config.ts` with custom colors, fonts, gradients
- [x] Update `src/index.css` with base styles (font, bg, color)
- [x] Create `src/lib/animations.ts` with reusable Framer Motion variants
- [x] Create `src/contexts/ThemeContext.tsx` for dark/light mode
- [x] Wire up ThemeProvider in `main.tsx`

---

## ✅ Phase 2: Core Reusable Components — COMPLETE

**Completed:** April 16, 2026

- [x] `AnimatedSection` + `AnimatedGroup` — scroll-triggered wrappers
- [x] `GradientText` — single-tone violet gradient text
- [x] `GlassCard` — glassmorphism card with hover glow
- [x] `Badge` — accent / success / warning / muted variants
- [x] `Button` — primary / secondary / ghost with loading state
- [x] `OrbBackground` — ambient orb atmosphere effect
- [x] `ScrollProgress` — spring-animated top progress bar
- [x] `src/data/content.ts` — all landing page copy in one file
- [x] `src/data/mockData.ts` — 4 email examples × 4 tones + 6 testimonials

---

## 🔄 Phase 3: Header & Footer

**Status:** ✅ Complete

- [x] `Header.tsx`
  - [x] Logo (MailForge AI wordmark with icon)
  - [x] Nav links: Features, How it Works, Pricing, Demo
  - [x] Dark mode toggle button
  - [x] "Get Started Free" CTA button
  - [x] Sticky on scroll with backdrop blur
  - [x] Mobile: hamburger menu with slide-down drawer
- [x] `Footer.tsx`
  - [x] Logo + tagline
  - [x] Links: Product, Resources, Legal
  - [x] Social icons (Twitter, GitHub, LinkedIn)
  - [x] Copyright line

---

## ✅ Phase 4: Hero Section — COMPLETE

**Completed:** April 16, 2026

- [x] Orb background atmosphere for depth
- [x] Headline with gradient text highlight
- [x] Subheadline with staggered fade-in (heroContainer / heroItem variants)
- [x] Two CTA buttons: "Start writing for free" (primary) + "See how it works" (secondary)
- [x] Trust bar: 3 stats (10K+ users, 4.9★ rating, 2 min saved)
- [x] Interactive demo widget (right column on desktop):
  - [x] Scenario textarea with focus border-accent effect
  - [x] Suggestion chips (3 quick-fill prompts)
  - [x] Tone selector (Professional / Friendly / Casual / Persuasive)
  - [x] Generate button with loading animation (1.8s fake delay)
  - [x] Output card with cursor-blink typewriter animation (~14ms/char)
  - [x] Copy to clipboard button with check icon feedback
  - [x] "Try again" ghost button to reset

---

## 🔄 Phase 5: Problem & How It Works

**Status:** ✅ Complete

**Problem Section:**

- [x] Section headline ("Sound familiar?")
- [x] 5 pain point cards in responsive grid
- [x] Icons with subtle pulse animation
- [x] Scroll-triggered stagger entrance

**How It Works Section:**

- [x] 3-step cards with large step numbers
- [x] Connecting dashed line between steps (desktop)
- [x] Icons and brief descriptions
- [x] Animated on scroll (each step fades in sequentially)

---

## ✅ Phase 6: Features Section (Bento Grid) — COMPLETE

**Completed:** April 16, 2026

- [x] Responsive bento grid layout (mix of 1×1 and 2×1 cards), 3 cols on lg
- [x] 6 feature cards with interactive mini-widgets:
  1. **Email Templates** (2-col) — 6 category pills + preview email snippet
  2. **Tone Selector** (1-col) — 4 clickable tone buttons, preview text animates on switch
  3. **Multi-language** (1-col) — 8 languages with flag emojis + "22 more" note
  4. **Email Sequences** (2-col) — 3-step flow diagram with dashed connector arrows
  5. **Subject Line Generator** (1-col) — Typewriter cycling through 5 subject lines
  6. **One-Click Rewrite** (2-col) — Before/After toggle with fade animation
- [x] Card hover glow effect via GlassCard `hover` prop
- [x] Scroll-triggered fade-in-up per card with stagger delays

---

## 🔄 Phase 7: Demo / Examples Section

**Status:** ✅ Complete

- [x] Section headline ("See it in action")
- [x] Tab selector for email types (Cold Outreach / Follow-up / Marketing / Support)
- [x] Side-by-side: "Before" rough draft vs "After" AI version
- [x] Gmail-style mockup UI for the "After" email
- [x] Tone toggle (4 tones) — updates visible email
- [x] Copy button on output

---

## 🔄 Phase 8: Use Cases & Testimonials

**Status:** 0% Complete

**Use Cases Section:**

- [ ] 6 persona cards (Sales, Entrepreneur, Student, Non-native speaker, Job seeker, Support agent)
- [ ] Icon + role title + one-line value prop each
- [ ] Hover: card lifts with colored glow matching persona

**Testimonials Section:**

- [ ] 6 mock testimonials with avatars, name, role, company
- [ ] Star ratings
- [ ] Auto-scrolling infinite carousel (horizontal)
- [ ] Glassmorphism cards

---

## 🔄 Phase 9: Pricing Section

**Status:** 0% Complete

- [ ] Monthly / Annual billing toggle (animated, "Save 20%" badge)
- [ ] 3 pricing cards: Free · Pro ($12/mo) · Enterprise (Custom)
- [ ] "Most Popular" badge on Pro with glow effect
- [ ] Feature checklist per tier
- [ ] CTA button per tier
- [ ] Card hover: scale up with shadow

---

## 🔄 Phase 10: Final CTA & Footer

**Status:** 0% Complete

**Final CTA Section:**

- [ ] Bold headline ("Start writing better emails today")
- [ ] Email input + "Get Early Access" button
- [ ] "No credit card required" note
- [ ] Animated particle or gradient blob background
- [ ] Success state with checkmark animation

**Footer:** (from Phase 3 deliverable — wire up here)

---

## 🔄 Phase 11: Global Polish & Performance

**Status:** 0% Complete

- [ ] Audit all scroll animations — ensure consistency
- [ ] Add cursor glow/trail effect (desktop only)
- [ ] Smooth anchor scroll for nav links
- [ ] Page load animation (fade in)
- [ ] Verify dark mode works across all sections
- [ ] Verify full responsiveness: 320px · 768px · 1024px · 1440px
- [ ] Lighthouse audit — target 90+ across all metrics
- [ ] Lazy load below-fold sections
- [ ] Optimize animation performance (will-change, GPU layers)

---

## 🔄 Phase 12: Testing & Deployment

**Status:** 0% Complete

- [ ] Cross-browser: Chrome, Firefox, Safari, Edge
- [ ] Mobile devices: iOS Safari, Android Chrome
- [ ] Fix any visual bugs found
- [ ] Production build: `pnpm build`
- [ ] Deploy to Vercel or Netlify
- [ ] Test live URL
- [ ] Update README with live link + screenshots
- [ ] Add to portfolio

---

## 📊 Progress Tracker

| Phase | Description                 | Status      | Progress |
| ----- | --------------------------- | ----------- | -------- |
| 0     | Project Setup               | ✅ Complete | 100%     |
| 1     | Design System & Foundation  | ✅ Complete | 100%     |
| 2     | Core Reusable Components    | ✅ Complete | 100%     |
| 3     | Header & Footer             | ✅ Complete | 100%     |
| 4     | Hero Section                | ✅ Complete | 100%     |
| 5     | Problem & How It Works      | ✅ Complete | 100%     |
| 6     | Features (Bento Grid)       | ✅ Complete | 100%     |
| 7     | Demo / Examples             | ✅ Complete | 100%     |
| 8     | Use Cases & Testimonials    | ⏳ Pending  | 0%       |
| 9     | Pricing                     | ⏳ Pending  | 0%       |
| 10    | Final CTA & Footer          | ⏳ Pending  | 0%       |
| 11    | Global Polish & Performance | ⏳ Pending  | 0%       |
| 12    | Testing & Deployment        | ⏳ Pending  | 0%       |

**Overall: ~33% Complete (4/12 phases done)**

---

## 📝 Decisions & Notes

- **Animation library:** Framer Motion only (no GSAP, keeps bundle lean)
- **Dark mode approach:** CSS class-based (`dark` on `<html>`), persisted in localStorage
- **Responsive strategy:** Mobile-first, built into every component
- **No backend:** All demo interactions are mock/static (landing page only)
- **Fonts:** Self-hosted via Fontsource or Google Fonts CDN
- **Images:** No heavy images — use SVG illustrations and CSS effects

---

**Last Updated:** April 15, 2026
