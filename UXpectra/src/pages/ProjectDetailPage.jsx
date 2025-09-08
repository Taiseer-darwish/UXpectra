import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';

const PROJECTS = {
  'zayid-1': {
    title: 'ZAYID - Online Auction Platform',
    body: 'Detailed description of the auction platform, features, tech stack, and outcomes.',
  },
  'zayid-2': {
    title: 'ZAYID - Online Auction Platform',
    body: 'Detailed description of the auction platform, features, tech stack, and outcomes.',
  },
  'zayid-3': {
    title: 'ZAYID - Online Auction Platform',
    body: 'Detailed description of the auction platform, features, tech stack, and outcomes.',
  },
}

export default function ProjectDetailPage() {
  const { id } = useParams()
  const project = PROJECTS[id]

  if (!project) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-12">
        <FadeIn direction="up" delay={0.2}>
          <p className="text-slate-600">Project not found.</p>
          <Link className="text-primary hover:underline" to="/projects">← Back to Projects</Link>
        </FadeIn>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <FadeIn direction="up" delay={0.2}>
        <motion.div
          whileHover={{ x: -5 }}
          transition={{ duration: 0.2 }}
        >
          <Link className="text-primary hover:underline" to="/projects">← Back to Projects</Link>
        </motion.div>
      </FadeIn>
      
      <FadeIn direction="up" delay={0.4}>
        <AnimatedText 
          text={project.title}
          className="text-3xl font-semibold text-ink mt-4"
          delay={0.1}
        />
      </FadeIn>
      
      <FadeIn direction="up" delay={0.6}>
        <motion.div 
          className="aspect-video bg-surface rounded-xl border border-slate-200 mt-6"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        />
      </FadeIn>
      
      <FadeIn direction="up" delay={0.8}>
        <motion.p 
          className="mt-6 text-slate-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {project.body}
        </motion.p>
      </FadeIn>
      
      <FadeIn direction="up" delay={1}>
        <motion.div 
          className="mt-6 flex gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {['React', 'Tailwind CSS', 'Cloudinary'].map((skill, index) => (
            <motion.span
              key={skill}
              className="px-2 py-0.5 rounded-full text-xs bg-surface text-slate-700"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4 + (index * 0.1) }}
              whileHover={{ scale: 1.1, backgroundColor: "#E2E8F0" }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </FadeIn>
    </div>
  )
}


