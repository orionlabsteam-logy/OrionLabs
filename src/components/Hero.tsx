"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowRight, Sparkles, Brain, BrainCircuit, 
  Database, Code2, Smartphone, Cloud, Shield, Palette, Terminal 
} from "lucide-react";
import { motion } from "framer-motion";

interface OrbitProps {
  radius: number;
  speed: number;
  reverse?: boolean;
  items: { icon: any; label: string }[];
  startAngle?: number;
}

function Orbit({ radius, speed, reverse = false, items, startAngle = 0 }: OrbitProps) {
  return (
    <motion.div
      style={{ width: radius * 2, height: radius * 2 }}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      className="absolute rounded-full border border-slate-200/20 flex items-center justify-center pointer-events-none"
    >
      {items.map((item, idx) => {
        const angle = (idx * 360) / items.length + startAngle;
        const radian = (angle * Math.PI) / 180;
        const x = radius * Math.cos(radian);
        const y = radius * Math.sin(radian);
        const IconComponent = item.icon;
        return (
          <div
            key={idx}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
            }}
            className="pointer-events-auto"
          >
            <motion.div
              animate={{ rotate: reverse ? 360 : -360 }}
              transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
              className="glass-card border-slate-200 px-3 py-1 rounded-full text-[9px] font-bold text-slate-800 shadow-md whitespace-nowrap hover:scale-105 transition-all bg-white flex items-center gap-1.5 cursor-pointer"
            >
              <IconComponent className="w-3.5 h-3.5 text-primary" />
              <span>{item.label}</span>
            </motion.div>
          </div>
        );
      })}
    </motion.div>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const innerOrbit = [
    { icon: Brain, label: "AI" },
    { icon: BrainCircuit, label: "Machine Learning" },
    { icon: Database, label: "Data Science" },
  ];

  const middleOrbit = [
    { icon: Code2, label: "Web Dev" },
    { icon: Smartphone, label: "App Dev" },
    { icon: Cloud, label: "Cloud Computing" },
  ];

  const outerOrbit = [
    { icon: Shield, label: "Cyber Security" },
    { icon: Palette, label: "UI/UX Design" },
    { icon: Terminal, label: "DevOps" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] rounded-full glow-bg-primary" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] rounded-full glow-bg-secondary" />


      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col space-y-6 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border-slate-200/50 w-fit">
              <Sparkles className="w-4 h-4 text-secondary animate-pulse" />
              <span className="text-xs font-semibold tracking-wider uppercase text-secondary">
                Empowering Next-Gen Innovators
              </span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-slate-900">
              Launch Your <br className="hidden sm:inline" />
              <span className="text-gradient">Tech Career</span> With <br />
              <span className="text-gradient-purple-cyan font-black">OrionLabs</span>
            </h1>

            <p className="text-slate-655 text-lg max-w-xl leading-relaxed">
              Gain real industry experience through project-based internships, expert mentorship, professional certification, and dedicated career support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfnZ3OAdaZQqBxKtTZ0_cdDOkJhMIHnICGLvHxUsHP9BXfx-A/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient px-8 py-4 rounded-full text-base font-bold text-white text-center flex items-center justify-center gap-2 group shadow-lg cursor-pointer"
              >
                Apply for Internship
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="#domains"
                className="px-8 py-4 rounded-full text-base font-bold text-slate-700 text-center border border-slate-200 hover:bg-slate-50 transition-all backdrop-blur-sm shadow-sm"
              >
                Explore Programs
              </Link>
            </div>
          </motion.div>

          {/* Right Orbiting Visual Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative flex items-center justify-center h-[420px] sm:h-[480px] scale-[0.7] xs:scale-[0.8] sm:scale-[0.9] lg:scale-100 transition-transform duration-500"
          >
            {/* Center OrionLabs Logo Core */}
            <div className="relative w-36 sm:w-44 h-16 sm:h-20 rounded-2xl border border-slate-200/50 flex items-center justify-center bg-white shadow-xl z-20 p-3">
              <img 
                src="/orionlabs-logo-center.png" 
                alt="OrionLabs Logo" 
                className="w-full h-full object-contain"
              />
            </div>

            {mounted && (
              <>
                {/* Inner Orbiting Domain texts (AI, ML, DS) */}
                <Orbit radius={95} speed={30} startAngle={0} items={innerOrbit} />

                {/* Middle Orbiting Domain texts (Web, App, Cloud) */}
                <Orbit radius={150} speed={30} startAngle={40} items={middleOrbit} />

                {/* Outer Orbiting Domain texts (Security, UI/UX, DevOps) */}
                <Orbit radius={205} speed={30} startAngle={80} items={outerOrbit} />
              </>
            )}

            {/* Ambient decorative dashed rings */}
            <div className="absolute w-[190px] h-[190px] rounded-full border border-dashed border-slate-200/10 pointer-events-none" />
            <div className="absolute w-[300px] h-[300px] rounded-full border border-dashed border-slate-200/10 pointer-events-none" />
            <div className="absolute w-[410px] h-[410px] rounded-full border border-dashed border-slate-200/10 pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
