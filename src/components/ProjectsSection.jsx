import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { portfolioData } from '../data/portfolioData';

const ProjectsSection = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', ...new Set(portfolioData.projects.map(p => p.category).filter(Boolean))];

  const filteredProjects = filter === 'All' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mb-8"></div>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg shadow-primary-500/30' 
                    : 'glass text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="h-full"
              >
                <Tilt
                  tiltMaxAngleX={5}
                  tiltMaxAngleY={5}
                  glareEnable={true}
                  glareMaxOpacity={0.15}
                  glareColor="#ffffff"
                  glarePosition="all"
                  transitionSpeed={2000}
                  className="group glass-card rounded-2xl overflow-hidden flex flex-col h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent z-10"></div>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                    
                    {/* Tech badges on image */}
                    <div className="absolute bottom-4 left-4 z-20 flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((t, i) => (
                        <span key={i} className="text-xs px-2 py-1 rounded bg-dark-800/80 backdrop-blur border border-white/10 text-gray-300">
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="text-xs px-2 py-1 rounded bg-dark-800/80 backdrop-blur border border-white/10 text-gray-300">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary-400 transition-colors">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-6 flex-grow">{project.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-gray-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary-500"></div>
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-4 mt-auto pt-4 border-t border-white/5">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                      >
                        <FaGithub size={16} /> Code
                      </a>
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-primary-400 hover:text-primary-300 transition-colors ml-auto"
                      >
                        Live Demo <ExternalLink size={16} />
                      </a>
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
