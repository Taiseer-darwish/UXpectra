import { motion } from 'framer-motion';

export default function Heatmap({ data, className = "" }) {
  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      <h3 className="text-lg font-semibold mb-4">Heatmap</h3>
      
      <div className="grid grid-cols-7 gap-1">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="aspect-square rounded"
            style={{
              backgroundColor: `rgba(99, 102, 241, ${item.value / maxValue})`
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ scale: 1.1 }}
          />
        ))}
      </div>
    </div>
  );
}
