import React from 'react';
import { Section } from './Section';
import { SOCIAL_LINKS } from '../constants';
import { Mail, Linkedin, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <Section id="contact" className="mb-40">
      <div className="mt-20 bg-black/80 backdrop-blur-md border-4 border-cp-yellow p-8 md:p-16 relative overflow-hidden shadow-pixel-lg">
        
        <div className="relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-pixel text-white mb-8">
            INITIALIZE <span className="text-cp-yellow blink">CONNECTION...</span>
          </h2>
          
          <div className="bg-slate-900/80 p-6 border-2 border-slate-700 max-w-2xl mx-auto mb-10 text-left font-mono text-lg text-cp-green shadow-inner">
            <p className="mb-4">{`> SYSTEMS CHECK COMPLETE`}</p>
            <p className="mb-4">{`> OPEN FOR CONTRACTS: TRUE`}</p>
            <p className="mb-4">{`> LOOKING FOR: FULL-TIME / FREELANCE`}</p>
            <p className="animate-pulse">{`> AWAITING INPUT_`}</p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a 
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="flex items-center gap-3 bg-cp-yellow text-black px-8 py-4 font-pixel text-xs hover:bg-white transition-colors border-b-4 border-r-4 border-black active:translate-y-1 active:border-0"
            >
              <Mail size={16} />
              TRANSMIT_MAIL
            </a>
            <a 
              href={SOCIAL_LINKS.linkedin}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-black/60 border-2 border-cp-blue text-cp-blue px-8 py-4 font-pixel text-xs hover:bg-cp-blue hover:text-black transition-colors shadow-pixel-sm"
            >
              <Linkedin size={16} />
              NETWORK_LINK
            </a>
          </div>

          <div className="mt-12 flex justify-center">
             <a href={SOCIAL_LINKS.upwork} className="text-xs font-pixel text-slate-500 hover:text-cp-red transition-colors flex items-center gap-2 border-b border-dashed border-slate-600 pb-1">
               <ExternalLink size={12} />
               ACCESS FREELANCE DATABASE
             </a>
          </div>
        </div>
      </div>
      
      <footer className="text-center text-slate-600 mt-20 text-sm font-pixel pb-8 bg-black/40 p-4 inline-block mx-auto rounded">
        <p>SYSTEM.OP // TASEER HAIDER // {new Date().getFullYear()}</p>
      </footer>
    </Section>
  );
};

export default Contact;