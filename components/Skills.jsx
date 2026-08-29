const skillCategories = [
  {
    title: "Frontend",
    color: "bg-cyan-500",
    skills: ["React", "Next.js", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "HTML5/CSS3"],
  },
  {
    title: "Backend",
    color: "bg-violet-500",
    skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs"],
  },
  {
    title: "Tools & Others",
    color: "bg-emerald-500",
    skills: ["Git", "GitHub", "Vercel", "Docker", "VS Code", "Figma"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-white/[0.01] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
            My Expertise
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Skills & Technologies
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            A curated toolkit of modern technologies I use to design, build, and
            deploy scalable web applications.
          </p>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500" />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-black/20 backdrop-blur-sm transition hover:border-white/20 sm:p-8"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className={`h-1 w-8 rounded-full ${category.color}`} />
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="group rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center text-sm font-medium text-slate-300 transition-all hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.06] hover:text-white"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
