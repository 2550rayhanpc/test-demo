const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack online store with shopping cart, Stripe payment integration, and admin dashboard.",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "AI Image Generator SaaS",
    description:
      "Generate stunning AI artwork from text prompts using OpenAI's API, with user galleries.",
    tags: ["React", "Node.js", "OpenAI API", "Tailwind"],
    gradient: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Task Management Dashboard",
    description:
      "Kanban-style productivity tool with drag-and-drop, real-time updates, and team collaboration.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    gradient: "from-emerald-400 to-teal-500",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
            Featured Work
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            A selection of real-world applications I&apos;ve built, focusing on
            performance, scalability, and modern user experience.
          </p>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500" />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <article
              key={idx}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/20 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-white/20"
            >
              <div className={`relative flex h-48 items-center justify-center bg-gradient-to-br ${project.gradient}`}>
                <span className="text-5xl font-extrabold text-white/20">{idx + 1}</span>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-cyan-300">
                  {project.title}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button className="group/btn flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:-translate-y-0.5 hover:shadow-indigo-500/40">
                    Live Demo
                    <ExternalIcon />
                  </button>
                  <button className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10">
                    GitHub Code
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExternalIcon() {
  return (
    <svg className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M7 17L17 7M17 7H7M17 7V17" />
    </svg>
  );
}
