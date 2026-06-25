import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Download, ExternalLink, Github, Linkedin, Mail, Phone, ArrowRight,
  Code2, Database, Server, Wrench, Brain, GraduationCap, Briefcase,
  Award, FolderGit2, FileText, Sparkles, CheckCircle2,
} from "lucide-react";
import { Navbar } from "./Navbar";
import { Background } from "./Background";
import { Section } from "./Section";
import avatar from "@/assets/avatar.png";

const roles = ["MERN Stack Developer", "Backend Developer", "Frontend Developer", "Problem Solver"];

function TypeRoles() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % roles.length), 2200);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="h-8 overflow-hidden">
      <motion.div
        key={i}
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="font-mono text-[#E5E7EB]"
      >
        {">"} {roles[i]}
        <span className="ml-1 inline-block w-2 h-5 bg-[#C0C0C0] align-middle animate-pulse" />
      </motion.div>
    </div>
  );
}

function GlassButton({
  children, href, variant = "primary", icon: Icon, download,
}: {
  children: React.ReactNode; href: string; variant?: "primary" | "ghost"; icon?: any; download?: boolean;
}) {
  const base =
    "inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all silver-glow-hover";
  const styles =
    variant === "primary"
      ? "glass-strong text-white border border-[var(--glass-border)]"
      : "glass-card text-muted-foreground border border-[var(--glass-border)] hover:text-white";
  return (
    <a href={href} download={download} className={`${base} ${styles}`}>
      {Icon && <Icon className="h-4 w-4" />}
      {children}
    </a>
  );
}

const badges = ["React", "Node.js", "MongoDB", "JavaScript", "Java"];

