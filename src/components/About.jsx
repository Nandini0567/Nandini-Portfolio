import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Award, Terminal, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal, education } = portfolioData;
  const btech = education[0];

  return (
    <section id="about" className="relative py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-12">
          <span className="text-xs font-mono tracking-[0.3em] text-electric-400 font-semibold uppercase">
            01 / OVERVIEW
          </span>
          <div className="h-[1px] w-12 bg-electric-400/40" />
        </div>

        {/* 2-Column Cinematic Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Core Narrative */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              ENGINEERING PRACTICAL SOFTWARE WITH PRECISION.
            </h2>

            <div className="w-16 h-1 bg-electric-400 rounded-full" />

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              {personal.aboutBio}
            </p>

            <div className="pt-2 flex items-center space-x-4 text-xs font-mono text-slate-400">
              <span className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                <MapPin className="w-3.5 h-3.5 text-electric-400" />
                <span>{personal.location}</span>
              </span>
              <span className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                <Award className="w-3.5 h-3.5 text-emerald-400" />
                <span>CSA & CAD Certified</span>
              </span>
            </div>
          </motion.div>

          {/* Right Column: Key Pillars & Academic Background */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 space-y-5"
          >
            {/* Education Highlight Card */}
            <div className="glass-card p-6 rounded-2xl border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-electric-500/10 rounded-full blur-2xl group-hover:bg-electric-500/20 transition-colors" />
              
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-electric-500/10 border border-electric-400/20 text-electric-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-400">{btech.period}</span>
                    <span className="px-2.5 py-0.5 text-xs font-mono font-semibold rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {btech.metric}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mt-1">
                    {btech.degree}
                  </h3>
                  <p className="text-sm text-slate-300 mt-0.5">
                    {btech.institution}
                  </p>
                </div>
              </div>
            </div>

            {/* Core Competencies Quick Box */}
            <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4">
              <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                <Terminal className="w-4 h-4 text-electric-400" />
                <span>Primary Development Focus</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300">
                <div className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-electric-400 flex-shrink-0" />
                  <span>Enterprise ServiceNow Solutions</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-electric-400 flex-shrink-0" />
                  <span>Java & Spring Boot Backends</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-electric-400 flex-shrink-0" />
                  <span>React.js Responsive Frontends</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-electric-400 flex-shrink-0" />
                  <span>Relational Database Modeling (MySQL)</span>
                </div>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
