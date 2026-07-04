"use client";

import Link from "next/link";
import { Linkedin } from "lucide-react";

export default function Footer() {

  return (
    <footer className="relative bg-slate-50 border-t border-slate-200 pt-20 pb-10 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full glow-bg-secondary opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Col 1: Brand & Description */}
          <div className="lg:col-span-6 flex flex-col space-y-5">
            <Link href="#home" className="flex items-center space-x-2 group w-fit">
              <span className="font-heading text-2xl font-bold tracking-tight text-slate-900">
                Orion<span className="text-secondary">Labs</span>
              </span>
              <span className="h-2 w-2 rounded-full bg-secondary" />
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              Bridging the gap between academic learning and real-world experience. Join our industry-focused internships to accelerate your tech career.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-all shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h4 className="font-heading text-sm font-bold text-slate-900 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {["Home", "About", "Certificate", "Programs", "Why Us", "FAQ", "Contact Us"].map((item) => (
                <li key={item}>
                  {item === "Contact Us" ? (
                    <a 
                      href="https://docs.google.com/forms/d/e/1FAIpQLScM0Q4jit9W4wXo9v0MBLvXbDA7UOSiTIS4AgxDBbciqdSdIA/viewform?usp=publish-editor" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-650 hover:text-slate-900 text-sm transition-colors"
                    >
                      {item}
                    </a>
                  ) : (
                    <Link 
                      href={item === "Programs" ? "#domains" : `#${item.toLowerCase().replace(" ", "")}`} 
                      className="text-slate-650 hover:text-slate-900 text-sm transition-colors"
                    >
                      {item}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Popular Domains */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h4 className="font-heading text-sm font-bold text-slate-900 uppercase tracking-wider">Top Domains</h4>
            <ul className="space-y-2.5">
              {["Artificial Intelligence", "Web Development", "Cyber Security", "DevOps", "UI/UX Design"].map((dom) => (
                <li key={dom}>
                  <Link href="#domains" className="text-slate-655 hover:text-slate-900 text-sm transition-colors">
                    {dom}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Resources */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h4 className="font-heading text-sm font-bold text-slate-900 uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2.5">
              {["Student Guide", "Careers", "Terms & Conditions", "Privacy Policy", "Sitemap"].map((res) => (
                <li key={res}>
                  <Link href="#contact" className="text-slate-650 hover:text-slate-900 text-sm transition-colors">
                    {res}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


        </div>

        {/* Bottom copyright and legal */}
        <div className="pt-8 border-t border-slate-200/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <span>&copy; 2026 OrionLabs. All Rights Reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLScM0Q4jit9W4wXo9v0MBLvXbDA7UOSiTIS4AgxDBbciqdSdIA/viewform?usp=publish-editor" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 transition-colors font-semibold text-slate-650"
            >
              Contact Us
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
