"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={cn(
        "mb-12 lg:mb-16",
        align === "center" && "mx-auto max-w-3xl text-center",
        className
      )}
    >
      {badge && (
        <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-primary">
          {badge}
        </span>
      )}
      <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
