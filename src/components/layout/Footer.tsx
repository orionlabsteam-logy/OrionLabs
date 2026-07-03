"use client";

import Link from "next/link";
import { Sparkles, Mail, Phone, MapPin, Share2, Network, Code2, Camera } from "lucide-react";
import { footerDomains, footerQuickLinks, footerResources } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const socialLinks = [
  { icon: Share2, href: "#", label: "Twitter" },
  { icon: Network, href: "#", label: "LinkedIn" },
  { icon: Code2, href: "#", label: "GitHub" },
  { icon: Camera, href: "#", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-white">
      <div className="section-padding container-max">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="#home" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="font-heading text-xl font-bold">
                Orion<span className="gradient-text">Labs</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Bridging the gap between academic learning and real-world industry
              experience through project-based internships, expert mentorship, and
              career guidance.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border-subtle bg-surface text-muted transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-3">
            <div>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider">
                Quick Links
              </h3>
              <ul className="mt-4 space-y-3">
                {footerQuickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider">
                Domains
              </h3>
              <ul className="mt-4 space-y-3">
                {footerDomains.map((domain) => (
                  <li key={domain}>
                    <Link
                      href="#domains"
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {domain}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider">
                Resources
              </h3>
              <ul className="mt-4 space-y-3">
                {footerResources.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="#" className="text-sm text-muted transition-colors hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted transition-colors hover:text-foreground">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted transition-colors hover:text-foreground">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider">
              Newsletter
            </h3>
            <p className="mt-4 text-sm text-muted">
              Stay updated with new programs and career tips.
            </p>
            <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input type="email" placeholder="Enter your email" aria-label="Email for newsletter" />
              <Button type="submit" size="sm">
                Subscribe
              </Button>
            </form>

            <div className="mt-8 space-y-3 text-sm text-muted">
              <a href="mailto:hello@orionlabs.com" className="flex items-center gap-2 transition-colors hover:text-foreground">
                <Mail className="h-4 w-4 text-primary" />
                hello@orionlabs.com
              </a>
              <a href="tel:+911234567890" className="flex items-center gap-2 transition-colors hover:text-foreground">
                <Phone className="h-4 w-4 text-primary" />
                +91 123 456 7890
              </a>
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Hyderabad, Telangana, India
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border-subtle pt-8 sm:flex-row">
          <p className="text-sm text-muted">
            © 2026 OrionLabs. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted">
            <Link href="#" className="transition-colors hover:text-foreground">
              Privacy
            </Link>
            <Link href="#" className="transition-colors hover:text-foreground">
              Terms
            </Link>
            <Link href="#contact" className="transition-colors hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
