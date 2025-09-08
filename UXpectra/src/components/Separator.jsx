import { motion } from 'framer-motion';

export default function Separator({ className = "" }) {
  return (
    <motion.div
      className={`w-full h-px bg-gray-200 ${className}`}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    />
  );
}
