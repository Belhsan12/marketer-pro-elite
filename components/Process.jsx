import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Rocket, BarChart } from 'lucide-react';

const ProcessStep = ({ icon: Icon, title, desc, step }) => (
  <div className="relative">
    <div className="absolute -top-10 -left-6 text-[8rem] font-black text-slate-900/50 pointer-events-none select-none z-0">
      0{step}
    </div>
    <div className="relative z-10">
      <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 mb-6">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-400 leading-relaxed text-sm">{desc}</p>
    </div>
  </div>
);

const Process = () => {
  const steps = [
    { icon: Search, title: 'Audit & Analysis', desc: 'Deep dive into your current funnel, market positioning, and competitor landscape.' },
    { icon: PenTool, title: 'Strategic Blueprint', desc: 'Crafting a bespoke roadmap focused on your specific growth KPIs and budget.' },
    { icon: Rocket, title: 'Agile Execution', desc: 'Rapid deployment of campaigns with constant testing and creative iterations.' },
    { icon: BarChart, title: 'Scale & Optimize', desc: 'Identifying winning patterns and doubling down on what drives the highest LTV.' },
  ];

  return (
    <section id="process" className="py-32 px-6 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <ProcessStep {...s} step={i + 1} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;