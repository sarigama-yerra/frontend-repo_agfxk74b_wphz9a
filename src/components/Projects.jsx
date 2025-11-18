import { Code2, Box, Globe } from "lucide-react";

const projects = [
  {
    title: "Realtime Collaboration App",
    description: "A Figma-like canvas with multiplayer cursors, comments, and versioning.",
    tags: ["React", "WebRTC", "Tailwind"],
  },
  {
    title: "Ecommerce Platform",
    description: "Headless storefront with product search, cart, and Stripe checkout.",
    tags: ["Next.js", "Stripe", "MongoDB"],
  },
  {
    title: "3D Product Configurator",
    description: "Interactive 3D viewer to customize and export models.",
    tags: ["Three.js", "Spline", "GLTF"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Featured Projects</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition">
              <div className="mb-4 flex items-center gap-2 text-slate-200">
                <Box size={18} className="text-blue-400" />
                <h3 className="font-semibold">{p.title}</h3>
              </div>
              <p className="text-slate-300/90 text-sm">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs rounded-full border border-white/10 bg-white/5 px-2 py-1 text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex gap-3">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 text-sm font-medium text-white">
            <Code2 size={16} />
            Start a project
          </a>
          <a href="#" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white">
            <Globe size={16} />
            View more
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    </section>
  );
}
