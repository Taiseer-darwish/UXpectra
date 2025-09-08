import { motion } from 'framer-motion';

export default function EmojiRating({ rating, maxRating = 5, className = "" }) {
  const emojis = ['😞', '😐', '🙂', '😊', '😍'];
  
  return (
    <div className={`flex items-center ${className}`}>
      {[...Array(maxRating)].map((_, index) => (
        <motion.span
          key={index}
          className="text-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileHover={{ scale: 1.2 }}
        >
          {emojis[Math.min(index, emojis.length - 1)]}
        </motion.span>
      ))}
    </div>
  );
}
