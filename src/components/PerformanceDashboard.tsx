import React, { useState, useEffect } from 'react';
import { Activity, ShieldCheck, Database, Zap, Cpu } from 'lucide-react';

export default function PerformanceDashboard() {
  const [systemLoad, setSystemLoad] = useState(42);
  const [tokenThroughput, setTokenThroughput] = useState(328);
  const [hoveredDataPoint, setHoveredDataPoint] = useState<{ x: string; y: number } | null>(null);

  // Growth curve data points (30-day efficiency gains)
  const growthData = [
    { day: 'Day 1', val: 12 },
    { day: 'Day 5', val: 24 },
    { day: 'Day 10', val: 45 },
    { day: 'Day 15', val: 58 },
    { day: 'Day 20', val: 79 },
    { day: 'Day 25', val: 82 },
    { day: 'Day 30', val: 99.9 }
  ];

  // Fluctuating values simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setSystemLoad((prev) => {
        const offset = Math.floor(Math.random() * 9) - 4; // -4 to +4
        return Math.max(28, Math.min(85, prev + offset));
      });

      setTokenThroughput((prev) => {
        const offset = Math.floor(Math.random() * 5) - 2;
        return Math.max(290, prev + offset);
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 bg-[#172B36] border-b border-white/5" id="dashboard">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#FF9932]/5 border border-[#FF9932]/20 rounded-full text-xs font-mono tracking-widest text-[#FF9932] uppercase mb-4">
            <span>Platform Telemetry Logs</span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Optimized for Ultimate Performance
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#D9E8E3]/75 mt-4 leading-relaxed">
            Monitor active system loads, regional SLA nodes, and token volumes in real-time. Nyx maintains a global infrastructure designed for high throughput.
          </p>
        </div>

        {/* Dashboard Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch" id="telemetry-grid">
          
          {/* Circular CPU Gauge (col-span-4) */}
          <div className="lg:col-span-4 rounded-2xl border border-white/10 bg-[#12222b]/55 p-6 flex flex-col justify-between glow-mint h-[360px]">
            <div>
              <div className="flex items-center space-x-2 text-[#FF9932]">
                <Cpu className="w-4 h-4" />
                <span className="font-mono text-xs font-semibold uppercase tracking-wider">System Load</span>
              </div>
              <h3 className="font-sans font-bold text-white text-base mt-2">Active Neural Processing</h3>
            </div>

            {/* Circular Gauge visual */}
            <div className="flex justify-center items-center my-6 relative">
              <svg className="w-36 h-36 transform -rotate-90">
                <circle
                  cx="72"
                  cy="72"
                  r="64"
                  className="stroke-white/5"
                  strokeWidth="8"
                  fill="transparent"
                />
                <circle
                  cx="72"
                  cy="72"
                  r="64"
                  className="stroke-[#FF9932] transition-all duration-1000 ease-out"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray={402}
                  strokeDashoffset={402 - (402 * systemLoad) / 100}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col justify-center items-center">
                <span className="font-mono text-3xl font-extrabold text-white">{systemLoad}%</span>
                <span className="font-sans text-[10px] text-white/50 tracking-wider mt-0.5">CPU CORE_B4</span>
              </div>
            </div>

            <div className="border-t border-white/5 pt-4 flex items-center justify-between text-[11px] font-mono text-white/55">
              <span>95% L2 CACHE_HIT</span>
              <span className="text-[#FF9932]">AUTOSCALING ACTIVE</span>
            </div>
          </div>

          {/* SLA Response Bars (col-span-4) */}
          <div className="lg:col-span-4 rounded-2xl border border-white/10 bg-[#12222b]/55 p-6 flex flex-col justify-between glow-mint h-[360px]">
            <div>
              <div className="flex items-center space-x-2 text-[#FF9932]">
                <ShieldCheck className="w-4 h-4" />
                <span className="font-mono text-xs font-semibold uppercase tracking-wider">SLA Response</span>
              </div>
              <h3 className="font-sans font-bold text-white text-base mt-2">Global Uptime Monitoring</h3>
            </div>

            {/* High-density visual bars */}
            <div className="my-4 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-white/60">US East (N. Virginia)</span>
                <span className="font-mono text-xs font-semibold text-[#FF9932]">99.99%</span>
              </div>
              <div className="flex space-x-1">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-6 flex-grow rounded-[1.5px] ${
                      i === 11 || i === 18 ? 'bg-amber-500/80 animate-pulse' : 'bg-emerald-500/80'
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-white/60">EU West (Frankfurt)</span>
                <span className="font-mono text-xs font-semibold text-[#FF9932]">100.00%</span>
              </div>
              <div className="flex space-x-1">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-6 flex-grow rounded-[1.5px] bg-emerald-500/80"
                  />
                ))}
              </div>
            </div>

            <div className="border-t border-white/5 pt-4 flex items-center justify-between text-[11px] font-mono text-white/55">
              <span>OVERALL HEALTH: EXCELLENT</span>
              <span className="text-emerald-400">99.998% AVG</span>
            </div>
          </div>

          {/* Recharts alternative: Interactive SVG Line Chart (col-span-4) */}
          <div className="lg:col-span-4 rounded-2xl border border-white/10 bg-[#12222b]/55 p-6 flex flex-col justify-between glow-mint h-[360px]">
            <div>
              <div className="flex items-center space-x-2 text-[#FF9932]">
                <Activity className="w-4 h-4" />
                <span className="font-mono text-xs font-semibold uppercase tracking-wider">Growth Vector</span>
              </div>
              <h3 className="font-sans font-bold text-white text-base mt-2">Efficiency Gain Over 30 Days</h3>
            </div>

            {/* Glowing Custom SVG Line graph */}
            <div className="my-2 relative flex-grow flex items-center justify-center">
              <svg className="w-full h-36" viewBox="0 0 300 120" id="growth-svg">
                <defs>
                  {/* Linear gradient for filling under curve */}
                  <linearGradient id="glowGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FF9932" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#12222b" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* X-axis lines */}
                <line x1="0" y1="100" x2="300" y2="100" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                <line x1="0" y1="60" x2="300" y2="60" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                <line x1="0" y1="20" x2="300" y2="20" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

                {/* Filled curve path */}
                <path
                  d="M 10 100 Q 60 90, 100 70 T 180 40 T 250 25 T 290 12 L 290 100 Z"
                  fill="url(#glowGrad)"
                />

                {/* Glowing line stroke */}
                <path
                  d="M 10 100 Q 60 90, 100 70 T 180 40 T 250 25 T 290 12"
                  fill="transparent"
                  stroke="#FF9932"
                  strokeWidth="2.5"
                />

                {/* Hover interaction nodes */}
                {growthData.map((pt, i) => {
                  const x = 10 + i * (280 / (growthData.length - 1));
                  const y = 100 - (pt.val * 0.9);

                  return (
                    <circle
                      key={i}
                      cx={x}
                      cy={y}
                      r="4.5"
                      fill="#12222b"
                      stroke="#FF9932"
                      strokeWidth="2"
                      className="cursor-pointer transition-all duration-300 hover:scale-150"
                      onMouseEnter={() => setHoveredDataPoint({ x: pt.day, y: pt.val })}
                      onMouseLeave={() => setHoveredDataPoint(null)}
                    />
                  );
                })}
              </svg>

              {/* Tooltip displaying data */}
              {hoveredDataPoint && (
                <div className="absolute top-0 right-0 bg-black/85 border border-[#FF9932]/40 rounded px-2.5 py-1.5 font-mono text-[10px] text-white">
                  <div>{hoveredDataPoint.x}</div>
                  <div className="text-[#FF9932] font-semibold">Efficiency: {hoveredDataPoint.y}%</div>
                </div>
              )}
            </div>

            <div className="border-t border-white/5 pt-4 flex items-center justify-between text-[11px] font-mono text-white/55">
              <span>EFFICIENCY RATE: +82.4%</span>
              <span className="text-emerald-400">OPTIMAL</span>
            </div>
          </div>

        </div>

        {/* Secondary numeric showcase row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
          <div className="rounded-xl border border-white/10 bg-[#12222b]/30 p-5 flex items-center justify-between">
            <div>
              <span className="font-mono text-[10px] text-white/40 uppercase">RUN_LATENCY</span>
              <div className="font-mono text-2xl font-bold text-white mt-1">11.2ms</div>
            </div>
            <div className="w-1.5 h-10 bg-[#FF9932]/20 rounded-full overflow-hidden">
              <div className="w-full h-1/2 bg-[#FF9932] rounded-full" />
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#12222b]/30 p-5 flex items-center justify-between">
            <div>
              <span className="font-mono text-[10px] text-white/40 uppercase">ACTIVE_NODES</span>
              <div className="font-mono text-2xl font-bold text-white mt-1">{tokenThroughput} Nodes</div>
            </div>
            <div className="w-1.5 h-10 bg-[#FF9932]/20 rounded-full overflow-hidden">
              <div className="w-full h-4/5 bg-[#FF9932] rounded-full" />
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#12222b]/30 p-5 flex items-center justify-between">
            <div>
              <span className="font-mono text-[10px] text-white/40 uppercase">TOTAL_QUERIES</span>
              <div className="font-mono text-2xl font-bold text-white mt-1">1.84M /hr</div>
            </div>
            <div className="w-1.5 h-10 bg-[#FF9932]/20 rounded-full overflow-hidden">
              <div className="w-full h-3/4 bg-[#FF9932] rounded-full" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
