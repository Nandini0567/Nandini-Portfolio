import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a message.';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-24 border-t border-white/5 bg-[#0a0c10]/60">
      
      {/* Background Glow */}
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-electric-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="text-xs font-mono tracking-[0.3em] text-electric-400 font-semibold uppercase">
                07 / GET IN TOUCH
              </span>
              <div className="h-[1px] w-12 bg-electric-400/40" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              LET'S CONNECT
            </h2>
          </div>
          <p className="text-slate-400 text-sm font-mono max-w-sm">
            Have an opportunity, project, or collaboration in mind? Let's connect.
          </p>
        </div>

        {/* 2-Column Contact Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <a
              href={`mailto:${personal.email}`}
              className="glass-card p-5 rounded-2xl border border-white/10 hover:border-electric-400/40 transition-all duration-300 flex items-center space-x-4 group block"
            >
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-electric-400 group-hover:scale-110 group-hover:bg-electric-500/10 transition-all">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-mono text-slate-400 uppercase">Direct Email</p>
                <p className="text-sm font-semibold text-white truncate group-hover:text-electric-400 transition-colors">
                  {personal.email}
                </p>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${personal.phone}`}
              className="glass-card p-5 rounded-2xl border border-white/10 hover:border-electric-400/40 transition-all duration-300 flex items-center space-x-4 group block"
            >
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-electric-400 group-hover:scale-110 group-hover:bg-electric-500/10 transition-all">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-mono text-slate-400 uppercase">Phone / WhatsApp</p>
                <p className="text-sm font-semibold text-white group-hover:text-electric-400 transition-colors">
                  +91 {personal.phone}
                </p>
              </div>
            </a>

            {/* Location Card */}
            <div className="glass-card p-5 rounded-2xl border border-white/10 flex items-center space-x-4">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono text-slate-400 uppercase">Location</p>
                <p className="text-sm font-semibold text-white">
                  {personal.location}
                </p>
              </div>
            </div>

            {/* Social Buttons Row */}
            <div className="pt-2 grid grid-cols-2 gap-3">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-3.5 rounded-xl border border-white/10 hover:border-white/20 text-slate-300 hover:text-white flex items-center justify-center space-x-2 text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-3.5 rounded-xl border border-white/10 hover:border-white/20 text-slate-300 hover:text-white flex items-center justify-center space-x-2 text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

          {/* Client-Side Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 relative">
              
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 text-center space-y-4"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white">
                    Thank You, {formData.name}!
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Your note has been formatted. You can also directly reach Nandini at{' '}
                    <a href={`mailto:${personal.email}`} className="text-electric-400 underline font-medium">
                      {personal.email}
                    </a>.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-mono uppercase tracking-wider transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full px-4 py-3 rounded-xl bg-charcoal-900 border text-white text-sm placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-electric-400 transition-colors ${
                        errors.name ? 'border-rose-500/60' : 'border-white/10'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-rose-400 text-xs mt-1.5 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Your Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-charcoal-900 border text-white text-sm placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-electric-400 transition-colors ${
                        errors.email ? 'border-rose-500/60' : 'border-white/10'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-rose-400 text-xs mt-1.5 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Message <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project, opportunity, or inquiry..."
                      className={`w-full px-4 py-3 rounded-xl bg-charcoal-900 border text-white text-sm placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-electric-400 transition-colors ${
                        errors.message ? 'border-rose-500/60' : 'border-white/10'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-rose-400 text-xs mt-1.5 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-8 py-3.5 rounded-xl bg-white text-slate-950 font-bold text-xs tracking-wider uppercase hover:bg-electric-400 hover:text-slate-950 transition-all duration-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.4)]"
                    >
                      <span>SEND MESSAGE →</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
