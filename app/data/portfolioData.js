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
  title: "Fullstack Developer & System Analyst",
  bio: "I'm passionate about system analysis and web development, understanding complex processes, identifying real user needs, and translating them into efficient, intuitive digital solutions that bridge the gap between business goals and technology.",
  avatar: "/profile-bg.png",
  cvUrl: "https://drive.google.com/file/d/1cXpNT7K4z6dMV-VLdaNyV7yIzyluOrx1/view?usp=sharing",
  email: "ryanadisanjaya@gmail.com",
  socials: {
    github: "https://github.com/Midoryan01",
    linkedin: "https://linkedin.com/in/ryanadi-sanjaya/",
    instagram: "https://instagram.com/ryan.as27",
  },
};

export const projects = [

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

export const otherSkills = [
        { name: "UML (Use Case, Activity Diagram, Sequence Diagram, Class Diagram)", icon: "🧩" },
        { name: "ERD & LRS ", icon: "🗂️" },
        { name: "Flowchart", icon: "🔁" },
        { name: "Mockup & Wireframe", icon: "🖼️" },
    ];

export const certifications = [
  {
    name: "Skema Analis Sistem (System Analyst)",
    issuer: "BNSP (Badan Nasional Sertifikasi Profesi)",
    date: "September 2024",
    link: "https://drive.google.com/file/d/1aadoJxW04DpdhSlPs2uDSPK4e1w3jjx7/view?usp=sharing",
    icon: <FiAward />,
  },
  {
    name: "IT BootCamp Software Development",
    issuer: "UBSI (Universitas Bina Sarana Informatika)",
    date: "June 2023",
    link: "https://drive.google.com/file/d/1lDG-K50V5nRl74xPHo_ghngsDezmkdQl/view?usp=sharing",
    icon: <FiAward />,
  },
  {
    name: "Belajar Dasar Data Science",
    issuer: "Dicoding Academy",
    date: "September 2023",
    link: "https://drive.google.com/file/d/15iqQJUIxVoXljkIj6aar1GrJPh6X5XKd/view?usp=sharing",
    icon: <FiAward />,
  },
  {
    name: "Memulai Pemrograman dengan Python",
    issuer: "Dicoding Academy",
    date: "September 2023",
    link: "https://drive.google.com/file/d/1y3p0REOCdE3KlqA7TiSYFY3K4SZ240Oh/view?usp=sharing",
    icon: <FiAward />,
  },
];

export const educations = [
  {
    institution: "Bina Sarana Informatika University",
    degree: "Bachelor’s Degree in Information Systems",
    period: "2021 - present",
    description:
      "Focused on full-stack web development and system analysis to build efficient, scalable, and intelligent digital solutions. Experienced in bridging technical and business requirements through effective communication and problem-solving.",
    icon: <FiBookOpen />,
  },
  {
    institution: "SMAN 19 Kota Bekasi",
    period: "2019 - 2021",
    description: 
      "Strong interest in information technology with effective communication skills between technical and business teams. My social-science background enhances my ability to understand business processes and user needs.",
    icon: <FiBookOpen />,
  },
];

export const socialConfig = {
  title: "Contact Me",
  subtitle: "Feel free to get in touch with me through the following channels.",
  socials: [
    {
      icon: <FiGithub />,
      label: "Midoryan01",
      url: profile.socials.github,
      ariaLabel: "Contact on GitHub",
    },
    {
      icon: <FiLinkedin />,
      label: "Ryan Adi Sanjaya",
      url: profile.socials.linkedin,
      ariaLabel: "Contact on LinkedIn",
    },
    {
      icon: <FiInstagram />,
      label: "ryan.as27",
      url: profile.socials.instagram,
      ariaLabel: "Contact on Instagram",
    },
    {
      icon: <FiMail />,
      label: "ryanadisanjaya@gmail.com",
      url: `mailto:${profile.email}`,
      ariaLabel: "Contact via Email",
    },
  ],
};
