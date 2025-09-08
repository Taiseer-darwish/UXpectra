import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Search({ onSearch, className = "" }) {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <motion.form
      onSubmit={handleSearch}
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Search..."
        className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
        whileFocus={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      />
      
      <motion.div
        className="absolute left-3 top-1/2 transform -translate-y-1/2"
        animate={{ scale: isFocused ? 1.1 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </motion.div>
      
      <AnimatePresence>
        {query && (
          <motion.button
            type="submit"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-primary text-white text-sm rounded-md hover:bg-primary-dark"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Search
          </motion.button>
        )}
      </AnimatePresence>
    </motion.form>
  );
}
