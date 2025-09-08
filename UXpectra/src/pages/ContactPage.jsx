import { motion } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <FadeIn direction="up" delay={0.2}>
        <AnimatedText 
          text="Contact Us" 
          className="text-3xl font-semibold text-ink"
          delay={0.1}
        />
      </FadeIn>
      
      <FadeIn direction="up" delay={0.4}>
        <motion.p 
          className="text-slate-600 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Get in touch with us for collaborations and projects.
        </motion.p>
      </FadeIn>

      <FadeIn direction="up" delay={0.6}>
        <motion.form 
          className="mt-6 grid grid-cols-1 gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.input 
            className="border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300" 
            placeholder="Name"
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          />
          <motion.input 
            className="border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300" 
            placeholder="Email"
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          />
          <motion.textarea 
            rows="4" 
            className="border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300" 
            placeholder="Message"
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          />
          <motion.button 
            className="bg-primary text-white rounded-md px-4 py-2 w-fit hover:bg-indigo-600 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Send
          </motion.button>
        </motion.form>
      </FadeIn>
    </div>
  )
}


