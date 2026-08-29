import Link from "next/link";

const socials = [
  { name: "GitHub", href: "https://github.com/rayhanislam" },
  { name: "LinkedIn", href: "https://linkedin.com/in/rayhanislam" },
  { name: "Twitter", href: "https://twitter.com/rayhanislam" },
  { name: "Email", href: "mailto:2550rayhan@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-slate-400">
          © 2026 Rayhan Islam. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-400 transition hover:text-cyan-400"
            >
              {social.name}
            </Link>
          ))}
        </div>

        <a
          href="#home"
          className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 transition-all hover:-translate-y-0.5 hover:border-cyan-400/40 hover:text-cyan-300"
        >
          Back to Top
          <svg className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
