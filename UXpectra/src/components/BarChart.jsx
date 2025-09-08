import { motion } from 'framer-motion';

export default function BarChart({ data, className = "" }) {
  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      <h3 className="text-lg font-semibold mb-4">Bar Chart</h3>
      
      <div className="flex items-end justify-between h-64 space-x-2">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="flex-1 flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <motion.div
              className="w-full bg-gradient-to-t from-primary to-accent rounded-t"
              style={{ height: `${(item.value / maxValue) * 200}px` }}
              initial={{ height: 0 }}
              animate={{ height: `${(item.value / maxValue) * 200}px` }}
              transition={{ duration: 1, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            />
            <span className="text-xs text-gray-500 mt-2">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
