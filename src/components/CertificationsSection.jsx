import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, X, ZoomIn, ShieldCheck, Sparkles } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import { portfolioData } from '../data/portfolioData';

const CertificationsSection = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="py-32 relative overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary-100/20 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="section-subtitle"
          >
            Verified Credentials
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Global <span className="text-gradient">Certifications</span>
          </motion.h2>
          <motion.div 
             initial={{ width: 0 }}
             whileInView={{ width: "80px" }}
             className="h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
          {portfolioData.certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Tilt
                tiltMaxAngleX={6}
                tiltMaxAngleY={6}
                glareEnable={true}
                glareMaxOpacity={0.1}
                glarePosition="all"
                className="h-full"
              >
                <div className="glass-card h-full flex flex-col group overflow-hidden border-slate-200/50 bg-white/50 backdrop-blur-sm rounded-[2.5rem] hover:bg-white transition-all duration-700 hover:shadow-2xl hover:shadow-primary-500/10">
                  <div 
                    className="relative aspect-[16/10] overflow-hidden p-4 group/image cursor-pointer"
                    onClick={() => setSelectedCert(cert)}
                  >
                    <div className="w-full h-full rounded-[2rem] overflow-hidden relative bg-slate-950">
                      <img 
                        src={cert.image} 
                        alt={cert.title} 
                        className="w-full h-full object-contain grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out opacity-90 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-700" />
                      
                      {/* Zoom Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-500 bg-slate-950/20 backdrop-blur-[2px]">
                        <div className="w-14 h-14 rounded-2xl bg-white/90 shadow-2xl flex items-center justify-center text-slate-900">
                          <ZoomIn size={24} />
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-8 right-8 z-20">
                      <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center text-white shadow-lg shadow-primary-500/30">
                        <ShieldCheck size={20} />
                      </div>
                    </div>
                  </div>

                  <div className="p-10 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-primary-50 text-primary-600 text-[10px] font-black uppercase tracking-widest rounded-lg border border-primary-100">
                        Official ID
                      </span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{cert.date}</span>
                    </div>

                    <h3 className="text-xl font-black text-slate-950 mb-3 group-hover:text-primary-600 transition-colors leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-slate-500 text-sm font-medium mb-8 flex-grow">
                      Issued by <span className="text-slate-950 font-bold">{cert.issuer}</span>
                    </p>
                    
                    <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                      <div className="flex items-center gap-2">
                        <Sparkles size={14} className="text-primary-500" />
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Verified Badge</span>
                      </div>
                      <a 
                        href={cert.link}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 rounded-xl bg-slate-950 text-white hover:bg-primary-600 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/20"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Advanced Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 backdrop-blur-2xl p-6 md:p-16 cursor-zoom-out"
          >
            <motion.button 
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-10 right-10 p-4 rounded-2xl bg-white/10 text-white hover:bg-white/20 transition-all z-[110]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedCert(null);
              }}
            >
              <X size={24} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full flex flex-col items-center gap-10"
            >
              <div className="relative group w-full bg-slate-900 rounded-[3rem] overflow-hidden shadow-[0_0_100px_rgba(79,70,229,0.3)] border border-white/10">
                <img 
                  src={selectedCert.image} 
                  alt={selectedCert.title} 
                  className="w-full max-h-[70vh] object-contain shadow-2xl p-4 md:p-12"
                />
              </div>
              
              <div className="text-center space-y-4">
                <h3 className="text-3xl md:text-5xl font-black text-white">{selectedCert.title}</h3>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                  <p className="text-xl font-bold text-primary-400">{selectedCert.issuer}</p>
                  <div className="hidden md:block w-2 h-2 rounded-full bg-white/20" />
                  <a 
                    href={selectedCert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-slate-950 hover:bg-primary-500 hover:text-white transition-all duration-500 text-lg font-black uppercase tracking-widest shadow-2xl"
                  >
                    Verify Credentials <ExternalLink size={20} />
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
