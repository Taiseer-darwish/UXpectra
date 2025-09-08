import { motion } from 'framer-motion';

export default function Metrics({ metrics, className = "" }) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${className}`}>
      {metrics.map((metric, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-lg shadow-md p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -5, scale: 1.02 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-primary">{metric.value}</div>
              <div className="text-sm text-gray-600">{metric.label}</div>
            </div>
            <div className="text-3xl text-primary">{metric.icon}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
