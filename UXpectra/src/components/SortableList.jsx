import { motion } from 'framer-motion';
import { useState } from 'react';

export default function SortableList({ items, onReorder, className = "" }) {
  const [draggedItem, setDraggedItem] = useState(null);

  const handleDragStart = (e, index) => {
    setDraggedItem(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    if (draggedItem !== null && draggedItem !== dropIndex) {
      const newItems = [...items];
      const draggedItemData = newItems[draggedItem];
      newItems.splice(draggedItem, 1);
      newItems.splice(dropIndex, 0, draggedItemData);
      onReorder?.(newItems);
    }
    setDraggedItem(null);
  };

  return (
    <div className={className}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, index)}
          className="p-3 border border-gray-200 rounded-lg mb-2 cursor-move hover:bg-gray-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.02 }}
          whileDrag={{ scale: 1.05, rotate: 5 }}
        >
          {item}
        </motion.div>
      ))}
    </div>
  );
}
