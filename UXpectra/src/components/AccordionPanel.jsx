import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function AccordionPanel({ items, className = "" }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className={className}>
      {items.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-lg mb-2">
          <motion.button
            className="w-full px-4 py-3 text-left font-medium text-ink hover:bg-gray-50 transition-colors"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            whileHover={{ backgroundColor: "#f9fafb" }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex justify-between items-center">
              <span>{item.title}</span>
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                ▼
              </motion.span>
            </div>
          </motion.button>
          
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-4 py-3 text-slate-600">
                  {item.content}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
