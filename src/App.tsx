import { ScrollProgress } from './components/effects/ScrollProgress'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { Demo } from './components/sections/Demo'
import { Features } from './components/sections/Features'
import { Hero } from './components/sections/Hero'
import { HowItWorks } from './components/sections/HowItWorks'
import { Problem } from './components/sections/Problem'

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
      </main>
      <Footer />
    </div>
  )
}

export default App
