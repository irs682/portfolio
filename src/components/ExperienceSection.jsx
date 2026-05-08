import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Sparkles, CheckCircle2, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden bg-slate-50">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-primary-100/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] bg-secondary-100/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="section-subtitle"
          >
            Career Trajectory
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Professional <span className="text-gradient">Experience</span>
          </motion.h2>
          <motion.div 
             initial={{ width: 0 }}
             whileInView={{ width: "80px" }}
             className="h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
          />
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Central Timeline Line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-slate-200 to-transparent" />

          <div className="space-y-24">
            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-12 items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 z-20">
                  <motion.div 
                    whileHover={{ scale: 1.2 }}
                    className="w-4 h-4 rounded-full bg-white border-4 border-primary-500 shadow-[0_0_20px_rgba(79,70,229,0.4)] relative"
                  >
                    <div className="absolute inset-[-8px] border border-primary-200 rounded-full animate-ping opacity-20" />
                  </motion.div>
                </div>

                {/* Date Tag - Desktop */}
                <div className={`hidden md:flex w-full justify-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                  <span className="px-6 py-2 bg-white border border-slate-200 rounded-full text-[10px] font-black text-slate-400 uppercase tracking-widest shadow-sm">
                    {exp.date}
                  </span>
                </div>

                {/* Content Card */}
                <div className="w-full pl-20 md:pl-0">
                  <div className="glass-card p-10 rounded-[3rem] border-slate-200/50 bg-white/60 hover:bg-white transition-all duration-700 hover:shadow-2xl hover:shadow-primary-500/5 group">
                    <div className="flex flex-col mb-8">
                       <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-slate-950 flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform">
                          <Briefcase size={20} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-black text-slate-950 leading-tight group-hover:text-primary-600 transition-colors">{exp.role}</h3>
                          <div className="flex items-center gap-2 text-primary-600 font-bold text-xs uppercase tracking-widest mt-1">
                            <Sparkles size={12} /> {exp.company}
                          </div>
                        </div>
                      </div>
                      <span className="md:hidden w-fit px-4 py-1.5 bg-slate-100 rounded-full text-[9px] font-black text-slate-400 uppercase tracking-widest mb-4">
                        {exp.date}
                      </span>
                    </div>

                    <p className="text-slate-500 text-sm leading-relaxed font-medium mb-10 opacity-80">
                      {exp.description}
                    </p>

                    {exp.achievements && (
                      <div className="space-y-4 mb-10">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-4 group/item">
                            <div className="w-5 h-5 rounded-lg bg-primary-50 flex items-center justify-center shrink-0 group-hover/item:bg-primary-600 transition-colors">
                              <CheckCircle2 size={12} className="text-primary-600 group-hover/item:text-white transition-colors" />
                            </div>
                            <p className="text-xs font-bold text-slate-600 group-hover/item:text-slate-950 transition-colors leading-relaxed">
                              {achievement}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 pt-8 border-t border-slate-100">
                      {exp.tech.map((t, i) => (
                        <span key={i} className="px-3 py-1.5 bg-slate-50 text-slate-400 text-[9px] font-black uppercase tracking-wider rounded-lg border border-slate-100 group-hover:border-primary-200 group-hover:text-primary-600 transition-all">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
