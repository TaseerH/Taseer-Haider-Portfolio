import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowDown, Zap, Terminal } from 'lucide-react';

const Hero: React.FC = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  
  // Apply spring physics to scrollY to smooth out the parallax movement
  // This decouples the animation frame from raw scroll events, reducing perceived lag/jitter
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  // Parallax Transforms using smoothed scroll value
  const backgroundY = useTransform(smoothScrollY, [0, 500], [0, 250]);
  const textY = useTransform(smoothScrollY, [0, 500], [0, 150]);
  const opacity = useTransform(smoothScrollY, [0, 300], [1, 0]);

  return (
    <div ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Parallax Background Layer - Cyberpunk City Image */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 will-change-transform"
      >
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1605218427306-6354db696aec?q=80&w=2070&auto=format&fit=crop')`,
              filter: 'contrast(1.2) brightness(0.6) hue-rotate(10deg)'
            }}
          ></div>
          
          {/* Scanline/Grid Overlay to maintain retro feel */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-cp-black/50 via-transparent to-cp-black"></div>
      </motion.div>

      {/* Foreground Content */}
      <motion.div style={{ y: textY, opacity }} className="relative z-10 w-full max-w-7xl mx-auto px-6 will-change-transform">
        
        {/* Decorative Side Lines */}
        <div className="absolute top-0 left-10 w-1 h-full bg-slate-800/50 hidden md:block dashed-line"></div>
        <div className="absolute top-0 right-10 w-1 h-full bg-slate-800/50 hidden md:block dashed-line"></div>
        <div className="absolute top-4 right-24 text-sm font-pixel text-cp-yellow opacity-70 hidden md:block animate-pulse">
          SYS.VER.2.0.77 // ONLINE
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="inline-flex items-center gap-2 mb-6 border-2 border-cp-yellow bg-black/80 backdrop-blur-sm px-4 py-2 text-cp-yellow font-pixel text-[10px] md:text-xs tracking-widest shadow-pixel"
            >
              <Zap size={14} className="animate-pulse" />
              <span>UNITY ENGINEER</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl md:text-8xl font-pixel text-white mb-8 leading-tight tracking-tighter uppercase drop-shadow-[4px_4px_0_rgba(0,0,0,0.8)] glitch-hover cursor-default"
              data-text="TASEER HAIDER"
            >
              TASEER <br />
              <span className="text-cp-blue drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">HAIDER</span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg md:text-2xl text-slate-100 mb-10 max-w-2xl border-l-8 border-cp-yellow pl-6 font-mono bg-black/60 p-4 shadow-pixel-sm backdrop-blur-md"
            >
              <p>
                Architecting high-performance <span className="text-cp-blue font-bold">Multiplayer</span> & <span className="text-cp-blue font-bold">XR</span> systems.
                Building infrastructure for the next generation of immersive gaming.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <a href="#projects" className="group relative px-6 py-4 bg-cp-yellow text-black font-pixel text-xs md:text-sm border-b-4 border-r-4 border-black hover:translate-y-1 hover:border-b-0 hover:border-r-0 hover:shadow-inner transition-all flex items-center gap-2 shadow-lg">
                <span>{'>'} INITIATE PROJECTS</span>
                <ArrowDown size={16} className="group-hover:animate-bounce" />
              </a>
              <a href="#contact" className="px-6 py-4 bg-black/80 backdrop-blur-sm border-2 border-cp-blue text-cp-blue font-pixel text-xs md:text-sm hover:bg-cp-blue hover:text-black transition-colors shadow-pixel-sm">
                CONTACT_LINK
              </a>
            </motion.div>
          </div>

          {/* Decorative Graphic / Stats */}
          <div className="hidden lg:block lg:col-span-4">
             <motion.div 
               initial={{ opacity: 0, x: 100 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.5, type: "spring" }}
               className="border-4 border-slate-700 bg-black/80 backdrop-blur-md p-6 shadow-pixel-lg relative group"
             >
               {/* Glitch Overlay on Hover */}
               <div className="absolute inset-0 bg-cp-green/10 opacity-0 group-hover:opacity-100 pointer-events-none z-20 animate-pulse"></div>

               <div className="flex justify-between items-center mb-4 border-b-2 border-slate-700 pb-2">
                 <span className="text-cp-yellow font-pixel text-[10px]">STATUS</span>
                 <span className="text-cp-green font-pixel text-[10px] animate-pulse">● AVAILABLE</span>
               </div>
               <div className="space-y-4 font-mono text-xl text-slate-300">
                 <div className="flex justify-between border-b border-dashed border-slate-800 pb-1">
                   <span>LOC</span>
                   <span className="text-white">LAHORE, PK</span>
                 </div>
                 <div className="flex justify-between border-b border-dashed border-slate-800 pb-1">
                   <span>STACK</span>
                   <span className="text-cp-blue">UNITY / C#</span>
                 </div>
                 <div className="flex justify-between">
                   <span>LVL</span>
                   <span className="text-cp-red">Unity Gameplay Engineer</span>
                 </div>
               </div>
               <div className="mt-6 h-32 bg-slate-900/50 relative overflow-hidden border-2 border-slate-700 flex items-center justify-center">
                  <Terminal className="text-slate-600 group-hover:text-cp-green transition-colors relative z-10" size={48} />
                  {/* Digital Rain Effect Simulated */}
                  <div className="absolute inset-0 opacity-20 bg-[url('https://media.giphy.com/media/dummy/giphy.gif')] mix-blend-screen"></div> 
               </div>
             </motion.div>
          </div>

        </div>
      </motion.div>
      
      <style>{`
        .dashed-line {
          background-image: linear-gradient(to bottom, #334155 50%, transparent 50%);
          background-size: 2px 20px;
          background-repeat: repeat-y;
          width: 2px;
        }
      `}</style>
    </div>
  );
};

export default Hero;