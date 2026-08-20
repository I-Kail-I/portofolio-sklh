export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tech: string[];
  demoUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Application",
    category: "Web Dev",
    description: "A full featured commerce app with cart & checkout system.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/ecommerce",
  },
  {
    id: 2,
    title: "Attendance & Face Detection",
    category: "Mobile",
    description:
      "Mobile application for employee attendance tracking with face detection di UI.",
    tech: ["React Native", "Expo", "Firebase"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/I-Kail-I/logbook-project",
  },
  {
    id: 3,
    title: "School Management System",
    category: "Web Dev",
    description: "Web application for managing school data and student grades.",
    tech: ["Next.js", "Tailwind CSS", "PostgreSQL"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/school-sys",
  },
  {
    id: 4,
    title: "Personal Landing Page",
    category: "UI/UX",
    description: "Modern landing page design with smooth animations.",
    tech: ["Figma", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/landing-page",
  },
];

export const projectCategories: string[] = ["All", "Web Dev", "Mobile", "UI/UX"];

export interface Skill {
  name: string;
  level: string;
  percentage: number;
}

export interface SkillGroup {
  title: string;
  icon: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Development",
    icon: "💻",
    skills: [
      { name: "HTML / CSS", level: "Advanced", percentage: 90 },
      { name: "JavaScript / TypeScript", level: "Advanced", percentage: 85 },
      { name: "React.js / Next.js", level: "Intermediate", percentage: 80 },
      { name: "Tailwind CSS", level: "Advanced", percentage: 90 },
    ],
  },
  {
    title: "Backend Development",
    icon: "⚙️",
    skills: [
      { name: "Node.js / Express", level: "Intermediate", percentage: 75 },
      { name: "PostgreSQL / MySQL", level: "Intermediate", percentage: 70 },
      { name: "RESTful API", level: "Advanced", percentage: 85 },
    ],
  },
  {
    title: "Tools & Workflow",
    icon: "🛠️",
    skills: [
      { name: "Git / GitHub", level: "Advanced", percentage: 85 },
      { name: "Figma (UI/UX)", level: "Intermediate", percentage: 75 },
      { name: "Docker", level: "Beginner", percentage: 50 },
    ],
  },
];

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  verificationUrl: string;
}

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "JavaScript Essentials 2",
    issuer: "Cisco",
    date: "June 11, 2026",
    credentialId: "Cert ID: 92a2f8bd-dd1d-456e-b46b-1a1003eb0467",
    verificationUrl:
      "https://www.credly.com/badges/f7a98a24-4e8f-4352-81aa-f6b762fb4a11/public_url",
  },
  {
    id: 2,
    title: "JavaScript Essentials 2",
    issuer: "Cisco",
    date: "June 11, 2026",
    credentialId: "Cert ID: 92a2f8bd-dd1d-456e-b46b-1a1003eb0467",
    verificationUrl:
      "https://www.credly.com/badges/f7a98a24-4e8f-4352-81aa-f6b762fb4a11/public_url",
  },
  {
    id: 3,
    title: "JavaScript Essentials 2",
    issuer: "Cisco",
    date: "June 11, 2026",
    credentialId: "Cert ID: 92a2f8bd-dd1d-456e-b46b-1a1003eb0467",
    verificationUrl:
      "https://www.credly.com/badges/f7a98a24-4e8f-4352-81aa-f6b762fb4a11/public_url",
  },
];

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  stars: number;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Lalu. S.K.",
    role: "Kepala Jurusan RPL",
    company: "SMK TELKOM MAKASSAR",
    avatar: "AD",
    stars: 5,
    quote:
      "Siswa yang sangat berdedikasi dan memiliki pemahaman mendalam tentang konsep modern web development. Hasil kodingannya selalu bersih dan rapi.",
  },
  {
    id: 2,
    name: "Bu Rani.",
    role: "Guru Produktif Web",
    company: "SMK TELKOM MAKASSAR",
    avatar: "SR",
    stars: 5,
    quote:
      "Selalu menyelesaikan tugas proyek tepat waktu dengan kualitas UI/UX yang sangat menarik dan fungsionalitas yang teruji.",
  },
];

export interface ProfileInfo {
  label: string;
  value: string;
}

export const profileInfo: ProfileInfo[] = [
  { label: "Nama", value: "Mikail Arianos" },
  { label: "Kelas", value: "XII RPL 1" },
  { label: "Sekolah", value: "SMK TELKOM MAKASSAR" },
  { label: "Lokasi", value: "Indonesia" },
];

export interface EducationItem {
  period: string;
  title: string;
  description: string;
  active?: boolean;
}

export const education: EducationItem[] = [
  {
    period: "2024 — Sekarang",
    title: "SMK ... — XII RPL 1",
    description:
      "Mempelajari pemrograman web, mobile, dan desktop. Fokus pada pengembangan fullstack web application.",
    active: true,
  },
  {
    period: "2021 — 2024",
    title: "SMP ...",
    description:
      "Masa SMP dimana mulai tertarik dengan dunia teknologi dan komputer.",
  },
];

export interface ContactInfoItem {
  icon: string;
  title: string;
  value: string;
  description: string;
}

export const contactInfo: ContactInfoItem[] = [
  {
    icon: "📧",
    title: "Email",
    value: "arianosmikail5@gmail.com",
    description: "Kirim email kapan saja, saya akan membalasnya secepatnya.",
  },
  {
    icon: "📱",
    title: "Telepon",
    value: "+62 823-9941-0288",
    description: "Tersedia di jam sekolah (08.00 - 15.00 WIB).",
  },
  {
    icon: "📍",
    title: "Lokasi",
    value: "Indonesia",
    description: "Bisa bekerja sama secara remote maupun offline.",
  },
];

export interface SocialLink {
  label: string;
  url: string;
}

export const contactSocialLinks: SocialLink[] = [
  { label: "Github", url: "https://github.com/i-Kail-I" },
  { label: "Instagram", url: "https://www.instagram.com/kaiil._/" },
  {
    label: "LinkdIn",
    url: "https://www.linkedin.com/in/mikail-arianos-30a268356/",
  },
];

export interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/skills", label: "Skills" },
  { href: "/certificates", label: "Certificates" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export const quickLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
  { href: "/certificates", label: "certificates" },
  { href: "/skills", label: "skills" },
  { href: "/testimonials", label: "testimonials" },
];

export const footerSocialLinks: NavLink[] = [
  { href: "github.com/i-kail-i", label: "GitHub" },
  { href: "https://www.instagram.com/kaiil._/", label: "LinkedIn" },
  {
    href: "https://www.linkedin.com/in/mikail-arianos-30a268356/",
    label: "Instagram",
  },
];
