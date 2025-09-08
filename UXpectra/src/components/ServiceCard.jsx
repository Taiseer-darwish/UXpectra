import React from 'react';
import { motion } from 'framer-motion';

export default function ServiceCard({ icon, title, description }) {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-card border-t-2 border-accent p-6 py-8 text-center"
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.div 
        className="w-10 mb-4 m-auto h-10 rounded-full bg-gradient-to-r from-primary to-accent text-white grid place-items-center"
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {icon}
      </motion.div>
      <motion.div 
        className="font-semibold my-4"
        initial={{ opacity: 0.8 }}
        whileHover={{ opacity: 1 }}
      >
        {title}
      </motion.div>
      <motion.p 
        className="text-sm text-[#1E293B] tracking-wider leading-loose"
        initial={{ opacity: 0.9 }}
        whileHover={{ opacity: 1 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
}