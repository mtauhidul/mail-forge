import { motion, useScroll, useTransform } from 'framer-motion'

interface OrbBackgroundProps {
  className?: string
  orb1ClassName?: string
  orb2ClassName?: string
  /** Enable scroll-driven parallax. Set true in the Hero. */
  parallax?: boolean
}

export function OrbBackground({
  className = '',
  orb1ClassName = '',
  orb2ClassName = '',
  parallax = false,
}: OrbBackgroundProps) {
  const { scrollY } = useScroll()

  // Orb 1 drifts upward slowly; orb 2 faster — creates a sense of depth
  const y1 = useTransform(scrollY, [0, 700], [0, parallax ? -70 : 0])
  const y2 = useTransform(scrollY, [0, 700], [0, parallax ? -130 : 0])

  return (
    <div className={`orb-container ${className}`} aria-hidden="true">
      <motion.div className={`orb orb-1 ${orb1ClassName}`} style={{ y: y1, willChange: 'transform' }} />
      <motion.div className={`orb orb-2 ${orb2ClassName}`} style={{ y: y2, willChange: 'transform' }} />
    </div>
  )
}
