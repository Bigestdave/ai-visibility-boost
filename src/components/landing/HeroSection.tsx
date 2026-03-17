const queryCards = [
  { query: '"What\'s the best CRM for outbound sales teams?"', source: "ChatGPT · 3 competitors cited", dotClass: "bg-[#10a37f]" },
  { query: '"Acme vs Rival — which is better for enterprise?"', source: "Perplexity · Your brand missing", dotClass: "bg-[#1c7ed6]" },
  { query: '"Best alternatives to Acme for small teams?"', source: "Gemini · 4 alternatives listed", dotClass: "bg-[#8b5cf6]" },
];

const aiTools = [
  { name: "ChatGPT", desc: "AI search queries" },
  { name: "Perplexity", desc: "Cited answers" },
  { name: "Gemini", desc: "Product comparisons" },
  { name: "Claude", desc: "Buyer research" },
  { name: "AI Overview", desc: "Google AI results" },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden min-h-[92vh] flex items-center bg-background pt-[140px] pb-[100px] px-7 sm:px-7">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          backgroundPosition: "-1px -1px",
        }}
      />

      {/* Top glow */}
      <div
        className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none z-0"
        style={{ background: "radial-gradient(ellipse at center, rgba(36,82,232,.07) 0%, transparent 70%)" }}
      />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-b from-transparent to-background pointer-events-none z-0" />

      <div className="relative z-[2] w-full max-w-[1080px] mx-auto">
        {/* Eyebrow */}
        <div className="reveal flex items-center gap-2.5 mb-8">
          <span className="w-[7px] h-[7px] rounded-full bg-primary" style={{ animation: "pulse-dot 2.4s ease infinite" }} />
          <span className="text-[13px] font-medium text-ink-3 tracking-[0.03em]">New category · AI Search Optimization</span>
        </div>

        {/* Headline */}
        <h1 className="reveal reveal-delay-1 display-xl max-w-[820px] mb-7 text-foreground">
          Your buyers are asking{" "}
          <br className="hidden sm:block" />
          <em className="italic text-primary">AI</em> about your software.
        </h1>

        {/* Sub */}
        <p className="reveal reveal-delay-2 max-w-[580px] text-lg-body mb-[42px]">
          We help B2B SaaS companies improve how they appear in ChatGPT, Perplexity, and AI search — by fixing the pages, facts, and content structures AI systems rely on during software evaluation.
        </p>

        {/* CTAs */}
        <div className="reveal reveal-delay-3 flex flex-wrap items-center gap-3 mb-6">
          <a
            href="#snapshot"
            className="inline-flex items-center justify-center gap-2 text-[15px] font-medium tracking-[-0.01em] rounded-lg px-7 py-[15px] bg-foreground text-white shadow-[0_1px_2px_rgba(0,0,0,.2),inset_0_1px_0_rgba(255,255,255,.08)] hover:bg-[#222220] hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(0,0,0,.18)] active:translate-y-0 transition-all duration-200"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="6" />
              <circle cx="12" cy="12" r="2" />
            </svg>
            Get My Free AI Visibility Snapshot
          </a>
          <a
            href="#snapshot"
            className="inline-flex items-center justify-center gap-2 text-[15px] font-medium tracking-[-0.01em] rounded-lg px-[22px] py-3 bg-transparent text-ink-2 border border-border hover:border-ink-3 hover:text-foreground hover:bg-[hsl(var(--bg-alt))] transition-all duration-200"
          >
            Book a Call
          </a>
        </div>

        {/* Trust */}
        <div className="reveal reveal-delay-4 flex items-center gap-2.5 text-[13px] text-ink-3">
          <svg className="w-4 h-4 text-success flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span>See how AI tools describe your company, where competitors are winning, and what to fix first.</span>
        </div>

        {/* Floating query cards - desktop only */}
        <div className="hidden xl:block absolute right-[-20px] top-1/2 -translate-y-[46%] w-[360px]">
          {queryCards.map((card, i) => (
            <div
              key={i}
              className="bg-white border border-border rounded-xl p-[14px_18px] shadow-sm text-[13.5px] text-ink-2 leading-relaxed relative"
              style={{
                marginTop: i > 0 ? "12px" : 0,
                animation: `float${i + 1} ${4 + i * 0.4}s ease-in-out infinite`,
                animationDelay: `${i * 0.6}s`,
              }}
            >
              <p className="text-[11px] font-medium tracking-[0.05em] uppercase text-ink-3 mb-1.5">Buyer query</p>
              <p className="font-medium text-foreground">{card.query}</p>
              <div className="inline-flex items-center gap-[5px] mt-2 text-[11.5px] text-ink-3">
                <span className={`w-2 h-2 rounded-sm flex-shrink-0 ${card.dotClass}`} />
                {card.source}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
