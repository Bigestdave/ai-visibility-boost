const items = [
  "Understand how ChatGPT, Perplexity, and AI tools describe your product today",
  "Identify where competitors are appearing more strongly in buyer queries",
  "Improve high-intent comparison, alternatives, and use-case pages",
  "Clarify product facts, use cases, and differentiation for AI retrieval",
  "Strengthen content structure AI systems use to surface your brand",
];

const platforms = [
  { name: "ChatGPT", dot: "bg-[#10a37f]", badge: "Partial", badgeClass: "bg-[#FEF9C3] text-[#92400E]" },
  { name: "Perplexity", dot: "bg-[#1c7ed6]", badge: "Missing", badgeClass: "bg-[#FEE2E2] text-[#991B1B]" },
  { name: "Gemini", dot: "bg-[#8b5cf6]", badge: "Weak", badgeClass: "bg-[#FEF9C3] text-[#92400E]" },
  { name: "Claude", dot: "bg-[#0ea5e9]", badge: "Missing", badgeClass: "bg-[#FEE2E2] text-[#991B1B]" },
  { name: "AI Overviews", dot: "bg-[#f59e0b]", badge: "Partial", badgeClass: "bg-[#FEF9C3] text-[#92400E]" },
];

const competitorPlatforms = [
  { name: "ChatGPT", dot: "bg-[#10a37f]", badge: "Strong", badgeClass: "bg-[#DCFCE7] text-[#166534]" },
  { name: "Perplexity", dot: "bg-[#1c7ed6]", badge: "Cited", badgeClass: "bg-[#DCFCE7] text-[#166534]" },
];

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

          {/* Right card - AI visibility check */}
          <div className="reveal below-fold reveal-delay-4 bg-white border border-border rounded-2xl p-8 shadow-xs">
            <p className="text-xs font-medium tracking-[0.07em] uppercase text-ink-3 mb-5">Live AI visibility check</p>

            <div className="flex flex-col gap-3">
              {platforms.map((p, i) => (
                <div key={i} className="flex items-center justify-between gap-3 p-3 px-4 border border-border rounded-lg bg-background">
                  <div className="flex items-center gap-2.5">
                    <span className={`w-2.5 h-2.5 rounded-full ${p.dot}`} />
                    <span className="text-sm font-medium text-foreground">{p.name}</span>
                  </div>
                  <span className={`text-[11px] font-medium py-[3px] px-2 rounded-full ${p.badgeClass}`}>{p.badge}</span>
                </div>
              ))}
            </div>

            {/* Competitor section */}
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-xs font-medium tracking-[0.05em] uppercase text-ink-3 mb-3">Your competitor</p>
              <div className="flex flex-col gap-3">
                {competitorPlatforms.map((p, i) => (
                  <div key={i} className="flex items-center justify-between gap-3 p-3 px-4 border border-border rounded-lg bg-background">
                    <div className="flex items-center gap-2.5">
                      <span className={`w-2.5 h-2.5 rounded-full ${p.dot}`} />
                      <span className="text-sm font-medium text-foreground">{p.name}</span>
                    </div>
                    <span className={`text-[11px] font-medium py-[3px] px-2 rounded-full ${p.badgeClass}`}>{p.badge}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-5 text-xs text-ink-3">Example snapshot output — your results may vary</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
