import { AnimatedSection } from '@/components/common/AnimatedSection'
import { Badge } from '@/components/common/Badge'
import { GlassCard } from '@/components/common/GlassCard'
import { GradientText } from '@/components/common/GradientText'
import { Icon } from '@/components/common/Icon'
import { ParallaxBlob } from '@/components/effects/ParallaxBlob'
import { content } from '@/data/content'
import { blurInUp, viewportOnce } from '@/lib/animations'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

// ── Static data for mini-widgets ─────────────────────────────────────────────

const TEMPLATE_CATEGORIES = [
  { label: 'Cold Outreach' },
  { label: 'Follow-up' },
  { label: 'Newsletter' },
  { label: 'Support Reply' },
  { label: 'Job Application' },
  { label: 'Partnership' },
]

const TONES = ['Professional', 'Friendly', 'Casual', 'Persuasive'] as const
type Tone = (typeof TONES)[number]

const TONE_PREVIEWS: Record<Tone, string> = {
  Professional:
    'I wanted to follow up regarding our previous discussion and explore potential synergies.',
  Friendly:
    'Hey! Just checking in — would love to reconnect and hear how things are going!',
  Casual: 'Hey, any update on this? Happy to hop on a quick call if easier.',
  Persuasive:
    'Only 3 onboarding spots remain this quarter — act before they fill up.',
}

const SUBJECT_LINES = [
  'Helping [Company] cut email time by 60%',
  'Quick question about your outreach',
  'Following up — 5 mins this week?',
  'Great meeting you at SaaStr 🙌',
  'Your team is losing 2 hrs/day to email',
]

const LANGUAGES = [
  { flag: '🇺🇸', name: 'English' },
  { flag: '🇩🇪', name: 'German' },
  { flag: '🇫🇷', name: 'French' },
  { flag: '🇯🇵', name: 'Japanese' },
  { flag: '🇧🇷', name: 'Portuguese' },
  { flag: '🇪🇸', name: 'Spanish' },
  { flag: '🇰🇷', name: 'Korean' },
  { flag: '🇮🇳', name: 'Hindi' },
]

const BEFORE_TEXT =
  'Hi, just wanted to check in. Did you get a chance to look at my last email? Would love to connect. Let me know.'

const AFTER_TEXT =
  "Hi Sarah, I know you're busy — I'll keep this short.\n\nI'd love to get your thoughts on MailForge before our trial window closes on Friday. Even a 10-minute call would be hugely valuable.\n\nAre you free Thursday morning?\n\nBest, Alex"

// ── Card widgets ─────────────────────────────────────────────────────────────

function TemplatesWidget() {
  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="flex flex-wrap gap-2">
        {TEMPLATE_CATEGORIES.map(({ label }) => (
          <span
            key={label}
            className="text-xs px-2.5 py-1 rounded-full font-medium"
            style={{
              background: 'var(--accent-subtle)',
              color: 'var(--accent)',
              border: '1px solid var(--border-accent)',
            }}
          >
            {label}
          </span>
        ))}
      </div>
      <div
        className="flex-1 rounded-xl p-3 text-xs font-mono leading-relaxed overflow-hidden"
        style={{
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border)',
          color: 'var(--text-secondary)',
        }}
      >
        <span style={{ color: 'var(--text-muted)' }}>Subject: </span>
        <span style={{ color: 'var(--text-primary)' }}>
          Helping [Company] cut email drafting time by 60%
        </span>
        {'\n\n'}
        <span>
          Hi Sarah,{'\n\n'}I came across [Company]&apos;s recent expansion and
          noticed your team is scaling quickly…
        </span>
      </div>
    </div>
  )
}

function ToneWidget() {
  const [tone, setTone] = useState<Tone>('Professional')
  return (
    <div className="flex flex-col gap-3 h-full">
      <div className="flex flex-wrap gap-1.5">
        {TONES.map(t => (
          <button
            key={t}
            onClick={() => setTone(t)}
            className="text-xs px-2.5 py-1.5 rounded-lg font-medium transition-all"
            style={{
              background:
                tone === t ? 'var(--accent-subtle)' : 'var(--bg-tertiary)',
              color: tone === t ? 'var(--accent)' : 'var(--text-secondary)',
              border: `1px solid ${tone === t ? 'var(--border-accent)' : 'var(--border)'}`,
            }}
          >
            {t}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.p
          key={tone}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2 }}
          className="text-xs leading-relaxed flex-1"
          style={{ color: 'var(--text-secondary)' }}
        >
          &ldquo;{TONE_PREVIEWS[tone]}&rdquo;
        </motion.p>
      </AnimatePresence>
    </div>
  )
}

function LanguagesWidget() {
  return (
    <div className="flex flex-col gap-3 h-full">
      <div className="grid grid-cols-2 gap-2">
        {LANGUAGES.map(({ flag, name }) => (
          <div
            key={name}
            className="flex items-center gap-2 text-xs px-2.5 py-1.5 rounded-lg"
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border)',
            }}
          >
            <span className="text-base leading-none">{flag}</span>
            <span style={{ color: 'var(--text-secondary)' }}>{name}</span>
          </div>
        ))}
      </div>
      <p className="text-xs mt-auto" style={{ color: 'var(--text-muted)' }}>
        + 22 more languages
      </p>
    </div>
  )
}

