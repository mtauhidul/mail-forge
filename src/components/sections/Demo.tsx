import { AnimatedSection } from '@/components/common/AnimatedSection'
import { Badge } from '@/components/common/Badge'
import { GlassCard } from '@/components/common/GlassCard'
import { GradientText } from '@/components/common/GradientText'
import { ParallaxBlob } from '@/components/effects/ParallaxBlob'
import { content } from '@/data/content'
import { emailExamples, type EmailTone } from '@/data/mockData'
import { springScaleUp } from '@/lib/animations'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useState } from 'react'

const TONES: EmailTone[] = ['Professional', 'Friendly', 'Casual', 'Persuasive']

// ─── Copy button ────────────────────────────────────────────────────────────
function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [text])

  return (
    <motion.button
      onClick={handleCopy}
      whileTap={{ scale: 0.94 }}
      className={cn(
        'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all',
        copied
          ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
          : 'bg-[var(--accent-subtle)] text-[var(--accent)] border border-[var(--border-accent)] hover:bg-[var(--accent)]/15'
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        {copied ? (
          <motion.span
            key="check"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.15 }}
            className="flex items-center gap-1.5"
          >
            {/* Checkmark */}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M2 6l3 3 5-5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Copied!
          </motion.span>
        ) : (
          <motion.span
            key="copy"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.15 }}
            className="flex items-center gap-1.5"
          >
            {/* Copy icon */}
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
            Copy
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  )
}

// ─── Before card ────────────────────────────────────────────────────────────
function BeforeCard({ text }: { text: string }) {
  return (
    <div className="flex flex-col h-full">
      <div
        className="flex items-center gap-2 px-4 py-3 rounded-t-2xl border-b"
        style={{
          background: 'var(--bg-tertiary)',
          borderColor: 'var(--border)',
        }}
      >
        {/* Red/yellow/green dots */}
        {['#ef4444', '#f59e0b', '#10b981'].map(c => (
          <span
            key={c}
            className="w-3 h-3 rounded-full"
            style={{ background: c }}
          />
        ))}
        <span
          className="ml-2 text-xs font-medium"
          style={{ color: 'var(--text-muted)' }}
        >
          Your first draft
        </span>
      </div>
      <div
        className="flex-1 p-5 rounded-b-2xl"
        style={{
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border)',
          borderTop: 'none',
        }}
      >
        <p
          className="text-sm leading-relaxed italic"
          style={{ color: 'var(--text-muted)' }}
        >
          "{text}"
        </p>
        <p
          className="mt-4 text-xs"
          style={{ color: 'var(--text-muted)', opacity: 0.6 }}
        >
          😬 Vague · Low response rate · Missing personalization
        </p>
      </div>
    </div>
  )
}

