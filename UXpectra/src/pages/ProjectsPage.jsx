import ProjectCard from '../components/ProjectCard'
import auction from '../assets/img/zayid.png';
import { motion } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import StaggerContainer from '../components/StaggerContainer';

const projects = [
  { 
    id: 'zayid-1', 
    img: auction, 
    title: 'ZAYID - Online Auction Platform', 
    description: 'ZAYID is a scalable multi-category auction platform with real-time bidding .......', 
    skills: ['React', 'Tailwind CSS', 'Firebase']
  },
  { 
    id: 'zayid-2', 
    img: auction, 
    title: 'ZAYID - Online Auction Platform', 
    description: 'ZAYID is a scalable multi-category auction platform with real-time bidding .......', 
    skills: ['Vue', 'Bootstrap', 'AWS']
  },
  { 
    id: 'zayid-3', 
    img: auction, 
    title: 'ZAYID - Online Auction Platform', 
    description: 'ZAYID is a scalable multi-category auction platform with real-time bidding .......', 
    skills: ['Angular', 'Sass', 'Node.js']
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <FadeIn direction="up" delay={0.2}>
        <AnimatedText 
          text="Our Projects" 
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
          Explore our latest work showcasing innovative solutions, clean code, and beautiful design across various industries and platforms.
        </motion.p>
      </FadeIn>

      <StaggerContainer delay={0.6} className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
        {projects.map((p) => (
          <ProjectCard key={p.id} {...p} />
        ))}
      </StaggerContainer>
    </div>
  )
}


