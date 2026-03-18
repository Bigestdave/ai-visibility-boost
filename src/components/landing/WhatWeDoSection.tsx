const items = [
  "Understand how ChatGPT, Perplexity, and AI tools describe your product today",
  "Identify where competitors are appearing more strongly in buyer queries",
  "Improve high-intent comparison, alternatives, and use-case pages",
  "Clarify product facts, use cases, and differentiation for AI retrieval",
  "Strengthen content structure AI systems use to surface your brand",
];

const platforms = [
  { name: "ChatGPT", dot: "#10a37f", badge: "Partial", level: 45 },
  { name: "Perplexity", dot: "#1c7ed6", badge: "Missing", level: 0 },
  { name: "Gemini", dot: "#8b5cf6", badge: "Weak", level: 20 },
  { name: "Claude", dot: "#0ea5e9", badge: "Missing", level: 0 },
  { name: "AI Overviews", dot: "#f59e0b", badge: "Partial", level: 40 },
];

const competitorPlatforms = [
  { name: "ChatGPT", dot: "#10a37f", badge: "Strong", level: 92 },
  { name: "Perplexity", dot: "#1c7ed6", badge: "Cited", level: 85 },
];

const badgeColor = (badge: string) => {
  if (badge === "Strong" || badge === "Cited") return "text-[#166534]";
  if (badge === "Partial" || badge === "Weak") return "text-[#92400E]";
  return "text-[#991B1B]";
};

const barColor = (badge: string) => {
  if (badge === "Strong" || badge === "Cited") return "#16A34A";
  if (badge === "Partial" || badge === "Weak") return "#F59E0B";
  return "#EF4444";
};

const WhatWeDoSection = () => {
  return (
    <section className="section-padding px-7 bg-background">
      <div className="container-page">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left copy */}
          <div className="max-w-[520px]">
            <div className="accent-line mb-6 reveal below-fold" />
            <h2 className="display-md text-foreground mb-6 reveal below-fold reveal-delay-1">
              We help B2B SaaS companies improve AI search visibility
            </h2>
            <p className="text-lg-body mb-6 reveal below-fold reveal-delay-2">
              Most SaaS websites are written for human visitors and traditional SEO. But AI systems prefer content that is clear, factual, structured, comparison-friendly, and easy to retrieve and cite.
            </p>
            <p className="text-lg-body mb-6 reveal below-fold reveal-delay-2">
              We identify the gaps between how your product is currently presented and what AI systems need to accurately surface and recommend your software during buyer research.
            </p>

            <div className="flex flex-col gap-3.5 reveal below-fold reveal-delay-3">
              {items.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-2.5 h-2.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[15px] text-ink-2 leading-[1.55]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visibility Dashboard */}
          <div className="reveal below-fold reveal-delay-4">
            <div className="relative rounded-[20px] overflow-hidden" style={{ background: 'linear-gradient(145deg, #0C0C10 0%, #1a1a22 100%)' }}>
              {/* Top bar - like a terminal/app window */}
              <div className="flex items-center gap-2 px-6 pt-5 pb-4">
                <span className="w-[7px] h-[7px] rounded-full bg-[#EF4444]/70" />
                <span className="w-[7px] h-[7px] rounded-full bg-[#F59E0B]/70" />
                <span className="w-[7px] h-[7px] rounded-full bg-[#22C55E]/70" />
                <span className="ml-auto text-[10px] tracking-[0.08em] uppercase text-white/25 font-medium">Live scan</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
              </div>

              <div className="px-6 pb-6">
                {/* Your brand */}
                <p className="text-[10px] font-medium tracking-[0.1em] uppercase text-white/30 mb-3">Your brand</p>
                <div className="space-y-[1px]">
                  {platforms.map((p, i) => (
                    <div key={i} className="flex items-center gap-3 py-[10px] group">
                      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: p.dot }} />
                      <span className="text-[13px] text-white/70 font-medium w-[100px] flex-shrink-0">{p.name}</span>
                      {/* Visibility bar */}
                      <div className="flex-1 h-[3px] rounded-full bg-white/[0.06] overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000"
                          style={{ width: `${p.level}%`, background: barColor(p.badge) }}
                        />
                      </div>
                      <span className={`text-[11px] font-medium w-[52px] text-right ${badgeColor(p.badge).replace('text-', 'text-').replace('#166534', 'white/50').replace('#92400E', '[#F59E0B]').replace('#991B1B', '[#EF4444]/70')}`}
                        style={{ color: barColor(p.badge) }}
                      >
                        {p.badge}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-white/[0.06] my-4" />

                {/* Competitor */}
                <p className="text-[10px] font-medium tracking-[0.1em] uppercase text-white/30 mb-3">Your competitor</p>
                <div className="space-y-[1px]">
                  {competitorPlatforms.map((p, i) => (
                    <div key={i} className="flex items-center gap-3 py-[10px]">
                      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: p.dot }} />
                      <span className="text-[13px] text-white/70 font-medium w-[100px] flex-shrink-0">{p.name}</span>
                      <div className="flex-1 h-[3px] rounded-full bg-white/[0.06] overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{ width: `${p.level}%`, background: '#22C55E' }}
                        />
                      </div>
                      <span className="text-[11px] font-medium w-[52px] text-right text-[#22C55E]">{p.badge}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom note */}
              <div className="px-6 py-3 border-t border-white/[0.05] bg-white/[0.02]">
                <p className="text-[11px] text-white/25 italic">Example snapshot output — your results may vary</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
