import { motion } from 'framer-motion';
import { useState } from 'react';

export default function AnimatedSwitch({ label, className = "", ...props }) {
  const [isOn, setIsOn] = useState(false);

  return (
    <motion.label
      className={`flex items-center cursor-pointer ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.input
        type="checkbox"
        className="sr-only"
        checked={isOn}
        onChange={(e) => setIsOn(e.target.checked)}
        {...props}
      />
      <motion.div
        className={`w-12 h-6 rounded-full transition-colors ${
          isOn ? 'bg-primary' : 'bg-gray-300'
        }`}
        animate={{
          backgroundColor: isOn ? '#6366f1' : '#d1d5db',
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="w-5 h-5 bg-white rounded-full shadow-md"
          animate={{
            x: isOn ? 24 : 2,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </motion.div>
      {label && (
        <span className="ml-2 text-sm text-gray-700">{label}</span>
      )}
    </motion.label>
  );
}
