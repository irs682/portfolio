import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxBackground = () => {
  const { scrollY } = useScroll();

  // Create deep parallax layers that move at different speeds
  const y1 = useTransform(scrollY, [0, 5000], [0, -1000]); // Moves fastest (foreground)
  const y2 = useTransform(scrollY, [0, 5000], [0, -600]);  // Midground
  const y3 = useTransform(scrollY, [0, 5000], [0, -300]);  // Background (slowest)

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Background layer */}
      <motion.div 
        style={{ y: y3 }} 
        className="absolute w-[800px] h-[800px] rounded-full bg-primary-900/10 blur-[150px] mix-blend-screen opacity-50"
        initial={{ left: '-10%', top: '20%' }}
      />
      
      {/* Midground layer */}
      <motion.div 
        style={{ y: y2 }} 
        className="absolute w-[600px] h-[600px] rounded-full bg-secondary-900/20 blur-[120px] mix-blend-screen opacity-60"
        initial={{ right: '-5%', top: '40%' }}
      />
      
      {/* Foreground layer */}
      <motion.div 
        style={{ y: y1 }} 
        className="absolute w-[400px] h-[400px] rounded-full bg-primary-500/20 blur-[100px] mix-blend-screen opacity-40"
        initial={{ left: '30%', top: '70%' }}
      />
      
      {/* Extra deep layer */}
      <motion.div 
        style={{ y: useTransform(scrollY, [0, 5000], [0, -1500]) }} 
        className="absolute w-[300px] h-[300px] rounded-full bg-accent-500/30 blur-[80px] mix-blend-screen opacity-30"
        initial={{ right: '20%', top: '90%' }}
      />
    </div>
  );
};

export default ParallaxBackground;
