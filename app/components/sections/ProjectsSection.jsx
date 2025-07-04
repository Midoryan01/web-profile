import { motion } from 'framer-motion';
import { sectionVariants, projectCardVariants } from '@/app/data/animationVariants';
import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';

// Komponen Card bisa dipisah lagi jika lebih kompleks
const ProjectCard = ({ project }) => (
  <motion.a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="block group"
    variants={projectCardVariants}
    initial="initial"
    whileInView="inView"
    viewport={{ once: true, amount: 0.3 }}
  >
    <div className="relative overflow-hidden h-full rounded-2xl p-6 transition-all duration-300 ease-out bg-white/5 backdrop-blur-md border border-white/20 hover:!scale-105 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-white/30">
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl group-hover:w-60 group-hover:h-60 transition-all duration-500"></div>
      <Image src={project.image} alt={project.title} width={600} height={400} className="rounded-md w-full mb-4 opacity-80 group-hover:opacity-100 transition-opacity" />
      <h3 className="text-xl font-bold text-slate-100">{project.title}</h3>
      <p className="text-slate-400 mt-2 mb-4 text-sm text-justify">{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map((tag) => (<span key={tag} className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded-full">{tag}</span>))}
      </div>
      <FiArrowUpRight className="absolute top-4 right-4 text-slate-500 text-2xl group-hover:text-white transition-colors" />
    </div>
  </motion.a>
);


const ProjectsSection = ({ projects }) => {
  return (
    <motion.section
      id="projects"
      className="py-24 relative z-10 bg-black/40 backdrop-blur-sm"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={sectionVariants}
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-white">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </motion.section>
  );
};

export default ProjectsSection;