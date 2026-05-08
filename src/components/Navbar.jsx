import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import DarkModeToggle from './DarkModeToggle';

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
          className="flex items-center gap-4 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-12 h-12 bg-slate-950 dark:bg-white rounded-2xl flex items-center justify-center shadow-2xl transition-all group-hover:shadow-primary-500/20 border-2 border-white/20 dark:border-slate-800/20">
            <span className="text-white dark:text-slate-950 font-black text-2xl tracking-tighter">I</span>
          </div>
          <div className="flex flex-col">
            <span className="text-slate-950 dark:text-white font-black text-base tracking-tighter uppercase leading-none">
              {portfolioData.personal.name}
            </span>
            <span className="text-[10px] font-bold text-primary-600 dark:text-primary-400 uppercase tracking-[0.3em] mt-1">
              Zenith Grade AI
            </span>
          </div>
        </motion.div>

        {/* Action Button */}
        <div className="flex items-center gap-6 md:gap-10">
          <DarkModeToggle />
          
          <motion.a
            whileHover={{ y: -2 }}
            href={`mailto:${portfolioData.personal.contact.email}`}
            className="hidden lg:flex items-center gap-3 text-[10px] font-black text-slate-400 dark:text-slate-500 hover:text-slate-950 dark:hover:text-white transition-colors uppercase tracking-[0.3em]"
          >
            <Mail size={16} /> <span className="opacity-80">Get in Touch</span>
          </motion.a>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-6 md:px-8 py-3.5 bg-slate-950 dark:bg-white text-white dark:text-slate-950 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl shadow-slate-950/20 dark:shadow-white/10 flex items-center gap-3 transition-all hover:bg-primary-600 dark:hover:bg-primary-400 dark:hover:text-slate-950 border-2 border-white/10 dark:border-slate-800/10"
          >
            <span className="hidden sm:inline">Initialize Project</span>
            <span className="sm:hidden text-[8px]">Initialize</span>
            <ArrowUpRight size={16} />
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
            className="absolute inset-0 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 -z-10"
          />
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
