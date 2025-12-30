import React from 'react';
import { Section, SectionTitle } from './Section';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <Section id="projects" className="bg-cp-dark/60 backdrop-blur-sm border-t-4 border-cp-yellow relative z-20">
      <SectionTitle>DEPLOYED_PROJECTS</SectionTitle>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, type: "spring" }}
            className="group relative bg-black/80 backdrop-blur-md border-4 border-slate-700 hover:border-cp-yellow transition-all duration-200 shadow-pixel hover:shadow-pixel-lg hover:-translate-y-2 flex flex-col h-full"
          >
            {/* Image Container with Pixel Overlay */}
            <div className="relative h-48 overflow-hidden border-b-4 border-slate-700 shrink-0">
              <div className="absolute inset-0 bg-slate-900/50 z-10 group-hover:bg-transparent transition-all duration-300 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMiIvPgo8L3N2Zz4=')]"></div>
              
              {/* Idle Parallax Animation Image */}
              <motion.img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover filter grayscale sepia group-hover:filter-none pixelated-image will-change-transform"
                animate={{ 
                  scale: [1.1, 1.25], // Slight zoom oscillation
                  x: [0, -10, 0],    // Horizontal drift
                  y: [0, -5, 0]      // Vertical drift
                }}
                transition={{ 
                  duration: 20 + Math.random() * 5, // Randomize duration slightly for organic feel
                  ease: "linear", 
                  repeat: Infinity, 
                  repeatType: "mirror" 
                }}
              />
              
              {project.featured && (
                <div className="absolute top-2 right-2 bg-cp-red text-white text-[10px] font-pixel px-2 py-1 border-2 border-white shadow-pixel-sm z-20 animate-pulse">
                  ★ FEATURED
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col grow">
              <h3 
                className="text-xl font-pixel text-white mb-3 leading-snug group-hover:text-cp-yellow transition-colors glitch-hover" 
                data-text={project.title}
              >
                {project.title}
              </h3>
              
              {project.subtitle && (
                <p className="text-cp-blue font-mono text-base font-bold mb-4 border-b-2 border-slate-800 pb-2 uppercase tracking-wider">
                  // {project.subtitle}
                </p>
              )}
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] md:text-xs font-pixel bg-slate-900/80 text-cp-green px-2 py-1 border border-slate-600">
                    {t}
                  </span>
                ))}
              </div>

              <ul className="text-slate-300 text-base md:text-lg font-mono space-y-2 mb-6 mt-auto">
                 {project.description.map((desc, i) => (
                   <li key={i} className="flex gap-2 items-start">
                     <span className="text-cp-yellow mt-1 shrink-0">{'>'}</span>
                     <span className="leading-tight">{desc}</span>
                   </li>
                 ))}
              </ul>
            </div>
            
            {/* Decorative Pixel Corners */}
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-cp-yellow hidden group-hover:block"></div>
            <div className="absolute -top-1 -left-1 w-3 h-3 bg-cp-yellow hidden group-hover:block"></div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;