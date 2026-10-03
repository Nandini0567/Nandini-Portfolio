import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const navLinks = [
  { name: 'HOME', href: '#home' },
  { name: 'ABOUT', href: '#about' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'CERTIFICATIONS', href: '#certifications' },
  { name: 'EDUCATION', href: '#education' },
  { name: 'CONTACT', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Section spy
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 160;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <a 
            href="#home" 
            className="group flex items-center space-x-2 text-white font-display tracking-wider font-semibold text-sm sm:text-base"
          >
            <span className="w-2 h-2 rounded-full bg-electric-400 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_8px_#38bdf8]"></span>
            <span className="tracking-widest text-slate-100 group-hover:text-white transition-colors">
              {portfolioData.personal.name}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs tracking-widest px-3 py-1.5 rounded transition-all duration-200 font-medium ${
                    isActive
                      ? 'text-electric-400 bg-electric-400/10'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Social Icons & Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-full border border-transparent hover:border-white/10 transition-all duration-200"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-full border border-transparent hover:border-white/10 transition-all duration-200"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              aria-label="Email Nandini"
              className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-full border border-transparent hover:border-white/10 transition-all duration-200"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center space-x-2">
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="md:hidden p-2 text-slate-400 hover:text-white"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white focus:outline-none focus:ring-1 focus:ring-electric-400 rounded-lg"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden glass-nav border-b border-white/10 px-4 pt-3 pb-6 space-y-2 mt-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 text-sm tracking-wider font-medium rounded-lg transition-colors ${
                  isActive
                    ? 'text-electric-400 bg-electric-400/10'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}

          <div className="pt-4 border-t border-white/10 flex items-center justify-around">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-xs text-slate-300 hover:text-electric-400 py-1"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-xs text-slate-300 hover:text-electric-400 py-1"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="flex items-center space-x-2 text-xs text-slate-300 hover:text-electric-400 py-1"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
