import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";

const MobileMenu = ({ isOpen, onClose, navLinks, onLinkClick }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-lg flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button onClick={onClose} className="absolute top-5 right-5" aria-label="Tutup menu">
        <FiX className="h-8 w-8 text-white" />
      </button>
      <nav className="flex flex-col items-center space-y-8">
        {navLinks.map(link => (
          <a key={link.href} href={`#${link.href}`} onClick={(e) => onLinkClick(e, link.href)} className="text-slate-300 hover:text-white transition-colors text-2xl">
            {link.name}
          </a>
        ))}
      </nav>
    </motion.div>
  );
};

export default MobileMenu;