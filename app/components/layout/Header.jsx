"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { name: "Projects", href: "projects" },
  { name: "License", href: "certifications" },
  { name: "Education", href: "education" },
  { name: "Contact", href: "contact" },
];

const Header = ({ profileName }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-40 bg-black/30 backdrop-blur-md"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <button onClick={scrollToTop} className="text-xl font-bold text-slate-200">
            {profileName.split(" ")[0]}
          </button>

          {/* Navigasi Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-slate-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Tombol Hamburger */}
          <div className="md:hidden">
            <button onClick={handleMenuToggle} aria-label="Buka menu">
              <FiMenu className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        navLinks={navLinks}
        onLinkClick={handleLinkClick}
      />
    </>
  );
};

export default Header;
