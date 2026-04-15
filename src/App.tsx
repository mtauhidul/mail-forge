import { motion } from 'framer-motion'
import { useTheme } from './contexts/ThemeContext'
import { staggerContainer, fadeInUp } from './lib/animations'
import { AnimatedSection, AnimatedGroup } from './components/common/AnimatedSection'
import { GradientText } from './components/common/GradientText'
import { GlassCard } from './components/common/GlassCard'
import { Badge } from './components/common/Badge'
import { Button } from './components/common/Button'
import { OrbBackground } from './components/effects/OrbBackground'
import { ScrollProgress } from './components/effects/ScrollProgress'

function App() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <div className="relative min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      <ScrollProgress />

      {/* Theme toggle */}
      <div className="fixed top-4 right-4 z-50">
        <Button variant="secondary" size="sm" onClick={toggleTheme}>
          {isDark ? '☀️ Light' : '🌙 Dark'}
        </Button>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <OrbBackground />
        <motion.div
          className="container-main section-py relative z-10 flex flex-col items-center gap-8 text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeInUp}>
            <Badge dot>AI-powered email writing</Badge>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-hero font-heading max-w-3xl"
            style={{ color: 'var(--text-primary)' }}
          >
            Write perfect emails{' '}
            <GradientText>in 10 seconds</GradientText>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg max-w-xl"
            style={{ color: 'var(--text-secondary)' }}
          >
            MailForge AI writes professional, personalized emails for any scenario.
            Cold outreach, follow-ups, newsletters — just describe what you need.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3">
            <Button size="lg">Start writing for free</Button>
            <Button variant="secondary" size="lg">See how it works →</Button>
          </motion.div>

          <motion.p variants={fadeInUp} className="text-sm" style={{ color: 'var(--text-muted)' }}>
            No credit card required · Free plan available forever
          </motion.p>
        </motion.div>
      </section>

      <div className="section-divider" />

      {/* Component showcase */}
      <section className="container-main section-py">
        <AnimatedSection className="text-center mb-12">
          <Badge variant="muted" className="mb-4">Phase 2 — Component Library</Badge>
          <h2 className="text-h2 font-heading" style={{ color: 'var(--text-primary)' }}>
            All components ready
          </h2>
        </AnimatedSection>

        <AnimatedGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" staggerDelay={0.08}>
          {[
            { title: 'Button',          desc: 'Primary, secondary, ghost variants with loading state' },
            { title: 'Badge',           desc: 'Accent, success, warning, muted variants with dot' },
            { title: 'GlassCard',       desc: 'Glassmorphism card with hover glow effect' },
            { title: 'GradientText',    desc: 'Single-tone violet gradient, used sparingly' },
            { title: 'AnimatedSection', desc: 'Scroll-triggered fade-in-up with viewport detection' },
            { title: 'ScrollProgress',  desc: 'Top progress bar driven by scroll position' },
            { title: 'OrbBackground',   desc: 'Ambient atmosphere — blurred orbs, no garish gradients' },
            { title: 'content.ts',      desc: '100% of landing page copy in one editable file' },
            { title: 'mockData.ts',     desc: '4 email examples × 4 tones + 6 testimonials' },
          ].map(({ title, desc }) => (
            <motion.div key={title} variants={fadeInUp}>
              <GlassCard className="p-5 h-full">
                <p className="font-heading font-semibold text-sm mb-1.5" style={{ color: 'var(--accent)' }}>
                  {title}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {desc}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </AnimatedGroup>

        <AnimatedSection className="mt-10 flex flex-wrap justify-center gap-3">
          <Badge>Accent badge</Badge>
          <Badge variant="success" dot>Success badge</Badge>
          <Badge variant="warning">Warning badge</Badge>
          <Badge variant="muted">Muted badge</Badge>
        </AnimatedSection>

        <AnimatedSection className="mt-6 flex flex-wrap justify-center gap-3">
          <Button>Primary button</Button>
          <Button variant="secondary">Secondary button</Button>
          <Button variant="ghost">Ghost button</Button>
          <Button loading>Loading…</Button>
        </AnimatedSection>
      </section>
    </div>
  )
}

export default App
