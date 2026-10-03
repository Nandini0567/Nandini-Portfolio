import React from 'react';
import { motion } from 'framer-motion';
import { Languages as LanguagesIcon, Globe } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Languages() {
  const { languages } = portfolioData;

  return (
    <section className="relative py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-xl bg-electric-500/10 border border-electric-400/20 text-electric-400">
              <LanguagesIcon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-mono tracking-widest text-electric-400 uppercase font-semibold">
                COMMUNICATION
              </p>
              <h3 className="text-xl font-display font-bold text-white">
                LANGUAGES
              </h3>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {languages.map((lang, index) => (
              <motion.div
                key={lang}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-electric-400/30 text-sm font-medium text-slate-200 flex items-center space-x-2 transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-electric-400" />
                <span>{lang}</span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
