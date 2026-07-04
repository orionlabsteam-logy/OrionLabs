"use client";

import { 
  Brain, BrainCircuit, Database, Code2, Smartphone, Cloud, 
  Shield, Palette, Terminal, Calendar, User, ArrowRight 
} from "lucide-react";
import { motion } from "framer-motion";

const DOMAINS_LIST = [
  {
    name: "Artificial Intelligence",
    icon: Brain,
    desc: "Build neural networks, voice assistants, and natural language models.",
    duration: "8 Weeks",
    level: "Advanced",
    levelColor: "bg-red-500/10 text-red-500 border-red-500/20",
    skills: ["Neural Networks", "NLP", "Computer Vision", "PyTorch"],
    mentor: "Dr. Elena Rostova (Ex-NVIDIA)",
    color: "text-purple-600 border-purple-500/10 bg-purple-500/5",
    bgGlow: "hover:shadow-[0_0_30px_rgba(139,92,246,0.1)] hover:border-purple-500/25",
  },
  {
    name: "Machine Learning",
    icon: BrainCircuit,
    desc: "Train predictive algorithms, work with regression, classification and clusters.",
    duration: "8 Weeks",
    level: "Advanced",
    levelColor: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    skills: ["Python", "Scikit-Learn", "Regression", "Clustering"],
    mentor: "Sarah Jenkins (Principal ML Architect)",
    color: "text-indigo-655 border-indigo-500/10 bg-indigo-500/5",
    bgGlow: "hover:shadow-[0_0_30px_rgba(79,70,229,0.1)] hover:border-indigo-500/25",
  },
  {
    name: "Data Science",
    icon: Database,
    desc: "Uncover insights from complex datasets using python and data visualization tools.",
    duration: "6 Weeks",
    level: "Intermediate",
    levelColor: "bg-cyan-500/10 text-cyan-650 border-cyan-500/20",
    skills: ["Pandas", "SQL", "Data Visualisation", "Matplotlib"],
    mentor: "Siddharth Nair (Senior DS, Amazon)",
    color: "text-blue-600 border-blue-500/10 bg-blue-500/5",
    bgGlow: "hover:shadow-[0_0_30px_rgba(37,99,235,0.1)] hover:border-blue-500/25",
  },
  {
    name: "Web Development",
    icon: Code2,
    desc: "Build modern, fast, and responsive websites using React, Next.js, and Node.",
    duration: "6 Weeks",
    level: "Beginner",
    levelColor: "bg-green-500/10 text-green-650 border-green-500/20",
    skills: ["React", "Next.js", "Node.js", "TailwindCSS"],
    mentor: "Alex Mercer (Tech Lead, Stripe)",
    color: "text-cyan-600 border-cyan-500/10 bg-cyan-500/5",
    bgGlow: "hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] hover:border-cyan-500/25",
  },
  {
    name: "App Development",
    icon: Smartphone,
    desc: "Develop native and cross-platform apps using Flutter, React Native, and Swift.",
    duration: "6 Weeks",
    level: "Intermediate",
    levelColor: "bg-cyan-500/10 text-cyan-655 border-cyan-500/20",
    skills: ["Flutter", "Dart", "Firebase", "State Management"],
    color: "text-teal-655 border-teal-500/10 bg-teal-500/5",
    mentor: "Michael Chang (Ex-Senior iOS Dev)",
    bgGlow: "hover:shadow-[0_0_30px_rgba(13,148,136,0.1)] hover:border-teal-500/25",
  },
  {
    name: "Cloud Computing",
    icon: Cloud,
    desc: "Configure robust and scalable server infrastructures on AWS, Azure, and GCP.",
    duration: "8 Weeks",
    level: "Advanced",
    levelColor: "bg-red-500/10 text-red-500 border-red-500/20",
    skills: ["AWS", "Azure", "Docker", "CloudFormation"],
    color: "text-sky-600 border-sky-500/10 bg-sky-500/5",
    mentor: "David Miller (Cloud Architect)",
    bgGlow: "hover:shadow-[0_0_30px_rgba(14,165,233,0.1)] hover:border-sky-500/25",
  },
  {
    name: "Cyber Security",
    icon: Shield,
    desc: "Learn penetration testing, ethical hacking, network defense, and cryptography.",
    duration: "8 Weeks",
    level: "Advanced",
    levelColor: "bg-red-500/10 text-red-500 border-red-500/20",
    skills: ["Ethical Hacking", "Metasploit", "Penetration Testing", "Linux"],
    color: "text-red-600 border-red-500/10 bg-red-500/5",
    mentor: "James Vance (Security Specialist)",
    bgGlow: "hover:shadow-[0_0_30px_rgba(220,38,38,0.1)] hover:border-red-500/25",
  },
  {
    name: "UI/UX Design",
    icon: Palette,
    desc: "Design stunning wireframes, prototypes, and user interfaces using Figma.",
    duration: "6 Weeks",
    level: "Beginner",
    levelColor: "bg-green-500/10 text-green-650 border-green-500/20",
    skills: ["Figma", "User Research", "Wireframing", "Prototyping"],
    color: "text-pink-600 border-pink-500/10 bg-pink-500/5",
    mentor: "Sophia Martinez (Lead Designer)",
    bgGlow: "hover:shadow-[0_0_30px_rgba(219,39,119,0.1)] hover:border-pink-500/25",
  },
  {
    name: "DevOps",
    icon: Terminal,
    desc: "Automate delivery pipelines with Docker, Kubernetes, and GitHub Actions CI/CD.",
    duration: "8 Weeks",
    level: "Intermediate",
    levelColor: "bg-cyan-500/10 text-cyan-655 border-cyan-500/20",
    skills: ["Docker", "Kubernetes", "CI/CD", "GitHub Actions"],
    color: "text-orange-655 border-orange-500/10 bg-orange-500/5",
    mentor: "Robert Chen (DevOps Engineer)",
    bgGlow: "hover:shadow-[0_0_30px_rgba(249,115,22,0.1)] hover:border-orange-500/25",
  },
];

