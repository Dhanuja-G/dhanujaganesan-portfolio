import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative scroll-mt-24 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 max-w-2xl"
        >
          {eyebrow && (
            <p className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#C0C0C0]" />
              {eyebrow}
            </p>
          )}
          <h2 className="text-3xl md:text-5xl font-semibold text-silver-gradient">{title}</h2>
          {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
