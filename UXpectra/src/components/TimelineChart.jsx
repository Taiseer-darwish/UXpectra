import { motion } from 'framer-motion';

export default function TimelineChart({ events, className = "" }) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      <h3 className="text-lg font-semibold mb-4">Timeline Chart</h3>
      
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>
        
        {events.map((event, index) => (
          <motion.div
            key={index}
            className="relative flex items-center mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <motion.div
              className="absolute left-3 w-2 h-2 bg-primary rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.5 }}
            />
            
            <div className="ml-8">
              <div className="font-semibold">{event.title}</div>
              <div className="text-sm text-gray-500">{event.date}</div>
              <div className="text-sm text-gray-600">{event.description}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
