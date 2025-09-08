import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function ExpandablePanel({ title, children, className = "" }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`border border-gray-200 rounded-lg ${className}`}>
      <motion.button
        className="w-full px-4 py-3 text-left font-medium text-ink hover:bg-gray-50 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ backgroundColor: "#f9fafb" }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex justify-between items-center">
          <span>{title}</span>
          <motion.span
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            ▼
          </motion.span>
        </div>
      </motion.button>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 py-3 text-slate-600">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
