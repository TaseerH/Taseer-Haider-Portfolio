import React from 'react';
import { Section, SectionTitle } from './Section';
import { EXPERIENCE, EDUCATION } from '../constants';
import { GraduationCap } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <Section id="experience" className="bg-cp-black/60 backdrop-blur-sm z-20 relative">
      <SectionTitle>PROFESSIONAL_LOG</SectionTitle>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Experience Column */}
        <div className="lg:col-span-2 space-y-12">
          {EXPERIENCE.map((job, index) => (
            <div key={index} className="relative pl-8 border-l-4 border-dashed border-slate-700/50 group">
              {/* Retro Cursor Marker */}
              <div className="absolute -left-[14px] top-0 w-6 h-6 bg-black border-4 border-cp-yellow group-hover:bg-cp-yellow transition-colors flex items-center justify-center">
                  <div className="w-2 h-2 bg-black"></div>
              </div>
              
              <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between bg-black/80 p-4 border-2 border-transparent group-hover:border-cp-blue transition-colors shadow-pixel-sm backdrop-blur-md">
                <h3 className="text-xl md:text-2xl font-bold text-white font-pixel tracking-tighter">{job.role}</h3>
                <div className="text-sm font-mono text-cp-green bg-black px-3 py-1 border border-cp-green/30 mt-2 sm:mt-0 inline-block">{job.period}</div>
              </div>
              
              <h4 className="text-lg md:text-xl text-slate-300 font-mono mb-4 flex items-center gap-2 pl-3 mt-3 bg-black/40 inline-block px-2">
                <span className="text-cp-yellow font-bold">AT_LOC:</span> 
                <span className="font-bold">{job.company}</span>
                <span className="text-slate-600">|</span>
                <span className="text-sm text-slate-500 uppercase">{job.location}</span>
              </h4>

              <div className="bg-black/70 backdrop-blur-md p-6 border-2 border-slate-800 shadow-pixel-sm hover:bg-black/90 transition-colors">
                <ul className="space-y-4">
                  {job.description.map((desc, i) => (
                    <li key={i} className="text-slate-300 text-lg md:text-xl font-mono leading-relaxed pl-6 relative">
                      <span className="absolute left-0 top-1.5 text-cp-red font-bold font-pixel text-[10px]">{`>`}</span>
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Education & Side Stats */}
        <div className="lg:col-span-1">
           <div className="sticky top-24">
             <div className="bg-black/80 backdrop-blur-md border-4 border-slate-700 p-6 relative shadow-pixel hover:border-cp-purple transition-colors">
                <div className="flex items-center gap-3 mb-6 text-white border-b-4 border-slate-800 pb-4">
                  <GraduationCap className="text-cp-yellow" />
                  <h3 className="text-lg font-bold font-pixel uppercase">EDU_DB</h3>
                </div>
                
                <div className="mb-6 font-mono text-xl">
                  <p className="text-white font-bold mb-1">{EDUCATION.degree}</p>
                  <p className="text-cp-blue mb-1">{EDUCATION.institution}</p>
                  <p className="text-slate-500 text-base mt-2 uppercase">[{EDUCATION.period}]</p>
                </div>

                <div className="text-sm font-mono text-slate-500 space-y-2 pt-4 border-t-4 border-slate-800">
                  <div className="flex justify-between bg-black p-2 border border-slate-800">
                    <span>STATUS:</span>
                    <span className="text-cp-green blink">COMPLETED</span>
                  </div>
                </div>
             </div>
           </div>
        </div>

      </div>
    </Section>
  );
};

export default Experience;