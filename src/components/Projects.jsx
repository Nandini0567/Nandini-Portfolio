import React from 'react';
import { portfolioData } from '../data/portfolioData';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="relative py-24 border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-electric-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="text-xs font-mono tracking-[0.3em] text-electric-400 font-semibold uppercase">
                03 / PORTFOLIO
              </span>
              <div className="h-[1px] w-12 bg-electric-400/40" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              SELECTED WORK
            </h2>
          </div>
          <p className="text-slate-400 text-sm font-mono max-w-sm">
            Practical, enterprise, and data-driven systems built with clean architecture and real production principles.
          </p>
        </div>

        {/* Project Showcases (Strictly 3 Projects) */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.number} 
              project={project} 
              index={index} 
            />
          ))}
        </div>

      </div>
    </section>
  );
}
