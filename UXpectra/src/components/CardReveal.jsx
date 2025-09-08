import { motion } from 'framer-motion';

export default function CardReveal({ children, className = "", delay = 0, direction = "up" }) {
  const directionVariants = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: 50 },
    right: { x: -50 },
  };

  return (
    <motion.div
      className={className}
      initial={{ 
        opacity: 0, 
        ...directionVariants[direction] 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      transition={{ 
        duration: 0.8, 
        delay, 
        ease: "easeOut" 
      }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      {children}
    </motion.div>
  );
}
