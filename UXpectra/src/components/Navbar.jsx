import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const navItemClass = ({ isActive }) =>
  `block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
    isActive ? 'text-primary' : 'text-slate-600 hover:text-ink'
  }`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.header
      className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 h-14 relative">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link to="/" className="font-semibold text-ink">
            <span className="text-xl">UXpectra</span>
          </Link>
        </motion.div>

        {/* Desktop Menu - Centered */}
        <motion.div
          className="hidden md:flex items-center justify-center gap-1 flex-grow"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <NavLink to="/" className={navItemClass}>
              Home
            </NavLink>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <NavLink to="/about" className={navItemClass}>
              About
            </NavLink>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <NavLink to="/projects" className={navItemClass}>
              Projects
            </NavLink>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <NavLink to="/services" className={navItemClass}>
              Services
            </NavLink>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <NavLink to="/contact" className={navItemClass}>
              Contact
            </NavLink>
          </motion.div>
        </motion.div>

        {/* Desktop Contact Button / Hamburger Icon */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center"
        >
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 text-white bg-primary hover:bg-indigo-600 px-4 py-2 rounded-[12px] text-sm shadow transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </Link>
          <button
            className="md:hidden text-2xl text-slate-600 focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </motion.div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-14 left-0 w-full bg-white/95 backdrop-blur border-b border-slate-200 z-50"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <ul className="flex flex-col items-center py-4">
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <NavLink to="/" className={navItemClass} onClick={toggleMenu}>
                  Home
                </NavLink>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <NavLink to="/about" className={navItemClass} onClick={toggleMenu}>
                  About
                </NavLink>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <NavLink to="/projects" className={navItemClass} onClick={toggleMenu}>
                  Projects
                </NavLink>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <NavLink to="/services" className={navItemClass} onClick={toggleMenu}>
                  Services
                </NavLink>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <NavLink to="/contact" className={navItemClass} onClick={toggleMenu}>
                  Contact
                </NavLink>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}