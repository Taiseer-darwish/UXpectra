import { motion } from 'framer-motion';

export default function LineChart({ data, className = "" }) {
  const maxValue = Math.max(...data.map(d => d.value));
  const minValue = Math.min(...data.map(d => d.value));

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      <h3 className="text-lg font-semibold mb-4">Line Chart</h3>
      
      <div className="relative h-64">
        <svg className="w-full h-full">
          <motion.path
            d={data.map((item, index) => {
              const x = (index / (data.length - 1)) * 100;
              const y = 100 - ((item.value - minValue) / (maxValue - minValue)) * 100;
              return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
            }).join(' ')}
            fill="none"
            stroke="#6366f1"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          
          {data.map((item, index) => (
            <motion.circle
              key={index}
              cx={(index / (data.length - 1)) * 100}
              cy={100 - ((item.value - minValue) / (maxValue - minValue)) * 100}
              r="4"
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
