import { motion } from 'framer-motion';

export default function ScatterPlot({ data, className = "" }) {
  const maxX = Math.max(...data.map(d => d.x));
  const minX = Math.min(...data.map(d => d.x));
  const maxY = Math.max(...data.map(d => d.y));
  const minY = Math.min(...data.map(d => d.y));

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      <h3 className="text-lg font-semibold mb-4">Scatter Plot</h3>
      
      <div className="relative h-64">
        <svg className="w-full h-full">
          {data.map((item, index) => (
            <motion.circle
              key={index}
              cx={((item.x - minX) / (maxX - minX)) * 100}
              cy={100 - ((item.y - minY) / (maxY - minY)) * 100}
              r="6"
              fill={item.color || '#6366f1'}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.5 }}
            />
          ))}
        </svg>
      </div>
    </div>
  );
}
