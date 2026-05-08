import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Code, Briefcase, GraduationCap, Award, MessageSquare, Home, Globe } from 'lucide-react';

const FloatingDock = ({ isLight = false }) => {
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', icon: <Home size={20} />, label: 'Intro' },
    { id: 'about', icon: <User size={20} />, label: 'About' },
    { id: 'skills', icon: <Code size={20} />, label: 'Skills' },
    { id: 'projects', icon: <Briefcase size={20} />, label: 'Work' },
    { id: 'experience', icon: <Globe size={20} />, label: 'Journey' },
    { id: 'education', icon: <GraduationCap size={20} />, label: 'Education' },
    { id: 'certifications', icon: <Award size={20} />, label: 'Certs' },
    { id: 'contact', icon: <MessageSquare size={20} />, label: 'Connect' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100]">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center gap-2 p-2 bg-white/70 backdrop-blur-2xl border border-gray-200 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="relative group p-3 outline-none"
          >
            <div className={`relative z-10 transition-all duration-300 ${
              activeSection === item.id ? 'text-white' : 'text-gray-400 group-hover:text-gray-900'
            }`}>
              {item.icon}
            </div>
            
            {activeSection === item.id && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-primary-600 rounded-xl shadow-lg shadow-primary-500/30"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}

            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 px-3 py-1 bg-gray-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              {item.label}
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-gray-900" />
            </div>
          </button>
        ))}
      </motion.div>
    </div>
  );
};

export default FloatingDock;
