import { motion } from 'framer-motion';

export default function AnimatedProgress({ progress, className = "", delay = 0 }) {
  return (
    <div className={`w-full bg-gray-200 rounded-full h-2 ${className}`}>
      <motion.div
        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 1.5, delay, ease: "easeOut" }}
      />
    </div>
  );
}
