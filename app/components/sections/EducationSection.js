import { motion } from 'framer-motion';
import { sectionVariants, itemVariants } from '@/app/data/animationVariants';

const EducationCard = ({ edu }) => (
    <motion.div className="flex items-start gap-6 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/20" variants={itemVariants}>
        <div className="text-3xl text-purple-400 mt-1">{edu.icon}</div>
        <div>
            <h3 className="text-xl font-bold text-slate-100">{edu.institution}</h3>
            <p className="text-slate-300 font-medium mt-1">{edu.degree}</p>
            <p className="text-slate-400 text-sm italic mt-1">{edu.period}</p>
            <p className="text-slate-400 mt-3 text-sm text-justify">{edu.description}</p>
        </div>
    </motion.div>
);

const EducationSection = ({ educations }) => {
    return (
        <motion.section
            id="education"
            className="py-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={sectionVariants}
        >
            <h2 className="text-4xl font-bold text-center mb-12 text-white">Education</h2>
            <div className="max-w-3xl mx-auto flex flex-col gap-8">
                {educations.map((edu, index) => (
                    <EducationCard key={index} edu={edu} />
                ))}
            </div>
        </motion.section>
    );
};

export default EducationSection;