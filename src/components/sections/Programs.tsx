"use client";

import { motion } from "framer-motion";
import { Clock, User, ArrowRight } from "lucide-react";
import { programs } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const levelStyles = {
  Beginner: "bg-secondary/20 text-secondary border-secondary/30",
  Intermediate: "bg-primary/20 text-primary border-primary/30",
  Advanced: "bg-accent/20 text-accent border-accent/30",
};

export function Programs() {
  return (
    <section id="programs" className="section-padding relative bg-white">
      <div className="container-max">
        <SectionHeading
          badge="Programs"
          title="Featured Internship Programs"
          subtitle="Structured programs designed by industry experts to fast-track your career."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {programs.map((program, i) => (
            <motion.article
              key={program.domain}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="gradient-border flex h-full flex-col rounded-2xl">
                <div className="glass-card flex h-full flex-col rounded-2xl p-6 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/10">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-heading text-lg font-semibold">{program.domain}</h3>
                    <span
                      className={cn(
                        "shrink-0 rounded-full border px-3 py-1 text-xs font-medium",
                        levelStyles[program.level]
                      )}
                    >
                      {program.level}
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted">
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4 text-primary" />
                      {program.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <User className="h-4 w-4 text-primary" />
                      {program.mentor}
                    </span>
                  </div>

                  <div className="mt-5">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted">
                      Skills Covered
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {program.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg border border-border-subtle bg-surface px-2.5 py-1 text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border-subtle">
                    <Button className="w-full" asChild>
                      <a href="#contact">
                        Apply Now
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button size="lg" variant="outline" asChild>
            <a href="#contact">
              Apply for More
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
