import React, { useState } from 'react';
import { FAQ_DATA } from '../data';
import { ChevronDown, Plus, Minus, MessageSquare } from 'lucide-react';

export default function FAQ() {
  const categories = Object.keys(FAQ_DATA);
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const currentQuestions = FAQ_DATA[activeCategory] || [];

  return (
    <section className="relative py-24 bg-[#172B36] border-b border-white/5" id="faq">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" id="faq-grid">
          
          {/* Left Column Description */}
          <div className="lg:col-span-4 text-left flex flex-col justify-between" id="faq-intro-block">
            <div className="space-y-6">
              <span className="font-mono text-xs text-[#FF9932] tracking-widest uppercase block">
                FAQ SUPPORT PORTAL
              </span>
              <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Common <br />Inquiries
              </h2>
              <p className="font-sans text-sm text-[#D9E8E3]/70 leading-relaxed">
                Everything you need to know about deploying, scaling, and securing your custom autonomous neural agents with Nyx. Can't find an answer? Connect with an automation engineer.
              </p>
            </div>

            <div className="pt-10 border-t border-white/10 mt-10 lg:mt-0">
              <button className="px-6 py-3.5 bg-[#FF9932] text-[#172B36] text-xs font-mono font-bold tracking-wider uppercase rounded hover:bg-white hover:text-[#172B36] transition-colors flex items-center space-x-2 glow-saffron">
                <MessageSquare className="w-4 h-4" />
                <span>Contact Engineering</span>
              </button>
            </div>
          </div>

          {/* Right Column Interactive Tabs & Accordions */}
          <div className="lg:col-span-8 flex flex-col" id="faq-interactive-block">
            
            {/* Category Tab Buttons bar */}
            <div className="flex flex-wrap gap-2.5 border-b border-white/10 pb-5 mb-8" id="faq-tab-bar">
              {categories.map((cat) => {
                const isSelected = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      setExpandedIndex(0); // autoexpand first question in new category
                    }}
                    className={`px-4.5 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider rounded transition-all duration-300 border ${
                      isSelected
                        ? 'bg-[#FF9932]/10 border-[#FF9932]/40 text-[#FF9932] glow-saffron'
                        : 'bg-[#12222b]/40 border-white/10 text-white/60 hover:text-white hover:border-white/20'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Questions list accordion */}
            <div className="space-y-4" id="faq-questions-accordion">
              {currentQuestions.map((item, idx) => {
                const isExpanded = expandedIndex === idx;

                return (
                  <div
                    key={idx}
                    className={`rounded-xl border transition-all duration-300 ${
                      isExpanded
                        ? 'bg-[#12222b] border-[#FF9932]/35 shadow-lg shadow-[#FF9932]/3'
                        : 'bg-[#12222b]/35 border-white/10 hover:border-white/20'
                    }`}
                  >
                    {/* Toggle button */}
                    <button
                      onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                    >
                      <h3 className="font-sans font-bold text-sm sm:text-base text-white pr-4">
                        {item.question}
                      </h3>
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-[#FF9932]">
                        {isExpanded ? (
                          <Minus className="w-3.5 h-3.5" />
                        ) : (
                          <Plus className="w-3.5 h-3.5" />
                        )}
                      </div>
                    </button>

                    {/* Answer collapsible container */}
                    <div
                      className="transition-all duration-300 ease-in-out overflow-hidden"
                      style={{
                        maxHeight: isExpanded ? '250px' : '0px',
                        opacity: isExpanded ? 1 : 0,
                        visibility: isExpanded ? 'visible' : 'hidden',
                      }}
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-white/5">
                        <p className="font-sans text-xs sm:text-sm text-white/85 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
