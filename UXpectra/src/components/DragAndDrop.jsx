import { motion } from 'framer-motion';
import { useState } from 'react';

export default function DragAndDrop({ onDrop, className = "" }) {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    onDrop?.(files);
  };

  return (
    <motion.div
      className={`border-2 border-dashed rounded-lg p-6 text-center ${
        isDragOver ? 'border-primary bg-primary/5' : 'border-gray-300'
      } ${className}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="text-gray-500"
        animate={{ scale: isDragOver ? 1.1 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <p className="text-sm font-medium text-gray-900">
          Drag and drop files here
        </p>
        <p className="text-xs text-gray-500">
          Multiple files supported
        </p>
      </motion.div>
    </motion.div>
  );
}
