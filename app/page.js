"use client";

import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiArrowUpRight,
  FiDownload,
  FiMail,
  FiInstagram,
  FiAward,
  FiBookOpen,
  FiMenu, 
  FiX,    
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

// --- KOMPONEN: EFEK CAHAYA KURSOR ---
const CursorLight = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  useEffect(() => {
    const handleMouseMove = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return <div className="cursor-light" style={{ transform: `translate(${position.x}px, ${position.y}px)` }} />;
};

// --- DATA KONFIGURASI ---
const profile = {
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

const projects = [
  { title: "Project Alpha: Starship Dashboard", description: "Dasbor analitik interaktif untuk memantau armada antargalaksi. Dibuat dengan Next.js dan visualisasi data D3.js.", image: "https://placehold.co/600x400/020010/E2E8F0?text=Project+Alpha", link: "#", tags: ["Next.js", "Data Viz", "UI/UX"] },
  { title: "Project Beta: Comet Commerce", description: "Platform e-commerce dengan pengalaman belanja 3D yang imersif menggunakan Three.js dan React.", image: "https://placehold.co/600x400/020010/E2E8F0?text=Project+Beta", link: "#", tags: ["React", "Three.js", "e-Commerce"] },
  { title: "Project Gamma: Nebula Navigator", description: "Aplikasi pemetaan kosmik untuk penjelajah luar angkasa, menampilkan data real-time dan navigasi cerdas.", image: "https://placehold.co/600x400/020010/E2E8F0?text=Project+Gamma", link: "#", tags: ["Mobile App", "API", "UX Research"] },
];

const skills = [
  { name: "Next.js", icon: <SiNextdotjs /> }, { name: "React", icon: <SiReact /> }, { name: "TypeScript", icon: <SiTypescript /> }, { name: "JavaScript", icon: <SiJavascript /> }, { name: "Python", icon: <SiPython /> }, { name: "Node.js", icon: <SiNodedotjs /> }, { name: "Tailwind CSS", icon: <SiTailwindcss /> }, { name: "MySQL", icon: <SiMysql /> }, { name: "Figma", icon: <SiFigma /> },
];

const certifications = [
  { name: "Skema Analis Sistem (System Analyst)", issuer: "BNSP (Badan Nasional Sertifikasi Profesi)", date: "Juni 2024", link: "#" }, { name: "Google Project Management Certificate", issuer: "Coursera & Google", date: "Maret 2023", link: "#" }, { name: "Full-Stack Web Development with React", issuer: "The Hong Kong University of Science and Technology", date: "Januari 2023", link: "#" }, { name: "Python for Everybody Specialization", issuer: "University of Michigan", date: "Oktober 2022", link: "#" },
];

const educations = [
  { institution: "Bina Sarana Informatika University", degree: "Bachelor’s Degree in Information Systems", period: "2021 - present", 
    description: "Focused on full-stack web development, and system analysis to build efficient and intelligent digital solutions." },
  { institution: "SMA Negeri 19 Kota Bekasi", period: "2019 - 2021", 
    description: "" },
];

const socialConfig = {  
  title: "Contact Me",
  subtitle: "Feel free to get in touch with me through the following channels.",
  socials: [
    { icon: <FiGithub />, label: "GitHub", url: profile.socials.github, ariaLabel: "Contact on GitHub" }, { icon: <FiLinkedin />, label: "LinkedIn", url: profile.socials.linkedin, ariaLabel: "Contact on LinkedIn" }, { icon: <FiInstagram />, label: "Instagram", url: profile.socials.instagram, ariaLabel: "Contact on Instagram" }, { icon: <FiMail />, label: "Email", url: `mailto:${profile.email}`, ariaLabel: "Contact via Email" },
  ],
};

const sectionVariants = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 } } };
const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const projectCardVariants = { initial: { opacity: 0, y: 50, scale: 0.9 }, inView: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } } };

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // --- [BARU] State untuk mengontrol menu mobile ---
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    // --- [BARU] Tutup menu setelah link di-klik ---
    setIsMenuOpen(false);
  };

  return (
    <>
      <Head>
        <title>{profile.name} | Portofolio</title>
        <meta name="description" content={`Portofolio milik ${profile.name}, seorang ${profile.title}`} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </Head>

      <CursorLight />

      <div className="stars"></div>
      <div className="twinkling"></div>
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-purple-500 origin-left z-50" style={{ scaleX }} />

      <div className="relative z-10 font-[Space Grotesk]">
        <motion.header className="fixed top-0 left-0 right-0 z-40 bg-black/30 backdrop-blur-md" initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <span className="text-xl font-bold text-slate-200">{profile.name.split(" ")[0]}</span>
            
            {/* --- [BARU] Navigasi Desktop (disembunyikan di mobile) --- */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#projects" onClick={(e) => handleScroll(e, "projects")} className="text-slate-300 hover:text-white transition-colors">Projects</a>
              <a href="#certifications" onClick={(e) => handleScroll(e, "certifications")} className="text-slate-300 hover:text-white transition-colors">License</a>
              <a href="#education" onClick={(e) => handleScroll(e, "education")} className="text-slate-300 hover:text-white transition-colors">Education</a>
              <a href="#contact" onClick={(e) => handleScroll(e, "contact")} className="text-slate-300 hover:text-white transition-colors">Contact</a>
            </nav>

            {/* --- [BARU] Tombol Hamburger (hanya tampil di mobile) --- */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Buka menu">
                <FiMenu className="h-6 w-6 text-white" />
              </button>
            </div>
          </div>
        </motion.header>

        {/* --- [BARU] Panel Menu Mobile --- */}
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-lg flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-5 right-5" aria-label="Tutup menu">
              <FiX className="h-8 w-8 text-white" />
            </button>
            <nav className="flex flex-col items-center space-y-8">
              <a href="#projects" onClick={(e) => handleScroll(e, "projects")} className="text-slate-300 hover:text-white transition-colors text-2xl">Projects</a>
              <a href="#certifications" onClick={(e) => handleScroll(e, "certifications")} className="text-slate-300 hover:text-white transition-colors text-2xl">License</a>
              <a href="#education" onClick={(e) => handleScroll(e, "education")} className="text-slate-300 hover:text-white transition-colors text-2xl">Education</a>
              <a href="#contact" onClick={(e) => handleScroll(e, "contact")} className="text-slate-300 hover:text-white transition-colors text-2xl">Contact</a>
            </nav>
          </motion.div>
        )}
        <main className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.section
            id="hero"
            className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center md:justify-between text-center md:text-left gap-8"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="md:w-3/5">
              <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-100">
                {profile.name}
              </motion.h1>
              <motion.h2 variants={itemVariants} className="text-xl sm:text-2xl lg:text-3xl mt-2 font-light bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                {profile.title}
              </motion.h2>
              <motion.p variants={itemVariants} className="mt-6 max-w-xl mx-auto md:mx-0 text-slate-300 text-lg leading-relaxed">
                {profile.bio}
              </motion.p>
              
              {/* === Hero === */}
              <motion.div
                variants={itemVariants}
                className="mt-8 flex flex-wrap justify-center md:justify-start items-center gap-4"
              >
                <motion.a
                  href={profile.cvUrl}
                  download
                  className="flex items-center gap-2 bg-black/30 backdrop-blur-md border border-slate-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                  whileHover={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    borderColor: "rgb(100, 116, 139)",
                    scale: 1.05,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FiDownload />
                  <span>Download CV</span>
                </motion.a>
                
                {/* --- Ikon Sosial --- */}
                <div className="flex items-center gap-4">
                  {socialConfig.socials.map((social) => (
                    <a
                      key={social.url}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.ariaLabel}
                      className="text-slate-400 hover:text-white text-2xl transition-colors duration-300"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </motion.div>
              {/* ===  === */}

            </div>
            <motion.div
              variants={itemVariants}
              className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 relative"
              animate={{
                y: [0, -15, 0],
                transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <Image
                src={profile.avatar}
                alt="Avatar"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
                priority
              />
              <div className="absolute inset-0 rounded-full bg-purple-500/30 blur-2xl -z-10"></div>
            </motion.div>
          </motion.section>

          <motion.section id="projects" className="py-24 relative z-10 bg-black/40 backdrop-blur-sm" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
             <h2 className="text-4xl font-bold text-center mb-12 text-white">My Projects</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {projects.map((project, index) => (
                 <motion.a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="block group" variants={projectCardVariants} initial="initial" whileInView="inView" viewport={{ once: true, amount: 0.3 }}>
                   <div className="relative overflow-hidden h-full rounded-2xl p-6 transition-all duration-300 ease-out bg-white/5 backdrop-blur-md border border-white/20 hover:!scale-105 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-white/30">
                     <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl group-hover:w-60 group-hover:h-60 transition-all duration-500"></div>
                     <Image src={project.image} alt={project.title} width={600} height={400} className="rounded-md w-full mb-4 opacity-80 group-hover:opacity-100 transition-opacity" />
                     <h3 className="text-xl font-bold text-slate-100">{project.title}</h3>
                     <p className="text-slate-400 mt-2 mb-4 text-sm">{project.description}</p>
                     <div className="flex flex-wrap gap-2 mt-auto">
                       {project.tags.map((tag) => (<span key={tag} className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded-full">{tag}</span>))}
                     </div>
                     <FiArrowUpRight className="absolute top-4 right-4 text-slate-500 text-2xl group-hover:text-white transition-colors" />
                   </div>
                 </motion.a>
               ))}
             </div>
           </motion.section>

           <motion.section id="certifications" className="py-24" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
             <h2 className="text-4xl font-bold text-center mb-12 text-white">License & Certification</h2>
             <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
               {certifications.map((cert, index) => (
                 <motion.a key={index} href={cert.link} target="_blank" rel="noopener noreferrer" className="block group" variants={itemVariants}>
                   <div className="relative flex items-center gap-6 h-full rounded-2xl p-6 transition-all duration-300 ease-out bg-white/5 backdrop-blur-md border border-white/20 hover:!scale-105 hover:shadow-lg hover:shadow-purple-500/10 hover:border-white/30">
                     <div className="flex-shrink-0 text-3xl text-purple-400"><FiAward /></div>
                     <div className="flex-grow">
                       <h3 className="font-bold text-slate-100">{cert.name}</h3>
                       <p className="text-slate-400 text-sm mt-1">{cert.issuer} &bull; {cert.date}</p>
                     </div>
                     <FiArrowUpRight className="absolute top-4 right-4 text-slate-500 text-2xl group-hover:text-white transition-colors" />
                   </div>
                 </motion.a>
               ))}
             </div>
           </motion.section>
           
           <motion.section id="education" className="py-24" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
             <h2 className="text-4xl font-bold text-center mb-12 text-white">Education</h2>
             <div className="max-w-3xl mx-auto flex flex-col gap-8">
               {educations.map((edu, index) => (
                 <motion.div key={index} className="flex items-start gap-6 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/20" variants={itemVariants}>
                   <div className="text-3xl text-purple-400 mt-1"><FiBookOpen /></div>
                   <div>
                     <h3 className="text-xl font-bold text-slate-100">{edu.institution}</h3>
                     <p className="text-slate-300 font-medium mt-1">{edu.degree}</p>
                     <p className="text-slate-400 text-sm italic mt-1">{edu.period}</p>
                     <p className="text-slate-400 mt-3 text-sm">{edu.description}</p>
                   </div>
                 </motion.div>
               ))}
             </div>
           </motion.section>

           <motion.section id="skills" className="py-24 text-center" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={sectionVariants}>
             <h2 className="text-4xl font-bold text-center mb-12">Development Tools</h2>
             <div className="w-full overflow-x-hidden">
               <motion.div className="flex gap-10" animate={{ x: ["0%", "-100%"] }} transition={{ ease: "linear", duration: 40, repeat: Infinity }}>
                 {[...skills, ...skills].map((skill, index) => (<div key={index} className="flex-shrink-0"><div className="flex flex-col items-center justify-center gap-2 w-32 h-32 p-4 rounded-lg bg-slate-900/60"><span className="text-5xl text-purple-400">{skill.icon}</span><span className="text-slate-300">{skill.name}</span></div></div>))}
               </motion.div>
             </div>
           </motion.section>
        </main>

        {/* === Footer === */}
        <motion.footer id="contact" className="py-16 mt-16 bg-black/50" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-4xl font-bold mb-3 text-slate-100">{socialConfig.title}</h3>
            <p className="text-slate-400 max-w-lg mx-auto mb-8">{socialConfig.subtitle}</p>

            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-slate-300">
              {socialConfig.socials.map((social) => (
                <a key={social.url} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.ariaLabel} className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-300">
                  <span className="text-xl">{social.icon}</span>
                  <span>{social.label}</span>
                </a>
              ))}
            </div>

            <div className="mt-12 text-sm text-slate-500">
              &copy; {new Date().getFullYear()} {profile.name}.
            </div>
          </div>
        </motion.footer>
      </div>
    </>
  );
}