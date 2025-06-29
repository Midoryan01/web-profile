import { motion } from 'framer-motion';
import { sectionVariants, itemVariants } from '@/app/data/animationVariants';
import { FiArrowUpRight } from 'react-icons/fi';

const CertificationCard = ({ cert }) => (
    <motion.a
        href={cert.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
        variants={itemVariants}
    >
        <div className="relative flex items-center gap-6 h-full rounded-2xl p-6 transition-all duration-300 ease-out bg-white/5 backdrop-blur-md border border-white/20 hover:!scale-105 hover:shadow-lg hover:shadow-purple-500/10 hover:border-white/30">
            <div className="flex-shrink-0 text-3xl text-purple-400">{cert.icon}</div>
            <div className="flex-grow">
                <h3 className="font-bold text-slate-100">{cert.name}</h3>
                <p className="text-slate-400 text-sm mt-1">{cert.issuer} &bull; {cert.date}</p>
            </div>
            <FiArrowUpRight className="absolute top-4 right-4 text-slate-500 text-2xl group-hover:text-white transition-colors" />
        </div>
    </motion.a>
);

const CertificationsSection = ({ certifications }) => {
    return (
        <motion.section
            id="certifications"
            className="py-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={sectionVariants}
        >
            <h2 className="text-4xl font-bold text-center mb-12 text-white">License & Certification</h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                    <CertificationCard key={index} cert={cert} />
                ))}
            </div>
        </motion.section>
    );
};

export default CertificationsSection;