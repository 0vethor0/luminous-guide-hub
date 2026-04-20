import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface BugStepProps {
  index: number;
  icon: LucideIcon;
  title: string;
  description: string;
  bullets?: string[];
}

export function BugStep({
  index,
  icon: Icon,
  title,
  description,
  bullets,
}: BugStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="group relative glass-card rounded-2xl p-7 hover:-translate-y-1 transition-all duration-500"
    >
      <div
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: "var(--gradient-border)",
          padding: "1px",
          WebkitMask:
            "linear-gradient(#000,#000) content-box, linear-gradient(#000,#000)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      <div className="flex items-start gap-5">
        <div className="relative shrink-0">
          <div className="w-14 h-14 rounded-xl bg-gradient-button text-primary-foreground flex items-center justify-center shadow-[var(--shadow-soft)] group-hover:scale-110 transition-transform duration-500">
            <Icon className="w-6 h-6" strokeWidth={2.2} />
          </div>
          <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white text-[var(--brand-deep)] text-xs font-bold flex items-center justify-center border border-[var(--brand-mint)] shadow-sm">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
          {bullets && (
            <ul className="mt-4 space-y-1.5">
              {bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2 text-sm text-foreground/80"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--brand-primary)] shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </motion.div>
  );
}
