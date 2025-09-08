import { motion } from 'framer-motion';

export default function FunnelChart({ data, className = "" }) {
  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      <h3 className="text-lg font-semibold mb-4">Funnel Chart</h3>
      
      <div className="space-y-2">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <motion.div
              className="bg-primary text-white px-4 py-2 rounded"
              style={{ width: `${(item.value / maxValue) * 100}%` }}
              initial={{ width: 0 }}
              animate={{ width: `${(item.value / maxValue) * 100}%` }}
              transition={{ duration: 1, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              {item.label}: {item.value}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
