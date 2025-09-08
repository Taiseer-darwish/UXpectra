import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function TimePicker({ value, onChange, className = "" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState(value || new Date());

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    onChange?.(time);
    setIsOpen(false);
  };

  const hours = Array.from({ length: 24 }, (_, i) => i);
  const minutes = Array.from({ length: 60 }, (_, i) => i);

  return (
    <div className={`relative ${className}`}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-3 py-2 text-left border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {selectedTime.toLocaleTimeString()}
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10 p-4"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex space-x-4">
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Hours</h3>
                <div className="max-h-32 overflow-y-auto">
                  {hours.map((hour) => (
                    <motion.button
                      key={hour}
                      onClick={() => handleTimeSelect(new Date(selectedTime.setHours(hour)))}
                      className={`w-full px-2 py-1 text-sm rounded ${
                        selectedTime.getHours() === hour
                          ? 'bg-primary text-white'
                          : 'hover:bg-gray-100'
                      }`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: hour * 0.01 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {hour.toString().padStart(2, '0')}
                    </motion.button>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Minutes</h3>
                <div className="max-h-32 overflow-y-auto">
                  {minutes.map((minute) => (
                    <motion.button
                      key={minute}
                      onClick={() => handleTimeSelect(new Date(selectedTime.setMinutes(minute)))}
                      className={`w-full px-2 py-1 text-sm rounded ${
                        selectedTime.getMinutes() === minute
                          ? 'bg-primary text-white'
                          : 'hover:bg-gray-100'
                      }`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: minute * 0.01 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {minute.toString().padStart(2, '0')}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
