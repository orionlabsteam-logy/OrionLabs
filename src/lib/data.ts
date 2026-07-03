import {
  Brain,
  Bot,
  BarChart3,
  Globe,
  Smartphone,
  Cloud,
  Shield,
  Palette,
  GitBranch,
  type LucideIcon,
} from "lucide-react";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Domains", href: "#domains" },
  { label: "Internship Programs", href: "#programs" },
  { label: "Why OrionLabs", href: "#why" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: 9, suffix: "+", label: "Internship Domains" },
  { value: 300, suffix: "+", label: "Projects Completed" },
];

export const aboutFeatures = [
  "Real-world projects",
  "Industry mentors",
  "Live sessions",
  "Resume building",
  "Interview preparation",
  "Internship Certificate",
  "Letter of Recommendation (performance-based)",
];

export type Domain = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const domains: Domain[] = [
  {
    title: "Artificial Intelligence",
    description: "Build intelligent systems with NLP, computer vision, and generative AI.",
    icon: Brain,
  },
  {
    title: "Machine Learning",
    description: "Train models, optimize pipelines, and deploy ML solutions at scale.",
    icon: Bot,
  },
  {
    title: "Data Science",
    description: "Analyze complex datasets and derive actionable business insights.",
    icon: BarChart3,
  },
  {
    title: "Web Development",
    description: "Create responsive, performant web applications with modern frameworks.",
    icon: Globe,
  },
  {
    title: "App Development",
    description: "Develop cross-platform mobile apps with polished user experiences.",
    icon: Smartphone,
  },
  {
    title: "Cloud Computing",
    description: "Architect scalable cloud infrastructure on AWS, Azure, and GCP.",
    icon: Cloud,
  },
  {
    title: "Cyber Security",
    description: "Protect systems with ethical hacking, threat analysis, and compliance.",
    icon: Shield,
  },
  {
    title: "UI/UX Design",
    description: "Design intuitive interfaces backed by research and usability testing.",
    icon: Palette,
  },
  {
    title: "DevOps",
    description: "Automate CI/CD pipelines and streamline software delivery workflows.",
    icon: GitBranch,
  },
];

export const processSteps = [
  { step: 1, title: "Register", description: "Create your profile and tell us about your goals." },
  { step: 2, title: "Choose Domain", description: "Select the technology track that excites you." },
  { step: 3, title: "Start Internship", description: "Join your cohort and meet your industry mentor." },
  { step: 4, title: "Complete Assessment", description: "Show your potential through a quick skill check." },
  { step: 5, title: "Build Projects", description: "Work on real-world projects with expert guidance." },
  { step: 6, title: "Receive Certificate", description: "Earn your certificate and career-ready portfolio." },
];

export const whyFeatures = [
  { title: "Live Mentorship", description: "Weekly 1-on-1 sessions with industry professionals." },
  { title: "Real Industry Projects", description: "Build portfolio-worthy projects used in production." },
  { title: "Flexible Learning", description: "Learn at your pace with structured milestones." },
  { title: "Internship Certificate", description: "Receive a verified certificate upon completion." },
  { title: "Placement Assistance", description: "Get connected with hiring partners and job openings.", upcoming: true },
  { title: "Resume Review", description: "Expert feedback to make your resume stand out." },
  { title: "Mock Interviews", description: "Practice with real interview scenarios and feedback.", upcoming: true },
  { title: "Community Support", description: "Join a network of ambitious learners and alumni.", upcoming: true },
  { title: "Portfolio Development", description: "Showcase your work with a polished portfolio.", upcoming: true },
  { title: "Weekly Progress Tracking", description: "Stay on track with measurable weekly goals.", upcoming: true },
];

