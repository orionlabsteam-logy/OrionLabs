"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Rocket } from "lucide-react";
import { domains, type Domain } from "@/lib/data";
import { Button } from "@/components/ui/button";

const CONTAINER_SIZE = 680;

/** Spaced evenly at 40-degree increments and synchronized in speed to prevent overlap on the middle circumference */
const ORBIT_CONFIGS = [
  { startAngle: 0, duration: 40, radius: 217.6 },
  { startAngle: 40, duration: 40, radius: 217.6 },
  { startAngle: 80, duration: 40, radius: 217.6 },
  { startAngle: 120, duration: 40, radius: 217.6 },
  { startAngle: 160, duration: 40, radius: 217.6 },
  { startAngle: 200, duration: 40, radius: 217.6 },
  { startAngle: 240, duration: 40, radius: 217.6 },
  { startAngle: 280, duration: 40, radius: 217.6 },
  { startAngle: 320, duration: 40, radius: 217.6 },
];


function OrbitingDomain({
  domain,
  startAngle,
  duration,
  radius,
}: {
  domain: Domain;
  startAngle: number;
  duration: number;
  radius: number;
}) {
  const Icon = domain.icon;

  return (
    <motion.div
      className="pointer-events-none absolute top-1/2 left-1/2 z-20"
      style={{ width: 0, height: 0 }}
      initial={{ rotate: startAngle }}
      animate={{ rotate: startAngle + 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      <motion.div
        className="absolute left-0 top-0"
        style={{ transform: `translate(-50%, -${radius}px)` }}
        initial={{ rotate: -startAngle }}
        animate={{ rotate: -(startAngle + 360) }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        <div className="flex items-center gap-1.5 whitespace-nowrap rounded-full border border-border-subtle bg-white px-2.5 py-1.5 shadow-lg shadow-primary/15 sm:gap-2 sm:px-3 sm:py-2">
          <Icon className="h-3.5 w-3.5 shrink-0 text-primary sm:h-4 sm:w-4" />
          <span className="text-[10px] font-semibold text-foreground sm:text-xs">
            {domain.title}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  const orbitRef = useRef<HTMLDivElement>(null);
  const [orbitScale, setOrbitScale] = useState(1);

  useEffect(() => {
    const el = orbitRef.current;
    if (!el) return;

    const update = () => {
      setOrbitScale(el.offsetWidth / CONTAINER_SIZE);
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center bg-white pt-20"
    >
      <div className="container-max relative z-10 section-padding w-full">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Now accepting applications for 2026
            </motion.div>

            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              Launch Your Tech Career with{" "}
              <span className="gradient-text">OrionLabs</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
              Gain real industry experience through project-based internships,
              expert mentorship, certification, and career support.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="#contact">
                  Apply for Internship
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#programs">Explore Programs</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            ref={orbitRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mx-auto aspect-square w-full max-w-[680px] overflow-visible"
          >
            <div className="absolute inset-[8%] rounded-full border border-dashed border-primary/15" />
            <div className="absolute inset-[18%] rounded-full border border-primary/10 bg-gradient-to-br from-primary/5 via-white to-accent/5" />

            {domains.map((domain, i) => {
              const config = ORBIT_CONFIGS[i] ?? {
                startAngle: (i / domains.length) * 360,
                duration: 42,
                radius: 275,
              };
              return (
                <OrbitingDomain
                  key={domain.title}
                  domain={domain}
                  startAngle={config.startAngle}
                  duration={config.duration}
                  radius={config.radius * orbitScale}
                />
              );
            })}

            <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
              <div className="relative shrink-0">
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/20 via-accent/15 to-secondary/20 blur-xl" />
                <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#4F46E5] via-[#8B5CF6] to-[#06B6D4] p-[3px] shadow-xl shadow-primary/30 sm:h-28 sm:w-28">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-indigo-50 via-purple-50 to-cyan-50 sm:h-16 sm:w-16">
                      <Rocket
                        className="h-7 w-7 sm:h-8 sm:w-8"
                        strokeWidth={1.75}
                        style={{ stroke: "url(#rocket-gradient)" }}
                      />
                      <svg width="0" height="0" className="absolute">
                        <defs>
                          <linearGradient id="rocket-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#4F46E5" />
                            <stop offset="50%" stopColor="#8B5CF6" />
                            <stop offset="100%" stopColor="#06B6D4" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
