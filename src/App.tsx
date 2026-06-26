import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BentoAccordion from './components/BentoAccordion';
import InteractiveCanvas from './components/InteractiveCanvas';
import PerformanceDashboard from './components/PerformanceDashboard';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Articles from './components/Articles';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { Moon } from 'lucide-react';

export default function App() {
  const [isBooted, setIsBooted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBooted(true);
    }, 250);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen text-white/90 bg-[#172B36] selection:bg-[#FF9932] selection:text-[#172B36] font-sans antialiased overflow-x-hidden">
      
      {/* 
        High-Performance Fast Loader (Strictly orchestrated under 500ms threshold)
        This ensures crawlers index semantic content instantly and TTI is unaffected.
      */}
      <div
        className={`fixed inset-0 bg-[#172B36] z-50 flex flex-col items-center justify-center transition-all duration-300 ease-out ${
          isBooted ? 'opacity-0 pointer-events-none scale-102' : 'opacity-100'
        }`}
        id="app-startup-loader"
      >
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 rounded bg-[#FF9932]/10 border border-[#FF9932]/35 flex items-center justify-center animate-pulse-slow">
            <Moon className="w-6 h-6 text-[#FF9932] fill-[#FF9932]/20" />
          </div>
          <span className="font-mono text-sm tracking-widest text-[#D9E8E3]/60 animate-pulse">
            nyx_core_initializing...
          </span>
        </div>
      </div>

      {/* Main App Container with a smooth fading entrance */}
      <div
        className={`transition-all duration-500 ease-out ${
          isBooted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        id="main-app-container"
      >
        {/* Header Navigation */}
        <Header />

        {/* Semantic main content area */}
        <main className="relative z-10" id="main-content">
          
          {/* Section 1: Hero Workspace & Trust Logos */}
          <Hero />

          {/* Section 2: Bento-to-Accordion Ecosystem Features (Feature 2) */}
          <BentoAccordion />

          {/* Section 3: Visual Logic node-mapping Workspace Canvas */}
          <InteractiveCanvas />

          {/* Section 4: Live Telemetry & Performance Dashboard */}
          <PerformanceDashboard />

          {/* Section 5: Matrix Dynamic Pricing & Isolated Currency Switcher (Feature 1) */}
          <Pricing />

          {/* Section 6: Customer Validation Reviews */}
          <Testimonials />

          {/* Section 7: Articles Resource Enclave */}
          <Articles />

          {/* Section 8: FAQ Accordion Portal */}
          <FAQ />

        </main>

        {/* Footer block */}
        <Footer />
      </div>

    </div>
  );
}
