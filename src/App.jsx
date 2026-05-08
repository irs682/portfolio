import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { motion, useScroll, useSpring } from 'framer-motion';
import FloatingDock from './components/FloatingDock';
import TextMarquee from './components/TextMarquee';
import ParallaxBackground from './components/ParallaxBackground';
import CyberGrid from './components/CyberGrid';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import EducationResearchSection from './components/EducationResearchSection';
import CertificationsSection from './components/CertificationsSection';
import TechMarquee from './components/TechMarquee';
import GithubStats from './components/GithubStats';
import StatsCounter from './components/StatsCounter';
import TestimonialsSection from './components/TestimonialsSection';
import BackToTop from './components/BackToTop';
import ServicesSection from './components/ServicesSection';
import MethodologySection from './components/MethodologySection';
import CorePhilosophySection from './components/CorePhilosophySection';
import StrategicImpactSection from './components/StrategicImpactSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CinematicReveal from './components/CinematicReveal';
import NoiseOverlay from './components/NoiseOverlay';
import Navbar from './components/Navbar';

const SectionWrapper = ({ children, id }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    className="relative"
  >
    {children}
  </motion.section>
);

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative selection:bg-primary-500/20 selection:text-primary-900 bg-slate-50 dark:bg-slate-950 min-h-screen text-slate-900 dark:text-white transition-colors duration-500 overflow-x-hidden">
      <BackToTop />
      <NoiseOverlay />
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary-600 z-[100] origin-left shadow-lg shadow-primary-500/20"
        style={{ scaleX }}
      />

      <CyberGrid isLight={true} />
      <ParallaxBackground isLight={true} />
      <Navbar />
      <FloatingDock isLight={true} />
      
      <main className="relative z-10">
        <HeroSection />
        
        <div className="py-24 bg-white/50 backdrop-blur-sm border-y border-slate-200/50">
          <TextMarquee text="AI ENGINEER ✦ FULL STACK DEVELOPER ✦ NLP RESEARCHER ✦" speed={15} isLight={true} />
          <TechMarquee isLight={true} />
        </div>

        <SectionWrapper id="about"><AboutSection isLight={true} /></SectionWrapper>
        <SectionWrapper><CorePhilosophySection isLight={true} /></SectionWrapper>
        <SectionWrapper id="services"><ServicesSection isLight={true} /></SectionWrapper>
        <SectionWrapper><StatsCounter isLight={true} /></SectionWrapper>
        <SectionWrapper id="skills"><SkillsSection isLight={true} /></SectionWrapper>
        <SectionWrapper><GithubStats isLight={true} /></SectionWrapper>
        <SectionWrapper id="projects"><ProjectsSection isLight={true} /></SectionWrapper>
        <SectionWrapper id="experience"><ExperienceSection isLight={true} /></SectionWrapper>
        <SectionWrapper id="methodology"><MethodologySection isLight={true} /></SectionWrapper>
        <SectionWrapper id="education"><EducationResearchSection isLight={true} /></SectionWrapper>
        <SectionWrapper id="certifications"><CertificationsSection isLight={true} /></SectionWrapper>
        <SectionWrapper id="testimonials"><TestimonialsSection isLight={true} /></SectionWrapper>
        <SectionWrapper id="strategic-impact"><StrategicImpactSection isLight={true} /></SectionWrapper>
        <SectionWrapper id="contact"><ContactSection isLight={true} /></SectionWrapper>
      </main>

      <Footer isLight={true} />
    </div>
  );
}

export default App;

