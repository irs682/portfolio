import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Heart, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        
        {/* Branding Logo */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <div className="w-12 h-12 bg-slate-950 rounded-2xl flex items-center justify-center shadow-2xl">
            <span className="text-white font-black text-2xl tracking-tighter">I</span>
          </div>
          <div className="text-left">
            <p className="text-slate-950 font-black text-lg tracking-tighter leading-none uppercase">{portfolioData.personal.name}</p>
            <p className="text-[10px] font-bold text-primary-600 uppercase tracking-widest mt-1">AI Engineering Portfolio</p>
          </div>
        </motion.div>

        {/* Contact Strip */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-12"
        >
          <a href={`mailto:${portfolioData.personal.contact.email}`} className="flex items-center gap-3 text-slate-500 hover:text-primary-600 font-bold transition-all group">
            <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:border-primary-500 transition-all shadow-sm">
              <Mail size={18} />
            </div>
            <span className="text-sm">{portfolioData.personal.contact.email}</span>
          </a>
          
          <div className="hidden md:block w-px h-6 bg-slate-200"></div>

          <a href={`tel:${portfolioData.personal.contact.phone}`} className="flex items-center gap-3 text-slate-500 hover:text-primary-600 font-bold transition-all group">
            <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:border-primary-500 transition-all shadow-sm">
              <Phone size={18} />
            </div>
            <span className="text-sm">{portfolioData.personal.contact.phone}</span>
          </a>
        </motion.div>

        {/* Copyright & Social Signoff */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="pt-10 border-t border-slate-200 flex flex-col items-center gap-4"
        >
          <p className="text-slate-400 text-xs font-bold tracking-widest uppercase flex items-center gap-2">
            &copy; {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
          </p>
          <p className="text-slate-300 text-[10px] font-medium flex items-center gap-1 uppercase tracking-[0.2em]">
            Built with <Heart size={10} className="text-primary-400" /> for the future of Intelligence
          </p>
        </motion.div>

      </div>

      {/* Decorative Blobs */}
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary-100/30 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-100/20 rounded-full blur-[100px] -z-10" />
    </footer>
  );
};

export default Footer;

