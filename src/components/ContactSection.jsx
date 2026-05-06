import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import MagneticButton from './MagneticButton';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative bg-dark-800/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/3"
          >
            <h3 className="text-2xl font-bold mb-6">Let's collaborate</h3>
            <p className="text-gray-400 mb-8">
              I'm always open to discussing product design work, new AI applications, or partnership opportunities.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center group-hover:border-primary-500/50 transition-colors">
                  <Mail className="text-primary-400" size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400">Email</h4>
                  <a href={`mailto:${portfolioData.personal.contact.email}`} className="text-white hover:text-primary-400 transition-colors">
                    {portfolioData.personal.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center group-hover:border-secondary-500/50 transition-colors">
                  <MapPin className="text-secondary-400" size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-400">Location</h4>
                  <p className="text-white">
                    {portfolioData.personal.contact.location}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-2/3 glass-card p-8 rounded-3xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-dark-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-dark-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full bg-dark-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full bg-dark-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <MagneticButton 
                className="w-full py-4 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold flex items-center justify-center gap-2 hover-glow transition-all"
              >
                Send Message <Send size={18} />
              </MagneticButton>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
