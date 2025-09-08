import ServiceCard from '../components/ServiceCard'
import { motion } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import StaggerContainer from '../components/StaggerContainer';
import { FaCode, FaPaintBrush, FaTools } from 'react-icons/fa';

export default function ServicesPage() {
  const services = [
    { 
      icon: <FaCode size={20} />, 
      title: "Frontend Development", 
      description: "Modern, responsive web applications built with React, Next, and the latest web technologies for optimal performance and user experience." 
    },
    { 
      icon: <FaPaintBrush size={20} />, 
      title: "UI/UX Design", 
      description: "User-centered design solutions that combine beautiful aesthetics with intuitive functionality to create engaging digital experiences." 
    },
    { 
      icon: <FaTools size={20} />, 
      title: "Maintenance & Support", 
      description: "Ongoing support and maintenance services to keep your applications running smoothly with regular updates and bug fixes." 
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <FadeIn direction="up" delay={0.2}>
        <AnimatedText 
          text="Our Services" 
          className="text-3xl font-semibold text-ink text-center"
          delay={0.1}
        />
      </FadeIn>
      
      <FadeIn direction="up" delay={0.4}>
        <motion.p 
          className="text-center text-slate-600 mt-4 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          We offer comprehensive digital solutions from initial concept to final deployment, ensuring your project succeeds at every stage of development.
        </motion.p>
      </FadeIn>

      <StaggerContainer delay={0.6} className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
        {services.map((service, index) => (
          <ServiceCard 
            key={index}
            icon={service.icon}
            title={service.title} 
            description={service.description} 
          />
        ))}
      </StaggerContainer>
    </div>
  )
}


