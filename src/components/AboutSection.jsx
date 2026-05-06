import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code2, Database } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I am an AI Engineer and MERN Stack Developer with a deep passion for building intelligent systems that solve real-world problems. My journey spans across machine learning, natural language processing, and modern web development.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Currently, I focus on integrating advanced AI capabilities—like Large Language Models and RAG systems—into scalable web applications. I believe in writing clean, efficient code and creating user experiences that are both beautiful and highly functional.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="glass-card p-6 rounded-2xl flex-1">
                <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Brain className="text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI & NLP</h3>
                <p className="text-sm text-gray-400">Specializing in intelligent text analysis and generation.</p>
              </div>
              <div className="glass-card p-6 rounded-2xl flex-1">
                <div className="w-12 h-12 bg-secondary-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Code2 className="text-secondary-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Full Stack</h3>
                <p className="text-sm text-gray-400">Building scalable MERN stack web applications.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-secondary-500/20 rounded-3xl transform rotate-3 scale-105 filter blur-xl"></div>
            <div className="relative glass-card rounded-3xl p-8 border border-white/10 overflow-hidden">
              {/* Abstract decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-500/30 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary-500/30 rounded-full blur-2xl"></div>
              
              <div className="relative z-10 flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-dark-800 flex items-center justify-center border border-white/10">
                    <Database className="text-primary-400" size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Data Driven</h4>
                    <p className="text-gray-400 text-sm">Building robust pipelines</p>
                  </div>
                </div>
                
                <div className="h-px w-full bg-white/5"></div>
                
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-dark-800 flex items-center justify-center border border-white/10">
                    <Brain className="text-secondary-400" size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Machine Learning</h4>
                    <p className="text-gray-400 text-sm">Predictive & generative models</p>
                  </div>
                </div>
                
                <div className="h-px w-full bg-white/5"></div>
                
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-dark-800 flex items-center justify-center border border-white/10">
                    <Code2 className="text-purple-400" size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Modern Web</h4>
                    <p className="text-gray-400 text-sm">React, Next.js, Node</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
