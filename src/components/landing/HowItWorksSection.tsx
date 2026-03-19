const steps = [
  {
    num: 1,
    title: "We check what AI says about you",
    desc: "We ask ChatGPT, Perplexity, and other AI tools the exact questions your buyers are asking, and record what they say.",
  },
  {
    num: 2,
    title: "We show you the problem",
    desc: "You'll see exactly where AI is ignoring you, getting your facts wrong, or sending buyers to your competitor.",
  },
  {
    num: 3,
    title: "We fix your site",
    desc: "We add the pages, code, and content that AI tools need to understand your company and recommend you.",
  },
  {
    num: 4,
    title: "AI starts recommending you",
    desc: "When buyers ask AI who to hire, your company shows up — with accurate facts and a clear reason to choose you.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding px-7 bg-background">
      <div className="container-page">
        <div className="section-header section-header--center text-center mb-14">
          <div className="accent-line mx-auto mb-6 reveal below-fold" />
          <h2 className="display-lg text-foreground reveal below-fold reveal-delay-1">How it works</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line - desktop only */}
          <div className="hidden lg:block absolute top-[44px] left-[calc(12.5%+16px)] right-[calc(12.5%+16px)] h-px bg-gradient-to-r from-border via-primary to-border" />

          {steps.map((step, i) => (
            <div key={i} className={`reveal below-fold reveal-delay-${Math.min(i + 1, 6)} relative group`}>
              <div className="w-[52px] h-[52px] rounded-full bg-white border border-border flex items-center justify-center mb-6 relative z-[1] shadow-xs transition-colors duration-200 group-hover:bg-primary group-hover:border-primary">
                <span className="font-serif text-xl text-ink-3 transition-colors duration-200 group-hover:text-white">{step.num}</span>
              </div>
              <h4 className="text-base font-medium text-foreground mb-2.5 leading-snug">{step.title}</h4>
              <p className="text-[14.5px] text-ink-2 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
