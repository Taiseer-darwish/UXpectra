import { motion } from 'framer-motion';

export default function TableLayout({ headers, rows, className = "" }) {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <motion.th
                key={index}
                className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {header}
              </motion.th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <motion.tr
              key={rowIndex}
              className="border-b border-gray-200 hover:bg-gray-50"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: rowIndex * 0.1 }}
              whileHover={{ backgroundColor: '#f9fafb' }}
            >
              {row.map((cell, cellIndex) => (
                <motion.td
                  key={cellIndex}
                  className="px-4 py-2 text-sm text-gray-900"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: rowIndex * 0.1 + cellIndex * 0.05 }}
                >
                  {cell}
                </motion.td>
              ))}
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
