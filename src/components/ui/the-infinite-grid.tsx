import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useAnimationFrame,
  type MotionValue,
} from "framer-motion";

interface InfiniteGridProps {
  className?: string;
}

export const InfiniteGrid = ({ className }: InfiniteGridProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const gridOffsetX = useMotionValue(0);
  const gridOffsetY = useMotionValue(0);

  useAnimationFrame(() => {
    gridOffsetX.set((gridOffsetX.get() + 0.4) % 48);
    gridOffsetY.set((gridOffsetY.get() + 0.4) % 48);
  });

  const maskImage = useMotionTemplate`radial-gradient(360px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "absolute inset-0 w-full h-full overflow-hidden pointer-events-auto",
        className,
      )}
    >
      {/* Soft gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[55%] h-[55%] rounded-full bg-[var(--brand-primary)]/35 blur-[140px] animate-blob" />
        <div className="absolute top-1/3 -left-32 w-[45%] h-[45%] rounded-full bg-[var(--brand-mint)]/60 blur-[140px] animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 right-1/4 w-[50%] h-[50%] rounded-full bg-[var(--brand-deep)]/30 blur-[140px] animate-blob animation-delay-4000" />
      </div>

      {/* Static faint grid */}
      <div className="absolute inset-0 opacity-[0.18] text-[var(--brand-deep)]">
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
      </div>

      {/* Highlighted grid following mouse */}
      <motion.div
        className="absolute inset-0 opacity-90 text-[var(--brand-primary)]"
        style={{ maskImage, WebkitMaskImage: maskImage }}
      >
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
      </motion.div>
    </div>
  );
};

const GridPattern = ({
  offsetX,
  offsetY,
}: {
  offsetX: MotionValue<number>;
  offsetY: MotionValue<number>;
}) => {
  return (
    <svg className="w-full h-full">
      <defs>
        <motion.pattern
          id="grid-pattern"
          width="48"
          height="48"
          patternUnits="userSpaceOnUse"
          x={offsetX}
          y={offsetY}
        >
          <path
            d="M 48 0 L 0 0 0 48"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </motion.pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-pattern)" />
    </svg>
  );
};
