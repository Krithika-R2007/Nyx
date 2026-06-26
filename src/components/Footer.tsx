import React, { useState } from 'react';
import { Mail, ArrowRight, Github, Twitter, Linkedin, Moon } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-[#172B36] border-t border-white/10 pt-24 pb-12 relative overflow-hidden" id="app-footer">
      
      {/* Background massive branding display text */}
      <div className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 pointer-events-none select-none opacity-[0.025] font-sans font-black text-[120px] sm:text-[180px] lg:text-[250px] text-white tracking-widest text-center w-full">
        nyx
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Newsletter & Sub Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5" id="footer-top-block">
          
          <div className="lg:col-span-6 text-left">
            <span className="font-mono text-xs text-[#FF9932] tracking-widest uppercase block mb-3">
              KNOWLEDGE DISSEMINATION
            </span>
            <h3 className="font-sans font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
              Get smarter about AI systems.
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#D9E8E3]/70 mt-2 max-w-md leading-relaxed">
              Weekly insights on autonomous agent design patterns, neural firewall patches, and real enterprise automation workflows. No fluff, just code.
            </p>
          </div>

          <div className="lg:col-span-6 flex items-center">
            <form onSubmit={handleSubscribe} className="w-full max-w-md flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your corporate email"
                  required
                  className="w-full h-12 bg-black/30 border border-white/15 rounded-lg pl-11 pr-4 font-sans text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#FF9932] transition-colors"
                />
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4.5 h-4.5 text-white/20" />
              </div>
              <button
                type="submit"
                className="h-12 px-6 bg-[#FF9932] text-[#172B36] font-mono text-xs font-bold tracking-wider uppercase rounded-lg hover:bg-white hover:text-[#172B36] transition-colors flex items-center justify-center space-x-2.5 glow-saffron flex-shrink-0"
              >
                <span>{subscribed ? 'Subscribed' : 'Subscribe'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

        {/* Links Navigation Block */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-10 py-16 text-left" id="footer-nav-block">
          
          {/* Brand Col */}
          <div className="col-span-2 lg:col-span-4 space-y-6">
            <a href="#" className="flex items-center space-x-2.5 group">
              <div className="w-8 h-8 rounded bg-[#FF9932]/10 border border-[#FF9932]/30 flex items-center justify-center">
                <Moon className="w-4.5 h-4.5 text-[#FF9932] fill-[#FF9932]/10" />
              </div>
              <span className="font-mono text-xl font-bold tracking-tight text-white">
                nyx
              </span>
            </a>
            <p className="font-sans text-xs text-[#D9E8E3]/70 max-w-sm leading-relaxed">
              The professional serverless execution layer for secure autonomous agents. Governing prompt safety and workflow compliance dynamically.
            </p>
            {/* Social handles */}
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 rounded bg-white/5 hover:bg-[#FF9932]/10 border border-white/10 hover:border-[#FF9932]/35 flex items-center justify-center text-white/70 hover:text-[#FF9932] transition-all">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded bg-white/5 hover:bg-[#FF9932]/10 border border-white/10 hover:border-[#FF9932]/35 flex items-center justify-center text-white/70 hover:text-[#FF9932] transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded bg-white/5 hover:bg-[#FF9932]/10 border border-white/10 hover:border-[#FF9932]/35 flex items-center justify-center text-white/70 hover:text-[#FF9932] transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav Col 1 */}
          <div className="col-span-1 lg:col-span-2 space-y-4">
            <h4 className="font-mono text-[10px] tracking-wider uppercase text-white font-bold">Quick Links</h4>
            <ul className="space-y-2.5 font-sans text-xs text-[#D9E8E3]/70">
              <li><a href="#" className="hover:text-[#FF9932] transition-colors">Home Base</a></li>
              <li><a href="#features" className="hover:text-[#FF9932] transition-colors">Ecosystem Features</a></li>
              <li><a href="#pricing" className="hover:text-[#FF9932] transition-colors">Pricing Matrix</a></li>
              <li><a href="#articles" className="hover:text-[#FF9932] transition-colors">Resource Enclave</a></li>
            </ul>
          </div>

          {/* Nav Col 2 */}
          <div className="col-span-1 lg:col-span-2 space-y-4">
            <h4 className="font-mono text-[10px] tracking-wider uppercase text-white font-bold">Core Modules</h4>
            <ul className="space-y-2.5 font-sans text-xs text-[#D9E8E3]/70">
              <li><a href="#features" className="hover:text-[#FF9932] transition-colors">Secure Guard</a></li>
              <li><a href="#builder" className="hover:text-[#FF9932] transition-colors">Agent Builder</a></li>
              <li><a href="#dashboard" className="hover:text-[#FF9932] transition-colors">Cloud Scale API</a></li>
              <li><a href="#faq" className="hover:text-[#FF9932] transition-colors">Memory Sync</a></li>
            </ul>
          </div>

          {/* Nav Col 3 */}
          <div className="col-span-1 lg:col-span-2 space-y-4">
            <h4 className="font-mono text-[10px] tracking-wider uppercase text-white font-bold">Company</h4>
            <ul className="space-y-2.5 font-sans text-xs text-[#D9E8E3]/70">
              <li><a href="#" className="hover:text-[#FF9932] transition-colors">About Enclave</a></li>
              <li><a href="#" className="hover:text-[#FF9932] transition-colors">Security Audit</a></li>
              <li><a href="#" className="hover:text-[#FF9932] transition-colors">Book Workspace Demo</a></li>
              <li><a href="#" className="hover:text-[#FF9932] transition-colors">Press Archives</a></li>
            </ul>
          </div>

          {/* Nav Col 4 */}
          <div className="col-span-1 lg:col-span-2 space-y-4">
            <h4 className="font-mono text-[10px] tracking-wider uppercase text-white font-bold">Policies</h4>
            <ul className="space-y-2.5 font-sans text-xs text-[#D9E8E3]/70">
              <li><a href="#" className="hover:text-[#FF9932] transition-colors">Terms of Operations</a></li>
              <li><a href="#" className="hover:text-[#FF9932] transition-colors">Data Privacy Charter</a></li>
              <li><a href="#" className="hover:text-[#FF9932] transition-colors">SLA Agreement</a></li>
              <li><a href="#" className="hover:text-[#FF9932] transition-colors">Cookie Credentials</a></li>
            </ul>
          </div>

        </div>

        {/* Copyright bottom line */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-white/30" id="footer-bottom-bar">
          <span>© 2026 NYX AI SYSTEMS. ALL SECURE PROTOCOLS ENFORCED.</span>
          <span className="text-[#FF9932]">DEVELOPED BY CODERS FOR COGNITIVE EXCELLENCE</span>
        </div>

      </div>
    </footer>
  );
}
