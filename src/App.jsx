import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Languages from './components/Languages';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#08090c] text-slate-100 selection:bg-electric-500/20 selection:text-electric-300">
      {/* Global subtle atmospheric light effects */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] bg-electric-500/5 rounded-full blur-[160px]" />
        <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] bg-slate-800/20 rounded-full blur-[180px]" />
        <div className="absolute -bottom-40 right-10 w-[600px] h-[600px] bg-electric-500/5 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certifications />
          <Education />
          <Languages />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
