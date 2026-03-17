const snapshotItems = [
  {
    title: "Current AI description",
    desc: "How AI tools currently describe your product across major platforms",
    icon: (
      <svg className="w-[15px] h-[15px] text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "Competitor comparison",
    desc: "Which competitors show up most often and where they're winning",
    icon: (
      <svg className="w-[15px] h-[15px] text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Visibility gaps",
    desc: "Key positioning gaps and missing content structures",
    icon: (
      <svg className="w-[15px] h-[15px] text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: "Recommended next steps",
    desc: "What to fix first, with clear priority ordering",
    icon: (
      <svg className="w-[15px] h-[15px] text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    ),
  },
  {
    title: "Missing pages",
    desc: "High-intent pages your site is missing that AI systems look for",
    icon: (
      <svg className="w-[15px] h-[15px] text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Short, practical teardown",
    desc: "Focused on highest-impact improvements — not a 40-page report",
    icon: (
      <svg className="w-[15px] h-[15px] text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const FreeOfferSection = () => {
  return (
    <section className="section-padding px-7 section-alt">
      <div className="container-page">
        <div className="reveal below-fold bg-white border border-border rounded-2xl p-8 sm:p-[52px] max-w-[820px] mx-auto shadow-md relative overflow-hidden">
          {/* Top gradient line */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary to-[#7c3aed]" />

          <div className="mb-9">
            <span className="label-tag mb-4 inline-flex">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Free · No commitment
            </span>
            <h2 className="display-md text-foreground mt-4">Get a Free AI Visibility Snapshot</h2>
            <p className="text-lg-body mt-4 max-w-[560px]">
              We'll run a quick review of how your company appears across AI search for commercial-intent queries and send you a focused teardown of where you stand.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-10">
            {snapshotItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-background border border-border rounded-lg">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <strong className="block text-sm font-medium text-foreground mb-0.5">{item.title}</strong>
                  <span className="text-sm text-ink-2 leading-relaxed">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-start gap-3">
            <a
              href="#snapshot"
              className="inline-flex items-center justify-center gap-2 text-[15px] font-medium tracking-[-0.01em] rounded-lg px-7 py-[15px] bg-foreground text-white shadow-[0_1px_2px_rgba(0,0,0,.2),inset_0_1px_0_rgba(255,255,255,.08)] hover:bg-[#222220] hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(0,0,0,.18)] active:translate-y-0 transition-all duration-200"
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
