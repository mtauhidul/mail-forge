import mailforgeLogo from '@/assets/mailforge.png'
import { Button } from '@/components/common/Button'
import { useTheme } from '@/contexts/ThemeContext'
import { content } from '@/data/content'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const SCROLL_THRESHOLD = 20

// ─── Logo ──────────────────────────────────────────────────────────────────
function Logo() {
  return (
    <a
      href="#"
      className="flex items-center gap-2.5 select-none focus-visible:outline-none"
    >
      <img
        src={mailforgeLogo}
        alt="MailForgeAI logo"
        className="w-8 h-8 rounded-lg object-cover"
      />
      <span
        className="text-lg font-heading font-bold tracking-tight"
        style={{ color: 'var(--text-primary)' }}
      >
        {content.nav.logo}
        <span
          className="ml-0.5 text-xs font-semibold align-super"
          style={{ color: 'var(--accent)' }}
        >
          AI
        </span>
      </span>
    </a>
  )
}

// ─── Theme Toggle ──────────────────────────────────────────────────────────
function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()
  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.92 }}
      aria-label="Toggle theme"
      className={cn(
        'w-9 h-9 rounded-lg flex items-center justify-center transition-colors focus-visible:outline-none',
        'hover:bg-[var(--bg-tertiary)]'
      )}
      style={{
        color: 'var(--text-secondary)',
        border: '1px solid var(--border)',
      }}
    >
      {isDark ? (
        // Sun icon
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ) : (
        // Moon icon
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </motion.button>
  )
}

import type { Variants } from 'framer-motion'

// ─── Mobile Menu ───────────────────────────────────────────────────────────
const drawerVariants: Variants = {
  hidden:  { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -8 },
}

// ─── Header ───────────────────────────────────────────────────────────────
export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route-like navigation (anchor click)
  const handleNavClick = () => setMenuOpen(false)

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-40 transition-all duration-300',
        scrolled ? 'py-2 backdrop-blur-xl shadow-sm' : 'py-4'
      )}
      style={{
        background: scrolled ? 'var(--glass-bg)' : 'transparent',
        borderBottom: scrolled
          ? '1px solid var(--border)'
          : '1px solid transparent',
      }}
    >
      <div className="container-main flex items-center justify-between">
        <Logo />

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-1"
          aria-label="Main navigation"
        >
          {content.nav.links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                'px-3.5 py-2 text-sm font-medium rounded-lg transition-colors',
                'hover:bg-[var(--bg-tertiary)]'
              )}
              style={{ color: 'var(--text-secondary)' }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <Button size="sm">{content.nav.cta}</Button>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <motion.button
            onClick={() => setMenuOpen(v => !v)}
            whileTap={{ scale: 0.92 }}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className={cn(
              'w-9 h-9 rounded-lg flex flex-col items-center justify-center gap-[5px]',
              'transition-colors hover:bg-[var(--bg-tertiary)]'
            )}
            style={{ border: '1px solid var(--border)' }}
          >
            <motion.span
              className="block h-[1.5px] w-5 rounded-full"
              style={{ background: 'var(--text-primary)' }}
              animate={menuOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-[1.5px] w-5 rounded-full"
              style={{ background: 'var(--text-primary)' }}
              animate={
                menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }
              }
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-[1.5px] w-5 rounded-full"
              style={{ background: 'var(--text-primary)' }}
              animate={
                menuOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.2 }}
            />
          </motion.button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden"
            style={{
              background: 'var(--glass-bg)',
              borderTop: '1px solid var(--border)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <nav
              className="container-main py-4 flex flex-col gap-1"
              aria-label="Mobile navigation"
            >
              {content.nav.links.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="px-3 py-2.5 text-sm font-medium rounded-lg transition-colors hover:bg-[var(--bg-tertiary)]"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {link.label}
                </a>
              ))}
              <div
                className="pt-3 mt-1 border-t"
                style={{ borderColor: 'var(--border)' }}
              >
                <Button
                  size="sm"
                  className="w-full justify-center"
                  onClick={handleNavClick}
                >
                  {content.nav.cta}
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
