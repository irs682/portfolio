import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Prevent scrolling while preloader is active
    document.body.style.overflow = 'hidden';

    // Simulate loading progress
    let start = 0;
    const duration = 2000; // 2 seconds loading
    const interval = 20;
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      start += step;
      if (start >= 100) {
        setProgress(100);
        clearInterval(timer);
        setTimeout(() => {
          setIsLoaded(true);
          setTimeout(() => {
            document.body.style.overflow = 'auto'; // Restore scrolling
            if (onLoadingComplete) onLoadingComplete();
          }, 800); // Wait for exit animation
        }, 400); // Hold at 100% for a moment
      } else {
        setProgress(Math.floor(start));
      }
    }, interval);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = 'auto';
    };
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark-900 overflow-hidden"
        >
          {/* Abstract background shapes */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-[100px] animate-pulse-slow animation-delay-2000"></div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Logo / Brand */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black text-white tracking-widest mb-12 flex items-center gap-4"
            >
              IRSHAD<span className="text-primary-500">.</span>AI
            </motion.div>

            {/* Loading Bar */}
            <div className="w-64 h-[2px] bg-white/10 rounded-full overflow-hidden mb-4">
              <motion.div 
                className="h-full bg-gradient-to-r from-primary-500 to-secondary-500"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            {/* Percentage Text */}
            <div className="text-xl font-mono text-gray-400 flex items-end justify-between w-64">
              <span className="text-sm uppercase tracking-widest">Initializing Systems</span>
              <span className="font-bold text-white">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
