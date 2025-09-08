import { motion } from 'framer-motion';

export default function GaugeChart({ value, max = 100, className = "" }) {
  const percentage = (value / max) * 100;
  const angle = (percentage / 100) * 180;

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      <h3 className="text-lg font-semibold mb-4">Gauge Chart</h3>
      
      <div className="flex items-center justify-center">
        <svg width="200" height="100" className="transform -rotate-90">
          <motion.path
            d="M 20 80 A 60 60 0 0 1 180 80"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="20"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          
          <motion.path
            d="M 20 80 A 60 60 0 0 1 180 80"
            fill="none"
            stroke="#6366f1"
            strokeWidth="20"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: percentage / 100 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          
          <motion.circle
            cx="100"
            cy="80"
            r="8"
            fill="#6366f1"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          />
        </svg>
      </div>
      
      <div className="text-center mt-4">
        <motion.span
          className="text-2xl font-bold text-primary"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          {value}
        </motion.span>
        <span className="text-gray-500"> / {max}</span>
      </div>
    </div>
  );
}
