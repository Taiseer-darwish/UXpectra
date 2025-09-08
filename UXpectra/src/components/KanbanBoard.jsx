import { motion } from 'framer-motion';

export default function KanbanBoard({ columns, className = "" }) {
  return (
    <div className={`flex space-x-4 ${className}`}>
      {columns.map((column, columnIndex) => (
        <motion.div
          key={columnIndex}
          className="flex-1 bg-gray-100 rounded-lg p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: columnIndex * 0.1 }}
        >
          <h3 className="font-semibold mb-4">{column.title}</h3>
          
          <div className="space-y-2">
            {column.cards.map((card, cardIndex) => (
              <motion.div
                key={cardIndex}
                className="bg-white rounded-lg p-3 shadow-sm"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: cardIndex * 0.1 }}
                whileHover={{ y: -2, scale: 1.02 }}
              >
                <div className="font-medium">{card.title}</div>
                <div className="text-sm text-gray-600">{card.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
