import { motion } from 'framer-motion';

export default function TreeDiagram({ nodes, edges, className = "" }) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      <h3 className="text-lg font-semibold mb-4">Tree Diagram</h3>
      
      <div className="relative h-64">
        <svg className="w-full h-full">
          {edges.map((edge, index) => (
            <motion.line
              key={index}
              x1={edge.x1}
              y1={edge.y1}
              x2={edge.x2}
              y2={edge.y2}
              stroke="#6366f1"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: index * 0.1 }}
            />
          ))}
          
          {nodes.map((node, index) => (
            <motion.circle
              key={index}
              cx={node.x}
              cy={node.y}
              r="8"
              fill="#6366f1"
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
