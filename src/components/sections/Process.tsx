"use client";

import { motion } from "framer-motion";
import {
  UserPlus,
  LayoutGrid,
  ClipboardCheck,
  Play,
  FolderKanban,
  Award,
} from "lucide-react";
import { processSteps } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

const stepIcons = [UserPlus, LayoutGrid, Play, ClipboardCheck, FolderKanban, Award];

export function Process() {
  return (
    <section className="section-padding relative overflow-hidden bg-white">
      <div className="container-max">
        <SectionHeading
          badge="How It Works"
          title="Your Journey to Industry Readiness"
          subtitle="A simple, structured process from registration to certification."
        />

        <div className="relative">
          <div className="absolute top-1/2 right-0 left-0 hidden h-0.5 -translate-y-1/2 bg-gradient-to-r from-primary via-accent to-secondary lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {processSteps.map((step, i) => {
              const Icon = stepIcons[i];
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative text-center"
                >
                  <div className="relative mx-auto mb-4 flex h-16 w-16 items-center justify-center">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-accent opacity-20 blur-lg" />
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-border-subtle bg-white shadow-md">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent text-xs font-bold text-white">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-heading text-sm font-semibold">{step.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
