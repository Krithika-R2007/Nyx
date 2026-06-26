import React from 'react';
import { TESTIMONIALS_DATA } from '../data';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="relative py-24 bg-[#172B36] border-b border-white/5" id="testimonials">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#FF9932]/5 border border-[#FF9932]/20 rounded-full text-xs font-mono tracking-widest text-[#FF9932] uppercase mb-4">
            <span>Validation & Support</span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Trusted by the Pioneers of AI Strategy
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#D9E8E3]/75 mt-4 leading-relaxed">
            Discover why engineering leaders from major health tech companies trust Nyx to scale, secure, and monitor their autonomous agent fleets.
          </p>
        </div>

        {/* Testimonials Grid (Semantic Section) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch" id="testimonials-grid">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <article
              key={idx}
              className="rounded-2xl border border-white/10 bg-[#12222b]/40 p-6 flex flex-col justify-between hover:border-white/20 transition-all duration-300 relative group"
            >
              {/* Decorative background quote */}
              <div className="absolute top-6 right-6 text-white/[0.02] group-hover:text-[#FF9932]/[0.04] transition-colors">
                <Quote className="w-10 h-10" />
              </div>

              {/* Main review details */}
              <div>
                {/* Stars */}
                <div className="flex items-center space-x-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#FF9932] text-[#FF9932]" />
                  ))}
                </div>

                <p className="font-sans text-xs sm:text-sm text-white/85 leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              {/* User Bio */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center space-x-3.5">
                {/* Circular Profile block */}
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#FF9932]/20 to-white/5 border border-white/15 flex items-center justify-center font-mono text-xs font-bold text-[#FF9932]">
                  {t.avatarText}
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs text-white">
                    {t.name}
                  </h4>
                  <p className="font-sans text-[10px] text-white/50 mt-0.5">
                    {t.role}, <span className="text-[#FF9932]">{t.company}</span>
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
