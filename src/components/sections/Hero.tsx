import { Badge } from '@/components/common/Badge'
import { Button } from '@/components/common/Button'
import { GlassCard } from '@/components/common/GlassCard'
import { GradientText } from '@/components/common/GradientText'
import { OrbBackground } from '@/components/effects/OrbBackground'
import { content } from '@/data/content'
import { demoSuggestions, heroDemoResult } from '@/data/mockData'
import { heroContainer, heroItem } from '@/lib/animations'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Check, Copy, Play, Sparkles } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

type DemoState = 'idle' | 'generating' | 'result'
type Tone = 'Professional' | 'Friendly' | 'Casual' | 'Persuasive'

const TONES: Tone[] = ['Professional', 'Friendly', 'Casual', 'Persuasive']

const FULL_OUTPUT = `Subject: ${heroDemoResult.subject}\n\n${heroDemoResult.body}`

// ── Demo Widget ─────────────────────────────────────────────────────────────

function DemoWidget() {
  const { hero } = content
  const [demoState, setDemoState] = useState<DemoState>('idle')
  const [input, setInput] = useState('')
  const [tone, setTone] = useState<Tone>('Professional')
  const [displayed, setDisplayed] = useState('')
  const [copied, setCopied] = useState(false)
  const [inputFocused, setInputFocused] = useState(false)
  const typingRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const handleGenerate = () => {
    if (!input.trim()) return
    setDemoState('generating')
    setDisplayed('')
    setTimeout(() => setDemoState('result'), 1800)
  }

  useEffect(() => {
    if (demoState !== 'result') return
    let i = 0
    setDisplayed('')
    typingRef.current = setInterval(() => {
      i++
      setDisplayed(FULL_OUTPUT.slice(0, i))
      if (i >= FULL_OUTPUT.length) {
        clearInterval(typingRef.current!)
      }
    }, 14)
    return () => {
      if (typingRef.current) clearInterval(typingRef.current)
    }
  }, [demoState])

  const handleCopy = async () => {
    await navigator.clipboard.writeText(FULL_OUTPUT)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleReset = () => {
    if (typingRef.current) clearInterval(typingRef.current)
    setDemoState('idle')
    setDisplayed('')
  }

  return (
    <GlassCard className="p-5 sm:p-6 space-y-4 w-full">
      {/* Widget header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className="w-6 h-6 rounded-md flex items-center justify-center"
            style={{
              background: 'var(--accent-subtle)',
              border: '1px solid var(--border-accent)',
            }}
          >
            <Sparkles
              className="w-3.5 h-3.5"
              style={{ color: 'var(--accent)' }}
            />
          </div>
          <span
            className="text-sm font-semibold"
            style={{ color: 'var(--text-primary)' }}
          >
            Try MailForge AI
          </span>
        </div>
        {demoState === 'result' && (
          <span
            className="text-xs px-2 py-0.5 rounded-full"
            style={{
              background: 'rgba(16,185,129,0.1)',
              color: '#10b981',
              border: '1px solid rgba(16,185,129,0.2)',
            }}
          >
            Generated ✓
          </span>
        )}
      </div>

      {/* ── Input state ── */}
      <AnimatePresence mode="wait">
        {demoState !== 'result' && (
          <motion.div
            key="input-area"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="space-y-3"
          >
            {/* Textarea */}
            <textarea
              rows={3}
              className="w-full resize-none rounded-xl text-sm px-3.5 py-3 leading-relaxed"
              style={{
                background: 'var(--bg-secondary)',
                border: `1px solid ${inputFocused ? 'var(--border-accent)' : 'var(--border)'}`,
                color: 'var(--text-primary)',
                outline: 'none',
                fontFamily: 'inherit',
                transition: 'border-color 150ms ease',
              }}
              placeholder={hero.demoPlaceholder}
              value={input}
              onChange={e => setInput(e.target.value)}
              onFocus={() => setInputFocused(true)}
              onBlur={() => setInputFocused(false)}
            />

            {/* Suggestion chips — only when input is empty */}
            <AnimatePresence>
              {!input && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-wrap gap-1.5"
                >
                  {demoSuggestions.slice(0, 3).map(s => (
                    <button
                      key={s}
                      onClick={() => setInput(s)}
                      className="text-xs px-2.5 py-1 rounded-full transition-colors"
                      style={{
                        background: 'var(--accent-subtle)',
                        color: 'var(--accent)',
                        border: '1px solid var(--border-accent)',
                      }}
                    >
                      {s.length > 38 ? `${s.slice(0, 38)}…` : s}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Tone selector */}
            <div className="flex gap-1.5 flex-wrap">
              {TONES.map(t => (
                <button
                  key={t}
                  onClick={() => setTone(t)}
                  className="text-xs px-3 py-1.5 rounded-lg font-medium transition-all"
                  style={{
                    background:
                      tone === t
                        ? 'var(--accent-subtle)'
                        : 'var(--bg-tertiary)',
                    color:
                      tone === t ? 'var(--accent)' : 'var(--text-secondary)',
                    border: `1px solid ${tone === t ? 'var(--border-accent)' : 'var(--border)'}`,
                  }}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Generate button */}
            <Button
              className="w-full justify-center"
              size="md"
              loading={demoState === 'generating'}
              disabled={!input.trim()}
              onClick={handleGenerate}
              icon={
                demoState !== 'generating' ? (
                  <Sparkles className="w-4 h-4" />
                ) : undefined
              }
              iconPosition="left"
            >
              {demoState === 'generating' ? 'Generating…' : hero.demoButton}
            </Button>
          </motion.div>
        )}

        {/* ── Result state ── */}
        {demoState === 'result' && (
          <motion.div
            key="result-area"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="space-y-3"
          >
            <div
              className="rounded-xl px-4 py-3.5 min-h-[190px] text-xs leading-relaxed font-mono overflow-auto"
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border)',
                color: 'var(--text-primary)',
                whiteSpace: 'pre-wrap',
                maxHeight: '240px',
              }}
            >
              {displayed}
              {displayed.length < FULL_OUTPUT.length && (
                <span
                  className="inline-block w-[2px] h-[13px] ml-[1px] align-middle animate-pulse"
                  style={{ background: 'var(--accent)' }}
                />
              )}
            </div>

            <div className="flex gap-2">
              <Button
                variant="secondary"
                size="sm"
                icon={
                  copied ? (
                    <Check className="w-3.5 h-3.5" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )
                }
                iconPosition="left"
                onClick={handleCopy}
                className="flex-1 justify-center"
              >
                {copied ? 'Copied!' : 'Copy email'}
              </Button>
              <Button variant="ghost" size="sm" onClick={handleReset}>
                Try again
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </GlassCard>
  )
}

// ── Hero Section ─────────────────────────────────────────────────────────────

export function Hero() {
  const { hero } = content

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      <OrbBackground />

      <div className="container-main relative z-10 w-full pt-28 pb-20">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center"
        >
          {/* ── Left: Copy ── */}
          <div className="flex flex-col gap-6 lg:gap-7">
            <motion.div variants={heroItem}>
              <Badge dot>{hero.badge}</Badge>
            </motion.div>

            <motion.h1
              variants={heroItem}
              className="text-hero font-heading leading-[1.1] tracking-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              {hero.headline} <GradientText>{hero.headlineAccent}</GradientText>
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="text-[1.0625rem] leading-relaxed max-w-md"
              style={{ color: 'var(--text-secondary)' }}
            >
              {hero.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={heroItem} className="flex flex-wrap gap-3">
              <Button size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                {hero.ctaPrimary}
              </Button>
              <Button
                variant="secondary"
                size="lg"
                icon={<Play className="w-4 h-4" />}
                iconPosition="left"
              >
                {hero.ctaSecondary}
              </Button>
            </motion.div>

            {/* Trust bar */}
            <motion.div variants={heroItem} className="space-y-3 pt-1">
              <p
                className="text-xs font-medium"
                style={{ color: 'var(--text-muted)' }}
              >
                {hero.trust}
              </p>
              <div className="flex gap-8">
                {hero.trustStats.map(stat => (
                  <div key={stat.label}>
                    <p
                      className="text-xl font-bold font-heading leading-none"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {stat.value}
                    </p>
                    <p
                      className="text-xs mt-1"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right: Demo Widget ── */}
          <motion.div
            variants={heroItem}
            className="w-full lg:max-w-[480px] lg:ml-auto"
          >
            <DemoWidget />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade to next section */}
      <div
        className="absolute bottom-0 inset-x-0 h-24 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, transparent, var(--bg-primary))',
        }}
      />
    </section>
  )
}
