import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function ContextMenu({ children, menuItems, className = "" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleContextMenu = (e) => {
    e.preventDefault();
    setPosition({ x: e.clientX, y: e.clientY });
    setIsOpen(true);
  };

  const handleClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleClick);
      return () => document.removeEventListener('click', handleClick);
    }
  }, [isOpen]);

  return (
    <div onContextMenu={handleContextMenu}>
      {children}
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`fixed bg-white border border-gray-200 rounded-lg shadow-lg z-50 ${className}`}
            style={{ left: position.x, top: position.y }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            {menuItems.map((item, index) => (
              <motion.button
                key={index}
                className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                onClick={() => {
                  item.onClick?.();
                  setIsOpen(false);
                }}
                whileHover={{ backgroundColor: "#f3f4f6" }}
                whileTap={{ scale: 0.98 }}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
