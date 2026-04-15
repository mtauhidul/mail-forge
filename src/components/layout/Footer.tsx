import mailforgeLogo from '@/assets/mailforge.png'
import { GradientText } from '@/components/common/GradientText'
import { content } from '@/data/content'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

// ─── Social Icons ──────────────────────────────────────────────────────────
function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
    </svg>
  )
}

const socialIconMap: Record<string, React.ReactNode> = {
  twitter: <TwitterIcon />,
  github: <GitHubIcon />,
  linkedin: <LinkedInIcon />,
}

// ─── Footer Logo ───────────────────────────────────────────────────────────
function FooterLogo() {
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

// ─── Footer ───────────────────────────────────────────────────────────────
export function Footer() {
  const { tagline, columns, socials, copyright } = content.footer

  return (
    <footer
      className="relative mt-0 border-t"
      style={{
        borderColor: 'var(--border)',
        background: 'var(--bg-secondary)',
      }}
    >
      {/* Subtle top gradient line */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, var(--accent), transparent)',
        }}
      />

      <div className="container-main py-16">
        {/* Top: logo + columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <FooterLogo />
            <p
              className="mt-3 text-sm leading-relaxed max-w-[200px]"
              style={{ color: 'var(--text-muted)' }}
            >
              {tagline}
            </p>

            {/* Socials */}
            <div className="mt-5 flex items-center gap-2">
              {socials.map(({ label, href, icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.92 }}
                  className={cn(
                    'w-9 h-9 rounded-lg flex items-center justify-center transition-colors',
                    'hover:bg-[var(--accent-subtle)]'
                  )}
                  style={{
                    color: 'var(--text-muted)',
                    border: '1px solid var(--border)',
                  }}
                >
                  {socialIconMap[icon]}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map(col => (
            <div key={col.title}>
              <p
                className="text-xs font-semibold uppercase tracking-wider mb-4"
                style={{ color: 'var(--text-muted)' }}
              >
                {col.title}
              </p>
              <ul className="flex flex-col gap-2.5">
                {col.links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors hover:text-[var(--accent)]"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 border-t text-sm"
          style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
        >
          <p>{copyright}</p>
          <p>
            Built with <span style={{ color: 'var(--accent)' }}>♥</span> using{' '}
            <GradientText className="font-medium">
              React + Framer Motion
            </GradientText>
          </p>
        </div>
      </div>
    </footer>
  )
}
