import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled ? 'py-4' : 'py-8'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo / Name */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-10 h-10 bg-slate-950 rounded-xl flex items-center justify-center shadow-2xl">
            <span className="text-white font-black text-xl">I</span>
          </div>
          <div className="flex flex-col">
            <span className="text-slate-950 font-black text-sm tracking-tighter uppercase">
              {portfolioData.personal.name}
            </span>
            <span className="text-[9px] font-bold text-primary-600 uppercase tracking-widest mt-[-2px]">
              Zenith Grade AI
            </span>
          </div>
        </motion.div>

        {/* Action Button */}
        <div className="flex items-center gap-6">
          <motion.a
            whileHover={{ y: -2 }}
            href={`mailto:${portfolioData.personal.contact.email}`}
            className="hidden md:flex items-center gap-2 text-[10px] font-black text-slate-400 hover:text-slate-950 transition-colors uppercase tracking-[0.2em]"
          >
            <Mail size={14} /> Get in Touch
          </motion.a>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-4 md:px-6 py-3 bg-slate-950 text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl shadow-slate-900/10 flex items-center gap-2"
          >
            <span className="hidden sm:inline">Initialize Project</span>
            <span className="sm:hidden text-[8px]">Initialize</span>
            <ArrowUpRight size={14} />
          </motion.a>
        </div>
      </div>

      {/* Glass Background on Scroll */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-white/70 backdrop-blur-xl border-b border-slate-200/50 -z-10"
          />
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
