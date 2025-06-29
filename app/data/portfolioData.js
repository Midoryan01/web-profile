import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiInstagram,
  FiAward,
  FiBookOpen,
} from "react-icons/fi";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiFigma,
  SiNodedotjs,
  SiMysql,
  SiPython,
  SiTypescript,
} from "react-icons/si";

export const profile = {
  name: "RYAN ADI SANJAYA",
  title: "System Analyst & Fullstack Developer",
  bio: "I'm passionate about system analysis and web development—understanding complex processes, identifying real user needs, and translating them into efficient, intuitive digital solutions that bridge the gap between business goals and technology.",
  avatar: "/profile.jpg",
  cvUrl: "/CV-Orion-Nebula.pdf",
  email: "ryanadisanjaya@gmail.com",
  socials: {
    github: "https://github.com/Midoryan01",
    linkedin: "https://linkedin.com/in/ryanadi-sanjaya/",
    instagram: "https://instagram.com/ryan.as27",
  },
};

export const projects = [
  {
    title: "Listrikku",
    description:
      "Dasbor analitik interaktif untuk memantau armada antargalaksi. Dibuat dengan Next.js dan visualisasi data D3.js.",
    image: "https://placehold.co/600x400/020010/E2E8F0?text=Project+Alpha",
    link: "#",
    tags: ["Node.js"],
  },
  {
    title: "Pengaduan Masyarakat",
    description:
      "Platform e-commerce dengan pengalaman belanja 3D yang imersif menggunakan Three.js dan React.",
    image: "https://placehold.co/600x400/020010/E2E8F0?text=Project+Beta",
    link: "#",
    tags: ["React", "Three.js", "e-Commerce"],
  },
  {
    title: "Web Frozen Food",
    description:
      "A custom-built inventory management platform designed for the frozen food supply chain. It enables real-time visibility of stock across warehouses, improving accuracy and reducing manual errors.",
    image: "/frozen-food.png",
    link: "#",
    tags: ["E-Commerce", "Next.js", "Prisma"],
  },
];

export const skills = [
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "React", icon: <SiReact /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Python", icon: <SiPython /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Figma", icon: <SiFigma /> },
];

export const certifications = [
  {
    name: "Skema Analis Sistem (System Analyst)",
    issuer: "BNSP (Badan Nasional Sertifikasi Profesi)",
    date: "Juni 2024",
    link: "#",
    icon: <FiAward />,
  },
  {
    name: "Google Project Management Certificate",
    issuer: "Coursera & Google",
    date: "Maret 2023",
    link: "#",
    icon: <FiAward />,
  },
  {
    name: "Full-Stack Web Development with React",
    issuer: "The Hong Kong University of Science and Technology",
    date: "Januari 2023",
    link: "#",
    icon: <FiAward />,
  },
  {
    name: "Python for Everybody Specialization",
    issuer: "University of Michigan",
    date: "Oktober 2022",
    link: "#",
    icon: <FiAward />,
  },
];

export const educations = [
  {
    institution: "Bina Sarana Informatika University",
    degree: "Bachelor’s Degree in Information Systems",
    period: "2021 - present",
    description:
      "Focused on full-stack web development, and system analysis to build efficient and intelligent digital solutions.",
    icon: <FiBookOpen />,
  },
  {
    institution: "SMA Negeri 19 Kota Bekasi",
    period: "2019 - 2021",
    description: "",
    icon: <FiBookOpen />,
  },
];

export const socialConfig = {
  title: "Contact Me",
  subtitle: "Feel free to get in touch with me through the following channels.",
  socials: [
    {
      icon: <FiGithub />,
      label: "GitHub",
      url: profile.socials.github,
      ariaLabel: "Contact on GitHub",
    },
    {
      icon: <FiLinkedin />,
      label: "LinkedIn",
      url: profile.socials.linkedin,
      ariaLabel: "Contact on LinkedIn",
    },
    {
      icon: <FiInstagram />,
      label: "Instagram",
      url: profile.socials.instagram,
      ariaLabel: "Contact on Instagram",
    },
    {
      icon: <FiMail />,
      label: "Email",
      url: `mailto:${profile.email}`,
      ariaLabel: "Contact via Email",
    },
  ],
};
