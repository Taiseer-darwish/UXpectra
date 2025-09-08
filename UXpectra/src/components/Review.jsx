import { motion } from 'framer-motion';

export default function Review({ reviews, className = "" }) {
  return (
    <div className={`space-y-6 ${className}`}>
      {reviews.map((review, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-lg shadow-md p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -5, scale: 1.02 }}
        >
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  ★
                </motion.span>
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">{review.rating}/5</span>
          </div>
          
          <div className="text-lg font-medium mb-4">"{review.comment}"</div>
          
          <div className="flex items-center">
            <img
              src={review.avatar}
              alt={review.name}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <div className="font-semibold">{review.name}</div>
              <div className="text-sm text-gray-600">{review.date}</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
