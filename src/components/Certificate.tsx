"use client";

import { useState, useEffect } from "react";
import { Award, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Certificate() {
  const [studentName, setStudentName] = useState("");
  const [mounted, setMounted] = useState(false);
  const [certId, setCertId] = useState("9482");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    setMounted(true);
    setCertId(Math.floor(10000 + Math.random() * 90000).toString());
    setCurrentDate(
      new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    );
  }, []);

  const features = [
    { title: "ISO 9001:2015 Certified", desc: "Verifiable credentials that meet international quality standards." },
    { title: "Recruiter Verifiable", desc: "Contains a cryptographically secure ID readable by corporate HR teams." },
    { title: "LinkedIn Sharable", desc: "Easily attach to your LinkedIn certifications profile with one-click." },
    { title: "Academic Recognition", desc: "Accepted by leading universities as proof of required internship credits." },
  ];

  return (
    <section id="certificate" className="relative py-20 sm:py-28 overflow-hidden bg-slate-50/20">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full glow-bg-secondary opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left Column: Copywriting & Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col space-y-6"
          >
            <div className="flex flex-col space-y-2">
              <span className="text-sm font-bold text-secondary uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-secondary animate-pulse" />
                Proof of Experience
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Get an Internship Certificate
              </h2>
            </div>
            
            <p className="text-slate-655 text-base sm:text-lg leading-relaxed">
              Upon finishing your 4-week program and final sprint project, you will receive an official verifiable certificate confirming your practical work experience.
            </p>

            {/* Interactive Name Input */}
            <div className="glass-card rounded-2xl p-5 border-slate-200/50 space-y-3 shadow-sm bg-white">
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">Preview Your Certificate</label>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Type your name..."
                className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-secondary transition-all w-full font-medium"
              />
            </div>

            {/* Features list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {features.map((feat) => (
                <div key={feat.title} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{feat.title}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Certificate Mockup attached on side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 w-full flex justify-center"
          >
            {/* Certificate Parchment Container */}
            <div className="relative w-full max-w-2xl bg-white border-[12px] border-slate-900 rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl overflow-hidden aspect-[1.414/1] flex flex-col justify-between select-none">
              
              {/* Gold/Cyan Double Thin Inner Border */}
              <div className="absolute inset-2 border border-slate-200 pointer-events-none" />
              <div className="absolute inset-3 border border-secondary/20 pointer-events-none" />

              {/* Watermark Logo Background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none">
                <Award className="w-[300px] h-[300px] text-slate-900" />
              </div>

              {/* Top Row: OrionLabs Logo & Credentials */}
              <div className="flex justify-between items-start z-10">
                <div>
                  <h4 className="font-heading text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                    Orion<span className="text-secondary">Labs</span>
                  </h4>
                  <p className="text-[8px] text-slate-400 font-mono mt-0.5 tracking-wider uppercase">Credentials registry</p>
                </div>
                <div className="text-right">
                  <div className="text-[8px] font-mono text-slate-400 uppercase tracking-widest">ISO 9001:2015</div>
                  <div className="text-[8px] font-mono text-slate-400 uppercase tracking-widest mt-0.5">Reg ID: 4892-C02</div>
                </div>
              </div>

              {/* Middle Section: Recipient & Statement */}
              <div className="text-center my-auto z-10 py-4 sm:py-6">
                <h3 className="font-heading text-xs sm:text-sm font-bold text-secondary uppercase tracking-widest mb-1.5">
                  Certificate of Internship Completion
                </h3>
                <p className="text-[9px] sm:text-xs text-slate-400 italic">This is proudly presented to</p>
                
                {/* Dynamic Recipient Name */}
                <h2 className="font-heading text-xl sm:text-3xl font-extrabold text-slate-900 border-b border-slate-200 pb-1.5 my-3 max-w-md mx-auto truncate px-4">
                  {studentName ? studentName : "[Your Name]"}
                </h2>

                <p className="text-[10px] sm:text-xs text-slate-550 max-w-lg mx-auto leading-relaxed mt-3">
                  for outstanding dedication and performance in completing a 4-week project-based internship program in the tech domain. Throughout this program, the candidate successfully resolved active company sprint tasks and built production-ready systems.
                </p>
              </div>

              {/* Bottom Row: Signatures & Certification Seal */}
              <div className="flex justify-between items-end border-t border-slate-100 pt-5 z-10">
                {/* Signature 1 */}
                <div className="text-left">
                  <div className="font-mono text-[10px] sm:text-xs text-slate-700 italic font-bold">
                    H. R. Vance
                  </div>
                  <div className="text-[8px] text-slate-400 font-sans uppercase tracking-widest mt-0.5">
                    Talent Acquisition
                  </div>
                </div>

                {/* Circular Gold/Cyan Seal stamp */}
                <div className="hidden sm:flex items-center justify-center w-14 h-14 rounded-full border border-secondary/30 bg-secondary/5 relative animate-spin-slow">
                  <div className="absolute inset-1 rounded-full border border-dashed border-secondary/40" />
                  <Award className="w-6 h-6 text-secondary" />
                </div>

                {/* Signature 2 + Verifiable Hash ID */}
                <div className="text-right flex flex-col items-end">
                  <div className="flex items-center gap-1 text-[8px] font-mono text-slate-400">
                    <ShieldCheck className="w-3 h-3 text-green-500" />
                    ID: OL-CERT-2026-{studentName ? studentName.slice(0, 3).toUpperCase() : "PRE"}-{mounted ? certId : "9482"}
                  </div>
                  <div className="text-[8px] text-slate-400 font-mono mt-1 uppercase tracking-wider">
                    Dated: {mounted ? currentDate : "Loading..."}
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
