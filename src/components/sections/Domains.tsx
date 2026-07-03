"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { domains } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

export function Domains() {
  return (
    <section id="domains" className="section-padding relative bg-white">

      <div className="container-max relative">
        <SectionHeading
          badge="Domains"
          title="Explore 9 Technology Domains"
          subtitle="Choose from a wide range of industry-focused internship tracks designed to match your career aspirations."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {domains.map((domain, i) => (
            <motion.div
              key={domain.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 4) * 0.05 }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <div className="glass-card flex h-full flex-col rounded-2xl p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 transition-all group-hover:from-primary group-hover:to-accent group-hover:shadow-lg group-hover:shadow-primary/30">
                  <domain.icon className="h-6 w-6 text-primary transition-colors group-hover:text-white" />
                </div>
                <h3 className="font-heading text-base font-semibold">{domain.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {domain.description}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-4 w-fit px-0 text-primary hover:bg-transparent hover:text-accent"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
