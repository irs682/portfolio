import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Sparkles, BookOpen, Microscope } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const EducationResearchSection = () => {
  return (
    <section id="education" className="pt-32 pb-16 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Education - Left Column */}
          <div className="relative">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary-100/30 rounded-full blur-[80px] -z-10" />
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <span className="section-subtitle !text-left">Academic Foundation</span>
              <h2 className="section-title !text-left !mb-0">
                Educational <span className="text-gradient">Journey</span>
              </h2>
            </motion.div>

            <div className="space-y-6">
              {portfolioData.education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative pl-12 group"
                >
                  {/* Timeline Indicator */}
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-100 group-last:bg-transparent">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary-500 shadow-[0_0_15px_rgba(79,70,229,0.5)] group-hover:scale-150 transition-transform duration-500" />
                  </div>

                  <div className="glass-card p-8 lg:p-10 pb-6 lg:pb-8 rounded-[2.5rem] border-slate-100 bg-slate-50/30 hover:bg-white transition-all duration-700">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-slate-950 flex items-center justify-center shadow-xl">
                          <GraduationCap className="text-white" size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl font-black text-slate-950">{edu.degree}</h3>
                          <p className="text-primary-600 font-bold text-xs uppercase tracking-widest mt-1">{edu.institution}</p>
                        </div>
                      </div>
                      <span className="px-5 py-2 bg-white border border-slate-200 rounded-full text-[10px] font-black text-slate-400 uppercase tracking-widest shadow-sm">
                        {edu.date}
                      </span>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium mb-6">
                      {edu.details}
                    </p>
                    
                    {edu.highlights && (
                      <div className="space-y-3 pt-6 border-t border-slate-100">
                        {edu.highlights.map((highlight, i) => (
                          <motion.div 
                            key={i} 
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                            viewport={{ once: true }}
                            className="flex items-start gap-4 group/item"
                          >
                            <div className="w-2 h-2 rounded-full bg-primary-600 mt-1.5 shrink-0 group-hover/item:scale-150 transition-transform duration-300 shadow-[0_0_8px_rgba(79,70,229,0.4)]" />
                            <p className="text-sm font-black text-primary-950 leading-tight tracking-tight uppercase group-hover/item:text-primary-600 transition-colors cursor-default">
                              {highlight}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    )}
                    
                    {edu.technicalFocus && (
                      <div className="mt-6 flex flex-wrap gap-2 pt-5 border-t border-slate-100">
                        {edu.technicalFocus.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-primary-50 text-primary-700 text-[10px] font-black uppercase tracking-wider rounded-lg border border-primary-100">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Research Interests - Right Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <span className="section-subtitle !text-left">Intellectual Pursuit</span>
              <h2 className="section-title !text-left !mb-0">
                Strategic <span className="text-gradient">Research</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {portfolioData.research.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="glass-card p-8 rounded-[2rem] border-slate-100 hover:border-primary-200 hover:shadow-2xl transition-all group h-full flex flex-col"
                  >
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-primary-500/20">
                      <Icon className="text-slate-900 group-hover:text-white transition-colors" size={20} />
                    </div>
                    <h3 className="text-lg font-black text-slate-950 mb-3 group-hover:text-primary-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed flex-grow">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Research Stats Summary */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mt-12 p-8 rounded-[2rem] bg-slate-950 text-white flex items-center justify-between shadow-2xl overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-transparent pointer-events-none" />
              <div className="relative z-10 flex items-center gap-6">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center">
                  <Microscope className="text-primary-400" size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary-400">Total Focus</p>
                  <p className="text-xl font-bold">06 Core Segments</p>
                </div>
              </div>
              <Sparkles className="text-primary-500/20 w-20 h-20 -mr-10" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EducationResearchSection;

