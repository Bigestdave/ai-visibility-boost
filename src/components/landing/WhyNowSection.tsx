const stats = [
  { value: "68", accent: "%", desc: "of B2B buyers use AI tools during the research phase of a purchase decision" },
  { value: "3", accent: "×", desc: "more likely to shortlist brands that appear clearly in AI-generated comparisons" },
  { value: "1 ", accent: "in 3", desc: "SaaS evaluations now involve at least one AI search query before a demo is booked" },
];

const WhyNowSection = () => {
  return (
    <section className="section-padding px-7 section-dark">
      <div className="container-page">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left copy */}
          <div className="reveal below-fold">
            <div className="w-10 h-[2px] bg-primary/40 mb-6" />
            <h2 className="display-md text-white mb-6">
              The buyer journey is shifting to AI
            </h2>
            <p className="text-lg-body !text-white/60">
              More prospects are skipping traditional search and asking AI tools direct buying questions. Your web presence now influences how your product is summarized, compared, and recommended.
            </p>
          </div>

          {/* Right stats */}
          <div className="reveal below-fold reveal-delay-2 flex flex-col gap-0.5">
            {stats.map((stat, i) => (
              <div key={i} className={`py-7 border-b border-white/[0.07] ${i === 0 ? "border-t border-t-white/[0.07] pt-0" : ""}`}>
                <p className="font-serif text-[44px] text-white leading-none tracking-[-0.025em] mb-1.5">
                  {stat.value}<span className="text-primary">{stat.accent}</span>
                </p>
                <p className="text-sm text-white/45 leading-relaxed">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing card */}
        <div className="reveal below-fold mt-9 p-6 border border-white/[0.08] rounded-[var(--radius-lg)] bg-white/[0.03] text-[15px] text-white/55 leading-[1.7] max-w-full">
          This isn't about gaming AI. It's about making sure your company is <strong className="text-white/90 font-medium">clearly represented where modern buying decisions happen.</strong>
        </div>

        <p className="reveal below-fold mt-4 text-xs text-white/30">
          *Figures are directional estimates based on observed buyer behavior trends
        </p>
      </div>
    </section>
  );
};

export default WhyNowSection;
