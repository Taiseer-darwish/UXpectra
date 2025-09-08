import { motion } from 'framer-motion';
import { useState } from 'react';

export default function AnimatedRadio({ label, name, value, className = "", ...props }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <motion.label
      className={`flex items-center cursor-pointer ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.input
        type="radio"
        name={name}
        value={value}
        className="sr-only"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
        {...props}
      />
      <motion.div
        className={`w-5 h-5 border-2 rounded-full transition-colors ${
          isChecked ? 'bg-primary border-primary' : 'border-gray-300'
        }`}
        animate={{
          scale: isChecked ? 1.1 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        {isChecked && (
          <motion.div
            className="w-2 h-2 bg-white rounded-full m-auto"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2, delay: 0.1 }}
          />
        )}
      </motion.div>
      {label && (
        <span className="ml-2 text-sm text-gray-700">{label}</span>
      )}
    </motion.label>
  );
}
