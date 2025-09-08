import { motion } from 'framer-motion';

export default function TeamCard({ name, role }) {
  return (
    <motion.div 
      className="bg-white rounded-[16px] shadow-md p-5 text-center"
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.div 
        className="w-24 h-24 rounded-full mx-auto overflow-hidden bg-surface mb-4"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
      ></motion.div>
      <motion.div 
        className="font-semibold"
        initial={{ opacity: 0.8 }}
        whileHover={{ opacity: 1 }}
      >
        {name}
      </motion.div>
      <motion.div 
        className="text-xs text-primary"
        initial={{ opacity: 0.7 }}
        whileHover={{ opacity: 1 }}
      >
        {role}
      </motion.div>
      <motion.p 
        className="text-xs text-[#1E293B] mt-3"
        initial={{ opacity: 0.8 }}
        whileHover={{ opacity: 1 }}
      >
        Full-stack developer with a frontend focus. Specializes in modern JavaScript frameworks and responsive design.
      </motion.p>
    </motion.div>
  )
}


