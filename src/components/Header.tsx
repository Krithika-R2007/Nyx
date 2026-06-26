import React, { useState } from 'react';
import { Menu, X, Moon, Sparkles, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'AI Strategy', href: '#features' },
    { label: 'Custom Agents', href: '#builder' },
    { label: 'Process Automation', href: '#dashboard' },
    { label: 'Data Intelligence', href: '#faq' }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 glass-panel border-b border-white/10" id="app-header">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-3 group" id="logo-link">
          <div className="relative w-9 h-9 flex items-center justify-center">
            {/* Pulsing glow background */}
            <motion.div 
              className="absolute inset-0 rounded-lg bg-[#FF9932]/10 border border-[#FF9932]/30"
              whileHover={{ 
                scale: 1.15,
                rotate: 90,
                borderColor: '#FF9932',
                backgroundColor: 'rgba(255, 153, 50, 0.25)',
                boxShadow: '0 0 15px rgba(255, 153, 50, 0.4)'
              }}
              transition={{ type: 'spring', stiffness: 200, damping: 12 }}
            />
            {/* The primary Moon icon representing Nyx */}
            <motion.div
              initial={{ rotate: 0 }}
              whileHover={{ rotate: -15, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
              className="relative z-10 text-[#FF9932] flex items-center justify-center"
            >
              <Moon className="w-4.5 h-4.5 fill-[#FF9932]/20" />
            </motion.div>
            
            {/* Small sparkling accent that pulses and scales on hover */}
            <motion.div
              className="absolute -top-1.5 -right-1.5 z-20 text-[#FF9932]"
              initial={{ opacity: 0.7, scale: 0.8 }}
              animate={{ opacity: [0.7, 1, 0.7], scale: [0.8, 1.1, 0.8] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              whileHover={{ rotate: 360, scale: 1.3 }}
            >
              <Sparkles className="w-3.5 h-3.5" />
            </motion.div>
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-xl font-extrabold tracking-widest text-white group-hover:text-[#FF9932] transition-colors leading-none uppercase">
              nyx
            </span>
            <span className="font-mono text-[8px] tracking-[0.2em] text-[#D9E8E3]/40 group-hover:text-[#D9E8E3]/60 transition-colors uppercase leading-none mt-1">
              AI PLATFORM
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8" id="desktop-nav">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-sans font-medium text-white/70 hover:text-white transition-colors relative py-2 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#FF9932] after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="#pricing"
            className="text-xs font-mono tracking-wider uppercase text-white/50 hover:text-[#FF9932] transition-colors"
          >
            Pricing Matrix
          </a>
          <a
            href="#builder"
            className="px-4.5 py-2.5 bg-white text-[#172B36] text-xs font-mono font-bold tracking-wider uppercase rounded hover:bg-[#FF9932] hover:text-white transition-all duration-300 flex items-center space-x-1.5 glow-mint hover:glow-saffron"
          >
            <span>Build a Workflow</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#D9E8E2]/80 hover:text-white transition-colors focus:outline-none"
          aria-label="Toggle navigation menu"
          id="mobile-nav-toggle"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-[#172B36]/98 border-b border-white/10 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
        id="mobile-menu"
      >
        <div className="px-6 py-8 flex flex-col space-y-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-white/90 hover:text-[#FF9932] transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10 flex flex-col space-y-4">
            <a
              href="#pricing"
              onClick={() => setIsOpen(false)}
              className="text-sm font-mono text-white/60 hover:text-[#FF9932] transition-colors"
            >
              Pricing Matrix
            </a>
            <a
              href="#builder"
              onClick={() => setIsOpen(false)}
              className="w-full py-3 bg-[#FF9932] text-[#172B36] text-center text-xs font-mono font-bold tracking-wider uppercase rounded hover:bg-white hover:text-[#172B36] transition-colors flex items-center justify-center space-x-1.5"
            >
              <span>Build a Workflow</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
