import { motion } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <FadeIn direction="up" delay={0.2}>
        <AnimatedText 
          text="About UXpectra" 
          className="text-3xl font-semibold text-ink"
          delay={0.1}
        />
      </FadeIn>
      
      <FadeIn direction="up" delay={0.4}>
        <motion.p 
          className="mt-4 text-slate-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          UXpectra is a team of frontend developers and UI/UX designers dedicated to building delightful digital products.
        </motion.p>
      </FadeIn>

      <FadeIn direction="up" delay={0.6}>
        <motion.div 
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-lg"
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-ink mb-3">Our Mission</h3>
            <p className="text-slate-600">
              To create exceptional digital experiences that combine beautiful design with powerful functionality, 
              helping businesses connect with their users in meaningful ways.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-lg"
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-ink mb-3">Our Vision</h3>
            <p className="text-slate-600">
              To be the leading force in frontend development and UI/UX design, 
              setting new standards for digital innovation and user experience excellence.
            </p>
          </motion.div>
        </motion.div>
      </FadeIn>
    </div>
  )
}


