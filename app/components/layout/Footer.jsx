// src/app/components/layout/Footer.jsx

"use client"; // <<< Ini adalah baris penting yang harus ditambahkan!

import { motion } from 'framer-motion'; // Path yang disarankan untuk Framer Motion
// Jika path di atas masih bermasalah, coba ganti dengan: import { motion } from 'framer-motion';


const Footer = ({ socialConfig, profileName }) => {
  return (
    <motion.footer
      id="contact"
      className="py-16 mt-16 bg-black/50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-4xl font-bold mb-3 text-slate-100">{socialConfig.title}</h3>
        <p className="text-slate-400 max-w-lg mx-auto mb-8">{socialConfig.subtitle}</p>

        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-slate-300">
          {socialConfig.socials.map((social) => (
            <a
              key={social.url}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.ariaLabel}
              className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-300"
            >
              <span className="text-xl">{social.icon}</span>
              <span>{social.label}</span>
            </a>
          ))}
        </div>

        <div className="mt-12 text-sm text-slate-500">
          &copy; {new Date().getFullYear()} {profileName}.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
