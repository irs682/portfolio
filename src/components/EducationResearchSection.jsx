import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Sparkles, 
  BookOpen, 
  Microscope, 
  MessageSquare, 
  Camera, 
  Layers, 
  Shield, 
  ArrowUpRight,
  Target
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Map icon strings to components
const IconMap = {
  MessageSquare,
  Camera,
  Layers,
  Shield,
  BookOpen,
  Microscope
};

const EducationResearchSection = () => {
  return (
    <section id="education" className="py-32 relative overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-500">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 dark:bg-slate-900/10 -z-10" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Education - Left Side (4 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <span className="section-subtitle !text-left">Academic Foundation</span>
                <h2 className="section-title !text-left !mb-6 dark:text-white">
                  Educational <span className="text-gradient">Journey</span>
                </h2>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed max-w-sm">
                  Merging rigorous academic theory with practical engineering to build next-generation AI ecosystems.
                </p>
              </motion.div>

              <div className="space-y-12">
                {portfolioData.education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="relative pl-16 group"
                  >
                    {/* Advanced Timeline Marker */}
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-100 dark:bg-slate-800 group-last:bg-transparent">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center group-hover:border-primary-600 transition-all duration-500">
                        <div className="w-2 h-2 rounded-full bg-primary-600 animate-pulse" />
                      </div>
                    </div>

                    <div className="glass-card p-10 rounded-[3.5rem] border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:shadow-[0_40px_80px_-15px_rgba(79,70,229,0.1)] transition-all duration-700 relative overflow-hidden group/card backdrop-blur-md">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 dark:bg-primary-900/10 rounded-full blur-3xl -mr-16 -mt-16 opacity-0 group-hover/card:opacity-100 transition-opacity" />
                      
                      <div className="flex items-start justify-between mb-8">
                        <div className="w-16 h-16 rounded-[2rem] bg-slate-950 dark:bg-white flex items-center justify-center text-white dark:text-slate-950 shadow-2xl group-hover/card:bg-primary-600 dark:group-hover/card:bg-primary-400 transition-colors duration-500">
                          <GraduationCap size={28} />
                        </div>
                        <div className="text-right">
                          <span className="px-4 py-1.5 bg-slate-50 dark:bg-slate-800 text-slate-400 dark:text-slate-500 text-[10px] font-black uppercase tracking-widest rounded-full border border-slate-100 dark:border-slate-700">
                            {edu.date}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-2xl font-black text-slate-950 dark:text-white mb-2 leading-tight tracking-tight">
                        {edu.degree}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 font-bold text-xs uppercase tracking-widest mb-8">
                        {edu.institution}
                      </p>
                      
                      {/* Academic Highlights */}
                      <div className="space-y-6 pt-8 border-t border-slate-50 dark:border-slate-800">
                        <div>
                          <p className="text-[10px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-widest mb-3">Featured Coursework</p>
                          <div className="flex flex-wrap gap-2">
                            {edu.technicalFocus.map((tech, i) => (
                              <span key={i} className="px-3 py-1 bg-primary-50/50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 text-[9px] font-black uppercase tracking-wider rounded-lg border border-primary-100 dark:border-primary-800">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex -space-x-2">
                            {[1, 2, 3].map(i => (
                              <div key={i} className="w-6 h-6 rounded-full border-2 border-white dark:border-slate-950 bg-slate-100 dark:bg-slate-800" />
                            ))}
                          </div>
                          <p className="text-[10px] font-bold text-slate-400 dark:text-slate-600 uppercase tracking-widest">Ranked Top 5% of Batch</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Research - Right Side (7 Cols) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <span className="section-subtitle !text-left">Intellectual Pursuit</span>
              <h2 className="section-title !text-left !mb-6 dark:text-white">
                Strategic <span className="text-gradient">Research</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {portfolioData.research.map((item, index) => {
                const Icon = IconMap[item.icon] || Microscope;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-card p-10 rounded-[3rem] border-slate-200/60 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:bg-white dark:hover:bg-slate-900 transition-all duration-700 hover:shadow-2xl hover:shadow-primary-500/10 group h-full flex flex-col backdrop-blur-md"
                  >
                    <div className="w-14 h-14 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary-600 dark:group-hover:bg-primary-400 transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-primary-500/20">
                      <Icon className="text-slate-950 dark:text-white group-hover:text-white dark:group-hover:text-slate-950 transition-colors" size={24} />
                    </div>
                    
                    <h3 className="text-xl font-black text-slate-950 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors leading-tight">
                      {item.title}
                    </h3>
                    
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed mb-8 flex-grow opacity-80">
                      {item.description}
                    </p>

                    {item.focus && (
                      <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-100 dark:border-slate-800">
                        {item.focus.map((f, i) => (
                          <span key={i} className="px-3 py-1 bg-slate-50 dark:bg-slate-800 text-slate-400 dark:text-slate-500 text-[9px] font-black uppercase tracking-wider rounded-lg border border-slate-100 dark:border-slate-700 group-hover:border-primary-200 dark:group-hover:border-primary-800 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-all">
                            {f}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="text-primary-400" size={20} />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Research Vision Callout */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mt-12 p-10 rounded-[3rem] bg-slate-950 dark:bg-slate-900 text-white flex flex-col md:flex-row items-center gap-10 shadow-2xl relative overflow-hidden group transition-colors duration-500"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/20 rounded-full blur-[80px] group-hover:scale-150 transition-transform duration-1000" />
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center shrink-0 border border-white/10">
                <Target className="text-primary-400" size={32} />
              </div>
              <div className="relative z-10 text-center md:text-left">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-400 mb-2">Research Vision</p>
                <p className="text-xl font-bold leading-relaxed">
                  Pioneering <span className="text-primary-400">scalable intelligence</span> through cross-domain neural architectures and ethical full-stack design.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EducationResearchSection;
