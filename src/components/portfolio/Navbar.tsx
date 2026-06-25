import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setProgress(pct);
      // active section
      let current = "home";
      for (const l of links) {
        const el = document.querySelector(l.href) as HTMLElement | null;
        if (el && el.getBoundingClientRect().top <= 120) current = l.href.slice(1);
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="glass-nav fixed top-0 inset-x-0 z-50">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-display font-semibold tracking-tight">
            <span className="h-7 w-7 rounded-md glass-card grid place-items-center text-silver-gradient text-sm">DG</span>
            <span className="text-silver-gradient">My Portfolio</span>
          </a>
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  active === l.href.slice(1)
                    ? "text-white bg-white/5 border border-[var(--glass-border)]"
                    : "text-muted-foreground hover:text-white"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <button
            className="lg:hidden p-2 rounded-md glass-card"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className="lg:hidden glass-strong border-t border-[var(--glass-border)]">
            <div className="px-6 py-3 grid grid-cols-2 gap-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 text-sm rounded-md text-muted-foreground hover:text-white hover:bg-white/5"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        )}
        <div
          className="h-[2px] bg-gradient-to-r from-transparent via-[#E5E7EB] to-transparent transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </header>
    </>
  );
}
