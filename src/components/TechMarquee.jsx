import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaPython, FaDocker, FaGithub, FaAws
} from 'react-icons/fa';
import { 
  SiMongodb, SiTensorflow, SiPytorch, SiTailwindcss, SiJavascript, SiTypescript 
} from 'react-icons/si';

const TechMarquee = () => {
  const techStack = [
    { icon: <FaReact />, name: "React" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <FaPython />, name: "Python" },
    { icon: <SiTensorflow />, name: "TensorFlow" },
    { icon: <SiPytorch />, name: "PyTorch" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaDocker />, name: "Docker" },
    { icon: <FaAws />, name: "AWS" },
    { icon: <FaGithub />, name: "GitHub" },
  ];

  // Duplicate the array to create a seamless infinite scroll effect
  const doubledStack = [...techStack, ...techStack];

  return (
    <div className="py-10 bg-dark-900 border-y border-white/5 overflow-hidden flex relative">
      {/* Gradient masks for smooth fade in/out at edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark-900 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-900 to-transparent z-10"></div>

      <motion.div 
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        className="flex gap-16 items-center whitespace-nowrap pl-16"
      >
        {doubledStack.map((tech, index) => (
          <div key={index} className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group cursor-pointer">
            <span className="text-3xl group-hover:text-primary-400 transition-colors">
              {tech.icon}
            </span>
            <span className="text-xl font-bold tracking-wider">{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechMarquee;
