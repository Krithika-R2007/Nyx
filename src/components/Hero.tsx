import React, { useEffect, useRef } from 'react';
import { ChevronRight, ShieldCheck, Activity, Cpu } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        width = canvas.width = entry.contentRect.width;
        height = canvas.height = entry.contentRect.height;
      }
    });
    resizeObserver.observe(canvas);

    // Grid nodes config
    const cols = 28;
    const rows = 18;
    const points: { x: number; y: number; originY: number; phase: number }[] = [];

    // Initialize wave points
    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        // Perspective mapping math
        const xRatio = c / (cols - 1);
        const yRatio = r / (rows - 1);
        
        // Distort slightly to give a beautiful perspective grid look (3D vanishing point)
        const x = (xRatio - 0.5) * (width * 1.3) * (0.6 + yRatio * 0.4) + width / 2;
        const y = yRatio * (height * 0.75) + height * 0.2;
        
        points.push({
          x,
          y,
          originY: y,
          phase: (c * 0.25) + (r * 0.3),
        });
      }
    }

    let time = 0;
    let mouseX = width / 2;
    let mouseY = height / 2;

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', onMouseMove);

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Draw background gradient to blend nicely with Oceanic Noir
      const radialGrad = ctx.createRadialGradient(
        width / 2,
        height / 2,
        10,
        width / 2,
        height / 2,
        width * 0.7
      );
      radialGrad.addColorStop(0, 'rgba(17, 34, 43, 0.2)');
      radialGrad.addColorStop(1, '#172B36');
      ctx.fillStyle = radialGrad;
      ctx.fillRect(0, 0, width, height);

      // Draw connections
      ctx.strokeStyle = 'rgba(255, 153, 50, 0.05)';
      ctx.lineWidth = 1;

      // Draw horizontal lines
      for (let r = 0; r < rows; r++) {
        ctx.beginPath();
        for (let c = 0; c < cols; c++) {
          const idx = c * rows + r;
          const p = points[idx];
          if (!p) continue;

          // Compute dynamic elevation based on math-sine and mouse proximity
          const dx = p.x - mouseX;
          const dy = p.y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const mouseInfluence = Math.max(0, (180 - dist) / 180) * 22;
          
          const offset = Math.sin(p.phase + time) * 12 + mouseInfluence;
          const currentY = p.originY + offset;

          if (c === 0) {
            ctx.moveTo(p.x, currentY);
          } else {
            ctx.lineTo(p.x, currentY);
          }
        }
        ctx.stroke();
      }

      // Draw vertical lines
      for (let c = 0; c < cols; c++) {
        ctx.beginPath();
        for (let r = 0; r < rows; r++) {
          const idx = c * rows + r;
          const p = points[idx];
          if (!p) continue;

          const dx = p.x - mouseX;
          const dy = p.y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const mouseInfluence = Math.max(0, (180 - dist) / 180) * 22;

          const offset = Math.sin(p.phase + time) * 12 + mouseInfluence;
          const currentY = p.originY + offset;

          if (r === 0) {
            ctx.moveTo(p.x, currentY);
          } else {
            ctx.lineTo(p.x, currentY);
          }
        }
        ctx.stroke();
      }

      // Draw small glowing nodes at intersections for high-tech fidelity
      for (let i = 0; i < points.length; i += 2) {
        const p = points[i];
        if (!p) continue;

        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const mouseInfluence = Math.max(0, (180 - dist) / 180) * 22;

        const offset = Math.sin(p.phase + time) * 12 + mouseInfluence;
        const currentY = p.originY + offset;

        // Colors toggle on proximity
        if (dist < 150) {
          ctx.fillStyle = `rgba(255, 153, 50, ${0.4 + (150 - dist) / 300})`;
          ctx.beginPath();
          ctx.arc(p.x, currentY, 2.5, 0, Math.PI * 2);
          ctx.fill();
        } else if (i % 7 === 0) {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
          ctx.beginPath();
          ctx.arc(p.x, currentY, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  const trustLogos = [
    { name: 'Aetna', class: 'font-sans font-bold text-white/50 tracking-wider text-lg' },
    { name: 'Cigna', class: 'font-sans italic font-semibold text-white/50 tracking-wide text-lg' },
    { name: 'Anthem', class: 'font-sans font-light text-white/50 tracking-widest text-lg' },
    { name: 'CVS Health', class: 'font-mono font-medium text-white/50 text-base' },
    { name: 'UnitedHealth', class: 'font-sans font-black text-white/50 tracking-tight text-lg' }
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex flex-col justify-between" id="hero-section">
      {/* Dynamic 3D Grid Canvas Background */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none opacity-80 md:opacity-100">
        <canvas ref={canvasRef} className="w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#172B36] via-transparent to-[#172B36]/50" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center flex-grow">
        {/* Left Editorial Copy Column */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
          {/* Tagline Badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#FF9932]/5 border border-[#FF9932]/20 rounded-full text-xs font-mono tracking-widest text-[#FF9932] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF9932] animate-pulse" />
            <span>Autonomous Neural Engines v3.4</span>
          </div>

          {/* Heading */}
          <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] md:leading-tight">
            Power your <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#FF9932]">
              future with AI
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-xl text-base sm:text-lg text-[#D9E8E3]/70 leading-relaxed">
            Deploy custom, enterprise-grade cognitive agents that automate complex workflows, govern prompt safety, and synchronize vector memories dynamically. Scale intelligence with Nyx today.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto pt-2">
            <a
              href="#builder"
              className="px-8 py-4 bg-[#FF9932] text-[#172B36] text-sm font-mono font-bold tracking-wider uppercase rounded hover:bg-white hover:text-[#172B36] transition-all duration-300 flex items-center justify-center space-x-2.5 glow-saffron shadow-lg shadow-[#FF9932]/15 group"
            >
              <span>Build a Workflow</span>
              <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#features"
              className="px-8 py-4 border border-white/10 hover:border-[#FF9932] text-white/85 hover:text-white text-sm font-mono tracking-wider uppercase rounded hover:bg-white/5 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Explore Features</span>
            </a>
          </div>

          {/* Inline Quick Metrics */}
          <div className="grid grid-cols-3 gap-6 pt-10 border-t border-white/10 w-full max-w-lg">
            <div>
              <div className="flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-[#FF9932]" />
                <span className="font-mono text-sm font-bold text-white">SOC-2</span>
              </div>
              <p className="text-xs text-[#D9E8E3]/60 mt-1">Enterprise Guardrails</p>
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <Activity className="w-4 h-4 text-[#FF9932]" />
                <span className="font-mono text-sm font-bold text-white">11ms</span>
              </div>
              <p className="text-xs text-[#D9E8E3]/60 mt-1">Average Latency</p>
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <Cpu className="w-4 h-4 text-[#FF9932]" />
                <span className="font-mono text-sm font-bold text-white">99.99%</span>
              </div>
              <p className="text-xs text-[#D9E8E3]/60 mt-1">Uptime SLA Guarantees</p>
            </div>
          </div>
        </div>

        {/* Right Conceptual visual frame */}
        <div className="lg:col-span-5 hidden lg:flex justify-end relative">
          <div className="w-full max-w-[400px] aspect-square rounded-2xl relative border border-white/10 bg-[#12222b]/80 p-8 flex flex-col justify-between glow-mint overflow-hidden">
            {/* Scanline decoration */}
            <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF9932]/30 to-transparent top-0 animate-scanline pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,153,50,0.08),transparent_60%)]" />

            {/* Visual Frame Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <span className="font-mono text-[10px] text-white/40">cognitive_node_A4.sh</span>
            </div>

            {/* Center Content simulating model query */}
            <div className="flex-grow flex flex-col justify-center space-y-4 py-6 font-mono text-xs">
              <div className="space-y-1.5">
                <div className="text-white/40">&gt; initiate --workflow check_compliance</div>
                <div className="text-[#FF9932] font-semibold">✔ Connected to Secure Guard gateway</div>
              </div>
              <div className="space-y-1 bg-black/30 p-3 rounded border border-white/5">
                <div className="text-white/40 text-[10px]">INBOUND PAYLOAD:</div>
                <div className="text-zinc-200 text-[11px] truncate">"Execute refund matching customer ID CRM_902..."</div>
                <div className="text-[#FF9932] text-[10px] font-semibold">✔ PII Scrubbed: 1 match sanitized</div>
              </div>
              <div className="space-y-1">
                <div className="text-white/40">&gt; execute --agent scale_instance</div>
                <div className="text-white/70">Processing task query in isolated enclave...</div>
                <div className="text-emerald-400">✔ Output verified. latency: 11.2ms</div>
              </div>
            </div>

            {/* Visual Frame Footer */}
            <div className="border-t border-white/10 pt-4 flex items-center justify-between text-[10px] font-mono text-white/40">
              <span>MEM: 2.14 GB / 8.00 GB</span>
              <span className="text-emerald-400">STATUS: LIVE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof Client Logos */}
      <div className="relative z-10 w-full pt-16 border-t border-white/10 bg-gradient-to-b from-transparent to-[#172B36]/60">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center font-mono text-xs tracking-widest text-white/40 uppercase mb-8">
            TRUSTED BY LEADERS SECURING ENTERPRISE COGNITION
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 md:gap-x-16">
            {trustLogos.map((logo) => (
              <div
                key={logo.name}
                className="opacity-40 hover:opacity-100 transition-all duration-300 transform hover:scale-105 select-none"
              >
                <span className={logo.class}>{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
