import React from 'react';
import { Linkedin, Twitter, Mail, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <div className="text-2xl font-black tracking-tighter flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-emerald-500 rounded flex items-center justify-center">
                <div className="w-3 h-3 bg-slate-950 rounded-sm rotate-45" />
              </div>
              <span>MARKETER.PRO</span>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed">
              Engineering growth engines for the world's most ambitious tech companies. 
              Driven by data, inspired by creativity.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Connect</h4>
            <ul className="space-y-4">
              {['LinkedIn', 'Twitter', 'Instagram', 'Dribbble'].map(link => (
                <li key={link}>
                  <a href="#" className="text-slate-500 hover:text-emerald-400 transition-colors text-sm font-medium">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Office</h4>
            <p className="text-slate-500 text-sm leading-relaxed">
              120 High Street, Shoreditch<br />
              London, EC2A 3AX<br />
              hello@marketer.pro
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-600 text-xs font-medium">
            © 2024 Marketer Pro Portfolio. All rights reserved. Built with precision for growth.
          </div>
          <div className="flex items-center gap-4">
             <button 
              onClick={scrollToTop}
              className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
             >
                <ArrowUp size={20} />
             </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;