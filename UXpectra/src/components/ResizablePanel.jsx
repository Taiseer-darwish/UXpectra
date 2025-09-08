import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ResizablePanel({ children, className = "" }) {
  const [isResizing, setIsResizing] = useState(false);
  const [width, setWidth] = useState(300);

  const handleMouseDown = (e) => {
    setIsResizing(true);
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (isResizing) {
      setWidth(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {children}
      
      <motion.div
        className="absolute right-0 top-0 w-1 h-full bg-gray-300 cursor-col-resize hover:bg-primary"
        onMouseDown={handleMouseDown}
        whileHover={{ backgroundColor: '#6366f1' }}
        whileDrag={{ backgroundColor: '#6366f1' }}
      />
    </motion.div>
  );
}
