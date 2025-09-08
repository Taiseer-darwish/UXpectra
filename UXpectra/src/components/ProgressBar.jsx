import { motion } from 'framer-motion';

export default function ProgressBar({ progress, className = "", delay = 0 }) {
  return (
    <motion.div
      className={`w-full bg-gray-200 rounded-full h-2 ${className}`}
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: `${progress}%` }}
        transition={{ duration: 1.2, delay: delay + 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      />
    </motion.div>
  );
}
