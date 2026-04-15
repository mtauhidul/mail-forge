import { fadeInUp, viewportOnce } from '@/lib/animations'
import type { Variants } from 'framer-motion'
import { motion } from 'framer-motion'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  variants?: Variants
  delay?: number
  id?: string
}

export function AnimatedSection({
  children,
  className = '',
  variants = fadeInUp,
  delay = 0,
  id,
}: AnimatedSectionProps) {
  return (
    <motion.div
      id={id}
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

interface AnimatedGroupProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  id?: string
}

// Staggered container — children animate in sequence
export function AnimatedGroup({
  children,
  className = '',
  staggerDelay = 0.1,
  id,
}: AnimatedGroupProps) {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: staggerDelay, delayChildren: 0.05 },
    },
  }

  return (
    <motion.div
      id={id}
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {children}
    </motion.div>
  )
}
