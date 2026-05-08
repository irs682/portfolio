import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import MagneticButton from './MagneticButton';

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-slate-50">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(79,70,229,0.05),transparent_50%)]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-100/20 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="section-subtitle"
          >
            Communication Channel
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Let's <span className="text-gradient">Connect</span>
          </motion.h2>
          <motion.div 
             initial={{ width: 0 }}
             whileInView={{ width: "80px" }}
             className="h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
          />
        </div>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Contact Details - Left Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-2/5"
          >
            <div className="space-y-12">
              <div>
                <h3 className="text-3xl font-black text-slate-950 mb-6 leading-tight">Let's build something <span className="text-primary-600">legendary</span>.</h3>
                <p className="text-slate-500 text-lg font-medium leading-relaxed">
                  I'm always open to discussing high-impact projects, innovative AI applications, or strategic collaborations.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  { icon: Mail, label: 'Email', value: portfolioData.personal.contact.email, link: `mailto:${portfolioData.personal.contact.email}`, color: 'primary' },
                  { icon: Phone, label: 'Phone', value: portfolioData.personal.contact.phone, link: `tel:${portfolioData.personal.contact.phone}`, color: 'secondary' },
                  { icon: MapPin, label: 'Location', value: portfolioData.personal.contact.location, color: 'accent' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-6 group">
                    <div className="w-16 h-16 rounded-2xl bg-white shadow-xl shadow-slate-200/50 flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-all duration-500 border border-slate-100">
                      <item.icon size={24} className="group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{item.label}</h4>
                      {item.link ? (
                        <a href={item.link} className="text-lg font-bold text-slate-950 hover:text-primary-600 transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-lg font-bold text-slate-950">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-10 border-t border-slate-200">
                <div className="flex items-center gap-4 p-4 bg-primary-50 rounded-2xl border border-primary-100">
                  <div className="w-2 h-2 rounded-full bg-primary-600 animate-pulse" />
                  <p className="text-[11px] font-black text-primary-900 uppercase tracking-widest">Currently available for new opportunities</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form - Right Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-3/5"
          >
            <div className="glass-card p-10 md:p-14 rounded-[3rem] bg-white border-slate-200/60 shadow-2xl shadow-slate-200/50 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
                <MessageSquare size={160} />
              </div>
              
              <form className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Identity</label>
                    <input 
                      type="text" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-slate-950 font-bold placeholder:text-slate-300 focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all"
                      placeholder="Your Full Name"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Contact Node</label>
                    <input 
                      type="email" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-slate-950 font-bold placeholder:text-slate-300 focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all"
                      placeholder="Email Address"
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Objective</label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-slate-950 font-bold placeholder:text-slate-300 focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all"
                    placeholder="Subject of collaboration"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Message Transmission</label>
                  <textarea 
                    rows="5" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-slate-950 font-bold placeholder:text-slate-300 focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all resize-none"
                    placeholder="How can we achieve greatness together?"
                  ></textarea>
                </div>

                <MagneticButton 
                  className="w-full py-5 rounded-2xl bg-slate-950 text-white font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-primary-600 transition-all shadow-xl shadow-slate-900/10 hover:shadow-primary-500/30"
                >
                  Initiate Connection <Send size={18} />
                </MagneticButton>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
