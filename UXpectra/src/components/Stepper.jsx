import { motion } from 'framer-motion';

export default function Stepper({ steps, currentStep, className = "" }) {
  return (
    <div className={`flex items-center ${className}`}>
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <motion.div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              index <= currentStep
                ? 'bg-primary text-white'
                : 'bg-gray-200 text-gray-500'
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
          >
            {index + 1}
          </motion.div>
          
          {index < steps.length - 1 && (
            <motion.div
              className={`w-16 h-1 mx-2 ${
                index < currentStep ? 'bg-primary' : 'bg-gray-200'
              }`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: index * 0.1 + 0.2 }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
