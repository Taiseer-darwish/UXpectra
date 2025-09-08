import { motion } from 'framer-motion';

export default function PieChart({ data, className = "" }) {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let currentAngle = 0;

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      <h3 className="text-lg font-semibold mb-4">Pie Chart</h3>
      
      <div className="flex items-center justify-center">
        <svg width="200" height="200" className="transform -rotate-90">
          {data.map((item, index) => {
            const percentage = (item.value / total) * 100;
            const angle = (item.value / total) * 360;
            const startAngle = currentAngle;
            const endAngle = currentAngle + angle;
            
            const x1 = 100 + 80 * Math.cos((startAngle * Math.PI) / 180);
            const y1 = 100 + 80 * Math.sin((startAngle * Math.PI) / 180);
            const x2 = 100 + 80 * Math.cos((endAngle * Math.PI) / 180);
            const y2 = 100 + 80 * Math.sin((endAngle * Math.PI) / 180);
            
            const largeArcFlag = angle > 180 ? 1 : 0;
            const pathData = `M 100 100 L ${x1} ${y1} A 80 80 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
            
            currentAngle += angle;
            
            return (
              <motion.path
                key={index}
                d={pathData}
                fill={item.color || `hsl(${index * 60}, 70%, 50%)`}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              />
            );
          })}
        </svg>
      </div>
      
      <div className="mt-4 space-y-2">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: item.color || `hsl(${index * 60}, 70%, 50%)` }}
            />
            <span className="text-sm">{item.label}: {item.value}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
