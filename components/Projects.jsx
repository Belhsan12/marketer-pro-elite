import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';

const CaseStudyCard = ({ title, category, results, color }) => (
  <motion.div 
    whileHover={{ y: -8 }}
    className="group relative bg-slate-900/40 rounded-[2rem] overflow-hidden border border-slate-800/50 hover:border-emerald-500/30 transition-all duration-500"
  >
    <div className="aspect-[16/10] bg-slate-800 relative overflow-hidden">
       <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-20 group-hover:opacity-40 transition-opacity`} />
       <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3/4 h-1/2 bg-slate-900/80 rounded-xl backdrop-blur-md border border-slate-700/50 p-4 transform translate-y-8 group-hover:translate-y-4 transition-transform duration-500 shadow-2xl">
             <div className="w-full h-full border border-dashed border-slate-700 rounded-lg flex items-center justify-center text-slate-500 text-xs font-mono uppercase tracking-widest">
                Visual Preview
             </div>
          </div>
       </div>
       <div className="absolute top-4 right-4 p-2 bg-slate-950/50 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
          <ExternalLink size={18} />
       </div>
    </div>
    
    <div className="p-8">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em]">{category}</span>
      </div>
      <h3 className="text-2xl font-bold text-white mb-6 leading-tight group-hover:text-emerald-400 transition-colors">{title}</h3>
      
      <div className="grid grid-cols-2 gap-3 mb-8">
        {results.map((r, i) => (
          <div key={i} className="px-4 py-3 bg-slate-800/50 rounded-xl border border-slate-700/30">
            <div className="text-[10px] text-slate-500 font-bold uppercase mb-1">Metric</div>
            <div className="text-sm font-black text-slate-200">{r}</div>
          </div>
        ))}
      </div>
      
      <button className="w-full py-4 border border-slate-800 rounded-xl text-white text-sm font-bold flex items-center justify-center gap-2 group-hover:bg-white group-hover:text-slate-950 transition-all">
        Examine Methodology <ArrowRight size={16} />
      </button>
    </div>
  </motion.div>
);

const Projects = () => (
  <section id="work" className="py-32 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div>
          <h2 className="text-5xl font-black text-white tracking-tight">Proven Impact</h2>
          <p className="text-slate-400 mt-4 max-w-xl text-lg">
            A deep dive into strategic campaigns that combined creative risk-taking with surgical precision.
          </p>
        </div>
        <button className="group flex items-center gap-2 text-emerald-400 font-bold text-sm tracking-widest uppercase">
          Archive <div className="w-8 h-[1px] bg-emerald-500/30 group-hover:w-12 transition-all" />
        </button>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <CaseStudyCard 
          title="Disrupting Global FinTech"
          category="Brand Scale"
          color="from-emerald-500 to-cyan-500"
          results={["+420% Signup Rate", "$3.1M Seed Lift"]}
        />
        <CaseStudyCard 
          title="The AI SaaS Engine"
          category="Acquisition"
          color="from-purple-500 to-pink-500"
          results={["1.8x ROAS Boost", "-40% Churn"]}
        />
        <CaseStudyCard 
          title="Eco-Logistics Rebrand"
          category="Positioning"
          color="from-amber-500 to-orange-500"
          results={["15M Impressions", "Top 100 App"]}
        />
      </div>
    </div>
  </section>
);

export default Projects;