import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OrionLabs | Launch Your Tech Career with Industry Internships",
  description:
    "Gain real industry experience through project-based internships, expert mentorship, certification, and career support. Bridge the gap between academics and industry with OrionLabs.",
  keywords: [
    "internships",
    "technology",
    "AI",
    "machine learning",
    "web development",
    "career",
    "mentorship",
    "OrionLabs",
  ],
  openGraph: {
    title: "OrionLabs | Launch Your Tech Career",
    description:
      "Project-based tech internships with expert mentorship and career support.",
    type: "website",
    locale: "en_US",
    siteName: "OrionLabs",
  },
  twitter: {
    card: "summary_large_image",
    title: "OrionLabs | Launch Your Tech Career",
    description:
      "Project-based tech internships with expert mentorship and career support.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} scroll-smooth bg-white`}>
      <body className="min-h-screen bg-white text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
