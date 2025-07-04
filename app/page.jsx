
"use client";

import { profile, projects, certifications, educations, skills, socialConfig } from "@/app/data/portfolioData";
import HeroSection from "@/app/components/sections/HeroSection";
import ProjectsSection from "@/app/components/sections/ProjectsSection";
import CertificationsSection from "@/app/components/sections/CertificationsSection";
import EducationSection from "@/app/components/sections/EducationSection";
import SkillsSection from "@/app/components/sections/SkillsSection";

export default function HomePage() {


  return (
    <>
      <HeroSection profile={profile} socialConfig={socialConfig} />
      <ProjectsSection projects={projects} />
      <CertificationsSection certifications={certifications} />
      <EducationSection educations={educations} />
      <SkillsSection skills={skills} />
    </>
  );
}
