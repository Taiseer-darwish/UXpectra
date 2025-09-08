import { motion } from 'framer-motion';
import { useState } from 'react';

export default function AnimatedRange({ label, min = 0, max = 100, className = "", ...props }) {
  const [value, setValue] = useState(min);

  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        <motion.input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #6366f1 0%, #6366f1 ${((value - min) / (max - min)) * 100}%, #e5e7eb ${((value - min) / (max - min)) * 100}%, #e5e7eb 100%)`
          }}
          {...props}
        />
        <motion.div
          className="absolute top-0 left-0 h-2 bg-primary rounded-lg"
          style={{
            width: `${((value - min) / (max - min)) * 100}%`
          }}
          initial={{ width: 0 }}
          animate={{ width: `${((value - min) / (max - min)) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span>{min}</span>
        <span className="font-medium text-primary">{value}</span>
        <span>{max}</span>
      </div>
    </div>
  );
}
