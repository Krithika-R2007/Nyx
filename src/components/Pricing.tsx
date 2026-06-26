import React, { useEffect, useRef } from 'react';
import { PRICING_CONFIG } from '../data';
import { Check, Info, HelpCircle } from 'lucide-react';

export default function Pricing() {
  const currencySelectRef = useRef<HTMLSelectElement>(null);
  const billingToggleRef = useRef<HTMLInputElement>(null);
  const renderCountRef = useRef<number>(0);

  // Increment render count on every React render to prove state isolation
  renderCountRef.current += 1;

  // The Performance-Isolated Calculation & DOM update function
  const updatePricesDirectly = () => {
    const currency = currencySelectRef.current?.value || 'USD';
    const isAnnual = billingToggleRef.current?.checked || false;
    
    const currencyData = PRICING_CONFIG.currencies[currency];
    const discountFactor = isAnnual ? PRICING_CONFIG.annualDiscount : 1.0;

    PRICING_CONFIG.tiers.forEach((tier) => {
      // 1. Calculate Monthly Price Equivalent
      const rawPrice = tier.basePriceUSD * currencyData.rate * discountFactor;
      const roundedPrice = Math.round(rawPrice);
      
      // 2. Calculate Annual Total Price
      const rawAnnualPrice = tier.basePriceUSD * 12 * currencyData.rate * PRICING_CONFIG.annualDiscount;
      const roundedAnnualPrice = Math.round(rawAnnualPrice);

      // 3. Locate target DOM nodes directly and update textContent
      const valueNode = document.getElementById(`price-val-${tier.id}`);
      const infoNode = document.getElementById(`price-info-${tier.id}`);
      const saveBadgeNode = document.getElementById(`price-save-badge-${tier.id}`);

      if (valueNode) {
        valueNode.textContent = `${currencyData.symbol}${roundedPrice.toLocaleString()}`;
      }

      if (infoNode) {
        if (isAnnual) {
          infoNode.textContent = `Billed ${currencyData.symbol}${roundedAnnualPrice.toLocaleString()}/yr (Saved 20%)`;
          infoNode.style.opacity = '1';
        } else {
          infoNode.textContent = 'Billed monthly, cancel anytime';
          infoNode.style.opacity = '0.5';
        }
      }

      if (saveBadgeNode) {
        if (isAnnual) {
          saveBadgeNode.style.opacity = '1';
          saveBadgeNode.style.transform = 'scale(1)';
        } else {
          saveBadgeNode.style.opacity = '0';
          saveBadgeNode.style.transform = 'scale(0.85)';
        }
      }
    });

    // Also update localized decorative elements like selected plan labels
    const periodLabelNode = document.getElementById('billing-toggle-label');
    if (periodLabelNode) {
      periodLabelNode.textContent = isAnnual ? 'Annual Billing Cycle' : 'Monthly Billing Cycle';
    }
  };

  useEffect(() => {
    // Initial run to populate values based on matrix data
    updatePricesDirectly();

    const selectEl = currencySelectRef.current;
    const toggleEl = billingToggleRef.current;

    if (selectEl) {
      selectEl.addEventListener('change', updatePricesDirectly);
    }
    if (toggleEl) {
      toggleEl.addEventListener('change', updatePricesDirectly);
    }

    return () => {
      if (selectEl) selectEl.removeEventListener('change', updatePricesDirectly);
      if (toggleEl) toggleEl.removeEventListener('change', updatePricesDirectly);
    };
  }, []);

  return (
    <section className="relative py-24 bg-[#172B36]" id="pricing">
      {/* Background visual glows */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#FF9932]/3 rounded-full blur-3xl pointer-events-none select-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#FF9932]/2 rounded-full blur-3xl pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#FF9932]/5 border border-[#FF9932]/20 rounded-full text-xs font-mono tracking-widest text-[#FF9932] uppercase mb-4">
            <span>Matrix-Driven Financial Engine</span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Transparent Pricing. Engineered Value.
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#D9E8E3]/75 mt-4 leading-relaxed">
            Choose a plan computed dynamically across global markets. Leverage localized tariff conversions and flat annual billing cycle discounts directly.
          </p>

          {/* Render count debugger box to visually verify zero re-renders */}
          <div className="mt-6 inline-flex items-center space-x-2.5 px-3 py-1.5 bg-black/40 border border-white/10 rounded font-mono text-xs text-white/80">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>React Component Mounts: </span>
            <span className="text-emerald-400 font-bold">{renderCountRef.current}</span>
            <span className="text-white/40">|</span>
            <span className="text-[#FF9932]">Zero Re-renders On Currency/Billing Toggle</span>
          </div>
        </div>

        {/* Dynamic Controls Switcher Bar (Performance Isolated) */}
        <div className="max-w-xl mx-auto mb-16 p-4 rounded-2xl bg-[#12222b]/80 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 glow-mint" id="pricing-control-bar">
          {/* Currency Dropdown Selector */}
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <label htmlFor="pricing-currency-select" className="font-mono text-xs uppercase text-white/50 tracking-wider">
              Market Currency:
            </label>
            <select
              ref={currencySelectRef}
              id="pricing-currency-select"
              className="bg-[#12222b] border border-white/15 rounded-lg px-3 py-1.5 font-mono text-xs font-semibold text-white focus:outline-none focus:border-[#FF9932] transition-colors cursor-pointer"
            >
              {Object.keys(PRICING_CONFIG.currencies).map((key) => (
                <option key={key} value={key} className="bg-[#12222b] text-white">
                  {PRICING_CONFIG.currencies[key].name}
                </option>
              ))}
            </select>
          </div>

          {/* Billing Interval Toggle Button/Switch */}
          <div className="flex items-center justify-between sm:justify-end space-x-3.5 w-full sm:w-auto border-t sm:border-t-0 pt-4 sm:pt-0 border-white/5">
            <span className="font-mono text-xs uppercase text-white/50 tracking-wider">
              Monthly
            </span>
            
            {/* Custom Styled Switch */}
            <label className="relative inline-flex items-center cursor-pointer select-none">
              <input
                type="checkbox"
                ref={billingToggleRef}
                id="pricing-billing-toggle"
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-black/40 border border-white/15 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-[#FF9932] after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:border-[#FF9932]/40" />
            </label>

            <div className="flex items-center space-x-1.5">
              <span className="font-mono text-xs uppercase text-white font-semibold tracking-wider">
                Annual
              </span>
              <span className="px-1.5 py-0.5 bg-[#FF9932]/10 border border-[#FF9932]/35 text-[#FF9932] text-[9px] font-mono font-bold rounded">
                -20%
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid (Semantic Section) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch" id="pricing-tiers-grid">
          {PRICING_CONFIG.tiers.map((tier) => (
            <article
              key={tier.id}
              className={`relative rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 ${
                tier.isPopular
                  ? 'bg-[#12222b]/95 border-[#FF9932]/45 glow-saffron md:-translate-y-4 shadow-xl shadow-[#FF9932]/5'
                  : 'bg-[#12222b]/40 border-white/10 hover:border-white/20'
              }`}
              id={`pricing-card-${tier.id}`}
            >
              {/* Popular Badge */}
              {tier.isPopular && (
                <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-[#FF9932] text-[#172B36] font-mono text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded">
                  MOST POPULAR
                </div>
              )}

              {/* Title and Intro */}
              <div>
                <span className="font-mono text-[10px] tracking-widest text-[#FF9932] uppercase block mb-1">
                  CORE INFRASTRUCTURE TIER
                </span>
                <h3 className="font-sans font-bold text-xl text-white">
                  {tier.name}
                </h3>
                <p className="font-sans text-xs text-[#D9E8E3]/70 mt-2 min-h-[40px] leading-relaxed">
                  {tier.description}
                </p>

                {/* Price Display Section (DIRECT TARGET NODES FOR PERFORMANCE ISOLATION) */}
                <div className="mt-6 border-b border-white/10 pb-6 flex flex-col">
                  <div className="flex items-baseline space-x-1.5">
                    {/* The localized node containing the price */}
                    <span
                      id={`price-val-${tier.id}`}
                      className="font-mono text-4xl sm:text-5xl font-extrabold text-white tracking-tight"
                    >
                      --
                    </span>
                    <span className="font-sans text-sm text-white/50">
                      /mo
                    </span>
                    
                    {/* Local discount save badge */}
                    <span
                      id={`price-save-badge-${tier.id}`}
                      className="ml-2.5 px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/35 text-emerald-400 text-[10px] font-mono rounded tracking-wider uppercase transition-all duration-300"
                      style={{ opacity: 0, transform: 'scale(0.85)' }}
                    >
                      SAVED 20%
                    </span>
                  </div>

                  {/* Localized node for billing cycle descriptor */}
                  <span
                    id={`price-info-${tier.id}`}
                    className="font-sans text-[11px] text-white/45 mt-2 transition-all duration-300 min-h-[16px]"
                  >
                    --
                  </span>
                </div>

                {/* Features List */}
                <ul className="mt-6 space-y-3">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="mt-0.5 w-4.5 h-4.5 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-[#FF9932]">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="font-sans text-xs text-[#dddddd] leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Purchase Button */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <button
                  className={`w-full py-3 rounded text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center space-x-2 ${
                    tier.isPopular
                      ? 'bg-[#FF9932] text-[#172B36] hover:bg-white hover:text-[#172B36] glow-saffron'
                      : 'bg-white/10 text-white hover:bg-[#FF9932] hover:text-[#172B36] border border-white/15 hover:border-[#FF9932]/30'
                  }`}
                >
                  <span>Select Plan</span>
                </button>
                <div className="flex items-center justify-center space-x-1.5 mt-3 opacity-30">
                  <Info className="w-3 h-3" />
                  <span className="font-sans text-[9px]">Custom integrations require sandbox approval</span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
