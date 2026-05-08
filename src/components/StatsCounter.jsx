import React, { useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const StatItem = ({ label, value, suffix = "+" }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value);
      if (start === end) return;

      let totalDuration = 2000;
      let incrementTime = (totalDuration / end);

      let timer = setInterval(() => {
        start += 1;
        setCount(String(start) + suffix);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value, suffix]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-6 text-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 mb-2"
      >
        {count || "0" + suffix}
      </motion.div>
      <div className="text-sm md:text-base text-gray-400 font-medium uppercase tracking-wider">{label}</div>
    </div>
  );
};

const StatsCounter = () => {
  return (
    <section className="py-12 relative z-10 border-b border-white/5 bg-dark-900/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5">
          <StatItem value="1" label="Year Experience" />
          <StatItem value="15" label="Projects Completed" />
          <StatItem value="10" label="AI Models Deployed" />
          <StatItem value="50" label="K+ Lines of Code" />
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
