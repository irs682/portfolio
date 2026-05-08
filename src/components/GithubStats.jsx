import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { motion } from 'framer-motion';

const GithubStats = () => {
  // Using a custom theme to match our application's colors
  const explicitTheme = {
    light: ['#f8fafc', '#e2e8f0', '#94a3b8', '#6366f1', '#4f46e5'],
    dark: ['#1e293b', '#334155', '#475569', '#6366f1', '#4f46e5'],
  };

  return (
    <div className="w-full mt-16 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full glass-card p-8 rounded-3xl overflow-x-auto dark:bg-slate-900/60 dark:border-slate-800 transition-colors duration-500"
      >
        <h3 className="text-2xl font-bold mb-6 text-center text-slate-900 dark:text-white">
          Open Source <span className="text-primary-400">Contributions</span>
        </h3>
        <div className="flex justify-center min-w-max">
          <GitHubCalendar 
            username="irs682" 
            theme={explicitTheme}
            fontSize={14}
            blockSize={15}
            blockMargin={5}
            hideTotalCount={false}
            hideColorLegend={false}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default GithubStats;
