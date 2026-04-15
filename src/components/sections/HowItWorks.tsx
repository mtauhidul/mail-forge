import {
  AnimatedGroup,
  AnimatedSection,
} from '@/components/common/AnimatedSection'
import { Badge } from '@/components/common/Badge'
import { GlassCard } from '@/components/common/GlassCard'
import { GradientText } from '@/components/common/GradientText'
import { Icon } from '@/components/common/Icon'
import { useParallax } from '@/hooks/useParallax'
import { content } from '@/data/content'
import { fadeInLeft } from '@/lib/animations'
import { motion } from 'framer-motion'

// Dashed connector line visible between step cards on desktop
function Connector() {
  return (
    <div
      className="hidden lg:flex items-center justify-center w-16 shrink-0 mt-[-2rem]"
      aria-hidden
    >
      <svg
        width="64"
        height="2"
        viewBox="0 0 64 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="0"
          y1="1"
          x2="64"
          y2="1"
          stroke="var(--border-accent)"
          strokeWidth="1.5"
          strokeDasharray="5 4"
        />
      </svg>
    </div>
  )
}

interface StepCardProps {
  number: string
  icon: string
  title: string
  desc: string
  index: number
}

function StepCard({ number, icon, title, desc, index }: StepCardProps) {
  // Each step number drifts at a slightly different speed for subtle depth
  const { ref, y } = useParallax({ distance: -30 - index * 12 })

  return (
    <motion.div variants={fadeInLeft} className="flex-1 min-w-0">
      <GlassCard
        hover
        className="p-7 h-full flex flex-col gap-4 relative overflow-hidden"
      >
        {/* Parallax anchor for the watermark number */}
        <div ref={ref} className="absolute inset-0 pointer-events-none" aria-hidden />

        {/* Large faint step number — parallaxes independently */}
        <motion.span
          style={{ y, color: 'var(--accent-subtle)', opacity: 0.6 }}
          className="absolute -top-3 -right-1 text-[6rem] font-heading font-black leading-none select-none pointer-events-none"
          aria-hidden
        >
          {number}
        </motion.span>

        {/* Icon badge */}
        <div
          className="relative z-10 flex items-center justify-center w-12 h-12 rounded-xl shrink-0"
          style={{
            background: 'var(--accent-subtle)',
            border: '1px solid var(--border-accent)',
            color: 'var(--accent)',
          }}
        >
          <Icon name={icon} size={20} />
        </div>

        {/* Step label */}
        <p
          className="relative z-10 text-xs font-semibold uppercase tracking-widest"
          style={{ color: 'var(--accent-light)' }}
        >
          Step {index + 1}
        </p>

        <div className="relative z-10">
          <h3
            className="text-base font-heading font-semibold mb-2"
            style={{ color: 'var(--text-primary)' }}
          >
            {title}
          </h3>
          <p
            className="text-sm leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            {desc}
          </p>
        </div>
      </GlassCard>
    </motion.div>
  )
}

export function HowItWorks() {
  const { badge, steps } = content.howItWorks

  return (
    <section id="how-it-works" className="section-py">
      <div className="container-main">
        {/* Header */}
        <AnimatedSection className="text-center mb-14">
          <Badge className="mb-4">{badge}</Badge>
          <h2
            className="text-h2 font-heading max-w-2xl mx-auto"
            style={{ color: 'var(--text-primary)' }}
          >
            From blank page to <GradientText>perfect email</GradientText> in
            three steps
          </h2>
        </AnimatedSection>

        {/* Steps row with connectors */}
        <AnimatedGroup
          className="flex flex-col lg:flex-row items-stretch gap-5 lg:gap-0"
          staggerDelay={0.12}
        >
          {steps.map((step, i) => (
            <div key={step.number} className="contents">
              <StepCard
                number={step.number}
                icon={step.icon}
                title={step.title}
                desc={step.desc}
                index={i}
              />
              {i < steps.length - 1 && <Connector />}
            </div>
          ))}
        </AnimatedGroup>
      </div>
    </section>
  )
}
