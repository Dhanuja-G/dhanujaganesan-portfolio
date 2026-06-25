import { useEffect, useState } from "react";
import { Menu, X, Terminal } from "lucide-react";

const links = [
  { href: "#identity", label: "Home" },
  { href: "#dna", label: "About" },
  { href: "#matrix", label: "Skills" },
  { href: "#lab", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#vault", label: "Certifications" },
  { href: "#hub", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState("identity");
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setProgress(pct);
      let current = "identity";
      for (const l of links) {
        const el = document.querySelector(l.href) as HTMLElement | null;
        if (el && el.getBoundingClientRect().top <= 140) current = l.href.slice(1);
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
      <div className="glass-strong rounded-2xl w-full max-w-5xl">
        <div className="px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          <a href="#identity" className="flex items-center gap-2 font-display font-semibold tracking-tight shrink-0">
            <span className="h-8 w-8 rounded-lg glass-card grid place-items-center">
              <Terminal className="h-4 w-4 text-[#C0C0C0]" />
            </span>
            <span className="text-silver-gradient hidden sm:inline">My Portfolio</span>
          </a>
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded-md transition-all ${
                  active === l.href.slice(1)
                    ? "text-white bg-white/10 border border-[var(--glass-border)]"
                    : "text-muted-foreground hover:text-white"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-2 font-mono text-[10px] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            ONLINE
          </div>
          <button
            className="lg:hidden p-2 rounded-md glass-card"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className="lg:hidden border-t border-[var(--glass-border)] px-4 py-3 grid grid-cols-2 gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2 text-xs font-mono uppercase tracking-wider rounded-md text-muted-foreground hover:text-white hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
        <div className="h-px bg-white/5 relative overflow-hidden rounded-b-2xl">
          <div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-transparent via-[#E5E7EB] to-transparent transition-[width] duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </header>
  );
}
