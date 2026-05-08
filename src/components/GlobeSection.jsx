import React, { useEffect, useRef } from 'react';
import createGlobe from 'cobe';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { MapPin } from 'lucide-react';

const GlobeSection = () => {
  const canvasRef = useRef();

  useEffect(() => {
    let phi = 0;
    let width = 0;
    let globe;

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener('resize', onResize);
    onResize();

    // Small timeout to ensure container dimensions are settled
    const timeoutId = setTimeout(() => {
      if (!canvasRef.current) return;

      globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: (width || 500) * 2,
        height: (width || 500) * 2,
        phi: 0,
        theta: 0.2,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [0.1, 0.1, 0.15],
        markerColor: [0.65, 0.33, 0.96],
        glowColor: [0.06, 0.71, 0.83],
        markers: [{ location: [34.1989, 72.0404], size: 0.1 }],
        onRender: (state) => {
          state.phi = phi;
          phi += 0.005;
          const currentWidth = canvasRef.current?.offsetWidth || 500;
          state.width = currentWidth * 2;
          state.height = currentWidth * 2;
        }
      });
    }, 100);

    return () => {
      if (globe) globe.destroy();
      window.removeEventListener('resize', onResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section className="py-24 relative bg-dark-900 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12 relative z-10">
        
        {/* Left Side: Text */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 text-center lg:text-left z-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Global <span className="text-gradient">Impact</span>
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0">
            Based in Mardan, Pakistan, I build highly scalable, world-class web applications that reach users across the globe. Geography is no barrier to shipping premium code.
          </p>
          
          <div className="inline-flex items-center gap-3 glass-card px-6 py-3 rounded-full border border-primary-500/30">
            <MapPin className="text-primary-400 animate-bounce" size={20} />
            <span className="font-medium text-white">{portfolioData.personal.contact.location}</span>
          </div>
        </motion.div>

        {/* Right Side: Globe */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 relative flex justify-center items-center h-[400px] w-full"
        >
          {/* Abstract background glow behind globe */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-secondary-500/20 rounded-full blur-3xl w-full h-full max-w-[400px] mx-auto opacity-50"></div>
          
          <div className="w-[500px] h-[500px] max-w-full absolute flex items-center justify-center">
            <canvas
              ref={canvasRef}
              style={{
                width: 500,
                height: 500,
                maxWidth: "100%",
                aspectRatio: 1
              }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default GlobeSection;
