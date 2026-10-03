import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="relative py-24 border-t border-white/5 bg-[#0a0c10]/40">
      
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-10 w-[400px] h-[400px] bg-electric-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="text-xs font-mono tracking-[0.3em] text-electric-400 font-semibold uppercase">
                04 / TIMELINE
              </span>
              <div className="h-[1px] w-12 bg-electric-400/40" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              EXPERIENCE
            </h2>
          </div>
          <p className="text-slate-400 text-sm font-mono max-w-sm">
            Professional internships in enterprise platform administration and modern frontend engineering.
          </p>
        </div>

        {/* Elegant Vertical Timeline */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-8 md:ml-32 space-y-12 pb-4">
          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative pl-6 sm:pl-10"
            >
              {/* Glowing Timeline Node */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#08090c] border-2 border-electric-400 flex items-center justify-center shadow-[0_0_12px_#38bdf8]">
                <div className="w-1.5 h-1.5 rounded-full bg-electric-400" />
              </div>

              {/* Date tag for desktop on left (if desired) or top */}
              <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-electric-400/30 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-electric-500/10 text-electric-300 border border-electric-500/20 text-xs font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.duration}</span>
                  </span>
                  <span className="text-xs font-mono text-slate-400 flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{item.location}</span>
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
                  {item.role}
                </h3>
                
                <p className="text-sm font-semibold text-slate-300 mt-1 mb-4 flex items-center space-x-2">
                  <Briefcase className="w-4 h-4 text-electric-400" />
                  <span>{item.company}</span>
                </p>

                {/* Details bullet points */}
                <ul className="space-y-2 text-sm text-slate-300">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5">
                      <CheckCircle2 className="w-4 h-4 text-electric-400/80 flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
