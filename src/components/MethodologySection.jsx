import React from 'react';
import { motion } from 'framer-motion';
import { Search, Layout, Code2, Rocket, ArrowRight } from 'lucide-react';

const MethodologySection = () => {
  const steps = [
    {
      icon: <Search className="text-primary-600" />,
      title: "Discovery & Analysis",
      description: "Identifying complex bottlenecks and researching state-of-the-art Neural Architectures for optimal solution mapping.",
      details: ["Data Auditing", "Feasibility Study", "Tech Stack Selection"]
    },
    {
      icon: <Layout className="text-indigo-600" />,
      title: "Strategic Architecture",
      description: "Designing scalable MERN ecosystems and RAG pipelines with a focus on low-latency and high-concurrency.",
      details: ["Schema Design", "API Blueprinting", "Security Protocols"]
    },
    {
      icon: <Code2 className="text-blue-600" />,
      title: "Precision Engineering",
      description: "Writing high-performance, maintainable code using clean-architecture principles and robust testing frameworks.",
      details: ["Atomic Development", "CI/CD Integration", "AI Logic Sync"]
    },
    {
      icon: <Rocket className="text-emerald-600" />,
      title: "Deployment & Optimization",
      description: "Launching industrial-grade systems with continuous monitoring and neural model fine-tuning for peak performance.",
      details: ["Edge Deployment", "Performance Tuning", "Elastic Scaling"]
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="section-subtitle"
          >
            Engineering Workflow
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="section-title text-slate-950"
          >
            Strategic <span className="text-gradient">Methodology</span>
          </motion.h2>
          <p className="text-slate-500 max-w-2xl mt-4 font-medium">
            My systematic approach to transforming complex requirements into high-performance digital reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Connector Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-[2px] bg-slate-100 -z-10">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-primary-500 to-indigo-500 opacity-20"
                  />
                </div>
              )}

              <div className="glass-card p-10 rounded-[3rem] border-slate-100 bg-white hover:shadow-2xl transition-all duration-500 flex flex-col h-full relative z-10">
                <div className="w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500 shadow-sm border border-slate-100">
                  {React.cloneElement(step.icon, { size: 32, className: "group-hover:scale-110 transition-transform" })}
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-black text-primary-600 bg-primary-50 px-3 py-1 rounded-full uppercase tracking-widest">
                    Phase 0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-black text-slate-950 mb-4 tracking-tight leading-tight">
                  {step.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">
                  {step.description}
                </p>

                <div className="mt-auto space-y-3 pt-6 border-t border-slate-50">
                  {step.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-500/40" />
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-24 p-10 rounded-[3rem] bg-slate-950 text-white relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
            <Rocket size={120} />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center md:text-left">
              <h4 className="text-2xl font-black mb-3">Ready to initiate a strategic deployment?</h4>
              <p className="text-slate-400 text-sm font-medium">I'm currently accepting high-impact projects for {new Date().getFullYear()}. Let's discuss your architectural vision.</p>
            </div>
            <a href="#contact" className="px-10 py-5 bg-white text-slate-950 font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-primary-600 hover:text-white transition-all shadow-xl shadow-white/5 flex items-center gap-3">
              Start Project <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MethodologySection;
