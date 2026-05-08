import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code2, Database, Globe, Cpu, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-500">
      {/* Decorative Elements - Inspired by User Image */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-100/30 dark:bg-primary-900/10 rounded-full blur-[120px] -mr-48 -mt-48 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-100/20 dark:bg-indigo-900/10 rounded-full blur-[100px] -ml-24 -mb-24" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.02),transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center md:text-left"
        >
          <span className="section-subtitle">The Persona</span>
          <h2 className="section-title text-slate-950 dark:text-white">
            Beyond the <span className="text-gradient">Algorithm</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8">
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                {portfolioData.personal.bio}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                <div className="glass-card p-8 rounded-[2rem] border-slate-100 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:shadow-xl transition-all group">
                  <div className="w-14 h-14 bg-primary-50 dark:bg-primary-900/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Brain className="text-primary-600 dark:text-primary-400" size={28} />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3">Neural Architecture</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Specializing in Deep Learning frameworks and RAG system integration.</p>
                </div>

                <div className="glass-card p-8 rounded-[2rem] border-slate-100 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:shadow-xl transition-all group">
                  <div className="w-14 h-14 bg-secondary-50 dark:bg-secondary-900/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Cpu className="text-secondary-600 dark:text-secondary-400" size={28} />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3">Full Stack Core</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Developing high-performance MERN applications with real-time AI pulses.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:pl-10"
          >
            <div className="relative glass-card rounded-[3rem] p-10 border-slate-100 dark:border-slate-800 shadow-2xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-md">
              <div className="flex flex-col gap-10">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-3xl bg-slate-950 dark:bg-white flex items-center justify-center shadow-2xl transition-colors">
                    <Globe className="text-white dark:text-slate-950" size={28} />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 dark:text-white text-lg">Scalable Insights</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Transforming global data into local intelligence.</p>
                  </div>
                </div>
                
                <div className="h-px w-full bg-slate-100 dark:bg-slate-800"></div>
                
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-3xl bg-primary-600 flex items-center justify-center shadow-xl">
                    <Layers className="text-white" size={28} />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 dark:text-white text-lg">Deep Engineering</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Multi-layered system design and data scrapers.</p>
                  </div>
                </div>
                
                <div className="h-px w-full bg-slate-100 dark:bg-slate-800"></div>
                
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-3xl bg-secondary-500 flex items-center justify-center shadow-xl">
                    <Code2 className="text-white" size={28} />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 dark:text-white text-lg">Modern Protocols</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Utilizing the latest AI-driven web technologies.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Accent Details */}
            <div className="mt-12 flex items-center justify-between px-6">
              <div className="text-center">
                <p className="text-slate-950 dark:text-white font-black text-2xl">25+</p>
                <p className="text-[10px] font-bold text-slate-400 dark:text-slate-600 uppercase tracking-widest">AI Models</p>
              </div>
              <div className="w-px h-10 bg-slate-100 dark:bg-slate-800"></div>
              <div className="text-center">
                <p className="text-slate-950 dark:text-white font-black text-2xl">30k+</p>
                <p className="text-[10px] font-bold text-slate-400 dark:text-slate-600 uppercase tracking-widest">Lines of Code</p>
              </div>
              <div className="w-px h-10 bg-slate-100 dark:bg-slate-800"></div>
              <div className="text-center">
                <p className="text-slate-950 dark:text-white font-black text-2xl">15+</p>
                <p className="text-[10px] font-bold text-slate-400 dark:text-slate-600 uppercase tracking-widest">Research Projects</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
