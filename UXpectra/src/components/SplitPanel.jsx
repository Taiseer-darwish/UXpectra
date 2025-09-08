import { motion } from 'framer-motion';
import { useState } from 'react';

export default function SplitPanel({ leftContent, rightContent, className = "" }) {
  const [leftWidth, setLeftWidth] = useState(50);
  const [isResizing, setIsResizing] = useState(false);

  const handleMouseDown = (e) => {
    setIsResizing(true);
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (isResizing) {
      const containerWidth = e.currentTarget.offsetWidth;
      const newLeftWidth = (e.clientX / containerWidth) * 100;
      setLeftWidth(Math.min(Math.max(newLeftWidth, 20), 80));
    }
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  return (
    <div
      className={`flex h-full ${className}`}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <motion.div
        className="flex-1 overflow-hidden"
        style={{ width: `${leftWidth}%` }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {leftContent}
      </motion.div>
      
      <motion.div
        className="w-1 bg-gray-300 cursor-col-resize hover:bg-primary"
        onMouseDown={handleMouseDown}
        whileHover={{ backgroundColor: '#6366f1' }}
        whileDrag={{ backgroundColor: '#6366f1' }}
      />
      
      <motion.div
        className="flex-1 overflow-hidden"
        style={{ width: `${100 - leftWidth}%` }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {rightContent}
      </motion.div>
    </div>
  );
}
