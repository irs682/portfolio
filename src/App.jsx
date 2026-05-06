import React, { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import Preloader from './components/Preloader';
import MouseTrail from './components/MouseTrail';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
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
import GlobeSection from './components/GlobeSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [appLoaded, setAppLoaded] = useState(false);

  useEffect(() => {
    // Only init smooth scrolling after preloader finishes
    if (!appLoaded) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [appLoaded]);

  return (
    <div className="relative selection:bg-primary-500/30 selection:text-white bg-dark-900 min-h-screen">
      <Preloader onLoadingComplete={() => setAppLoaded(true)} />
      {appLoaded && <MouseTrail />}
      
      <div style={{ opacity: appLoaded ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}>
        <ScrollProgress />
        <Navbar />
      
      <main>
        <HeroSection />
        <TechMarquee />
        <AboutSection />
        <StatsCounter />
        <SkillsSection />
        <GithubStats />
        <ProjectsSection />
        <ExperienceSection />
        <EducationResearchSection />
        <CertificationsSection />
        <TestimonialsSection />
        <GlobeSection />
        <ContactSection />
      </main>

      <Footer />
      </div>
    </div>
  );
}

export default App;
