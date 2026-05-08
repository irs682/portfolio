import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Cpu, Rocket, Code2, Workflow } from 'lucide-react';

const StrategicImpactSection = () => {
  const highlights = [
    {
      icon: <Zap className="text-amber-500" />,
      title: "Rapid Deployment",
      description: "Accelerating time-to-market with optimized CI/CD pipelines and agile MERN stack development methodologies.",
      metric: "40% Faster Delivery"
    },
    {
      icon: <ShieldCheck className="text-emerald-500" />,
      title: "Enterprise Security",
      description: "Implementing robust JWT-based authentication and secure data encryption to protect sensitive user information.",
      metric: "Zero Security Debt"
    },
    {
      icon: <Cpu className="text-primary-500" />,
      title: "AI-Powered Logic",
      description: "Integrating Large Language Models and RAG systems to create intelligent, self-evolving web applications.",
      metric: "95% Accuracy"
    },
    {
      icon: <Workflow className="text-indigo-500" />,
      title: "Scalable Systems",
      description: "Architecting microservices and MongoDB schemas designed to handle high-concurrency traffic with zero downtime.",
      metric: "Infinite Scalability"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-slate-950 text-white">
      {/* Cinematic background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.1)_0%,transparent_70%)]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-primary-400 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block"
            >
              The Competitive Edge
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black leading-tight text-white"
            >
              Delivering <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-indigo-400">Strategic Impact</span> <span className="text-white">Through Code</span>
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-6 p-6 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md text-white"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary-600 flex items-center justify-center shadow-lg shadow-primary-500/20">
              <Rocket size={24} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-primary-400">Total Solutions</p>
              <p className="text-2xl font-bold text-white">Production Ready</p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 rounded-[2.5rem] bg-white/5 border border-white/5 hover:border-primary-500/30 transition-all duration-500 relative flex flex-col h-full overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Code2 size={80} className="text-white" />
              </div>
              
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-white/10 transition-all">
                {item.icon}
              </div>
              
              <h3 className="text-xl font-black mb-4 group-hover:text-primary-400 transition-colors text-white">
                {item.title}
              </h3>
              
              <p className="text-slate-300 text-sm leading-relaxed mb-8 flex-grow">
                {item.description}
              </p>
              
              <div className="pt-6 border-t border-white/10 mt-auto">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-400">
                  {item.metric}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicImpactSection;
