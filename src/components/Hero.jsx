import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  FileText, 
  CheckCircle2, 
  Code, 
  Globe, 
  Cpu, 
  BarChart3, 
  Github, 
  Linkedin, 
  Mail, 
  User, 
  Phone 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import profileImg from '../assets/profile.jpg';

const iconMap = {
  Code: Code,
  Globe: Globe,
  Cpu: Cpu,
  BarChart3: BarChart3
};

export default function Hero() {
  const { personal, whatIBuild } = portfolioData;

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-20 overflow-hidden flex flex-col justify-between">
      {/* Background Architectural Glows & Spotlight */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-electric-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-slate-800/20 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-0 w-full h-full architectural-grid opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Main Landscape Split Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          
          {/* Left Hero Column */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs tracking-[0.25em] text-electric-400 font-semibold uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-electric-400 animate-pulse"></span>
              <span>{personal.eyebrow}</span>
            </div>

            {/* Giant Editorial Headline */}
            <div className="space-y-1">
              <p className="text-xs sm:text-sm tracking-[0.3em] text-slate-400 font-semibold uppercase">
                HI, I'M
              </p>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.05]">
                <span className="block">{personal.headlinePrimary}</span>
                <span className="block text-slate-300">{personal.headlineSecondary}</span>
              </h1>
              
              <div className="pt-2">
                <span className="inline-block text-xl sm:text-2xl font-display font-semibold tracking-wide text-electric-400">
                  {personal.subHeadline}
                </span>
                <span className="mx-3 text-slate-600 hidden sm:inline">•</span>
                <span className="inline-block px-2.5 py-0.5 mt-2 sm:mt-0 text-xs font-mono font-medium tracking-wider bg-electric-500/10 border border-electric-400/30 rounded text-electric-300">
                  {personal.badgeLabel}
                </span>
              </div>
            </div>

            {/* Horizontal Line Accent */}
            <div className="w-24 h-[2px] bg-gradient-to-r from-electric-400 to-transparent"></div>

            {/* Summary Text */}
            <p className="text-slate-300 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
              {personal.summary}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="group inline-flex items-center space-x-3 px-6 py-3.5 rounded-lg bg-white text-slate-950 font-semibold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-electric-400 hover:text-slate-950 hover:shadow-[0_0_25px_rgba(56,189,248,0.4)]"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-lg bg-white/5 text-slate-200 border border-white/10 font-semibold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:text-white"
              >
                <FileText className="w-4 h-4 text-electric-400" />
                <span>CONNECT / RESUME</span>
              </a>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center space-x-4 pt-4 text-slate-400">
              <span className="text-xs uppercase tracking-widest text-slate-500 font-medium">Follow:</span>
              <a 
                href={personal.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-electric-400 border border-white/5 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href={personal.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-electric-400 border border-white/5 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href={`mailto:${personal.email}`}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-electric-400 border border-white/5 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Hero Column - Authentic Portrait & Credential Badges */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative flex flex-col items-center lg:items-end justify-center"
          >
            {/* Ambient Spotlight behind portrait */}
            <div className="absolute w-[360px] h-[360px] sm:w-[440px] sm:h-[440px] rounded-full bg-gradient-to-tr from-slate-800/40 via-electric-500/15 to-transparent blur-3xl -z-10 pointer-events-none" />

            {/* Portrait Frame Container */}
            <div className="relative group max-w-[340px] sm:max-w-[400px] w-full">
              
              {/* Outer decorative architectural border */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-white/15 via-white/5 to-electric-500/20 blur-[2px] opacity-75 group-hover:opacity-100 transition duration-500" />
              
              {/* Image Frame */}
              <div className="relative rounded-2xl overflow-hidden bg-charcoal-900 border border-white/10 shadow-2xl">
                
                {/* Authentic Portrait (Unaltered Face/Identity) */}
                <img 
                  src={profileImg} 
                  alt="Nandini Kamsali - Professional Portrait" 
                  className="w-full h-auto aspect-square object-cover object-top filter brightness-[0.98] contrast-[1.03] transition-transform duration-700 group-hover:scale-[1.02]"
                />

                {/* Subtle Cinematic Vignette Overlay to blend seamlessly with dark environment */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090c] via-transparent to-transparent opacity-60 pointer-events-none" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
              </div>

              {/* Floating Profile Tag (Reference layout inspired) */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="absolute -top-4 -left-4 sm:-left-8 glass-card p-3 rounded-xl border border-white/10 shadow-xl max-w-[210px] hidden sm:block"
              >
                <p className="text-[10px] font-mono tracking-widest text-electric-400 uppercase font-semibold">
                  SPECIALIZATION
                </p>
                <p className="text-xs font-bold text-white mt-0.5">
                  JAVA FULL STACK
                </p>
                <p className="text-[11px] text-slate-400 mt-1 leading-tight">
                  I build practical applications using Java, Spring Boot, React and MySQL.
                </p>
              </motion.div>

              {/* Floating ServiceNow Credential Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="absolute -bottom-5 -right-3 sm:-right-6 glass-card p-3.5 rounded-xl border border-electric-400/30 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl"
              >
                <div className="flex items-center space-x-2 pb-1.5 border-b border-white/10">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
                  <span className="text-[10px] font-mono tracking-widest text-slate-300 font-semibold uppercase">
                    {personal.servicenowBadge.platform}
                  </span>
                </div>
                <div className="pt-1.5">
                  <p className="text-xs font-bold text-white">
                    {personal.servicenowBadge.title}
                  </p>
                  <div className="flex items-center space-x-2 mt-1">
                    {personal.servicenowBadge.certifications.map((cert, idx) => (
                      <span 
                        key={idx} 
                        className="inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono font-medium rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>

        {/* Mid-Hero: "WHAT I BUILD" 4 Cards (Replacing Reference "WHAT I DO") */}
        <div className="pt-6 pb-12">
          <div className="flex items-center space-x-3 mb-6">
            <h2 className="text-xs sm:text-sm font-mono tracking-[0.25em] text-slate-400 uppercase font-semibold">
              WHAT I BUILD
            </h2>
            <div className="h-[1px] flex-1 bg-white/10 max-w-xs" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whatIBuild.map((item, idx) => {
              const IconComp = iconMap[item.icon] || Code;
              return (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-card group p-5 rounded-xl border border-white/5 hover:border-electric-400/40 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-slate-500 group-hover:text-electric-400 transition-colors">
                      {item.num}
                    </span>
                    <div className="p-2 rounded-lg bg-white/5 group-hover:bg-electric-500/10 text-slate-400 group-hover:text-electric-400 transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-sm font-display font-bold tracking-wide text-white mb-2">
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] px-2 py-0.5 rounded bg-white/5 text-slate-300 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Hero Statement & Pill (Reference Layout Inspiration) */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          
          {/* Cinematic Editorial Statement */}
          <div className="space-y-1">
            <h3 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-white leading-none">
              BUILD<span className="text-electric-400">.</span> CREATE<span className="text-electric-400">.</span> INNOVATE<span className="text-electric-400">.</span>
            </h3>
            <p className="text-xs sm:text-sm font-mono tracking-[0.25em] text-slate-400 uppercase pt-2">
              JAVA • SERVICENOW • REACT • SPRING BOOT
            </p>
          </div>

          {/* Contact Summary Pill (Inspired by Reference bottom right box) */}
          <div className="glass-card px-5 py-3.5 rounded-2xl border border-white/10 flex items-center space-x-6 text-xs text-slate-300">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-electric-400 border border-white/10">
                <User className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-slate-400 uppercase">Developer</p>
                <p className="font-semibold text-white">{personal.firstName} {personal.lastName}</p>
              </div>
            </div>

            <div className="w-[1px] h-8 bg-white/10" />

            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-electric-400 border border-white/10">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-slate-400 uppercase">Contact</p>
                <a href={`tel:${personal.phone}`} className="font-semibold text-white hover:text-electric-400 transition-colors">
                  +91 {personal.phone}
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
