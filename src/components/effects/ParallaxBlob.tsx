/**
 * ParallaxBlob — a soft blurred circle that drifts on scroll.
 * Place as a direct child of a `position: relative` section.
 */
import { useParallax } from '@/hooks/useParallax'
import { motion } from 'framer-motion'

interface ParallaxBlobProps {
  /** Accent color of the blob (CSS color string) */
  color?: string
  /** Width/height in pixels */
  size?: number
  /** Parallax travel distance in px (negative = upward drift) */
  distance?: number
  /** Tailwind/CSS positioning classes */
  className?: string
}

export function ParallaxBlob({
  color = 'var(--accent)',
  size = 500,
  distance = -60,
  className = '',
}: ParallaxBlobProps) {
  const { ref, y } = useParallax({ distance })

  return (
    <motion.div
      ref={ref}
      style={{
        y,
        width: size,
        height: size,
        background: color,
        borderRadius: '50%',
        filter: 'blur(100px)',
        opacity: 0.07,
        position: 'absolute',
        pointerEvents: 'none',
      }}
      className={className}
      aria-hidden="true"
    />
  )
}
