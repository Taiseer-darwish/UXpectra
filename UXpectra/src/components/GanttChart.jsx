import { motion } from 'framer-motion';

export default function GanttChart({ tasks, className = "" }) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      <h3 className="text-lg font-semibold mb-4">Gantt Chart</h3>
      
      <div className="space-y-2">
        {tasks.map((task, index) => (
          <motion.div
            key={index}
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="w-32 text-sm font-medium">{task.name}</div>
            <div className="flex-1 bg-gray-200 rounded-full h-6 relative">
              <motion.div
                className="bg-primary h-6 rounded-full flex items-center justify-center text-white text-xs"
                style={{ width: `${task.progress}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${task.progress}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                {task.progress}%
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
