import React from 'react';
import { Terminal, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-dark-900 py-8">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <Terminal className="text-primary-400 w-5 h-5" />
          <span className="font-bold text-lg tracking-wider text-gradient">IRSHAD.AI</span>
        </div>
        
        <p className="text-gray-500 text-sm flex items-center gap-1">
          Crafted with <Heart size={14} className="text-red-500 mx-1" /> using React & Tailwind
        </p>

        <div className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
