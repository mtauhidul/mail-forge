import { motion } from 'framer-motion'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
}

export function GlassCard({
  children,
  className = '',
  hover = false,
  onClick,
}: GlassCardProps) {
  return (
    <motion.div
      className={`glass rounded-2xl ${className}`}
      whileHover={hover ? { boxShadow: 'var(--shadow-glow)' } : undefined}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  )
}
