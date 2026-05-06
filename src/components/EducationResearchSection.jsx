import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const EducationResearchSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">
                Education
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
            </motion.div>

            <div className="space-y-6">
              {portfolioData.education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-8 rounded-2xl relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl group-hover:bg-primary-500/20 transition-colors"></div>
                  
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-dark-800 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="text-primary-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                        <span className="text-gray-300 font-medium">{edu.institution}</span>
                        <span className="hidden sm:block text-white/20">•</span>
                        <span className="text-primary-400 text-sm">{edu.date}</span>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">{edu.details}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Research Interests */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">
                Research <span className="text-gradient">Interests</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {portfolioData.research.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass p-6 rounded-2xl hover:border-primary-500/30 hover:bg-dark-700/50 transition-all group"
                  >
                    <Icon className="text-gray-400 mb-4 group-hover:text-secondary-400 transition-colors" size={24} />
                    <h3 className="text-lg font-bold text-gray-200 mb-2 group-hover:text-white transition-colors">{item.title}</h3>
                    <p className="text-xs text-gray-400">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationResearchSection;
