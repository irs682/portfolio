import React from 'react';
import { motion } from 'framer-motion';
import BentoGrid from './BentoGrid';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-50/50">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="section-subtitle"
          >
            Capabilities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Technical <span className="text-gradient">Ecosystem</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 max-w-2xl mx-auto mt-4 font-medium"
          >
            A curated stack of technologies I've mastered to build high-performance, intelligent applications.
          </motion.p>
        </div>

        <BentoGrid />
      </div>
    </section>
  );
};

export default SkillsSection;

