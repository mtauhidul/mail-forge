import { AnimatedSection } from '@/components/common/AnimatedSection'
import { Badge } from '@/components/common/Badge'
import { Button } from '@/components/common/Button'
import { GradientText } from '@/components/common/GradientText'
import { ParallaxBlob } from '@/components/effects/ParallaxBlob'
import { content } from '@/data/content'
import { fadeInDown, springScaleUp, viewportOnce } from '@/lib/animations'
import { AnimatePresence, motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useState } from 'react'

// ── Billing toggle ────────────────────────────────────────────────────────────

function BillingToggle({
  annual,
  setAnnual,
}: {
  annual: boolean
  setAnnual: (v: boolean) => void
}) {
  return (
    <div className="flex items-center gap-3 flex-wrap justify-center">
      <div
        className="flex items-center rounded-full p-1"
        style={{
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border)',
        }}
      >
        <button
          onClick={() => setAnnual(false)}
          className="px-4 py-1.5 rounded-full text-sm font-medium transition-all"
          style={{
            background: !annual ? 'var(--bg-primary)' : 'transparent',
            color: !annual ? 'var(--text-primary)' : 'var(--text-muted)',
            boxShadow: !annual ? 'var(--shadow-sm)' : 'none',
          }}
        >
          Monthly
        </button>
        <button
          onClick={() => setAnnual(true)}
          className="px-4 py-1.5 rounded-full text-sm font-medium transition-all"
          style={{
            background: annual ? 'var(--bg-primary)' : 'transparent',
            color: annual ? 'var(--text-primary)' : 'var(--text-muted)',
            boxShadow: annual ? 'var(--shadow-sm)' : 'none',
          }}
        >
          Annual
        </button>
      </div>

      <AnimatePresence>
        {annual && (
          <motion.span
            initial={{ opacity: 0, scale: 0.85, x: -8 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.85, x: -8 }}
            transition={{ duration: 0.2 }}
            className="text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{
              background: 'rgba(16,185,129,0.1)',
              color: '#10b981',
              border: '1px solid rgba(16,185,129,0.25)',
            }}
          >
            Save 20%
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  )
}

// ── Single pricing card ───────────────────────────────────────────────────────

type Plan = (typeof content.pricing.plans)[number]

function PricingCard({ plan, annual }: { plan: Plan; annual: boolean }) {
  const price = annual ? plan.price.annual : plan.price.monthly
  const isHighlighted = plan.highlighted

  return (
    <motion.div
      variants={springScaleUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      whileHover={
        !isHighlighted ? { y: -4, transition: { duration: 0.2 } } : undefined
      }
      className="relative flex flex-col rounded-2xl overflow-hidden"
      style={{
        background: isHighlighted ? 'var(--bg-card)' : 'var(--bg-card)',
        border: isHighlighted
          ? '1px solid var(--border-accent)'
          : '1px solid var(--border)',
        boxShadow: isHighlighted ? 'var(--shadow-glow)' : 'var(--shadow-sm)',
        // Pro card floats slightly above others
        transform: isHighlighted ? 'translateY(-8px)' : undefined,
        zIndex: isHighlighted ? 1 : 0,
      }}
    >
      {/* Most popular badge */}
      {plan.badge && (
        <div
          className="text-center py-2 text-xs font-semibold tracking-wide"
          style={{
            background: 'linear-gradient(90deg, var(--accent), #6366f1)',
            color: '#fff',
          }}
        >
          ✦ {plan.badge}
        </div>
      )}

      <div className="p-7 flex flex-col gap-6 flex-1">
        {/* Plan name + desc */}
        <div>
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-1"
            style={{
              color: isHighlighted ? 'var(--accent)' : 'var(--text-muted)',
            }}
          >
            {plan.name}
          </p>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            {plan.desc}
          </p>
        </div>

        {/* Price */}
        <div className="min-h-[56px] flex items-end gap-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${plan.name}-${annual ? 'annual' : 'monthly'}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="flex items-end gap-1"
            >
              {price === null ? (
                <span
                  className="text-4xl font-bold font-heading"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Custom
                </span>
              ) : price === 0 ? (
                <span
                  className="text-4xl font-bold font-heading"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Free
                </span>
              ) : (
                <>
                  <span
                    className="text-lg font-medium self-start mt-2"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    $
                  </span>
                  <span
                    className="text-4xl font-bold font-heading leading-none"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {price}
                  </span>
                  <span
                    className="text-sm mb-1"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    /mo
                  </span>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Divider */}
        <div className="h-px" style={{ background: 'var(--border)' }} />

        {/* Feature list */}
        <ul className="flex flex-col gap-2.5 flex-1">
          {plan.features.map(feature => (
            <li key={feature} className="flex items-start gap-2.5 text-sm">
              <span
                className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  background: isHighlighted
                    ? 'var(--accent-subtle)'
                    : 'var(--bg-tertiary)',
                }}
              >
                <Check
                  className="w-2.5 h-2.5"
                  style={{
                    color: isHighlighted
                      ? 'var(--accent)'
                      : 'var(--text-muted)',
                  }}
                />
              </span>
              <span style={{ color: 'var(--text-secondary)' }}>{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Button variant={plan.ctaVariant} className="w-full justify-center">
          {plan.cta}
        </Button>
      </div>
    </motion.div>
  )
}

// ── Pricing Section ───────────────────────────────────────────────────────────

export function Pricing() {
  const [annual, setAnnual] = useState(false)
  const { pricing } = content

  return (
    <section id="pricing" className="section-py relative overflow-hidden">
      <ParallaxBlob
        color="var(--orb-2)"
        size={500}
        distance={-60}
        className="-bottom-20 -right-20"
      />
      <ParallaxBlob
        color="var(--orb-1)"
        size={380}
        distance={-45}
        className="top-10 -left-28"
      />
      <div className="container-main relative z-10">
        {/* Section header */}
        <AnimatedSection className="text-center mb-14 space-y-4" variants={fadeInDown}>
          <Badge>{pricing.badge}</Badge>
          <h2
            className="text-h2 font-heading"
            style={{ color: 'var(--text-primary)' }}
          >
            {pricing.headline.includes('free') ? (
              <>
                Start <GradientText>free</GradientText>, scale when ready
              </>
            ) : (
              pricing.headline
            )}
          </h2>
          <p className="text-base" style={{ color: 'var(--text-secondary)' }}>
            {pricing.subheadline}
          </p>
          <div className="pt-2">
            <BillingToggle annual={annual} setAnnual={setAnnual} />
          </div>
        </AnimatedSection>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start max-w-5xl mx-auto">
          {pricing.plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} annual={annual} />
          ))}
        </div>

        {/* Footer note */}
        <AnimatedSection className="text-center mt-10">
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            All plans include a 14-day free trial · No credit card required ·
            Cancel anytime
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
