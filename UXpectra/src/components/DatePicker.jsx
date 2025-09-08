import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function DatePicker({ value, onChange, className = "" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(value || new Date());

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    onChange?.(date);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-3 py-2 text-left border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {selectedDate.toLocaleDateString()}
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Calendar
              selectedDate={selectedDate}
              onDateSelect={handleDateSelect}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
