import { motion } from 'framer-motion';

export default function ThumbsRating({ rating, maxRating = 5, className = "" }) {
  return (
    <div className={`flex items-center ${className}`}>
      {[...Array(maxRating)].map((_, index) => (
        <motion.span
          key={index}
          className={`text-2xl ${
            index < rating ? 'text-green-500' : 'text-gray-300'
          }`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileHover={{ scale: 1.2 }}
        >
          👍
        </motion.span>
      ))}
    </div>
  );
}
