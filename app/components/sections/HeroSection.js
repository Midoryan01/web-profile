import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { sectionVariants, itemVariants } from "@/app/data/animationVariants";

const HeroSection = ({ profile, socialConfig }) => {
  return (
    <motion.section
      id="hero"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center md:justify-between text-center md:text-left gap-8"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      whileInView="visible" 
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="md:w-3/5">
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-100"
        >
          {profile.name}
        </motion.h1>
        <motion.h2
          variants={itemVariants}
          className="text-xl sm:text-2xl lg:text-3xl mt-2 font-light bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400"
        >
          {profile.title}
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-xl mx-auto md:mx-0 text-slate-300 text-lg leading-relaxed text-justify"
        >
          {profile.bio}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-wrap justify-center md:justify-start items-center gap-4"
        >
          <motion.a
              href={profile.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-black/30 backdrop-blur-md border border-slate-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
              whileHover={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                borderColor: "rgb(100, 116, 139)",
                scale: 1.05,
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FiArrowUpRight />
              <span>CV</span>
            </motion.a>


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
  );
};

export default HeroSection;
