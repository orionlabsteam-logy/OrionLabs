"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Share2, Network, Code2, Camera } from "lucide-react";
import { domains } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
const socialLinks = [
  { icon: Share2, href: "#", label: "Twitter" },
  { icon: Network, href: "#", label: "LinkedIn" },
  { icon: Code2, href: "#", label: "GitHub" },
  { icon: Camera, href: "#", label: "Instagram" },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg(null);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const college = formData.get("college") as string;
    const branch = formData.get("branch") as string;
    const domain = formData.get("domain") as string;
    const message = formData.get("message") as string;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, college, branch, domain, message }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || result.message || `Failed to submit form (Status: ${response.status}).`);
      }

      setSubmitted(true);
      e.currentTarget.reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err: any) {
      console.error("Error submitting form:", err);
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative bg-white">

      <div className="container-max relative">
        <SectionHeading
          badge="Contact"
          title="Get in Touch"
          subtitle="Ready to launch your tech career? Reach out or apply today."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-card rounded-2xl p-8">
              <h3 className="font-heading text-xl font-semibold">Send us a message</h3>
              <p className="mt-2 text-sm text-muted">
                Fill out the form and our team will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" name="name" placeholder="Your name" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" name="email" type="email" placeholder="you@email.com" required />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">
                      Phone
                    </label>
                    <Input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" required />
                  </div>
                  <div>
                    <label htmlFor="college" className="mb-1.5 block text-sm font-medium">
                      College
                    </label>
                    <Input id="college" name="college" placeholder="Your college name" required />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="branch" className="mb-1.5 block text-sm font-medium">
                      Branch / Department
                    </label>
                    <Input id="branch" name="branch" placeholder="e.g. Computer Science, ECE" required />
                  </div>
                  <div>
                    <label htmlFor="domain" className="mb-1.5 block text-sm font-medium">
                      Domain of Interest
                    </label>
                    <select
                      id="domain"
                      name="domain"
                      className="flex h-11 w-full rounded-xl border border-border-subtle bg-surface px-4 py-2 text-sm text-foreground backdrop-blur-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Select a domain
                      </option>
                      {domains.map((d) => (
                        <option key={d.title} value={d.title} className="bg-background">
                          {d.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" name="message" placeholder="Tell us about your goals..." required />
                </div>

                <Button type="submit" className="w-full" disabled={submitting || submitted}>
                  {submitting ? (
                    "Sending..."
                  ) : submitted ? (
                    "Message Sent!"
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </Button>

                {errorMsg && (
                  <p className="mt-2 text-center text-sm font-medium text-destructive">
                    {errorMsg}
                  </p>
                )}
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-card rounded-2xl p-8">
              <h3 className="font-heading text-xl font-semibold">Contact Information</h3>
              <div className="mt-6 space-y-4">
                <a
                  href="mailto:hello@orionlabs.com"
                  className="flex items-center gap-3 text-muted transition-colors hover:text-foreground"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  hello@orionlabs.com
                </a>
                <a
                  href="tel:+911234567890"
                  className="flex items-center gap-3 text-muted transition-colors hover:text-foreground"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  +91 123 456 7890
                </a>
                <div className="flex items-start gap-3 text-muted">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <span>
                    OrionLabs HQ, HITEC City
                    <br />
                    Hyderabad, Telangana 500081
                    <br />
                    India
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-sm font-medium">Follow us</p>
                <div className="mt-3 flex gap-3">
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
