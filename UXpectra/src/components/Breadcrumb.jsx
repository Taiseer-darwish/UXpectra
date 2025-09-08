import { motion } from 'framer-motion';

export default function Breadcrumb({ items, className = "" }) {
  return (
    <nav className={`flex ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && (
            <motion.span
              className="mx-2 text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              /
            </motion.span>
          )}
          <motion.a
            href={item.href}
            className={`text-sm ${
              index === items.length - 1
                ? 'text-gray-500'
                : 'text-primary hover:text-primary-dark'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -2 }}
          >
            {item.label}
          </motion.a>
        </div>
      ))}
    </nav>
  );
}
