import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Layers, 
  BarChart2, 
  Wrench, 
  Binary 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const categoryIcons = {
  programming: Code2,
  frontend: Layout,
  backend: Server,
  database: Database,
  platform: Layers,
  dataViz: BarChart2,
  tools: Wrench,
  concepts: Binary
};

export default function Skills() {
  const { skills } = portfolioData;
  const skillCategories = Object.entries(skills);

  return (
    <section id="skills" className="relative py-24 border-t border-white/5 bg-[#0a0c10]/40">
      
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[300px] bg-electric-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="text-xs font-mono tracking-[0.3em] text-electric-400 font-semibold uppercase">
                02 / CAPABILITIES
              </span>
              <div className="h-[1px] w-12 bg-electric-400/40" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              TECHNICAL SKILLS
            </h2>
          </div>
          <p className="text-slate-400 text-sm font-mono max-w-sm">
            Proven competencies across Java full stack engineering, enterprise ServiceNow platforms, and core computer science.
          </p>
        </div>

        {/* Floating Glass Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillCategories.map(([key, categoryData], index) => {
            const Icon = categoryIcons[key] || Code2;
            const isPlatform = key === 'platform';

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className={`glass-card p-6 rounded-2xl border transition-all duration-300 relative group overflow-hidden ${
                  isPlatform 
                    ? 'border-emerald-500/30 hover:border-emerald-400/60 shadow-[0_10px_30px_rgba(16,185,129,0.05)]' 
                    : 'border-white/10 hover:border-electric-400/50'
                }`}
              >
                {/* Decorative glow corner */}
                <div className={`absolute top-0 right-0 w-24 h-24 rounded-full blur-xl transition-all duration-500 ${
                  isPlatform ? 'bg-emerald-500/10 group-hover:bg-emerald-500/20' : 'bg-electric-500/5 group-hover:bg-electric-500/15'
                }`} />

                {/* Card Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`p-2.5 rounded-xl border transition-transform duration-300 group-hover:scale-110 ${
                    isPlatform 
                      ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' 
                      : 'bg-white/5 border-white/10 text-electric-400'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-base font-display font-bold text-white tracking-wide mb-4">
                  {categoryData.category}
                </h3>

                {/* Skill Chips (No fake percentage bars) */}
                <div className="flex flex-wrap gap-2">
                  {categoryData.items.map((skill) => {
                    const isCert = skill === 'CSA' || skill === 'CAD';
                    return (
                      <span
                        key={skill}
                        className={`text-xs px-2.5 py-1 rounded-md font-medium tracking-wide transition-colors ${
                          isCert 
                            ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-mono font-semibold' 
                            : 'bg-white/5 text-slate-200 border border-white/5 hover:border-white/20 hover:text-white'
                        }`}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
