import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Database, Layout, Smartphone, Share2, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Brain className="text-primary-500" />,
      title: "AI & LLM Integration",
      description: "Developing intelligent RAG-based systems and integrating Large Language Models (LLMs) to transform static data into dynamic insights.",
      tags: ["OpenAI", "LangChain", "Vector DBs"]
    },
    {
      icon: <Layout className="text-indigo-500" />,
      title: "Full Stack MERN Systems",
      description: "Architecting scalable, high-concurrency web ecosystems using MongoDB, Express, React, and Node.js with a focus on performance.",
      tags: ["Scalability", "Clean Code", "React"]
    },
    {
      icon: <Smartphone className="text-blue-500" />,
      title: "Responsive UI/UX Design",
      description: "Crafting visually stunning, mobile-first interfaces with premium animations and Apple-level clean design principles.",
      tags: ["Framer Motion", "Tailwind", "UX"]
    },
    {
      icon: <Database className="text-emerald-500" />,
      title: "Data Engineering",
      description: "Building robust data pipelines and advanced web scrapers to collect, process, and store strategic information at scale.",
      tags: ["Python", "Automation", "MongoDB"]
    },
    {
      icon: <Share2 className="text-amber-500" />,
      title: "API Ecosystem Design",
      description: "Developing secure, performant REST and GraphQL APIs that serve as the backbone for complex modern applications.",
      tags: ["Security", "RESTful", "Node.js"]
    },
    {
      icon: <Code2 className="text-rose-500" />,
      title: "Custom Software Solutions",
      description: "Tailoring high-impact software products to meet specific architectural goals for international startups and research labs.",
      tags: ["Agile", "DevOps", "Innovation"]
    }
  ];

  return (
    <section id="services" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="section-subtitle"
          >
            Professional Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="section-title text-slate-950"
          >
            Premium <span className="text-gradient">Services</span>
          </motion.h2>
          <p className="text-slate-500 max-w-2xl mt-4 font-medium">
            Delivering elite technical solutions tailored for international remote roles and high-impact scholarship applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-10 rounded-[3rem] bg-white border border-slate-100 hover:border-primary-500/20 hover:shadow-[0_40px_80px_-15px_rgba(79,70,229,0.1)] transition-all duration-700 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-full blur-3xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500">
                {React.cloneElement(service.icon, { size: 28, className: "group-hover:scale-110 transition-transform" })}
              </div>

              <h3 className="text-xl font-black text-slate-950 mb-4 tracking-tight group-hover:text-primary-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {service.tags.map((tag, i) => (
                  <span key={i} className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-3 py-1 bg-slate-50 rounded-lg group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>

              <motion.a 
                href="#contact"
                className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-950 hover:text-primary-600 transition-colors"
              >
                Inquire Now <ArrowRight size={14} />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
