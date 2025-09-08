import { motion } from 'framer-motion';

export default function AnimatedForm({ children, className = "" }) {
  return (
    <motion.form
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.form>
  );
}
