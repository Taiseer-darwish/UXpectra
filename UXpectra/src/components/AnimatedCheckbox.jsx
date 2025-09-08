import { motion } from 'framer-motion';
import { useState } from 'react';

export default function AnimatedCheckbox({ label, className = "", ...props }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <motion.label
      className={`flex items-center cursor-pointer ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.input
        type="checkbox"
        className="sr-only"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
        {...props}
      />
      <motion.div
        className={`w-5 h-5 border-2 rounded transition-colors ${
          isChecked ? 'bg-primary border-primary' : 'border-gray-300'
        }`}
        animate={{
          scale: isChecked ? 1.1 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        {isChecked && (
          <motion.svg
            className="w-full h-full text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <motion.path
              d="M20 6L9 17l-5-5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            />
          </motion.svg>
        )}
      </motion.div>
      {label && (
        <span className="ml-2 text-sm text-gray-700">{label}</span>
      )}
    </motion.label>
  );
}
