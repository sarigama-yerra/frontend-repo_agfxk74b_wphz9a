import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="absolute inset-0 opacity-30 mix-blend-soft-light" style={{backgroundImage:'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize:'40px 40px'}} />

      <div className="relative">
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <About />
          <Contact />
        </main>

        <footer className="py-10">
          <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400">
            <p className="text-sm">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
            <div className="text-xs">
              Built with React, Tailwind and a playful Spline scene.
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App