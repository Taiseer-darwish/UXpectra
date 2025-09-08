import { motion } from 'framer-motion';

export default function Chip({ children, onRemove, className = "" }) {
  return (
    <motion.div
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
    >
      {children}
      {onRemove && (
        <motion.button
          onClick={onRemove}
          className="ml-2 text-gray-500 hover:text-gray-700"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ×
        </motion.button>
      )}
    </motion.div>
  );
}