// ─── Gmail-style After card ─────────────────────────────────────────────────
function AfterCard({
  subject,
  body,
  tone,
}: {
  subject: string
  body: string
  tone: EmailTone
}) {
  const fullText = `Subject: ${subject}\n\n${body}`

  return (
    <div className="flex flex-col h-full">
      {/* Chrome bar */}
      <div
        className="flex items-center justify-between px-4 py-3 rounded-t-2xl border-b"
        style={{
          background: 'var(--bg-tertiary)',
          borderColor: 'var(--border)',
        }}
      >
        <div className="flex items-center gap-2">
          {['#ef4444', '#f59e0b', '#10b981'].map(c => (
            <span
              key={c}
              className="w-3 h-3 rounded-full"
              style={{ background: c }}
            />
          ))}
          <span
            className="ml-2 text-xs font-medium"
            style={{ color: 'var(--text-muted)' }}
          >
            MailForge AI — {tone}
          </span>
        </div>
        <CopyButton text={fullText} />
      </div>

      {/* Email body */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${subject}-${tone}`}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="flex-1 p-5 rounded-b-2xl overflow-auto"
          style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border)',
            borderTop: 'none',
          }}
        >
          {/* Subject line */}
          <div
            className="pb-3 mb-3 border-b"
            style={{ borderColor: 'var(--border)' }}
          >
            <p
              className="text-[0.7rem] uppercase tracking-wider mb-1"
              style={{ color: 'var(--text-muted)' }}
            >
              Subject
            </p>
            <p
              className="text-sm font-semibold"
              style={{ color: 'var(--text-primary)' }}
            >
              {subject}
            </p>
          </div>

          {/* Body */}
          <pre
            className="text-sm leading-relaxed whitespace-pre-wrap font-sans"
            style={{ color: 'var(--text-secondary)' }}
          >
            {body}
          </pre>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

// ─── Demo section ───────────────────────────────────────────────────────────
export function Demo() {
  const [activeTab, setActiveTab] = useState(0)
  const [activeTone, setActiveTone] = useState<EmailTone>('Professional')

  const example = emailExamples[activeTab]
  const after = example.after[activeTone]

  return (
    <section id="demo" className="section-py relative overflow-hidden">
      <ParallaxBlob
        color="var(--orb-1)"
        size={550}
        distance={-80}
        className="-top-32 -right-32"
      />
      <div className="container-main relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <Badge className="mb-4">{content.demo.badge}</Badge>
          <h2
            className="text-h2 font-heading max-w-2xl mx-auto"
            style={{ color: 'var(--text-primary)' }}
          >
            Before MailForge. <GradientText>After MailForge.</GradientText>
          </h2>
          <p
            className="mt-4 text-lg"
            style={{ color: 'var(--text-secondary)' }}
          >
            {content.demo.subheadline}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1} variants={springScaleUp}>
          {/* Email type tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {emailExamples.map((ex, i) => (
              <motion.button
                key={ex.type}
                onClick={() => setActiveTab(i)}
                whileTap={{ scale: 0.96 }}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all border',
                  activeTab === i
                    ? 'text-white border-transparent'
                    : 'border-[var(--border)] hover:border-[var(--border-accent)]'
                )}
                style={
                  activeTab === i
                    ? { background: 'var(--accent)' }
                    : {
                        color: 'var(--text-secondary)',
                        background: 'transparent',
                      }
                }
              >
                {ex.type}
              </motion.button>
            ))}
          </div>

          {/* Tone selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            <span
              className="self-center text-xs font-medium mr-1"
              style={{ color: 'var(--text-muted)' }}
            >
              Tone:
            </span>
            {TONES.map(tone => (
              <motion.button
                key={tone}
                onClick={() => setActiveTone(tone)}
                whileTap={{ scale: 0.96 }}
                className={cn(
                  'px-3 py-1.5 rounded-lg text-xs font-medium transition-all border',
                  activeTone === tone
                    ? 'border-[var(--border-accent)]'
                    : 'border-[var(--border)] hover:border-[var(--border-accent)]'
                )}
                style={
                  activeTone === tone
                    ? {
                        background: 'var(--accent-subtle)',
                        color: 'var(--accent)',
                      }
                    : { color: 'var(--text-muted)', background: 'transparent' }
                }
              >
                {tone}
              </motion.button>
            ))}
          </div>

          {/* Side-by-side panel */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
            {/* Before */}
            <GlassCard className="p-0 overflow-hidden flex flex-col">
              <div className="px-5 pt-5 pb-3 flex items-center gap-2">
                <span
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border"
                  style={{
                    background: 'rgba(239,68,68,0.1)',
                    color: '#ef4444',
                    borderColor: 'rgba(239,68,68,0.2)',
                  }}
                >
                  ✗ Before
                </span>
              </div>
              <div className="px-5 pb-5 flex-1">
                <BeforeCard text={example.before} />
              </div>
            </GlassCard>

            {/* Arrow divider on desktop */}
            <div
              className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
              aria-hidden
            >
              {/* rendered by CSS grid gap — just visual label */}
            </div>

            {/* After */}
            <GlassCard
              className="p-0 overflow-hidden flex flex-col"
              style={{ borderColor: 'var(--border-accent)' }}
            >
              <div className="px-5 pt-5 pb-3 flex items-center gap-2">
                <span
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border"
                  style={{
                    background: 'rgba(16,185,129,0.1)',
                    color: '#10b981',
                    borderColor: 'rgba(16,185,129,0.2)',
                  }}
                >
                  ✓ After
                </span>
                <span
                  className="text-xs"
                  style={{ color: 'var(--text-muted)' }}
                >
                  ✨ AI-generated in seconds
                </span>
              </div>
              <div className="px-5 pb-5 flex-1">
                <AfterCard
                  subject={after.subject}
                  body={after.body}
                  tone={activeTone}
                />
              </div>
            </GlassCard>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
