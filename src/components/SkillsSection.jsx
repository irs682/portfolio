import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import Tilt from 'react-parallax-tilt';

const SkillsSection = () => {
  const categories = [...new Set(portfolioData.skills.map(skill => skill.category))];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-dark-800/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                glareEnable={true}
                glareMaxOpacity={0.1}
                glareColor="#ffffff"
                glarePosition="all"
                transitionSpeed={2000}
                className="glass-card p-6 rounded-2xl h-full"
              >
                <h3 className="text-xl font-bold mb-6 text-gray-200 border-b border-white/10 pb-3">{category}</h3>
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  {portfolioData.skills.filter(s => s.category === category).map((skill) => (
                    <motion.div key={skill.name} variants={itemVariants}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                        <span className="text-sm font-medium text-primary-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-dark-900 rounded-full h-2 overflow-hidden border border-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                          className="h-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 relative"
                        >
                          <div className="absolute inset-0 bg-white/20 blur-[2px] rounded-full"></div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
