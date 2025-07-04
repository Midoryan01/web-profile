import { motion } from 'framer-motion';
import { sectionVariants } from '@/app/data/animationVariants';
import { otherSkills } from '@/app/data/portfolioData';

const SkillsSection = ({ skills }) => {
    const duplicatedSkills = [...skills, ...skills]; 

    return (
        <motion.section
            id="skills"
            className="py-24 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={sectionVariants}
        >
            <h2 className="text-4xl font-bold text-center mb-12">Development Tools</h2>

            {/* Scrolling skill icons */}
            <div className="w-full overflow-x-hidden">
                <motion.div
                    className="flex gap-10"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{ ease: "linear", duration: 20, repeat: Infinity }}
                >
                    {duplicatedSkills.map((skill, index) => (
                        <div key={index} className="flex-shrink-0">
                            <div className="flex flex-col items-center justify-center gap-2 w-32 h-32 p-4 rounded-lg bg-slate-900/60">
                                <span className="text-5xl text-purple-400">{skill.icon}</span>
                                <span className="text-slate-300">{skill.name}</span>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Other skills (System Analysis tools) */}
            <div className="mt-16">
                <h3 className="text-3xl font-semibold mb-8">Other Skills</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    {otherSkills.map((item, index) => (
                        <div key={index} className="bg-slate-800/60 p-6 rounded-xl flex flex-col items-center gap-2 shadow-lg">
                            <div className="text-4xl">{item.icon}</div>
                            <span className="text-slate-200 text-center">{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default SkillsSection;