export default function Domains() {
  return (
    <section id="domains" className="relative py-20 sm:py-28 overflow-hidden bg-slate-50/30">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full glow-bg-secondary opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col space-y-4">
          <span className="text-sm font-bold text-secondary uppercase tracking-widest">Internship Domains</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Explore 9 Cutting-Edge Tech Domains
          </h2>
          <p className="text-slate-655 text-base sm:text-lg">
            Choose the program that aligns with your goals. Work on production sprints under senior developer mentorship.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DOMAINS_LIST.map((domain, index) => {
            const IconComponent = domain.icon;
            return (
              <motion.div
                key={domain.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.05 }}
                className={`group glass-card rounded-3xl p-6 sm:p-8 border-slate-200/50 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 ${domain.bgGlow}`}
              >
                <div>
                  {/* Level and Duration row */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${domain.levelColor}`}>
                      {domain.level}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <Calendar className="w-4 h-4 text-secondary" />
                      <span>{domain.duration}</span>
                    </div>
                  </div>

                  {/* Icon and Domain Name Title */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className={`w-11 h-11 rounded-xl border flex items-center justify-center flex-shrink-0 ${domain.color}`}>
                      <IconComponent className="w-5.5 h-5.5" />
                    </div>
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 group-hover:text-secondary transition-colors">
                      {domain.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">
                    {domain.desc}
                  </p>

                  {/* Skills list */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {domain.skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="text-xs px-2.5 py-1 rounded-md bg-slate-50 border border-slate-100 text-slate-600 font-medium shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Row: Mentor info & Apply CTA */}
                <div className="pt-5 border-t border-slate-150 flex flex-col gap-3 mt-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <User className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span className="truncate">Mentor: <strong className="text-slate-800 font-semibold">{domain.mentor}</strong></span>
                  </div>
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfnZ3OAdaZQqBxKtTZ0_cdDOkJhMIHnICGLvHxUsHP9BXfx-A/viewform?usp=dialog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full bg-slate-50 border border-slate-200 hover:bg-slate-100 hover:border-slate-350 text-xs font-bold text-slate-700 transition-all group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:border-transparent group-hover:text-white shadow-sm"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
