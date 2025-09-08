import { motion } from 'framer-motion';

export default function Timeline({ items, className = "" }) {
  return (
    <div className={`relative ${className}`}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="relative flex items-start mb-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
          <div className="ml-4">
            <motion.h3
              className="text-lg font-semibold text-ink"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 + 0.1 }}
              viewport={{ once: true }}
            >
              {item.title}
            </motion.h3>
            <motion.p
              className="text-slate-600 mt-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
              viewport={{ once: true }}
            >
              {item.description}
            </motion.p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
