import { motion } from 'framer-motion';

export default function Tips({ tips, className = "" }) {
  return (
    <div className={`space-y-6 ${className}`}>
      {tips.map((tip, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-lg shadow-md p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -5, scale: 1.02 }}
        >
          <h3 className="text-lg font-semibold mb-4">{tip.title}</h3>
          <div className="text-sm text-gray-600 mb-4">{tip.description}</div>
          <div className="text-2xl font-bold text-primary">{tip.value}</div>
        </motion.div>
      ))}
    </div>
  );
}
