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
import { fadeInDown, scaleIn } from '@/lib/animations'
import { motion } from 'framer-motion'

function PulseIcon({ icon }: { icon: string }) {
  return (
    <div className="relative flex items-center justify-center w-14 h-14 mb-5 shrink-0">
      <motion.span
        className="absolute inset-0 rounded-2xl"
        style={{
          background: 'var(--accent-subtle)',
          border: '1px solid var(--border-accent)',
        }}
        animate={{ opacity: [0.4, 0.85, 0.4], scale: [1, 1.06, 1] }}
        transition={{ duration: 3.5, ease: 'easeInOut', repeat: Infinity }}
      />
      <span className="relative" style={{ color: 'var(--accent)' }}>
        <Icon name={icon} size={22} />
      </span>
    </div>
  )
}

export function Problem() {
  const { badge, headline, subheadline, items } = content.problem
  // Decorative bg blob moves slower than the scroll — depth illusion
  const { ref: blobRef, y: blobY } = useParallax({ distance: -60 })

  return (
    <section id="problem" className="section-py relative overflow-hidden">
      {/* Parallax accent blob — purely decorative */}
      <motion.div
        ref={blobRef}
        style={{
          y: blobY,
          background: 'radial-gradient(circle, var(--orb-1) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        aria-hidden
      />

      <div className="container-main relative">
        {/* Header */}
        <AnimatedSection className="text-center mb-14" variants={fadeInDown}>
          <Badge variant="muted" className="mb-4">
            {badge}
          </Badge>
          <h2
            className="text-h2 font-heading max-w-2xl mx-auto"
            style={{ color: 'var(--text-primary)' }}
          >
            <GradientText>
              {headline.split(' ').slice(0, 2).join(' ')}
            </GradientText>{' '}
            {headline.split(' ').slice(2).join(' ')}
          </h2>
          <p
            className="mt-4 text-lg max-w-xl mx-auto leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            {subheadline}
          </p>
        </AnimatedSection>

        {/* Pain point cards grid — 2 cols then 3 on last row at lg */}
        <AnimatedGroup
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          staggerDelay={0.09}
        >
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              variants={scaleIn}
              className={i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}
            >
              <GlassCard hover className="p-6 h-full flex flex-col">
                <PulseIcon icon={item.icon} />
                <h3
                  className="text-base font-heading font-semibold mb-2"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {item.desc}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </AnimatedGroup>
      </div>
    </section>
  )
}
