import { motion } from 'framer-motion';

export default function Treemap({ data, className = "" }) {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      <h3 className="text-lg font-semibold mb-4">Treemap</h3>
      
      <div className="grid grid-cols-2 gap-2 h-64">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="bg-primary text-white p-2 rounded flex items-center justify-center"
            style={{ gridRow: `span ${Math.ceil((item.value / total) * 4)}` }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-center">
              <div className="font-semibold">{item.label}</div>
              <div className="text-sm opacity-80">{item.value}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
