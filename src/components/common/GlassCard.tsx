import { motion } from 'framer-motion'
import type { CSSProperties } from 'react'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
  style?: CSSProperties
}

export function GlassCard({
  children,
  className = '',
  hover = false,
  onClick,
  style,
}: GlassCardProps) {
  return (
    <motion.div
      className={`glass rounded-2xl ${className}`}
      style={style}
      whileHover={hover ? { boxShadow: 'var(--shadow-glow)' } : undefined}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  )
}
