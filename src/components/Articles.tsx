import React from 'react';
import { ARTICLES_DATA } from '../data';
import { BookOpen, ArrowUpRight } from 'lucide-react';

export default function Articles() {
  return (
    <section className="relative py-24 bg-[#172B36] border-b border-white/5" id="articles">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl text-left">
            <span className="font-mono text-xs text-[#FF9932] tracking-widest uppercase block mb-3">
              RESOURCES & RESEARCH
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Insights on Neural Logic
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#D9E8E3]/75 mt-4 leading-relaxed">
              Deep dives into AI architecture, automated agent governance, and the future of secure enterprise execution.
            </p>
          </div>
          <button className="px-5 py-2.5 border border-white/15 hover:border-[#FF9932] rounded font-mono text-xs text-[#D9E8E3]/70 hover:text-white transition-colors flex items-center space-x-2 self-start md:self-auto">
            <span>Access Resource Enclave</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Articles Grid (Semantic Section) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="articles-grid">
          {ARTICLES_DATA.map((article, idx) => (
            <article
              key={idx}
              className="rounded-2xl border border-white/10 bg-[#12222b]/35 overflow-hidden flex flex-col justify-between hover:border-white/20 hover:bg-[#12222b]/55 transition-all duration-300 group cursor-pointer"
            >
              {/* Graphic cover with abstract gradient representing tech thumbnails */}
              <div className="h-44 relative bg-black/40 overflow-hidden flex items-center justify-center border-b border-white/5">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-[#FF9932]/10 opacity-60 group-hover:scale-115 transition-transform duration-500" />
                <div className="absolute top-4 left-4 px-2 py-0.5 bg-black/60 border border-white/10 rounded font-mono text-[9px] text-[#FF9932] uppercase tracking-wider">
                  {article.category}
                </div>
                <BookOpen className="w-10 h-10 text-white/20 group-hover:text-[#FF9932]/40 transition-colors duration-300" />
                
                {/* Tech scanline overlay */}
                <div className="absolute inset-x-0 h-[1.5px] bg-white/5 top-0 animate-scanline pointer-events-none" />
              </div>

              {/* Text Area */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-white/40 mb-3">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="font-sans font-bold text-base text-white group-hover:text-[#FF9932] transition-colors duration-300 line-clamp-2 leading-snug">
                    {article.title}
                  </h3>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-white/60 group-hover:text-white transition-colors duration-300">
                  <span>READ INTEGRAL DOC</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
