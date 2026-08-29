export default function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
      {/* Floating gradient orbs */}
      <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-[100px] animate-blob sm:h-96 sm:w-96" />
      <div className="animation-delay-2000 absolute right-1/4 top-0 h-72 w-72 rounded-full bg-indigo-500/20 blur-[100px] animate-blob sm:h-96 sm:w-96" />
      <div className="animation-delay-4000 absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-violet-500/20 blur-[100px] animate-blob sm:h-96 sm:w-96" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Top gradient fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950" />
    </div>
  );
}
