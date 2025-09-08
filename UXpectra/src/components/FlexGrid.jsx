import { motion } from 'framer-motion';

export default function FlexGrid({ items, className = "" }) {
  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="flex-1 min-w-0 bg-white rounded-lg shadow-md overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -5, scale: 1.02 }}
        >
          {item}
        </motion.div>
      ))}
    </div>
  );
}
