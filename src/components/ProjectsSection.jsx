import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code2, Layers, Cpu, Globe, Rocket, Sparkles, Plus } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import Tilt from 'react-parallax-tilt';

const ProjectsSection = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', ...new Set(portfolioData.projects.map(p => p.category).filter(Boolean))];

  const filteredProjects = filter === 'All' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-slate-50/30">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="section-subtitle !text-left"
            >
              Portfolio
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="section-title !text-left !mb-0"
            >
              Strategic <span className="text-gradient">Innovations</span>
            </motion.h2>
          </div>
          
          {/* Filters - Cinematic Style */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat, i) => (
              <motion.button
                key={cat}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-500 border ${
                  filter === cat 
                    ? 'bg-slate-950 text-white border-slate-950 shadow-xl' 
                    : 'bg-white text-slate-400 border-slate-200 hover:text-slate-950 hover:border-slate-400'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <Tilt
                  tiltMaxAngleX={5}
                  tiltMaxAngleY={5}
                  glareEnable={true}
                  glareMaxOpacity={0.05}
                  glarePosition="all"
                  className="h-full"
                >
                  <div className="glass-card h-full flex flex-col group overflow-hidden border-slate-200/50 bg-white/50 backdrop-blur-sm rounded-[2.5rem] hover:bg-white transition-all duration-700">
                    <div className="relative h-64 overflow-hidden p-4">
                      <div className="w-full h-full rounded-[2rem] overflow-hidden relative">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover grayscale-[100%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-in-out"
                        />
                        <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-700" />
                      </div>
                      
                      <div className="absolute top-8 right-8">
                         <span className="bg-slate-950/80 backdrop-blur-md text-white text-[9px] font-black px-4 py-2 rounded-full uppercase tracking-widest border border-white/20">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-10 pt-4 flex flex-col flex-grow">
                      <div className="flex items-center gap-3 mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Case Study // {String(project.id).padStart(2, '0')}</span>
                      </div>

                      <h3 className="text-3xl font-display font-black mb-4 text-slate-950 tracking-tighter group-hover:text-primary-600 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow font-medium line-clamp-3">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-10">
                        {project.tech.map((t, i) => (
                          <span key={i} className="text-[9px] px-3 py-1.5 rounded-lg bg-slate-100 text-slate-500 font-bold uppercase tracking-wider">
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-8 mt-auto pt-8 border-t border-slate-100/60">
                        <motion.a 
                          whileHover={{ x: 3 }}
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 text-[10px] font-black text-slate-400 hover:text-slate-950 transition-colors uppercase tracking-widest"
                        >
                          <FaGithub size={16} /> Source
                        </motion.a>
                        <motion.a 
                          whileHover={{ x: 3 }}
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 text-[10px] font-black text-primary-600 hover:text-primary-700 transition-colors uppercase tracking-widest ml-auto"
                        >
                          Live Preview <Plus size={14} />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

