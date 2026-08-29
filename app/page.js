export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center px-6 text-center max-w-4xl mx-auto">
      
      {/* Badge */}
      <div className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold text-cyan-400 bg-cyan-950/60 border border-cyan-800/80 rounded-full">
        🚀 Open for Freelance & Full-time Roles
      </div>

      {/* Main Title */}
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
        Hi, I'm <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">Rayhan Islam</span>
      </h1>

      {/* Subtitle */}
      <p className="text-xl md:text-2xl font-medium text-slate-300 mb-6">
        Full-Stack Web Developer & UI Designer
      </p>

      {/* Description */}
      <p className="text-slate-400 text-base md:text-lg max-w-2xl mb-10 leading-relaxed">
        I build modern, fast, and responsive web applications using Next.js, React, and Tailwind CSS. Focused on creating smooth user experiences and clean code.
      </p>

      {/* Call to Actions */}
      <div className="flex flex-col sm:flex-row gap-4">
        <a 
          href="#contact" 
          className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-6 py-3 rounded-xl transition duration-300 shadow-lg shadow-cyan-500/20"
        >
          Get in Touch
        </a>
        <a 
          href="#projects" 
          className="border border-slate-700 hover:border-slate-500 bg-slate-900/50 text-slate-200 font-semibold px-6 py-3 rounded-xl transition duration-300"
        >
          View Projects
        </a>
      </div>

    </main>
  );
}
