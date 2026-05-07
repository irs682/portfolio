import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, X, ZoomIn } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import { portfolioData } from '../data/portfolioData';

const CertificationsSection = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="pt-12 pb-24 relative bg-dark-800/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Global <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Tilt
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                glareEnable={true}
                glareMaxOpacity={0.15}
                glareColor="#ffffff"
                glarePosition="all"
                transitionSpeed={2000}
                className="group glass-card rounded-2xl overflow-hidden flex flex-col h-full border border-white/5 hover:border-primary-500/50 transition-all duration-300 relative"
              >
                {/* Animated Spotlight Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/0 via-primary-500/0 to-primary-500/0 group-hover:from-primary-500/10 group-hover:via-transparent group-hover:to-secondary-500/10 transition-colors duration-500 z-0"></div>

                <div 
                  className="relative h-48 overflow-hidden z-10 cursor-pointer group/image"
                  onClick={() => setSelectedCert(cert)}
                >
                  <div className="absolute inset-0 bg-dark-900/60 group-hover:bg-dark-900/20 transition-colors duration-500 z-10 flex items-center justify-center">
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="w-12 h-12 rounded-full glass flex items-center justify-center text-white opacity-0 transition-opacity duration-300 group-hover/image:opacity-100 backdrop-blur-md border border-white/20"
                    >
                      <ZoomIn size={24} />
                    </motion.div>
                  </div>
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                  
                  <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full glass flex items-center justify-center pointer-events-none">
                    <Award className="text-primary-400" size={20} />
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow relative z-10">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary-400 transition-colors">{cert.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 font-medium flex-grow">{cert.issuer}</p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                    <span className="text-xs text-gray-500 bg-white/5 px-3 py-1 rounded-full">{cert.date}</span>
                    <a 
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-secondary-400 hover:text-secondary-300 transition-colors"
                    >
                      Verify <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-dark-900/90 backdrop-blur-xl p-4 md:p-12 cursor-zoom-out"
          >
            <button 
              className="absolute top-6 right-6 p-3 rounded-full glass text-white hover:text-primary-400 hover:bg-white/10 transition-colors z-[110]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedCert(null);
              }}
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full glass-card rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-primary-500/20"
            >
              <img 
                src={selectedCert.image} 
                alt={selectedCert.title} 
                className="w-full max-h-[80vh] object-contain bg-black/50"
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-dark-900 via-dark-900/80 to-transparent">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedCert.title}</h3>
                <div className="flex justify-between items-center">
                  <p className="text-primary-400">{selectedCert.issuer}</p>
                  <a 
                    href={selectedCert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500 hover:bg-primary-600 text-white transition-colors text-sm font-medium"
                  >
                    Verify Certificate <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CertificationsSection;
