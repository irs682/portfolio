import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { motion } from 'framer-motion';

const GithubStats = () => {
  // Using a custom theme to match our application's colors
  const explicitTheme = {
    light: ['#1a1a1d', '#3b0764', '#581c87', '#7e22ce', '#a855f7'],
    dark: ['#1a1a1d', '#3b0764', '#581c87', '#7e22ce', '#a855f7'],
  };

  return (
    <div className="w-full mt-16 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full glass-card p-8 rounded-3xl overflow-x-auto"
      >
        <h3 className="text-2xl font-bold mb-6 text-center text-gray-200">
          Open Source <span className="text-primary-400">Contributions</span>
        </h3>
        <div className="flex justify-center min-w-max">
          <GitHubCalendar 
            username="irs682" 
            colorScheme="dark"
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
