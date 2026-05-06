import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = portfolioData.testimonials;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="glass-card p-8 md:p-12 rounded-3xl relative border border-white/10"
            >
              <Quote className="absolute top-6 left-6 text-primary-500/20 w-24 h-24 -z-10" />
              
              <div className="flex flex-col items-center text-center relative z-10">
                <p className="text-lg md:text-xl text-gray-300 italic mb-8 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </p>
                
                <div className="flex items-center flex-col">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-primary-500/30">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-bold text-white text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-primary-400">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={handlePrev}
              className="p-3 rounded-full glass hover:bg-primary-500/20 hover:text-primary-400 transition-all text-gray-400"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-8 bg-primary-500' : 'w-2 bg-white/20'}`}
                />
              ))}
            </div>
            <button 
              onClick={handleNext}
              className="p-3 rounded-full glass hover:bg-primary-500/20 hover:text-primary-400 transition-all text-gray-400"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
