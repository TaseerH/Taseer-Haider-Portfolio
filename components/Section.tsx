import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  delay?: number;
}

export const Section: React.FC<SectionProps> = ({ children, id, className = "", delay = 0 }) => {
  return (
    <section id={id} className={`py-24 px-4 md:px-8 max-w-7xl mx-auto relative ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ 
          type: "spring",
          bounce: 0.3,
          duration: 0.8,
          delay: delay 
        }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export const SectionTitle: React.FC<{ children: ReactNode, align?: 'left' | 'center' }> = ({ children, align = 'left' }) => (
  <div className={`mb-16 ${align === 'center' ? 'flex flex-col items-center' : ''}`}>
    <h2 className="text-3xl md:text-5xl font-bold text-white font-pixel uppercase tracking-tight relative inline-block drop-shadow-[4px_4px_0_rgba(0,0,0,1)] glitch-hover cursor-default" data-text={children}>
      <span className="text-cp-yellow mr-3 animate-pulse">#</span>
      {children}
    </h2>
    <div className={`h-2 w-full max-w-[200px] bg-cp-yellow mt-4 ${align === 'center' ? 'mx-auto' : ''} shadow-pixel`} />
  </div>
);