import { motion } from 'framer-motion';

export default function ProgressRating({ rating, maxRating = 5, className = "" }) {
  return (
    <div className={`flex items-center ${className}`}>
      {[...Array(maxRating)].map((_, index) => (
        <motion.div
          key={index}
          className="w-8 h-8 rounded-full border-2 border-gray-300 mr-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileHover={{ scale: 1.1 }}
        >
          {index < rating && (
            <motion.div
              className="w-full h-full bg-yellow-400 rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}
