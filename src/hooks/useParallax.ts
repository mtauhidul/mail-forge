import { useRef } from 'react'
import { useScroll, useTransform, type MotionValue } from 'framer-motion'

interface ParallaxOptions {
  distance?: number
}

export function useParallax(
  options: ParallaxOptions = {}
): { ref: React.RefObject<HTMLDivElement | null>; y: MotionValue<number> } {
  const { distance = -80 } = options
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'] as const,
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, distance])

  return { ref, y }
}
