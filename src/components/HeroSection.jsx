import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import MagneticButton from './MagneticButton';

const HeroSection = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: { color: { value: "transparent" } },
            fpsLimit: 60,
            interactivity: {
              events: { onHover: { enable: true, mode: "repulse" }, resize: true },
              modes: { repulse: { distance: 100, duration: 0.4 } },
            },
            particles: {
              color: { value: ["#8b5cf6", "#06b6d4", "#a78bfa"] },
              links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.1, width: 1 },
              move: { direction: "none", enable: true, outModes: { default: "bounce" }, random: false, speed: 1, straight: false },
              number: { density: { enable: true, area: 800 }, value: 60 },
              opacity: { value: 0.3 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
        />
      </div>

      {/* Abstract Glowing Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="px-4 py-2 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-400 text-sm font-medium inline-block mb-6">
                Welcome to my universe
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4"
            >
              Hi, I'm <br className="md:hidden" />
              <span className="text-gradient">{portfolioData.personal.name}</span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-3xl font-medium text-gray-400 mb-8 h-16 md:h-auto"
            >
              <TypeAnimation
                sequence={portfolioData.personal.titles}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-gray-300"
              />
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-gray-400 mb-10 leading-relaxed"
            >
              {portfolioData.personal.bio}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <MagneticButton href="#projects" className="group relative px-8 py-3.5 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium overflow-hidden hover-glow transition-all">
                <span className="relative z-10 flex items-center gap-2">
                  View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </MagneticButton>
              
              <MagneticButton href="#contact" className="px-8 py-3.5 rounded-full glass border border-white/10 text-white font-medium hover:bg-white/5 transition-all flex items-center gap-2">
                <Download size={18} /> Download CV
              </MagneticButton>

              <div className="flex items-center gap-3 ml-4">
                <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="p-3 rounded-full glass hover:bg-white/10 text-gray-300 hover:text-white transition-all">
                  <FaGithub size={20} />
                </a>
                <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="p-3 rounded-full glass hover:bg-white/10 text-gray-300 hover:text-primary-400 transition-all">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Profile Picture Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:flex justify-center items-center"
          >
            {/* Pulsing background rings */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-secondary-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
            
            <div className="relative w-80 h-80 xl:w-96 xl:h-96">
              {/* Profile Image container with 3D hover effect using Framer Motion */}
              <motion.div 
                whileHover={{ rotateY: 15, rotateX: -5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-full h-full rounded-[2rem] overflow-hidden glass-card border-2 border-white/10 shadow-[0_0_40px_rgba(139,92,246,0.3)] z-10 relative"
              >
                <img 
                  src={portfolioData.personal.profileImage} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent"></div>
              </motion.div>

              {/* Floating Tech Icons */}
              <motion.div 
                animate={{ y: [-10, 10, -10], rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 glass-card p-4 rounded-2xl z-20 shadow-xl border border-white/10"
              >
                <FaReact className="text-secondary-400 text-3xl" />
              </motion.div>

              <motion.div 
                animate={{ y: [10, -10, 10], rotate: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 -right-8 glass-card p-4 rounded-2xl z-20 shadow-xl border border-white/10"
              >
                <FaPython className="text-primary-400 text-3xl" />
              </motion.div>

              <motion.div 
                animate={{ y: [-5, 15, -5], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -bottom-8 left-1/4 glass-card p-4 rounded-2xl z-20 shadow-xl border border-white/10"
              >
                <FaNodeJs className="text-green-500 text-3xl" />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
