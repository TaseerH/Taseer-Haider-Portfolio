import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { PixelDecorations } from './components/PixelDecorations';
import { Menu, X, Terminal } from 'lucide-react';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'PROJECTS', href: '#projects' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'LOGS', href: '#experience' },
    { name: 'COMMS', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-cp-black text-slate-100 font-sans selection:bg-cp-yellow selection:text-black overflow-hidden relative">
      
      {/* Background Pixel Art Animations */}
      <PixelDecorations />

      {/* HUD Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-2 ${scrolled ? 'bg-cp-black/95 border-cp-yellow py-2' : 'bg-transparent border-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 font-bold text-xl tracking-wider text-white hover:text-cp-yellow transition-colors group">
            <Terminal className="text-cp-yellow group-hover:animate-pulse" />
            <span className="font-pixel text-sm">TH<span className="text-cp-blue">_DEV</span></span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-2">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="relative px-4 py-2 text-xs font-pixel text-slate-400 hover:text-black hover:bg-cp-yellow transition-colors group border border-transparent hover:border-cp-yellow"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-cp-yellow border-2 border-cp-yellow p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-cp-black border-b-4 border-cp-yellow p-4 flex flex-col shadow-pixel">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg py-3 px-4 font-pixel text-white hover:bg-cp-yellow hover:text-black transition-colors border-l-4 border-transparent hover:border-black"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content Wrapper - Ensure z-index is higher than decorations */}
      <main className="relative z-10">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </div>
  );
};

export default App;