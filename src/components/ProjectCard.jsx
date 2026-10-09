import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  ExternalLink, 
  Check, 
  Layers, 
  Calendar, 
  DollarSign, 
  TrendingUp, 
  FileSpreadsheet, 
  PieChart, 
  ShieldCheck, 
  Sparkles,
  GitBranch,
  Clock
} from 'lucide-react';

function ServiceNowMockup() {
  return (
    <div className="relative w-full h-full min-h-[300px] p-5 rounded-xl bg-charcoal-950/80 border border-white/10 flex flex-col justify-between overflow-hidden text-xs font-mono">
      {/* Platform Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
          <span className="text-slate-300 font-bold tracking-wider">SERVICE PORTAL • SPORTS HALL</span>
        </div>
        <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px]">
          FLOW DESIGNER ACTIVE
        </span>
      </div>

      {/* Visual Slots Grid */}
      <div className="grid grid-cols-3 gap-2.5 py-4">
        <div className="p-3 rounded-lg bg-white/5 border border-emerald-500/30 space-y-1">
          <div className="flex items-center justify-between text-[11px] text-slate-400">
            <span>Main Court 1</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          </div>
          <p className="text-white font-bold text-xs">06:00 - 08:00</p>
          <span className="inline-block text-[9px] text-emerald-300 font-sans">Available</span>
        </div>

        <div className="p-3 rounded-lg bg-white/5 border border-sky-500/30 space-y-1">
          <div className="flex items-center justify-between text-[11px] text-slate-400">
            <span>Badminton A</span>
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
          </div>
          <p className="text-white font-bold text-xs">09:00 - 11:00</p>
          <span className="inline-block text-[9px] text-sky-300 font-sans">Pending Approval</span>
        </div>

        <div className="p-3 rounded-lg bg-white/5 border border-slate-700/50 opacity-60 space-y-1">
          <div className="flex items-center justify-between text-[11px] text-slate-400">
            <span>Squash Arena</span>
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
          </div>
          <p className="text-white font-bold text-xs">17:00 - 19:00</p>
          <span className="inline-block text-[9px] text-rose-300 font-sans">Reserved</span>
        </div>
      </div>

      {/* Workflow Process Pipeline */}
      <div className="p-3.5 rounded-lg bg-black/40 border border-white/5 space-y-2">
        <div className="flex items-center justify-between text-[11px] text-slate-400">
          <span className="flex items-center space-x-1.5 text-electric-400">
            <GitBranch className="w-3.5 h-3.5" />
            <span>Workflow Automation</span>
          </span>
          <span className="text-[10px] text-slate-500">Scheduled Job #442</span>
        </div>
        <div className="flex items-center space-x-2 text-[10px] text-slate-300">
          <span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-emerald-300">Slot Request</span>
          <span className="text-slate-600">→</span>
          <span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-electric-300">Approval Flow</span>
          <span className="text-slate-600">→</span>
          <span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-amber-300">Auto-Release Job</span>
        </div>
      </div>
    </div>
  );
}

