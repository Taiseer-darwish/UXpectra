import { motion } from 'framer-motion';

export default function SankeyDiagram({ data, className = "" }) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      <h3 className="text-lg font-semibold mb-4">Sankey Diagram</h3>
      
      <div className="relative h-64">
        <svg className="w-full h-full">
          {data.map((item, index) => (
            <motion.rect
              key={index}
              x={item.x}
              y={item.y}
              width={item.width}
              height={item.height}
              fill={item.color || '#6366f1'}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            />
          ))}
        </svg>
      </div>
    </div>
  );
}
