import React, { useCallback, useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, Download, MousePointer2, Sparkles, ShieldCheck, Zap, Brain, Code2, Database } from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import MagneticButton from './MagneticButton';

const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);

  // Mouse Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX - innerWidth / 2) / 25);
    mouseY.set((clientY - innerHeight / 2) / 25);
  };

  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  // Profile Image Slider
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % portfolioData.personal.profileImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-slate-50 transition-colors duration-500"
    >
      {/* Decorative Background - Inspired by User Image */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-indigo-100/40 dark:bg-indigo-900/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-primary-100/30 dark:bg-primary-900/10 rounded-full blur-[100px]"
        />
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-secondary-100/20 dark:bg-secondary-900/10 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center text-center lg:text-left"
        >
          {/* Mobile Profile Image */}
          <motion.div 
            variants={itemVariants}
            className="lg:hidden relative w-48 h-48 sm:w-64 sm:h-64"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-transparent rounded-[3rem] rotate-6 scale-105" />
            <div className="relative w-full h-full rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl">
              <img 
                src={portfolioData.personal.profileImages[currentImageIndex]} 
                alt={portfolioData.personal.name}
                className="w-full h-full object-cover object-[center_20%]"
              />
            </div>
          </motion.div>

          {/* Left Text Column */}
          <div className="max-w-3xl flex flex-col items-center lg:items-start">
            <motion.div variants={itemVariants} className="flex flex-col mb-8 items-center lg:items-start">
              <span className="text-primary-600 font-black text-sm uppercase tracking-[0.4em] mb-2">
                {portfolioData.personal.name}
              </span>
              <span className="px-4 py-1.5 bg-primary-100/50 text-primary-700 text-[10px] font-black uppercase tracking-[0.3em] rounded-full flex items-center gap-2 border border-primary-200/50 w-fit">
                <Sparkles size={12} className="animate-pulse" /> Available for Global Innovation
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-[80px] font-display font-black tracking-tighter mb-8 leading-[1.1] text-slate-950 dark:text-white"
            >
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="block"
              >
                AI Engineer &
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-gradient drop-shadow-sm block"
              >
                MERN Developer.
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="block text-slate-500 dark:text-slate-400 text-2xl md:text-4xl mt-6 font-medium tracking-normal"
              >
                Building Intelligent Web Applications.
              </motion.span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="text-2xl md:text-3xl font-black mb-10 h-16 flex items-center"
            >
              <div className="relative flex items-center">
                <span className="mr-4 text-slate-300 dark:text-slate-700 font-light text-4xl">/</span>
                <div className="relative">
                  <TypeAnimation
                    sequence={portfolioData.personal.titles}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="text-slate-950 dark:text-white font-display uppercase tracking-tight"
                  />
                  {/* Decorative underline */}
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary-600 to-transparent rounded-full"
                  />
                </div>
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-500 dark:text-slate-400 mb-12 leading-relaxed max-w-xl font-medium opacity-80"
            >
              {portfolioData.personal.bio}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-6 items-center justify-center lg:justify-start mb-16">
              <MagneticButton href="#contact" className="group relative px-10 py-5 rounded-2xl bg-slate-950 dark:bg-white dark:text-slate-950 text-white font-bold overflow-hidden shadow-2xl transition-all">
                <span className="relative z-10 flex items-center gap-3 text-sm">
                  Hire Me <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </MagneticButton>

              <MagneticButton href="#projects" className="px-10 py-5 rounded-2xl border-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold hover:border-slate-400 dark:hover:border-slate-600 transition-all flex items-center gap-3 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
                <span className="text-sm">View Projects</span>
              </MagneticButton>

              <MagneticButton href="/resume.pdf" download="resume.pdf" className="px-10 py-5 rounded-2xl bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 font-bold hover:bg-primary-100 dark:hover:bg-primary-900/40 transition-all flex items-center gap-3 border border-primary-200 dark:border-primary-800">
                <Download size={20} /> <span className="text-sm">Resume</span>
              </MagneticButton>

              <div className="flex items-center gap-6 w-full lg:w-auto justify-center lg:justify-start mt-4 lg:mt-0">
                {[
                  { icon: FaGithub, href: portfolioData.personal.contact.github },
                  { icon: FaLinkedin, href: portfolioData.personal.contact.linkedin },
                  { icon: FaWhatsapp, href: `https://wa.me/${portfolioData.personal.contact.phone.replace(/\D/g,'')}` }
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    whileHover={{ scale: 1.2, y: -4, color: '#4f46e5' }}
                    href={social.href}
                    target="_blank"
                    className="text-slate-400 dark:text-slate-600 transition-colors"
                  >
                    <social.icon size={26} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Stats Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-12 border-t border-slate-200 dark:border-slate-800 pt-10"
            >
              {[
                { val: "1+", label: "Year Exp" },
                { val: "15+", label: "Success Projects" },
                { val: "100%", label: "Satisfaction" }
              ].map((stat, i) => (
                <div key={i} className="group">
                  <p className="text-3xl font-black text-slate-950 dark:text-white group-hover:text-primary-600 transition-colors">{stat.val}</p>
                  <p className="text-[10px] text-slate-400 dark:text-slate-600 font-bold uppercase tracking-[0.2em] mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Visual Detail */}
          <motion.div
            variants={itemVariants}
            className="relative hidden lg:flex justify-center items-center"
          >
            <motion.div
              style={{ x: springX, y: springY }}
              className="relative w-full aspect-square max-w-lg"
            >
              {/* Animated Rings */}
              <div className="absolute inset-[-10%] border border-slate-200/50 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-[-20%] border border-slate-100/30 rounded-full animate-[spin_30s_linear_infinite_reverse]" />

              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-transparent rounded-[4rem] rotate-6 scale-105" />

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative z-10 w-full h-full rounded-[3.5rem] overflow-hidden border-[12px] border-white shadow-[0_40px_80px_-15px_rgba(15,23,42,0.15)] bg-slate-100 group"
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={portfolioData.personal.profileImages[currentImageIndex]}
                    alt={portfolioData.personal.name}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="w-full h-full object-cover object-[center_20%] group-hover:scale-110 transition-transform duration-1000"
                  />
                </AnimatePresence>

                {/* Neural Scan Line */}
                <motion.div 
                  animate={{ y: ["-100%", "200%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 w-full h-[2px] bg-primary-500/50 shadow-[0_0_15px_rgba(99,102,241,0.5)] z-20 opacity-0 group-hover:opacity-100 transition-opacity"
                />

                {/* Progress Indicators for Slider */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  {portfolioData.personal.profileImages.map((_, i) => (
                    <div 
                      key={i}
                      className={`h-1 rounded-full transition-all duration-500 ${i === currentImageIndex ? 'w-8 bg-white' : 'w-2 bg-white/40'}`}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-slate-300 to-transparent" />
        <span className="text-[10px] text-slate-400 uppercase tracking-[0.6em] font-bold -rotate-90 origin-left mt-10">Scroll</span>
      </motion.div>
    </section>
  );
};

export default HeroSection;

