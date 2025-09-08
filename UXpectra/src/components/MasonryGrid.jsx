import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export default function MasonryGrid({ items, columns = 3, className = "" }) {
  const [columnHeights, setColumnHeights] = useState(new Array(columns).fill(0));
  const [columnItems, setColumnItems] = useState(new Array(columns).fill(null).map(() => []));
  const containerRef = useRef();

  useEffect(() => {
    const newColumnHeights = new Array(columns).fill(0);
    const newColumnItems = new Array(columns).fill(null).map(() => []);

    items.forEach((item, index) => {
      const shortestColumn = newColumnHeights.indexOf(Math.min(...newColumnHeights));
      newColumnItems[shortestColumn].push(item);
      newColumnHeights[shortestColumn] += item.height || 200;
    });

    setColumnHeights(newColumnHeights);
    setColumnItems(newColumnItems);
  }, [items, columns]);

  return (
    <div ref={containerRef} className={`grid gap-4 ${className}`} style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
      {columnItems.map((column, columnIndex) => (
        <div key={columnIndex} className="space-y-4">
          {column.map((item, itemIndex) => (
            <motion.div
              key={itemIndex}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {item.content}
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
}
