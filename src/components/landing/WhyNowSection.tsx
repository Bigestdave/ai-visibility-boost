const stats = [
  { value: "68", accent: "%", desc: "of B2B buyers now ask AI tools for recommendations before contacting a company" },
  { value: "3", accent: "×", desc: "more likely to get hired if AI recommends you by name when a buyer asks" },
  { value: "1 ", accent: "in 3", desc: "deals now involve an AI search query before the buyer ever visits your website" },
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
              Every day you wait, AI sends another buyer to your competitor
            </h2>
            <p className="text-lg-body !text-white/60">
              Your buyers aren't Googling anymore. They're asking ChatGPT "who should I hire?" If your company isn't the answer, someone else is getting that call.
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
          This isn't about gaming AI. It's about making sure <strong className="text-white/90 font-medium">when buyers ask who to hire, your company is the answer.</strong>
        </div>

        <p className="reveal below-fold mt-4 text-xs text-white/30">
          *Figures are directional estimates based on observed buyer behavior trends
        </p>
      </div>
    </section>
  );
};

export default WhyNowSection;