function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-xs text-muted-foreground">
            <Sparkles className="h-3 w-3 text-[#C0C0C0]" /> Available for opportunities
          </p>
          <h1 className="mt-5 text-5xl md:text-7xl font-semibold leading-[1.05]">
            <span className="text-white">Dhanuja</span>{" "}
            <span className="text-silver-gradient">G</span>
          </h1>
          <p className="mt-3 text-lg text-[#E5E7EB]">Full Stack Developer</p>
          <div className="mt-5">
            <TypeRoles />
          </div>
          <p className="mt-6 text-muted-foreground max-w-xl leading-relaxed">
            Aspiring Full Stack Developer passionate about building scalable applications,
            efficient APIs, and modern user-focused web solutions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <GlassButton href="#projects" variant="primary" icon={ArrowRight}>View Projects</GlassButton>
            <GlassButton href="#resume" variant="ghost" icon={Download}>Download Resume</GlassButton>
          </div>

          <div className="mt-10 flex items-center gap-6 text-muted-foreground">
            <a href="https://github.com" className="hover:text-white transition-colors"><Github className="h-5 w-5" /></a>
            <a href="https://linkedin.com" className="hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
            <a href="mailto:dhanuja@example.com" className="hover:text-white transition-colors"><Mail className="h-5 w-5" /></a>
          </div>
        </motion.div>

        {/* Right — avatar with floating glass badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative mx-auto w-full max-w-md aspect-square"
        >
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(192,192,192,0.22),transparent_60%)] blur-2xl" />
          <div className="relative h-full w-full rounded-[2rem] glass-strong silver-glow overflow-hidden grid place-items-center">
            <img
              src={avatar}
              alt="Dhanuja G avatar"
              width={768}
              height={768}
              className="h-[88%] w-auto object-contain drop-shadow-[0_10px_40px_rgba(192,192,192,0.25)]"
            />
          </div>

          {badges.map((b, i) => {
            const positions = [
              "top-2 -left-4",
              "top-1/4 -right-6",
              "bottom-1/4 -left-8",
              "-bottom-2 left-1/3",
              "bottom-1/3 -right-4",
            ];
            return (
              <motion.div
                key={b}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                className={`absolute ${positions[i]} glass-card px-3 py-1.5 rounded-lg text-xs font-mono text-[#E5E7EB] border border-[var(--glass-border)]`}
              >
                {b}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  const highlights = ["Full Stack Developer", "MERN Stack Learner", "Problem Solver", "API Developer", "Continuous Learner"];
  return (
    <Section id="about" eyebrow="About" title="Crafting reliable software, end to end." subtitle="A snapshot of who I am and what drives me.">
      <div className="grid lg:grid-cols-5 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 glass-card p-8 rounded-2xl"
        >
          <p className="text-[#E5E7EB] leading-relaxed">
            I am pursuing <span className="text-white font-medium">B.Tech in Artificial Intelligence and Machine Learning</span> at
            SNS College of Technology with strong passion for Full Stack Development. I enjoy creating responsive user interfaces,
            backend systems, APIs, and database solutions.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            {highlights.map((h) => (
              <div key={h} className="flex items-center gap-3 glass-card px-4 py-3 rounded-xl">
                <CheckCircle2 className="h-4 w-4 text-[#C0C0C0]" />
                <span className="text-sm text-white">{h}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-2 grid grid-cols-2 gap-4"
        >
          {[
            { k: "3", v: "Internships" },
            { k: "3+", v: "Projects" },
            { k: "8.71", v: "CGPA" },
            { k: "MERN", v: "Stack Focus" },
          ].map((s) => (
            <div key={s.v} className="glass-card rounded-2xl p-6 silver-glow-hover">
              <div className="text-4xl font-semibold text-silver-gradient">{s.k}</div>
              <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

function Education() {
  const items = [
    { school: "SNS College of Technology", detail: "B.Tech — Artificial Intelligence and Machine Learning", period: "2023 — 2027", note: "CGPA: 8.71" },
    { school: "Sree Dharmasatha School", detail: "Higher Secondary (HSC)", period: "Completed", note: "85%" },
    { school: "Sree Dharmasatha School", detail: "Secondary (SSLC)", period: "Completed", note: "All Pass" },
  ];
  return (
    <Section id="education" eyebrow="Education" title="Academic timeline.">
      <div className="relative pl-6 md:pl-10">
        <div className="absolute left-2 md:left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#C0C0C0]/50 to-transparent" />
        <div className="space-y-6">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative glass-card p-6 rounded-2xl silver-glow-hover"
            >
              <span className="absolute -left-[26px] md:-left-[34px] top-7 h-3 w-3 rounded-full bg-[#E5E7EB] shadow-[0_0_14px_rgba(229,231,235,0.7)]" />
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-[#C0C0C0]" />
                    <h3 className="text-lg text-white font-medium">{it.school}</h3>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{it.detail}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">{it.period}</p>
                  <p className="text-sm font-mono text-[#E5E7EB] mt-1">{it.note}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Experience() {
  const items = [
    { company: "Pumo Technovation", role: "Web Development Intern", desc: "Built responsive web interfaces and contributed to production features." },
    { company: "AMYPO", role: "Full Stack Intern", desc: "Worked across the MERN stack — APIs, UI, and database integration." },
    { company: "Live Stream Technologies", role: "Python Intern", desc: "Developed Python scripts and supported backend tooling." },
  ];
  return (
    <Section id="experience" eyebrow="Experience" title="Internships & roles.">
      <div className="grid md:grid-cols-3 gap-5">
        {items.map((it, i) => (
          <motion.div
            key={it.company}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card p-6 rounded-2xl silver-glow-hover"
          >
            <Briefcase className="h-5 w-5 text-[#C0C0C0]" />
            <h3 className="mt-4 text-white text-lg font-medium">{it.company}</h3>
            <p className="text-sm text-[#E5E7EB] mt-1">{it.role}</p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Skills() {
  const groups = [
    { title: "Programming", icon: Code2, items: ["Java", "JavaScript"] },
    { title: "Frontend", icon: Sparkles, items: ["HTML", "CSS", "Bootstrap"] },
    { title: "Backend", icon: Server, items: ["Node.js", "Express.js"] },
    { title: "Database", icon: Database, items: ["MongoDB", "MySQL"] },
    { title: "Tools", icon: Wrench, items: ["GitHub", "VS Code", "Canva", "Excel"] },
    { title: "Core", icon: Brain, items: ["REST APIs", "OOP", "Data Structures"] },
  ];
  return (
    <Section id="skills" eyebrow="Skills" title="A toolkit built for the full stack.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="glass-card p-6 rounded-2xl silver-glow-hover"
          >
            <div className="flex items-center gap-3">
              <span className="h-9 w-9 rounded-lg glass-strong grid place-items-center">
                <g.icon className="h-4 w-4 text-[#E5E7EB]" />
              </span>
              <h3 className="text-white font-medium">{g.title}</h3>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span key={s} className="px-3 py-1.5 rounded-lg glass-card text-xs font-mono text-[#E5E7EB] border border-[var(--glass-border)]">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  const projects = [
    {
      name: "ECART Website",
      desc: "Full-stack e-commerce platform with product catalog, cart, and checkout flow.",
      tags: ["React", "Node.js", "MongoDB"],
      span: "md:col-span-2 md:row-span-2",
    },
    {
      name: "Focus Master",
      desc: "Productivity app to track focus sessions, goals, and personal analytics.",
      tags: ["React", "Express", "MongoDB"],
      span: "md:col-span-2",
    },
    {
      name: "AI Recipe Generator",
      desc: "Generates recipes from available ingredients using an AI backend.",
      tags: ["JavaScript", "Node.js", "AI"],
      span: "md:col-span-2",
    },
  ];
  return (
    <Section id="projects" eyebrow="Projects" title="Selected work." subtitle="A bento of recent builds — clean, useful, and shipped.">
      <div className="grid md:grid-cols-4 gap-5 auto-rows-[180px]">
        {projects.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={`group relative glass-card rounded-2xl p-6 overflow-hidden silver-glow-hover ${p.span}`}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                 style={{ background: "radial-gradient(600px circle at var(--mx,50%) var(--my,50%), rgba(192,192,192,0.08), transparent 40%)" }} />
            <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none"
                 style={{ background: "linear-gradient(135deg, rgba(192,192,192,0.5), transparent 40%, rgba(192,192,192,0.3))", padding: 1, WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude" }} />
            <div className="relative h-full flex flex-col">
              <FolderGit2 className="h-5 w-5 text-[#C0C0C0]" />
              <h3 className="mt-4 text-xl text-white font-medium">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              <div className="mt-auto pt-4 flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[10px] font-mono uppercase tracking-wider text-[#E5E7EB]/80">{t}</span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a href="#" className="p-2 rounded-lg glass-card hover:text-white text-muted-foreground" aria-label="GitHub"><Github className="h-4 w-4" /></a>
                  <a href="#" className="p-2 rounded-lg glass-card hover:text-white text-muted-foreground" aria-label="Live"><ExternalLink className="h-4 w-4" /></a>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function Certifications() {
  const certs = [
    "MERN Stack Development",
    "Java Programming",
    "Frontend Web Development",
    "Database Management",
    "Python Essentials",
    "REST API Design",
  ];
  return (
    <Section id="certifications" eyebrow="Certifications" title="Continuous learning.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certs.map((c, i) => (
          <motion.div
            key={c}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="glass-card p-6 rounded-2xl flex items-start gap-4 silver-glow-hover"
          >
            <span className="h-10 w-10 rounded-xl glass-strong grid place-items-center">
              <Award className="h-5 w-5 text-[#E5E7EB]" />
            </span>
            <div>
              <h3 className="text-white font-medium">{c}</h3>
              <p className="text-xs text-muted-foreground mt-1">Issued certificate · Verified</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Resume() {
  return (
    <Section id="resume" eyebrow="Resume" title="The single-page version.">
      <div className="grid lg:grid-cols-2 gap-6 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-2xl aspect-[4/5] p-8 silver-glow relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-30 grid-overlay" />
          <div className="relative space-y-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Resume preview</p>
              <h3 className="mt-2 text-2xl text-silver-gradient font-semibold">Dhanuja G</h3>
              <p className="text-sm text-[#E5E7EB]">Full Stack Developer</p>
            </div>
            <div className="h-px bg-[var(--glass-border)]" />
            <div className="space-y-2 text-sm text-muted-foreground">
              <p><span className="text-white">Education:</span> B.Tech AIML, SNS CT (CGPA 8.71)</p>
              <p><span className="text-white">Experience:</span> 3 internships across web, full stack & Python</p>
              <p><span className="text-white">Stack:</span> React, Node.js, Express, MongoDB, MySQL, Java</p>
              <p><span className="text-white">Focus:</span> APIs, scalable apps, recruiter-ready delivery</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl text-white font-medium">Get the full PDF</h3>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            A concise one-page resume covering education, internships, projects, and the stack I work with — formatted for recruiters and applicant tracking systems.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <GlassButton href="#" variant="primary" icon={Download} download>Download Resume</GlassButton>
            <GlassButton href="#contact" variant="ghost" icon={FileText}>Request via email</GlassButton>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something." subtitle="Open to internships, freelance work, and full-time roles.">
      <div className="grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {[
            { icon: Mail, label: "Email", value: "dhanuja.g@example.com", href: "mailto:dhanuja.g@example.com" },
            { icon: Phone, label: "Phone", value: "+91 00000 00000", href: "tel:+910000000000" },
            { icon: Github, label: "GitHub", value: "github.com/dhanuja-g", href: "https://github.com" },
            { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/dhanuja-g", href: "https://linkedin.com" },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="flex items-center gap-4 glass-card p-5 rounded-2xl silver-glow-hover"
            >
              <span className="h-11 w-11 rounded-xl glass-strong grid place-items-center">
                <c.icon className="h-5 w-5 text-[#E5E7EB]" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</p>
                <p className="text-white text-sm mt-0.5">{c.value}</p>
              </div>
            </a>
          ))}
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); alert("Thanks! I'll get back to you soon."); }}
          className="lg:col-span-3 glass-strong rounded-2xl p-6 md:p-8 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name" name="name" placeholder="Your name" />
            <Field label="Email" name="email" type="email" placeholder="you@email.com" />
          </div>
          <Field label="Subject" name="subject" placeholder="Project, role, or opportunity" />
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
            <textarea
              required
              rows={5}
              className="mt-2 w-full rounded-xl bg-white/5 border border-[var(--glass-border)] px-4 py-3 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:border-[#E5E7EB]/50"
              placeholder="Tell me a little about what you're building…"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass-strong border border-[var(--glass-border)] text-white silver-glow-hover"
          >
            Send message <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </Section>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl bg-white/5 border border-[var(--glass-border)] px-4 py-3 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:border-[#E5E7EB]/50"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-[var(--glass-border)] mt-16">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">© 2026 Dhanuja G. All Rights Reserved.</p>
        <p className="text-xs text-silver-gradient font-mono">Building Modern Full Stack Experiences.</p>
      </div>
    </footer>
  );
}

export function Portfolio() {
  return (
    <div className="relative min-h-screen">
      <Background />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Resume />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
