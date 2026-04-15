import { useEffect, useRef } from 'react'

/**
 * Subtle cursor glow that follows the mouse on desktop.
 * Hidden on touch/coarse-pointer devices.
 * Uses rAF for smooth 60fps updates with no React re-renders.
 */
export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Skip on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    const el = glowRef.current
    if (!el) return

    let rafId: number
    let targetX = -200
    let targetY = -200
    let currentX = -200
    let currentY = -200

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX
      targetY = e.clientY
    }

    const loop = () => {
      // Lerp toward mouse position for a smooth trailing feel
      currentX += (targetX - currentX) * 0.12
      currentY += (targetY - currentY) * 0.12
      el.style.transform = `translate(${currentX}px, ${currentY}px)`
      rafId = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    rafId = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block"
      style={{
        width: 480,
        height: 480,
        marginLeft: -240,
        marginTop: -240,
        borderRadius: '50%',
        background:
          'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)',
        willChange: 'transform',
      }}
    />
  )
}
