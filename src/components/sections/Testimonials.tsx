import { AnimatedSection } from '@/components/common/AnimatedSection'
import { Badge } from '@/components/common/Badge'
import { GradientText } from '@/components/common/GradientText'
import { ParallaxBlob } from '@/components/effects/ParallaxBlob'
import { content } from '@/data/content'
import { testimonials } from '@/data/mockData'
import { motion } from 'framer-motion'

// ─── Star rating ─────────────────────────────────────────────────────────────
function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i < rating ? '#f59e0b' : 'none'}
          stroke={i < rating ? '#f59e0b' : 'var(--border)'}
          strokeWidth="1.5"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

// ─── Avatar ──────────────────────────────────────────────────────────────────
const avatarColors = [
  'linear-gradient(135deg,#6366f1,#8b5cf6)',
  'linear-gradient(135deg,#06b6d4,#3b82f6)',
  'linear-gradient(135deg,#10b981,#06b6d4)',
  'linear-gradient(135deg,#f59e0b,#ef4444)',
  'linear-gradient(135deg,#ec4899,#8b5cf6)',
  'linear-gradient(135deg,#8b5cf6,#ec4899)',
]

function Avatar({ initials, index }: { initials: string; index: number }) {
  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
      style={{ background: avatarColors[index % avatarColors.length] }}
    >
      {initials}
    </div>
  )
}

// ─── Single testimonial card ──────────────────────────────────────────────────
interface TestimonialCardProps {
  name: string
  role: string
  company: string
  avatar: string
  rating: number
  text: string
  index: number
}

function TestimonialCard({
  name,
  role,
  company,
  avatar,
  rating,
  text,
  index,
}: TestimonialCardProps) {
  return (
    <div className="glass rounded-2xl p-6 flex flex-col gap-4 shrink-0 w-[280px] xs:w-[320px] sm:w-[360px]">
      <Stars rating={rating} />
      <p
        className="text-sm leading-relaxed flex-1"
        style={{ color: 'var(--text-secondary)' }}
      >
        "{text}"
      </p>
      <div
        className="flex items-center gap-3 pt-1 border-t"
        style={{ borderColor: 'var(--border)' }}
      >
        <Avatar initials={avatar} index={index} />
        <div>
          <p
            className="text-sm font-semibold"
            style={{ color: 'var(--text-primary)' }}
          >
            {name}
          </p>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            {role} · {company}
          </p>
        </div>
      </div>
    </div>
  )
}

// ─── Infinite scroll track ────────────────────────────────────────────────────
// Duplicates the list so the CSS animation loops seamlessly
function CarouselTrack() {
  const doubled = [...testimonials, ...testimonials]

  return (
    <div className="relative overflow-hidden">
      {/* Fade masks on edges */}
      <div
        className="absolute inset-y-0 left-0 w-12 sm:w-24 z-10 pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, var(--bg-primary), transparent)',
        }}
      />
      <div
        className="absolute inset-y-0 right-0 w-12 sm:w-24 z-10 pointer-events-none"
        style={{
          background:
            'linear-gradient(to left, var(--bg-primary), transparent)',
        }}
      />

      {/* Scrolling row */}
      <motion.div
        className="flex gap-5 w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 40,
          ease: 'linear',
          repeat: Infinity,
        }}
        style={{ willChange: 'transform' }}
      >
        {doubled.map((t, i) => (
          <TestimonialCard
            key={`${t.name}-${i}`}
            name={t.name}
            role={t.role}
            company={t.company}
            avatar={t.avatar}
            rating={t.rating}
            text={t.text}
            index={i % testimonials.length}
          />
        ))}
      </motion.div>
    </div>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────
export function Testimonials() {
  const { badge } = content.testimonials

  return (
    <section id="testimonials" className="section-py relative overflow-hidden">
      {/* Parallax bg blobs for depth */}
      <ParallaxBlob
        color="var(--orb-2)"
        size={600}
        distance={-70}
        className="-bottom-40 -left-40"
      />
      <ParallaxBlob
        color="var(--orb-1)"
        size={400}
        distance={-40}
        className="-top-20 right-0"
      />
      <div className="container-main relative z-10">
        <AnimatedSection className="text-center mb-14">
          <Badge variant="success" dot className="mb-4">
            {badge}
          </Badge>
          <h2
            className="text-h2 font-heading max-w-xl mx-auto"
            style={{ color: 'var(--text-primary)' }}
          >
            What our users <GradientText>say</GradientText>
          </h2>
        </AnimatedSection>
      </div>

      {/* Full-bleed carousel — outside container-main so it spans viewport */}
      <AnimatedSection delay={0.1}>
        <CarouselTrack />
      </AnimatedSection>
    </section>
  )
}
