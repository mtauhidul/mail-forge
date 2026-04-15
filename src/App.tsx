import { motion } from 'framer-motion'
import { useTheme } from './contexts/ThemeContext'
import { fadeInUp, staggerContainer } from './lib/animations'

function App() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <div className="relative min-h-screen" style={{ background: 'var(--bg-primary)' }}>

      {/* Orb atmosphere */}
      <div className="orb-container">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
      </div>

      {/* Theme toggle */}
      <div className="fixed top-4 right-4 z-50">
        <button onClick={toggleTheme} className="btn-secondary text-sm">
          {isDark ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>

      {/* Smoke test */}
      <motion.div
        className="container-main section-py relative z-10 flex flex-col items-center gap-12 text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={fadeInUp}>
          <span className="badge">✦ Aether Design System</span>
        </motion.div>

        {/* Headline */}
        <motion.h1 variants={fadeInUp} className="text-hero font-heading" style={{ color: 'var(--text-primary)' }}>
          Write perfect emails<br />
          <span className="text-gradient">in 10 seconds</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p variants={fadeInUp} className="text-lg max-w-lg" style={{ color: 'var(--text-secondary)' }}>
          AI-powered email assistant. Design system is live — one accent color, orb atmosphere, clean type.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3">
          <button className="btn-primary">Get started free</button>
          <button className="btn-secondary">See how it works →</button>
        </motion.div>

        {/* Cards */}
        <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl mt-4">
          {[
            { label: 'Cold Outreach', desc: 'Emails that get replies' },
            { label: 'Follow-ups',    desc: 'Never miss a reply' },
            { label: 'Newsletters',   desc: 'Engage your audience' },
          ].map(({ label, desc }) => (
            <div key={label} className="card p-5 text-left">
              <div className="badge mb-3">{label}</div>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Glass card */}
        <motion.div variants={fadeInUp} className="glass rounded-2xl p-6 max-w-sm w-full text-left">
          <p className="text-sm font-medium mb-1" style={{ color: 'var(--text-primary)' }}>Glass surface</p>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            {isDark ? 'Dark mode' : 'Light mode'} — backdrop blur + subtle border
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default App
