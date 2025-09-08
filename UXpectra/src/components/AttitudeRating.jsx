import { motion } from 'framer-motion';

export default function AttitudeRating({ rating, maxRating = 5, className = "" }) {
  const attitudes = ['😞', '😐', '🙂', '😊', '😍'];
  
  return (
    <div className={`flex items-center ${className}`}>
      {[...Array(maxRating)].map((_, index) => (
        <motion.span
          key={index}
          className={`text-2xl ${
            index < rating ? 'opacity-100' : 'opacity-30'
          }`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: index < rating ? 1 : 0.3, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileHover={{ scale: 1.2 }}
        >
          {attitudes[Math.min(index, attitudes.length - 1)]}
        </motion.span>
      ))}
    </div>
  );
}
