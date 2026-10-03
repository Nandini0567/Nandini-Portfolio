import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-white/5 bg-charcoal-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/5">
          
          {/* Identity */}
          <div className="space-y-1">
            <h4 className="text-base font-display font-bold text-white tracking-widest uppercase">
              {personal.name}
            </h4>
            <p className="text-xs font-mono text-slate-400">
              JAVA FULL STACK DEVELOPER • SERVICENOW DEVELOPER • CSA + CAD CERTIFIED
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center space-x-4">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2.5 rounded-xl bg-electric-500/10 hover:bg-electric-500/20 text-electric-400 border border-electric-400/20 transition-colors ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© 2026 Nandini Kamsali. All rights reserved.</p>
          <p className="text-slate-600">Built with React, Vite, Tailwind CSS & Framer Motion</p>
        </div>

      </div>
    </footer>
  );
}
