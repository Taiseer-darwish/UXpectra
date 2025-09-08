import { NavLink, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const navItemClass = ({ isActive }) =>
  `px-3 py-2 text-sm font-medium rounded-md transition-colors ${
    isActive ? 'text-primary' : 'text-slate-600 hover:text-ink'
  }`

export default function Navbar() {
  return (
    <motion.header 
      className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 h-14">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link to="/" className="font-semibold text-ink">
            <span className="text-xl">UXpectra</span>
          </Link>
        </motion.div>
        
        <motion.div 
          className="hidden md:flex items-center gap-1"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <NavLink to="/" className={navItemClass}>Home</NavLink>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <NavLink to="/about" className={navItemClass}>About</NavLink>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <NavLink to="/projects" className={navItemClass}>Projects</NavLink>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <NavLink to="/services" className={navItemClass}>Services</NavLink>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <NavLink to="/contact" className={navItemClass}>Contact</NavLink>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="/contact" className="hidden md:inline-flex items-center gap-2 text-white bg-primary hover:bg-indigo-600 px-4 py-2 rounded-[12px] text-sm shadow transition-all duration-300 hover:scale-105">
            Get In Touch
          </Link>
        </motion.div>
      </nav>
    </motion.header>
  )
}


