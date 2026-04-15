import {
  AnimatedGroup,
  AnimatedSection,
} from '@/components/common/AnimatedSection'
import { Badge } from '@/components/common/Badge'
import { GradientText } from '@/components/common/GradientText'
import { Icon } from '@/components/common/Icon'
import { ParallaxBlob } from '@/components/effects/ParallaxBlob'
import { content } from '@/data/content'
import { rotateInUp } from '@/lib/animations'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

// Per-persona accent colours — pairs with the icon's vibe
const personaColors: Record<
  number,
  { glow: string; ring: string; bg: string }
> = {
  0: {
    glow: 'rgba(99,102,241,0.35)',
    ring: 'rgba(99,102,241,0.25)',
    bg: 'rgba(99,102,241,0.08)',
  }, // Sales  – indigo
  1: {
    glow: 'rgba(245,158,11,0.35)',
    ring: 'rgba(245,158,11,0.25)',
    bg: 'rgba(245,158,11,0.08)',
  }, // Entrepreneurs – amber
  2: {
    glow: 'rgba(16,185,129,0.35)',
    ring: 'rgba(16,185,129,0.25)',
    bg: 'rgba(16,185,129,0.08)',
  }, // Students – emerald
  3: {
    glow: 'rgba(6,182,212,0.35)',
    ring: 'rgba(6,182,212,0.25)',
    bg: 'rgba(6,182,212,0.08)',
  }, // Non-native – cyan
  4: {
    glow: 'rgba(168,85,247,0.35)',
    ring: 'rgba(168,85,247,0.25)',
    bg: 'rgba(168,85,247,0.08)',
  }, // Job seekers – violet
  5: {
    glow: 'rgba(236,72,153,0.35)',
    ring: 'rgba(236,72,153,0.25)',
    bg: 'rgba(236,72,153,0.08)',
  }, // Support – pink
}

interface PersonaCardProps {
  icon: string
  title: string
  desc: string
  index: number
}

function PersonaCard({ icon, title, desc, index }: PersonaCardProps) {
  const colors = personaColors[index]

  return (
    <motion.div
      variants={rotateInUp}
      whileHover={{
        y: -6,
        boxShadow: `0 20px 48px ${colors.glow}`,
        transition: { duration: 0.22, ease: 'easeOut' },
      }}
      className={cn(
        'glass rounded-2xl p-6 flex flex-col gap-4 cursor-default',
        'transition-colors'
      )}
    >
      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
        style={{ background: colors.bg, border: `1px solid ${colors.ring}`, color: colors.ring.replace('0.25', '0.9') }}
      >
        <Icon name={icon} size={20} />
      </div>

      <div>
        <h3
          className="text-base font-heading font-semibold mb-1.5"
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
    </motion.div>
  )
}

export function UseCases() {
  const { badge, items } = content.useCases

  return (
    <section id="use-cases" className="section-py relative overflow-hidden">
      <ParallaxBlob
        color="var(--orb-2)"
        size={520}
        distance={-65}
        className="-bottom-24 -right-24"
      />
      <div className="container-main relative z-10">
        <AnimatedSection className="text-center mb-14">
          <Badge variant="muted" className="mb-4">
            {badge}
          </Badge>
          <h2
            className="text-h2 font-heading max-w-2xl mx-auto"
            style={{ color: 'var(--text-primary)' }}
          >
            <GradientText>Great emails</GradientText> for every profession
          </h2>
        </AnimatedSection>

        <AnimatedGroup
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          staggerDelay={0.08}
        >
          {items.map((item, i) => (
            <PersonaCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
              index={i}
            />
          ))}
        </AnimatedGroup>
      </div>
    </section>
  )
}
