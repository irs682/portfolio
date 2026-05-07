import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CyberGrid = ({ isLight = false }) => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [0.1, 0.05]);
  const y = useTransform(scrollY, [0, 5000], [0, 500]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <motion.div 
        style={{ 
          opacity,
          y,
          backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.15) 1px, transparent 1px), 
                            linear-gradient(to bottom, rgba(59, 130, 246, 0.15) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
        className="absolute inset-0 w-[200%] h-[200%] -left-1/2 -top-1/2"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />
    </div>
  );
};

export default CyberGrid;