export const programs = [
  {
    domain: "AI & Machine Learning",
    duration: "12 Weeks",
    level: "Intermediate" as const,
    skills: ["Python", "TensorFlow", "NLP", "Computer Vision"],
    mentor: "Dr. Priya Sharma",
  },
  {
    domain: "Full Stack Web Development",
    duration: "10 Weeks",
    level: "Beginner" as const,
    skills: ["React", "Node.js", "MongoDB", "TypeScript"],
    mentor: "Arjun Mehta",
  },
  {
    domain: "Cloud & DevOps",
    duration: "8 Weeks",
    level: "Advanced" as const,
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    mentor: "Sarah Chen",
  },
  {
    domain: "Data Science",
    duration: "10 Weeks",
    level: "Intermediate" as const,
    skills: ["Python", "Pandas", "SQL", "Tableau"],
    mentor: "Raj Patel",
  },
  {
    domain: "Cyber Security",
    duration: "8 Weeks",
    level: "Intermediate" as const,
    skills: ["Ethical Hacking", "Network Security", "SIEM", "OWASP"],
    mentor: "Michael Torres",
  },
  {
    domain: "UI/UX Design",
    duration: "6 Weeks",
    level: "Beginner" as const,
    skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
    mentor: "Emily Watson",
  },
];

export const testimonials = [
  {
    name: "Ananya Reddy",
    college: "IIT Hyderabad",
    domain: "Machine Learning",
    rating: 5,
    feedback:
      "OrionLabs transformed my theoretical knowledge into practical skills. The mentorship was exceptional and I landed my dream internship at a top AI startup.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya",
  },
  {
    name: "Rohan Kapoor",
    college: "BITS Pilani",
    domain: "Web Development",
    rating: 5,
    feedback:
      "The project-based approach gave me a portfolio that impressed recruiters. The weekly mentor sessions kept me accountable and motivated throughout.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rohan",
  },
  {
    name: "Sneha Iyer",
    college: "VIT Vellore",
    domain: "Data Science",
    rating: 5,
    feedback:
      "From data cleaning to building ML models, every week brought new challenges. The certificate and LOR helped me secure a full-time role.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha",
  },
  {
    name: "Vikram Singh",
    college: "NIT Trichy",
    domain: "Cloud Computing",
    rating: 5,
    feedback:
      "Hands-on AWS and DevOps experience that no classroom could provide. OrionLabs bridged the gap between college and industry perfectly.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram",
  },
];

export const partners = [
  "Microsoft",
  "Google",
  "Amazon",
  "IBM",
  "NVIDIA",
  "Intel",
  "Oracle",
  "Cisco",
  "Adobe",
  "Salesforce",
];

export const faqs = [
  {
    question: "Who can apply?",
    answer:
      "Any student currently enrolled in a college or university program, or recent graduates within 12 months of graduation. No prior industry experience is required — we welcome learners at all skill levels.",
  },
  {
    question: "Is the internship online?",
    answer:
      "Yes, all OrionLabs internships are fully remote. You can participate from anywhere with a stable internet connection. Live mentor sessions are scheduled to accommodate different time zones.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Absolutely. Upon successful completion of your internship program, you will receive a verified digital certificate that you can share on LinkedIn and include in your resume.",
  },
  {
    question: "Are projects included?",
    answer:
      "Yes, every internship includes multiple real-world projects. These are designed to build your portfolio and demonstrate practical skills to potential employers.",
  },
  {
    question: "How long is the internship?",
    answer:
      "Program durations range from 6 to 12 weeks depending on the domain and level. Each program has a structured curriculum with weekly milestones and deliverables.",
  },
  {
    question: "Is mentorship provided?",
    answer:
      "Yes, every intern is paired with an industry mentor who provides weekly live sessions, code reviews, career guidance, and personalized feedback throughout the program.",
  },
];

export const footerDomains = [
  "Artificial Intelligence",
  "Web Development",
  "Data Science",
  "Cloud Computing",
  "Cyber Security",
  "UI/UX Design",
];

export const footerResources = [
  { label: "Blog", href: "#" },
  { label: "Career Guide", href: "#" },
  { label: "Mentor Network", href: "#" },
];

export const footerQuickLinks = [
  { label: "About Us", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Domains", href: "#domains" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];
