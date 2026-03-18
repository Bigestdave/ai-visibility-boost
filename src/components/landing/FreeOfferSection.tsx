const snapshotItems = [
  {
    title: "Current AI description",
    desc: "How AI tools currently describe your product across major platforms",
    num: "01",
  },
  {
    title: "Competitor comparison",
    desc: "Which competitors show up most often and where they're winning",
    num: "02",
  },
  {
    title: "Visibility gaps",
    desc: "Key positioning gaps and missing content structures",
    num: "03",
  },
  {
    title: "Recommended next steps",
    desc: "What to fix first, with clear priority ordering",
    num: "04",
  },
  {
    title: "Missing pages",
    desc: "High-intent pages your site is missing that AI systems look for",
    num: "05",
  },
  {
    title: "Short, practical teardown",
    desc: "Focused on highest-impact improvements — not a 40-page report",
    num: "06",
  },
];

const FreeOfferSection = () => {
  return (
    <section className="section-padding px-7 section-alt">
      <div className="container-page">
        <div className="reveal below-fold max-w-[820px] mx-auto">
          {/* Header area */}
          <div className="mb-12 text-center">
            <span className="label-tag mb-4 inline-flex">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Free · No commitment
            </span>
            <h2 className="display-md text-foreground mt-5">Get a Free AI Visibility Snapshot</h2>
            <p className="text-lg-body mt-4 max-w-[560px] mx-auto">
              We'll run a quick review of how your company appears across AI search for commercial-intent queries and send you a focused teardown of where you stand.
            </p>
          </div>

          {/* Items as an editorial numbered list */}
          <div className="mb-12">
            {snapshotItems.map((item, i) => (
              <div
                key={i}
                className={`reveal below-fold reveal-delay-${Math.min(i + 1, 6)} group flex items-start gap-5 sm:gap-7 py-5 ${i < snapshotItems.length - 1 ? 'border-b border-border' : ''} ${i === 0 ? 'border-t border-border' : ''}`}
              >
                <span className="font-display text-[28px] sm:text-[32px] leading-none text-primary/20 group-hover:text-primary/50 transition-colors duration-300 pt-0.5 select-none tabular-nums">
                  {item.num}
                </span>
                <div>
                  <strong className="block text-[15px] font-medium text-foreground mb-1 group-hover:text-primary transition-colors duration-300">{item.title}</strong>
                  <span className="text-[14px] text-ink-2 leading-relaxed">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-4 text-center">
            <a
              href="#snapshot"
              className="inline-flex items-center justify-center gap-3 text-[15px] font-medium tracking-[-0.01em] rounded-lg px-8 py-[15px] bg-foreground text-white shadow-[0_1px_2px_rgba(0,0,0,.2),inset_0_1px_0_rgba(255,255,255,.08)] hover:bg-[#222220] hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(0,0,0,.18)] active:translate-y-0 transition-all duration-200"
            >
              Request Free Snapshot
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <p className="text-[13px] text-ink-3">
              ✦ No pitch call required. We review a limited number of companies each week to keep the analysis useful.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeOfferSection;
