import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export default function VirtualScroll({ items, itemHeight, className = "" }) {
  const [visibleItems, setVisibleItems] = useState([]);
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      setScrollTop(container.scrollTop);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const containerHeight = container.clientHeight;
    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = Math.min(
      startIndex + Math.ceil(containerHeight / itemHeight) + 1,
      items.length
    );

    setVisibleItems(
      items.slice(startIndex, endIndex).map((item, index) => ({
        ...item,
        index: startIndex + index,
      }))
    );
  }, [scrollTop, itemHeight, items]);

  return (
    <div
      ref={containerRef}
      className={`overflow-auto ${className}`}
      style={{ height: '400px' }}
    >
      <div style={{ height: items.length * itemHeight, position: 'relative' }}>
        {visibleItems.map((item) => (
          <motion.div
            key={item.index}
            className="absolute w-full"
            style={{
              height: itemHeight,
              top: item.index * itemHeight,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {item.content}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
