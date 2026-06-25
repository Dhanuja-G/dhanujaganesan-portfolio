import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Download, Github, Linkedin, Mail, Phone, ArrowRight, ExternalLink,
  Code2, Database, Server, Wrench, Brain, GraduationCap, Briefcase,
  Award, FolderGit2, Lightbulb, Cpu, Layers, Network, Boxes,
  Sparkles, Terminal, ArrowUpRight, MapPin, Calendar, Send,
} from "lucide-react";
import { Navbar } from "./Navbar";
import { Background } from "./Background";
import avatar from "@/assets/avatar.png";

/* -------------------------------------------------------- */
/*  BLOCK 1 — IDENTITY CONSOLE                              */
/* -------------------------------------------------------- */

const dynamicLines = [
  "Building scalable systems.",
  "Crafting modern interfaces.",
  "Engineering digital experiences.",
];

function IdentityConsole() {
  const [line, setLine] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setLine((p) => (p + 1) % dynamicLines.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="identity" className="relative pt-28 pb-16 px-4">
      <div className="mx-auto max-w-6xl">
        {/* Console window chrome */}
        <div className="glass-strong rounded-3xl overflow-hidden silver-glow">
          {/* Title bar */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--glass-border)] bg-white/[0.03]">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
              <span className="ml-3 font-mono text-[11px] text-muted-foreground">
                ~/dhanuja-g/identity.console
              </span>
            </div>
            <span className="font-mono text-[10px] text-muted-foreground hidden sm:inline">
              v1.0 · synced
            </span>
          </div>

          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 p-6 sm:p-10">
            {/* Left: identity */}
            <div>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-3">
                Dhanuja <span className="text-silver-gradient">G</span>
                <span className="text-[#C0C0C0]">.</span>
              </h1>
              <p className="font-mono text-sm text-muted-foreground mb-6">
                &gt; Full Stack Developer
              </p>


              {/* Dynamic line */}
              <div className="glass-card rounded-xl px-4 py-3 mb-6 inline-flex items-center gap-3 min-h-[48px]">
                <Sparkles className="h-4 w-4 text-[#C0C0C0]" />
                <motion.span
                  key={line}
                  initial={{ y: 12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.45 }}
                  className="font-mono text-sm text-white"
                >
                  {dynamicLines[line]}
                </motion.span>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                Passionate Full Stack Developer focused on building scalable web applications
                with modern frontend and backend technologies. Continuously improving my skills
                in software development, problem-solving, and real-world project building to
                create efficient and user-centric digital solutions, while also exploring and
                growing my interest in Artificial Intelligence and Machine Learning.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#lab"
                  className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl glass-strong border border-[var(--glass-border)] silver-glow-hover text-sm font-medium"
                >
                  <FolderGit2 className="h-4 w-4 text-[#C0C0C0]" />
                  View Projects
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass-card border border-[var(--glass-border)] silver-glow-hover text-sm font-medium text-muted-foreground hover:text-white"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </div>
            </div>

            {/* Right: avatar */}
            <div className="relative flex items-center justify-center">
              <img
                src={avatar}
                alt="Dhanuja G avatar"
                className="relative h-72 w-72 object-contain drop-shadow-[0_10px_40px_rgba(192,192,192,0.25)]"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------- */
/*  BLOCK 2 — DEVELOPER DNA (hex floating cards)            */
/* -------------------------------------------------------- */

const dnaCards = [
  { icon: Lightbulb, title: "Problem Solver", desc: "Decomposing complex challenges into clean solutions." },
  { icon: Server, title: "API Builder", desc: "Designing RESTful services with Express and Node." },
  { icon: Layers, title: "MERN Learner", desc: "Building end-to-end with React, Node, Mongo." },
  { icon: Sparkles, title: "UI Creator", desc: "Crafting interfaces that feel intentional." },
  { icon: Brain, title: "Backend Thinker", desc: "Architecting data flows and scalable systems." },
  { icon: ArrowUpRight, title: "Continuous Learner", desc: "Always exploring the next paradigm." },
];

function DeveloperDNA() {
  return (
    <Block id="dna" code="02" title="Developer DNA" subtitle="What I bring to every codebase">
      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 items-center">
        <div className="glass-strong rounded-3xl p-8">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            core.statement
          </span>
          <p className="mt-4 text-lg leading-relaxed text-white/90">
            My journey in software development is driven by{" "}
            <span className="text-silver-gradient font-semibold">curiosity</span>,{" "}
            <span className="text-silver-gradient font-semibold">creativity</span>, and{" "}
            <span className="text-silver-gradient font-semibold">consistency</span>.
          </p>
          <p className="mt-3 text-muted-foreground">
            I enjoy transforming ideas into working applications and solving practical
            challenges through code.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {dnaCards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="relative group"
            >
              <div className="glass-card rounded-2xl p-5 h-full silver-glow-hover border border-[var(--glass-border)]">
                <div className="h-10 w-10 rounded-xl glass-strong grid place-items-center mb-3">
                  <c.icon className="h-5 w-5 text-[#C0C0C0]" />
                </div>
                <div className="font-display font-semibold text-white text-sm mb-1">
                  {c.title}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Block>
  );
}

/* -------------------------------------------------------- */
/*  BLOCK 3 — TIMELINE GRID (horizontal connected nodes)    */
/* -------------------------------------------------------- */

const timelineNodes = [
  {
    icon: GraduationCap,
    tag: "Education",
    title: "SNS College of Technology",
    sub: "B.Tech — Artificial Intelligence & Machine Learning",
    meta: "CGPA · 8.71",
    items: ["AI / ML Foundations", "Data Structures", "Software Engineering"],
  },
  {
    icon: Briefcase,
    tag: "Internships",
    title: "Industry Experience",
    sub: "Hands-on full stack engineering exposure",
    meta: "3 programs",
    items: ["Live Stream Technologies", "AMYPO", "Pumo Technovation"],
  },
  {
    icon: FolderGit2,
    tag: "Projects",
    title: "Shipped Applications",
    sub: "End-to-end products across web & AI",
    meta: "5 launched",
    items: ["Focus Master", "AI Recipe Generator", "Election Campaign", "FlashLearn", "Expense Flow"],
  },
];

function TimelineGrid() {
  return (
    <Block id="timeline" code="03" title="Timeline Grid" subtitle="Connected nodes of my journey">
      <div className="relative">
        {/* connecting line */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C0C0C0]/30 to-transparent -translate-y-1/2" />

        <div className="grid lg:grid-cols-3 gap-6 relative">
          {timelineNodes.map((n, i) => (
            <motion.div
              key={n.tag}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              {/* node dot */}
              <div className="hidden lg:flex absolute -top-3 left-1/2 -translate-x-1/2 h-6 w-6 rounded-full glass-strong border border-[var(--glass-border)] items-center justify-center z-10">
                <div className="h-2 w-2 rounded-full bg-[#C0C0C0]" />
              </div>

              <div className="glass-card rounded-2xl p-6 h-full silver-glow-hover border border-[var(--glass-border)]">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    node.{String(i + 1).padStart(2, "0")} · {n.tag}
                  </span>
                  <n.icon className="h-4 w-4 text-[#C0C0C0]" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-1">{n.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{n.sub}</p>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md glass-strong font-mono text-[10px] text-[#E5E7EB] mb-4">
                  <Calendar className="h-3 w-3" />
                  {n.meta}
                </div>
                <ul className="space-y-2">
                  {n.items.map((it) => (
                    <li key={it} className="flex items-center gap-2 text-sm text-white/80">
                      <span className="h-1 w-3 bg-[#C0C0C0]/60 rounded-full" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Block>
  );
}

/* -------------------------------------------------------- */
/*  BLOCK 4 — SKILL MATRIX (network of circles)             */
/* -------------------------------------------------------- */

const skillGroups = [
  { icon: Code2, name: "Programming Languages", skills: ["Java", "JavaScript", "Python", "C"] },
  { icon: Layers, name: "Frontend Development", skills: ["HTML5", "CSS3", "Bootstrap", "React.js"] },
  { icon: Server, name: "Backend Development", skills: ["Node.js", "Express.js"] },
  { icon: Database, name: "Databases", skills: ["MongoDB", "MySQL"] },
  { icon: Wrench, name: "Tools & Platforms", skills: ["Git", "GitHub", "VS Code", "Postman"] },
];

function SkillMatrix() {
  return (
    <Block id="matrix" code="04" title="Skill Matrix" subtitle="An interconnected network">
      <div className="grid lg:grid-cols-5 gap-4">
        {skillGroups.map((g, i) => (
          <motion.div
            key={g.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass-card rounded-2xl p-5 silver-glow-hover border border-[var(--glass-border)]"
          >
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[var(--glass-border)]">
              <div className="h-9 w-9 rounded-xl glass-strong grid place-items-center">
                <g.icon className="h-4 w-4 text-[#C0C0C0]" />
              </div>
              <div>
                <div className="font-display font-semibold text-white text-sm">{g.name}</div>
                <div className="font-mono text-[10px] text-muted-foreground">
                  {g.skills.length} nodes
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.skills.map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full glass-strong border border-[var(--glass-border)] text-[11px] text-white/90 hover:border-white/40 transition-colors"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C0C0C0]" />
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Network legend */}
      <div className="mt-6 flex items-center justify-center gap-6 font-mono text-[10px] text-muted-foreground">
        <span className="flex items-center gap-2">
          <Network className="h-3 w-3 text-[#C0C0C0]" /> {skillGroups.length} clusters
        </span>
        <span className="flex items-center gap-2">
          <Boxes className="h-3 w-3 text-[#C0C0C0]" />
          {skillGroups.reduce((a, g) => a + g.skills.length, 0)} total nodes
        </span>
      </div>
    </Block>
  );
}

/* -------------------------------------------------------- */
/*  BLOCK 5 — PROJECT LAB (stacked overlapping cards)       */
/* -------------------------------------------------------- */

const projects = [
  {
    title: "Focus Master",
    blurb: "Productivity app with focus timers, task tracking and progress analytics.",
    tags: ["React", "Tailwind", "Firebase"],
    href: "https://github.com/Dhanuja-G",
  },
  {
    title: "AI Recipe Generator",
    blurb: "Generates recipes from ingredients using an AI-powered cooking assistant.",
    tags: ["React", "Node.js", "AI API"],
    href: "https://github.com/Dhanuja-G",
  },
  {
    title: "Election Campaign Assistant",
    blurb:
      "Full-stack app showcasing parties, CM candidates, symbols, slogans and campaign details in an interactive UI.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    href: "https://github.com/Dhanuja-G",
  },
  {
    title: "FlashLearn",
    blurb:
      "Flashcard-based learning platform to create, study and test with smart cards and progress tracking.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Local Storage"],
    href: "https://github.com/Dhanuja-G",
  },
  {
    title: "Expense Flow",
    blurb:
      "Personal expense tracker to manage income, categorize spending and monitor finances via a clean dashboard.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    href: "https://github.com/Dhanuja-G",
  },
];

function ProjectLab() {
  const [hover, setHover] = useState<number | null>(null);
  return (
    <Block id="lab" code="05" title="Projects" subtitle="Experiments shipped to production">
      <div className="grid lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            style={{
              transform:
                hover === i ? "translateY(-8px) rotate(0deg)" : `rotate(${(i - 1) * 1.2}deg)`,
            }}
            className="glass-strong rounded-2xl p-6 border border-[var(--glass-border)] silver-glow-hover transition-all relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[#C0C0C0]/10 blur-3xl" />
            <div className="flex items-center justify-between mb-4 relative">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                exp.{String(i + 1).padStart(2, "0")}
              </span>
              <span className="h-8 w-8 rounded-lg glass-card grid place-items-center">
                <FolderGit2 className="h-4 w-4 text-[#C0C0C0]" />
              </span>
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-2 relative">
              {p.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 relative">
              {p.blurb}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-5 relative">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded-md glass-card text-[10px] font-mono text-white/90 border border-[var(--glass-border)]"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white hover:text-[#C0C0C0] transition-colors relative"
            >
              <Github className="h-4 w-4" />
              View on GitHub
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </motion.article>
        ))}
      </div>
    </Block>
  );
}

/* -------------------------------------------------------- */
/*  BLOCK 6 — ACHIEVEMENTS VAULT (rotating cube cards)      */
/* -------------------------------------------------------- */

const vaultItems = [
  { icon: Award, label: "Azure AI Fundamentals", value: "AI-900", note: "Microsoft Certified" },
  { icon: Award, label: "Full Stack Development", value: "MERN", note: "Certified Program" },
  { icon: Award, label: "Java Programming", value: "Core", note: "Certification" },
  { icon: Award, label: "Python Essentials", value: "Cert", note: "Certification" },
];

function AchievementsVault() {
  return (
    <Block id="vault" code="06" title="Certifications" subtitle="Verified credentials">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {vaultItems.map((it, i) => (
          <motion.div
            key={it.label}
            initial={{ opacity: 0, rotateY: -20 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group [perspective:1000px]"
          >
            <div className="relative h-44 [transform-style:preserve-3d] transition-transform duration-700 group-hover:[transform:rotateY(180deg)]">
              {/* front */}
              <div className="absolute inset-0 glass-strong rounded-2xl border border-[var(--glass-border)] p-5 flex flex-col justify-between [backface-visibility:hidden]">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    vault.{String(i + 1).padStart(2, "0")}
                  </span>
                  <it.icon className="h-4 w-4 text-[#C0C0C0]" />
                </div>
                <div>
                  <div className="font-display text-4xl font-bold text-silver-gradient">
                    {it.value}
                  </div>
                  <div className="text-sm text-white mt-1">{it.label}</div>
                </div>
              </div>
              {/* back */}
              <div className="absolute inset-0 glass-card rounded-2xl border border-[var(--glass-border)] p-5 flex flex-col justify-center items-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <it.icon className="h-8 w-8 text-[#C0C0C0] mb-3" />
                <div className="font-display font-bold text-white">{it.label}</div>
                <div className="text-xs text-muted-foreground mt-1">{it.note}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Block>
  );
}

/* -------------------------------------------------------- */
/*  BLOCK 7 — CONNECT HUB (terminal contact)                */
/* -------------------------------------------------------- */

function ConnectHub() {
  const [sent, setSent] = useState(false);
  return (
    <Block id="hub" code="07" title="Connect Hub" subtitle="Open a secure channel">
      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6">
        {/* Terminal form */}
        <div className="glass-strong rounded-2xl overflow-hidden border border-[var(--glass-border)]">
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-[var(--glass-border)] bg-white/[0.03]">
            <div className="flex items-center gap-2">
              <Terminal className="h-3.5 w-3.5 text-[#C0C0C0]" />
              <span className="font-mono text-[11px] text-muted-foreground">
                contact@dhanuja-g:~$
              </span>
            </div>
            <span className="font-mono text-[10px] text-emerald-400">● secure</span>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 3000);
            }}
            className="p-6 space-y-4 font-mono"
          >
            {[
              { id: "name", label: "name", placeholder: "your name", type: "text" },
              { id: "email", label: "email", placeholder: "you@domain.com", type: "email" },
            ].map((f) => (
              <div key={f.id}>
                <label htmlFor={f.id} className="text-[11px] text-muted-foreground">
                  &gt; --{f.label}
                </label>
                <input
                  id={f.id}
                  type={f.type}
                  required
                  placeholder={f.placeholder}
                  className="mt-1 w-full bg-transparent border-b border-[var(--glass-border)] text-white text-sm py-2 focus:outline-none focus:border-[#C0C0C0] transition-colors"
                />
              </div>
            ))}
            <div>
              <label htmlFor="msg" className="text-[11px] text-muted-foreground">
                &gt; --message
              </label>
              <textarea
                id="msg"
                required
                rows={4}
                placeholder="write your message..."
                className="mt-1 w-full bg-transparent border-b border-[var(--glass-border)] text-white text-sm py-2 focus:outline-none focus:border-[#C0C0C0] transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass-card border border-[var(--glass-border)] silver-glow-hover text-sm text-white"
            >
              <Send className="h-4 w-4" />
              {sent ? "Transmitted ✓" : "Transmit message"}
            </button>
          </form>
        </div>

        {/* Quick links */}
        <div className="space-y-3">
          {[
            { icon: Github, label: "GitHub", value: "github.com/Dhanuja-G", href: "https://github.com/Dhanuja-G" },
            { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/dhanuja-ganesan", href: "https://linkedin.com/in/dhanuja-ganesan/" },
            { icon: Mail, label: "Email", value: "dhanuja346@gmail.com", href: "mailto:dhanuja346@gmail.com" },
            { icon: Phone, label: "Phone", value: "+91 91507 30711", href: "tel:+919150730711" },
            { icon: MapPin, label: "Location", value: "Tamil Nadu, India", href: "#" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl glass-card border border-[var(--glass-border)] silver-glow-hover group"
            >
              <div className="h-10 w-10 rounded-lg glass-strong grid place-items-center">
                <l.icon className="h-4 w-4 text-[#C0C0C0]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {l.label}
                </div>
                <div className="text-sm text-white truncate">{l.value}</div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-white transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </Block>
  );
}

/* -------------------------------------------------------- */
/*  Generic Block wrapper                                   */
/* -------------------------------------------------------- */

function Block({
  id, code, title, subtitle, children,
}: {
  id: string; code: string; title: string; subtitle: string; children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative py-16 px-4">
      <div className="mx-auto max-w-6xl">
        <header className="flex items-end justify-between mb-8 gap-4 flex-wrap">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-2">
              block · {code}
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
              {title}
            </h2>
            <p className="text-muted-foreground mt-1">{subtitle}</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 font-mono text-[10px] text-muted-foreground">
            <span className="h-px w-12 bg-[#C0C0C0]/40" />
            module loaded
          </div>
        </header>
        {children}
      </div>
    </section>
  );
}

/* -------------------------------------------------------- */
/*  Root                                                    */
/* -------------------------------------------------------- */

export function Portfolio() {
  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      <Background />
      <Navbar />
      <main>
        <IdentityConsole />
        <DeveloperDNA />
        <TimelineGrid />
        <SkillMatrix />
        <ProjectLab />
        <AchievementsVault />
        <ConnectHub />
      </main>
      <footer className="border-t border-[var(--glass-border)] mt-12">
        <div className="mx-auto max-w-6xl px-4 py-6 flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] text-muted-foreground">
          <span>© 2026 Dhanuja G · All Rights Reserved</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            system stable
          </span>
        </div>
      </footer>
    </div>
  );
}
