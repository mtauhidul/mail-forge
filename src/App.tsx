import { ScrollProgress } from './components/effects/ScrollProgress'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { Hero } from './components/sections/Hero'

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
      </main>
      <Footer />
    </div>
  )
}

export default App
