import React, { useState } from 'react';
import { FEATURES_DATA } from '../data';
import { ChevronDown } from 'lucide-react';

export default function BentoAccordion() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="relative py-24 bg-[#172B36] border-t border-b border-white/5" id="features">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#FF9932]/5 border border-[#FF9932]/20 rounded-full text-xs font-mono tracking-widest text-[#FF9932] uppercase mb-4">
            <span>Core Ecosystem Architecture</span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Engineered for Autonomy, Built for Scale
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#D9E8E3]/75 mt-4 leading-relaxed">
            Four specialized modules acting in harmony. Discover how Nyx ensures your prompt-integrity, streamlines custom orchestration, and scales computation.
          </p>
        </div>

        {/* 
          Feature 2 implementation:
          Responsive Bento-to-Accordion Wrapper with state persistence on resize.
          We show Accordion on mobile (< lg viewport) and Bento Grid on desktop (>= lg viewport).
          Both share the unified 'activeIndex' state to implement Context Lock flawlessly.
        */}

        {/* --- MOBILE ACCORDION (Hidden on Desktop) --- */}
        <div className="block lg:hidden space-y-4" id="mobile-accordion-wrapper">
          {FEATURES_DATA.map((feature, idx) => {
            const isExpanded = activeIndex === idx;
            const IconComponent = feature.icon;

            return (
              <div
                key={feature.id}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  isExpanded 
                    ? 'bg-[#12222b] border-[#FF9932]/40 shadow-lg shadow-[#FF9932]/5' 
                    : 'bg-[#12222b]/40 border-white/10 hover:border-white/20'
                }`}
                id={`accordion-item-${feature.id}`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setActiveIndex(isExpanded ? 0 : idx)} // ensure at least one remains open or default to 0
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={isExpanded}
                  aria-controls={`accordion-content-${feature.id}`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-2.5 rounded-lg border transition-all duration-300 ${
                      isExpanded 
                        ? 'bg-[#FF9932]/10 border-[#FF9932]/30 text-[#FF9932]' 
                        : 'bg-white/5 border-white/10 text-white/80'
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-[#FF9932] tracking-wider uppercase block mb-0.5">
                        {feature.tag}
                      </span>
                      <h3 className="font-sans font-bold text-white text-base">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-white/50 transition-transform duration-300 ${
                    isExpanded ? 'transform rotate-180 text-[#FF9932]' : ''
                  }`} />
                </button>

                {/* Accordion Body with high-fidelity height transition */}
                <div
                  id={`accordion-content-${feature.id}`}
                  className="transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: isExpanded ? '350px' : '0px',
                    opacity: isExpanded ? 1 : 0,
                    visibility: isExpanded ? 'visible' : 'hidden',
                  }}
                >
                  <div className="px-6 pb-6 pt-2 border-t border-white/5">
                    <p className="font-sans text-sm text-white/80 leading-relaxed">
                      {feature.desc}
                    </p>
                    <div className="mt-4 p-4 rounded-lg bg-black/20 border border-white/5">
                      <p className="font-sans text-xs text-[#D9E8E3]/60 leading-relaxed">
                        {feature.detailedDesc}
                      </p>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="font-mono text-xs text-[#FF9932]/85">INTELLIGENCE METRIC</span>
                      <span className="font-mono text-xs font-semibold text-white px-2.5 py-1 bg-white/5 rounded border border-white/10">
                        {feature.stat}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* --- DESKTOP BENTO GRID (Hidden on Mobile) --- */}
        <div className="hidden lg:grid grid-cols-12 gap-6" id="desktop-bento-grid">
          {FEATURES_DATA.map((feature, idx) => {
            const isActive = activeIndex === idx;
            const IconComponent = feature.icon;

            // Alternate bento layout columns: 1st row (7, 5), 2nd row (5, 7)
            const colSpan = idx === 0 || idx === 3 ? 'col-span-7' : 'col-span-5';

            return (
              <div
                key={feature.id}
                onMouseEnter={() => setActiveIndex(idx)}
                className={`relative rounded-2xl border p-8 flex flex-col justify-between transition-all duration-500 overflow-hidden cursor-pointer h-[320px] select-none ${
                  isActive
                    ? 'bg-[#12222b]/95 border-[#FF9932]/45 glow-saffron shadow-lg shadow-[#FF9932]/5'
                    : 'bg-[#12222b]/40 border-white/10 hover:border-white/20 hover:bg-[#12222b]/60'
                } ${colSpan}`}
                id={`bento-item-${feature.id}`}
              >
                {/* Tech background overlay glow */}
                <div className={`absolute -right-20 -top-20 w-52 h-52 bg-gradient-to-br ${feature.color} rounded-full blur-3xl transition-opacity duration-500 ${
                  isActive ? 'opacity-100' : 'opacity-40'
                }`} />

                {/* Card Header Info */}
                <div className="relative z-10 flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl border transition-all duration-300 ${
                      isActive
                        ? 'bg-[#FF9932]/10 border-[#FF9932]/35 text-[#FF9932]'
                        : 'bg-white/5 border-white/10 text-white/80'
                    }`}>
                      <IconComponent className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] tracking-widest text-[#FF9932] uppercase block mb-0.5">
                        {feature.tag}
                      </span>
                      <h3 className="font-sans font-bold text-lg text-white leading-snug">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Performance metric badge */}
                  <span className={`font-mono text-xs px-2.5 py-1 rounded border transition-all duration-300 ${
                    isActive
                      ? 'bg-[#FF9932]/10 border-[#FF9932]/25 text-[#FF9932]'
                      : 'bg-white/5 border-white/10 text-white/55'
                  }`}>
                    {feature.stat}
                  </span>
                </div>

                {/* Card Descriptions (Fading logic) */}
                <div className="relative z-10 mt-6 h-[110px] overflow-hidden flex flex-col justify-end">
                  {/* Default short description */}
                  <div className={`transition-all duration-500 absolute inset-x-0 bottom-0 ${
                    isActive ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'
                  }`}>
                    <p className="font-sans text-[#D9E8E3]/70 text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>

                  {/* Hover detailed description (appears smoothly) */}
                  <div className={`transition-all duration-500 absolute inset-x-0 bottom-0 ${
                    isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
                  }`}>
                    <p className="font-sans text-white/95 text-sm leading-relaxed mb-2 font-medium">
                      {feature.desc}
                    </p>
                    <p className="font-sans text-xs text-[#D9E8E3]/60 leading-relaxed bg-black/15 p-3 rounded-lg border border-white/5">
                      {feature.detailedDesc}
                    </p>
                  </div>
                </div>

                {/* Bottom line status */}
                <div className="relative z-10 border-t border-white/10 pt-4 flex items-center justify-between font-mono text-[9px] text-white/30">
                  <span>MODULE_ID: AM_RE_{idx}0_SYS</span>
                  <span className={isActive ? 'text-[#FF9932]' : 'text-white/30'}>
                    {isActive ? '● SYSTEM ACTIVE' : '○ IDLE'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
