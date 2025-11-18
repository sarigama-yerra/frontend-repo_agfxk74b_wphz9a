export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
          <p className="text-slate-300 leading-relaxed">
            I’m a developer focused on building fast, accessible and beautiful web experiences.
            I love working across the stack—from polished interfaces to robust APIs and data systems.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-slate-300">Years Experience</p>
              <p className="mt-2 text-2xl font-semibold text-white">5+</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-slate-300">Projects Shipped</p>
              <p className="mt-2 text-2xl font-semibold text-white">30+</p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 p-6">
          <ul className="grid sm:grid-cols-2 gap-3 text-sm text-slate-200">
            <li className="rounded-lg bg-white/5 px-3 py-2">React / Next.js</li>
            <li className="rounded-lg bg-white/5 px-3 py-2">TypeScript</li>
            <li className="rounded-lg bg-white/5 px-3 py-2">Node.js</li>
            <li className="rounded-lg bg-white/5 px-3 py-2">FastAPI</li>
            <li className="rounded-lg bg-white/5 px-3 py-2">MongoDB</li>
            <li className="rounded-lg bg-white/5 px-3 py-2">Tailwind CSS</li>
          </ul>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    </section>
  );
}
