import { ScrollProgress } from './components/effects/ScrollProgress'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { Demo } from './components/sections/Demo'
import { Features } from './components/sections/Features'
import { FinalCTA } from './components/sections/FinalCTA'
import { Hero } from './components/sections/Hero'
import { HowItWorks } from './components/sections/HowItWorks'
import { Pricing } from './components/sections/Pricing'
import { Problem } from './components/sections/Problem'
import { Testimonials } from './components/sections/Testimonials'
import { UseCases } from './components/sections/UseCases'

function App() {
  return (
    <div
      className="relative min-h-screen"
      style={{ background: 'var(--bg-primary)' }}
    >
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
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
      </main>
      <Footer />
    </div>
  )
}

export default App
