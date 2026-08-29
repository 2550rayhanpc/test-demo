"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("idle");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setFormStatus("idle"), 4000);
    }, 1200);
  };

  const skills = [
    {
      title: "Frontend",
      color: "#06b6d4",
      items: ["React", "Next.js", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "HTML5/CSS3"],
    },
    {
      title: "Backend",
      color: "#8b5cf6",
      items: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs"],
    },
    {
      title: "Tools & Others",
      color: "#10b981",
      items: ["Git", "GitHub", "Vercel", "Docker", "VS Code", "Figma"],
    },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      desc: "Full-stack online store with shopping cart, Stripe payment, and admin dashboard.",
      tags: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
      color: "linear-gradient(135deg, #06b6d4, #3b82f6)",
    },
    {
      title: "AI Image Generator SaaS",
      desc: "Generate stunning AI artwork from text prompts using OpenAI API.",
      tags: ["React", "Node.js", "OpenAI API", "Tailwind"],
      color: "linear-gradient(135deg, #8b5cf6, #d946ef)",
    },
    {
      title: "Task Management Dashboard",
      desc: "Kanban-style productivity tool with real-time updates and team collaboration.",
      tags: ["Next.js", "TypeScript", "PostgreSQL"],
      color: "linear-gradient(135deg, #10b981, #14b8a6)",
    },
  ];

  return (
    <div style={{ backgroundColor: "#020617", color: "#ffffff", minHeight: "100vh" }}>
      {/* Global Styles */}
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        a { text-decoration: none; color: inherit; }
        button { cursor: pointer; border: none; font-family: inherit; }
        input, textarea { font-family: inherit; }
        .container { width: 100%; max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .gradient-text { background: linear-gradient(90deg, #22d3ee, #818cf8, #c084fc); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .btn-primary { background: linear-gradient(90deg, #06b6d4, #4f46e5); color: white; padding: 14px 28px; border-radius: 12px; font-weight: 600; transition: all 0.3s ease; box-shadow: 0 10px 25px rgba(79, 70, 229, 0.3); display: inline-flex; align-items: center; gap: 8px; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 15px 35px rgba(79, 70, 229, 0.4); }
        .btn-secondary { background: rgba(255,255,255,0.05); color: white; padding: 14px 28px; border-radius: 12px; font-weight: 600; border: 1px solid rgba(255,255,255,0.15); transition: all 0.3s ease; display: inline-flex; align-items: center; gap: 8px; }
        .btn-secondary:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.25); transform: translateY(-2px); }
        .card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 20px; backdrop-filter: blur(10px); transition: all 0.3s ease; }
        .card:hover { border-color: rgba(34, 211, 238, 0.3); transform: translateY(-5px); box-shadow: 0 20px 40px rgba(0,0,0,0.3); }
        .tag { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: #cbd5e1; padding: 6px 12px; border-radius: 8px; font-size: 0.75rem; font-weight: 500; }
        .input { width: 100%; padding: 14px 16px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; color: white; font-size: 0.95rem; outline: none; transition: all 0.3s ease; }
        .input:focus { border-color: rgba(34, 211, 238, 0.5); background: rgba(255,255,255,0.07); box-shadow: 0 0 0 3px rgba(34, 211, 238, 0.1); }
        .input::placeholder { color: #64748b; }
        @media (max-width: 768px) {
          .hero-title { font-size: 2.2rem !important; }
          .section-title { font-size: 1.8rem !important; }
        }
      `}</style>

      {/* Navbar */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: isScrolled ? "rgba(2, 6, 23, 0.9)" : "transparent",
        backdropFilter: isScrolled ? "blur(20px)" : "none",
        borderBottom: isScrolled ? "1px solid rgba(255,255,255,0.1)" : "none",
        transition: "all 0.3s ease",
      }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px" }}>
          <a href="#home" onClick={(e) => handleScroll(e, "#home")} style={{ fontSize: "1.5rem", fontWeight: "800" }}>
            Rayhan<span style={{ color: "#22d3ee" }}>.</span>
          </a>

          {/* Desktop Nav */}
          <div style={{ display: "flex", alignItems: "center", gap: "32px" }} className="desktop-nav">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleScroll(e, `#${item.toLowerCase()}`)}
                style={{ color: "#cbd5e1", fontSize: "0.95rem", fontWeight: "500", transition: "color 0.3s" }}
                onMouseEnter={(e) => (e.target.style.color = "#22d3ee")}
                onMouseLeave={(e) => (e.target.style.color = "#cbd5e1")}
              >
                {item}
              </a>
            ))}
            <a href="#contact" onClick={(e) => handleScroll(e, "#contact")} className="btn-primary" style={{ padding: "10px 20px", fontSize: "0.9rem" }}>
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", padding: "8px", color: "white" }}
            className="mobile-menu-btn"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {mobileMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div style={{ background: "rgba(2,6,23,0.98)", borderTop: "1px solid rgba(255,255,255,0.1)", padding: "16px 20px", display: "flex", flexDirection: "column", gap: "12px" }}>
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleScroll(e, `#${item.toLowerCase()}`)}
                style={{ color: "#cbd5e1", padding: "10px 0", fontWeight: "500" }}
              >
                {item}
              </a>
            ))}
            <a href="#contact" onClick={(e) => handleScroll(e, "#contact")} className="btn-primary" style={{ textAlign: "center", justifyContent: "center" }}>
              Hire Me
            </a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", paddingTop: "80px" }}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 0 }}>
          <div style={{ position: "absolute", left: "-10%", top: "15%", width: "400px", height: "400px", background: "rgba(6, 182, 212, 0.15)", borderRadius: "50%", filter: "blur(120px)" }} />
          <div style={{ position: "absolute", right: "-10%", bottom: "15%", width: "400px", height: "400px", background: "rgba(139, 92, 246, 0.15)", borderRadius: "50%", filter: "blur(120px)" }} />
        </div>
        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: "1px solid rgba(34,211,238,0.3)", background: "rgba(34,211,238,0.1)", padding: "8px 16px", borderRadius: "999px", marginBottom: "24px", color: "#22d3ee", fontSize: "0.9rem", fontWeight: "500" }}>
            <span style={{ width: "8px", height: "8px", background: "#22d3ee", borderRadius: "50%", display: "inline-block" }} />
            Full-Stack Web Developer
          </div>
          <h1 className="hero-title" style={{ fontSize: "3.5rem", fontWeight: "800", marginBottom: "20px", lineHeight: 1.1 }}>
            Hi, I&apos;m <span className="gradient-text">Rayhan Islam</span>
          </h1>
          <p style={{ fontSize: "1.35rem", color: "#e2e8f0", maxWidth: "700px", margin: "0 auto 32px", lineHeight: 1.6 }}>
            Building modern, fast, and scalable web applications.
          </p>
          <p style={{ fontSize: "1rem", color: "#94a3b8", maxWidth: "600px", margin: "0 auto 40px", lineHeight: 1.7 }}>
            Passionate software developer with expertise in crafting seamless user experiences and robust backend systems.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginBottom: "48px" }}>
            <a href="#projects" onClick={(e) => handleScroll(e, "#projects")} className="btn-primary">
              View Projects
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#contact" onClick={(e) => handleScroll(e, "#contact")} className="btn-secondary">
              Contact Me
            </a>
          </div>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            {[
              { name: "GitHub", href: "https://github.com/rayhanislam" },
              { name: "LinkedIn", href: "https://linkedin.com/in/rayhanislam" },
              { name: "Twitter", href: "https://twitter.com/rayhanislam" },
              { name: "Email", href: "mailto:2550rayhan@gmail.com" },
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ width: "44px", height: "44px", borderRadius: "12px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#94a3b8", transition: "all 0.3s" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#22d3ee"; e.currentTarget.style.borderColor = "rgba(34,211,238,0.4)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "#94a3b8"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.transform = "translateY(0)"; }}
                title={social.name}
              >
                {social.name === "GitHub" && <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.28-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>}
                {social.name === "LinkedIn" && <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>}
                {social.name === "Twitter" && <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>}
                {social.name === "Email" && <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ padding: "100px 0", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 0 }}>
          <div style={{ position: "absolute", right: "-5%", top: "10%", width: "350px", height: "350px", background: "rgba(139, 92, 246, 0.1)", borderRadius: "50%", filter: "blur(100px)" }} />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={{ color: "#22d3ee", fontSize: "0.9rem", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px" }}>Who I Am</span>
            <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: "700", marginTop: "12px" }}>About Me</h2>
            <div style={{ width: "80px", height: "4px", background: "linear-gradient(90deg, #22d3ee, #4f46e5)", margin: "20px auto 0", borderRadius: "4px" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px", alignItems: "stretch" }}>
            <div className="card" style={{ padding: "40px" }}>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "20px", color: "#f8fafc" }}>Dedicated to building impactful digital experiences.</h3>
              <p style={{ color: "#94a3b8", lineHeight: 1.8, marginBottom: "20px" }}>
                I am a passionate software developer who believes that great software is born from clean code, thoughtful architecture, and a deep understanding of users.
              </p>
              <p style={{ color: "#94a3b8", lineHeight: 1.8, marginBottom: "28px" }}>
                My approach combines creativity with discipline. I write code that is easy to read, test, and maintain, and I never stop learning new tools and technologies.
              </p>
              {["Clean, maintainable, and scalable code", "Modern UI/UX with accessibility in mind", "Full-stack solutions from database to deployment", "Continuous learning and improvement"].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px", color: "#e2e8f0" }}>
                  <span style={{ width: "20px", height: "20px", borderRadius: "50%", background: "rgba(34,211,238,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#22d3ee", fontSize: "0.75rem", fontWeight: "700" }}>✓</span>
                  {item}
                </div>
              ))}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {[
                { value: "3+", label: "Years of Coding Experience", icon: "🚀" },
                { value: "20+", label: "Completed Projects", icon: "💼" },
                { value: "100%", label: "Client Satisfaction", icon: "⭐" },
              ].map((stat, i) => (
                <div key={i} className="card" style={{ padding: "28px", display: "flex", alignItems: "center", gap: "20px" }}>
                  <div style={{ fontSize: "2rem" }}>{stat.icon}</div>
                  <div>
                    <div style={{ fontSize: "2.2rem", fontWeight: "800", background: "linear-gradient(90deg, #fff, #cbd5e1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{stat.value}</div>
                    <div style={{ color: "#94a3b8", marginTop: "4px" }}>{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" style={{ padding: "100px 0", background: "rgba(255,255,255,0.01)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={{ color: "#22d3ee", fontSize: "0.9rem", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px" }}>My Expertise</span>
            <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: "700", marginTop: "12px" }}>Skills & Technologies</h2>
            <p style={{ color: "#94a3b8", maxWidth: "600px", margin: "16px auto 0", lineHeight: 1.7 }}>
              A curated toolkit of modern technologies I use to design, build, and deploy scalable web applications.
            </p>
            <div style={{ width: "80px", height: "4px", background: "linear-gradient(90deg, #22d3ee, #4f46e5)", margin: "20px auto 0", borderRadius: "4px" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
            {skills.map((category) => (
              <div key={category.title} className="card" style={{ padding: "32px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                  <div style={{ width: "40px", height: "5px", borderRadius: "4px", background: category.color }} />
                  <h3 style={{ fontSize: "1.3rem", fontWeight: "600" }}>{category.title}</h3>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px" }}>
                  {category.items.map((skill) => (
                    <div
                      key={skill}
                      style={{
                        padding: "14px", borderRadius: "12px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
                        textAlign: "center", fontSize: "0.9rem", fontWeight: "500", color: "#e2e8f0", transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = category.color; e.currentTarget.style.transform = "translateY(-3px)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.transform = "translateY(0)"; }}
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

      {/* Projects */}
      <section id="projects" style={{ padding: "100px 0", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 0 }}>
          <div style={{ position: "absolute", left: "-5%", bottom: "10%", width: "350px", height: "350px", background: "rgba(6, 182, 212, 0.1)", borderRadius: "50%", filter: "blur(100px)" }} />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={{ color: "#22d3ee", fontSize: "0.9rem", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px" }}>Featured Work</span>
            <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: "700", marginTop: "12px" }}>Projects</h2>
            <p style={{ color: "#94a3b8", maxWidth: "600px", margin: "16px auto 0", lineHeight: 1.7 }}>
              A selection of real-world applications I&apos;ve built, focusing on performance and modern user experience.
            </p>
            <div style={{ width: "80px", height: "4px", background: "linear-gradient(90deg, #22d3ee, #4f46e5)", margin: "20px auto 0", borderRadius: "4px" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px" }}>
            {projects.map((project, i) => (
              <div key={i} className="card" style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <div style={{ height: "200px", background: project.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3rem", fontWeight: "800", color: "rgba(255,255,255,0.3)" }}>
                  {i + 1}
                </div>
                <div style={{ padding: "28px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: "600", marginBottom: "12px" }}>{project.title}</h3>
                  <p style={{ color: "#94a3b8", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "20px", flex: 1 }}>{project.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: "12px" }}>
                    <button className="btn-primary" style={{ flex: 1, padding: "12px", fontSize: "0.9rem", justifyContent: "center" }}>
                      Live Demo
                    </button>
                    <button className="btn-secondary" style={{ flex: 1, padding: "12px", fontSize: "0.9rem", justifyContent: "center" }}>
                      GitHub Code
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: "100px 0", background: "rgba(255,255,255,0.01)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={{ color: "#22d3ee", fontSize: "0.9rem", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px" }}>Let&apos;s Connect</span>
            <h2 className="section-title" style={{ fontSize: "2.5rem", fontWeight: "700", marginTop: "12px" }}>Get In Touch</h2>
            <p style={{ color: "#94a3b8", maxWidth: "600px", margin: "16px auto 0", lineHeight: 1.7 }}>
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
            <div style={{ width: "80px", height: "4px", background: "linear-gradient(90deg, #22d3ee, #4f46e5)", margin: "20px auto 0", borderRadius: "4px" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px", alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div className="card" style={{ padding: "28px" }}>
                <div style={{ width: "50px", height: "50px", borderRadius: "12px", background: "rgba(34,211,238,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px", color: "#22d3ee" }}>
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 style={{ marginBottom: "8px", fontSize: "1.1rem" }}>Email</h3>
                <a href="mailto:2550rayhan@gmail.com" style={{ color: "#94a3b8", transition: "color 0.3s" }} onMouseEnter={(e) => e.target.style.color = "#22d3ee"} onMouseLeave={(e) => e.target.style.color = "#94a3b8"}>2550rayhan@gmail.com</a>
              </div>
              <div className="card" style={{ padding: "28px" }}>
                <div style={{ width: "50px", height: "50px", borderRadius: "12px", background: "rgba(139,92,246,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px", color: "#8b5cf6" }}>
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 style={{ marginBottom: "8px", fontSize: "1.1rem" }}>Location</h3>
                <p style={{ color: "#94a3b8" }}>Bangladesh / Remote</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="card" style={{ padding: "32px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", marginBottom: "16px" }}>
                <input className="input" type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                <input className="input" type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              </div>
              <div style={{ marginBottom: "16px" }}>
                <input className="input" type="text" name="subject" placeholder="Subject" required value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} />
              </div>
              <div style={{ marginBottom: "24px" }}>
                <textarea className="input" name="message" rows={5} placeholder="Your Message" required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
              </div>
              <button type="submit" className="btn-primary" disabled={formStatus === "submitting"} style={{ width: "100%", justifyContent: "center" }}>
                {formStatus === "submitting" ? "Sending..." : "Send Message"}
              </button>
              {formStatus === "success" && (
                <div style={{ marginTop: "16px", padding: "14px", borderRadius: "12px", background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.3)", color: "#34d399", textAlign: "center" }}>
                  ✅ Message sent successfully! I&apos;ll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.1)", padding: "40px 0", background: "#020617" }}>
        <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px", textAlign: "center" }}>
          <p style={{ color: "#64748b", fontSize: "0.95rem" }}>© 2026 Rayhan Islam. All rights reserved.</p>
          <div style={{ display: "flex", gap: "16px" }}>
            {[
              { name: "GitHub", href: "https://github.com/rayhanislam" },
              { name: "LinkedIn", href: "https://linkedin.com/in/rayhanislam" },
              { name: "Twitter", href: "https://twitter.com/rayhanislam" },
              { name: "Email", href: "mailto:2550rayhan@gmail.com" },
            ].map((social) => (
              <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" style={{ color: "#94a3b8", transition: "color 0.3s" }} onMouseEnter={(e) => e.target.style.color = "#22d3ee"} onMouseLeave={(e) => e.target.style.color = "#94a3b8"}>
                {social.name}
              </a>
            ))}
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#cbd5e1", padding: "10px 20px", borderRadius: "10px", transition: "all 0.3s" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(34,211,238,0.4)"; e.currentTarget.style.color = "#22d3ee"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "#cbd5e1"; }}
          >
            Back to Top
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </footer>

      {/* Responsive helper styles */}
      <style>{`
        @media (min-width: 769px) {
          .mobile-menu-btn { display: none !important; }
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </div>
  );
}
