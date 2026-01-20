import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const CTA = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-5xl mx-auto relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-[3rem] p-12 lg:p-24 text-center overflow-hidden shadow-2xl"
        >
          {/* Abstract Decorations */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-white rounded-full blur-[100px]" />
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-slate-900 rounded-full blur-[100px]" />
          </div>

          <div className="relative z-10">
            <h2 className="text-5xl lg:text-7xl font-black text-slate-950 mb-8 tracking-tight">
              Ready to Outgrow <br className="hidden md:block" /> Your Competition?
            </h2>
            <p className="text-slate-900/80 text-xl max-w-2xl mx-auto mb-12 font-medium">
              Currently accepting 2 new clients for Q3. Let's see if your brand is a fit for our high-velocity growth model.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-slate-950 text-white font-black rounded-2xl flex items-center gap-3 mx-auto text-lg transition-shadow"
            >
              Secure Your Audit <Send size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;