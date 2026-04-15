import type { Variants } from 'framer-motion'

/* ============================================
   Fade Variants
   ============================================ */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

/* ============================================
   Container / Stagger Variants
   ============================================ */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
}

export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

/* ============================================
   Scale Variants
   ============================================ */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
}

export const scaleInSpring: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 20,
    },
  },
}

/** Spring-bounce scale + rise. Good for demo reveals and pricing cards. */
export const springScaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.88, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 140,
      damping: 18,
    },
  },
}

/** Blur-to-clear + rise. Premium feel for feature/tech sections. */
export const blurInUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

/** Slight rotation + rise. Playful for persona/use-case cards. */
export const rotateInUp: Variants = {
  hidden: { opacity: 0, y: 40, rotate: 2.5 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { type: 'spring', stiffness: 120, damping: 18 },
  },
}

/* ============================================
   Slide Variants
   ============================================ */
export const slideInFromLeft: Variants = {
  hidden: { x: '-100%', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 80, damping: 20 },
  },
  exit: {
    x: '-100%',
    opacity: 0,
    transition: { duration: 0.3, ease: 'easeIn' },
  },
}

export const slideInFromRight: Variants = {
  hidden: { x: '100%', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 80, damping: 20 },
  },
  exit: {
    x: '100%',
    opacity: 0,
    transition: { duration: 0.3, ease: 'easeIn' },
  },
}

/* ============================================
   Card / Hover Variants
   ============================================ */
export const cardHover = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -6,
    scale: 1.02,
    transition: { duration: 0.25, ease: 'easeOut' },
  },
}

export const cardHoverGlow = {
  rest: { y: 0, boxShadow: '0 4px 16px rgba(0,0,0,0.15)' },
  hover: {
    y: -6,
    boxShadow: '0 20px 40px rgba(139, 92, 246, 0.3)',
    transition: { duration: 0.25, ease: 'easeOut' },
  },
}

/* ============================================
   Button Variants
   ============================================ */
export const buttonTap = {
  tap: { scale: 0.96 },
}

/* ============================================
   Hero Specific
   ============================================ */
export const heroContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

export const heroItem: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

/* ============================================
   Floating / Ambient
   ============================================ */
export const floatAnimation = {
  animate: {
    y: [0, -16, 0],
    transition: {
      duration: 6,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
}

export const floatAnimationSlow = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 9,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
}

export const pulseGlow = {
  animate: {
    opacity: [0.4, 0.8, 0.4],
    scale: [1, 1.08, 1],
    transition: {
      duration: 4,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
}

/* ============================================
   Viewport Defaults (use with whileInView)
   ============================================ */
export const viewportOnce = { once: true, margin: '-80px' }
