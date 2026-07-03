"use client";

import { stats } from "@/lib/data";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export function Stats() {
  return (
    <section className="relative border-y border-border-subtle bg-white">
      <div className="section-padding container-max">
        <div className="grid grid-cols-2 gap-8 lg:gap-16">
          {stats.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
