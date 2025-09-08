import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

export default function Counter({ end, className = "", delay = 0 }) {
  const count = useMotionValue(0);
  const rounded = useSpring(count, { duration: 2000 });

  useEffect(() => {
    const timer = setTimeout(() => {
      count.set(end);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [count, end, delay]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {Math.round(rounded)}
    </motion.span>
  );
}
