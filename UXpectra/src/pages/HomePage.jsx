import Hero from '../components/Hero';
import TeamCard from '../components/TeamCard';
import ProjectCard from '../components/ProjectCard';
import ServiceCard from '../components/ServiceCard';
import auction from '../assets/img/zayid.png';
import { FaCode, FaPaintBrush, FaTools } from 'react-icons/fa';
import { motion } from 'framer-motion';


const team = [
  { name: 'Name', role: 'UI/UX Designer' },
  { name: 'Name', role: 'Frontend Developer' },
  { name: 'Name', role: 'Frontend Developer' },
  { name: 'Name', role: 'Frontend Developer' },
];

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

export default function HomePage() {
  return (
    <main>
      <Hero />

      <motion.section 
        id="team" 
        className="py-14 bg-surface/60"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold text-center text-ink"
          >
            Meet Our Team
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center text-[15px] font-[400] mt-2 max-w-3xl mx-auto"
          >
            We're a diverse group of creators, problem-solvers, and technology enthusiasts united by our passion for building exceptional digital experiences.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8"
          >
            {team.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + (i * 0.1) }}
                viewport={{ once: true }}
              >
                <TeamCard {...m} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        id="projects" 
        className="py-14 bg-[#FAFAFA]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold text-center text-ink"
          >
            Our Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center font-[400] mt-2 max-w-3xl mx-auto"
          >
            Explore our latest work showcasing innovative solutions, clean code, and beautiful design across various industries and platforms.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8"
          >
            {projects.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + (i * 0.1) }}
                viewport={{ once: true }}
              >
                <ProjectCard {...p} />
              </motion.div>
            ))}
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-6"
          >
            <a href="/projects" className="inline-block px-4 py-2 bg-primary text-white rounded-[12px] text-sm hover:shadow-lg transition-all duration-300 hover:scale-105">View All Projects →</a>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        id="services" 
        className="py-14 bg-[#F3F4F6]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold text-center text-ink"
          >
            Our Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-2 max-w-3xl mx-auto"
          >
            We offer comprehensive digital solutions from initial concept to final deployment, ensuring your project succeeds at every stage of development.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <ServiceCard icon={<FaCode size={20} />} title="Frontend Development" description="Modern, responsive web applications built with React, Next, and the latest web technologies for optimal performance and user experience." />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <ServiceCard icon={<FaPaintBrush size={20} />} title="UI/UX Design" description="User-centered design solutions that combine beautiful aesthetics with intuitive functionality to create engaging digital experiences." />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <ServiceCard icon={<FaTools size={20} />} title="Maintenance & Support" description="Ongoing support and maintenance services to keep your applications running smoothly with regular updates and bug fixes." />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}