import React from 'react';
import { motion } from 'framer-motion';

const TextMarquee = ({ text, direction = "left", speed = 20 }) => {
  const marqueeVariants = {
    animate: {
      x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="w-full bg-primary-500/10 border-y border-primary-500/20 py-4 overflow-hidden relative flex items-center">
      <motion.div
        className="whitespace-nowrap flex text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-600 opacity-30 uppercase tracking-widest"
        variants={marqueeVariants}
        animate="animate"
      >
        <span className="pr-12">{text}</span>
        <span className="pr-12">{text}</span>
        <span className="pr-12">{text}</span>
        <span className="pr-12">{text}</span>
      </motion.div>
    </div>
  );
};

export default TextMarquee;
