import React from 'react';
import { Section, SectionTitle } from './Section';
import { SKILLS } from '../constants';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  return (
    <Section id="skills" className="bg-cp-dark/60 backdrop-blur-sm border-t-4 border-cp-blue z-20 relative">
      <SectionTitle>CORE_COMPETENCIES</SectionTitle>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILLS.map((category, idx) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.title}
              whileHover={{ scale: 1.05 }}
              className="bg-black/80 backdrop-blur-md p-6 border-4 border-slate-800 hover:border-cp-green transition-colors group relative overflow-hidden shadow-pixel"
            >
              {/* Background Glitch Effect */}
              <div className="absolute inset-0 bg-cp-green/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity"></div>

              <div className="flex items-center gap-3 mb-6 border-b-2 border-slate-800 pb-4">
                <Icon className="text-cp-yellow" size={24} />
                <h3 className="text-xs md:text-sm font-bold text-white font-pixel leading-relaxed">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map(skill => (
                  <div key={skill} className="flex items-center gap-2">
                    <span className="text-cp-green text-[10px]">{'>'}</span>
                    <span className="text-sm md:text-base font-mono font-bold text-cp-blue tracking-wide">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

export default Skills;