function FinanceMockup({ liveDemo }) {
  return (
    <div className="relative w-full h-full min-h-[300px] p-5 rounded-xl bg-charcoal-950/80 border border-white/10 flex flex-col justify-between overflow-hidden text-xs font-mono">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-electric-400 shadow-[0_0_8px_#38bdf8]" />
          <span className="text-slate-300 font-bold tracking-wider">SMART BUDGET DASHBOARD</span>
        </div>
        {liveDemo ? (
          <a
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 px-2.5 py-1 rounded bg-electric-500/15 text-electric-300 hover:text-white border border-electric-400/30 text-[10px] transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>LIVE DEPLOYMENT</span>
            <ExternalLink className="w-3 h-3 ml-0.5" />
          </a>
        ) : (
          <span className="px-2 py-0.5 rounded bg-electric-500/10 text-electric-400 border border-electric-500/20 text-[10px]">
            SPRING BOOT + REACT
          </span>
        )}
      </div>

      {/* Financial Metrics Row */}
      <div className="grid grid-cols-3 gap-2.5 py-4">
        <div className="p-3 rounded-lg bg-white/5 border border-white/10">
          <p className="text-[10px] text-slate-400 uppercase">Monthly Income</p>
          <p className="text-white font-bold text-sm sm:text-base mt-1">₹65,000</p>
          <span className="text-[9px] text-emerald-400 font-sans">Tracked</span>
        </div>

        <div className="p-3 rounded-lg bg-white/5 border border-white/10">
          <p className="text-[10px] text-slate-400 uppercase">Total Expenses</p>
          <p className="text-white font-bold text-sm sm:text-base mt-1">₹28,450</p>
          <span className="text-[9px] text-slate-400 font-sans">4 Categories</span>
        </div>

        <div className="p-3 rounded-lg bg-white/5 border border-electric-400/30 bg-electric-500/5">
          <p className="text-[10px] text-electric-400 uppercase">Balance</p>
          <p className="text-electric-300 font-bold text-sm sm:text-base mt-1">₹36,550</p>
          <span className="text-[9px] text-electric-400 font-sans">Calculated</span>
        </div>
      </div>

      {/* Category Distribution Bar */}
      <div className="p-3.5 rounded-lg bg-black/40 border border-white/5 space-y-2">
        <div className="flex items-center justify-between text-[11px] text-slate-400">
          <span>Expense Distribution By Category</span>
          <span className="text-slate-500">MySQL Stored</span>
        </div>
        <div className="w-full h-2 rounded-full bg-slate-800 flex overflow-hidden">
          <div className="h-full bg-electric-400 w-[40%]" title="Food" />
          <div className="h-full bg-indigo-400 w-[25%]" title="Shopping" />
          <div className="h-full bg-emerald-400 w-[20%]" title="Transport" />
          <div className="h-full bg-amber-400 w-[15%]" title="Utilities" />
        </div>
        <div className="flex items-center justify-between text-[9px] text-slate-400 pt-1">
          <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-electric-400"></span>Food 40%</span>
          <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>Shopping 25%</span>
          <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>Transport 20%</span>
          <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>Utilities 15%</span>
        </div>
      </div>
    </div>
  );
}

function DataCleanerMockup() {
  return (
    <div className="relative w-full h-full min-h-[300px] p-5 rounded-xl bg-charcoal-950/80 border border-white/10 flex flex-col justify-between overflow-hidden text-xs font-mono">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_#fbbf24]" />
          <span className="text-slate-300 font-bold tracking-wider">STREAMLIT DATA CLEANER</span>
        </div>
        <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[10px]">
          PANDAS & PLOTLY
        </span>
      </div>

      {/* Pipeline Stages */}
      <div className="py-4 space-y-2.5">
        <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/10">
          <div className="flex items-center space-x-2">
            <FileSpreadsheet className="w-4 h-4 text-electric-400" />
            <span className="text-slate-300">CSV Dataset Ingestion</span>
          </div>
          <span className="text-[10px] text-emerald-400">Validated</span>
        </div>

        <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-amber-500/30 bg-amber-500/5">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-white">Null & Duplicate Audit</span>
          </div>
          <span className="text-[10px] text-amber-300">Resolved Automatically</span>
        </div>

        <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/10">
          <div className="flex items-center space-x-2">
            <PieChart className="w-4 h-4 text-indigo-400" />
            <span className="text-slate-300">Interactive Plotly Visualizer</span>
          </div>
          <span className="text-[10px] text-indigo-300">Rendered</span>
        </div>
      </div>

      {/* Output Status */}
      <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between">
        <span className="text-emerald-300 text-[11px] font-sans">Processed clean export ready</span>
        <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono">
          .CSV EXPORT
        </span>
      </div>
    </div>
  );
}

export default function ProjectCard({ project, index }) {
  const isReversed = index % 2 === 1;

  const renderMockup = () => {
    switch (project.mockupType) {
      case 'servicenow':
        return <ServiceNowMockup />;
      case 'finance':
        return <FinanceMockup liveDemo={project.liveDemo} />;
      case 'data':
        return <DataCleanerMockup />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="glass-card rounded-2xl border border-white/10 p-6 sm:p-8 lg:p-10 relative overflow-hidden group hover:border-electric-400/40 transition-all duration-300"
    >
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
        isReversed ? 'lg:flex-row-reverse' : ''
      }`}>
        
        {/* Content Side */}
        <div className={`lg:col-span-6 space-y-5 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
          <div className="flex items-center space-x-3">
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-electric-500/10 text-electric-400 border border-electric-500/20">
              PROJECT {project.number}
            </span>
            <span className="text-xs font-mono text-slate-500 tracking-wider uppercase">
              {project.type}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight leading-tight">
            {project.title}
          </h3>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {project.description}
          </p>

          {/* Key Features Bullet List */}
          <div className="space-y-2 pt-1">
            <p className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
              Key Architecture & Features:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              {project.keyFeatures.slice(0, 6).map((feat, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <Check className="w-3.5 h-3.5 text-electric-400 flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/10 font-mono"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="pt-4 flex flex-wrap items-center gap-3">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2.5 px-5 py-3 rounded-lg bg-electric-400 hover:bg-white text-slate-950 font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
              >
                <ExternalLink className="w-4 h-4" />
                <span>VIEW LIVE PROJECT →</span>
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2.5 px-5 py-3 rounded-lg bg-white/10 hover:bg-white text-white hover:text-slate-950 font-semibold text-xs tracking-wider uppercase transition-all duration-300 border border-white/15 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]"
              >
                <Github className="w-4 h-4" />
                <span>VIEW ON GITHUB →</span>
              </a>
            )}
          </div>
        </div>

        {/* Visual Mockup Side */}
        <div className={`lg:col-span-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
          <div className="relative group-hover:scale-[1.01] transition-transform duration-500">
            {/* Ambient Backlight */}
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-electric-500/15 via-white/5 to-transparent blur-lg opacity-50 group-hover:opacity-100 transition duration-500" />
            <div className="relative">
              {renderMockup()}
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
