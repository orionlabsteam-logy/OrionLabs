"use client";

import { motion } from "framer-motion";
import {
  Video,
  FolderOpen,
  Clock,
  BadgeCheck,
  Briefcase,
  FileText,
  MessageSquare,
  Users,
  Layout,
  BarChart3,
} from "lucide-react";
import { whyFeatures } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

const featureIcons = [
  Video,
  FolderOpen,
  Clock,
  BadgeCheck,
  Briefcase,
  FileText,
  MessageSquare,
  Users,
  Layout,
  BarChart3,
];

export function WhyOrionLabs() {
  return (
    <section id="why" className="section-padding relative bg-white">

      <div className="container-max relative">
        <SectionHeading
          badge="Why OrionLabs"
          title="Everything You Need to Succeed"
          subtitle="We go beyond internships — we build careers with comprehensive support at every step."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {whyFeatures.map((feature, i) => {
            const Icon = featureIcons[i];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="glass-card group relative rounded-2xl p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
              >
                {feature.upcoming && (
                  <span className="absolute top-3 right-3 rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent">
                    Upcoming
                  </span>
                )}
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-heading text-sm font-semibold">{feature.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
