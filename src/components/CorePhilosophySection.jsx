import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Zap, Heart } from 'lucide-react';

const CorePhilosophySection = () => {
  const principles = [
    {
      icon: <ShieldCheck className="text-primary-600" />,
      title: "Integrity in Architecture",
      description: "Building systems that are not just functional, but ethical, secure, and resilient against the challenges of modern AI."
    },
    {
      icon: <Cpu className="text-indigo-600" />,
      title: "Neural Precision",
      description: "Meticulously refining every layer of the stack to ensure that data flows with absolute efficiency and purpose."
    },
    {
      icon: <Zap className="text-amber-600" />,
      title: "High-Performance Culture",
      description: "Delivering industrial-grade solutions at the speed of innovation, without compromising on technical debt."
    },
    {
      icon: <Heart className="text-emerald-600" />,
      title: "Human-Centric Impact",
      description: "Engineering technology that empowers users and solves real-world academic and professional challenges."
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {principles.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-6 border border-slate-100">
                {item.icon}
              </div>
              <h4 className="text-lg font-black text-slate-950 mb-3 tracking-tight">{item.title}</h4>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorePhilosophySection;
