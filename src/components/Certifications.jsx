import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, ShieldCheck, Sparkles, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Certifications() {
  const { certifications } = portfolioData;
  const prominent = certifications.filter(c => c.featured);
  const others = certifications.filter(c => !c.featured);

  return (
    <section id="certifications" className="relative py-24 border-t border-white/5">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="text-xs font-mono tracking-[0.3em] text-electric-400 font-semibold uppercase">
                05 / CREDENTIALS
              </span>
              <div className="h-[1px] w-12 bg-electric-400/40" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              CERTIFICATIONS
            </h2>
          </div>
          <p className="text-slate-400 text-sm font-mono max-w-sm">
            Industry and platform-certified credentials verifying production capabilities.
          </p>
        </div>

        {/* Prominent ServiceNow Certifications (CSA + CAD) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {prominent.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-emerald-500/30 hover:border-emerald-400/60 shadow-[0_15px_35px_rgba(16,185,129,0.06)] relative overflow-hidden group transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all duration-500" />
              
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 text-xs font-mono font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>VERIFIED ENTERPRISE CREDENTIAL</span>
                </span>
                <span className="text-xs font-mono text-slate-400 font-bold">{cert.year}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight mb-3">
                {cert.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                {cert.description}
              </p>

              <div className="pt-2 flex items-center justify-between border-t border-white/10 text-xs font-mono text-slate-400">
                <span>Issuer: {cert.issuer}</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Active Certified
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Secondary Certifications Grid (NVIDIA, Outskill, TCS iON) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {others.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card p-6 rounded-2xl border border-white/10 hover:border-electric-400/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-electric-400">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono text-slate-400">{cert.year}</span>
                </div>

                <h3 className="text-base font-display font-bold text-white tracking-tight mb-1">
                  {cert.title}
                </h3>
                
                <p className="text-xs text-electric-400 font-mono mb-4">
                  {cert.issuer}
                </p>

                {cert.topics && (
                  <div className="space-y-1.5 pt-2 border-t border-white/5">
                    <p className="text-[10px] font-mono uppercase tracking-wider text-slate-500">Key Focus Areas:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.topics.map((t, i) => (
                        <span key={i} className="text-[11px] px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5 font-sans">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
