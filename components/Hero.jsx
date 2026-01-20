import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-widest uppercase mb-6">
            <Sparkles size={14} /> 
            Premier Growth Strategist
          </div>
          <h1 className="text-6xl lg:text-8xl font-black text-white leading-[1.1] tracking-tight">
            Scaling <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Brands</span> <br /> 
            With Data.
          </h1>
          <p className="mt-8 text-xl text-slate-400 max-w-lg leading-relaxed font-light">
            I engineer customer acquisition engines for high-growth startups. 
            Transforming cold traffic into loyal brand advocates through scientific marketing.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-emerald-500 text-slate-950 font-black rounded-2xl shadow-lg shadow-emerald-500/20 flex items-center gap-3"
            >
              Case Studies <ArrowRight size={20} />
            </motion.button>
            <motion.button 
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
              className="px-8 py-4 border border-slate-800 text-white font-bold rounded-2xl transition-colors"
            >
              Book Strategy Call
            </motion.button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          {/* Abstract Dashboard Visualization */}
          <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-slate-800 bg-slate-900/50 backdrop-blur-sm p-8 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent" />
            
            <div className="relative h-full flex flex-col gap-6">
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                </div>
                <div className="px-3 py-1 rounded bg-slate-800 text-[10px] text-slate-400 font-mono">v2.0.48_stable</div>
              </div>

              <div className="flex-1 grid grid-cols-12 gap-4">
                <div className="col-span-8 flex flex-col gap-4">
                  <div className="h-24 bg-slate-800/80 rounded-2xl border border-slate-700/50 p-4">
                    <div className="h-2 w-24 bg-emerald-500/40 rounded mb-4" />
                    <div className="flex items-end gap-1 h-8">
                      {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                        <motion.div 
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ delay: 1 + (i * 0.1), duration: 1 }}
                          className="flex-1 bg-emerald-500/60 rounded-t-sm"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex-1 bg-slate-800/40 rounded-2xl border border-slate-700/50 p-6 flex items-center justify-center">
                     <div className="w-24 h-24 rounded-full border-8 border-slate-700 border-t-emerald-500 animate-spin-slow" />
                  </div>
                </div>
                <div className="col-span-4 bg-slate-800/80 rounded-2xl border border-slate-700/50 p-4 space-y-4">
                   {[1, 2, 3, 4].map(i => (
                     <div key={i} className="h-8 bg-slate-700/50 rounded-lg animate-pulse" />
                   ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Accents */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-6 -right-6 bg-slate-800 border border-slate-700 p-4 rounded-2xl shadow-xl"
          >
            <div className="text-xs text-slate-400 mb-1 font-bold">CONVERSION</div>
            <div className="text-2xl font-black text-emerald-400">+342%</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;