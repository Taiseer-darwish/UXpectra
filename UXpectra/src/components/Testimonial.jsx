import { motion } from 'framer-motion';

export default function Testimonial({ testimonials, className = "" }) {
  return (
    <div className={`space-y-6 ${className}`}>
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-lg shadow-md p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -5, scale: 1.02 }}
        >
          <div className="text-lg font-medium mb-4">"{testimonial.quote}"</div>
          <div className="flex items-center">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-sm text-gray-600">{testimonial.role}</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
