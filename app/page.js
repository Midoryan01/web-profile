"use client";

import { useScroll, useSpring, motion } from "framer-motion";

// Import data
import { profile, projects, certifications, educations, skills, socialConfig } from "@/app/data/portfolioData";

// Import komponen layout
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";

// Import komponen seksi
import HeroSection from "@/app/components/sections/HeroSection";
import ProjectsSection from "@/app/components/sections/ProjectsSection";
import CertificationsSection from "@/app/components/sections/CertificationsSection";
import EducationSection from "@/app/components/sections/EducationSection";
import SkillsSection from "@/app/components/sections/SkillsSection";

// Import komponen UI
import CursorLight from "@/app/components/ui/CursorLight";

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Komponen yang tidak terkait langsung dengan struktur, seperti efek */}
      <CursorLight />
      <div className="stars"></div>
      <div className="twinkling"></div>
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-purple-500 origin-left z-50" style={{ scaleX }} />

      <div className="relative z-10 font-[Space Grotesk]">
        
        <Header profileName={profile.name} onLinkClick={handleScroll} />
        
        <main className="container mx-auto px-4 sm:px-6 lg:px-8">
          <HeroSection profile={profile} socialConfig={socialConfig} />
          <ProjectsSection projects={projects} />
          <CertificationsSection certifications={certifications} />
          <EducationSection educations={educations} />
          <SkillsSection skills={skills} />
        </main>
        
        <Footer socialConfig={socialConfig} profileName={profile.name} />

      </div>
    </>
  );
}