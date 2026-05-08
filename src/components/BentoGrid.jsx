import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code2, Database, Globe, Cpu, Layers, Terminal, Zap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const BentoGrid = () => {
  const skills = portfolioData.skills;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-6 gap-6 h-full md:min-h-[900px]">
      
      {/* 1. MERN Stack Mastery (Big Block) */}
      <motion.div 
        whileHover={{ y: -8 }}
        className="md:col-span-8 md:row-span-3 glass-card rounded-[3rem] p-12 flex flex-col justify-between bg-slate-950 dark:bg-slate-900 text-white overflow-hidden relative group transition-colors duration-500"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/20 rounded-full blur-[100px] -mr-20 -mt-20 group-hover:bg-primary-600/30 transition-colors duration-700" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md">
              <Layers className="text-primary-400" size={24} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary-400">Full Stack Architecture</span>
          </div>
          <h3 className="text-5xl font-black mb-6 tracking-tighter leading-none">
            MERN Stack <br />
            <span className="text-slate-500 italic">Engineering.</span>
          </h3>
          <p className="text-slate-400 max-w-md text-sm font-medium leading-relaxed">
            Building highly scalable, real-time web applications using MongoDB, Express, React, and Node.js with advanced state management.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 relative z-10">
          {['MongoDB', 'Express.js', 'React.js', 'Node.js'].map((tech) => (
            <div key={tech} className="p-6 bg-white/5 rounded-[2rem] border border-white/10 backdrop-blur-sm flex flex-col items-center justify-center group/item hover:bg-white/10 transition-all">
              <span className="text-xs font-black text-white uppercase tracking-widest">{tech}</span>
              <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-3 animate-pulse" />
            </div>
          ))}
        </div>
      </motion.div>

      {/* 2. AI & Deep Learning (Tall Block) */}
      <motion.div 
        whileHover={{ y: -8 }}
        className="md:col-span-4 md:row-span-4 glass-card rounded-[3rem] p-10 bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 shadow-2xl flex flex-col group transition-colors duration-500"
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-primary-600 rounded-2xl flex items-center justify-center shadow-xl shadow-primary-500/20 group-hover:rotate-12 transition-transform duration-500">
            <Brain className="text-white" size={24} />
          </div>
          <h4 className="text-xl font-black text-slate-900 dark:text-white">AI / ML Core</h4>
        </div>
        
        <div className="space-y-6 flex-grow">
          {skills.filter(s => s.category === "AI/ML").slice(0, 7).map((skill, i) => (
            <div key={i} className="space-y-2">
              <div className="flex justify-between items-end">
                <span className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-widest">{skill.name}</span>
                <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500">{skill.level}%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-50 dark:bg-slate-800 rounded-full overflow-hidden border border-slate-100 dark:border-slate-700">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, ease: "circOut" }}
                  className="h-full bg-primary-600 rounded-full" 
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800">
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-600">Advanced Focus</p>
          <p className="text-lg font-bold text-slate-900 dark:text-white">RAG & LLM Workflows</p>
        </div>
      </motion.div>

      {/* 3. Python & Scripting (Wide Block) */}
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="md:col-span-5 md:row-span-2 glass-card rounded-[3rem] p-10 bg-indigo-600 dark:bg-indigo-900 text-white border-none relative overflow-hidden transition-colors duration-500"
      >
        <Terminal className="absolute bottom-[-20px] right-[-20px] w-48 h-48 opacity-10 -rotate-12" />
        <div className="relative z-10 h-full flex flex-col justify-between">
          <div>
            <h4 className="text-2xl font-black mb-2">Python Specialist</h4>
            <p className="text-indigo-100 dark:text-indigo-200 text-xs font-medium opacity-80">Web Scraping & Data Pipeline Engineering</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex flex-col">
              <span className="text-4xl font-black tracking-tighter">98%</span>
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Proficiency</span>
            </div>
            <div className="h-10 w-px bg-white/20"></div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/10 rounded-lg text-[10px] font-bold">BeautifulSoup</span>
              <span className="px-3 py-1 bg-white/10 rounded-lg text-[10px] font-bold">Selenium</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 4. Global Availability (Small Block) */}
      <motion.div 
        whileHover={{ y: -8 }}
        className="md:col-span-3 md:row-span-2 glass-card rounded-[3rem] p-8 bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 flex flex-col items-center justify-center text-center group transition-colors duration-500"
      >
        <div className="w-16 h-16 bg-slate-950 dark:bg-white rounded-[2rem] flex items-center justify-center mb-6 shadow-2xl group-hover:scale-110 transition-transform">
          <Zap className="text-primary-400 dark:text-primary-600" size={32} />
        </div>
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600 mb-1">Status</p>
        <p className="text-xl font-black text-slate-900 dark:text-white leading-none">Ready for <br /> Innovation</p>
      </motion.div>

      {/* 5. Tools & Infrastructure (Bottom Block) */}
      <motion.div 
        whileHover={{ y: -8 }}
        className="md:col-span-12 md:row-span-1 glass-card rounded-[2.5rem] p-6 bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 flex items-center justify-between px-12 transition-colors duration-500"
      >
        <div className="flex items-center gap-6">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 dark:text-slate-600">Dev Tools</span>
          <div className="flex gap-8">
            {['Docker', 'Git', 'GitHub', 'VS Code', 'Postman'].map((tool) => (
              <span key={tool} className="text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-default">{tool}</span>
            ))}
          </div>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <Globe className="text-slate-400 dark:text-slate-600" size={18} />
          <span className="text-[10px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-widest">Global Deployments Enabled</span>
        </div>
      </motion.div>

    </div>
  );
};

export default BentoGrid;

