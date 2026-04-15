import { motion } from 'framer-motion'
import { lazy, Suspense } from 'react'
import { CursorGlow } from './components/effects/CursorGlow'
import { ScrollProgress } from './components/effects/ScrollProgress'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { Hero } from './components/sections/Hero'

// Below-fold sections — lazily loaded after initial paint
const Problem      = lazy(() => import('./components/sections/Problem').then(m => ({ default: m.Problem })))
const HowItWorks   = lazy(() => import('./components/sections/HowItWorks').then(m => ({ default: m.HowItWorks })))
const Features     = lazy(() => import('./components/sections/Features').then(m => ({ default: m.Features })))
const Demo         = lazy(() => import('./components/sections/Demo').then(m => ({ default: m.Demo })))
const UseCases     = lazy(() => import('./components/sections/UseCases').then(m => ({ default: m.UseCases })))
const Testimonials = lazy(() => import('./components/sections/Testimonials').then(m => ({ default: m.Testimonials })))
const Pricing      = lazy(() => import('./components/sections/Pricing').then(m => ({ default: m.Pricing })))
const FinalCTA     = lazy(() => import('./components/sections/FinalCTA').then(m => ({ default: m.FinalCTA })))

function App() {
  return (
    <motion.div
      className="relative min-h-screen"
      style={{ background: 'var(--bg-primary)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <CursorGlow />
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <div className="section-divider" />
          <Problem />
          <div className="section-divider" />
          <HowItWorks />
          <div className="section-divider" />
          <Features />
          <div className="section-divider" />
          <Demo />
          <div className="section-divider" />
          <UseCases />
          <div className="section-divider" />
          <Testimonials />
          <div className="section-divider" />
          <Pricing />
          <div className="section-divider" />
          <FinalCTA />
        </Suspense>
      </main>
      <Footer />
    </motion.div>
  )
}

export default App
