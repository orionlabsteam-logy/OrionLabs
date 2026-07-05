"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Certificate", href: "#certificate" },
    { name: "Programs", href: "#domains" },
    { name: "Why Us", href: "#why" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact Us", href: "https://docs.google.com/forms/d/e/1FAIpQLScM0Q4jit9W4wXo9v0MBLvXbDA7UOSiTIS4AgxDBbciqdSdIA/viewform?usp=publish-editor", isExternal: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-slate-200/50 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="#home" className="flex items-center group">
            <img 
              src="/orionlabs-logo-center.png" 
              alt="OrionLabs Logo" 
              className="h-16 sm:h-20 w-auto object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => 
              link.isExternal ? (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-655 hover:text-slate-900 text-sm font-semibold transition-colors relative group py-2"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full" />
                </a>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors relative group py-2"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full" />
                </Link>
              )
            )}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfnZ3OAdaZQqBxKtTZ0_cdDOkJhMIHnICGLvHxUsHP9BXfx-A/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient px-5 py-2.5 rounded-full text-sm font-semibold text-white flex items-center gap-2"
            >
              Apply Now
              <ArrowRight className="w-4 h-4 animate-pulse" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-lg border-b border-slate-200/50 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {navLinks.map((link) => 
                link.isExternal ? (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="block text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md text-base font-semibold hover:bg-slate-50 transition-colors"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md text-base font-medium hover:bg-slate-50 transition-colors"
                  >
                    {link.name}
                  </Link>
                )
              )}
              <div className="pt-4 border-t border-slate-100 flex flex-col space-y-3 px-3">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfnZ3OAdaZQqBxKtTZ0_cdDOkJhMIHnICGLvHxUsHP9BXfx-A/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="btn-gradient text-center py-3 rounded-full text-base font-semibold text-white flex items-center justify-center gap-2"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
