import { useEffect, useRef } from "react";

export function Background() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      el.style.setProperty("--mx", `${e.clientX}px`);
      el.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div ref={ref} aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* grid */}
      <div className="absolute inset-0 grid-overlay opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      {/* glass blur circles */}
      <div className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-white/5 blur-3xl" />
      <div className="absolute top-1/3 -right-40 h-[520px] w-[520px] rounded-full bg-[#C0C0C0]/10 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-[380px] w-[380px] rounded-full bg-white/5 blur-3xl" />
      {/* silver particles */}
      {Array.from({ length: 28 }).map((_, i) => (
        <span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-[#E5E7EB]/60 animate-pulse"
          style={{
            top: `${(i * 37) % 100}%`,
            left: `${(i * 53) % 100}%`,
            animationDelay: `${(i % 7) * 0.4}s`,
            animationDuration: `${3 + (i % 5)}s`,
            boxShadow: "0 0 8px rgba(229,231,235,0.6)",
          }}
        />
      ))}
      {/* mouse glow */}
      <div
        className="absolute h-[500px] w-[500px] rounded-full -translate-x-1/2 -translate-y-1/2 opacity-40"
        style={{
          left: "var(--mx, 50%)",
          top: "var(--my, 30%)",
          background: "radial-gradient(circle, rgba(192,192,192,0.18), transparent 60%)",
        }}
      />
    </div>
  );
}
