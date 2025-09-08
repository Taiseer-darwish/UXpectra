import { motion } from 'framer-motion';
import { useState } from 'react';

export default function TabPanel({ tabs, className = "" }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={className}>
      <div className="flex border-b border-gray-200">
        {tabs.map((tab, index) => (
          <motion.button
            key={index}
            className={`px-4 py-2 font-medium text-sm relative ${
              activeTab === index ? 'text-primary' : 'text-gray-600 hover:text-ink'
            }`}
            onClick={() => setActiveTab(index)}
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            {tab.label}
            {activeTab === index && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                layoutId="activeTab"
                initial={false}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            )}
          </motion.button>
        ))}
      </div>
      
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mt-4"
      >
        {tabs[activeTab].content}
      </motion.div>
    </div>
  );
}
