import { cn } from "../lib/utils";
import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface BentoCardProps {
  name: string;
  description: string;
  href?: string;
  cta?: string;
  className?: string;
  Icon?: React.ComponentType<{ className?: string }>;
  background?: ReactNode;
}

export function BentoCard({
  name,
  description,
  href,
  cta,
  className,
  Icon,
  background,
}: BentoCardProps) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-gray-200 bg-white",
        "transform-gpu transition-all duration-300 ease-out hover:border-gray-300",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 z-10" />
      
      <div className="relative z-20 p-8">
        {Icon && (
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E5293F]">
            <Icon className="h-6 w-6 text-white" />
          </div>
        )}
        <h3 className="mb-2 text-xl font-bold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>

      <div className="relative z-20 px-8 pb-8">
        {cta && (
          <span className="inline-flex items-center text-sm font-semibold text-[#E5293F]">
            {cta} <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
          </span>
        )}
      </div>

      <div className="absolute inset-0 z-0">
        {background}
      </div>
    </motion.a>
  );
}

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div className={cn("grid grid-cols-3 gap-4", className)}>
      {children}
    </div>
  );
}
