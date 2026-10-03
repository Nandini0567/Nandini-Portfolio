import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="relative py-24 border-t border-white/5 bg-[#0a0c10]/40">
      
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-electric-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="text-xs font-mono tracking-[0.3em] text-electric-400 font-semibold uppercase">
                06 / ACADEMICS
              </span>
              <div className="h-[1px] w-12 bg-electric-400/40" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              EDUCATION
            </h2>
          </div>
          <p className="text-slate-400 text-sm font-mono max-w-sm">
            Consistent academic excellence throughout higher secondary and engineering studies.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className={`glass-card p-6 sm:p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                item.highlight 
                  ? 'border-electric-400/30 bg-gradient-to-b from-electric-500/10 to-transparent' 
                  : 'border-white/10'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-electric-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 font-medium">{item.period}</span>
                </div>

                <h3 className="text-lg font-display font-bold text-white tracking-tight mb-2">
                  {item.degree}
                </h3>

                <p className="text-sm text-slate-300 font-medium mb-6">
                  {item.institution}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400 uppercase">Performance</span>
                <span className="px-3 py-1 text-xs font-mono font-bold rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                  {item.metric}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
