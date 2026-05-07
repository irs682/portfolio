import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const TestimonialsSection = () => {
  const testimonials = portfolioData.testimonials;

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden bg-slate-50/50">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="section-subtitle"
          >
            Endorsements
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Client <span className="text-gradient">Voices</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="glass-card p-10 rounded-[3rem] bg-white border-slate-100 shadow-sm flex flex-col h-full"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} size={14} className="fill-primary-500 text-primary-500" />
                ))}
              </div>
              
              <Quote className="text-primary-500/10 w-12 h-12 mb-4" />
              
              <p className="text-slate-600 font-medium leading-relaxed italic mb-10 flex-grow text-lg">
                "{item.content}"
              </p>
              
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-white shadow-md">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-black text-slate-950 text-sm uppercase tracking-tight">{item.name}</h4>
                  <p className="text-[10px] font-bold text-primary-600 uppercase tracking-widest mt-0.5">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

