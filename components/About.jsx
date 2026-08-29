const stats = [
  { value: "3+", label: "Years of Coding Experience", icon: "🚀" },
  { value: "20+", label: "Completed Projects", icon: "💼" },
  { value: "100%", label: "Client Satisfaction", icon: "⭐" },
];

const highlights = [
  "Clean, maintainable, and scalable code",
  "Modern UI/UX with accessibility in mind",
  "Full-stack solutions from database to deployment",
  "Continuous learning and staying ahead of trends",
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-indigo-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
            Who I Am
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            About Me
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500" />
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 shadow-2xl shadow-black/30 backdrop-blur-sm transition hover:border-cyan-400/20 sm:p-10">
            <h3 className="mb-4 text-2xl font-semibold text-white">
              Dedicated to building impactful digital experiences.
            </h3>
            <p className="mb-6 leading-relaxed text-slate-400">
              I am a passionate software developer who believes that great software
              is born from clean code, thoughtful architecture, and a deep
              understanding of users.
            </p>
            <p className="mb-8 leading-relaxed text-slate-400">
              My approach combines creativity with discipline. I write code that is
              easy to read, test, and maintain, and I never stop learning new
              tools, patterns, and technologies.
            </p>

            <ul className="space-y-3">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-300">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/20 text-cyan-400">
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-xl shadow-black/20 backdrop-blur-sm transition hover:-translate-y-1 hover:border-cyan-400/20"
              >
                <div className="text-4xl">{stat.icon}</div>
                <div>
                  <div className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-4xl font-extrabold text-transparent">
                    {stat.value}
                  </div>
                  <p className="mt-1 text-slate-400">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
