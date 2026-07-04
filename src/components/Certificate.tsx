"use client";

import { useState } from "react";
import { CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Certificate() {
  const [studentName, setStudentName] = useState("");

  const features = [
    { title: "MSME Registered", desc: "Recognized under the Ministry of Micro, Small & Medium Enterprises." },
    { title: "Verifiable ID", desc: "Validated document authenticated directly by OrionLabs." },
    { title: "Founder Signed", desc: "Formally endorsed by the Founders and CEO of OrionLabs." },
    { title: "Career Acceleration", desc: "Validate your 4-week internship experience to future recruiters." },
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
                Internship Certificate
              </h2>
            </div>
            
            <p className="text-slate-655 text-base sm:text-lg leading-relaxed">
              Earn your official verifiable certificate. Validate your expertise and sprint accomplishments directly with recruiters.
            </p>

            {/* Name Input */}
            <div className="glass-card rounded-2xl p-5 border-slate-200/50 space-y-3 shadow-sm bg-white">
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">Preview Your Name</label>
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

          {/* Right Column: Certificate Mockup (Matching Attached Image) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 w-full flex justify-center"
          >
            {/* Certificate Parchment Container */}
            <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl overflow-hidden aspect-[1.414/1] flex flex-col justify-between select-none">
              
              {/* Geometric Corners matching the image */}
              {/* Top-Left Corner */}
              <svg className="absolute top-0 left-0 w-24 h-24 pointer-events-none" viewBox="0 0 100 100">
                <polygon points="0,0 100,0 0,100" fill="#1d4ed8" />
                <polygon points="0,0 80,0 0,80" fill="#2563eb" />
                <polygon points="0,0 50,0 0,50" fill="#1e3a8a" />
              </svg>

              {/* Top-Right Corner */}
              <svg className="absolute top-0 right-0 w-24 h-24 pointer-events-none" viewBox="0 0 100 100">
                <polygon points="100,0 0,0 100,100" fill="#1d4ed8" />
                <polygon points="100,0 20,0 100,80" fill="#2563eb" />
                <polygon points="100,0 50,0 100,50" fill="#1e3a8a" />
              </svg>

              {/* Bottom-Left Corner */}
              <svg className="absolute bottom-0 left-0 w-24 h-24 pointer-events-none" viewBox="0 0 100 100">
                <polygon points="0,100 0,0 100,100" fill="#1d4ed8" />
                <polygon points="0,100 0,20 80,100" fill="#2563eb" />
                <polygon points="0,100 0,50 50,100" fill="#1e3a8a" />
              </svg>

              {/* Bottom-Right Corner */}
              <svg className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none" viewBox="0 0 100 100">
                <polygon points="100,100 100,0 0,100" fill="#1d4ed8" />
                <polygon points="100,100 100,20 20,100" fill="#2563eb" />
                <polygon points="100,100 100,50 50,100" fill="#1e3a8a" />
              </svg>

              {/* Dark Blue Inner Border */}
              <div className="absolute inset-4 border border-blue-900/60 pointer-events-none" />

              {/* Top Header Logos Row */}
              <div className="flex justify-between items-start z-10 px-4 pt-2">
                {/* OrionLabs Logo */}
                <div>
                  <h4 className="font-heading text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight flex items-center">
                    Orion<span className="text-secondary">Labs</span>
                  </h4>
                </div>

                {/* India Emblem & MSME Logo */}
                <div className="flex flex-col items-center">
                  {/* Ashoka Emblem Vector representation */}
                  <svg className="w-7 h-7 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M12 2C10.5 2 9 3 9 4.5c0 .8.5 1.5 1.2 1.8L10 9.5H8.5c-.8 0-1.2.4-1.2 1v2h9.4v-2c0-.6-.4-1-1.2-1H14l-.2-3.2C14.5 6 15 5.3 15 4.5 15 3 13.5 2 12 2z" fill="currentColor" fillOpacity="0.15" />
                    <path d="M8.5 12.5v2c0 .5.4.8.8.8h5.4c.4 0 .8-.3.8-.8v-2" />
                    <line x1="7.5" y1="16" x2="16.5" y2="16" />
                    <circle cx="12" cy="14.2" r="1" />
                  </svg>
                  {/* MSME styled block */}
                  <div className="text-[8px] font-black text-slate-900 uppercase mt-0.5 border-t border-slate-800 tracking-wide font-sans">
                    MSME
                  </div>
                </div>
              </div>

              {/* Middle Section: Certification Text */}
              <div className="text-center my-auto z-10 py-1 sm:py-3 px-4">
                <h1 className="font-heading text-2xl sm:text-4xl font-extrabold text-blue-950 tracking-wider">
                  CERTIFICATE
                </h1>

                {/* OF COMPLETION subheader with border lines */}
                <div className="flex items-center justify-center gap-3 my-1">
                  <div className="h-[1px] w-12 sm:w-20 bg-blue-950/70" />
                  <span className="text-[10px] sm:text-xs font-bold text-blue-950 tracking-widest uppercase">Of Completion</span>
                  <div className="h-[1px] w-12 sm:w-20 bg-blue-950/70" />
                </div>

                <div className="text-[8px] sm:text-[9px] font-bold text-blue-900 tracking-widest uppercase mt-2">
                  To Whomsoever It May Concern
                </div>

                {/* Recipient Name centered above an underline */}
                <div className="relative inline-block my-3">
                  <h2 className="font-serif italic text-lg sm:text-2xl font-medium text-slate-800 px-8">
                    {studentName ? studentName : "Krishna"}
                  </h2>
                  <div className="h-[1px] w-full bg-blue-900/60 mt-1" />
                </div>

                {/* Detailed description paragraph matching the attached image */}
                <div className="space-y-1.5 max-w-xl mx-auto text-slate-700 text-[8px] sm:text-[10px] leading-relaxed">
                  <p>
                    has successfully completed Virtual internship at <strong className="text-blue-950 font-bold">OrionLabs</strong> from 01-06-26 to 30-06-26.
                  </p>
                  <p>
                    The intern's performance during the internship was excellent. We found the intern to be dedicated, enthusiastic, and quick to learn. The intern demonstrated strong work ethic and collaborated well with the team.
                  </p>
                  <p>
                    We wish the intern all the best for future academic and professional endeavors.
                  </p>
                </div>
              </div>

              {/* Bottom Signatures Row */}
              <div className="flex justify-between items-end w-full px-6 z-10 pb-2">
                
                {/* Left Signature: Raja Kumar */}
                <div className="text-center w-28 sm:w-36 flex flex-col items-center">
                  <span className="font-serif italic text-xs sm:text-sm text-slate-800 font-bold tracking-wide">
                    Raja Kumar
                  </span>
                  <div className="h-[1px] w-full bg-blue-900/40 mt-1" />
                  <span className="text-[7px] sm:text-[8px] font-bold text-blue-950 tracking-widest uppercase mt-1">
                    Founder
                  </span>
                </div>

                {/* Right Signature: Sanchit Jain */}
                <div className="text-center w-28 sm:w-36 flex flex-col items-center">
                  <span className="font-serif italic text-xs sm:text-sm text-slate-800 font-bold tracking-wide">
                    Sanchit Jain
                  </span>
                  <div className="h-[1px] w-full bg-blue-900/40 mt-1" />
                  <span className="text-[7px] sm:text-[8px] font-bold text-blue-950 tracking-widest uppercase mt-1">
                    CO-Founder and CEO
                  </span>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
