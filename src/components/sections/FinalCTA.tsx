import { AnimatedSection } from '@/components/common/AnimatedSection'
import { Badge } from '@/components/common/Badge'
import { Button } from '@/components/common/Button'
import { GradientText } from '@/components/common/GradientText'
import { content } from '@/data/content'
import { scaleIn, fadeInUp, viewportOnce } from '@/lib/animations'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

// ── Animated gradient blobs ───────────────────────────────────────────────────

function BlobBackground() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden
    >
      {/* Large center blob */}
      <motion.div
        className="absolute rounded-full blur-[120px] opacity-20"
        style={{
          width: '60%',
          height: '140%',
          top: '-20%',
          left: '20%',
          background:
            'radial-gradient(circle, var(--accent) 0%, #6366f1 60%, transparent 80%)',
        }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.28, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Left accent blob */}
      <motion.div
        className="absolute rounded-full blur-[90px] opacity-10"
        style={{
          width: '30%',
          height: '80%',
          top: '10%',
          left: '-5%',
          background: 'radial-gradient(circle, #ec4899 0%, transparent 70%)',
        }}
        animate={{ x: [0, 20, 0], opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Right accent blob */}
      <motion.div
        className="absolute rounded-full blur-[90px] opacity-10"
        style={{
          width: '30%',
          height: '80%',
          top: '10%',
          right: '-5%',
          background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)',
        }}
        animate={{ x: [0, -20, 0], opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}

// ── Success state ─────────────────────────────────────────────────────────────

function SuccessMessage({ email }: { email: string }) {
  return (
    <motion.div
      key="success"
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 18 }}
      className="flex flex-col items-center gap-4 py-4"
    >
      {/* Checkmark circle */}
      <motion.div
        className="w-16 h-16 rounded-full flex items-center justify-center"
        style={{
          background: 'rgba(16,185,129,0.12)',
          border: '2px solid rgba(16,185,129,0.4)',
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 16, delay: 0.1 }}
      >
        <motion.svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#10b981"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.4, delay: 0.3, ease: 'easeOut' }}
        >
          <motion.polyline
            points="20 6 9 17 4 12"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.4, delay: 0.3, ease: 'easeOut' }}
          />
        </motion.svg>
      </motion.div>

      <div className="text-center space-y-1">
        <p
          className="text-lg font-semibold font-heading"
          style={{ color: 'var(--text-primary)' }}
        >
          You&apos;re on the list!
        </p>
        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
          We&apos;ll send your early access invite to{' '}
          <span style={{ color: 'var(--accent)' }}>{email}</span>
        </p>
      </div>
    </motion.div>
  )
}

// ── Email capture form ────────────────────────────────────────────────────────

function EmailForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!isValid) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setSubmitted(true)
  }

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <SuccessMessage email={email} />
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-3 w-full max-w-md mx-auto"
          noValidate
        >
          <div className="flex w-full gap-2">
            <input
              type="email"
              value={email}
              onChange={e => {
                setEmail(e.target.value)
                if (error) setError('')
              }}
              placeholder="you@company.com"
              className="flex-1 min-w-0 px-4 py-3 rounded-xl text-sm outline-none transition-all"
              style={{
                background: 'var(--bg-secondary)',
                border: `1px solid ${error ? 'rgba(239,68,68,0.6)' : 'var(--border)'}`,
                color: 'var(--text-primary)',
              }}
              onFocus={e => {
                e.currentTarget.style.borderColor = 'var(--border-accent)'
                e.currentTarget.style.boxShadow =
                  '0 0 0 3px var(--accent-subtle)'
              }}
              onBlur={e => {
                e.currentTarget.style.borderColor = error
                  ? 'rgba(239,68,68,0.6)'
                  : 'var(--border)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            />
            <Button type="submit" variant="primary" className="flex-shrink-0">
              Get early access
            </Button>
          </div>

          <AnimatePresence>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="text-xs"
                style={{ color: '#ef4444' }}
              >
                {error}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.form>
      )}
    </AnimatePresence>
  )
}

// ── Trust indicators ──────────────────────────────────────────────────────────

const TRUST_ITEMS = [
  { icon: '🔒', label: 'No credit card required' },
  { icon: '⚡', label: 'Set up in 60 seconds' },
  { icon: '🎁', label: 'Free plan forever' },
]

// ── Final CTA Section ─────────────────────────────────────────────────────────

export function FinalCTA() {
  const { cta } = content

  return (
    <section id="cta" className="relative section-py overflow-hidden">
      <BlobBackground />

      {/* Top gradient border */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, var(--accent), #6366f1, transparent)',
        }}
      />

      <div className="container-main relative z-10">
        <AnimatedSection className="flex flex-col items-center text-center gap-6 max-w-2xl mx-auto" variants={scaleIn}>
          {/* Badge */}
          <Badge>{cta.badge}</Badge>

          {/* Headline */}
          <h2
            className="text-h2 font-heading"
            style={{ color: 'var(--text-primary)' }}
          >
            Write better emails <GradientText>starting today</GradientText>
          </h2>

          {/* Subheadline */}
          <p
            className="text-base max-w-lg"
            style={{ color: 'var(--text-secondary)' }}
          >
            {cta.subheadline}
          </p>

          {/* Email form */}
          <div className="w-full mt-2">
            <EmailForm />
          </div>

          {/* Trust row */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-2"
          >
            {TRUST_ITEMS.map(({ icon, label }) => (
              <span
                key={label}
                className="flex items-center gap-1.5 text-xs"
                style={{ color: 'var(--text-muted)' }}
              >
                <span>{icon}</span>
                {label}
              </span>
            ))}
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  )
}
