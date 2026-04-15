# MailForge AI — Landing Page Development Plan

> **Project:** AI Email Assistant Landing Page
> **Purpose:** Portfolio showcase — modern design & animations
> **Started:** April 15, 2026
> **Status:** 🟡 In Progress
> **Current Phase:** Phase 3 — Header & Footer

---

## 📋 Product Overview

| Detail | Info |
|--------|------|
| **Name** | MailForge AI |
| **Tagline** | "Write Perfect Emails in 10 Seconds" |
| **Type** | AI Email Writing Assistant SaaS |
| **Layout** | Single-page, scroll-based |
| **Design** | Dark-first, colorful gradients, glassmorphism, minimal |

### Design Goals
- Animated gradient backgrounds and mesh effects
- Scroll-triggered animations (Framer Motion)
- Glassmorphism cards with glow effects
- Dark/Light mode with smooth transitions
- Fully responsive (mobile-first)
- Micro-interactions on all interactive elements

---

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| React 19 + TypeScript | UI framework |
| Vite 8 | Build tool |
| Tailwind CSS v4 | Styling |
| Shadcn/UI | Base component library |
| Framer Motion | Animations |
| Lucide React | Icons |
| clsx + tailwind-merge | Class utilities |
| pnpm | Package manager |

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
**Status:** 0% Complete

- [ ] `Header.tsx`
  - [ ] Logo (MailForge AI wordmark with icon)
  - [ ] Nav links: Features, How it Works, Pricing, Demo
  - [ ] Dark mode toggle button
  - [ ] "Get Started Free" CTA button
  - [ ] Sticky on scroll with backdrop blur
  - [ ] Mobile: hamburger menu with slide-down drawer
- [ ] `Footer.tsx`
  - [ ] Logo + tagline
  - [ ] Links: Product, Resources, Legal
  - [ ] Social icons (Twitter, GitHub, LinkedIn)
  - [ ] Copyright line

---

## 🔄 Phase 4: Hero Section
**Status:** 0% Complete

- [ ] Animated gradient/mesh background (purple-blue-dark)
- [ ] Floating blur orbs for depth
- [ ] Headline with gradient text highlight
- [ ] Subheadline with staggered fade-in
- [ ] Two CTA buttons: "Start Free" (primary) + "Watch Demo" (ghost)
- [ ] Trust bar: "10,000+ users • 4.9★ rating • Free to start"
- [ ] Interactive demo widget:
  - [ ] Scenario input ("I need to follow up with a lead...")
  - [ ] Tone selector (Professional / Friendly / Casual)
  - [ ] Generate button with loading animation
  - [ ] Output card with typing animation effect
  - [ ] Copy to clipboard button

---

## 🔄 Phase 5: Problem & How It Works
**Status:** 0% Complete

**Problem Section:**
- [ ] Section headline ("Sound familiar?")
- [ ] 5 pain point cards in responsive grid
- [ ] Icons with subtle pulse animation
- [ ] Scroll-triggered stagger entrance

**How It Works Section:**
- [ ] 3-step cards with large step numbers
- [ ] Connecting dashed line between steps (desktop)
- [ ] Icons and brief descriptions
- [ ] Animated on scroll (each step fades in sequentially)

---

## 🔄 Phase 6: Features Section (Bento Grid)
**Status:** 0% Complete

- [ ] Responsive bento grid layout (mix of 1×1 and 2×1 cards)
- [ ] 6 feature cards:
  1. **Email Templates** — Preview of 6 template categories
  2. **Tone Selector** — Live slider switching tone (mock text updates)
  3. **Multi-language** — Animated globe with language flags
  4. **Subject Line Generator** — Typing animation showing suggestions
  5. **Email Sequences** — Simple flow diagram animation
  6. **One-Click Rewrite** — Before/after text swap animation
- [ ] Card hover effects: lift + border glow

---

## 🔄 Phase 7: Demo / Examples Section
**Status:** 0% Complete

- [ ] Section headline ("See it in action")
- [ ] Tab selector for email types (Cold Outreach / Follow-up / Marketing / Support)
- [ ] Side-by-side: "Before" rough draft vs "After" AI version
- [ ] Gmail-style mockup UI for the "After" email
- [ ] Tone toggle (4 tones) — updates visible email
- [ ] Copy button on output

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

| Phase | Description | Status | Progress |
|-------|-------------|--------|----------|
| 0 | Project Setup | ✅ Complete | 100% |
| 1 | Design System & Foundation | ✅ Complete | 100% |
| 2 | Core Reusable Components | ✅ Complete | 100% |
| 3 | Header & Footer | 🔄 Up Next | 0% |
| 4 | Hero Section | ⏳ Pending | 0% |
| 5 | Problem & How It Works | ⏳ Pending | 0% |
| 6 | Features (Bento Grid) | ⏳ Pending | 0% |
| 7 | Demo / Examples | ⏳ Pending | 0% |
| 8 | Use Cases & Testimonials | ⏳ Pending | 0% |
| 9 | Pricing | ⏳ Pending | 0% |
| 10 | Final CTA & Footer | ⏳ Pending | 0% |
| 11 | Global Polish & Performance | ⏳ Pending | 0% |
| 12 | Testing & Deployment | ⏳ Pending | 0% |

**Overall: ~25% Complete (3/12 phases done)**

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
