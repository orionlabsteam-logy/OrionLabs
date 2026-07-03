"use client";

import { motion } from "framer-motion";
import { CheckCircle2, GraduationCap, Users, Award } from "lucide-react";
import { aboutFeatures } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

export function About() {
  return (
    <section id="about" className="section-padding relative bg-white">
      <div className="container-max">
        <SectionHeading
          badge="About Us"
          title="Empowering the Next Generation of Tech Leaders"
          subtitle="OrionLabs helps students become industry-ready by working on real projects under experienced mentors."
        />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="gradient-border rounded-3xl">
              <div className="glass-card relative overflow-hidden rounded-3xl p-8 lg:p-12">
                <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
                <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-accent/20 blur-3xl" />

                <div className="relative grid grid-cols-2 gap-4">
                  {[
                    { icon: GraduationCap, label: "Learn", color: "from-primary to-primary/50" },
                    { icon: Users, label: "Mentor", color: "from-secondary to-secondary/50" },
                    { icon: Award, label: "Certify", color: "from-accent to-accent/50" },
                    { icon: CheckCircle2, label: "Succeed", color: "from-primary to-accent" },
                  ].map(({ icon: Icon, label, color }, i) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex flex-col items-center gap-3 rounded-2xl border border-border-subtle bg-surface p-6"
                    >
                      <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${color}`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <span className="font-heading text-sm font-semibold">{label}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="relative mt-8 rounded-2xl border border-border-subtle bg-gradient-to-r from-primary/10 to-accent/10 p-6 text-center">
                  <p className="font-heading text-2xl font-bold gradient-text">Practical Learning</p>
                  <p className="mt-2 text-sm text-muted">Not just theory — real industry experience</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg leading-relaxed text-muted">
              Every internship focuses on practical learning instead of only theory.
              We partner with industry experts to create programs that mirror real
              workplace challenges, giving you the confidence and skills to excel
              in your tech career.
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {aboutFeatures.map((feature, i) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-foreground/90">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
