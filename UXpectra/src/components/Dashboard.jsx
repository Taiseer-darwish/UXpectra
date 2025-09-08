import { motion } from 'framer-motion';

export default function Dashboard({ widgets, className = "" }) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {widgets.map((widget, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-lg shadow-md p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -5, scale: 1.02 }}
        >
          <h3 className="text-lg font-semibold mb-4">{widget.title}</h3>
          <div className="text-3xl font-bold text-primary mb-2">{widget.value}</div>
          <div className="text-sm text-gray-600">{widget.description}</div>
        </motion.div>
      ))}
    </div>
  );
}
