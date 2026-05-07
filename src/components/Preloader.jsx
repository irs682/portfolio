import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const dataStreams = [
    "INITIALIZING CORE NEURAL NETWORK...",
    "CALIBRATING VISION MODELS...",
    "OPTIMIZING WEBGL RENDERING...",
    "SYNCING KNOWLEDGE BASE...",
    "ESTABLISHING SECURE PROTOCOLS...",
    "DEPLOING NEURAL INTERFACE...",
    "SYSTEMS ONLINE."
  ];

  const currentStream = dataStreams[Math.min(Math.floor(progress / (100 / dataStreams.length)), dataStreams.length - 1)];

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    let start = 0;
    const duration = 2500;
    const interval = 30;
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      start += step;
      if (start >= 100) {
        setProgress(100);
        clearInterval(timer);
        setTimeout(() => {
          setIsLoaded(true);
          setTimeout(() => {
            document.body.style.overflow = 'auto';
            if (onLoadingComplete) onLoadingComplete();
          }, 1000);
        }, 500);
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
          exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
          transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-dark-950 overflow-hidden"
        >
          {/* Animated Background Gradients */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.1, 0.05]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[150px]"
          />

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Spinning Ring */}
            <div className="relative w-48 h-48 mb-12">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="96"
                  cy="96"
                  r="80"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="transparent"
                  className="text-white/5"
                />
                <motion.circle
                  cx="96"
                  cy="96"
                  r="80"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="transparent"
                  strokeDasharray="502.4"
                  initial={{ strokeDashoffset: 502.4 }}
                  animate={{ strokeDashoffset: 502.4 - (502.4 * progress) / 100 }}
                  className="text-primary-500"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.span 
                  className="text-6xl font-display font-black text-white tracking-tighter"
                >
                  {progress}
                </motion.span>
              </div>
            </div>

            {/* Brand Logo */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[10px] font-bold text-gray-400 mb-8 uppercase tracking-[0.8em]"
            >
              System <span className="text-primary-500 font-black">Initialization</span>
            </motion.div>

            {/* Data Stream */}
            <div className="h-4">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentStream}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-[10px] font-mono text-primary-400 tracking-[0.2em] font-bold uppercase"
                >
                  {currentStream}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          {/* Decorative Corner Elements */}
          <div className="absolute top-10 left-10 w-20 h-20 border-l-2 border-t-2 border-white/5 rounded-tl-3xl" />
          <div className="absolute bottom-10 right-10 w-20 h-20 border-r-2 border-b-2 border-white/5 rounded-br-3xl" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
