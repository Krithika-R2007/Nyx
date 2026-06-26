import React, { useState, useEffect } from 'react';
import { Play, Plus, Zap, ArrowRight, Mail, Cpu, Code, Send, CheckCircle } from 'lucide-react';

interface WorkflowNode {
  id: string;
  name: string;
  type: 'trigger' | 'process' | 'logic' | 'output';
  status: 'idle' | 'active' | 'success';
  desc: string;
  icon: any;
}

export default function InteractiveCanvas() {
  const [nodes, setNodes] = useState<WorkflowNode[]>([
    { id: '1', name: 'Email Trigger', type: 'trigger', status: 'success', desc: 'Monitors inbound support@ inbox', icon: Mail },
    { id: '2', name: 'PII Sanitizer', type: 'process', status: 'success', desc: 'Secure Guard regex scrub engine', icon: Zap },
    { id: '3', name: 'Cognitive Agent', type: 'process', status: 'active', desc: 'Model: gemini-2.5-flash reasoning', icon: Cpu },
    { id: '4', name: 'Router Gate', type: 'logic', status: 'idle', desc: 'Branch: refund vs escalation', icon: Code },
    { id: '5', name: 'Telegram Broadcast', type: 'output', status: 'idle', desc: 'Real-time ops notification channel', icon: Send },
  ]);

  const [activeSignalIndex, setActiveSignalIndex] = useState<number>(0);

  // Pulse signal simulation travelling through our workflow nodes
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSignalIndex((prev) => (prev + 1) % nodes.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [nodes.length]);

  return (
    <section className="relative py-24 bg-[#172B36] border-b border-white/5 overflow-hidden" id="builder">
      {/* Absolute Tech Details */}
      <div className="absolute inset-0 tech-grid opacity-30 select-none pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_70%_20%,rgba(255,153,50,0.06),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <span className="font-mono text-xs text-[#FF9932] tracking-widest uppercase block mb-3">
              INTELLIGENT LOGIC CANVAS
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Build Logic at Massive Scale
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#D9E8E3]/75 mt-4 leading-relaxed">
              Design, test, and host complex multi-agent intelligence trees. Connect custom file triggers, neural sanitizers, LLM enclaves, and instant outputs inside a frictionless sandbox.
            </p>
          </div>
          <div className="flex space-x-3 self-start md:self-auto">
            <button className="px-5 py-2.5 bg-white/5 border border-white/10 rounded font-mono text-xs text-[#D9E8E3]/70 hover:border-[#FF9932] transition-colors flex items-center space-x-2">
              <Play className="w-3.5 h-3.5 text-[#FF9932]" />
              <span>Simulate Flow</span>
            </button>
            <button className="px-5 py-2.5 bg-[#FF9932] text-[#172B36] rounded font-mono text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-[#172B36] transition-colors flex items-center space-x-1.5 glow-saffron">
              <Plus className="w-4 h-4" />
              <span>Add Custom Node</span>
            </button>
          </div>
        </div>

        {/* The Node canvas container */}
        <div className="rounded-2xl border border-white/10 bg-[#12222b]/95 p-8 md:p-12 relative overflow-hidden shadow-2xl shadow-[#12222b]/60">
          <div className="absolute top-4 left-6 flex items-center space-x-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <span className="font-mono text-[10px] tracking-widest text-white/40 uppercase">LIVE SIMULATOR (v1.0.8)</span>
          </div>

          <div className="absolute top-4 right-6 font-mono text-[10px] text-white/30">
            COMPILER_SPEED: 0.12ms
          </div>

          {/* Connected Workflow Horizontal Path for Desktop, Vertical for Mobile */}
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-4 py-8 max-w-5xl mx-auto">
            
            {/* Pulsing signal connecting path decoration */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-white/5 via-[#FF9932]/40 to-white/5 hidden lg:block -translate-y-1/2" />

            {nodes.map((node, idx) => {
              const NodeIcon = node.icon;
              const isSignalActive = activeSignalIndex === idx;

              return (
                <React.Fragment key={node.id}>
                  {/* Node Card */}
                  <div
                    className={`relative z-10 w-full max-w-[210px] rounded-xl border p-5 transition-all duration-300 ${
                      isSignalActive
                        ? 'bg-[#12222b] border-[#FF9932] glow-saffron -translate-y-1.5'
                        : 'bg-[#12222b]/75 border-white/10 hover:border-white/20'
                    }`}
                  >
                    {/* Glowing highlight indicator */}
                    <div className={`absolute inset-0 bg-[#FF9932]/3 rounded-xl transition-opacity duration-300 ${
                      isSignalActive ? 'opacity-100' : 'opacity-0'
                    }`} />

                    {/* Node Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className={`p-2 rounded-lg border transition-all duration-300 ${
                        isSignalActive
                          ? 'bg-[#FF9932]/10 border-[#FF9932]/30 text-[#FF9932]'
                          : 'bg-white/5 border-white/10 text-white/50'
                      }`}>
                        <NodeIcon className="w-4.5 h-4.5" />
                      </div>
                      
                      {/* Local status indicator dot */}
                      <span className={`font-mono text-[9px] tracking-wider uppercase px-2 py-0.5 rounded ${
                        isSignalActive
                          ? 'bg-[#FF9932]/15 text-[#FF9932]'
                          : 'bg-white/5 text-white/30'
                      }`}>
                        {isSignalActive ? 'Pulsing' : 'Idle'}
                      </span>
                    </div>

                    {/* Node Details */}
                    <h4 className="font-sans font-bold text-white text-sm">
                      {node.name}
                    </h4>
                    <p className="font-sans text-[11px] text-[#D9E8E3]/70 mt-1.5 leading-relaxed">
                      {node.desc}
                    </p>

                    {/* Bottom active status bar */}
                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between font-mono text-[9px] text-white/30">
                      <span>ST_ID: {node.id}0A</span>
                      {isSignalActive ? (
                        <span className="text-emerald-400 font-semibold flex items-center">
                          <CheckCircle className="w-2.5 h-2.5 mr-1" />
                          OK
                        </span>
                      ) : (
                        <span>WAITING</span>
                      )}
                    </div>
                  </div>

                  {/* Connect arrow shown between nodes (hidden on last item) */}
                  {idx < nodes.length - 1 && (
                    <div className="relative z-10 flex items-center justify-center lg:h-8 lg:w-8 rotate-90 lg:rotate-0">
                      <ArrowRight className={`w-4 h-4 transition-colors duration-300 ${
                        isSignalActive ? 'text-[#FF9932] scale-110' : 'text-white/15'
                      }`} />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Interactive Canvas Output Panel */}
          <div className="mt-8 border-t border-white/10 pt-6 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs">
            <div className="flex items-center space-x-3 text-white/60">
              <span className="text-emerald-400">● GATEWAY_SECURE</span>
              <span>|</span>
              <span>Encrypted SHA-256 Link</span>
              <span>|</span>
              <span className="text-[#FF9932]">3 AI Instances Orchestrated</span>
            </div>
            <div className="px-4 py-2 bg-black/30 border border-white/5 rounded text-[11px] text-zinc-300 w-full md:w-auto text-left md:text-right">
              <span className="text-[#FF9932] font-bold">Signal Log:</span> Routing email body to <span className="text-white underline">PII Sanitizer</span> (duration: 0.8ms)
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
