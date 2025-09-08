import { motion } from 'framer-motion';

export default function ImageReveal({ src, alt, className = "", delay = 0 }) {
  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.2, delay: delay + 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      />
    </motion.div>
  );
}
