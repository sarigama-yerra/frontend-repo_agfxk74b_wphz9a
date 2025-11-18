import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/50 px-3 py-1 text-xs text-slate-200 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for freelance work
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Hi, I’m <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Your Name</span>
          </h1>
          <p className="mt-4 text-slate-300 text-lg">
            Full‑stack developer crafting modern, performant web apps with delightful UX.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="rounded-lg bg-white text-slate-900 px-4 py-2 font-medium hover:bg-slate-100 transition">
              View Projects
            </a>
            <a href="#contact" className="rounded-lg bg-white/10 text-white px-4 py-2 font-medium hover:bg-white/20 border border-white/10 transition">
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950" />
    </section>
  );
}