function SequenceWidget() {
  const steps = [
    { day: 'Day 1', label: 'Cold intro', color: 'var(--accent)' },
    { day: 'Day 4', label: 'Follow-up', color: '#6366f1' },
    { day: 'Day 9', label: 'Break-up', color: '#ec4899' },
  ]
  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {steps.map((step, i) => (
          <div
            key={step.label}
            className="flex items-center gap-2 flex-shrink-0"
          >
            <div
              className="flex flex-col items-center gap-1.5 p-3 rounded-xl min-w-[110px]"
              style={{
                background: 'var(--bg-secondary)',
                border: `1px solid ${step.color}40`,
              }}
            >
              <span
                className="text-[10px] font-semibold uppercase tracking-wider"
                style={{ color: step.color }}
              >
                {step.day}
              </span>
              <span
                className="text-xs font-medium"
                style={{ color: 'var(--text-primary)' }}
              >
                {step.label}
              </span>
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                style={{ background: step.color }}
              >
                {i + 1}
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className="flex items-center gap-0.5 flex-shrink-0">
                {[0, 1, 2, 3].map(d => (
                  <div
                    key={d}
                    className="w-1.5 h-[2px] rounded-full"
                    style={{ background: 'var(--border-hover)' }}
                  />
                ))}
                <span style={{ color: 'var(--text-muted)', fontSize: 14 }}>
                  ›
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
      <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
        Build personalized multi-step sequences with AI-written copy at each
        touchpoint.
      </p>
    </div>
  )
}

function SubjectLineWidget() {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const typingRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    let charIdx = 0
    setDisplayed('')
    const current = SUBJECT_LINES[index]

    typingRef.current = setInterval(() => {
      charIdx++
      setDisplayed(current.slice(0, charIdx))
      if (charIdx >= current.length) {
        clearInterval(typingRef.current!)
        // Pause then advance to next subject line
        setTimeout(() => {
          setIndex(i => (i + 1) % SUBJECT_LINES.length)
        }, 2200)
      }
    }, 40)

    return () => {
      if (typingRef.current) clearInterval(typingRef.current)
    }
  }, [index])

  return (
    <div className="flex flex-col gap-3 h-full">
      <div
        className="flex-1 rounded-xl p-3 flex flex-col gap-2"
        style={{
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border)',
        }}
      >
        <p
          className="text-[10px] font-semibold uppercase tracking-wider"
          style={{ color: 'var(--text-muted)' }}
        >
          Suggested subject lines
        </p>
        {SUBJECT_LINES.map((line, i) => (
          <div
            key={i}
            className="flex items-start gap-2 text-xs transition-all"
            style={{
              color: i === index ? 'var(--text-primary)' : 'var(--text-muted)',
              opacity: i === index ? 1 : 0.45,
            }}
          >
            <span
              className="mt-0.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{
                background:
                  i === index ? 'var(--accent)' : 'var(--border-hover)',
                marginTop: 5,
              }}
            />
            {i === index ? (
              <span>
                {displayed}
                {displayed.length < line.length && (
                  <span
                    className="inline-block w-[2px] h-[12px] align-middle animate-pulse ml-[1px]"
                    style={{ background: 'var(--accent)' }}
                  />
                )}
              </span>
            ) : (
              <span>{line}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function RewriteWidget() {
  const [showAfter, setShowAfter] = useState(false)

  return (
    <div className="flex flex-col gap-3 h-full">
      <div className="flex items-center gap-2">
        <button
          onClick={() => setShowAfter(false)}
          className="text-xs px-3 py-1.5 rounded-lg font-medium transition-all"
          style={{
            background: !showAfter
              ? 'rgba(239,68,68,0.1)'
              : 'var(--bg-tertiary)',
            color: !showAfter ? '#ef4444' : 'var(--text-muted)',
            border: `1px solid ${!showAfter ? 'rgba(239,68,68,0.25)' : 'var(--border)'}`,
          }}
        >
          Before
        </button>
        <button
          onClick={() => setShowAfter(true)}
          className="text-xs px-3 py-1.5 rounded-lg font-medium transition-all"
          style={{
            background: showAfter
              ? 'rgba(16,185,129,0.1)'
              : 'var(--bg-tertiary)',
            color: showAfter ? '#10b981' : 'var(--text-muted)',
            border: `1px solid ${showAfter ? 'rgba(16,185,129,0.25)' : 'var(--border)'}`,
          }}
        >
          After ⚡
        </button>
        <span
          className="text-xs ml-auto"
          style={{ color: 'var(--text-muted)' }}
        >
          Click to compare
        </span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={showAfter ? 'after' : 'before'}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22 }}
          className="flex-1 rounded-xl p-3 text-xs leading-relaxed font-mono overflow-auto"
          style={{
            background: 'var(--bg-secondary)',
            border: `1px solid ${showAfter ? 'rgba(16,185,129,0.25)' : 'rgba(239,68,68,0.2)'}`,
            color: 'var(--text-secondary)',
            whiteSpace: 'pre-wrap',
            maxHeight: '160px',
          }}
        >
          {showAfter ? AFTER_TEXT : BEFORE_TEXT}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

// ── Bento Card wrapper ────────────────────────────────────────────────────────

interface BentoCardProps {
  icon: string
  title: string
  desc: string
  children: React.ReactNode
  colSpan?: 1 | 2
  delay?: number
}

function BentoCard({
  icon,
  title,
  desc,
  children,
  colSpan = 1,
  delay = 0,
}: BentoCardProps) {
  return (
    <motion.div
      className={colSpan === 2 ? 'lg:col-span-2' : ''}
      variants={blurInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay }}
    >
      <GlassCard
        hover
        className="p-5 sm:p-6 h-full flex flex-col gap-4 min-h-[240px]"
      >
        {/* Card header */}
        <div className="flex items-start gap-3">
          <div
            className="flex items-center justify-center w-9 h-9 rounded-lg shrink-0 mt-0.5"
            style={{ background: 'var(--accent-subtle)', border: '1px solid var(--border-accent)', color: 'var(--accent)' }}
          >
            <Icon name={icon} size={17} />
          </div>
          <div>
            <h3
              className="text-sm font-semibold font-heading leading-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              {title}
            </h3>
            <p
              className="text-xs mt-0.5 leading-relaxed"
              style={{ color: 'var(--text-muted)' }}
            >
              {desc}
            </p>
          </div>
        </div>

        {/* Widget content */}
        <div className="flex-1 overflow-hidden">{children}</div>
      </GlassCard>
    </motion.div>
  )
}

// ── Features Section ──────────────────────────────────────────────────────────

export function Features() {
  const { features } = content

  // Reorder items to match the desired bento layout:
  // Row 1: [Templates=2] [Tone=1]
  // Row 2: [Languages=1] [Sequences=2]
  // Row 3: [SubjectLine=1] [Rewrite=2]
  const bentoOrder = [
    {
      item: features.items[0],
      colSpan: 2 as const,
      widget: <TemplatesWidget />,
      delay: 0,
    },
    {
      item: features.items[1],
      colSpan: 1 as const,
      widget: <ToneWidget />,
      delay: 0.05,
    },
    {
      item: features.items[2],
      colSpan: 1 as const,
      widget: <LanguagesWidget />,
      delay: 0.1,
    },
    {
      item: features.items[4],
      colSpan: 2 as const,
      widget: <SequenceWidget />,
      delay: 0.15,
    },
    {
      item: features.items[3],
      colSpan: 1 as const,
      widget: <SubjectLineWidget />,
      delay: 0.2,
    },
    {
      item: features.items[5],
      colSpan: 2 as const,
      widget: <RewriteWidget />,
      delay: 0.25,
    },
  ]

  return (
    <section id="features" className="section-py relative overflow-hidden">
      <ParallaxBlob
        color="var(--orb-1)"
        size={480}
        distance={-55}
        className="-top-20 -left-24"
      />
      <div className="container-main relative z-10">
        {/* Section header */}
        <AnimatedSection className="text-center mb-14 space-y-4" variants={blurInUp}>
          <Badge>{features.badge}</Badge>
          <h2
            className="text-h2 font-heading"
            style={{ color: 'var(--text-primary)' }}
          >
            {features.headline.split('seriously').length > 1 ? (
              <>
                {features.headline.split(' who take ')[0]}{' '}
                <GradientText>who take email seriously</GradientText>
              </>
            ) : (
              features.headline
            )}
          </h2>
          <p
            className="text-base max-w-xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            {features.subheadline}
          </p>
        </AnimatedSection>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {bentoOrder.map(({ item, colSpan, widget, delay }) => (
            <BentoCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
              colSpan={colSpan}
              delay={delay}
            >
              {widget}
            </BentoCard>
          ))}
        </div>
      </div>
    </section>
  )
}
