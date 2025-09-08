import { motion } from 'framer-motion';

export default function ListLayout({ items, className = "" }) {
  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ x: 5, scale: 1.02 }}
        >
          {item}
        </motion.div>
      ))}
    </div>
  );
}
