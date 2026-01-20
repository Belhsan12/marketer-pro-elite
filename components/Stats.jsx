import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Target, Users, Globe } from 'lucide-react';

const Stats = () => {
  const metrics = [
    { label: 'Avg ROI Increase', value: '145%', icon: <TrendingUp className="text-emerald-400" /> },
    { label: 'Capital Managed', value: '$12M+', icon: <Target className="text-cyan-400" /> },
    { label: 'Active Reach', value: '2.4M', icon: <Users className="text-purple-400" /> },
    { label: 'Global Markets', value: '18', icon: <Globe className="text-orange-400" /> },
  ];

  return (
    <section className="py-12 border-y border-slate-900 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-2">
                  <span className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-emerald-500/50 transition-colors">
                    {stat.icon}
                  </span>
                  <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">{stat.label}</span>
                </div>
                <div className="text-4xl font-black text-white group-hover:text-emerald-400 transition-colors tracking-tight">
                  {stat.value}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;