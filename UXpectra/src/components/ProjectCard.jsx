import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ProjectCard({ id, img, title, description, skills }) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Link to={`/projects/${id}`} className="block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
        <motion.img 
          src={img} 
          alt={title} 
          className="aspect-video w-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <div className="p-4 mb-3">
          <motion.div 
            className="font-semibold"
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
          >
            {title}
          </motion.div>
          <div className="flex justify-between items-start">
            <p className="text-sm text-[#1E293B] mt-1">{description}</p>
          </div>
          <motion.div 
            className="flex gap-2 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                className="px-2 py-0.5 rounded-full text-xs bg-[#F0E9F6] text-[#1E293B]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + (index * 0.1) }}
                whileHover={{ scale: 1.1, backgroundColor: "#E0D4E8" }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
}