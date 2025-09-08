import { motion } from 'framer-motion';
import { useState } from 'react';

export default function DataTable({ data, columns, className = "" }) {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [filteredData, setFilteredData] = useState(data);

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });

    const sortedData = [...filteredData].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });

    setFilteredData(sortedData);
  };

  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <motion.th
                key={index}
                className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort(column.key)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ backgroundColor: '#f3f4f6' }}
              >
                <div className="flex items-center space-x-1">
                  <span>{column.label}</span>
                  {sortConfig.key === column.key && (
                    <motion.span
                      animate={{ rotate: sortConfig.direction === 'asc' ? 0 : 180 }}
                      transition={{ duration: 0.3 }}
                    >
                      {sortConfig.direction === 'asc' ? '↑' : '↓'}
                    </motion.span>
                  )}
                </div>
              </motion.th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, rowIndex) => (
            <motion.tr
              key={rowIndex}
              className="border-b border-gray-200 hover:bg-gray-50"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: rowIndex * 0.1 }}
              whileHover={{ backgroundColor: '#f9fafb' }}
            >
              {columns.map((column, cellIndex) => (
                <motion.td
                  key={cellIndex}
                  className="px-4 py-2 text-sm text-gray-900"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: rowIndex * 0.1 + cellIndex * 0.05 }}
                >
                  {row[column.key]}
                </motion.td>
              ))}
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
