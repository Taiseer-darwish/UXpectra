import { motion } from 'framer-motion';
import { useState } from 'react';

export default function AnimatedInput({ label, className = "", ...props }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative">
      <motion.input
        className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 ${className}`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        whileFocus={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        {...props}
      />
      {label && (
        <motion.label
          className={`absolute left-3 transition-all duration-300 ${
            isFocused ? 'top-0 text-xs text-primary' : 'top-2 text-sm text-gray-500'
          }`}
          animate={{
            y: isFocused ? -8 : 0,
            scale: isFocused ? 0.8 : 1,
          }}
          transition={{ duration: 0.2 }}
        >
          {label}
        </motion.label>
      )}
    </div>
  );
}
