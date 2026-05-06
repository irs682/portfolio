import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
    { name: 'Certifications', to: 'certifications' },
    { name: 'Contact', to: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <Terminal className="text-primary-400 w-6 h-6" />
          <span className="font-bold text-xl tracking-wider text-gradient">IRSHAD.AI</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-primary-400"
              className="text-sm font-medium text-gray-300 hover:text-white cursor-pointer transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="#contact" 
            className="px-5 py-2 rounded-full bg-white/5 border border-white/10 hover:border-primary-500/50 hover:bg-white/10 transition-all text-sm font-medium"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass border-t border-white/5 py-4 px-6 md:hidden flex flex-col gap-4 shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-gray-300 hover:text-primary-400 cursor-pointer py-2 border-b border-white/5"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
