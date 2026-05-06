import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative bg-dark-800/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l border-white/10 ml-3 md:ml-0 md:pl-0">
            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="mb-12 relative pl-8 md:pl-0"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] md:left-1/2 md:-ml-[5px] top-1 w-2.5 h-2.5 rounded-full bg-primary-500 shadow-[0_0_10px_rgba(139,92,246,0.8)]"></div>
                
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  {/* Left side (Date for even items, content for odd) on desktop */}
                  <div className={`hidden md:block text-right pr-8 ${index % 2 !== 0 ? 'order-last text-left pl-8 pr-0' : ''}`}>
                    {index % 2 === 0 ? (
                      <span className="text-primary-400 font-medium tracking-wider text-sm">{exp.date}</span>
                    ) : (
                      <div className="glass-card p-6 rounded-2xl text-left hover:-translate-y-1 transition-transform">
                        <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                        <div className="flex items-center gap-2 text-primary-400 mb-4 text-sm font-medium">
                          <Briefcase size={14} />
                          {exp.company}
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                      </div>
                    )}
                  </div>

                  {/* Right side (Content for even items, date for odd) on desktop */}
                  <div className={`md:pl-8 ${index % 2 !== 0 ? 'hidden md:block text-right pr-8 pl-0' : ''}`}>
                    {index % 2 !== 0 ? (
                       <span className="text-primary-400 font-medium tracking-wider text-sm">{exp.date}</span>
                    ) : (
                      <div className="glass-card p-6 rounded-2xl hover:-translate-y-1 transition-transform">
                        <span className="md:hidden text-primary-400 font-medium tracking-wider text-sm mb-2 block">{exp.date}</span>
                        <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                        <div className="flex items-center gap-2 text-primary-400 mb-4 text-sm font-medium">
                          <Briefcase size={14} />
                          {exp.company}
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                      </div>
                    )}
                  </div>
                  
                  {/* Mobile Content (since we hid some stuff on md) */}
                  <div className="md:hidden glass-card p-6 rounded-2xl hover:-translate-y-1 transition-transform mt-2">
                    <span className="text-primary-400 font-medium tracking-wider text-sm mb-2 block">{exp.date}</span>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-primary-400 mb-4 text-sm font-medium">
                      <Briefcase size={14} />
                      {exp.company}
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
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
