import { motion } from 'framer-motion';

export default function RadarChart({ data, className = "" }) {
  const maxValue = Math.max(...data.map(d => d.value));
  const centerX = 100;
  const centerY = 100;
  const radius = 80;

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      <h3 className="text-lg font-semibold mb-4">Radar Chart</h3>
      
      <div className="flex items-center justify-center">
        <svg width="200" height="200">
          {data.map((item, index) => {
            const angle = (index / data.length) * 2 * Math.PI - Math.PI / 2;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            
            return (
              <motion.circle
                key={index}
                cx={x}
                cy={y}
                r="4"
                fill="#6366f1"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.5 }}
              />
            );
          })}
          
          <motion.path
            d={data.map((item, index) => {
              const angle = (index / data.length) * 2 * Math.PI - Math.PI / 2;
              const x = centerX + radius * Math.cos(angle);
              const y = centerY + radius * Math.sin(angle);
              return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
            }).join(' ') + ' Z'}
            fill="rgba(99, 102, 241, 0.2)"
            stroke="#6366f1"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
      </div>
    </div>
  );
}
