import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Award, CheckCircle2, Search, BarChart3, Target } from 'lucide-react';

const Services = () => {
  const items = [
    { title: 'Growth Marketing', desc: 'End-to-end acquisition strategy across paid search, social, and display channels.', icon: <Zap /> },
    { title: 'Brand Positioning', desc: 'Developing a unique voice and visual identity that commands market attention.', icon: <Award /> },
    { title: 'CRO & Funnels', desc: 'Optimizing landing pages and user journeys to squeeze every drop of ROI.', icon: <CheckCircle2 /> },
    { title: 'Market Research', desc: 'Data-backed insights into consumer behavior and emerging vertical trends.', icon: <Search /> },
    { title: 'Performance Creative', desc: 'Ad assets engineered for high engagement and conversion efficiency.', icon: <Target /> },
    { title: 'Analytics Setup', desc: 'Full-stack tracking implementation to ensure every dollar is accounted for.', icon: <BarChart3 /> },
  ];

  return (
    <section id="services" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">Strategic Arsenal</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
            Precision-engineered marketing services designed for the modern digital economy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-800/50 border border-slate-800/50 rounded-3xl overflow-hidden">
          {items.map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ backgroundColor: 'rgba(2, 6, 23, 1)' }}
              className="p-10 bg-slate-950/40 group transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 group-hover:text-emerald-400 group-hover:border-emerald-500/50 transition-all mb-8">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;